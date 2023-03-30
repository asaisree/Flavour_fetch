<?php
   $id = $_POST['id'];
   $chef_name = $_POST['chef_name'];
   $dish_name = $_POST['dish_name'];
   $price = $_POST['price'];
   $description = $_POST['description'];
   $image = $_FILES['image']['name'];
   $tmp_name = $_FILES['image']['tmp_name'];
   if ($image != "") {
      $folder = "images/".$image;
      move_uploaded_file($tmp_name, $folder);
      $conn = mysqli_connect("localhost", "root", "", "food");
      $sql = "UPDATE dishes SET chef_name='$chef_name', dish_name='$dish_name', price='$price', description='$description', image='$folder' WHERE id=$id";
   } else {
      $conn = mysqli_connect("localhost", "root", "", "food");
      $sql = "UPDATE dishes SET chef_name='$chef_name', dish_name='$dish_name', price='$price', description='$description' WHERE id=$id";
   }
 if (mysqli_query($conn, $sql)) {
      echo "Dish updated successfully.";
   } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
   }
   mysqli_close($conn);
?>
