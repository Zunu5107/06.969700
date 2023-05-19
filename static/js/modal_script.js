var $button         = $('.button'),
    $modalContainer = $('#modal-container'),
    _modalContainer = document.getElementById("modal-container"),
    $body           = $('body'),
    $modal          = document.querySelector(".modal"),
    btnId;

$button.on('click', function () {
    btnId = $(this).attr('id');
    
    $modalContainer
        .removeAttr('class')
        .addClass(btnId);
    
    $body.addClass('modal-active');
    
  });
  
//   $modalContainer.on('click', function () {
//     $(this).addClass('out');
//     $body.removeClass('modal-active');
//     if ($(this).hasClass(btnId)) {
      
//       $content.addClass('out');
      
//     }
//   });
//   _modalContainer.addEventListener("click", e => {
//     console.log("a");
//     const evTarget = e.target;
//     if(!evTarget.classList.contains("modal")) {
//         $modalContainer.addClass('out');
//         $body.removeClass('modal-active');
//     }
// });
  