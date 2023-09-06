$(document).ready(function () {
    // Listen for click events on category buttons
    $('.category-btn').click(function () {
        // Remove active class from all buttons
        $('.category-btn').removeClass('active');
        // Add active class to the clicked button
        $(this).addClass('active');

        // Get the target section ID from the data attribute
        var target = $(this).data('target');

        // Scroll to the target section
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
        }, 500);

        // Move scrollbar thumb to the clicked button
        var buttonPosition = $(this).position().left;
        $('.scrollbox').animate({
            scrollLeft: buttonPosition
        }, 400);
    });
    
});

