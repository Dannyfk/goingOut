//Person constructor
function person(first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.profilePicture;
    this.interest;
    this.favoritPlace;
    this.privacy = false;
    this.out = false;
    this.outPlace;
}

//Creating some testing values
var testPerson1 = new person("Bruce","Wayne", 30, "male");
testPerson1.out = true;
testPerson1.outPlace = "Bar";
var testPerson2 = new person("Barry", "Allen", 30, "male");
var testPerson3 = new person("Person", "Lastname", 30, "male");
var testPerson4 = new person("Person2", "Lastname", 30, "male");
var testPerson5 = new person("Person3", "Lastname", 30, "male");
testPerson5.out = true;
testPerson5.outPlace = "Disco";
var friendList =[testPerson1, testPerson2, testPerson3, testPerson4, testPerson5];
