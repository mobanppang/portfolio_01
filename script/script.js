$(document).ready(function(){
            $('.contents').fullpage({})
        })
function btn(seq){
    var box=
        $('#box'+seq).offset()
        $('html,body').animate({
            scrollTop:box.top
        },)
    }