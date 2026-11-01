export default defineEventHandler((event) => {
  const authHeader = getHeader(event, 'authorization')
  const user = mockUsers[0]
  const { password: _, ...safeUser } = user

  return {
    status: 'success',
    data: safeUser
  }
})

