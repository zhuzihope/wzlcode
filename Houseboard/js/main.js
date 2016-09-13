
$(document).ready(function() {

	

	$("a.mainimg-link").on("click", function(){
		window.location ="#";
		window.scrollTo(0, 0);
		$("div.main-page").css("display","none");
		makeSingleDesignPage(this);
	});

	$(".likebook").on("click", function(){
		var tag = $(this).find(".like_tag").html();
		//console.log(tag);
		loadLikeSinglePage(tag);
	});


});


function makeSingleDesignPage(obj) {
	$("section.single-design-page").remove();

	var imgUrl = $(obj).find("img").attr("src");
	var nextImgUrl = $(obj).parent().next("div.show").find("img.mainimg").attr("src");
	var prevImgUrl = $(obj).parent().prev("div.show").find("img.mainimg").attr("src");
	console.log(nextImgUrl);

	nextImgUrl = (nextImgUrl == undefined) ? "img/livingroom/lv2.jpg" : nextImgUrl;

	prevImgUrl = (prevImgUrl == undefined) ? "img/livingroom/lv1.jpg" : prevImgUrl;


	var name = imgUrl.substring(imgUrl.indexOf("/")+1,imgUrl.indexOf("."));

	var singleSection = $("<section class='single-design-page' ></section>");

	var header = $('<div id="single"> \
		<img class="single_home" src="img/Btn_exit.png" width=20px height=auto onclick="closeSinglePage()">\
         <p class="clear"></p></div>');
	var singleCol = $('<div id="single_column">'+
   
                '<img class="single_mainimg" src="'+ imgUrl+'" />'+
            '</div>');
	header.append(singleCol);
	

	var singleColumnStr = '<div id="single_column_R">\
                   <div id="single_column_R_wrapper">\
                   <p><img class="numlike" src="img/liked.png" />123</p>\
                   <p>Dear Lillie Fall Home Tour - I love this peaceful\
        bedroom.</p>\
                   <ul class="tag">\
                   <h3>Tags</h3>\
                   <li>livingroom</li>\
                   <li>modern</li>\
                   <li>grey</li>\
                   <li>black</li>\
                   <li>white</li>\
                   <li>products</li>\
                   </ul>\
                   <h2>Related posts</h2>\
                     <div>\
                       <div class="single_imgwrapper"> \
                         <a href="#"><img class="crop" src="' + prevImgUrl +'" /></a> \
                       </div> \
                       <div class="single_imgwrapper"> \
                         <a href="#"><img class="crop" src="' + nextImgUrl +'" /></a> \
                       </div> \
                     </div> \
            </div></div>';
            var singleColumn = $(singleColumnStr);

    header.append(singleColumn);
    singleSection.append(header);

	$("body").append(singleSection);

	$(".crop").on("click", function(){
		var imgUrl2 = $(this).attr("src");
		$(".single_mainimg").attr("src",imgUrl2);
	});

}

function closeSinglePage() {
	window.location ="";
	$("section.single-design-page").remove();
	$("div.main-page").css("display","block");
}

function loadLikeSinglePage(tag) {
	switch (tag){
		case "Living room":
			window.location = "../html/likebookSingle.html#livingroom";
			break;
		case "Bedroom":
			window.location = "../html/likebookSingle.html#bedroom";
			break;
		case "Garden":
			window.location = "../html/likebookSingle.html#garden";
			break;
		case "Kids Room":
			window.location = "../html/likebookSingle.html#kids";
			break;
		case "Kitchen":
			window.location = "../html/likebookSingle.html#kitchen";
			break;
		case "Dining room":
			window.location = "../html/likebookSingle.html#diningroom";
			break;
		case "Bathroom":
			window.location = "../html/likebookSingle.html#bathroom";
			break;
		case "Stairway":
			window.location = "../html/likebookSingle.html#stairway";
			break;
		case "Hallway":
			window.location = "../html/likebookSingle.html#hallway";
			break;
	}
}

function makeSingleLikeBookPage() {
	var tag = document.URL.substring(document.URL.indexOf("#")+1);
	$("#likebook_back").append("<a>"+" / "+tag+"</a>");
	switch (tag) {
	case "livingroom":

			for (var i = 0; i < 13;i++) {
				var imgUrl = "../img/livingroom/lv" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;

	case "bedroom":

			for (var i = 0; i < 55;i++) {

				var imgUrl = "../img/bedroom/bd" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;

	case "garden":
			for (var i = 0; i < 1;i++) {
				var imgUrl = "../img/garden/gd" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;
	

	case "kids":
			for (var i = 0; i < 1;i++) {
				var imgUrl = "../img/kidsroom/kd" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;
	

	case "kitchen":
			for (var i = 0; i < 14;i++) {
				var imgUrl = "../img/kitchen/kt" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;

	case "diningroom":
			for (var i = 0; i < 2;i++) {
				var imgUrl = "../img/diningroom/dr" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;

	case "stairway":
			for (var i = 0; i < 41;i++) {
				var imgUrl = "../img/stairway/st" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;
	

	case "bathroom":
			for (var i = 0; i < 27;i++) {
				var imgUrl = "../img/bathroom/ba" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;

	case "hallway":
			for (var i = 0; i < 3;i++) {
				var imgUrl = "../img/hallway/hw" + (i+1) +".jpg";

				var mainDiv = $('<div class="show">\
		                <img class="mainimg"/>\
		                <a href="#" class="delete"><img class="like" src="../img/liked.png" /></a>\
		                <p>Dear Lillie Fall Home Tour - I love this peaceful bedroom.</p>\
		                <p><img class="numlike" src="../img/liked.png" />123</p></div>');

				mainDiv.find(".mainimg").attr("src",imgUrl);

				$("div.column#col-" + (i%3+1)).append(mainDiv);

			}
		break;
	}


	$('a>.like').on({
	    'click': function(e) {
				var answer = confirm('Are you sure to delete?')
		        if (answer){
		            $(this).closest('.show').remove();
		            var src = ($(this).attr('src') === '../img/like.png')
		            ? '../img/liked.png'
		            : '../img/like.png';
		        	$(this).attr('src', src);
		        	e.preventDefault();
		        }

	    		
	      
	    }
	});

}
	