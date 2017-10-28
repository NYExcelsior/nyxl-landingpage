export default class MainView {
    init($) {
        $('nav a').click(function(evn){
            evn.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 700, () => {
                window.location.hash = this.hash;
            });
        });
    }
}