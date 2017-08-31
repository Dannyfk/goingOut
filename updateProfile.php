<?php
if(isset($_POST['goingOut']) && !empty($_POST['location'])) {
	//do something with the update
} else if(isset($_POST['goingOut']) && empty($_POST['location'])){
	echo("please fill the location to update");
}
header('Location: index.php');
?>