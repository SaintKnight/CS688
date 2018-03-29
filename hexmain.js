$(document).ready(
function(){
	$(".chara").addClass( "fade" );
	$(".chara").addClass( "width260" );
	$("#only").css("display","none");
	$(".intro").css("display","none");
	$("#a").addClass("aurl1");
	$("#b").addClass("burl1");
	$("#c").addClass("curl1");
	$("#d").addClass("durl1");
	$("#e").addClass("eurl1");
	$("#f").addClass("furl1");
	$("#g").addClass("gurl1");
	//extra
	$("#h").addClass("hurl1");
	$("#i").addClass("iurl1");
	$("#j").addClass("jurl1");
	$("#k").addClass("kurl1");
	$("#l").addClass("lurl1");
	$("#m").addClass("murl1");
	$("#n").addClass("nurl1");
	$("#o").addClass("ourl1");
	//$("#left").hover(loop, stop);

    $("#a").click({param1:"#a"},movetoleft);
    $("#b").click({param1:"#b"},movetoleft);
    $("#c").click({param1:"#c"},movetoleft);
    $("#d").click({param1:"#d"},movetoleft);
    $("#e").click({param1:"#e"},movetoleft);
    $("#f").click({param1:"#f"},movetoleft);
    $("#g").click({param1:"#g"},movetoleft);
    //extra
    $("#h").click({param1:"#h"},movetoleft);
    $("#i").click({param1:"#i"},movetoleft);
    $("#j").click({param1:"#j"},movetoleft);
    $("#k").click({param1:"#k"},movetoleft);
    $("#l").click({param1:"#l"},movetoleft);
    $("#m").click({param1:"#m"},movetoleft);
    $("#n").click({param1:"#n"},movetoleft);
    $("#o").click({param1:"#o"},movetoleft);

    $("#aintro").click({param1:"#a"},movetoright);
    $("#bintro").click({param1:"#b"},movetoright);
    $("#cintro").click({param1:"#c"},movetoright);
    $("#dintro").click({param1:"#d"},movetoright);
    $("#eintro").click({param1:"#e"},movetoright);
    $("#fintro").click({param1:"#f"},movetoright);
    $("#gintro").click({param1:"#g"},movetoright);
    //extra
    $("#hintro").click({param1:"#h"},movetoright);
    $("#iintro").click({param1:"#i"},movetoright);
    $("#jintro").click({param1:"#j"},movetoright);
    $("#kintro").click({param1:"#k"},movetoright);
    $("#lintro").click({param1:"#l"},movetoright);
    $("#mintro").click({param1:"#m"},movetoright);
    $("#nintro").click({param1:"#n"},movetoright);
    $("#ointro").click({param1:"#o"},movetoright);

    $(".big").okzoom({
  width: 200,
  height: 200,
  round: true,
  background: "#000",
  shadow: "0 0 5px #000",
  border: "1px solid black"
});
});

function loop(){
    $("html,body").animate({scrollLeft:'-=20'}, 100, 'linear', loop);
}        

function stop(){
    $("html,body").stop(true,true);
}

function movetoright(x){
	var v = x.data.param1;
	$(".intro").fadeOut(1000);
	setTimeout( function(){$("#out").css("width","4350px");},1001);
	$(".chara").delay(1002).fadeIn(1);
	$("#only").delay(1100).fadeOut(1);
	setTimeout( function(){$("#only").removeClass();}, 1200);
	setTimeout( function(){moveback(v);},1100);
	$(".fade").css("opacity", 0).animate({"opacity":"+=1"},{ duration: 1000, queue: true });
	setTimeout( function(){$(v).addClass("width260");},2010);
	setTimeout( function(){$(v).removeClass("width400");},2010);
	setTimeout( function(){changebgimgback(v);},2010);
	turnonclick();
	$("#out").addClass('csshover');
	$(v).addClass("fade");


}

