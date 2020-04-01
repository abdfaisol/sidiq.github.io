var drtion = 'left';
$(".nav--item").click(function(){
	$(".mn-flow").show();
	$(".mn-flow-item").removeAttr('id');
	drtion = $(this).attr('id');
	$(".mn-flow-item").attr('id',drtion);
	if(drtion == 'left'){
		$(".fn").css('z-index','0');
		$(".mn").css('z-index','1');
		$(".mn-flow-item").attr('id','animated-left2right');
		$(".rgt").removeClass('rgt').addClass('lft');
		setTimeout(function(){$(".fn").removeAttr('id')},600);
	}else{
		$(".mn").css('z-index','0');
		$(".fn").css('z-index','1');
		$(".mn-flow-item").attr('id','animated-right2left-r');
		$(".lft").removeClass('lft').addClass('rgt');
		setTimeout(function(){$(".mn").removeAttr('id')},600);
	}
	
})
$(".mn-s-flow").click(function(){
	$(".mn-flow").delay(500).hide(0);
	$(".mn-flow-item").removeAttr('id');
	$(".mn-flow-item").attr('id',drtion);
	if(drtion == 'left'){
		$(".mn-flow-item").attr('id','animated-right2left');
	}else{
		$(".mn-flow-item").attr('id','animated-left2right-r');
	}
})
$(".tofn").click(function(){
	$(".mn-flow-item").removeAttr('id');
	$(".mn").css('z-index','0');
	$(".fn").css('z-index','1');
	if(drtion == 'left'){
		$(".fn").attr('id','animated-left2right');
	}else{
		$(".fn").attr('id','animated-right2left-r');
	}

})
$(".tomn").click(function(){
	$(".mn-flow-item").removeAttr('id');
	$(".fn").css('z-index','0');
	$(".mn").css('z-index','1');
	if(drtion == 'left'){
		$(".mn").attr('id','animated-left2right');
	}else{
		$(".mn").attr('id','animated-right2left-r');
	}
})


$(".msg-exit").click(function(){
	$(".rlv").removeAttr('id');
	$(".rlv").attr('id','zoom-out');
	$(".msg").delay(500).hide(0);
})
$(".src--fitur").click(function(){
	$(".nav--fitur").removeClass("back-w-ani");
	$(".nav--fitur").addClass("full-w-ani");
})
$(document).mouseup(function(e) 
{
    var container = $(".src--fitur");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
    	if ($("#Kfitur").hasClass("full-w-ani")) {
    		$(".nav--fitur").removeClass("full-w-ani").addClass("back-w-ani");
		}else{
		}
    }
});

var a = 0;
var a_total = 0;
var a_r = 0;
var need = 0;
$(".sub").click(function(){
	if(parseInt($(".gg input").val()) >= 0){
		a = parseInt($(".gg input").val());
	}else{
		a = 0;
	}
	a_total = parseInt(a_total) + parseInt(a);
	a_r++;
	need = parseInt($(".want").val()) - a_total;
	$(".r").text(a_r);
	$(".need").val(need);
	$(".toa").text(a_total);
	$(".history table").append("<tr><td>"+a_r+"</td><td>"+a_total+"</td></tr>")
})
$(".il").click(function(){
	var target = "#il"+ (parseInt($(".il").index(this))+1).toString();
	$(target).slideToggle(1000);
})
$(".post").each(function(){
	if($(this).find("div#homeku").length !== 0){
		$(this).css('background-color','tomato')
	}
})
$(".func-top").click(function(){
	$("html, body").animate({scrollTop: 0}, 500);
});
$(".vol").click(function(){
	var target = "#vol"+ (parseInt($(".vol").index(this))+1).toString();
	
	$(".mn_index").show();
	$(".mn_index ul").hide();
	$(target).show();
	$(".mn_index").removeClass("index-right");
	$(".mn_index").addClass("index-left");
	$(".index-menu").css("overflow-y","hidden")
});
$(".beka").click(function(){
	$(".mn_index").removeClass("index-left");
	$(".mn_index").addClass("index-right");
	$(".mn_index").delay(600).hide(0);
	$(this).parent().delay(600).hide(0);
	$(".index-menu").css("overflow-y","auto")
});
