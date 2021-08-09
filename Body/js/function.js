$(function(){
    $(" .divLoveiconboxrest i").click(function (e) { 
        $(this).toggleClass("hearted",$(".alertadd").toggle("2000"));
    });
});