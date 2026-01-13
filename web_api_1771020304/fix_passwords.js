const bcrypt = require('bcryptjs');
const db = require('./config/database');

async function fixPasswords() {
  try {
    // Hash mật khẩu 123456
    const hashedPassword = await bcrypt.hash('123456', 10);
    console.log('Hashed password for 123456:', hashedPassword);
    
    // Cập nhật mật khẩu cho tài khoản test
    const query = 'UPDATE customers SET password = ? WHERE email = ?';
    
    db.query(query, [hashedPassword, 'john.doe@email.com'], (err, results) => {
      if (err) {
        console.error('Error updating password:', err);
        return;
      }
      
      console.log('Password updated successfully for john.doe@email.com');
      console.log('Affected rows:', results.affectedRows);
      
      // Đóng kết nối database
      db.end();
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

fixPasswords();