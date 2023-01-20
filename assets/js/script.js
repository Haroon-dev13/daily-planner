var currentDay = $("#currentDay");
var timeBlocks = $("#timeBlocks");
var currentHour = moment().format("hh");
console.log(currentHour);
var workHours = [9,10,11,12,1,2,3,4,5];
let row='';
for (let i = 0; i< workHours.length; i++) {
    row='';
    if (currentHour > workHours[i]) {
        row = "<tr class='p-3' style='background-color: green;'><td>"+ workHours[i] +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    else if(currentHour === workHours[i]){
        row = "<tr class='p-3' style='background-color: red;'><td>"+ workHours[i] +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    else{
        row = "<tr class='p-3' style='background-color: grey;'><td>"+ workHours[i] +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    $("#timeBlocks tbody").append(row);
    }











function displayDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(date);
}

// setInterval(displayDate,1000);