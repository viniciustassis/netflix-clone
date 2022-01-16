$(document).ready(function()
{
    $("#botaoMaisInformacoes").click(function() {
        $("#dialogo").removeClass("hide");
        $("#dialogo").addClass("show");
    });
    
    $(".closePopup").click(function() {
        $("#dialogo").removeClass("show");
        $("#video").removeClass("show");
        $("#dialogo").addClass("hide");
        $("#video").addClass("hide");
    });

    $("#assistirVideo").click(function() {
        $("#video").removeClass("hide");
        $("#video").addClass("show");
        $(".video")[0].play();
    });
});