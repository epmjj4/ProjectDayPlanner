$(document).ready(function () {
    // display present day
    $("#currentDay").text(moment().format('LL'));

    $('.saveBtn').on('click', function(){
        // grab values
        var input = $(this).sibling('.description').val();
        var blockTime = $(this).parent().attr('id');

        // setvalues in local storage
        localStorage.set(blockTime, input)

    });

function hourColorizer (){
// get current number of hours with moment.js
var presentHour = moment().hours();

// loop through time blocks
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id').split('-')[0])

    // code to change colors due to timne
    if(hourBlock < presentHour){
        $(this).addClass('past');
    }else if(hourBlock === presentHour){
        $(this).removeClass('past')
        $(this).addClass('present');
    }else{
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future');
    }
})
}
hourColorizer();
// grabbing data from local store
$("#9-hour.description").val(localStorage.getItem('9-hour'));
$("#9-hour.description").val(localStorage.getItem('9-hour'));
$("#9-hour.description").val(localStorage.getItem('9-hour'));
$("#9-hour.description").val(localStorage.getItem('9-hour'));
$("#9-hour.description").val(localStorage.getItem('9-hour'));
$("#9-hour.description").val(localStorage.getItem('9-hour'));

});