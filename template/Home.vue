<template>
  <section id="mainContent">
    <img src="images/profilePicturePlaceholder.png">
    
<form id="locationForm" onsubmit="updateLocation()" action="#">
        <input type="checkbox" name="goingOut" value="out" id="goingOut">Going out?<br>
        Location:
        <input type="text" name="location" id="location" readonly><br>
        <input type="submit" value="Submit">
</form>
    
</section>
</template>

<script>
export default {
  name: 'foo',
};
</script>