class Toky {
            constructor(){
                let recognition;                
                let final_transcript = '';
                let interim_transcript = '';
                if (!('webkitSpeechRecognition' in window)) {

                }else{
                    this.recognition = new webkitSpeechRecognition();
                    this.recognition.continuous = true;
                    this.recognition.interimResults = true;
                    this.recognition.lang = 'en-US';
                }
            }
            start(){
                this.recognition.start()
            }
            stop(){
                this.recognition.stop()
            }
            onstart(callBack){
                this.recognition.onstart = function(){
                    callBack()
                }
            }
            onend(callBack){
                this.recognition.onend = function(){
                    callBack()
                }
            }
            onresult(callBack){
                let final_transcript
                let interim_transcript
                let final= false;
                this.recognition.onresult = function(event){
                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            final = event.results[i].isFinal                        
                            final_transcript = event.results[i][0].transcript;                                        
                            callBack({final_transcript: final_transcript, interim_transcript:interim_transcript, final:final})                                                                                             
                        } else {
                            interim_transcript = event.results[i][0].transcript; 
                            callBack({final_transcript: final_transcript, interim_transcript:interim_transcript, final:final})                           
                        }
                    }
                    
                }
            }
            
        }

export default Toky                