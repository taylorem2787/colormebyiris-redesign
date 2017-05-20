
    //<![CDATA[
        $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#loader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(600).css({'overflow':'visible'});
        })

// $(document).ready(function(){
// 	function preload(arrayOfImages) {
  
//         var nbLoaded = 0,
//         nbTotal = arrayOfImages.length;
//         $(arrayOfImages).each(function()
//         {  
//             var $img = $('<img/>');
//             $img[0].src = this;
//             $img.one('load', function()
//             {
//                 nbLoaded ++;
//                 if($(window).width() >= 960) {
//                 	if (nbLoaded==37) { $("body").removeClass("loading") }
//                 } else {
//                 	if (nbLoaded==17) { $("body").removeClass("loading") }
//                 }
//             });
//         });
//     }
	
// 	if($(window).width() >= 960) {
// 		preload([
// 			'../public/index.html',

// 		]);
// 	}
// 	else {
// 		preload([
// 			'../public/index.html',
// 		]);
// 	};
	
// });