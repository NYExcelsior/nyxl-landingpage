import Waypoints from '../../node_modules/waypoints/lib/jquery.waypoints.js';
import Inview from '../../node_modules/waypoints/lib/shortcuts/inview.js';
export default class MainView {
    init($) {
        $('nav a').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 700, () => {
                window.location.hash = this.hash;
            });
        });
        $('section').each(function() {
            let inview = new Waypoint.Inview({
                element: this,
                entered: function() {
                    let sectionId = $(this.element).attr('id');
                    if(sectionId) {
                        if(!~window.location.hash.indexOf(sectionId)) {
                            if(history.pushState) {
                                history.replaceState({},'',`#${sectionId}`);
                            } else {
                                $(this.element).attr('id', '');
                                window.location.hash = sectionId;
                                $(this.element).attr('id', sectionId);inview.destroy();
                            }
                        }
                    } else {
                        if(history.pushState) {
                            history.replaceState({}, '', '/');
                        } else {
                            window.location.hash = '';
                        }
                    }
                }
            });
        });
        $('.roster .roster__row').on('click', function() {
            $(this).focus();
        });
        $('.roster .social-icon').on('click', function(e) {
            if($(this).parent('.social-icons').css('opacity')!=1) {
                e.preventDefault();
            }
        });
        $('.email .email__form-submit input').on('click', function(e) {
            // e.preventDefault();
            // $.ajax({
            //     url:$('.email .email__form form').attr('action'),
            //     type:'post',
            //     data:$('.email .email__form form').serialize(),
            //     success:function(){
            //     }
            // });
        });
        $('.menu-bars').on('click', function(){
            $('body').toggleClass('popup-menu-active');
            $(this).toggleClass('is-active');
        });
        $('.popup-menu a').on('click', function(){
            $('body').toggleClass('popup-menu-active');
            $('.menu .menu-bars').toggleClass('is-active');
        });
        document.ontouchmove = function (e) {
            if($('body').hasClass('popup-menu-active')) {
                e.preventDefault();
            } else {
                return true;
            }
        };
    }
}