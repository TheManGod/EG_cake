// 模块化JS开发，入口文件
require.config({
	baseUrl:'js/lib/'
});
require(['slider'],function(Slider){
	let imgs = ['imgs/list1.jpg','imgs/list2.jpg'];
	let	box = document.getElementById('slider');
	let slider_1 = new Slider(imgs,box);
});