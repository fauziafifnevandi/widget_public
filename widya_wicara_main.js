console.log("aku fauzi");
const url = window.location.href;
console.log(url);

var myRequest = new Request("http://127.0.0.1:8008/audio_widget?url_source="+url);

fetch(myRequest).then(function(response) {
  if (response.status != "501"){      
  var ifr = document.querySelectorAll(
    'div[class$="post-body entry-content float-container"]'
  );
  ifr.forEach(function (item) {
    var iframe_elm = document.createElement("iframe");
    iframe_elm.width = "100%";
    iframe_elm.id = "iframe-audio-widget-widya-wicara"
    // iframe_elm.src ="http://127.0.0.1:8008/audio_widget?audio_url=https://widya-tts-audio.s3.ap-southeast-3.amazonaws.com/andreganteng/e9a5fdd22e264f902a35bc75952acefd0738d001168932edfab85f353809e9f56060c570a67b95bc2b76f37f4d05d188_S0_Widya.wav";
    iframe_elm.src ="http://127.0.0.1:8008/audio_widget?url_source="+url;
    iframe_elm.frameBorder="0";
    iframe_elm.scrolling="no";
    iframe_elm.allowfullscreen="";
    iframe_elm.hidden="";
    iframe_elm.onload="frameload()";
    item.prepend(iframe_elm);
  });

  }  
}).catch(function(error) {
  console.log("error");
});


