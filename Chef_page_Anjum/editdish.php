<?php
   $id = $_GET['id'];

   $conn = mysqli_connect("localhost", "root", "", "food");
   $sql = "SELECT * FROM dishes WHERE id=$id";
   $result = mysqli_query($conn, $sql);
   $row = mysqli_fetch_assoc($result);

   echo "<h2>Edit Dish</h2>";
   echo "<form method='post' action='updatedish.php' enctype='multipart/form-data'>";
   echo "<input type='hidden' name='id' value='".$row['id']."'>";
   echo "<label for='chef_name'>Chef Name:</label>";
   echo "<input type='text' id='chef_name' name='chef_name' value='".$row['chef_name']."' required><br><br>";
   echo "<label for='dish_name'>Dish Name:</label>";
   echo "<input type='text' id='dish_name' name='dish_name' value='".$row['dish_name']."' required><br><br>";
   echo "<label for='price'>Price:</label>";
   echo "<input type='number' id='price' name='price' value='".$row['price']."' min='0' step='0.01' required><br><br>";
   echo "<label for='description'>Description:</label><br>";
   echo "<textarea id='description' name='description' rows='4' cols='50' required>".$row['description']."</textarea><br><br>";
   echo "<label for='image'>Image:</label>";
   echo "<input type='file' id='image' name='image'><br><br>";
echo "<input type='submit' value='Update'>";
echo "</form>";
mysqli_close($conn);
?>