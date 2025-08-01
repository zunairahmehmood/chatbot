let message = document.getElementById("message");
let userInput = document.getElementById("userInput");
let loader = document.getElementById("loader");
let error = document.getElementById("error");
let deleteButton = document.getElementById("delete");


function sendMessage() {
    if (event.key === "Enter") {
        message.innerHTML += `<li>${userInput.value}</li>`;
        const input = userInput.value.trim().toLowerCase();

        if (["hi", "hello", "hey", "assalam o alaikum"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Hey there! Tell me how do you feel. I’ve got quotes for that. 😊</li>`;
                loader.style.display = "none";
            }, 2000)
        }
        else if (["i'm feeling low", "i'm unmotivated", "i'm tired", "i'm bored", "i'm sad", "i'm depressed", "i'm anxious", "i'm stressed", "i'm not good enough"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">It's okay to feel that way sometimes. Here’s something to lift you up “Stars can’t shine without darkness.”</li>`;
                loader.style.display = "none";
            }, 3000)
        }
        else if (["another one, please", "can I get more?", "that was nice, one more?", "next quote"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Perfect! Here are another one </br> </br> We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim ❤</li>`;
                loader.style.display = "none";
            }, 4000)
        }
        else if (["tell me a quote about consistency"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Sure! Which Category? </br> </br> Type any one from given below: </br> Success </br> Hard Work </br> Exams </br> Failure </br> Focus </br> </li>`;
                loader.style.display = "none";
            }, 4000)
        }
        else if (["success"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Success is not final, failure is not fatal: It is the courage to continue that counts.</li>`;
                loader.style.display = "none";
            }, 2000)
        }
        else if (["hard work"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Hard work beats talent when talent doesn't work hard.</li>`;
                loader.style.display = "none";
            }, 1000)
        }
        else if (["exams"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Exams are the stepping stones to success, not the end of the road.</li>`;
                loader.style.display = "none";
            }, 1000)
        }
        else if (["failure"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Failure is simply the opportunity to begin again, this time more intelligently.</li>`;
                loader.style.display = "none";
            }, 1000)
        }
        else if (["focus"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Focus on your goals, not your obstacles.</li>`;
                loader.style.display = "none";
            }, 2000)
        }
        else if (["that was beautiful", "thank you", "i really needed that", "you just made my day", "aww thanks"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">I’m just out here spreading pixels of positivity 😌✨</li>`;
                loader.style.display = "none";
            }, 2000)
        }
        else if (["bye", "goodbye", "see you later", "take care"].includes(input)) {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Alright superstar 🌟 Keep going, you’ve got this!
                Until next time, keep chasing those dreams 🚀💛 </br> I’m just a click away whenever you need a dose of positivity. Take care! 😊</li>`;
                loader.style.display = "none";
            }, 5000)
        }
        else {
            loader.style.display = "block";
            setTimeout(function(){
                message.innerHTML += `<li class="bot">Sorry, I didn't understand that. Can you please rephrase?</li>`;
                loader.style.display = "none";
            }, 2000)
        }
        
        // Clear input
        userInput.value = "";
    }
}

function deleteMessages() {
    message.innerHTML = "";
}