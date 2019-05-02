$(document).ready(function () {
    $("#amazingcover").click(function () {
        $("#overlay").show();
        $(".amazingcard").show();
        $(".close").show();
    });

    $(".close").click(function () {
        $(this).hide();
        $(".amazingcard").hide();
        $("#overlay").hide();
    });
});
