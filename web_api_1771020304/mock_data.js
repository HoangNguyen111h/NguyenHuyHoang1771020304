// Mock data cho test khi không có database

const mockMenuItems = [
  {
    id: 1,
    name: 'Gỏi Cuốn Tôm Thịt',
    description: 'Gỏi cuốn tươi với tôm và thịt heo, rau sống',
    category: 'Appetizer',
    price: 45000,
    image_url: 'https://example.com/goi-cuon.jpg',
    preparation_time: 10,
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    rating: 4.5,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: 'Chả Giò Rế',
    description: 'Chả giò giòn rụm với nhân thịt và rau củ',
    category: 'Appetizer',
    price: 35000,
    image_url: 'https://example.com/cha-gio.jpg',
    preparation_time: 15,
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    rating: 4.2,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    name: 'Salad Rau Củ',
    description: 'Salad tươi mát với rau củ hữu cơ',
    category: 'Appetizer',
    price: 30000,
    image_url: 'https://example.com/salad.jpg',
    preparation_time: 5,
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    rating: 4.0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 4,
    name: 'Phở Bò Tái',
    description: 'Phở bò tái truyền thống với nước dùng đậm đà',
    category: 'Main Course',
    price: 65000,
    image_url: 'https://example.com/pho-bo.jpg',
    preparation_time: 25,
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    rating: 4.7,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 5,
    name: 'Bún Chả Hà Nội',
    description: 'Bún chả thơm ngon với thịt nướng',
    category: 'Main Course',
    price: 55000,
    image_url: 'https://example.com/bun-cha.jpg',
    preparation_time: 20,
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    rating: 4.4,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 6,
    name: 'Cơm Tấm Sườn Nướng',
    description: 'Cơm tấm với sườn nướng thơm lừng',
    category: 'Main Course',
    price: 70000,
    image_url: 'https://example.com/com-tam.jpg',
    preparation_time: 30,
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    rating: 4.6,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 7,
    name: 'Cà Phê Sữa Đá',
    description: 'Cà phê sữa đá truyền thống Việt Nam',
    category: 'Beverage',
    price: 25000,
    image_url: 'https://example.com/ca-phe-sua.jpg',
    preparation_time: 5,
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    rating: 4.3,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 8,
    name: 'Trà Đá',
    description: 'Trà đá mát lạnh',
    category: 'Beverage',
    price: 10000,
    image_url: 'https://example.com/tra-da.jpg',
    preparation_time: 2,
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    rating: 4.0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 9,
    name: 'Chè Ba Màu',
    description: 'Chè ba màu mát lạnh truyền thống',
    category: 'Dessert',
    price: 25000,
    image_url: 'https://example.com/che-ba-mau.jpg',
    preparation_time: 10,
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    rating: 4.1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 10,
    name: 'Bánh Flan',
    description: 'Bánh flan mềm mịn',
    category: 'Dessert',
    price: 30000,
    image_url: 'https://example.com/banh-flan.jpg',
    preparation_time: 5,
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    rating: 4.3,
    created_at: new Date(),
    updated_at: new Date()
  }
];

const mockUsers = [
  {
    id: 1,
    email: 'john.doe@email.com',
    password: '$2a$10$POcuRhE211VMvGNAqxzO/.v6qZ4dGH6zCy.QrSgPfWt3gD2GlscVq', // 123456
    full_name: 'John Doe',
    phone_number: '0901234567',
    address: '123 Nguyễn Huệ, Q1, TP.HCM',
    loyalty_points: 150,
    is_active: true,
    created_at: new Date()
  }
];

module.exports = {
  mockMenuItems,
  mockUsers
};