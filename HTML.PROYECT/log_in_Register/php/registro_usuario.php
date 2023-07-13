<?php
 
 include 'conexion_BE.php';

  $nombre_completo = $_POST['nombre_completo'];
  $email =$_POST['email'];
  $user =$_POST['user'];
  $password =$_POST['password'];

//   sintaxis squery
// Se necesita cambiar los dato , especificamente del dato password por contraseña ya que no esta pirmiendo recolectar el dato password por su nombre. 
   $query = "INSERT INTO usuarios(nombre_completo, email, user, constrasena) 
   $values('$nombre_completo', '$email', '$user', '$password')";
   
   $ejecutar = mysqli_query($conexion, $query):

   if($ejecutar){
    echo '
     
    <script>
       alert("Usuario almacenado Exitosamente");
       window.location = "../loig-in.html";
    </script>
    ';
   }else{
    echo '
     <script> 
       alert("Intentalo de nuevo, Usuario no almacenado");
       window.location = "../log-in.html";
     </script>
    '
   }


   mysqli_close($conexion);


?>