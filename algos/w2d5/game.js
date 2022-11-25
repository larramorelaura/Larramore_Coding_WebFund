var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
var mineCounter=0;

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";

  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      theDojo[i][j]=0;
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this); restart(${i}, ${j}, this);"></button>`;
    }
  }
  while(mineCounter<10){
    var randomPlace1 =Math.floor(Math.random()*theDojo.length);
    var randomPlace2= Math.floor(Math.random()*theDojo.length);
    console.log(randomPlace1, randomPlace2, theDojo[randomPlace1][randomPlace2]);
    if (theDojo[randomPlace1][randomPlace2] != 1){
      theDojo[randomPlace1][randomPlace2]= 1;
      mineCounter++;
    } 
  }
  console.log(theDojo);
  return result;
}

    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    var count=0;
    console.log({i, j});
    for(let row= i-1; row<=i+1 && row<theDojo.length; row++){
      if(row>=0){
          for(let col=j-1; col<=j+1 && col<theDojo[0].length; col++){
              if (!(row === i && col === j) && col>=0){
              count+=theDojo[row][col];
              }
          }
      }
    }
    console.log(count);
    element.innerText= count;
}



  alert("Hello, welcome to Dojo Sweeper, avoid the hidden ninjas! Good luck! ");
  function restart(i, j){
    if (theDojo[i][j]==1){
      dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    }
  }
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

