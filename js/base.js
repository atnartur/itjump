window.small = false;

function dropdown_init() {
    $('#header .nav > li').each(function(){
        if ($(this).children('.sub').length > 0)
            $(this).addClass('dropdown');
    });
    
    $('#header .nav li.dropdown').hover(function(){
        if (window.small === false)
            $(this).children('.sub').stop().slideDown(100);
    }, function(){
        if (window.small === false)
            $(this).children('.sub').stop().slideUp(200);
    });
}

function menu_toggler_init() {
    $('#menu_toggler').click(function(){
        $('#header .nav').slideToggle(200);
    });
}

function menu_toggler_resize(){
    var width = $(window).width();
    
    if (width < 790) {
        if (window.small === false){
            window.small = true;
            $('#header .nav').hide();
        }
    }
    else{
        if (window.small === true){
            window.small = false;
            $('#header .nav').show();
        }
    }
}

function lead_main_resize(){
    if ($('#lead.main').length === 1) {
        var win = $(window).height();
        var header = $('#header').height();
        var lead = win - header;
        
        $('#lead.main').height(lead);
        
        if (lead < 584) {
            var lead = 584;
        }
        var content = $('#lead.main #lead_main_content').height();
        
        var margin_top = (lead - content) / 2;
        
        if (margin_top < 30) {
            margin_top = 30;
        }
        
        $('#lead.main #lead_main_content').css('margin-top', margin_top  + 'px');
    }
}

$(document).ready(function(){
    dropdown_init();
    menu_toggler_init();
    menu_toggler_resize();
    lead_main_resize();
})

$(window).resize(function(){
    menu_toggler_resize();
    lead_main_resize();
});