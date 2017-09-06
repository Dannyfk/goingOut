
const app2 = new Vue({
   el: "#friendList",
    data: {
        items: [] = friendList,
        show: true
    }
});

// Looping the friendlist and adding color and outlocation if the person has one
var ul = document.getElementById("friendListObject");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
    var temp = ul.childNodes[i].innerHTML;
    
    var tempPerson ="";
    var tempNumber = 0;
    var found = false;
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
        ul.childNodes[i].innerHTML = ul.childNodes[i].innerHTML + "<br>-" + tempPerson.outPlace;
    }
    else {
        ul.childNodes[i].setAttribute("class","false");
    }
}