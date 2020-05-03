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


function storageFunction () {

    console.log("hi");

    var id = $(this).attr("id");
    var userInput = $("#" +id).val();
    console.log(userInput);
            //   localStorage.setItem(id, userInput);
    // var userInput = $("#" +id+"-input").val();
    // localStorage.setItem(id, userInput);
    // console.log(thisId, id, userInput)
    
}






        
        
    // });

function addHour() {


    // $("button").on("click", function () {
    //     console.log("hi");

    //     var id = $(this).attr("id");
    //     var userInput = $("#" +id).val();
    //     console.log(userInput);
    //             //   localStorage.setItem(id, userInput);
    //     // var userInput = $("#" +id+"-input").val();
    //     // localStorage.setItem(id, userInput);
    //     // console.log(thisId, id, userInput)





        
        
    // });





    for (var i = 0; i < 4; i++) {
        var buttons = $("<button>");
        var tBlock = $("<div>");
        var text = $("<textarea>");
        text.addClass("tArea");
        text.attr("id", "txt-"+i);
        buttons.attr("id", "btn-"+i);
        tBlock.attr("id", "tBlock-"+i);
       



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

$(buttons).on("click", function () {
    console.log("hi");
    var itemId = $(this).attr("id");
    console.log(itemId);
    var inputVal = $("#txt-"+itemId.split("-")[1]).val();
    console.log(inputVal);
    var key = $("#tBlock-"+itemId.split("-")[1]);
    localStorage.setItem(itemId, inputVal);
    // var userInput = $("#" +id).val();
    // console.log(userInput);
            //   localStorage.setItem(id, userInput);
    // // var userInput = $("#" +id+"-input").val();
    // // localStorage.setItem(id, userInput);
    // // console.log(thisId, id, userInput)
    
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


