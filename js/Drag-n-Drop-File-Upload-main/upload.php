<?php

$base_path = $_SERVER['DOCUMENT_ROOT'];
$file_path = $base_path.'/fileServer/';

function saveFile($name, $temp) {
  global $base_path, $file_path, $uid;
  $allowed_extension = array('jpg', 'jpeg', 'bmp', 'gif', 'png', 'zip', 'rar', 'tar', 'txt', 'mp4', 'mp3', '7z', 'doc', 'docx', 'xls');
  $extension = pathinfo($name, PATHINFO_EXTENSION);
  if (!in_array($extension, $allowed_extension)) {
    echo 'extionstion blocked';
    die();
  } else{
    $new_name = uniqid() . '.' . $extension;
    // Your DB query insert here
    // require $base_path.'/backend/dbconnect.php';
    // try{
    //   $sql = "INSERT INTO filesstore (user_id, filename, temp_name) VALUES (?, ?, ?)";
    //   $stmt = $conn->prepare($sql); 
    //   $stmt->bind_param("iss", $uid, $name, $new_name);
    //   $stmt->execute();
    // } catch(Exception $e){
    //     if ($debug == true){
    //         die('debug: '.$e);
    //     }
    //     else{
    //         die('Internal Error');
    //     }
    // }
    move_uploaded_file($temp, $file_path.$new_name);
  }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST'){
  if(isset($_FILES['file']['name'])){
    $file_name =  $_FILES['file']['name']; //getting file name
    $tmp_name = $_FILES['file']['tmp_name'];
    saveFile($file_name,$tmp_name);
  } elseif (isset($_FILES['drop_files']['name'][0])){
    $file_name =  $_FILES['drop_files']['name'][0];
    $tmp_name = $_FILES['drop_files']['tmp_name'][0];
    saveFile($file_name,$tmp_name);
  }
}
else{
  die();
}
?>