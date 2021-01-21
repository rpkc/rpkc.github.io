//import Typed from '../lib/typed.js/typed';

document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#description', {
      strings: [ 'Hello','I am <br>^300Rupak <br>^300Chowdhury',' I am a <br> Hobbyist <br> programmer <br>^500 '+'&amp;'+' <br>^500 Learner^2000'],
      typeSpeed: 100,
      backSpeed: 100,
      loop:true,
      showCursor: false,
      smartBackspace: false
  });
});