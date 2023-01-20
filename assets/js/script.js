var currentDay = $("#currentDay");
function displayDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(date);
}

setInterval(displayDate,1000);