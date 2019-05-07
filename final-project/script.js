$(document).ready(function () {
    $("#wherecover").click(function () {
        $("#overlay").show();
        $(".where").show();
        $(".close").show();
    });
    $("#amazingcover").click(function () {
        $("#overlay").show();
        $(".amazingcard").show();
        $(".close").show();
    });
    $("#whatcover").click(function () {
        $("#overlay").show();
        $(".what").show();
        $(".close").show();
    });
    $("#secretcover").click(function () {
        $("#overlay").show();
        $(".secret").show();
        $(".close").show();
    });
    $("#storkcover").click(function () {
        $("#overlay").show();
        $(".stork").show();
        $(".close").show();
    });
    $("#itiscover").click(function () {
        $("#overlay").show();
        $(".Amaz").show();
        $(".close").show();
    });
    $("#periodcover").click(function () {
        $("#overlay").show();
        $(".period").show();
        $(".close").show();
    });
    $("#happencover").click(function () {
        $("#overlay").show();
        $(".happen").show();
        $(".close").show();
    });
    $("#boyscover").click(function () {
        $("#overlay").show();
        $(".science").show();
        $(".close").show();
    });
    $("#normalcover").click(function () {
        $("#overlay").show();
        $(".perfect").show();
        $(".close").show();
    });
    $("#godcover").click(function () {
        $("#overlay").show();
        $(".god").show();
        $(".close").show();
    });
    $("#youngercover").click(function () {
        $("#overlay").show();
        $(".younger").show();
        $(".close").show();
    });
    

    $(".close").click(function () {
        $(this).hide();
        $(".amazingcard").hide();
        $(".where").hide();
        $(".what").hide();
        $(".happen").hide();
        $(".secret").hide();
        $(".stork").hide();
        $(".Amaz").hide();
        $(".science").hide();
        $(".period").hide();
        $(".younger").hide();
        $(".god").hide();
        $(".perfect").hide();
        $("#overlay").hide();
    });
    
        function openItem($item) {
            $item.find('img[src*="-grey"]').stop().fadeTo(1500, 0);
            $item.addClass('selected');
            $item.stop().animate({
                height: 363
            });
            $('body').css('backgroundColor', $item.css('backgroundColor'));
        }

        $(function() {
            $('#carousel').carouFredSel({
                circular: false,
                infinite: false,
                width: '100%',
                height: 405,
                items: 3,
                auto: false,
                prev: '#prev',
                next: '#next',
                scroll: {
                    items: 1,
                    duration: 1000,
                    easing: 'quadratic',
                    onBefore: function(data) {
                        data.items.old.find('img[src*="-grey"]').stop().fadeTo(500, 1);
                        data.items.old.removeClass('selected');
                        data.items.old.stop().animate({
                            height: 313
                        });
                        $('body').css('backgroundColor', '#ddd');
                    },
                    onAfter: function(data) {
                        openItem(data.items.visible.eq(1));
                    }
                },
                onCreate: function(data) {
                    openItem(data.items.eq(1));
                }
            });
        });

    
});
