export default defineEventHandler(() => {
  return {
    status: 'success',
    data: {
      notifications: {
        data: [],
        total: 0
      }
    }
  }
})

