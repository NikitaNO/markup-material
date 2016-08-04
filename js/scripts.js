 $(document).ready(function(){

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.open-user-profile').leanModal();
    $('.open-cancel-transaction').leanModal();

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


    $("#search-by-title").material_select();
    $("#search-by-price").material_select();


    $(".search-input").on("focus", () => {
        $(".header").addClass("on-typing");
        $(".close-layer").addClass("active");
    });
    $(".close-search-btn").on("click", () => {
        $(".header").removeClass("on-typing");
        $(".close-layer").removeClass("active");
    });
    $(".close-layer").on("click", () => {
        $(".header").removeClass("on-typing");
        $(".close-layer").removeClass("active");
    });
    $(".select-material").material_select();
    $(".y").material_select();



     var stateData = [{
         value: "COMM 201",
         value2: 'Business Communication'
     }, {
         value: "COMM 202",
         value2: 'Biz Communication'
     }, {
         value: "COMM 204",
         value2: 'Business Communication'
     }, {
         value: "COMM 205",
         value2: 'Biz Communication'
     }];

     $('.autocomplete').data('array', stateData);




     $('.radio-check').click(function() {
         if (this.id == 'test4' && this.checked) $('.my-card').addClass('my-card-show');
         else $('.my-card').removeClass('my-card-show');
     });


     var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';


     /**************************
      * Auto complete plugin  *
      *************************/


     $(input_selector).each(function() {
         var $input = $(this);

         if ($input.hasClass('autocomplete')) {
             var $array = $input.data('array'),
                 $inputDiv = $input.closest('.input-field'); // Div to append on
             // Check if "data-array" isn't empty
             if ($array !== '') {
                 // Create html element
                 var $html = '<ul class="autocomplete-content hide">';

                 for (var i = 0; i < $array.length; i++) {
                     // If path and class aren't empty add image to auto complete else create normal element
                     if ($array[i]['path'] !== '' && $array[i]['path'] !== undefined && $array[i]['path'] !== null && $array[i]['class'] !== undefined && $array[i]['class'] !== '') {
                         $html += '<li class="autocomplete-option"><img src="' + $array[i]['path'] + '" class="' + $array[i]['class'] + '"><span>' + $array[i]['value'] + '</span></li>';
                     } else {
                         $html += '<li class="autocomplete-option"><span>' + $array[i]['value'] + '</span><p>'+ $array[i]['value2'] +'</p></li>';
                     }
                 }

                 $html += '</ul>';
                 $inputDiv.append($html); // Set ul in body
                 // End create html element

                 function highlight(string) {
                     $('.autocomplete-content li').each(function() {
                         var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                             matchEnd = matchStart + string.length - 1,
                             beforeMatch = $(this).text().slice(0, matchStart),
                             matchText = $(this).text().slice(matchStart, matchEnd + 1),
                             afterMatch = $(this).text().slice(matchEnd + 1);
                         $(this).html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
                     });
                 }

                 // Perform search
                 $(document).on('keyup', $input, function() {
                     var $val = $input.val().trim(),
                         $select = $('.autocomplete-content');
                     // Check if the input isn't empty
                     $select.css('width',$input.width());

                     if ($val != '') {
                         $select.children('li').addClass('hide');
                         $select.children('li').filter(function() {
                             $select.removeClass('hide'); // Show results

                             // If text needs to highlighted
                             if ($input.hasClass('highlight-matching')) {
                                 highlight($val);
                             }
                             var check = true;
                             for (var i in $val) {
                                 if ($val[i].toLowerCase() !== $(this).text().toLowerCase()[i])
                                     check = false;
                             };
                             return check ? $(this).text().toLowerCase().indexOf($val.toLowerCase()) !== -1 : false;
                         }).removeClass('hide');
                     } else {
                         $select.children('li').addClass('hide');
                     }
                 });

                 // Set input value
                 $('.autocomplete-option').click(function() {
                     $input.val($(this).text().trim());
                     $('.autocomplete-option').addClass('hide');
                 });
             } else {
                 return false;
             }
         }
     });

  });