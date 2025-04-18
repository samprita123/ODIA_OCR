// Flite Indic Synthesis Demo Javascript files

// Global variables
var VoiceId = "";
var currentVoice = "";
var currentExample = "";
var currentExampleArray = "";
var UserName = "";
var UserEmail = "";
var commentNumber = 0;

var assamese_examples = [
    "মণিপুৰৰ উত্তৰে নাগালেণ্ড, দক্ষিণে মিজোৰাম, পশ্চিমে অসম ৰাজ্য আৰু পূৱ দিশত ম্যানমাৰ আছে."
];
var bengali_examples = [

    "তিনি কয়েকটি ভাষায় দক্ষ ছিলেন, এর মধ্যে ইংরেজি, ফরাসি, ডাচ, ইতালীয়, স্প্যানিশ ও জার্মান অন্তর্ভুক্ত।"
];

var punjabi_examples = [
    'ਪੰਜਾਬੀ ਪੰਜਾਬ ਦੀ ਭਾਸ਼ਾ, ਜਿਸ ਨੂੰ ਪੰਜਾਬ ਖੇਤਰ ਦੇ ਵਸਨੀਕ ਜਾਂ ਸੰਬੰਧਤ ਲੋਕ ਬੋਲਦੇ ਹਨ। ਇਹ ਭਾਸ਼ਾਵਾਂ ਦੇ ਹਿੰਦ-ਯੂਰਪੀ ਪਰਵਾਰ ਵਿੱਚੋਂ ਹਿੰਦ-ਇਰਾਨੀ ਪਰਵਾਰ ਨਾਲ ਸਬੰਧ ਰੱਖਦੀ ਹੈ। ਇਹ ਪੰਜਾਬੀਆਂ ਦੀ ਮਾਂ ਬੋਲੀ ਹੈ ਅਤੇ ਸਿੱਖੀ ਦੀ ਧਾਰਮਿਕ ਭਾਸ਼ਾ ਵੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਕੀਤੀ ਗਈ ਹੈ। ਇਹ ਦੁਨੀਆਂ ਅਤੇ ਖਾਸ ਕਰ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਉੱਘੇ ਭੰਗੜਾ ਸੰਗੀਤ ਦੀ ਭਾਸ਼ਾ ਹੈ। ਪਾਕਿਸਤਾਨ ਵਿੱਚ ਇਹ ਸਭ ਤੋਂ ਵੱਧ ਬੋਲੀ ਜਾਣ ਵਾਲੀ ਬੋਲੀ ਹੈ। ਇਸ ਤੋਂ ਬਿਨਾਂ ਸ਼ਬਦ "ਪੰਜਾਬੀ" ਨੂੰ ਪੰਜਾਬ ਨਾਲ ਸਬੰਧਤ ਕਿਸੇ ਵੀ ਚੀਜ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਿਵੇਂ ਕਿ ਪੰਜਾਬੀ ਬੋਲਣ ਵਾਲਿਆਂ ਅਤੇ ਪੰਜਾਬ ਖਿੱਤੇ ਦੇ ਰਹਿਣ ਵਾਲਿਆ ਨੂੰ ਪੰਜਾਬੀ ਹੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।'
];

