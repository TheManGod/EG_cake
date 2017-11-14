require.config({
	baseUrl:'js/lib'
});
require(['sub_page_display'],function(Factory){
	let today = document.getElementsByClassName('today_list')[0];
	let grass = document.getElementsByClassName('grass_list')[0];
	let list_1 = new Factory(today,'list_1','imgs/cake_sub_page/list_1.png',{name:'和风鲜花蛋糕',infor:'让味蕾懂你的心跳',newPrice:'￥399',oldPrice:'699'});
	let list_2 = new Factory(today,'list_2','imgs/cake_sub_page/list_2.png',{name:'美刀蛋糕',infor:'这一刻，只负责纸醉金迷',newPrice:'￥289',oldPrice:'499'});
	let list_3 = new Factory(grass,'list_3','imgs/cake_sub_page/list_3.png',{name:'淡奶冰淇淋蛋糕',infor:'淡奶+坚果',newPrice:'￥299',oldPrice:''});
	let list_4 = new Factory(grass,'list_4','imgs/cake_sub_page/list_4.png',{name:'天秤座蛋糕',infor:'芒果粒+提拉米苏+松露',newPrice:'￥199',oldPrice:'',left:true});
	let list_5 = new Factory(grass,'list_5','imgs/cake_sub_page/list_5.png',{name:'唯你蛋糕',infor:'覆盆子+巴旦木+黑森林',newPrice:'￥299',oldPrice:'',left:true});
	let list_6 = new Factory(grass,'list_6','imgs/cake_sub_page/list_6.png',{name:'钻石牛乳蛋糕',infor:'酒冻+酸奶+芝士',newPrice:'￥399',oldPrice:'',left:false});
	
});