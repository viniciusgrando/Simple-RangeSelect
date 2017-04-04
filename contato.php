<?php
	$varplano = !empty($_GET['plano_dedicado']) ? $_GET['plano_dedicado'] : null;
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Simple RangeSelector</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
<form action="contato.php" class="form-plan" method="GET">
    <input type="text" name="plano_dedicado" value="'<?php echo htmlspecialchars($varplano); ?>'" />
    <input type="submit" value="Comprar" />
</form>
</body>
<script src="assets/js/script.js"></script>
</html>