var hindi_examples = [
    "यह हिंदी बोलने का एक उदाहरण है. भारत की जनसंख्या अब 134 करोड़ से अधिक है. 45 करोड़ से ज्यादा लोग भारत में हिंदी बोलते हैं. भारत के इंटरनेट उपयोगकर्ताओं को सामग्री में अधिक विश्वास है जो अंग्रेजी में नहीं है.।"
];
var kannada_examples = [
    "ಕನ್ನಡ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಪ್ರಾಮುಖ್ಯವುಳ್ಳ ಭಾಷೆ. ಕನ್ನಡ ಭಾಷೆಯನ್ನು ಅದರ ವಿವಿಧ ರೂಪಗಳಲ್ಲಿ ಸುಮಾರು ೪೫ ದಶಲಕ್ಷ ಜನರು ಆಡು ನುಡಿಯಾಗಿ ಬಳಸುತ್ತಲಿದ್ದಾರೆ. ಕನ್ನಡ ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಆಡಳಿತ ಭಾಷೆ. ಜಗತ್ತಿನಲ್ಲಿ ಅತ್ಯಂತ ಹೆಚ್ಚು ಮಂದಿ ಮಾತನಾಡುವ ಭಾಷೆಯೆಂಬ ನೆಲೆಯಲ್ಲಿ ಇಪ್ಪತ್ತೊಂಬತ್ತನೆಯ ಸ್ಥಾನ ಕನ್ನಡಕ್ಕಿದೆ. ವಿನೋಬಾ ಭಾವೆ ಕನ್ನಡ ಲಿಪಿಯನ್ನು ಲಿಪಿಗಳ ರಾಣಿಯೆಂದು ಹೊಗಳಿದ್ದಾರೆ."
];
var tamil_examples = [
    "தமிழ் மொழி தமிழர்களினதும், தமிழ் பேசும் பலரதும் தாய்மொழி ஆகும். தமிழ் திராவிட மொழிக் குடும்பத்தின் முதன்மையான மொழிகளில் ஒன்றும் செம்மொழியும் ஆகும். இரண்டாயிரத்து ஐந்நூறு ஆண்டுகளுக்கும் மேல் பழமை வாய்ந்த இலக்கிய மரபைக் கொண்டுள்ள தமிழ் மொழி, தற்போது வழக்கில் இருக்கும் ஒரு சில செம்மொழிகளில் ஒன்றாகும்."
];
var marathi_examples = [
    'मराठी ही इंडो-युरोपीय भाषाकुलातील एक भाषा आहे. भारतातील प्रमुख २२ भाषांपैकी मराठी एक आहे. महाराष्ट्र आणि गोवा ह्या राज्यांची मराठी ही अधिकृत राजभाषा आहे. मराठी मातृभाषा असणार्‍या लोकसंख्येनुसार मराठी ही जगातील पंधरावी व भारतातील चौथी भाषा आहे.',
];
var nepali_examples = [
    " नेपाली नेपालको आधिकारिक, र सबैभन्दा बढी बोलिने भाषा हो। भारतको सिक्किम राज्यमा नेपालीको आधिकारिक हैसियत छ। यो भुटानको एक चौथाई जनसंख्याले बोल्छ। भारतका अरुणाचल प्रदेश, असम, हिमाचल प्रदेश, मणिपुर, मेघालय, मिजोरम र उत्तराखण्ड राज्यहरूमा पनि नेपाली बोल्नेहरूको उल्लेख्य संख्या छ। म्यानमारमा यो बर्मी गोर्खाहरूले बोल्छन्। नेपाली भाषा १६० लाख मातृभाषा र अन्य ९० लाखले दोस्रो भाषाको रूपमा बोल्छन्।"
];
var odia_examples = [
    "ଓଡ଼ିଶା   ଭାରତର ପୂର୍ବ ଉପକୂଳରେ ଥିବା ଏକ  ରାଜ୍ୟ  ଅଟେ।  ଓଡ଼ିଆ ଭାଷା ରାଜ୍ୟର ସରକାରୀ ଭାଷା ।  ଭୁବନେଶ୍ୱର ଏହି ରାଜ୍ୟର ସବୁଠାରୁ ବଡ଼  ସହର ଏବଂ ରାଜଧାନୀ ଅଟେ ।    ଭାରତର ଦୀର୍ଘତମ ନଦୀବନ୍ଧ ହୀରାକୁଦ, ଏହି ରାଜ୍ୟର ସମ୍ବଲପୁର ଜିଲ୍ଲାରେ ଅବସ୍ଥିତ । ଏହାଛଡ଼ା ଓଡ଼ିଶାରେ ଅନେକ ପର୍ଯ୍ୟଟନ ସ୍ଥଳୀ ରହିଛି ।   ପୁରୀ, କୋଣାର୍କ ଓ ଭୁବନେଶ୍ୱରକୁ  ପୂର୍ବ ଭାରତର ସୁବର୍ଣ୍ଣ ତ୍ରିଭୁଜ ବୋଲି କୁହାଯାଏ ।  ପୁରୀର ଜଗନ୍ନାଥ ମନ୍ଦିର ଏବଂ ଏହାର ରଥଯାତ୍ରା ବିଶ୍ୱପ୍ରସିଦ୍ଧ |"
];
var telugu_examples = [
    "ఆంధ్ర ప్రదేశ్ మరియు తెలంగాణ రాష్ట్రాల అధికార భాష తెలుగు. ప్రపంచంలోని ప్రజలు అత్యధికముగా మాట్లాడే భాషలలో పదమూడవ స్థానములోనూ, భారత దేశములో హిందీ, తర్వాత స్థానములోనూ నిలుస్తుంది. అతి ప్రాచీన దేశ భాషలలో సంస్కృతము తమిళముతో బాటు తెలుగు భాషను 2008 అక్టోబరు 31న భారత ప్రభుత్వము. వెనీసుకు చెందిన వర్తకుడు నికొలో డా కాంటి భారతదేశం గుండా ప్రయాణిస్తూ, తెలుగు భాషలోని పదములు ఇటాలియన్ భాష వలె అజంతాలు  గా ఉండటం గమనించి తెలుగును ఇటాలియన్ అఫ్ ది ఈస్ట్‌గా వ్యవహరించారు."
];
var gujarati_examples = [
    "ગુજરાતી ભારત દેશના ગુજરાત રાજ્યની ઇન્ડો-આર્યન ભાષા છે. તે ઇન્ડો-યુરોપિયન ભાષા કુટુંબનો ભાગ છે. ગુજરાતીનો ઉદ્ભવ જૂની ગુજરાતી ભાષા માંથી થયો છે. તે ગુજરાત રાજ્ય અને દીવ, દમણ અને દાદરા-નગર હવેલી કેન્દ્રશાસિત પ્રદેશોની અધિકૃત ભાષા છે."
];
var sanskrit_examples = [
    "संस्कृतम् जगतः एकतमा अतिप्राचीना समृद्धा शास्त्रीया च भाषा वर्तते। संस्कृतं भारतस्य जगत: वा भाषास्वेकतमा‌ प्राचीनतमा। संस्कृता वाक्, भारती, सुरभारती, अमरभारती, अमरवाणी, सुरवाणी, गीर्वाणवाणी, गीर्वाणी, देववाणी, देवभाषा, दैवीवाक्‌ इत्यादिभिः नामभिः एतद्भाषा प्रसिद्धा।"
];
var malayalam_examples = [
    "ഹിയർടുറീഡ് ടെക്സ്റ്റ് ടു സ്‌പീച് ആപ്പ് ഡെമോയിലേക്ക് സ്വാഗതം. നിങ്ങൾ കേൾക്കുന്നത് ഹിയർടുറീഡ് ആപ്പിൽ നിന്നുള്ള കൃത്രിമ ശബ്ദോത്പാദനം ആണ്. ഒരു പരിധി വരെ തദ്ദേശീയർ ഈ ഭാഷ സംസാരിക്കുന്നതിനു തുല്യമാണ് നിങ്ങൾ കേൾക്കുന്ന ശബ്‌ദം."
];
var english_examples = [
    "He told himself that as he washed himself and groomed his disheveled clothes. For an instant he saw Pierre drawn like a silhouette against the sky."
];

