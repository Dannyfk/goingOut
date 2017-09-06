var Home = {template: "<section id='mainContent'><img src='images/profilePicturePlaceholder.png'><form id='locationForm' onsubmit='updateLocation()' action='#'><input type='checkbox' name='goingOut' value='out' id='goingOut'>Going out?<br>Location:<input type='text'name='location'id='location'><br><input type='submit' value='Submit'></form></section>"};
    var Profile = { template: "<section id='mainContent'><form id='profile Form'action='#'>FirstName:<input type='text'name='firstName'id='firstName'><br>LastName:<input type='text'name='lastName'id='lastName'><br>Age:<input type='text'name='age'id='age'><br>Interest:<input type='text'name='interest'id='interest'><br>FavoritPlace:<input type='text'name='favoritPlace'id='favoritPlace'><br><input type='submit'value='Update'></form></section>" };
    var CityMap = { template: "<section id='mainContent'><h1>City Map</h1></section>" };
    var FindOthers = { template: "<section id='mainContent'><h1>FindOthers</h1></section>" };
    var Friends = { template: "<section id='mainContent'><h1>Friends</h1></section>" };
      var routes = [
        { path: '/', component: Home },
        { path: '/profile', component: Profile},
        { path: '/cityMap', component: CityMap}, 
        { path: '/FindOthers', component: FindOthers},
        { path: '/Friends', component: Friends}
      ];
      var router = new VueRouter({
        routes: routes,
      });
      var app = new Vue({
        el: '#navList',
        router: router
      });