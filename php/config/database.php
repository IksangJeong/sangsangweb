<?php
/**
 * 데이터베이스 연결 설정
 * 상상마루 - sangsangmaru.mireene.co.kr
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'sangsangmaru');
define('DB_USER', 'sangsangmaru');
define('DB_PASS', 'fpahsk1023!!'); // 안되면 fpahsk1023! 로 변경

// PDO 연결 옵션
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
];

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        $options
    );
} catch (PDOException $e) {
    // 프로덕션에서는 상세 에러 숨김
    error_log("Database connection failed: " . $e->getMessage());
    die(json_encode(['error' => '데이터베이스 연결에 실패했습니다.']));
}
