<?php
   $chef_name = $_POST['chef_name'];
   $dish_name = $_POST['dish_name'];
   $price = $_POST['price'];
   $description = $_POST['description'];
   $image = $_FILES['image']['name'];
   $tmp_name = $_FILES['image']['tmp_name'];
   $folder = "images/".$image;
   move_uploaded_file($tmp_name, $folder);

   $conn = mysqli_connect("localhost", "root", "", "food");
   $sql = "INSERT INTO dishes (chef_name, dish_name, price, description, image) VALUES ('$chef_name', '$dish_name', '$price', '$description', '$folder')";
   if (mysqli_query($conn, $sql)) {
      echo "Dish added successfully.";
   } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
   }
   mysqli_close($conn);
?>