export default defineEventHandler(async (event) => {
  const body = await readBody(event) || {}
  const { as } = body

  const user = createOrUpdateUser({
    email: 'google.user@example.com',
    fullname: 'Google User',
    is_facilitator: as === 'facilitator',
    merchant_status: as === 'facilitator' ? 'verified' : null,
    is_admin: 0
  })

  const { password: _, ...safeUser } = user

  return {
    status: 'success',
    message: 'Google login successful',
    data: {
      token: 'local-google-token-' + Math.random().toString(36).substring(2),
      user: safeUser
    }
  }
})

