$(document).ready(function(){
  // make everything invisible
  $("#title_img").addClass("invisible");
  $("#navbar").addClass("invisible");
  $("#footer").addClass("invisible");

  // fade in, title first
  $("#title_img").animate({opacity:1}, 1000, function(){
    $("#navbar").animate({opacity:1}, 900);
    $("#footer").animate({opacity:1}, 900);
  });

  $("#button0").on("click", {tabNum:0}, changeTab);
  $("#button1").on("click", {tabNum:1}, changeTab);
  $("#button2").on("click", {tabNum:2}, changeTab);
  $("#button3").on("click", {tabNum:3}, changeTab);

  $("h2").hover(portIn, portOut);

});

function portIn(event) {
  console.log("portIn triggered")
  $(this).animate({opacity:0.2}, 300);
}

function portOut(event) {
  console.log("portOut triggered")
  $(this).animate({opacity:1}, 300);
}

$(".thumbnail").hover(function(){
  console.log("is this thing on?")
  $(this).animate({opacity:0.2}, 500);
});

function changeTab(event) {
  tabNum = event.data.tabNum;
  // reset selection
  for (i=0; i<4; i++) {
    $("#connector" + i).css("visibility","hidden");
    $("#button" + i).removeClass("selected");
  }

  // a wild textbox appears!
  $("#target").css("display","block");

  // make button/connector selected
  $("#connector" + tabNum).css("visibility","visible");
  $(this).addClass("selected");

  // change content
  $("#target").html($("#tab" + tabNum).html());
}
