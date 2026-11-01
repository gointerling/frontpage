export default defineEventHandler(() => {
  return {
    status: 'success',
    data: {
      services: {
        data: [
          {
            id: 'srv-1',
            name: 'Dokumen Resmi & Akta (English to Indonesian)',
            description: 'Penerjemahan tersumpah untuk dokumen hukum, ijazah, dan kontrak bisnis.',
            type: 'translator',
            price: 75000,
            merchant: {
              id: 'mer-1',
              fullname: 'Roy Pardede',
              photo: null,
              rating: 4.9,
              total_reviews: 24,
              user: {
                fullname: 'Roy Pardede',
                photo: null
              }
            }
          },
          {
            id: 'srv-2',
            name: 'Simultaneous Conference Interpreting (English - Japanese)',
            description: 'Layanan interpreter simultan untuk konferensi internasional dan webinar bisnis.',
            type: 'interpreter',
            price: 500000,
            merchant: {
              id: 'mer-2',
              fullname: 'Sir George',
              photo: null,
              rating: 5.0,
              total_reviews: 18,
              user: {
                fullname: 'Sir George',
                photo: null
              }
            }
          }
        ],
        current_page: 1,
        last_page: 1,
        total: 2,
        per_page: 10
      }
    }
  }
})

