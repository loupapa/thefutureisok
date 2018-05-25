$(document).ready(function() {
// *** changes chuck did, please review

// Get modal element
var modal = document.getElementById('simpleModal');
// // This grabs the class modal-button and creates an array
// var modalBtn = $('.modal-button'); *****
// Get close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for the array, run the function (el) which displays the modal
// [].forEach.call(modalBtn, function(el) { ******
//   el.onclick = function() {
//       openModal();
//   }
// })
// modalBtn.on('click', function() {
//   openModal();
// });
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
  modal.style.display ='block';
}
// Function to close modal
function closeModal() {
  modal.style.display ='none';
}
// Function to close modal if outside click
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display ='none';
  }
}

// Link the horoscope API to modal + buttons

//*** cleared out result class instead of modal-content
//*** created new div class to put the info into
//*** appended to .result --- then opened modal (openModal())
//*** the order of when things are called matters. called meaning openModal().. not when the function is defined.. when it is CALLED.

  function renderHoroscope(data) {
    $('.result').html('') //empty out div of class results and then do this stuff
    $('<div class="result_text">') //doesnt exist until appendTo is called
      .append('<p class="horoscope__name">' + data.sign.toUpperCase() + '</p>')
      .append('<p class="horoscope__details">' + data.horoscope + '</p>')
    .appendTo('.result'); //.results already exists in html
    openModal(); //*****
    }

  function getHoroscope(sign) {
    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign,
    function(response) {
      renderHoroscope(response);
      }
    );
  }

  $('.modal-button').on('click', function() {
    var elementSign = $(this).data('sign');
    getHoroscope(elementSign); //****
  })
});
