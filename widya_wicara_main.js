
const origin = window.location.href;
var api_endpoint = "https://tts-audiowidget-api.widyawicara.dev"
var url = api_endpoint+"/audio_widget_api?url_source="+origin;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "");
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      if (xhr.status == 200) {
        var ifr = document.querySelectorAll(ifrs);
        ifr.forEach(function (item) {
        var iframe_elm = document.createElement("iframe");
        iframe_elm.width = "100%";
        iframe_elm.id = "iframe-audio-widget-widya-wicara"    
        var iframe_url = api_endpoint+"/audio_widget_api?url_audio="+xhr.responseText;    
        iframe_elm.src = iframe_url;
        iframe_elm.frameBorder="0";
        iframe_elm.scrolling="no";
        iframe_elm.allowfullscreen="";
        iframe_elm.hidden="";
        item.prepend(iframe_elm);
      });
      }
    
   }};

  var data = `curl -X 'GET' \
  '$url' \
  -H 'accept: application/json' \
  -d ''`.replace('$url', url);
  xhr.send(data);
