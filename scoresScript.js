function printHighscores() {
    
    var scoreList = document.getElementById("scoreList")
    var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
  
    // sort highscores by score property in descending order
    scores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < scores.length; i += 1) {
      
      var liTag = document.createElement('li');
      liTag.textContent = scores[i].initials + ' - ' + scores[i].score;
  
      var scoreOrderedList = document.createElement("ol");
      scoreList.appendChild(scoreOrderedList);
      scoreOrderedList.appendChild(liTag);
    }
  };
  
//   function clearHighscores() {
//     window.localStorage.removeItem('scores');
//     window.location.reload();
//   }
  
  //document.getElementById('clear').onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();