// Functions
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
    document.getElementById('send-errors').innerHTML = "";
    //if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) ) {
    //	document.getElementById('example-area').innerHTML="<h4 style='color:red;text-align:center;'>Playback and download are not supported on iPhones or iPads</h4><p style='text-align:center;'><input type='submit' value='continue' style='border-radius:.75em;color:#de5841;' onclick='continue_session()'></p>";
    //	document.getElementById('comment-area').style.display='none';
    //	remove_comments();
    //	document.getElementById('example-area').style.display='block';
    //	document.getElementById('send-errors').innerHTML = "";
    //} else {
    document.getElementById('audio-controls').style.display = 'inline';
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('text-area').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'inline';
    //		remove_comments();
    //		add_comment();
    var text = document.getElementById('spoken-text').value;
    var voice = currentVoice;
    if (currentVoice.substr(-2, 2) == 'en') {
        voice = voice.replace("_", "_us_") + ".flitevox";
    } else {
        voice = voice.replace("_", "_indic_") + ".flitevox";
    }
    //		if(currentVoice == 'cmu_indic_axb_gu.flitevox') voice = 'cmu_indic_axb_hi.flitevox';
    var audio = document.getElementById('player');
    os = getOS();
    audio.setAttribute('src', 'https://Hear2Read.org/play.php?text=' + encodeURIComponent(text) + '&OS=' + encodeURIComponent(os) + '&voice=' + encodeURIComponent(voice));
    var rate = document.getElementById('play-rate').value
    audio.playbackRate = rate;
    audio.play();
    //}
}
function playNG_tts(NGVoice) {
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('audio-controls').style.display = 'inline';
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('text-area').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'inline';
    //		remove_comments();
    //		add_comment();
    var text = document.getElementById('spoken-text').value;
    var voice = NGVoice;
    //		if (currentVoice.substr(-2,2) == 'en' ) {
    //			voice = voice.replace("_", "_us_") + ".flitevox";
    //		} else {
    //			voice = voice.replace("_", "_indic_") + ".flitevox";
    //		}
    //		if(currentVoice == 'cmu_indic_axb_gu.flitevox') voice = 'cmu_indic_axb_hi.flitevox';
    var audio = document.getElementById('player');
    os = getOS();
    audio.setAttribute('src', 'https://Hear2Read.org/playNG.php?text=' + encodeURIComponent(text) + '&OS=' + encodeURIComponent(os) + '&voice=' + encodeURIComponent(voice));
    var rate = document.getElementById('play-rate').value
    audio.playbackRate = rate;
    audio.play();
    //}
} function download_tts() {
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('audio-controls').style.display = 'inline';
    document.getElementById('example-area').style.display = 'none';
    //		var theText = document.getElementById('textarea').value;
    //		document.getElementById('spoken-text').innerHTML = theText;
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('text-area').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'inline';
    //		remove_comments();
    //		add_comment();
    //		document.getElementById('show-comments').style.display='block';

    var text = document.getElementById('spoken-text').value;
    //		var voice = 'cmu_' + currentVoice + '.flitevox';
    var voice = currentVoice;
    if (currentVoice.substr(-2, 2) == 'en') {
        voice = voice.replace("_", "_us_") + ".flitevox";
    } else {
        voice = voice.replace("_", "_indic_") + ".flitevox";
    }
    //		if(currentVoice == 'Gujarati_Female_AXB') voice = 'Hindi_Female_AXB.flitevox';
    var audio = document.getElementById('player');
    var downloader = document.getElementById('downloader');
    //		var fileName = currentVoice;
    var fileName = voice.split('.');
    fileName = fileName[0] + "_" + currentExample + ".wav";
    downloader.setAttribute('href', 'https://Hear2Read.org/download.php?text=' + encodeURIComponent(text) + '&voice=' +
        encodeURIComponent(voice) + '&filename=' + fileName);
    downloader.setAttribute('download', fileName);
    downloader.click();
}
function change_rate() {
    var rate = document.getElementById('play-rate').value
    var audio = document.getElementById('player');
    audio.playbackRate = rate;
}
function continue_session() {
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('example-area').innerHTML = "";
    document.getElementById('comment-area').style.display = 'none';
    document.getElementById('example-area').style.display = 'none';
}

