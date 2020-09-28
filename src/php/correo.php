<php 
    $destinatario = 'maurovolpe18@gmail.com'
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $texto = $_POST['texto'];

    $header = "Enviado desde la página de Maurizio Volpe"
    $mensajeCompleto = $texto . "\nAtentamente" . $nombre

    mail($destinatario, $email, $texto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>"
?>