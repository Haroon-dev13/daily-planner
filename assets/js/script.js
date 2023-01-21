var currentDay = $("#currentDay");
var dailyPlanner = $("#timeBlocks");
var currentHour = moment().format("HH");
// console.log(currentHour);
var workHours = [8,9,10,11,12,13,14,15,16,17];
var prevValues = [];
let row='';
prevValues = JSON.parse(localStorage.getItem('values'));


for (let i = 0; i < workHours.length; i++) {
    // const element = array[i];
        // console.log(prevValues);
        if (prevValues) {
            printDailyPlannerData(workHours[i], prevValues[i]);  
            // dailyPlanner.append(row); 
        }
        else{
            printDailyPlannerData(workHours[i],'');
            // dailyPlanner.append(row);
        }
        // printDailyPlannerData(hour,'abc');
    
}
// for (let i = 0; i< workHours.length; i++) {
//     row='';
//     var AmOrPm = workHours[i] >= 12 ? 'PM' : 'AM';
//     var hour = (workHours[i] % 12) || 12; 
//     if (currentHour > workHours[i]) {
//         row = "<tr class='p-3' style='background-color: green;'><td>"+ hour + AmOrPm +"</td>"+
//         "<td></td>"+
//         "<td><i class='fa fa-save'></i></td></tr>";
//     }
//     else if(currentHour == workHours[i]){
//         row = "<tr class='p-3' style='background-color: red;'><td>"+ hour + AmOrPm +"</td>"+
//         "<td></td>"+
//         "<td><i class='fa fa-save'></i></td></tr>";
//     }
//     else{
//         row = "<tr class='p-3' style='background-color: grey;'><td>"+  hour + AmOrPm +"</td>"+
//         "<td><input type='text' class='inputValue' name='name[]' value=''></input></td>"+
//         "<td><button type='button' class='btn btn-danger'><i class='fa fa-save'></i></button></td></tr>";
//     }
//     $("#timeBlocks tbody").append(row);
//     }

//     prevValues = JSON.parse(localStorage.getItem('values'));
//     console.log(prevValues);
// if(prevValues != null){
//     for (let i = 0; i < prevValues.length; i++) {
//         $(".inputValue").val(prevValues[i]);
//         console.log(prevValues[i]);   
//     }
// }


// console.log($("#timeBlocks tbody").childern());
// $("#timeBlocks tbody").on('submit','btn-danger',function (event) {
//     console.log(event.target);
// })

function printDailyPlannerData(hour, prevValue) {
    var dailyPlannerRowEl = $('<tr>');
    if (currentHour > hour) {
        dailyPlannerRowEl.addClass('past');  
    }
    else if(currentHour == hour){
        dailyPlannerRowEl.addClass('present');
    }
    else{
        dailyPlannerRowEl.addClass('future');
    }
    var AmOrPm = hour >= 12 ? 'PM' : 'AM';
    var hour12 = (hour % 12) || 12; 

    var hourTdEl = $('<td>').addClass('p-2').text(hour12+AmOrPm);
  
    var inputTdEl = $('<td>').addClass('p-2');  
    
    var inputDataField = $('<input>').addClass('inputData').val(prevValue);
    inputDataField.attr('name','name[]')
    inputTdEl.append(inputDataField);

    var saveTdEl = $('<td>').addClass('p-2');
  
    var saveDataBtn = $('<button>').addClass('btn btn-danger save-data-btn');
    var saveIcon = $('<i>').addClass('fa fa-save');
    saveDataBtn.append(saveIcon);
    saveTdEl.append(saveDataBtn);
  
    // By listing each `<td>` variable as an argument, each one will be appended in that order
    dailyPlannerRowEl.append(
        hourTdEl,
        inputTdEl,
        saveTdEl
    );
  
    dailyPlanner.append(dailyPlannerRowEl);
  }

function saveLocalStorage(event) {
    // console.log(event.target);
    var values = $('input[name="name[]"]').map(function(){
        return this.value;
     }).get();
     localStorage.setItem('values',JSON.stringify(values));
     
    //  console.log(localStorage.getItem('values'));
  }
  $("button").on( "click", saveLocalStorage);








function displayDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(date);
}

// setInterval(displayDate,1000);