function get_language(language) {
    //	console.log("Entering get_language");
    document.getElementById('send-errors').innerHTML = "";
    currentVoice = language;
    currentExample = 1;
    var displayVoice = '';
    document.getElementById('send-errors').innerHTML = "";
    switch (language) {
        case 'as':
            currentExampleArray = assamese_examples;
            displayVoice = "Assamese";
            break;
        case 'bn':
            currentExampleArray = bengali_examples;
            displayVoice = "Bengla";
            break;
        case 'pa':
            currentExampleArray = punjabi_examples;
            displayVoice = "Punjabi";
            break;
        case 'hi':
            currentExampleArray = hindi_examples;
            displayVoice = "Hindi";
            break;
        case 'kn':
            currentExampleArray = kannada_examples;
            displayVoice = 'Kannada';
            break;
        case 'ml':
            currentExampleArray = malayalam_examples;
            displayVoice = 'Malayalam';
            break;
        case 'mr':
            currentExampleArray = marathi_examples;
            displayVoice = 'Marathi';
            break;
        case 'ne':
            currentExampleArray = nepali_examples;
            displayVoice = 'Nepali';
            break;
        case 'or':
            currentExampleArray = odia_examples;
            displayVoice = 'Odia';
            break;
        case 'sa':
            currentExampleArray = sanskrit_examples;
            displayVoice = 'Sanskrit';
            break;
        case 'ta':
            currentExampleArray = tamil_examples;
            displayVoice = 'Tamil';
            break;
        case 'te':
            currentExampleArray = telugu_examples;
            displayVoice = 'Telugu';
            break;
        case 'gu':
            currentExampleArray = gujarati_examples;
            displayVoice = 'Gujarati';
            break;
        case 'en':
            currentExampleArray = english_examples;
            displayVoice = 'Indian-English';
            break;
        default:
            currentExampleArray = '';
    }
    //	console.log("get_language: displayVoice = ".concat(displayVoice));
    var oXHR = new XMLHttpRequest();
    // get the name of the html file to be opened
    var postName = displayVoice.toLowerCase().concat("-text-to-speech-demo");
    console.log("html filename = " + postName);

    oXHR.open("POST", postName, true);
    oXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oXHR.onreadystatechange = function () {
        if (oXHR.readyState == 4 && oXHR.status == 200) {
            //			console.log("in readyState handler for send_comments:");
            var return_data = oXHR.responseText;
            document.getElementById('text-identifier').innerHTML = return_data;
            //			document.getElementById('sentence-number').innerHTML = currentExampleArray.get_current_index();
            //			document.getElementById('language-icons').style.display='none';
            //			document.getElementById('choose-a-voice').style.display='none';
            document.getElementById('chosen-voice').style.display = 'inline';
            document.getElementById('language').innerHTML = displayVoice;
            document.getElementById('language').style.display = 'inline';
            //			document.getElementById('sentence-controls').style.display = 'inline';
            document.getElementById('request-buttons').style.display = 'inline';
            document.getElementById('audio-controls').style.display = 'none';
            document.getElementById('spoken-text').innerHTML = currentExampleArray[currentExample - 1];
            //			document.getElementById('sentence-number').innerHTML = currentExample;
            document.getElementById('comment-area').style.display = 'block';
            //			add_comment();
            document.getElementById('example-area').style.display = 'none';
            document.getElementById('text-area').style.display = 'none';
            //			document.getElementById('text-request-button').style.display = 'none';
            document.getElementById('text-identifier').innerHTML += 'Example Text, or paste your own text in the window below (max 500 characters).';
/*			if (displayVoice == "Telugu") {
				temp = document.getElementById('demo-video-area');
				document.getElementById("demo-video-area").visibility = "visible";
			} else {
				document.getElementById("demo-video-area").visibility = "hidden";
			}
*/			if (displayVoice == "Telugu") {
                //				var demo_video = document.getElementById('demo-video');
                //			demo_video.src           = '../video/' + displayVoice + '_Demo_Video.mp4';
                //			demo_video.poster        = '../video/' + displayVoice + '_Demo_Video.png';
                //				demo_video.style.display = 'inline';
                //				document.getElementById('demo-text').style.display = 'inline';
            } else {
                //				document.getElementById('demo-video').style.display = 'none';
                //				document.getElementById('demo-text').style.display = 'none';

            }
            //			if ( document.getElementById('selected-voice').selectedIndex !=null ) {
            //				var voiceIndex = document.getElementById('selected-voice').selectedIndex;
            //				currentVoice = document.getElementById('selected-voice').options.item(voiceIndex).text;
            //			} else {
            currentVoice = document.getElementById('selected-voice').innerHTML;
            //			}
        }
    }
    // turn off buttons
    //	var langArray = language.split('_');
    //	var langId = langArray[2].substring(0,2);
    //	document.getElementById('send-errors').innerHTML="<p>language = "+language+" langId = "+langId+"</p>";
    var vars = "lang-id='" + language + "'";
    oXHR.send(vars);

}

