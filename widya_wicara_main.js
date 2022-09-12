const url = window.location.href;
var api_endpoint = "http://127.0.0.1:8008/audio_widget_api";
var myRequest = new Request(api_endpoint + "?url_source=" + url);
console.log("awdhhuwas1");
fetch(myRequest).then(function(response) {
    if (response.status != "501") {
        var ifr = document.querySelectorAll('div[class$="post-body entry-content float-container"]');
        ifr.forEach(function(item) {
            var iframe_elm = document.createElement("iframe");
            iframe_elm.width = "100%";
            iframe_elm.id = "iframe-audio-widget-widya-wicara"
            iframe_elm.src = api_endpoint + "?url_source=" + url;
            iframe_elm.frameBorder = "0";
            iframe_elm.scrolling = "no";
            iframe_elm.allowfullscreen = "";
            iframe_elm.hidden = "";
            iframe_elm.onload = "frameload()";
            item.prepend(iframe_elm);
        });
    }
}).catch(function(error) {
    console.log(error);
});
