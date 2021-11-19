var factList = [

 "Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open",

 "You don’t have to control your thoughts. You just have to stop letting them control you.",

 "Take your time healing, as long as you want. Nobody else knows what you’ve been through. How could they know how long it will take to heal you?",

 "You can’t control everything. Sometimes you just need to relax and have faith that things will work out. Let go a little and just let life happen.",

 "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",

 "One small crack does not mean that you are broken, it means that you were put to the test and you didn’t fall apart.",

 "Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way."];

var fact = document.getElementById("fact");

var myButton = document.getElementById("myButton");

var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){

  fact.innerHTML = factList[count];

  count++;

  if (count == factList.length){

    count = 0;

  }

}
