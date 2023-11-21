const inputTeamNameOne = document.querySelector("#inputTeamName1");
const btn1 = document.querySelector("#btn1");

const inputTeamNameTwo = document.querySelector("#inputTeamName2");
const btn2 = document.querySelector("#btn2");

//Add player button
const inputAddPlayer = document.querySelector("#addPlayer");  //input 
const btn3 = document.querySelector("#btn3");                //button

//ul-list
const playerListOne = document.querySelector("#playersName1");  //ul -list 
const playerListTwo = document.querySelector("#playersName2");  //ul -list 

btn1.addEventListener("click", () => {
    let teamName1 = document.querySelector("#teamName1");
    teamName1.innerText = inputTeamNameOne.value;
  });

btn2.addEventListener("click", () => {
  let teamName2 = document.querySelector("#teamName2");
  teamName2.innerText = inputTeamNameTwo.value;
});

btn3.addEventListener("click", () => {
  let amountOfPlayers = document.querySelectorAll("#playersName1 li").length;
  let amountOfPlayers2 = document.querySelectorAll("#playersName2 li").length;

  if (amountOfPlayers < 5) {
    let li = document.createElement("li");
    li.innerText = inputAddPlayer.value;

    let deleteBtnName = document.createElement("button");
    deleteBtnName.innerText = "Leave Team";
    deleteBtnName.addEventListener("click", () =>{
    inputAddPlayer.removeChild(li);
    });

    let moveBtn = document.createElement("button");
    moveBtn.innerText = "Change the team!";
    moveBtn.addEventListener("click", ()=>{
        // if(playersName2<5){
            playerListOne.removeChild(li);
            playerListTwo.appendChild(li);
        // }
    });

    playersName1.appendChild(li);
    li.appendChild(deleteBtnName);
    li.appendChild(moveBtn);
  }
  else if 
  (amountOfPlayers2< 5) {
    let li = document.createElement("li");
    li.innerText = addPlayer.value;
    let deleteBtnName = document.createElement("button");
    deleteBtnName.innerText = "Leave Team";
    playersName2.appendChild(li, deleteBtnName);
    
  }

});

