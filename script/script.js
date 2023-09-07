// $(document).ready(function () {
//     // Listen for click events on category buttons
//     $('.category-btn').click(function () {
//         // Remove active class from all buttons
//         $('.category-btn').removeClass('active');
//         // Add active class to the clicked button
//         $(this).addClass('active');

//         // Get the target section ID from the data attribute
//         var target = $(this).data('target');

//         // Scroll to the target section
//         $('html, body').animate({
//             scrollTop: $('#' + target).offset().top
//         }, 500);

//         // Move scrollbar thumb to the clicked button
//         var buttonPosition = $(this).position().left;
//         $('.scrollbox').animate({
//             scrollLeft: buttonPosition
//         }, 400);
//     });
    
// });



var scrollbox = document.querySelector(".scrollbox");


$(document).ready(function () {
    // Listen for scroll events on the body
    $(window).scroll(function () {
        // Check the scroll position
        var scrollPosition = $(window).scrollTop();


        $('.category-btn').each(function () {

            var target = $(this).data('target');

            var sectionOffset = $('#' + target).offset().top;

            
            if (scrollPosition >= sectionOffset) {

                $('.category-btn').removeClass('active');

                $(this).addClass('active');


            }


            var activeElement = document.querySelector('.category-btn.active');
            if (activeElement) {
                var activeElementRect = activeElement.getBoundingClientRect();
                var scrollboxRect = scrollbox.getBoundingClientRect();

                var scrollLeftOffset = activeElementRect.left - scrollboxRect.left;
                scrollbox.scrollLeft += scrollLeftOffset;
            }

        });




    });
});




