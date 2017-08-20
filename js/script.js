  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){
		var windowYOffset = window.pageYOffset,
		elementYOffset = el.offsetTop, elBackgrounPos = "50% " + ((windowYOffset - elementYOffset) * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };


var container = document.querySelector('.five');
const RADIUS = 200;

document.addEventListener('mousemove', function (event) {
  var x = event.clientX;
 var y = event.clientY;
  
  var circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
  container.style['-webkit-clip-path'] = circle;

});

$(function(){

  $("#contact").validate({

        errorPlacement: function(label, element) {
        label.addClass('error-message');
        label.insertAfter(element);
    },

    wrapper: 'div',


    rules: {

      name: {
        required: true,
        minlength: 2
      },

      email: {
      required: true,
      email: true

      },

      subject: {
      required: true,

      },

      message: {
        maxlength: 180,
      required: true,

      }
    },

    messages: {

      name: {
        required: "Please enter a name",
      
      },

       email: {
        required: "Please enter an email address",
        email: "Please enter a valid email address",
       },


      subject: {
        required: "Please enter a subject",
      
      },

      message: {
        required: "Please enter a message",
         maxlength: "Your message is too long"
      
      }

    },

  });

});

var i = 0
slider();

function slider(){

       var imgslider; 
        var slider = document.querySelector('.six__content');
        imgslider = setInterval(changeimg, 5000);


          function changeimg() {  

 

               if (i<4) {
                   console.log(i)
                var current = 'six__content--img' + i;
                var nextimg = i + 1;
                var next = 'six__content--img' + nextimg; 
                   
                   slider.classList.remove(current);
                   slider.classList.add(next);

                i++
                }

                else {

                  current = 'six__content--img' + i;
                  slider.classList.remove(current);

                  i = 0

                  current = 'six__content--img' + i;
                  slider.classList.add(current);
                }
          }
      
}


