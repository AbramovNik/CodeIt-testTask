$(function () {
	initMenu();
	clearList();
	removeFromeList();
});





function removeFromeList() {
	var btn = $(".remove-phone");
	var btn2 = $(".remove");

	var remove = function () {
		this.parentNode.parentNode.parentNode.parentNode.remove();
	}
	btn.on("click", remove);
	btn2.on("click", remove);
}


function initMenu() {
	var opener = $('.nav-btn');
	var page = $('html');
	var classActive = 'menu_active';

	var clickHandler = function () {
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}


function clearList() {
	var btnClear = $(".clear-list");
	var input = document.getElementById("search-input");
	$("#search-input").keyup(function(){
		if(input.value!==""){
			btnClear.removeAttr("disabled");
		}else{
			btnClear.attr("disabled",true)
		}
	})
	
	var clear = function(){
			
		input.value = "";
	}
	btnClear.on("click", clear);
}

$(document).ready(function () {
	$(".slide").searcher({
		itemSelector:  ".phone-hold", // jQuery selector for the data item element
		textSelector:  "h4", // jQuery selector for the element which contains the text
		inputSelector: "#search-input",  // jQuery selector for the input element
		toggle: function(item, containsText) {
			// use a typically jQuery effect instead of simply showing/hiding the item element
			if (containsText)
				$(item).fadeIn();
			else
				$(item).fadeOut("fast");
		}
	});

	$(".slider-wrapp").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		arrows: false
	})

	$('.features-wrapp').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

