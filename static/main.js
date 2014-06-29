$(document).ready(function() {
    $('#s_home').css('background-image', "url('images/logo_focus.png')");
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

            $('#menu a').each(function(){
                if ($(this).attr('id').indexOf(anchorLink) < 0){
                    $(this).hover(function(){
                        if ($(this).attr('id').indexOf('s_home') >=0){
                            $(this).css('background-image', "url('images/logo_hover.png')");
                        }else{
                            $(this).css('color', '#000');
                        }

                    }, function(){
                        if ($(this).attr('id').indexOf('s_home') >=0){
                            $(this).css('background-image', "url('images/logo.png')");
                        }else{
                            $(this).css('color', '#505050');
                        }

                    })
                }
            });

            if (anchorLink.indexOf('home') >= 0){
                $('#s_home').css('background-image', "url('images/logo_focus.png')");
            }else{
                $('#s_home').css('background-image', "url('images/logo.png')");
                $('#s_' + anchorLink).css('color', '#4bbfc3');
                $('#s_' + anchorLink).css('text-decoration', 'underline');

                $('#s_' + anchorLink).hover(function(){
                    $(this).css('color', '#4bbfc3');
                });
            }
        }
    });
});
