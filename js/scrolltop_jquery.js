$(document).ready(function () {
        // clickledikde sectiona yavas sekilde gedir, animasiya ile gedir.
        $("#mainMenu .nav-link").click(function (e) {
                e.preventDefault();
                let elem = $($(this).attr("href"));
                $("html, body").animate({ scrollTop: elem.offset().top - 100 }, "slow");
        });

        // yasil isiqi yandirir navbarda.
        $("body").scrollspy({
                target: "#navbarNav",
                offset: 0
        });

        //reflesh vurduqda eger seyfede ortasinda onda navbarin olcusunu kicildir.
        if ($(window).scrollTop() > 20) {
                $(".navbar").addClass("scrolled");
        }

        // yuxaridan gosterilen piksel ayrildiqda navbarin olcusunu kicildir.
        $(window).scroll(function () {
                if ($(this).scrollTop() > 20) {
                        $(".navbar").addClass("scrolled");
                } else {
                        $(".navbar").removeClass("scrolled");
                }
        })
});









// getBackToDescription();
// function getBackToDescription() {
//     window.scrollTo({
//         top: 0,
//         left: 0, behavior: 'smooth'
//     });
// }



