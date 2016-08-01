 $(document).ready(function(){

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.open-user-profile').leanModal();

    $(".open-menu-btn").click( () => {
    	$(".main-menu").toggleClass("opened");
    } );

     $(".button-collapse").sideNav({
         menuWidth: 400, // Default is 240
         edge: 'right', // Choose the horizontal origin
     });

     $('.close-notifications').click(function() {
         $('#slide-out').sideNav('hide');
     });

  });