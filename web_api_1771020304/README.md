# Restaurant Reservation System API - Mã sinh viên: 1771020311

## Mô tả dự án
RESTful API cho hệ thống đặt bàn nhà hàng với database `db_exam_1771020311`.

## Tính năng chính
- 👥 Quản lý khách hàng (đăng ký, đăng nhập, loyalty points)
- 🍽️ Quản lý menu với 5 danh mục (Appetizer, Main Course, Dessert, Beverage, Soup)
- 📅 Hệ thống đặt bàn với quản lý trạng thái
- 🪑 Quản lý bàn và kiểm tra bàn trống
- 💳 Xử lý thanh toán và tích điểm thành viên
- 📊 Thống kê và báo cáo

## Cài đặt và chạy

### 1. Cài đặt dependencies
```bash
cd web_api_1771020311
npm install
```

### 2. Cấu hình database
- Tạo database MySQL với tên: `db_exam_1771020311`
- Import file `database/schema.sql` vào database
- Cập nhật thông tin kết nối trong file `.env`

### 3. Chạy server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server sẽ chạy tại: http://localhost:3000

## API Endpoints

### 📖 Documentation
- `GET /` - API overview
- `GET /api/docs` - Detailed API documentation
- `GET /health` - Health check

### 👥 Customers (Khách hàng)
- `GET /api/customers` - Lấy tất cả khách hàng
- `GET /api/customers/:id` - Lấy khách hàng theo ID
- `POST /api/customers/register` - Đăng ký khách hàng mới
- `POST /api/customers/login` - Đăng nhập
- `PUT /api/customers/:id` - Cập nhật thông tin khách hàng
- `PATCH /api/customers/:id/loyalty-points` - Cập nhật điểm thành viên

### 🍽️ Menu Items (Món ăn)
- `GET /api/menu-items` - Lấy tất cả món ăn (có filter)
- `GET /api/menu-items/category/:category` - Lấy món theo danh mục
- `GET /api/menu-items/:id` - Lấy món ăn theo ID
- `POST /api/menu-items` - Tạo món ăn mới
- `PUT /api/menu-items/:id` - Cập nhật món ăn
- `PATCH /api/menu-items/:id/rating` - Cập nhật đánh giá
- `GET /api/menu-items/stats/by-category` - Thống kê theo danh mục

### 📅 Reservations (Đặt bàn)
- `GET /api/reservations` - Lấy tất cả đặt bàn (có filter)
- `GET /api/reservations/:id` - Lấy chi tiết đặt bàn
- `POST /api/reservations` - Tạo đặt bàn mới
- `PATCH /api/reservations/:id/status` - Cập nhật trạng thái
- `PATCH /api/reservations/:id/payment` - Cập nhật thanh toán
- `POST /api/reservations/:id/items` - Thêm món vào đặt bàn
- `GET /api/reservations/stats/summary` - Thống kê đặt bàn

### 🪑 Tables (Bàn)
- `GET /api/tables` - Lấy tất cả bàn
- `GET /api/tables/available` - Lấy bàn trống theo thời gian
- `GET /api/tables/:id` - Lấy bàn theo ID
- `POST /api/tables` - Tạo bàn mới
- `PUT /api/tables/:id` - Cập nhật bàn
- `PATCH /api/tables/:id/availability` - Cập nhật trạng thái bàn
- `DELETE /api/tables/:id` - Xóa bàn
- `GET /api/tables/stats/summary` - Thống kê bàn

## Database Schema

### Bảng customers
- Thông tin khách hàng, mật khẩu mã hóa, điểm thành viên

### Bảng menu_items  
- Menu với 5 danh mục, thông tin dinh dưỡng, đánh giá

### Bảng reservations
- Đặt bàn với mã tự sinh, trạng thái, thanh toán

### Bảng reservation_items
- Chi tiết món ăn trong mỗi đặt bàn

### Bảng tables
- Quản lý bàn với sức chứa và trạng thái

## Quy trình đặt bàn

1. **Tạo đặt bàn**: `POST /api/reservations` với status = "pending"
2. **Xác nhận**: `PATCH /api/reservations/:id/status` với status = "confirmed" + phân bàn
3. **Nhận bàn**: status = "seated"
4. **Hoàn thành**: status = "completed"
5. **Thanh toán**: `PATCH /api/reservations/:id/payment` - tự động tích điểm 1% tổng bill

## Tính năng nâng cao

- **Loyalty Points**: Tích 1% giá trị bill, dùng để giảm giá
- **Service Charge**: Tự động tính 10% subtotal
- **Table Management**: Kiểm tra bàn trống theo thời gian
- **Menu Filters**: Lọc theo danh mục, chay, cay, có sẵn
- **Statistics**: Báo cáo doanh thu, thống kê đặt bàn

## Công nghệ sử dụng
- Node.js + Express.js
- MySQL với triggers và indexes
- bcryptjs cho mã hóa mật khẩu
- CORS
- JWT Authentication (ready)