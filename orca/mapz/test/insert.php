<? phpinfo() ?>

<?php

// Gets data from URL parameters.
//$db->query("SELECT [name] FROM dbo.All_Animals");
//$name = $_GET['name'];
$name = isset($_GET['name']) ? $_GET['name'] : '';
//$address = $_GET['address'];
$address = isset($_GET['address']) ? $_GET['address'] : '';
//$lat = $_GET['lat'];
$lat = isset($_GET['lat']) ? $_GET['lat'] : '';
//$lng = $_GET['lng'];
$lng = isset($_GET['lng']) ? $_GET['lng'] : '';
//$type = $_GET['type'];
$type = isset($_GET['type']) ? $_GET['type'] : '';

// Opens a connection to a MySQL server
$connection=mysqli_connect($host,$username,$password);
if (!$connection) {
  die('Not connected:'.mysqli_error());
}

// Set the active MySQL database
$db_selected=mysqli_select_db($connection,$database);
if (!$db_selected) {
  die ('Can\'t use db : '.mysqli_error());
}

// Inserts new row with place data.
$query = sprintf("INSERT INTO markers2 " .
         " (id, name, address, lat, lng, type ) " .
         " VALUES (NULL, '%s', '%s', '%s', '%s', '%s');",
         mysqli_real_escape_string($connection,$name),
         mysqli_real_escape_string($connection,$address),
         mysqli_real_escape_string($connection,$lat),
         mysqli_real_escape_string($connection,$lng),
         mysqli_real_escape_string($connection,$type));

$result = mysqli_query($connection,$query);
if (!$result) {
  die('Invalid query: ' . mysqli_error());
}

?>
