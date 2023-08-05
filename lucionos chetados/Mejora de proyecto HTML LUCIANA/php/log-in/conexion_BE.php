<?php

$server = "localhost";
$user = "root";
$pass = "";
$login_register_1 = "usuarios";

$conexion = new mysql($server, $user, $pass, $login_register_1)
//  $conexion = mysqli_connect("localhost", "root", "", "login_register_1")


// para realizar conexiones y confirmar en la base de datos
  if($conexion->connect_errno) {
    echo "No se realizo la conexion, Vuelve intentarlo";
 }else{
    echo "conectado exitosamente la base de datos";
 }

?>