function turnonclick(){
	$("#a").click({param1:"#a"},movetoleft);
    $("#b").click({param1:"#b"},movetoleft);
    $("#c").click({param1:"#c"},movetoleft);
    $("#d").click({param1:"#d"},movetoleft);
    $("#e").click({param1:"#e"},movetoleft);
    $("#f").click({param1:"#f"},movetoleft);
    $("#g").click({param1:"#g"},movetoleft);
    //extra
    $("#h").click({param1:"#h"},movetoleft);
    $("#i").click({param1:"#i"},movetoleft);
    $("#j").click({param1:"#j"},movetoleft);
    $("#k").click({param1:"#k"},movetoleft);
    $("#l").click({param1:"#l"},movetoleft);
    $("#m").click({param1:"#m"},movetoleft);
    $("#n").click({param1:"#n"},movetoleft);
    $("#o").click({param1:"#o"},movetoleft);
}

function movetoleft(x){
	var v = x.data.param1;
	$(v).addClass("width400");
	$(v).removeClass("width260");
	changebgimg(v,v);
    $(v).removeClass("fade");
    $("#out").removeClass('csshover');
    $(".chara").off("click");
    $(".fade").css("opacity", 1).animate({"opacity":"-=1"},500, 'swing');
    move(v);
    modonly(v);
    $(".chara").delay(1001).fadeOut(1);
    setTimeout( function(){$("#out").css("width","1450px");},1050);
    introin(v);
    
    

/*var timer;
timer = setTimeout(displayLine,1000);
    //$(".intro").delay(1003).fadeIn(1000);
}

var lines = $('p').text().split("\n");
function displayLine(){
    var nextLine = lines.shift();
    if(nextLine){
        var newLine = $('<li class="line">' + nextLine + '</li>');
        $('#result').append(newLine);
        newLine.animate({ 'margin-left':0 }, 200);
        timer = setTimeout(displayLine,1000);   
    }*/
}

function introin(v){
	switch(v){
		case '#a':
			$("#aintro").delay(1003).fadeIn(1000);
		break;

		case '#b':
			$("#bintro").delay(1003).fadeIn(1000);
		break;

		case '#c':
			$("#cintro").delay(1003).fadeIn(1000);
		break;

		case '#d':
			$("#dintro").delay(1003).fadeIn(1000);
		break;

		case '#e':
			$("#eintro").delay(1003).fadeIn(1000);
		break;

		case '#f':
			$("#fintro").delay(1003).fadeIn(1000);
		break;

		case '#g':
			$("#gintro").delay(1003).fadeIn(1000);
		break;
		//extra
		case '#h':
			$("#hintro").delay(1003).fadeIn(1000);
		break;
		case '#i':
			$("#iintro").delay(1003).fadeIn(1000);
		break;
		case '#j':
			$("#jintro").delay(1003).fadeIn(1000);
		break;
		case '#k':
			$("#kintro").delay(1003).fadeIn(1000);
		break;
		case '#l':
			$("#lintro").delay(1003).fadeIn(1000);
		break;
		case '#m':
			$("#mintro").delay(1003).fadeIn(1000);
		break;
		case '#n':
			$("#nintro").delay(1003).fadeIn(1000);
		break;
		case '#o':
			$("#ointro").delay(1003).fadeIn(1000);
		break;
	}	
}



function modonly(v){
	changebgimg("#only",v);
	$("#only").delay(1000).fadeIn(1);
}

