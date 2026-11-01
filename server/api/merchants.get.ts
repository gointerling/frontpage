export default defineEventHandler(() => {
  return {
    status: 'success',
    data: {
      data: [
        {
          id: '15f8e39a-9aec-4483-85ba-406603bf9f61',
          fullname: 'Roy Pardede',
          email: 'royadmin@gmail.com',
          phone: '082137192446',
          photo: null,
          merchants: [
            {
              type: 'interpreter',
              bank: 'BCA',
              bank_account: '1234567890',
              cv_url: null,
              portfolios: '[]',
              subscription_packages: [
                {
                  name: 'Standard Package',
                  duration: 30,
                  pivot: {
                    is_valid: true,
                    is_trial: false,
                    valid_until: '2027-12-31'
                  }
                }
              ]
            }
          ]
        }
      ],
      current_page: 1,
      last_page: 1,
      total: 1,
      per_page: 10
    }
  }
})

