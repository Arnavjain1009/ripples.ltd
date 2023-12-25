var firebaseConfig = {
  apiKey: "AIzaSyBP5fSB_kiakv0r-WMo7BkP2Ik70c26tT0",
authDomain: "whattschat-f522c.firebaseapp.com",
databaseURL: "https://whattschat-f522c-default-rtdb.firebaseio.com",
projectId: "whattschat-f522c",
storageBucket: "whattschat-f522c.appspot.com",
messagingSenderId: "746097682908",
appId: "1:746097682908:web:51a0278320ad4af5774719",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database;
database = firebase.database();


var url_string = window.location.href; // www.test.com?filename=test
var url = new URL(url_string);
var myuserid = "publicipadress";
var mysecretkey = url.searchParams.get("secretkey");
var passwordmatched = false;

async function setIPAddress(){
  var ipAddress = '';
  var liveToknCnt = 0;

  await fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      ipAddress = data.ip;
      return firebase.database().ref('R9cookies').once('value');
    })
    .then(snapshot => {
      let matchFound = false;
      snapshot.forEach(childSnapshot => {
        const childData = childSnapshot.val();
        if (childData.ipAddress === ipAddress) {
          matchFound = true;
          if (childData.tokenCount > 0) { // check if there are any tokens left
            liveToknCnt = childData.tokenCount - 1;
            
            firebase.database().ref('R9cookies/' + childSnapshot.key).update({
              tokenCount: childData.tokenCount - 1 // reduce token count by one
            });
          } else {
            alert("your location is out of tokens")
            alert("watch ad to get tokens")
            window.location.href = "redirect.html"; // redirect if no tokens left
          }
        }
      });
      if (!matchFound) { // if IP address not found in database, add a new entry
        liveToknCnt = 9;
        firebase.database().ref('R9cookies').push({
          ipAddress: ipAddress,
          tokenCount: 9 // initialize token count to 9
        });
      }
    });

    return liveToknCnt;
}

async function getDataFromFirebase() {
  
  return new Promise(resolve => {
    firebase.database().ref('/cc/cc2').on('value', snapshot => {
      const data = snapshot.val();
      resolve(data);
    });
  });
}  
  var mydata = "";
  
async function main(prompt) {
  
    const img = document.createElement('img');
    img.src = 'https://i.pinimg.com/originals/53/e9/45/53e945c516cebdffd987b6c2df159db1.jpg';
    img.alt = 'AI';

    const profile = document.createElement('div');
    profile.className = 'profile';
    profile.appendChild(img);

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message ai';
    messageContainer.textContent = "in development sorry";

    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat';
    chatBubble.appendChild(profile);
    chatBubble.appendChild(messageContainer);
    
    chatContainer.appendChild(chatBubble);

    // Scroll to bottom of chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    const TknCount = await setIPAddress();
    document.getElementById('tokencountssg').innerHTML = "Tokens Left: " + TknCount;

    const data1 = await getDataFromFirebase();
    mydata = data1;
    
    
    const response =await fetch('https://api.openai.com/v1/chat/completions', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ mydata,
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": prompt}]
      }),
   
  });
  
  const data =await response.json();
  const message = data.choices[0].message.content;

  messageContainer.textContent = message;
  const chat = {
    prompt: prompt,
    response: message
  };
  var ipAddress1 = '';
  var liveToknCnt = 0;

  await fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      ipAddress1 = data.ip;
      return firebase.database().ref('R9cookies').once('value');
    })

  firebase.database().ref('history/' + myuserid).push(chat);
  
  firebase.database().ref('history/' + myuserid).once('value', snapshot => {
    const history = snapshot.val();
    if (history) {
      Object.values(history).forEach(chat => {
        
      });
    }
  });
  
  }
  



  const form = document.querySelector('form');
  const chatContainer = document.getElementById('chat_container');
  
  form.addEventListener('submit', async (e) => {
    if (e.target.prompt.value != "") {
      e.preventDefault();
  
      const prompt = e.target.prompt.value.toLowerCase();
  
      // Check if prompt contains the keyword "openai"
      if (prompt.includes("openai")) {
alert("please do not refer to openai we are r9gpt")
        window.location.href = "r9gpt.html"
      }
      if (prompt.includes("chatgpt")) {
        alert("please do not refer to chatgpt we are r9gpt")
                window.location.href = "r9gpt.html"
              }
              if (prompt.includes("r9gpt")) {
                alert("r9gpt has created the ai you are using")
                        window.location.href = "r9gpt.html"
                      }
                      if (prompt.includes("who created you")) {
                        
                        alert("r9gpt has created the ai you are using")
                                window.location.href = "r9gpt.html"
                              }
       
        
              
          
      main(prompt);
  
      // Clear the prompt input
      e.target.prompt.value = '';
    } 
  });  

form.addEventListener('submit', async (e) => {
  
  
if (e.target.prompt.value != ""){
  e.preventDefault();

  main(e.target.prompt.value);

  // Clear the prompt input
  e.target.prompt.value = '';
}
});