function new_voice() {
    window.location.reload();
    document.getElementById('send-errors').innerHTML = "";
    //	document.getElementById('choose-a-voice').style.display='inline';
    document.getElementById('chosen-voice').style.display = 'none';
    document.getElementById('language-icons').style.display = 'block';
    document.getElementById('language').style.display = 'none';
    //	document.getElementById('sentence-controls').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'none';
    document.getElementById('audio-controls').style.display = 'none';
    document.getElementById('comment-area').style.display = 'none';
    //	document.getElementById('text-request-button').style.display = 'none';
    //	remove_comments();
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('textarea').style.display = 'none';
    document.getElementById('text-area').style.display = 'none';
    document.getElementById('show-comments').style.display = 'none';
    //	document.getElementById('text-request-button').style.display='none';
    //	document.getElementById('preview-text').style.display='none';
    //	document.getElementById('submit-button').style.display='none';
    //	document.getElementById('input-file').value = null;
    //	document.getElementById('show-sentences').style.display='block';
}
function add_comment() {
    // add remove button to current comment
    //	if (commentNumber > 0) {
    //		var buttonId = 'remove_btn' + commentNumber.toString();
    //		document.getElementById(buttonId).style.display='inline';
    //	}
    // increment comment number
    commentNumber += 1;
    // add new comment
    var container = document.createElement("div");
    container.innerHTML = "<div id='comment" + commentNumber + "' style='width:100%'>" +
        "<div style='width:15%;float:left;'>" +
        "<input type='text' name='comment-word' id='comment-word" + commentNumber + "' onclick='comment_word()' style='float:left;width:100%;border:3px solid;border-radius:5px;'>" +
        "<button id='remove_btn" + commentNumber +
        "' style='display:inline;font-size:1.1em;color:#de5841;vertical-align:-.5em;margin-right:.5em;width:90%;' " +
        "onclick='remove_comment(" +
        commentNumber + ")'>Remove</button></div>" +
        //					"<input type='button' id='remove_btn"+commentNumber+"' value='Remove Comment' onclick='remove_comment("+commentNumber+")' " +
        //					"style='display:inline;border-radius:.75em;margin:.5em 0 0 0;width:90%;font-weight:900;color:#de5841;'></div>" +
        "<textarea id='comment-text" + commentNumber + "' rows='3' maxlength='500' onclick='comment_text()' style='width:85%;border:3px solid;border-radius:5px;'></textarea>" +
        "</div>";
    document.getElementById("comments").appendChild(container);
    if (commentNumber > 1) {
        var prevNumber = commentNumber - 1;
        var obj = 'comment-word' + prevNumber.toString();
        document.getElementById(obj).autofocus = false;
    }
    obj = 'comment-word' + commentNumber.toString();
    document.getElementById(obj).autofocus = true;
}
function remove_comment(commentNumber) {
    // remove a single comment
    // single comments are removed by setting their display attribut to 'none
    var commentId = "comment" + commentNumber.toString();
    document.getElementById(commentId).style.display = 'none';
}
function remove_comments() {
    // remove all comments
    document.getElementById('comments').innerHTML = '';
    commentNumber = 0;
}
function comment_word() {
    document.getElementById('send-errors').innerHTML = "";
}
function email_click() {
    document.getElementById('send-errors').innerHTML = "";
}
function name_click() {
    document.getElementById('send-errors').innerHTML = "";
}
function isEmailValid(email) {
    "use strict";
    var local;
    var domail;
    var e = email.split("@");
    var local = /[^\w.!#$%&*+-\/=?^_{|}~]/;
    var domain = /[^\w.-]/;
    if (e.length !== 2) {
        return false;
    }
    if (local.test(e[0])) {
        return false;
    }
    if (e[0].length > 253) {
        return false;
    }
    if ((e[0][0] === ".") || (/\.\./.test(e[0]))) {
        return false;
    }
    if (domain.test(e[1])) {
        return false;
    }
    if (e[1].length > 253) {
        return false;
    }
    if (e[1][0] === "." || /\.\./.test(e[1]) || e[1][e[1].length - 1] === ".") {
        return false;
    }
    return true;
}
function save_user_info() {
    error_msg = document.getElementById('user-errors');
    error_msg.innerHTML = "";
    if (document.getElementById('user-name').value == "") {
        error_msg.innerHTML = "<p style='margin-top:0;color:red;text-align:center;'>Please enter you name.</p>";
    }
    if ((email = document.getElementById('e-mail').value) == "" || isEmailValid(email) == false) {
        error_msg.innerHTML += "<p style='margin-top:0;color:red;text-align:center;'>Please enter valid email address.</p>";
    }
    if (error_msg.innerHTML == '') {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        send_comments();
    }
}
function no_user_info() {
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
}
function comment_text() {
    document.getElementById('send-errors').innerHTML = "";
}
function show_examples() {
    // check to see if there are unsent comments
    if (there_are_comments()) {
        var answer = confirm("You have unsent comments.\n\n Select OK to continue without sending your comments and they will be lost.\n\nSelect Cancel to return and send them.");
        if (answer == false) {
            return;
        } else {
            //			remove_comments();
            //			add_comment();
        }
    }
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('comment-area').style.display = 'none';
    //	remove_comments();
    var examples = document.getElementById('example-area');
    var exampleString = "";
    var temp = currentVoice;

    exampleString = '<ol type="1" style="padding-left:1.5em;list-style:decimal;">';
    for (var i = 0; i < currentExampleArray.length; i++) {
        exampleString += "<li style='margin-bottom:.5em;'><a style='text-decoration:none;' name='" + i + "' onclick='choose_example(this.innerHTML, this.name)'>" + currentExampleArray[i] + "</a></li>";
    }
    exampleString += "</ol>";
    examples.innerHTML = exampleString;
    examples.style.display = 'block';
}

function next_example() {
    // check to see if there are unsent comments
    if (there_are_comments()) {
        var answer = confirm("You have unsent comments.\n\n Select OK to continue without sending your comments and they will be lost.\n\nSelect Cancel to return and send them.");
        if (answer == false) {
            return;
        } else {
            //			remove_comments();
            //			add_comment();
        }
    }
    document.getElementById('send-errors').innerHTML = "";
    if (currentExample == currentExampleArray.length) currentExample = 1; else currentExample++;
    document.getElementById('sentence-number').innerHTML = currentExample;
    document.getElementById('spoken-text').innerHTML = currentExampleArray[currentExample - 1];
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('audio-controls').style.display = 'none';
    //	remove_comments();
    //	add_comment();
    document.getElementById('text-identifier').innerHTML = currentVoice + '&nbsp;&nbsp;&nbsp;&nbsp;Example Sentence: ' + currentExample + ':';
}
function there_are_comments() {
    for (var i = 1; i <= commentNumber; i++) {
        var commentDivId = 'comment' + i.toString();
        // only send comments that have not been removed by setting display='none'
        if (document.getElementById(commentDivId).style.display != 'none') {
            // make sure there both a word and explaination have been entered
            if (((commentWord = document.getElementById('comment-word' + i.toString()).value) != '') &&
                ((commentText = document.getElementById('comment-text' + i.toString()).value) != '')) {
                return true;
            }
        }
    }
    return false;
}
function prev_example() {
    // check to see if there are unsent comments
    if (there_are_comments()) {
        var answer = confirm("You have unsent comments.\n\n Select OK to continue without sending your comments and they will be lost.\n\nSelect Cancel to return and send them.");
        if (answer == false) {
            return;
        } else {
            //			remove_comments();
            //			add_comment();
        }
    }
    document.getElementById('send-errors').innerHTML = "";
    if (currentExample == 1) currentExample = currentExampleArray.length; else currentExample--;
    document.getElementById('sentence-number').innerHTML = currentExample;
    document.getElementById('spoken-text').innerHTML = currentExampleArray[currentExample - 1];
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('audio-controls').style.display = 'none';
    //	remove_comments();
    //	add_comment();
    document.getElementById('text-identifier').innerHTML = currentVoice + '&nbsp;&nbsp;&nbsp;&nbsp;Example Sentence: ' + currentExample + ':';
}

function this_example() {
    document.getElementById('send-errors').innerHTML = "";
    currentExample = document.getElementById('sentence-number').innerHTML;
    document.getElementById('spoken-text').innerHTML = currentExampleArray[currentExample - 1];
    document.getElementById('text-identifier').innerHTML = currentVoice + '&nbsp;&nbsp;&nbsp;&nbsp;Example Sentence: ' + currentExample + ':';
    document.getElementById('audio-controls').style.display = 'none';
}

function choose_example(string, index) {
    document.getElementById('send-errors').innerHTML = "";
    var value = "";
    if (!string) {
        var radios = document.getElementsByName('exString');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                value = radios[i].value;
                break;
            }
        }
    } else {
        value = string;
    }

    if (value != "") {
        document.getElementById('spoken-text').innerHTML = value;
    }
    document.getElementById('sentence-number').innerHTML = Number(index) + 1;
    currentExample = Number(index) + 1;
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('comment-area').style.display = 'block';
    document.getElementById('audio-controls').style.display = 'none';
    //	add_comment();
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('text-identifier').innerHTML = currentVoice + '&nbsp;&nbsp;&nbsp;&nbsp;Example Sentence: ' + currentExample + ':';
}

