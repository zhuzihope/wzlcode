
var fileName = ["armchair-50.png","door-50.png",		"table-50.png",
"bed-50.png",		"hot_tube-50.png",		"toilet_pan-50.png",
"campfire-50.png",		"lamp-50.png",		"wallpaper_roll-50.png",
"commode-50.png",	"roller_brush-50.png",	"wardrobe-50.png",
"crib-50.png",		"sofa-50.png",
		"stairs-50.png"];


function loadAllFurnitureIcon() {
	for (var i =0; i < fileName.length; i++) {
		loadFurnitureIcon(fileName[i], i);
	}
}


function loadFurnitureIcon(fName, i) {
	var count = 0;
	while(count < 10) {
		var div = $("<div class='dynDiv_moveDiv' id='move"+fName+"'>");
		var removeButton = $("<img class='remove' src='../img/remove.png'>");
		
		div.on("mousedown",function(){
			showLayoutFurniture(fName);
			showRemoveButton(this);
			$(this).find(".dynDiv_resizeDiv_br").attr("style","display:block;");
		});

		div.on("mouseover",function(){
			showLayoutFurniture(fName);
			showRemoveButton(this);
			$(this).find(".dynDiv_resizeDiv_br").attr("style","display:block;");
		});

		
		div.on("mouseleave",function(){
			$(this).find(".remove").attr("style","display:none;");
			$(this).find(".dynDiv_resizeDiv_br").attr("style","display:none;");
		});


		div.on("mouseup",function(){
			var rect1 = $(this).offset();
			var rect2 = $("#layout_board").offset();

			console.log(parseInt(rect1.top) +"  " +parseInt(rect2.top + $("#layout_board").width()));

			if (parseInt(rect1.top) < parseInt(rect2.top) || 
				parseInt(rect1.top) > parseInt(rect2.top + $("#layout_board").height()) ||
				parseInt(rect1.left) < parseInt(rect2.left) || 
				parseInt(rect1.left) > parseInt(rect2.left + $("#layout_board").width() )) {

		
				$(this).css({
					"left":60 * (i % 2),
					"top":60 * Math.floor(i / 2),
					"width":"50px",
					"height":"50px"
				});


			}

		});






		removeButton.on("click",function(e){
			e.stopPropagation();
			$(this).attr("style","display:none;");
			$(this).parent().css({
				"left":60 * (i % 2),
				"top":60 * Math.floor(i / 2),
				"width":"50px",
				"height":"50px"
			});
			
		});

		var img = $(furHtml[0]);
		img.attr("class","fur_icon");
		//div.append(img);

		div.css({
			"max-width":"160px",
			"max-height":"160px",
			"overflow":"visible",
			"background":"url('image/icon/"+fName+"')",
			"left":60 * (i % 2),
			"top":60 * Math.floor(i / 2),
			"background-size": "cover"
		});


		//var tl = '<div class="dynDiv_resizeDiv_tl"></div>';
		//var tr = '<div class="dynDiv_resizeDiv_tr"></div>';
		//var bl = '<div class="dynDiv_resizeDiv_bl"></div>';
		var br = '<div class="dynDiv_resizeDiv_br"></div>';
		div.append(removeButton);
		//div.append(tl, tr, bl, br);
		div.append(br);
		$("div#layout_drop_box").append(div);

		count++;
	
	}

}

function showLayoutFurniture(str) {
	str = str.substring(0, str.indexOf("-"));
	if ($("div.layout_furniture").attr("id") !== str) {
		loadFurniturePic(str);
		//window.location = '#';
	}
}

function showRemoveButton(obj) {
	$(obj).find("img.remove").css("display","block");

}

function allowDrop(ev) {
	ev.preventDefault();
}




$(document).ready(function() {
	//$("header").append("<div>" + navigator.userAgent +"</div>");

	if (navigator.userAgent.match(/iPad/i) !== null) {
		$("div#mobile_forbidden").css({
		    "display": "inline-block",
		    "position": "relative",
		    "height": "100%",
		    "z-index": "400",
		    "width": "100%",
		  });
	}

	loadAllFurnitureIcon();
});