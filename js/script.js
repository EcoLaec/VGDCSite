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
}