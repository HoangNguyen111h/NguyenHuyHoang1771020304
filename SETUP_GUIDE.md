# Hướng dẫn cài đặt dự án - Mã sinh viên: 1771020311

## Tổng quan dự án
Dự án bao gồm:
1. **RESTful API** (`web_api_1771020311`) - Hệ thống đặt bàn nhà hàng
2. **Flutter App** (`flutter_app_1771020311`) - Ứng dụng mobile cho khách hàng
3. **Database** (`db_exam_1771020311`) - Cơ sở dữ liệu MySQL với 5 bảng chính

## Database Schema Mới
- **customers**: Khách hàng với loyalty points và authentication
- **menu_items**: Menu với 5 danh mục (Appetizer, Main Course, Dessert, Beverage, Soup)
- **reservations**: Đặt bàn với payment processing
- **reservation_items**: Chi tiết món ăn trong đặt bàn
- **tables**: Quản lý bàn với capacity và availability

## Bước 1: Cài đặt Database

### 1.1 Tạo database MySQL
```sql
CREATE DATABASE db_exam_1771020311;
```

### 1.2 Import schema mới
```bash
mysql -u root -p db_exam_1771020311 < web_api_1771020311/database/schema.sql
```

**Lưu ý**: Schema mới bao gồm:
- Triggers tự động tính service charge và total
- Indexes để tối ưu performance
- Dữ liệu mẫu đầy đủ cho test

## Bước 2: Cài đặt và chạy API Server

### 2.1 Cài đặt Node.js dependencies
```bash
cd web_api_1771020311
npm install
```

### 2.2 Cấu hình database
Chỉnh sửa file `.env`:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=db_exam_1771020311
JWT_SECRET=your_jwt_secret_key_here
```

### 2.3 Chạy server
```bash
npm run dev
```
Server sẽ chạy tại: http://localhost:3000

### 2.4 Test API mới
- **API Docs**: http://localhost:3000/api/docs
- **Menu Items**: http://localhost:3000/api/menu-items
- **Customers**: http://localhost:3000/api/customers
- **Reservations**: http://localhost:3000/api/reservations
- **Tables**: http://localhost:3000/api/tables

## Bước 3: Cài đặt và chạy Flutter App

### 3.1 Cài đặt Flutter dependencies
```bash
cd flutter_app_1771020311
flutter pub get
```

### 3.2 Chạy app
```bash
flutter run
```

**Lưu ý**: Flutter app hiện tại vẫn sử dụng API cũ. Cần cập nhật để sử dụng endpoints mới.

## API Endpoints mới để test

### Customers
```bash
# Đăng ký khách hàng
POST http://localhost:3000/api/customers/register
{
  "email": "test@example.com",
  "password": "123456",
  "full_name": "Test User",
  "phone_number": "0901234567"
}

# Đăng nhập
POST http://localhost:3000/api/customers/login
{
  "email": "test@example.com",
  "password": "123456"
}
```

### Menu Items
```bash
# Lấy menu theo danh mục
GET http://localhost:3000/api/menu-items/category/Main%20Course

# Lấy menu với filter
GET http://localhost:3000/api/menu-items?is_vegetarian=true&is_available=true
```

### Reservations
```bash
# Tạo đặt bàn
POST http://localhost:3000/api/reservations
{
  "customer_id": 1,
  "reservation_date": "2025-01-20 19:00:00",
  "number_of_guests": 4,
  "special_requests": "Không cay",
  "items": [
    {
      "menu_item_id": 6,
      "quantity": 2,
      "price": 65000
    }
  ]
}

# Xác nhận đặt bàn
PATCH http://localhost:3000/api/reservations/1/status
{
  "status": "confirmed",
  "table_number": "T03"
}
```

### Tables
```bash
# Tìm bàn trống
GET http://localhost:3000/api/tables/available?date=2025-01-20&time=19:00:00&guests=4
```

## Tính năng mới

### 1. Loyalty Points System
- Khách hàng tích 1% giá trị bill thành loyalty points
- Dùng points để giảm giá đặt bàn tiếp theo

### 2. Service Charge
- Tự động tính 10% phí phục vụ
- Total = Subtotal + Service Charge - Discount

### 3. Table Management
- Kiểm tra bàn trống theo thời gian
- Quản lý capacity và availability

### 4. Menu Categories
- 5 danh mục: Appetizer, Main Course, Dessert, Beverage, Soup
- Filter theo vegetarian, spicy, available
- Rating system cho món ăn

## Troubleshooting

### Lỗi database schema:
```bash
# Xóa database cũ và tạo lại
DROP DATABASE db_exam_1771020311;
CREATE DATABASE db_exam_1771020311;
# Import lại schema mới
```

### Lỗi bcryptjs:
```bash
npm install bcryptjs
```

### Test với Postman:
- Import collection từ http://localhost:3000/api/docs
- Sử dụng sample data có sẵn trong database

## Cấu trúc thư mục mới
```
├── web_api_1771020311/          # RESTful API
│   ├── config/                  # Database config
│   ├── routes/                  # API routes (mới)
│   │   ├── customers.js         # Customer management
│   │   ├── menu_items.js        # Menu management
│   │   ├── reservations.js      # Reservation system
│   │   └── tables.js            # Table management
│   ├── database/               # SQL schema (cập nhật)
│   └── server.js               # Main server (cập nhật)
├── flutter_app_1771020311/     # Flutter App
└── SETUP_GUIDE.md              # This file
```