require.config({
	baseUrl:'js/lib/'
});
require(['slider','Miao_display','animation','util'],function(Slider,Dessert_display,animation,util){
	let imgs=['imgs/miaoquan/EG喵圈1.png','imgs/miaoquan/EG喵圈2.png'];
	let box = document.getElementById('slider');
	let slider_1 = new Slider(imgs,box);
});
