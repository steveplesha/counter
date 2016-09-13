console.log("Start"); 

jQuery(document).ready(function($){
    $('.player').click(function(){
        counter = parseInt($('.counter', this).text(), 10);
        console.log('counter is ' + counter);
        $('.counter', this).html(counter + 1);
    })
    
    $('#reset').click(function(){
        var reset = confirm ("Are you sure?");
        if (reset == true) {
            location.reload();
        }        
    })
}) 