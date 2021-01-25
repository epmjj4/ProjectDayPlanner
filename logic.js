$(document).ready(function () {
    // display present day
   //$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    $("#currentDay").text(new Date());

    $('.savBtn').on('click', function(event){
        console.log(event.target);
        // grab values
        var input = $(this).siblings('.description').val();
        var blockTime = $(this).parent().attr('id');

        //setvalues in local storage
        localStorage.setItem(blockTime, input)
        

    });

function hourColorizer (){
// get current number of hours with moment.js

 //var presentHour = moment().hours();

 var presentHour = new Date().getHours();


// loop through time blocks
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id').split('-')[0]);

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
$("#10-hour.description").val(localStorage.getItem('10-hour'));
$("#11-hour.description").val(localStorage.getItem('11-hour'));
$("#12-hour.description").val(localStorage.getItem('12-hour'));
$("#13-hour.description").val(localStorage.getItem('13-hour'));
$("#14-hour.description").val(localStorage.getItem('14-hour'));
$("#15-hour.description").val(localStorage.getItem('15-hour'));
$("#16-hour.description").val(localStorage.getItem('16-hour'));
$("#17-hour.description").val(localStorage.getItem('17-hour'));
});