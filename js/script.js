$(document).ready(function () {

    $(window).scrollTop(0);
    
    if ($(window).width() > 576) {    
        disableScroll();
    
        setTimeout(enableScroll, 3000);
    }
    
    
    
    
    
    var sideText = $('#side-text');
    
    $(window).scroll(function () {
        
        var posAboutAnchor = $('#anchorabout').position().top;
        var posExpAnchor = $('#anchorexp').position().top;
        var posProjectsAnchor = $('#anchorprojects').position().top;
        var posContactAnchor = $('#anchorcontact').position().top;
        var posScroll = $(window).scrollTop();
        
        if (parseInt(posContactAnchor - posScroll, 10) < 0) {
            sideText.html('4. Contact');
        }
        else if (parseInt(posProjectsAnchor - posScroll, 10) < 0) {
            sideText.html('3. Projects');
        } else if (parseInt(posExpAnchor - posScroll, 10) < 0) {
            sideText.html('2. Experience');
        } else if (parseInt(posAboutAnchor - posScroll, 10) < 0) {
            sideText.html('1. About Me');
            $("#line-h1, #line-h2, #block-h1, #block-v1, #block-v2, #side-text").addClass('up');
        } else {
            sideText.html('');  
            $("#line-h1, #line-h2, #block-h1, #block-v1, #block-v2,  #side-text").removeClass('up');
        }
    });
    
    
    $('nav ul li a').click(function(event) {
        event.preventDefault();
    });
    
    scrollToOnClick('#nav-exp', '#anchorexp');
    scrollToOnClick('#nav-about', '#anchorabout');
    scrollToOnClick('#nav-projects', '#anchorprojects');
    scrollToOnClick('#nav-contact', '#anchorcontact');
    scrollToOnClick('.to-more-about', '#anchorabout');
    scrollToOnClick('.to-more-exp', '#anchorexp');
    scrollToOnClick('.to-more-projects', '#anchorprojects');
    scrollToOnClick('.to-more-contact', '#anchorcontact');
    
    //Collapsible headers
    $(".project-header").click(function(){
        var id = '#' + $(this).data("id");
        if ($(id).hasClass('collapsed')) {
            $(id).removeClass('collapsed');
            $(this).removeClass('collapsed');
        } else {
            $(id).addClass('collapsed');
            $(this).addClass('collapsed');
        }  
    });
    
    
    $(".arrow").hover(function () {
        var vertLine = $(this).find('.arrow-v');
        $(vertLine).toggleClass("hovering");
    });
    
    $(".to-link").hover(function () {
        var vertLine = $(this).next().find('.arrow-v');
        $(vertLine).toggleClass("hovering");
    });
    
});


function disableScroll() {
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

		window.onscroll = function() {
			window.scrollTo(scrollLeft, scrollTop);
		};
}

function enableScroll() {
	window.onscroll = function() {};
}

function scrollToOnClick(el, destination) {
    $(el).click(function() {
        $('html,body').animate({
            scrollTop: $(destination).offset().top },
            'slow');
    });
}
