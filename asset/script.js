// Global Scope
var m = moment();
var daysOfweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"]

//Days of week variables
var sunday = moment().day(0);
var monday = moment().day(1);
var tuesday = moment().day(2);
var wednesday = moment().day(3);
var thursday = moment().day(4);
var friday = moment().day(5);
var saturday = moment().day(6);

var today = $("#currentDay");
var timeBlock = $("#t-block");

// Current time header
today.text(m.format("MMMM Do YYYY, h:mm:ss a"));

//functions 

function timeConvert (time) {
    if (time > 12) {
        return(time - 12 + "PM")
        
    } else {
        return(time + "AM");
    }

}

function addHour () {
for (var i = 0; i < 4; i++) {
    
    var tBlock = $("<div>");

    tBlock.append("<textarea>");
    timeBlock.append(tBlock);
    tBlock.addClass("time-block  future row");
    var buttons = $("<button>");
    tBlock.append(buttons);
    buttons.text("Save");
    buttons.addClass("saveBtn hover");
    

    console.log(timeConvert(currentHour));
    timeBlock.append(timeConvert(currentHour + 1));
    currentHour++;
}

}

var newDiv = $("<div>");

newDiv.append("<textarea>");
newDiv.addClass("time-block present row");
timeBlock.append(newDiv);




var s = $("#t-block").append("<div>").prepend("<textarea>");

var currentHour = m.hour();
var convertHour = (timeConvert(currentHour));

var c = s.append(convertHour);


// Appending onto the page and Styling
// c.addClass("time-block present  jumbotron");


addHour();