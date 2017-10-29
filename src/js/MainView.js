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
        $('.email .email__form-submit input').on('click', function(e) {
            e.preventDefault();
            $.ajax({
                url:$('.email .email__form form').action,
                type:'post',
                data:$('.email .email__form form').serialize(),
                success:function(){
                }
            });
        });
    }
}