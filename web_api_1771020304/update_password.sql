-- Cập nhật mật khẩu cho tài khoản test
-- Mật khẩu: 123456
-- Hash: $2a$10$POcuRhE211VMvGNAqxzO/.v6qZ4dGH6zCy.QrSgPfWt3gD2GlscVq

USE db_exam_1771020311;

UPDATE customers 
SET password = '$2a$10$POcuRhE211VMvGNAqxzO/.v6qZ4dGH6zCy.QrSgPfWt3gD2GlscVq' 
WHERE email = 'john.doe@email.com';

-- Kiểm tra kết quả
SELECT email, full_name, password FROM customers WHERE email = 'john.doe@email.com';