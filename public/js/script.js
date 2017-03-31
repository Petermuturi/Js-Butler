function listen(){
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognition.start();

  recognition.onresult = function(event) {
      const command = event.results[0][0].transcript;
      const action_asked = command.split(' ').shift();
      switch (action_asked) {
        case "find":
          window.open('https://duckduckgo.com/?q=\\'+command.split(' ').slice(1).join("+"));
          break;
        default:

      }
  }
}
