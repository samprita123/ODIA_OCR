async function proccess(file) {
  $(".result").html("");

  var bufferContainer = $(".buffer-container");
  bufferContainer.show();
  bufferContainer.css('visibility', 'visible');
  var speaker = $("#speaker");
  speaker.css('visibility', 'hidden');

  var src = (window.URL ? URL : webkitURL).createObjectURL(file);
  $("#image").attr("src", src);

  try {
    let r = await Tesseract.recognize(file, "ori+eng");
    result(r.data);
  } catch (error) {
    console.error("Error during recognition:", error);
  }

  bufferContainer.hide()
  bufferContainer.css('visibility', 'hidden');
}

// /**
// * progress function
// */
// function progress() {
//   var bufferContainer = $(".buffer-container");

//   if (bufferContainer.is(":visible")) {
//     bufferContainer.hide(); // Hide the animation
//   } else {
//     bufferContainer.show(); // Show the animation
//   }
// }

function result(data) {
  var r = $(".result");
  //r.html("");
  r.append(
    "<div id='odia_text' class='ui message'><pre>" + data.text + "</pre></div>"
  );
  translate(data.text);
  var speaker = $("#speaker");
  speaker.css('visibility', 'visible');

}

function translate(sourceText) {
  var sourceLang = 'or';
  var targetLang = 'en';
  var r = $(".result");
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText.replace("\n", " "));
  $.getJSON(url, function (data) {
    var resp = "";
    data[0].forEach(element => {
      resp += element[0];
    });
    r.append(
      "<div id='eng_text' class='ui message'><pre>" + resp + "</pre></div>"
    );
  });

}

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if ((macosPlatforms.indexOf(platform) !== -1) || (iosPlatforms.indexOf(platform) !== -1)) {
    os = 'Apple';
  } else {
    os = 'Other';
  }
  return os;
}

function play_tts() {
  var text = document.getElementById('odia_text');
  if (text && text.innerText.trim()) {
    text = text.innerText.trim().replace("\n", "");
  } else {
    text = "ଦୟାକରି ପ୍ରଥମେ ଏକ ପ୍ରତିଛବି ଅପଲୋଡ୍ କରନ୍ତୁ |";
  }
  console.log(text);
  var voice = "demo_indic_tdil_ori-M-1xxx.flitevox";
  var audio = document.getElementById('player');
  os = getOS();
  audio.setAttribute('src', 'https://Hear2Read.org/play.php?text=' + encodeURIComponent(text) + '&OS=' + encodeURIComponent(os) + '&voice=' + encodeURIComponent(voice));
  console.log(audio.attributes.src);
  audio.playbackRate = 1;
  audio.play();
}

function play_eng() {
  var text = document.getElementById('eng_text');
  if (text && text.innerText.trim()) {
    text = text.innerText.trim();
  } else {
    text = "Please Upload an Image First"
  }
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}