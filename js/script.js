 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

  // For customized dropdown
function getdropdown(id) {
    // alert(id);
    $('#dropspan'+id).toggleClass('fa-angle-down fa-angle-right');
    if($('#dropspan'+id).hasClass('fa-angle-down')) {
        $('#akmenu'+id).slideDown();
    } else if($('#dropspan'+id).hasClass('fa-angle-right')) {
        $('#akmenu'+id).slideUp();
    }
}

if($(window).width() < 1025) {
    $('.ak-drop').removeClass('animated fadeInUp');
}