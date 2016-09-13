var chairPicFileName = ["chair/chair1.jpg",	"chair/chair3.png",	"chair/chair5.jpg",	"chair/chair7.jpg",	"chair/chair9.jpg",
"chair/chair2.jpg",	"chair/chair4.jpg",	"chair/chair6.jpg",	"chair/chair8.jpg"];


var doorPicFileName = ["door/door1.jpg", "door/door2.jpg","door/door3.jpg","door/door4.jpg","door/door5.jpg","door/door6.jpg","door/door7.jpg"];

var tablePicFileName = ["table/table1.jpg", "table/table2.jpg","table/table3.jpg","table/table4.jpg","table/table5.jpg","table/table6.jpg","table/table7.jpg","table/table8.jpg","table/table9.jpg","table/table10.jpg","table/table11.jpg","table/table12.jpg","table/table13.jpg"];

var bedPicFileName = ["bed/bd1.jpg","bed/bd2.jpg","bed/bd3.jpg","bed/bd4.jpg","bed/bd5.jpg","bed/bd6.jpg","bed/bd7.jpg","bed/bd8.jpg","bed/bd9.jpg","bed/bd10.jpg","bed/bd11.jpg","bed/bd12.jpg","bed/bd13.jpg","bed/bd14.jpg","bed/bd16.jpg","bed/bd17.jpg","bed/bd18.jpg","bed/bd19.jpg","bed/bd20.jpg","bed/bd21.jpg","bed/bd22.jpg","bed/bd23.jpg"];

var tubPicFileName = ["tub/tub1.jpg","tub/tub2.jpg","tub/tub3.jpg","tub/tub4.jpg","tub/tub5.jpg","tub/tub6.jpg","tub/tub7.jpg","tub/tub8.jpg","tub/tub9.jpg","tub/tub10.jpg","tub/tub11.jpg","tub/tub12.jpg"];

var toiletPicFileName = ["toilet/to1.jpg","toilet/to2.jpg","toilet/to3.jpg","toilet/to4.jpg","toilet/to5.jpg","toilet/to6.jpg","toilet/to7.jpg","toilet/to8.jpg","toilet/to9.jpg","toilet/to10.jpg","toilet/to11.jpg","toilet/to12.jpg",];

var fireplacePicFileName = ["fireplace/fp1.jpg","fireplace/fp2.jpg","fireplace/fp3.jpg","fireplace/fp4.jpg","fireplace/fp5.jpg","fireplace/fp6.jpg","fireplace/fp7.jpg","fireplace/fp8.jpg","fireplace/fp9.jpg"];

var lightPicFileName = ["light/light1.jpg","light/light2.jpg","light/light3.jpg","light/light4.jpg","light/light5.jpg","light/light6.jpg","light/light7.jpg","light/light8.jpg","light/light9.jpg","light/light10.jpg","light/light11.jpg","light/light12.jpg","light/light13.jpg","light/light14.jpg","light/light15.jpg","light/light16.jpg","light/light17.jpg","light/light18.jpg","light/light19.jpg","light/light20.jpg","light/light21.jpg","light/light22.jpg","light/light23.jpg","light/light24.jpg","light/light25.jpg","light/light26.jpg","light/light27.jpg","light/light28.jpg","light/light29.jpg","light/light30.jpg","light/light31.jpg","light/light32.jpg","light/light33.jpg","light/light34.jpg","light/light35.jpg","light/light36.jpg","light/light37.jpg","light/light38.jpg","light/light39.jpg","light/light40.jpg","light/light41.jpg","light/light42.jpg","light/light43.jpg"];

var wallpaperPicFileName = ["wallpaper/wp1.jpg","wallpaper/wp2.jpg","wallpaper/wp3.jpg","wallpaper/wp4.jpg","wallpaper/wp5.jpg","wallpaper/wp6.jpg","wallpaper/wp7.jpg","wallpaper/wp8.jpg","wallpaper/wp9.jpg","wallpaper/wp10.jpg","wallpaper/wp11.jpg","wallpaper/wp12.jpg"];

var cabinetPicFileName = ["cabinet/c1.jpg","cabinet/c2.jpg","cabinet/c3.jpg","cabinet/c4.jpg","cabinet/c5.jpg","cabinet/c6.jpg","cabinet/c7.jpg"];

