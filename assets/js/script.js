var currentDay = $("#currentDay");
var timeBlocks = $("#timeBlocks");
var currentHour = moment().format("HH");
console.log(currentHour);
var workHours = [8,9,10,11,12,13,14,15,16,17];
let row='';
for (let i = 0; i< workHours.length; i++) {
    row='';
    var AmOrPm = workHours[i] >= 12 ? 'PM' : 'AM';
    var hour = (workHours[i] % 12) || 12; 
    if (currentHour > workHours[i]) {
        row = "<tr class='p-3' style='background-color: green;'><td>"+ hour + AmOrPm +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    else if(currentHour == workHours[i]){
        row = "<tr class='p-3' style='background-color: red;'><td>"+ hour + AmOrPm +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    else{
        row = "<tr class='p-3' style='background-color: grey;'><td>"+  hour + AmOrPm +"</td><td></td><td><i class='fa fa-save'></i></td></tr>";
    }
    $("#timeBlocks tbody").append(row);
    }











function displayDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(date);
}

// setInterval(displayDate,1000);