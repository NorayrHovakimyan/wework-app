$(window).scroll(function() {
    var topOfOthDiv = $('.section1-subheader-p').offset().top;
    if ($(window).scrollTop() > topOfOthDiv) {
        //scrolled past the other div?

        $(document).ready(function() {
            var delay = 1000,
                fade = 'slow';
            var logos = $('.logo');
            var len = logos.length;
            var i = 0;

            setTimeout(cycle, delay);

            function cycle() {
                $(logos[i % len]).fadeOut(fade, function() {
                    $(logos[i % len]).fadeIn(fade, function() {
                        ++i;
                        setTimeout(cycle, delay);
                    });
                });
            }
            // console.log('done');
        });
    }
});

$('.btn').click(function(event) {
    console.log(event.target.parentElement.children[0].value);
});