function text_entered() {
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('example-text-area').style.display = 'none';
    var value = document.getElementById('sentence-area').value;
    var buttons = document.getElementById('request-buttons');
    if (value == "") {
        buttons.style.display = 'none';
        document.getElementById('audio-controls').style.display = 'none';
        document.getElementById('spoken-text').value = "";
        document.getElementById('comment-area').style.display = 'none';
        //		remove_comments();
    } else {
        buttons.style.display = 'inline';
    }
}
function new_sentence() {
    document.getElementById('send-errors').innerHTML = "";
    document.getElementById('example-text-area').style.display = 'none';
    var text_area = document.getElementById('text-area');
    text_area.style.display = 'block';
    text_area.value = "";
    document.getElementById('request-buttons').style.display = 'none';
    document.getElementById('audio-controls').style.display = 'none';
    document.getElementById('comment-area').style.display = 'none';
    //	remove_comments();
    document.getElementById('example-area').style.display = 'none';
    document.getElementById('sentence-area').style.display = 'block';
    document.getElementById('sentence-area').value = "";
    document.getElementById('current-example').innerHTML = "User Text";
}
function skip_comments() {
    if (there_are_comments()) {
        var answer = confirm("You have unsent comments.\n\n Select OK to continue without sending your comments and they will be lost.\n\nSelect Cancel to return and send them.");
        if (answer == false) {
            return;
        } else {
            //			remove_comments();
            //			add_comment();
        }
    }
    document.getElementById('comment-errors').innerHTML = "";
    document.getElementById('sentence-controls').style.display = 'inline';
    document.getElementById('audio-controls').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'inline';
    document.getElementById('show-comments').style.display = 'none';
}
function send_comments() {
    document.getElementById('send-errors').innerHTML = "";
    var user_name = document.getElementById("user-name").value;
    var user_from = document.getElementById("e-mail").value;
    //	var user_language = 'cmu_' + currentVoice + '.flitevox';
    var user_language = currentVoice;
    user_language = user_language.replace("_", "_indic_") + ".flitevox";
    var user_sentence = currentExample.toString() + ": " + document.getElementById('spoken-text').innerHTML;
    var user_comment = '';
    for (var i = 1; i <= commentNumber; i++) {
        var commentDivId = 'comment' + i.toString();
        // only send comments that have not been removed by setting display='none'
        if (document.getElementById(commentDivId).style.display != 'none') {
            // make sure there both a word and explaination have been entered
            if (((commentWord = document.getElementById('comment-word' + i.toString()).value) != '') &&
                ((commentText = document.getElementById('comment-text' + i.toString()).value) != '')) {
                user_comment = user_comment + "<p><span style='color:blue;'>In word: <span style='font-weight:900;'>" + commentWord +
                    "</span></span><br />" + commentText + "</p><br />";
            }
        }
    }
    if (user_comment != '') {
        if (user_name == '') {
            document.getElementById('user-info').style.display = 'block';
            document.getElementById('app-container').style.display = 'none';
        } else {
            document.getElementById('send-errors').innerHTML = "<p style='margin-top:0;color:#00548b;text-align:center;'>Send in progress</p>";
            var oXHR = new XMLHttpRequest();
            oXHR.open("POST", "indian-tts", true);
            oXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            oXHR.onreadystatechange = function () {
                if (oXHR.readyState == 4 && oXHR.status == 200) {
                    console.log("in readyState handler for send_comments:");
                    var return_data = oXHR.responseText;
                    document.getElementById('send-errors').innerHTML = return_data;
                    if (return_data.split[0] = "Thank") {
                        //						remove_comments();
                        //						// add_comment();
                        //						document.getElementById('sentence-controls').style.display='inline';
                        document.getElementById('audio-controls').style.display = 'none';
                        document.getElementById('request-buttons').style.display = 'inline';
                        document.getElementById('show-comments').style.display = 'none';
                    }
                }
            }
            // turn off buttons
            var call_id = 'send-comments';
            var vars = "call_id='" + call_id + "'&name='" + user_name + "'&from='" + user_from + "'&lang='" + user_language + "'&sentence='" + user_sentence + "'&comment='" + user_comment + "'";
            oXHR.send(vars);
        }
    } else {
        document.getElementById('comment-errors').innerHTML = "<p style='margin-top:0;color:red;text-align:center;'>No Comments to Send</p>";
    }
    return;
}
// Handle cut and paste into the sentence textarea
//function getTextAreaSelection(spokenTextArea) {
//    var start = spokenTextArea.selectionStart, end = spokenTextArea.selectionEnd;
//    return {
//        start: start,
//        end: end,
//        length: end - start,
//        text: spokenTextArea.value.slice(start, end)
//    };
//}