function changebgimgback(v){
	switch(v){
		case '#a':
			$(v).addClass("aurl1");
			$(v).removeClass("aurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#b':
			$(v).addClass("burl1");
			$(v).removeClass("burl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#c':
			$(v).addClass("curl1");
			$(v).removeClass("curl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#d':
			$(v).addClass("durl1");
			$(v).removeClass("durl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#e':
			$(v).addClass("eurl1");
			$(v).removeClass("eurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#f':
			$(v).addClass("furl1");
			$(v).removeClass("furl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#g':
			$(v).addClass("gurl1");
			$(v).removeClass("gurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		//extra
		case '#h':
			$(v).addClass("hurl1");
			$(v).removeClass("hurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#i':
			$(v).addClass("iurl1");
			$(v).removeClass("iurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#j':
			$(v).addClass("jurl1");
			$(v).removeClass("jurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#j':
			$(v).addClass("jurl1");
			$(v).removeClass("jurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#k':
			$(v).addClass("kurl1");
			$(v).removeClass("kurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#l':
			$(v).addClass("lurl1");
			$(v).removeClass("lurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#m':
			$(v).addClass("murl1");
			$(v).removeClass("murl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#n':
			$(v).addClass("nurl1");
			$(v).removeClass("nurl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#o':
			$(v).addClass("ourl1");
			$(v).removeClass("ourl");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
	}
}

function changebgimg(v,w){
	switch(w){
		case '#a':
			$(v).addClass("aurl");
			$(v).removeClass("aurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#b':
			$(v).addClass("burl");
			$(v).removeClass("burl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#c':
			$(v).addClass("curl");
			$(v).removeClass("curl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#d':
			$(v).addClass("durl");
			$(v).removeClass("durl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#e':
			$(v).addClass("eurl");
			$(v).removeClass("eurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#f':
			$(v).addClass("furl");
			$(v).removeClass("furl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;

		case '#g':
			$(v).addClass("gurl");
			$(v).removeClass("gurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		// extra
		case '#h':
			$(v).addClass("hurl");
			$(v).removeClass("hurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#i':
			$(v).addClass("iurl");
			$(v).removeClass("iurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#j':
			$(v).addClass("jurl");
			$(v).removeClass("jurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#k':
			$(v).addClass("kurl");
			$(v).removeClass("kurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#l':
			$(v).addClass("lurl");
			$(v).removeClass("lurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#m':
			$(v).addClass("murl");
			$(v).removeClass("murl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#n':
			$(v).addClass("nurl");
			$(v).removeClass("nurl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
		case '#o':
			$(v).addClass("ourl");
			$(v).removeClass("ourl1");
			$(v).css({"border-right-width": "10px","border-right-style":"solid","border-right-color": "#FF6600"});
			$(v).css({"border-bottom-width": "10px","border-bottom-style":"solid","border-bottom-color": "#FF6600"});
		break;
	}
}

function move(v){
	switch(v){
		case '#a':
			$(v).css("margin-left", '60').animate({"margin-left": "-=100px", opacity: 1}, 1000, 'swing');
			movescreen("#a");
		break;

		case '#b':
			$(v).css("margin-left", '0').animate({"margin-left": "-=370px", opacity: 1}, 1000, 'swing');
			movescreen("#b");
		break;

		case '#c':
			$(v).css("margin-left", '0').animate({"margin-left": "-=641px", opacity: 1}, 1000, 'swing');
			movescreen("#c");
		break;

		case '#d':
			$(v).css("margin-left", '0').animate({"margin-left": "-=910px", opacity: 1}, 1000, 'swing');
			movescreen("#d");
		break;

		case '#e':
			$(v).css("margin-left", '0').animate({"margin-left": "-=1180px", opacity: 1}, 1000, 'swing');
			movescreen("#e");
		break;

		case '#f':
			$(v).css("margin-left", '0').animate({"margin-left": "-=1450px", opacity: 1}, 1000, 'swing');
			movescreen("#f");
		break;

		case '#g':
			$(v).css("margin-left", '0').animate({"margin-left": "-=1720px", opacity: 1}, 1000, 'swing');
			movescreen("#g");
		break;
		//extra
		case '#h':
			$(v).css("margin-left", '0').animate({"margin-left": "-=1990px", opacity: 1}, 1000, 'swing');
			movescreen("#h");
		break;
		case '#i':
			$(v).css("margin-left", '0').animate({"margin-left": "-=2260px", opacity: 1}, 1000, 'swing');
			movescreen("#i");
		break;
		case '#j':
			$(v).css("margin-left", '0').animate({"margin-left": "-=2530px", opacity: 1}, 1000, 'swing');
			movescreen("#j");
		break;
		case '#k':
			$(v).css("margin-left", '0').animate({"margin-left": "-=2800px", opacity: 1}, 1000, 'swing');
			movescreen("#k");
		break;
		case '#l':
			$(v).css("margin-left", '0').animate({"margin-left": "-=3070px", opacity: 1}, 1000, 'swing');
			movescreen("#l");
		break;
		case '#m':
			$(v).css("margin-left", '0').animate({"margin-left": "-=3340px", opacity: 1}, 1000, 'swing');
			movescreen("#m");
		break;
		case '#n':
			$(v).css("margin-left", '0').animate({"margin-left": "-=3610px", opacity: 1}, 1000, 'swing');
			movescreen("#n");
		break;
		case '#o':
			$(v).css("margin-left", '0').animate({"margin-left": "-=3880px", opacity: 1}, 1000, 'swing');
			movescreen("#o");
		break;
	}	
}

function moveback(v){
	switch(v){
		case '#a':
			$(v).css("margin-left", '-40').animate({"margin-left": "+=100px", opacity: 1}, 1000, 'swing');
			//movescreenback("#a");
		break;

		case '#b':
			$(v).css("margin-left", '-370').animate({"margin-left": "+=370px", opacity: 1}, 1000, 'swing');
			//movescreenback("#a");
		break;

		case '#c':
			$(v).css("margin-left", '-641').animate({"margin-left": "+=641px", opacity: 1}, 1000, 'swing');
			//movescreenback("#b");
		break;

		case '#d':
			$(v).css("margin-left", '-910').animate({"margin-left": "+=910px", opacity: 1}, 1000, 'swing');
			//movescreenback("#c");
		break;

		case '#e':
			$(v).css("margin-left", '-1180').animate({"margin-left": "+=1180px", opacity: 1}, 1000, 'swing');
			movescreenback("#d");
		break;

		case '#f':
			$(v).css("margin-left", '-1450').animate({"margin-left": "+=1450px", opacity: 1}, 1000, 'swing');
			movescreenback("#e");
		break;

		case '#g':
			$(v).css("margin-left", '-1720').animate({"margin-left": "+=1720px", opacity: 1}, 1000, 'swing');
			movescreenback("#f");
		break;
		// extra
		case '#h':
			$(v).css("margin-left", '-1990').animate({"margin-left": "+=1990px", opacity: 1}, 1000, 'swing');
			movescreenback2("#g");
		break;
		case '#i':
			$(v).css("margin-left", '-2260').animate({"margin-left": "+=2260px", opacity: 1}, 1000, 'swing');
			movescreenback2("#h");
		break;
		case '#j':
			$(v).css("margin-left", '-2530').animate({"margin-left": "+=2530px", opacity: 1}, 1000, 'swing');
			movescreenback2("#i");
		break;
		case '#k':
			$(v).css("margin-left", '-2800').animate({"margin-left": "+=2800px", opacity: 1}, 1000, 'swing');
			movescreenback2("#j");
		break;
		case '#l':
			$(v).css("margin-left", '-3070').animate({"margin-left": "+=3070px", opacity: 1}, 1000, 'swing');
			movescreenback3("#k");
		break;
		case '#m':
			$(v).css("margin-left", '-3340').animate({"margin-left": "+=3340px", opacity: 1}, 1000, 'swing');
			movescreenback3("#l");
		break;
		case '#n':
			$(v).css("margin-left", '-3610').animate({"margin-left": "+=3610px", opacity: 1}, 1000, 'swing');
			movescreenback3("#m");
		break;
		case '#o':
			$(v).css("margin-left", '-3880').animate({"margin-left": "+=3880px", opacity: 1}, 1000, 'swing');
			movescreenback3("#n");
		break;
	}	
}

function movescreen(x){
	$("html, body").animate({ scrollLeft: $(x).offset().top}, { duration: 1000, queue: false });
}

function movescreenback(x){
	//var leftpos = $("html, body").scrollLeft();
	$("html, body").delay(100).animate({ scrollLeft: 1000}, { duration: 1000, queue: true });
}
function movescreenback2(x){
	//var leftpos = $("html, body").scrollLeft();
	$("html, body").delay(100).animate({ scrollLeft: 2000}, { duration: 1000, queue: true });
}

function movescreenback3(x){
	//var leftpos = $("html, body").scrollLeft();
	$("html, body").delay(100).animate({ scrollLeft: 3000}, { duration: 1000, queue: true });
}


//css