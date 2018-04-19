$(function () {
	let boxList = [{
			link: '#',
			mainImg: './img/obj1.png',
			mainTitle: 'Cauly center',
			tagName: 'web ui ux',
	},
		{
			link: '#',
			mainImg: './img/obj2.png',
			mainTitle: 'Fsn stationary',
			tagName: 'Branding',
	},
		{
			link: '#',
			mainImg: './img/obj3.gif',
			mainTitle: 'Admax badge',
			tagName: 'Graphic design',
	},
	 {
			link: '#',
			mainImg: './img/obj4.jpg',
			mainTitle: 'Autumn',
			tagName: 'Illustration',
	},
				    {
			link: '#',
			mainImg: './img/obj4.jpg',
			mainTitle: 'Autumn',
			tagName: 'Illustration',
	},
				    {
			link: '#',
			mainImg: './img/obj4.jpg',
			mainTitle: 'Autumn',
			tagName: 'Illustration',
	},
				    {
			link: '#',
			mainImg: './img/obj4.jpg',
			mainTitle: 'Autumn',
			tagName: 'Illustration',
	},
				    {
			link: '#',
			mainImg: './img/obj4.jpg',
			mainTitle: 'Autumn',
			tagName: 'Illustration',
	}
	];
	
	$.each(boxList, function (i, v) {
		$('.contents_area').append(boxForm(v));
	});
});

var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

// function boxForm(v) {
// 	let html = `<article>
// 					<img class ="article-img" src="` + v.mainImg + `" alt="">
// 					<h1 class="txt_title_b">` + v.mainTitle + `</h1>
// 					<p class="txt_tag_b"><a href="#">` + v.tagName + `</a></p>
// 					<div class="tools">
// 						<img class="tool_img" src="./img/ps_icon.png" alt="">
// 						<img class="tool_img" src="./img/ai.icon.png" alt="">
// 					</div>
// 				</article>`;
// 	return html;
// }
