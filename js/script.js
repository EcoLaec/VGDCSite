function expandAndHighlight(category_id,subcategory_id,category_collapse_id) {
	var category = document.getElementById(category_id)
	var subcategory = document.getElementById(subcategory_id)
	var category_collapse = document.getElementById(category_collapse_id)

	category.classList.add('highlight')

	subcategory.classList.add('highlight')

	$('#' + category_collapse_id).attr("style","transition: none !important;")
	$('#' + category_collapse_id).collapse({
		show: true
	})
	$('#' + category_collapse_id).attr("style","")
}

function initPage() {
	$.get('navigation/sidebar.html', function( data ) {
	  $("#sidebar").html(data);
	});
	$.get('navigation/topbar.html', function( data ) {
	  $("#topbar").html(data);
	});
	$.get('navigation/bottombar.html', function( data ) {
	  $("#bottombar").html(data);
	});
}

function applyComplexity() {
	$('.complexity').each(function() {
		var val = parseFloat($(this).html());
		$(this).html('<i class="bi bi-star-fill"></i>');
		val -= 1.0;
		for (let i = 0; i <= 1; i++) {
			if (val >= 1.0) {
				$(this).append('<i class="bi bi-star-fill"></i>');
				val -= 1.0;
			} else if (val >= 0.5) {
				$(this).append('<i class="bi bi-star-half"></i>');
				val -= 0.5;
			} else {
				$(this).append('<i class="bi bi-star"></i>');
			}
		}
	});
}

function toggleSideBar() {
	$(".bg-dark:first-of-type").toggleClass("t-none");
}

function copyCode(btn) {
	var pre = $(btn).parent().children('pre')[0];
	var code = $(pre).children('code')[0];
	var text = $(code).text();
	var tempArea = $('<textarea>')
	$('body').append(tempArea);
	tempArea.val(text).select();
	document.execCommand("copy");
	tempArea.remove();
}