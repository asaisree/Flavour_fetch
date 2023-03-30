<!DOCTYPE html>
<html>
<head>
   <title>Chef Page</title>
   <style>
      body{
background-image:url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-14.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=114b5874c6a2725f412c10e8d097e0a1);
    background-repeat:repeat;
      }
      table {
         border-collapse: collapse;
         width: 100%;
      }
      th, td {
         text-align: left;
         padding: 8px;
         border-bottom: 1px solid #ddd;
      }
      th {
         background-color: #f2f2f2;
      }
      form {
         border: 2px solid #ccc;
         padding: 20px;
         margin-bottom: 20px;
      }
      img {
         max-width: 200px;
         max-height: 200px;
      }
      #edit-form {
         display: none;
         position: absolute;
         top: 20%;
         left: 20%;
         width: 60%;
         height: 60%;
         padding: 20px;
         background-color: #f2f2f2;
         border: 2px solid #ccc;
         z-index: 1;
         overflow-y: scroll;
      }
   </style>
</head>
<body>
   <h1 align="center">FLAVOUR FETCH </h1>
   <h2 align="center">CHEF PAGE</h2>
   <h2><marquee>ADD DISHES HERE</marquee></h2>
   <button onclick="showAddForm()">Add Dish</button>
   <div id="add-form">
      <h2>Add Dish</h2>
      <form method="post" action="adddish.php" enctype="multipart/form-data">
         <label for="chef_name">Chef Name:</label>
         <input type="text" id="chef_name" name="chef_name" required><br><br>
         <label for="dish_name">Dish Name:</label>
         <input type="text" id="dish_name" name="dish_name" required><br><br>
         <label for="price">Price:</label>
         <input type="number" id="price" name="price" min="0" step="0.01" required><br><br>
         <label for="description">Description:</label><br>
         <textarea id="description" name="description" rows="4" cols="50" required></textarea><br><br>
         <label for="image">Image:</label>
         <input type="file" id="image" name="image" required><br><br>
         <input type="submit" value="Add">
         <button type="button" onclick="closeAddForm()">Close</button>
      </form>
   </div>
   <div id="edit-form"></div>
   <h2>Dishes</h2>
   <?php
      $conn = mysqli_connect("localhost", "root", "", "food");
      $sql = "SELECT * FROM dishes";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
         echo "<table>";
         echo "<tr><th>Chef Name</th><th>Dish Name</th><th>Price</th><th>Description</th><th>Image</th><th>Edit</th></tr>";
         while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['chef_name'] . "</td>";
            echo "<td>" . $row['dish_name'] . "</td>";
            echo "<td>" . $row['price'] . "</td>";
            echo "<td>" . $row['description'] . "</td>";
            echo "<td><img src='" . $row['image'] . "' alt='" . $row['dish_name'] . "'></td>";
            echo "<td><button onclick='showEditForm(".$row['id'].")'>Edit</button></td>";
echo "</tr>";
}
echo "</table>";
} else {
echo "No dishes found.";
}
mysqli_close($conn);
?>

   <script>
      function showAddForm() {
         document.getElementById("add-form").style.display = "block";
      }
      function closeAddForm() {
         document.getElementById("add-form").style.display = "none";
      }
 function showEditForm(id) {
         var xmlhttp = new XMLHttpRequest();
         xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               document.getElementById("edit-form").innerHTML = this.responseText;
               document.getElementById("edit-form").style.display = "block";
            }
         };
         xmlhttp.open("GET", "editdish.php?id=" + id, true);
         xmlhttp.send();
      }
      function closeEditForm() {
         document.getElementById("edit-form").style.display = "none";
      }
   </script>
</body>
</html>

