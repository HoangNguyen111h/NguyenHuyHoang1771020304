@echo off
echo Setting up database...
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS db_exam_1771020311;"
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root db_exam_1771020311 < database\schema.sql
echo Database setup complete!
pause