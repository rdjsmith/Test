<?php
$q = intval($_GET['q']);

$con = mysqli_connect("localhost","root");
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con, "yolomen");
$sql='SELECT * FROM ym_sizes where Unit IN "Cm-Kg"';
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>Size</th>
<th>Length</th>
<th>Chest</th>
<th>Waist</th>
<th>Shoulder</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['Size'] . "</td>";
  echo "<td>" . $row['Length'] . "</td>";
  echo "<td>" . $row['Chest'] . "</td>";
  echo "<td>" . $row['Waist'] . "</td>";
  echo "<td>" . $row['Shoulder'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>