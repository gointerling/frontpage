export default defineEventHandler(async (event) => {
  const body = await readBody(event) || {}
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Email and password are required',
      data: { error: 'Email and password are required' }
    })
  }

  let user = findUserByEmail(email)

  // In local development, if user exists check password or allow 'password'/'admin123'
  if (user && user.password && user.password !== password && password !== 'password' && password !== 'admin123') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
      data: { error: 'Invalid email or password' }
    })
  }

  // If user does not exist in mock list, auto-create it for smooth local development
  if (!user) {
    user = createOrUpdateUser({
      email,
      fullname: email.split('@')[0],
      password,
      is_admin: email.toLowerCase().includes('admin') ? 1 : 0
    })
  }

  const { password: _, ...safeUser } = user

  return {
    status: 'success',
    message: 'Login successful',
    data: {
      token: 'local-jwt-token-' + Math.random().toString(36).substring(2),
      user: safeUser
    }
  }
})

