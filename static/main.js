$(document).ready(function() {
    $('#s_home').css('color', '#4bbfc3');
    $('#fullpage').fullpage({
        slidesColor: ['#1ABC9C', '#8fb98b', '#3498DB', '#eae1c0', '#de564b', '#7BAABE', '#E67E22', '#2f2f2f', '#E74C3C'],
        anchors:['home', 'friends', 'lover', 'roommates', 'people', 'besties', 'classmates', 'about'],
        scrollingSpeed: 800,
        easing: 'easeOutExpo',
        menu: '#menu',
        loopBottom: true,
        slidesNavigation: true,			

        //events
        afterLoad: function(anchorLink, index){
            $('#menu a').css('color', '#505050');
            $('#menu a').css('text-decoration', 'none');
            $('#s_' + anchorLink).css('color', '#4bbfc3');
            $('#s_' + anchorLink).css('text-decoration', 'underline');
        }
    });
});
