
  
var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function($scope){ 
  var wordsForButton=['word1', 'word2', 'word3'];
  var counterWords = 0;
  
  
  $scope.wordsButton = function(){
  	//cycles through the words array when you click the button
     $scope.wordsForButton = wordsForButton[counterWords % wordsForButton.length];
     counterWords++;  
  };

  var phrasesForButton=['phrase1', 'phrase2', 'phrase3'];
  var counterPhrases = 0;

  $scope.phrasesButton = function(){
  	//cycles through the phrases array when you click the button
     $scope.phrasesForButton = phrasesForButton[counterPhrases % phrasesForButton.length];
     counterPhrases++;  
  };





  // 	var wordsForDecor=['word1', 'word2', 'word3'];
  // 	var wordClasses=['purple', 'green', 'red'];
  // 	var counterColor = 0;

  // 	  $scope.decorButton = function(clickEvent){
  // 	//cycles through the words array when you click the button
  //    $scope.wordsForDecor = wordsForDecor[counterColor % wordsForDecor.length];
  //    $scope.wordClasses = wordClasses[counterColor % wordClasses.length];
  //    counterColor++;  
  // };




});