//function detectPaste(spokenTextArea, callback) {
//    spokenTextArea.onpaste = function() {
//        var sel = getTextAreaSelection(spokenTextArea);
//        var initialLength = spokenTextArea.value.length;
//       window.setTimeout(function() {
//            var val = spokenTextArea.value;
//            var pastedTextLength = val.length - (initialLength - sel.length);
//            var end = sel.start + pastedTextLength;
//            callback({
//               start: sel.start,
//                end: end,
//                length: pastedTextLength,
//                text: val.slice(sel.start, end)
//            });
//        }, 1);
//   };
//}

//var spokenTextArea = document.getElementById("spoken-text");
//detectPaste(spokenTextArea, function(pasteInfo) {
//    alert(pasteInfo.text);
// pasteInfo also has properties for the start and end character
// index and length of the pasted text
//});

function toggle_text() {
    if (document.getElementById('show-text').innerHTML == "Show Text") {
        document.getElementById('show-text').innerHTML = "Hide Text";
        document.getElementById('spoken-text').style.display = 'block';
    } else {
        document.getElementById('show-text').innerHTML = "Show Text";
        document.getElementById('spoken-text').style.display = 'none';
    }
}

function textfile_input() {
    document.getElementById('sentence-controls').style.display = 'none';
    document.getElementById('request-buttons').style.display = 'none';
    document.getElementById('show-sentences').style.display = 'none';
    document.getElementById('text-request-button').style.display = 'inline';
    document.getElementById('file-warning').style.display = 'inline';
    //	document.getElementById('preview-text').style.display='none';
}

