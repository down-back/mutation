function myFunction() {
    alert("Hello,\nIt's 0.0000.....000001 again.\nHave you already eaten 0.000...0001 ?");
  }

function catEye(selector){
    var eye = document.querySelector(selector);
    var pupil = eye.querySelector('.pupil');
    var eyeArea = eye.getBoundingClientRect();

    function eyeMovement (mouseX,mouseY) {
      var circle = Math.atan2(mouseY - (eyeArea.y + eyeArea.height * 0.5), mouseX - (eyeArea.x + eyeArea.width * 0.5));
      pupil.style.transform = 'rotate('+ (180 * circle / Math.PI - 90) +'deg)';
    };
    return {
      eyeMovement: eyeMovement
    };
  };

var eye1 = catEye('.eye-1');
var eye2 = catEye('.eye-2');

window.addEventListener('mousemove', function(e){
  eye1.eyeMovement(e.pageX, e.pageY);
  eye2.eyeMovement(e.pageX, e.pageY);
});