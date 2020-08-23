/*----------------------------------
    	//----- PRICING BOTTOM -----//
    -----------------------------------*/
    $("document").ready(function () {
        $(".tab-slider--body:nth-child(1)").addClass('active');
    });
    $(".btn-toggle").on('click', function () {
        if ($(this).hasClass("active")) {
            $('.tab-slider--body:nth-child(1)').addClass('active');
            $('.tab-slider--body:nth-child(2)').removeClass('active');
        } else {
            $('.tab-slider--body:nth-child(2)').addClass('active');
            $('.tab-slider--body:nth-child(1)').removeClass('active');
        }
    });