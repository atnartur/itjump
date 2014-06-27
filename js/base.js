function dropdown_init() {
    $('#header .nav > li').each(function(){
        if ($(this).children('.sub').length > 0)
            $(this).addClass('dropdown');
    });
    
    $('#header .nav li.dropdown').hover(function(){
        if ($('#header .nav').hasClass('small') === false)
            $(this).children('.sub').stop().slideDown(100);
    }, function(){
        if ($('#header .nav').hasClass('small') === false)
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
    
    if (width < 800) {
        if ($('#header .nav').hasClass('small') === false)
            $('#header .nav').addClass('small');
    }
    else{
        if ($('#header .nav').hasClass('small') === true)
            $('#header .nav').removeClass('small').show();
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
            
            $('#lead.main #lead_main_content').css('margin-top', (lead - content) / 2 + 'px');
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