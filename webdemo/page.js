var countCertainWordsInString = function(theString, theWordRoots) {

      var wordCounts = {};
      var words = theString.split(" ");

      words.forEach(function(ciceroWord){

          theWordRoots.forEach(function(wordRoot)
       {
          if(ciceroWord.substr(0, wordRoot.length) === wordRoot) {
              if(wordCounts[wordRoot] === undefined) {
                wordCounts[wordRoot] = 0;
              }
              wordCounts[wordRoot] +=1;
       }
      });
    });
        return wordCounts;
   };

var countAllWord = function(theString) {
  var wordCounts = {};
  var words = theString.split(" ");
  words.forEach(function(word) {
    if(wordCounts[word] === undefined) {
      wordCounts[word] = 0; {
      }
    wordCounts[word] +=1;
    }
  })
};


$(document).ready(function() {

// we look for something with ID of 'minimap' and with a <p> // inside it
// on click, assuming you click on a paragraph within the
// minimap
// then the below js will run
// which pulls the selected paragraph into 'main'
$('#minimap p').click(function() {
  // find paragraph we clicked on

  // this is the object that the function was called on
  alert('we clicked on a paragraph');
  $('#main').html('<p>' + this.innerText + '</p>');
  // don't need the "." before "paraclass" because
  // we're telling it to .addClass before hand
  $('#minimap p').removeClass("paraclass");
  $(this).addClass("paraclass");

  var count = countCertainWordsInString(this.innerText, ['mal', 'bon', 'dolor']);

  $('#mal').html(count.mal || 'none');
  $('#bon').html(count.bon || 'none');
  $('#dolor').html(count.dolor || 'none');

});
});

//best way to solve is to add a class


/*
$('#minimap p').css('background-color', 'white');
$(this).css('background-color', 'purple');
*/
