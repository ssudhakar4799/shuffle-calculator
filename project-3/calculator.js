//input box
var input = document.getElementById('number');
console.log(input);
//buttons
var buttons = document.getElementsByClassName('btn');
console.log(buttons);

var keysget = document.getElementById('keyorder');
//array values
let order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
keysget.addEventListener('click', shuffle)

//shuffle
function shuffle() {
   let currentIndex = order.length, randomIndex;

   // While there remain elements to shuffle.
   while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [order[currentIndex], order[randomIndex]] = [
         order[randomIndex], order[currentIndex]];
   }

   //array value concat btn value
   for (i = 0; i < order.length; i++) {
      var keyorder = 'btn-' + order[i];
      var keyelement = document.getElementById(keyorder);
      console.log(keyelement);
      keysget.prepend(keyelement);

   }


}

input.value = 0;
for (i = 0; i < buttons.length; i++) {
   var buttonsvalue = buttons[i];
   console.log(buttonsvalue);
   buttonsvalue.addEventListener('click', addvalue)
   function addvalue() {
      var inputvalue = parseInt(input.value);
      var btnvalue = parseInt(this.value);
      input.value = (inputvalue * 10) + btnvalue;
      console.log(input.value);

   }

   // resets
   var button1 = document.getElementById('clear');
   button1.addEventListener('click', reset)
   function reset() {
      var input = document.getElementById('number');

      input.value = null;


   }
}
