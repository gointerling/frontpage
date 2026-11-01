export interface MockUser {
  id: string
  fullname: string
  email: string
  phone: string
  address: string
  personal_description: string
  photo: string | null
  is_admin: number
  is_facilitator: boolean
  status: string
  merchant_status: string | null
  is_first_time: number
  main_skills: string
  additional_skills: string
  password?: string
}

export const mockUsers: MockUser[] = [
  {
    id: '9126b5aa-709f-4506-98df-5ad11117f91f',
    fullname: 'Admien Gointerling',
    email: 'admin@gointerling.com',
    phone: '081234567890',
    address: 'Yogyakarta, Indonesia',
    personal_description: 'System Administrator for Gointerling Platform',
    photo: null,
    is_admin: 1,
    is_facilitator: false,
    status: 'active',
    merchant_status: null,
    is_first_time: 0,
    main_skills: '[]',
    additional_skills: '[]',
    password: 'password'
  },
  {
    id: '15f8e39a-9aec-4483-85ba-406603bf9f61',
    fullname: 'Roy Pardede',
    email: 'royadmin@gmail.com',
    phone: '+62 821-3719-2446',
    address: 'Sleman, D.I. Yogyakarta',
    personal_description: 'Certified English-Indonesian Simultaneous Interpreter & Translator with 5+ years experience.',
    photo: null,
    is_admin: 0,
    is_facilitator: true,
    status: 'active',
    merchant_status: 'verified',
    is_first_time: 0,
    main_skills: JSON.stringify([{ id: 'fefd0b67-90e3-4a1a-aef6-dd86ba323cc3', name: 'Interpreting' }]),
    additional_skills: '[]',
    password: 'password'
  },
  {
    id: '02676e52-8203-4818-a3a7-f2ac4cc5b688',
    fullname: 'John Snow',
    email: 'johnsnow@example.com',
    phone: '085712345678',
    address: 'Yogyakarta',
    personal_description: 'Freelance client looking for translation services.',
    photo: null,
    is_admin: 0,
    is_facilitator: false,
    status: 'active',
    merchant_status: null,
    is_first_time: 0,
    main_skills: '[]',
    additional_skills: '[]',
    password: 'password'
  }
]

export function findUserByEmail(email: string): MockUser | undefined {
  return mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase())
}

export function createOrUpdateUser(userData: Partial<MockUser> & { email: string }): MockUser {
  const existingIndex = mockUsers.findIndex(u => u.email.toLowerCase() === userData.email.toLowerCase())
  if (existingIndex >= 0) {
    mockUsers[existingIndex] = { ...mockUsers[existingIndex], ...userData }
    return mockUsers[existingIndex]
  }

  const newUser: MockUser = {
    id: 'usr-' + Math.random().toString(36).substring(2, 10),
    fullname: userData.fullname || userData.email.split('@')[0],
    email: userData.email,
    phone: userData.phone || '081234567890',
    address: userData.address || 'Yogyakarta, Indonesia',
    personal_description: userData.personal_description || 'Gointerling User',
    photo: userData.photo || null,
    is_admin: userData.is_admin ?? (userData.email.toLowerCase().includes('admin') ? 1 : 0),
    is_facilitator: userData.is_facilitator ?? false,
    status: 'active',
    merchant_status: userData.merchant_status || (userData.is_facilitator ? 'verified' : null),
    is_first_time: 0,
    main_skills: userData.main_skills || '[]',
    additional_skills: userData.additional_skills || '[]',
    password: userData.password || 'password'
  }

  mockUsers.push(newUser)
  return newUser
}

