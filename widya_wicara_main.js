var url = "https://tts-crawling.widyawicara.dev/process?user_account_id=andreganteng&pitch=1&speed=1&languageCode=Id&speaker=Teguh&url_source=https%3A%2F%2Fandrepradika.blogspot.com%2F2022%2F09%2Fidxchannel-ikatan-dokter-anak-indonesia.html&mode=auto&widget=enable";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Length", "0");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
