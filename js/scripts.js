function dropdown_init() {
    $('#header .nav > li').each(function(){
        if ($(this).children('.sub').length > 0) {
            $(this).addClass('dropdown');
            //$(this).children('a').after('<div class="arrow"></div>');
        }
    });
    
    $('#header .nav li.dropdown').hover(function(){
        $(this).children('.sub').stop().slideDown(200);
    }, function(){
        $(this).children('.sub').stop().slideUp(200);
    });
}

$(document).ready(function(){
    dropdown_init();
})