// JavaScript Document
//search s
    (function($) {
        $('#sidenav').hover(
                function() {
                    $('#custommenu').addClass('nav-hover').show();
                },
                function() {
                    $('#custommenu').removeClass('nav-hover').hide();
                });
    })(jQuery)



$('#searchvalue').click(function(){
		$('#valuelist').show();
	$('#boult').text('▲');	
	}
);
$('#boult').click(function(){
		$('#valuelist').show();
	$('#boult').text('▲');	
	}
);
$('#valuelist li').click(function(){
	var v = $(this).attr('title');
	var name = $(this).text();
	$('#typeid').val(v);
	$('#searchvalue').text(name);
	$('#boult').text('▼');
	$('#valuelist').hide();
});
$('#valuelist').hover(function(){
		$('#valuelist').show();
	$('#boult').text('▲');	
	},
	function(){
		$('#valuelist').hide();
	$('#boult').text('▼');
	}
);
//search e
//index table s
$(function() {
	$("#choose_div_01").addClass('choose_div');	
	
	$("#choose_div_01").click(function() {
		$("#p_show_02").hide();	
		$("#choose_div_02").removeClass('choose_div');
		$("#p_show_03").hide();	
		$("#choose_div_03").removeClass('choose_div');
		$("#p_show_04").hide();	
		$("#choose_div_04").removeClass('choose_div');	
		$("#p_show_05").hide();	
		$("#choose_div_05").removeClass('choose_div');	
		
		$("#p_show_01").show();
		$("#choose_div_01").addClass('choose_div');	
	});
	$("#choose_div_02").click(function() {
		$("#p_show_01").hide();	
		$("#choose_div_01").removeClass('choose_div');
		$("#p_show_03").hide();	
		$("#choose_div_03").removeClass('choose_div');
		$("#p_show_04").hide();	
		$("#choose_div_04").removeClass('choose_div');	
		$("#p_show_05").hide();	
		$("#choose_div_05").removeClass('choose_div');
		
		$("#p_show_02").show();	
		$("#choose_div_02").addClass('choose_div');	
	});
	$("#choose_div_03").click(function() {
		$("#p_show_01").hide();	
		$("#choose_div_01").removeClass('choose_div');
		$("#p_show_02").hide();	
		$("#choose_div_02").removeClass('choose_div');
		$("#p_show_04").hide();	
		$("#choose_div_04").removeClass('choose_div');	
		$("#p_show_05").hide();	
		$("#choose_div_05").removeClass('choose_div');
		
		$("#p_show_03").show();	
		$("#choose_div_03").addClass('choose_div');	
	});
	$("#choose_div_04").click(function() {
		$("#p_show_01").hide();	
		$("#choose_div_01").removeClass('choose_div');
		$("#p_show_02").hide();	
		$("#choose_div_02").removeClass('choose_div');
		$("#p_show_03").hide();	
		$("#choose_div_03").removeClass('choose_div');	
		$("#p_show_05").hide();	
		$("#choose_div_05").removeClass('choose_div');
		
		$("#p_show_04").show();	
		$("#choose_div_04").addClass('choose_div');	
	});
	$("#choose_div_05").click(function() {
		$("#p_show_01").hide();	
		$("#choose_div_01").removeClass('choose_div');
		$("#p_show_02").hide();	
		$("#choose_div_02").removeClass('choose_div');
		$("#p_show_03").hide();	
		$("#choose_div_03").removeClass('choose_div');	
		$("#p_show_04").hide();	
		$("#choose_div_04").removeClass('choose_div');
		
		$("#p_show_05").show();	
		$("#choose_div_05").addClass('choose_div');	
	});
	
	$("#choose_div_06").addClass('choose_div');	
	
	$("#choose_div_06").click(function() {
		$("#p_show_07").hide();	
		$("#choose_div_07").removeClass('choose_div');
		$("#p_show_08").hide();	
		$("#choose_div_08").removeClass('choose_div');
		$("#p_show_09").hide();	
		$("#choose_div_09").removeClass('choose_div');	
		$("#p_show_10").hide();	
		$("#choose_div_10").removeClass('choose_div');	
		
		$("#p_show_06").show();
		$("#choose_div_06").addClass('choose_div');	
	});
	$("#choose_div_07").click(function() {
		$("#p_show_06").hide();	
		$("#choose_div_06").removeClass('choose_div');
		$("#p_show_08").hide();	
		$("#choose_div_08").removeClass('choose_div');
		$("#p_show_09").hide();	
		$("#choose_div_09").removeClass('choose_div');	
		$("#p_show_10").hide();	
		$("#choose_div_10").removeClass('choose_div');	
		
		$("#p_show_07").show();
		$("#choose_div_07").addClass('choose_div');	
	});
	$("#choose_div_08").click(function() {
		$("#p_show_06").hide();	
		$("#choose_div_06").removeClass('choose_div');
		$("#p_show_07").hide();	
		$("#choose_div_07").removeClass('choose_div');
		$("#p_show_09").hide();	
		$("#choose_div_09").removeClass('choose_div');	
		$("#p_show_10").hide();	
		$("#choose_div_10").removeClass('choose_div');	
		
		$("#p_show_08").show();
		$("#choose_div_08").addClass('choose_div');	
	});
	$("#choose_div_09").click(function() {
		$("#p_show_06").hide();	
		$("#choose_div_06").removeClass('choose_div');
		$("#p_show_07").hide();	
		$("#choose_div_07").removeClass('choose_div');
		$("#p_show_08").hide();	
		$("#choose_div_08").removeClass('choose_div');	
		$("#p_show_10").hide();	
		$("#choose_div_10").removeClass('choose_div');	
		
		$("#p_show_09").show();
		$("#choose_div_09").addClass('choose_div');	
	});
	$("#choose_div_10").click(function() {
		$("#p_show_06").hide();	
		$("#choose_div_06").removeClass('choose_div');
		$("#p_show_07").hide();	
		$("#choose_div_07").removeClass('choose_div');
		$("#p_show_08").hide();	
		$("#choose_div_08").removeClass('choose_div');	
		$("#p_show_09").hide();	
		$("#choose_div_09").removeClass('choose_div');	
		
		$("#p_show_10").show();
		$("#choose_div_10").addClass('choose_div');	
	});
	
	
	
	/*$(".top-cart ul li").hover(function() {
		$(".cartJian").css("display","block");
		$(".cartJian.un").css("display","block");
		$(".cartJia").css("display","block");
		$(".cartJia.un").css("display","block");
		$(".top_cart_delete").css("display","block");
	}, function() {
            $(".cartJian").css("display","none");
			$(".cartJian.un").css("display","none");
			$(".cartJia").css("display","none");
			$(".cartJia.un").css("display","none");
			$(".top_cart_delete").css("display","none");
        });*/
	
	/*detail tab s*/
	$("#an_01").click(function() {
		$("#an_01").parent().attr('id','an_title_select');	
		$("#an_02").parent().attr('id','');	
		$("#an_03").parent().attr('id','');
		$("#an_04").parent().attr('id','');
	});
	$("#an_02").click(function() {
		$("#an_01").parent().attr('id','');	
		$("#an_02").parent().attr('id','an_title_select');	
		$("#an_03").parent().attr('id','');
		$("#an_04").parent().attr('id','');
	});
	$("#an_03").click(function() {
		$("#an_01").parent().attr('id','');	
		$("#an_03").parent().attr('id','an_title_select');	
		$("#an_02").parent().attr('id','');
		$("#an_04").parent().attr('id','');
	});
	$("#an_04").click(function() {
		$("#an_01").parent().attr('id','');	
		$("#an_04").parent().attr('id','an_title_select');	
		$("#an_02").parent().attr('id','');
		$("#an_03").parent().attr('id','');
	});
	/*detail tab e*/
	/*detail review and ticket form e*/
	
	/*detail review and ticket form s*/
	
})
//index table e