var wallcolorPicFileName = ["wallcolor/wc1.jpg","wallcolor/wc2.jpg"];

var wardrobePicFileName = ["wardrobe/w1.jpg","wardrobe/w2.jpg","wardrobe/w3.jpg","wardrobe/w4.jpg","wardrobe/w5.jpg","wardrobe/w6.jpg","wardrobe/w7.jpg","wardrobe/w8.jpg","wardrobe/w9.jpg","wardrobe/w10.jpg","wardrobe/w11.jpg","wardrobe/w12.jpg","wardrobe/w13.jpg",];

var cradlePicFileName = ["cradle/cr1.jpg","cradle/cr2.jpg","cradle/cr3.jpg","cradle/cr4.jpg","cradle/cr5.jpg","cradle/cr6.jpg","cradle/cr7.jpg","cradle/cr8.jpg","cradle/cr9.jpg","cradle/cr10.jpg","cradle/cr11.jpg","cradle/cr12.jpg","cradle/cr13.jpg","cradle/cr14.jpg","cradle/cr15.jpg","cradle/cr16.jpg","cradle/cr17.jpg","cradle/cr18.jpg","cradle/cr19.jpg","cradle/cr20.jpg","cradle/cr21.jpg"];

var sofaPicFileName = ["sofa/sofa1.jpg"];

var stairsPicFileName = ["stairway/st1.jpg","stairway/st2.jpg","stairway/st3.jpg","stairway/st4.jpg","stairway/st5.jpg","stairway/st6.jpg","stairway/st7.jpg","stairway/st8.jpg","stairway/st9.jpg",];


function loadFurniturePic(str) {
	switch (str) {
		case "armchair":
			showAll("armchair", chairPicFileName);
			break;
		case "door":
			showAll("door", doorPicFileName);
			break;
		case "table":
			showAll("table", tablePicFileName);
			break;
		case "bed":
			showAll("bed", bedPicFileName);
			break;
		case "hot_tube":
			showAll("tub", tubPicFileName);
			break;
		case "toilet_pan":
			showAll("toilet", toiletPicFileName);
			break;
	    case "campfire":
			showAll("fireplace", fireplacePicFileName);
			break;	
		case "lamp":
			showAll("light", lightPicFileName);
			break;	
		case "wallpaper_roll":
			showAll("wallpaper", wallpaperPicFileName);
			break;	
		case "commode":
			showAll("cabinet", cabinetPicFileName);
			break;	
		case "roller_brush":
			showAll("wallcolor", wallcolorPicFileName);
			break;	
		case "wardrobe":
			showAll("wardrobe", wardrobePicFileName);
			break;	
		case "crib":
			showAll("cradle", cradlePicFileName);
			break;	
		case "sofa":
			showAll("sofa", sofaPicFileName);
			break;	
		case "stairs":
			showAll("stairs", stairsPicFileName);
			break;	
		default:
	}
}

function showAll(str, fFileName) {
	$("div.layout_furniture_column#col_1").html("");
	$("div.layout_furniture_column#col_2").html("");
	$("div.layout_furniture_column#col_3").html("");

	$("div.layout_furniture").attr("id",str);

	for (var i = 0; i < fFileName.length;i++) {
		var chairDiv = $("<div class='layout_furniture_"+str+"'>");
		var chairImg = $("<img src=../img/" + fFileName[i]+" />");
		var likeImg = $('<img class="like" src="../img/like.png" />');
		chairDiv.append(likeImg, chairImg);

		if (i % 3 === 0) {
			$("div.layout_furniture_column#col_1").append(chairDiv);
		} else if (i % 3 === 1) {
			$("div.layout_furniture_column#col_2").append(chairDiv);
		} else if (i % 3 === 2) {
			$("div.layout_furniture_column#col_3").append(chairDiv);
		}
	}

	$('img.like').on({
	    'click': function(e) {
				$(this).closest('.show').remove();
	            var src = ($(this).attr('src') === '../img/like.png')
	            ? '../img/liked.png'
	            : '../img/like.png';
	        	$(this).attr('src', src);
	        	e.preventDefault();
	        

	    		
	      
	    }
	});

}