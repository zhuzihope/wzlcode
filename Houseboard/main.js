
$(document).ready(function() {
	var counter = 0;
	$("a#gallery_button").on("click",function(){

		if (counter % 2 === 0){		
			$("ul#gallery_selection").css("max-height","1000px");
				counter = counter+1;

				$(this).find("img").attr("src","img/arrow_down.png");
				
		
		} else {
			$("ul#gallery_selection").css("max-height","0px");
					counter = counter+1;
			
			$(this).find("img").attr("src","img/arrow.png");
			
		}
	});

});

$(document).ready(function() {
	var counter = 0;

    $('#color1').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});

$(document).ready(function() {
	var counter = 0;

    $('#color2').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});

$(document).ready(function() {
	var counter = 0;

    $('#color3').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});

$(document).ready(function() {
	var counter = 0;

    $('#color4').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});

$(document).ready(function() {
	var counter = 0;

    $('#color5').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color6').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color7').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color8').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color9').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color10').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color11').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});
$(document).ready(function() {
	var counter = 0;

    $('#color12').on("click", function(e) {
    	
    	if (counter % 2 === 0){		
			$(this).css({"border": "3px solid #b3f900"});
		
		} else {
			$(this).css({"border": "3px solid #efefef"});
		}

		counter = counter+1;
        e.preventDefault();
    });
});




$(document).ready(function() {
	$('a>.like').on({
	    'click': function(e) {

	    		var src = ($(this).attr('src') === 'img/like.png')
	            ? 'img/liked.png'
	            : 'img/like.png';
	        	$(this).attr('src', src);
	        	e.preventDefault();
	        
	    }
	});


});

$('.delete').on('click', function(){
        var answer = confirm('are you sure?')
        if (answer){
            $(this).closest('.show').remove();
        }
});



