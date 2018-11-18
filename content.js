document.getElementById("app").addEventListener("click",function(){
    document.getElementsByClassName("_39LWd")[0].innerHTML = "esp text suggest";
});

var message = "";
var bigrams = {};
document.getElementById("app").addEventListener("keyup", function(e){
    if(e.keyCode!=13){
    	message = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0].innerHTML;	
    }
    console.log(message);
    if(e.keyCode == 32){
		console.log("space hit");
		var words = message.split(" ");
	    current_word =  words[words.length-2];
   		console.log("word to work:"+current_word)
   		if(bigrams.hasOwnProperty(current_word)){
   			console.log("looking up:");
   			contending_words = bigrams[current_word];
   			console.log(contending_words);
   			keysSorted = Object.keys(contending_words).sort(function(a,b){return contending_words[a]-contending_words[b]});
   			esp_text_suggest = keysSorted[keysSorted.length-1] 
   			console.log(esp_text_suggest);
		}
	}
    else if(e.keyCode == 13){
    	console.log("enter hit");
    	words = message.split(" ");
    	for(i=0;i<words.length-1;i++){
    		first_word = words[i];
    		second_word = words[i+1];
    		if(bigrams.hasOwnProperty(first_word)){
    			if(bigrams[first_word].hasOwnProperty(second_word)){
    				bigrams[first_word][second_word] += 1;	
    			}
    			else{
    				bigrams[first_word][second_word] = 1
    			}
    			
    		}
    		else{ 
    			bigrams[first_word] = {};
    			bigrams[first_word][second_word] = 1;
    		}
    		console.log(first_word)
    	}
    }
});
