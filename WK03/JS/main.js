$(document).ready(function(){
    $(".fa-bars-staggered").click(function(event){
        event.stopPropagation();
        $(".menu").addClass("active");        
    })

    // Hide dropdown when clicking anywhere else on the screen
    $(document).on("click", function(event){
        if ($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
        }
      });
});