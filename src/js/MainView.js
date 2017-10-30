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
    }
}