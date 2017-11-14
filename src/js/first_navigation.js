require.config({
	baseUrl:'js/lib/'
});
require(['slider','animation','util'],function(Slider,animation,util){
	let imgs = ['imgs/img_index/banner3.png','imgs/img_index/banner2.png','imgs/img_index/banner1.png'];
	let	box = document.getElementById('slider');
	let slider_1 = new Slider(imgs,box);
});