function go_back() {
    document.getElementById('sentence-controls').style.display = 'inline';
    document.getElementById('request-buttons').style.display = 'inline';
    //	document.getElementById('show-sentences').style.display='inline';
    document.getElementById('text-request-button').style.display = 'none';
    //	document.getElementById('preview-text').style.display='none';
    //	document.getElementById('submit-button').style.display='none';
    //	document.getElementById('input-file').value = null;
}

function clean_text(text) {
    var textarray = text.split('\n');
    newtext = '<p>' + textarray[0];
    for (i = 1; i < textarray.length; i++) {
        newtext = newtext + '<br />' + textarray[i]
    }
    newtext = newtext + '</p>';
    return (newtext);
}

function check_filetype(e) {
    const fileTypeError = '<p>You have chosen an invalid file.  The file name must end with a .txt extension and be less than 10K bytes long.</p>';
    const textPreviewMsg = '<h2 style="text-align:left;">Text Preview:</h2>';
    var file = document.getElementById('input-file').files[0];
    var element = document.getElementById('preview-text');
    document.getElementById('file-warning').style.display = 'none';
    document.getElementById('send-errors').innerHTML = "";

    // check to make sure that this is a txt file and that its size is less than 10KB
    var pos = file.name.lastIndexOf(".");
    var ext = file.name.substr(pos);
    var temp = file.size;
    if (ext.toLowerCase() == '.txt' && file.size <= 10000) {
        // if yes .. preview text and enable SUBMIT buttons
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            var clean_contents = clean_text(contents);
            element.innerHTML = textPreviewMsg + clean_contents;
            document.getElementById('file-warning').style.display = 'none';
        };
        reader.readAsText(file);

        //		document.getElementById('submit-button').style.display='inline';
    } else {
        // if no ... clear preview and SUBMIT button and display an error message
        //		document.getElementById('submit-button').style.display='none';
        document.getElementById('file-warning').style.display = 'inline';
        element.innerHTML = fileTypeError;
    }
    element.style.display = 'block';
}

function upload_file() {
    const noFileError = 'You have not yet selected a file to upload';
    if (document.getElementById('input-file').value != "") {
        document.getElementById('send-errors').innerHTML = "";
        //		var voice = 'cmu_' + currentVoice + '.flitevox';
        var voice = currentVoice;
        voice = voice.replace('_', '_indic_') + '.flitevox';
        var downloader = document.getElementById('downloader');
        var ofileName = document.getElementById('input-file').files[0].name;
        var ofileName = ofileName.substr(0, ofileName.lastIndexOf('.')) + '.mp3'; // remove extension
        var target = document.getElementById('send-errors');
        var spinner = new Spinner().spin(target);
        downloader.setAttribute('download', ofileName);
        var oXHR = new XMLHttpRequest();
        oXHR.open("POST", "convert.php", true);
        oXHR.onreadystatechange = function () {
            if (oXHR.readyState == 4 && oXHR.status == 200) {
                //					console.log("in readyState handler for return from convert.php from upload_file():");
                spinner.stop();
                var return_data = oXHR.responseText;
                if (return_data != "Failure") {
                    document.getElementById('send-errors').innerHTML = "<p>File Converted.</p>";
                    document.getElementById('mp3-download-popup').style.display = 'inline';
                    // create hidden download link in popup the file name was given in the responseText
                    downloader.setAttribute('href', 'https://Hear2Read.org/download-mp3.php?mp3file=' + return_data +
                        '&ofile=' + ofileName);
                    //						downloader.setAttribute('download', 'textfile-to-mp3.mp3');
                    downloader.setAttribute('enctype', 'multipart/form-data');
                    downloader.click();
                } else {
                    document.getElementById('send-errors').innerHTML = "<p>File Convertion Failed</p>";
                }
                //					document.getElementById('send-errors').innerHTML = return_data;
                //					if (return_data.split[0] = "Thank") {
                //						document.getElementById('sentence-controls').style.display='inline';
                //						document.getElementById('audio-controls').style.display='none';
                //						document.getElementById('request-buttons').style.display='inline';
                //						document.getElementById('show-comments').style.display='none';
                //					}
            }
        }
        var formData = new FormData();
        formData.append("voice", voice);
        formData.append("textFile", document.getElementById('input-file').files[0]);
        oXHR.send(formData);
    } else {
        var element = document.getElementById('preview-text');
        element.innerHTML = noFileError;
        element.style.display = 'block';
    }
}
