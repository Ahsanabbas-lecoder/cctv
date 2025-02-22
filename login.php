<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "OperatorDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $operator_name = $_POST["username"];
    $password = $_POST["password"];

    // Secure the query to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM Operators WHERE operator_name=? AND password=?");
    $stmt->bind_param("ss", $operator_name, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        header("Location: user-site.html"); // Redirect to dashboard
        exit();
    } else {
        echo "<script>alert('Invalid credentials'); window.location.href='index.html';</script>";
    }

    $stmt->close();
}
$conn->close();
?>
