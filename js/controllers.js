$(function () {

  /* Controllers */
	$("div.control").html('<button id="back" accesskey="b"> \
  	<img src="svg/white_back.svg" alt="" height="36" /> \
  </button> \
  <button id="help" accesskey="h"> \
  	<img src="svg/white_help.svg" alt="" height="36" /> \
  </button> \
  <button id="open" accesskey="o"> \
  	<img src="svg/white_left.svg" alt="" height="36" /><img src="svg/white_right.svg" alt="" height="36" /> \
  </button> \
  <button id="close" accesskey="c"> \
	  <img src="svg/white_right.svg" alt="" height="36" /><img src="svg/white_left.svg" alt="" height="36" /> \
  </button>');
		
	/* Event for "Go Back" Button */
	$("#back").click(function goBack() {
		window.location.replace("./");
	});
	
	/* Event for "Help" Button */
	$("#help").click(function openHelp() {
		window.open("help.html", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=700,height=500");
	});
	
	var l,t;
	
	/* Door Open */
	$("#open").click(function doorOpen(){
		/* reset door and light status */		
		clearInterval(l);
		$("#asd1").stop(); 
		$("#asd2").stop();
		$("#td1").stop(); 
		$("#td2").stop();
		$("#asd1").css({right:'50%'});
		$("#asd2").css({left:'50%'});
		$("#td1").css({right:'50%'});
		$("#td2").css({left:'50%'});
		/* door open animation */
		$("#asd1").animate({right:'+=200px'}, 3000);
		$("#asd2").animate({left:'+=200px'}, 3000);	
		$("#td1").animate({right:'+=140px'}, 2500);
		$("#td2").animate({left:'+=140px'}, 2500);
		/* flashing light */
		l = setInterval(flash, 500);
		t = 0;
		$(".light").addClass("lightOn");
		function flash() {
			$(".light").toggleClass("lightOn");
			t++;
			if (t>=6) {
				clearInterval(l);
			};
		};
	});
	
	/* Door Close */
	$("#close").click(function doorClose() {
		/* reset door and light status */		
		clearInterval(l);
		$("#asd1").stop(); 
		$("#asd2").stop();
		$("#td1").stop(); 
		$("#td2").stop();
		$("#asd1").css({right:'656px'});
		$("#asd2").css({left:'656px'});
		$("#td1").css({right:'596px'});
		$("#td2").css({left:'596px'});
		/* door close animation */
		$("#asd1").animate({right:'-=200px'}, 3000);
		$("#asd2").animate({left:'-=200px'}, 3000);	
		$("#td1").animate({right:'-=140px'}, 2500);
		$("#td2").animate({left:'-=140px'}, 2500);
		/* flashing light */
		l = setInterval(flash, 500);
		t = 0;
		$(".light").removeClass("lightOn");
		function flash() {
			$(".light").toggleClass("lightOn");
			t++;
			if (t>=6) {
				clearInterval(l);
			};
		};
	});

  /* Tooltips for controllers */
  $("#open").attr("title","开门 (O)");
  $("#close").attr("title","关门 (C)");
  $("#back").attr("title","返回主页 (B)");
  $("#help").attr("title","访问键帮助 (H)\n（点击以打开）");
  
});
