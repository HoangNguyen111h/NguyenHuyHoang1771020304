# Restaurant App - Mã sinh viên: 1771020304

Ứng dụng Flutter cho hệ thống nhà hàng với các tính năng đăng nhập và xem menu.

## Tính năng

### 🔐 **Authentication (5 điểm)**
- **Màn hình đăng nhập** với form validation
- **API Integration** với `/api/auth/login`
- **Student ID Display** - Hiển thị mã sinh viên 1771020304 khi đăng nhập thành công
- **Auto Login** - Tự động đăng nhập nếu đã có token
- **Logout** - Đăng xuất và xóa token

### 🍽️ **Menu Management (10 điểm)**
- **Danh sách món ăn** từ API `/api/menu-items`
- **Hiển thị thông tin**: Hình ảnh, tên, giá, danh mục
- **Filter theo danh mục**: Appetizer, Main Course, Dessert, Beverage, Soup
- **Search functionality** - Tìm kiếm theo tên và mô tả
- **Advanced filters**: Món chay, món cay, món có sẵn
- **Refresh to reload** - Pull to refresh

### 📱 **Menu Item Detail (5 điểm)**
- **Chi tiết món ăn** với thông tin đầy đủ
- **Thông tin dinh dưỡng**: Chay/mặn, cay/không cay
- **Thời gian chế biến** và đánh giá
- **Mô tả chi tiết** và hình ảnh lớn
- **UI/UX tối ưu** với SliverAppBar

## Cài đặt và chạy

### 1. Cài đặt dependencies
```bash
cd flutter_app_1771020304
flutter pub get
```

### 2. Chạy API server trước
Đảm bảo API server đang chạy tại http://localhost:3000

### 3. Chạy Flutter app
```bash
flutter run
```

## API Endpoints sử dụng

- `POST /api/auth/login` - Đăng nhập (trả về student_id)
- `GET /api/menu-items` - Lấy danh sách món ăn
- `GET /api/menu-items/:id` - Chi tiết món ăn
- `GET /api/menu-items/search` - Tìm kiếm món ăn

## Cấu trúc dự án

```
lib/
├── main.dart                    # Entry point với splash screen
├── models/
│   ├── user.dart               # User model
│   └── dish.dart               # MenuItem model (cập nhật)
├── services/
│   └── api_service.dart        # API service với authentication
├── screens/
│   ├── login_screen.dart       # Màn hình đăng nhập
│   ├── menu_screen.dart        # Danh sách món ăn
│   └── menu_item_detail_screen.dart # Chi tiết món ăn
└── widgets/
    ├── menu_item_card.dart     # Card hiển thị món ăn
    ├── category_filter.dart    # Filter theo danh mục
    └── search_bar_widget.dart  # Thanh tìm kiếm
```

## Tài khoản test

**Email**: john.doe@email.com  
**Password**: 123456

## Tính năng nổi bật

### 🎨 **UI/UX Design**
- Material Design 3 với theme màu cam
- Responsive layout cho các màn hình khác nhau
- Loading states và error handling
- Smooth animations và transitions

### 🔍 **Advanced Search & Filter**
- Real-time search trong tên và mô tả món
- Multi-filter: danh mục, chay, cay, có sẵn
- Visual filter chips hiển thị bộ lọc đang áp dụng
- Clear filters functionality

### 📊 **Data Management**
- Caching với SharedPreferences
- Auto-refresh khi có lỗi network
- Optimized image loading với CachedNetworkImage
- Proper error handling và user feedback

### 🔐 **Security**
- Token-based authentication
- Secure storage với SharedPreferences
- Auto logout khi token hết hạn
- Input validation và sanitization

## Dependencies

```yaml
dependencies:
  flutter: sdk
  cupertino_icons: ^1.0.8
  http: ^1.1.0                    # HTTP requests
  cached_network_image: ^3.3.0    # Image caching
  shared_preferences: ^2.2.2      # Local storage
```

## Công nghệ sử dụng

- **Flutter** - Cross-platform mobile framework
- **HTTP Package** - RESTful API calls
- **SharedPreferences** - Local data persistence
- **CachedNetworkImage** - Optimized image loading
- **Material Design 3** - Modern UI components
