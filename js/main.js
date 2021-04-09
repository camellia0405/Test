$(function() {
    $('.Hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.Menu').addClass('active');
        } else {
            $('.Menu').removeClass('active');
        }
    });
});
