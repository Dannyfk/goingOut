function updateLocation() {
    
var checkbox = document.getElementById("goingOut");
var textfield = document.getElementById("location");
    
    var person = friendList[0];
    if(checkbox.checked === false){
        person.out = false;
        person.outPlace = null;
    }
    else {
        person.out = true;
        person.outPlace = textfield.value;
    }
    friendList[0] = person;

    
}

function test(){
    updateLocation();
    updateFriendlist();
}

function updateFriendlist() {
    // Looping the friendlist and adding color and outlocation if the person has one
var ul = document.getElementById("friendListObject");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
    var temp = ul.childNodes[i].innerHTML;
    var tempPerson ="";
    var tempNumber = 0;
    var found = false;
    // workaround that looks for < in the innerhtml because we need to remove it to get just the name
     if (temp.indexOf('<') > -1)
     {
         temp = temp.substring(0, temp.indexOf('<'));
     }     
    while(found != true && tempNumber<friendList.length){
        if (friendList[tempNumber].firstName === temp.trim()){
            tempPerson = friendList[tempNumber];
            tempNumber=0;
            found=true;
        }
        else {
            tempNumber ++;
        }
    }
    if(tempPerson.out === true){
        ul.childNodes[i].setAttribute("class","true");
        ul.childNodes[i].innerHTML = temp + "<br>-" + tempPerson.outPlace;
    }
    else {
        ul.childNodes[i].setAttribute("class","false");
        ul.childNodes[i].innerHTML = tempPerson.firstName;
    }
}
}
