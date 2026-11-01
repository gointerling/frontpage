export default defineEventHandler(async (event) => {
  const body = await readBody(event) || {}
  const { fullname, email, password, as } = body

  if (!email || !password || !fullname) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Validation error',
      data: {
        error: {
          email: !email ? ['Email is required'] : [],
          password: !password ? ['Password is required'] : [],
          fullname: !fullname ? ['Full name is required'] : []
        }
      }
    })
  }

  const isFacilitator = as === 'facilitator'
  const user = createOrUpdateUser({
    email,
    fullname,
    password,
    is_facilitator: isFacilitator,
    merchant_status: isFacilitator ? 'verified' : null,
    is_admin: email.toLowerCase().includes('admin') ? 1 : 0
  })

  const { password: _, ...safeUser } = user

  return {
    status: 'success',
    message: 'Registration successful',
    data: {
      token: 'local-jwt-token-' + Math.random().toString(36).substring(2),
      user: safeUser
    }
  }
})

