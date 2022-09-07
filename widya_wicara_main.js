console.log("aku fauzi");
const url = window.location.href;
console.log(url);

var d1 = document.querySelectorAll(
  'div[class$="entry-content pagelayer-post-excerpt"]'
);
d1.forEach(function (item) {
  var sound = document.createElement("audio");
  sound.id = "audio-player";
  sound.controls = "controls";
  sound.src =
    "https://widya-tts-audio.s3.ap-southeast-3.amazonaws.com/WDYSTTDEV001/f19c953d1598200496d97d3979a6e2ada449756d46dfd45b92f13bb27b678a4eefa3e4b627a4d360faaaa97d5dbce9f3_S0.wav";
  sound.type = "audio/mpeg";
  item.prepend(sound);
});

// var div = document.createElement("div");
// div.innerHTML = "Hello";
// div.id = "widget-widya";

// document.querySelector(".post-body-container").appendChild(div);

// var html = [];
// html.push(
//   "<audio controls> \n  <source src=https://widya-tts-audio.s3.ap-southeast-3.amazonaws.com/andreganteng/153c2ece9a0c5b180d986c0fd19022493220a3b784beb7ae48b64fe85a3cb528cc648b0f9e94e141951a06b0f9e8b18b_S0_Widya.wav>  </audio>"
// );

// document.getElementById("widget-widya").innerHTML = html.join("");
