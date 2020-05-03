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
timeBlock.addClass("jumbotron");
// Current time header
today.text(m.format("MMMM Do YYYY, h:mm:ss a"));

//functions 

function timeConvert(time) {
    if (time > 12) {
        return (time - 12 + "PM")

    } else {
        return (time + "AM");
    }

}


// function storage (e) {
//     function writeLocalStorage() {
//         if (typeof(Storage) !== "undefined") {
//             localStorage.setItem("text", e.value);
//         } else {
//             document.getElementById("err").innerHTML = "Localstorage not supported";
//         }
//      }
   
// }


function prevHour() {
    for (var i = -4; i < 0; i++) {

        var pBlock = $("<div>");
        var pText = $("<textarea>");
        var pButtons = $("<button>");

        pBlock.append(pText);
        timeBlock.append(pBlock);
        pBlock.addClass("time-block past row");

        pBlock.append(pButtons);
        pButtons.text("Save");
        pButtons.addClass("saveBtn");
        pButtons.hover(function () {
            // $( this ).fadeOut( 100 );
            $(this).stop().animate({ 'opacity': '0.2' }, 'slow');
        }, function () {
            $(this).stop().animate({ 'opacity': '1' }, 'slow');
        });

        timeBlock.append(timeConvert(currentHour - 4));
        currentHour++;




    }


}

function addHour() {
    for (var i = 0; i < 4; i++) {
        var buttons = $("<button>");
        var tBlock = $("<div>");
        var text = $("<textarea>");
        text.addClass("tArea");



        tBlock.append(text);
        timeBlock.append(tBlock);
        tBlock.addClass("time-block future row");

        tBlock.append(buttons);
        buttons.text("Save");
        buttons.addClass("saveBtn");
        buttons.hover(function () {
            // $( this ).fadeOut( 100 );
            $(this).stop().animate({ 'opacity': '0.2' }, 'slow');
        }, function () {
            $(this).stop().animate({ 'opacity': '1' }, 'slow');
        });


        timeBlock.append(timeConvert(currentH + 1));
        currentH++;

        // function storage (e) {
        //     function writeLocalStorage() {
        //         if (typeof(Storage) !== "undefined") {
        //             localStorage.setItem("text", e.value);
        //         } else {
        //             document.getElementById("err").innerHTML = "Localstorage not supported";
        //         }
        //      }
           
        // }
        

        $(buttons).on("click", function (e) {
            e.preventDefault();
            // storage();
            var thidId = $(this).attr("id");
            var id = thisId.split("-")[0];
            var userInput = $("#" +id+)




            var input = document.querySelector(".saveBtn").value;
            console.log(e.value);


            // document.querySelector("")

            var storage = $(text).val();
            // console.log(this.push);
           
            
        });



    }
 
}



function currentHr() {

    var btn = $("<button>");
    var newDiv = $("<div>");
    var textArea = $("<textarea>");

    newDiv.append(textArea);
    timeBlock.append(newDiv);
    newDiv.addClass("time-block present row hour");
    btn.hover(function () {
        // $( this ).fadeOut( 100 );
        $(this).stop().animate({ 'opacity': '0.2' }, 'slow');
    }, function () {
        $(this).stop().animate({ 'opacity': '1' }, 'slow');
    });

    newDiv.append(btn);
    btn.addClass("saveBtn i:hover");
    btn.text("Save");

    timeBlock.append(timeConvert(m.hour()));



}

var constantHour = m.hour();
//used with adding hour
var currentH = moment().hour();
var currentHour = m.hour();
var convertHour = (timeConvert(currentHour));









prevHour();
currentHr();
addHour();


