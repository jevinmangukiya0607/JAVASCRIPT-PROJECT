const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

    const speak = () => {
        const message = document.querySelector(".reply").innerText;
        var speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
    p.innerText = text;
    texts.appendChild(p);

    if (e.results[0].isFinal) {
        if (text.includes('hello') ||text.includes('hi') || text.includes('hey')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "Hii";
            p.style.textAlign = "right";
            p.style.background="linear-gradient(to right, #f12711, #f5af19)"; 
            texts.appendChild(p);
        }
        if (text.includes('how are you')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "I'm fine, What About you?";
            p.style.textAlign = "right";
            p.style.background="linear-gradient(to right, #f12711, #f5af19)"; 
            texts.appendChild(p);
        }
        if (text.includes('what is your name') || text.includes("what's your name")) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "My name is Reco, Yours?";
            p.style.textAlign = "right";
            p.style.background="linear-gradient(to right, #f12711, #f5af19)"; 
            texts.appendChild(p);
            speak();
        }
        if (text.includes('open my YouTube channel')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "opening your channel";
            p.style.textAlign = "right";
            p.style.background="linear-gradient(to right, #f12711, #f5af19)"; 
            texts.appendChild(p);
            window.open('https://www.youtube.com')
        }
        if (text.includes('Play Munni Badnaam Hui')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "opening your channel";
            p.style.textAlign = "right";
            p.style.background="linear-gradient(to right, #f12711, #f5af19)"; 
            texts.appendChild(p);
            window.open('https://www.youtube.com/watch?v=Jn5hsfbhWx4&ab_channel=T-Series')
        }
        p = document.createElement('p');
    }
})



recognition.addEventListener('end', (e) => {
    recognition.start();
})

recognition.start();