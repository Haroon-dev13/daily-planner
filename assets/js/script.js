var currentDay = $("#currentDay");
var dailyPlanner = $("#timeBlocks");
var currentHour = moment().format("HH");
var workHours = [9,10,11,12,13,14,15,16,17];
var prevValues = [];
let row='';
prevValues = JSON.parse(localStorage.getItem('values'));


for (let i = 0; i < workHours.length; i++) {
        if (prevValues) {
            printDailyPlannerData(workHours[i], prevValues[i]);  
        }
        else{
            printDailyPlannerData(workHours[i],'');
        }
    
}

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

    var hourTdEl = $('<td>').addClass('hour').text(hour12+AmOrPm);
  
    var inputTdEl = $('<td>').addClass('p-2');  
    
    var inputDataField = $('<input>').addClass('desciption').val(prevValue);
    inputDataField.attr('name','event[]')
    inputDataField.attr('value',prevValue);
    inputTdEl.append(inputDataField);

    var saveTdEl = $('<td>').addClass('p-2 saveTd');
  
    var saveDataBtn = $('<button>').addClass('btn saveBtn');
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
    var values = $('input[name="event[]"]').map(function(){
        return this.value;
     }).get();

     localStorage.setItem('values',JSON.stringify(values));
  }



  $("button").on( "click", saveLocalStorage);



function displayDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(date);
}

setInterval(displayDate,1000);