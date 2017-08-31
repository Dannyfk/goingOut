<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Going out</title>

<!-- Our own stylesheet -->
<link href="css/style.css" rel="stylesheet">

</head>
<!-- body start -->
<body id="frontPageBody">
    
    <!-- Nav include -->
<main>
<aside id="navList">
    <ul>
        <li v-for="item in items">
           <a>{{item}}</a> 
        </li>
    </ul>
    </aside>
    
<section id="mainContent">
    <img src="images/profilePicturePlaceholder.png">
    
    <form action="updateProfile.php" method="post">
        <input type="checkbox" name="goingOut" value="out" id="goingOut">Going out?<br>
        Location:
        <input type="text" name="location" id="location" readonly><br>
        <input type="submit" value="Update">
</form>

</section>
    
<aside id="friendList">
    <ul>
        <li v-for="item in items">
            {{item.out}}
            {{item.firstName}}
            <br>
            {{item.outPlace}}
        </li>
        <a href="#">Add Friend</a>
    </ul>
    </aside>    
    
</main>

<script src="js/vue.js"></script>   
<script src="js/personScript.js"></script>
<script src="js/frameWorkScript.js"></script>
<script src="js/frontpageFormScript.js"></script>
    
</body>
</html>
