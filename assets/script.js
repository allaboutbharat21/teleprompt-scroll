$(document).ready(function() {
  var speedchange = 100*1000;
    // Scroll text on page load
$(loadText); 

// Control scrolling 
$("#start").click(loadText);
$("#pause").click(pauseScroll);

// Change speed
let speed = 2000*1000; // ms
$("#speed-up").click(() => {
  if(speed > speedchange) {speed -= speedchange;}
  if($("#scrolling-text").css("animation-play-state") == "running") {
    $("#scrolling-text").css("animation-play-state", "paused");
    loadText();
  }
});

$("#speed-down").click(() => {
  speed += speedchange;
  if($("#scrolling-text").css("animation-play-state") == "running") {
    $("#scrolling-text").css("animation-play-state", "paused");
    loadText();
  }  
});

// Light/dark mode
$("#light-mode").click(() => {
  $("body").removeClass("dark");
});

$("#dark-mode").click(() => {
  $("body").addClass("dark");
});

// Load text and scroll
function loadText() {
  $.get("text.txt", (data) => {
    $("#scrolling-text").text(data); 
    $("#scrolling-text").css("animation-play-state", "running");
    scrollText(speed);
  });
}

// Scroll animation
function scrollText(duration) {
  $("#scrolling-text").css("animation-duration", `${duration}ms`);
  $("#text-container").css("overflow", "hidden");
} 

// Pause scrolling
function pauseScroll() {
  $("#scrolling-text").css("animation-play-state", "paused");
  // Allow manual scroll
  $("#text-container").css("overflow", "auto"); 
  
  // Remove animation
  //$("#scrolling-text").css("animation", "none"); 
}

$("#text-container").on("wheel", (event) => {
  
  // Scroll element
  $("#scrolling-text").scrollTop(
    $("#scrolling-text").scrollTop() + event.originalEvent.deltaY
  );
  
});

$("#menu").click(() => {

  $(".controls").toggle();

});

});