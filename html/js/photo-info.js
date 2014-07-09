/* ================================================================ 
This copyright notice must be untouched at all times.
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
$(document).ready(function(){

$(".categories_pic .wrap div").hover(function() {
	$(this).animate({"top": "-150px"}, 300, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 300, "swing");
});


});
