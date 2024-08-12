$(document).ready(function() {
  $("#butao").click(function () {
    $("#albumCover").removeClass("albumCoverBrat").addClass("albumCoverWeezer");
    $("#albumTitle").removeClass("albumTitleBrat").addClass("albumTitleWeezer");
    $("#weezer").addClass("weezerguys-enabled");

    setTimeout(function() {

      $("#albumTitle").text("weezer");
    }, 500);
  
    $("#weez")[0].play();
    $("#butao").text(":trollface:");

  });
});
