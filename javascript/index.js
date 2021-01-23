//import Typed from '../lib/typed.js/typed';

document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#description', {
      strings: [ 'Hello','I am <br>Rupak <br>Chowdhury^2000',' I am a <br> Hobbyist <br> Programmer <br>^2000 ','I am a <br> Learner^2000'],
      typeSpeed: 100,
      backSpeed: 100,
      loop:true,
      showCursor: false,
      smartBackspace: false
  });
});
