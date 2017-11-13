require.config({
	baseUrl:'js/lib'
});
require(['sub_page_display'],function(Factory){
	let today = document.getElementsByClassName('today_list')[0];
	let list_1 = new Factory(today,'list_1','imgs/cake_sub_page/list_1.png',{name:'和风鲜花蛋糕',infor:'让味蕾懂你的心跳',newPrice:'￥399',oldPrice:'699'});
});