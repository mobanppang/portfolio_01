$(document).ready(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()==0){$('#hide').animate({
                    top:'50px'
                })}else if($(window).scrollTop()>=60){
                    if(!$('#hide').is(':animated')){
                        $('#hide').animate({
                            top:'0px',
                        })
                    }
                }
            })
        })