$(document).ready(function () {
    $(".card").click(function(){
        console.log("click .card");
        $(this).hide();
    });


    $(".ball").click(function(){
        $(this).toggleClass("active");
    });
});