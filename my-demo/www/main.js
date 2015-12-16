$(document).ready(function (ev) {

	$("#add").click(function appendTo(input) {
		var input = $('#grocery').val();
		$('.food').append('<li>' + input + '</li>');
		$('#grocery').val(null);
		listItems.push(input);
	    localStorage["medh0003"] = JSON.stringify(listItems);
	});

if (localStorage.getItem('medh0003')) {
    var listItems = JSON.parse(localStorage['medh0003']);
    for (var i = 0; i < listItems.length; i++) {
    	var li = document.createElement("li");
    	li.innerHTML = listItems[i];
    	$(".food").append(li);
    	$(".yellow").append(li);
    }
}else {
    var listItems = [];
}
	$("ul").on("click", function (ev) {
		$(ev.target).toggleClass("yellow");
	});
	
	$("ul").on("taphold", function (ev) {
			$(ev.target).remove();
			localStorage.removeItem('medh0003', ev.target);
	});

	$("#clear").click(function (ev) {
		$('.food').empty();
		localStorage.clear(listItems);
	});

	$(document).ready(function(ev) {
		$('body').bind('orientationchange', function (ev){
		//console.log( ev.orientation );
		});
		$("body").trigger('orientationchange');
	});
});

