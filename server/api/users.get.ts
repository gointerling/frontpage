export default defineEventHandler(() => {
  return {
    status: 'success',
    data: {
      users: {
        data: [
          {
            id: '9126b5aa-709f-4506-98df-5ad11117f91f',
            fullname: 'Admien Gointerling',
            email: 'admin@gointerling.com',
            phone: '081234567890',
            address: 'Yogyakarta',
            photo: null,
            is_admin: 1,
            status: 'active'
          },
          {
            id: '15f8e39a-9aec-4483-85ba-406603bf9f61',
            fullname: 'Roy Pardede',
            email: 'royadmin@gmail.com',
            phone: '+62 821-3719-2446',
            address: 'Sleman, Yogyakarta',
            photo: null,
            is_admin: 0,
            status: 'active'
          },
          {
            id: '02676e52-8203-4818-a3a7-f2ac4cc5b688',
            fullname: 'John Snow',
            email: 'johnsnow@example.com',
            phone: '085712345678',
            address: 'Yogyakarta',
            photo: null,
            is_admin: 0,
            status: 'active'
          }
        ],
        current_page: 1,
        last_page: 1,
        total: 3,
        per_page: 10
      }
    }
  }
})

