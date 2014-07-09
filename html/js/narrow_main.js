
$.sandbox(function() {
	var e = $("#narrow_search_top"),
	t = e.find(".moreOpts");
	e.find("dl:first").addClass("first-line");
	$("#advancedOpts").click(function() {
		e.find("dl.hide").toggle();
		$(this).find("span").toggleClass("lessOpts");
		t.hasClass("lessOpts") ? t.text(litb.langs.viewLess) : t.text(litb.langs.viewAll);
		$(this).blur()
	});
	var n = 0;
	e.find("dl dt").each(function() {
		n = Math.max(n, $(this).width())
	}).css("width", n + 5);
	e.find(".showMore").click(function() {
		$(this).toggleClass("showLess").parent().find("a.hide").toggleClass("show");
		$(this).text($(this).hasClass("showLess") ? litb.langs.less: litb.langs.more)
	});
	e.find("dd a").not(".showMore").click(function() {
		$(this).toggleClass("selected")
	});
	$("#narrow-by-ns").find("dt").click(function() {
		$(this).toggleClass("down").next().slideToggle("fast")
	}).end().find("a").click(function() {
		var e = $(this);
		if (e.hasClass("more")) {
			var t = e.text(e.toggleClass("less").hasClass("less") ? litb.langs.less: litb.langs.more).siblings(".hide");
			t.css("display") === "none" ? t.css("display", "block") : t.css("display", "none");
			return ! 1
		}
		e.toggleClass("ns-selected")
	})
});

litb = window.litb || {};
litb.langs = {  less: "less",more: "more",viewLess: "Hide",viewAll: "View All"};