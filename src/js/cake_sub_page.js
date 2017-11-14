require.config({
	baseUrl:'js/lib'
});
require(['sub_page_display','sweet_display'],function(Factory,Sweet){
	let today = document.getElementsByClassName('today_list')[0];
	let grass = document.getElementsByClassName('grass_list')[0];
	let musi = document.getElementsByClassName('musi-content')[0];
	let rulao = document.getElementsByClassName('rulao-content')[0];
	let fantang = document.getElementsByClassName('fantang-content')[0];
	let list_1 = new Factory(today,'list_1','imgs/cake_sub_page/list_1.png',{name:'和风鲜花蛋糕',infor:'让味蕾懂你的心跳',newPrice:'￥399',oldPrice:'699'});
	let list_2 = new Factory(today,'list_2','imgs/cake_sub_page/list_2.png',{name:'美刀蛋糕',infor:'这一刻，只负责纸醉金迷',newPrice:'￥289',oldPrice:'499'});
	let list_3 = new Factory(grass,'list_3','imgs/cake_sub_page/list_3.png',{name:'淡奶冰淇淋蛋糕',infor:'淡奶+坚果',newPrice:'￥299',oldPrice:''});
	let list_4 = new Factory(grass,'list_4','imgs/cake_sub_page/list_4.png',{name:'天秤座蛋糕',infor:'芒果粒+提拉米苏+松露',newPrice:'￥199',oldPrice:'',left:true});
	let list_5 = new Factory(grass,'list_5','imgs/cake_sub_page/list_5.png',{name:'唯你蛋糕',infor:'覆盆子+巴旦木+黑森林',newPrice:'￥299',oldPrice:'',left:true});
	let list_6 = new Factory(grass,'list_6','imgs/cake_sub_page/list_6.png',{name:'钻石牛乳蛋糕',infor:'酒冻+酸奶+芝士',newPrice:'￥399',oldPrice:'',left:false});
	let musi_list_1 =new Sweet(musi,'imgs/cake_sub_page/sweet_cake_1.jpg','musi_1',{name:'冰淇淋慕斯蛋糕',price:'￥189'});
	let musi_list_2 =new Sweet(musi,'imgs/cake_sub_page/sweet_cake_2.jpg','musi_2',{name:'海盐红豆慕斯蛋糕',price:'￥160'});
	let musi_list_3 =new Sweet(musi,'imgs/cake_sub_page/sweet_cake_3.jpg','musi_3',{name:'芒果巧克力慕斯蛋糕',price:'￥160'});
	let rulao_list_1 =new Sweet(rulao,'imgs/cake_sub_page/sweet_cake_4.jpg','rulao_1',{name:'树莓乳酪蛋糕',price:'￥280'});
	let rulao_list_2 =new Sweet(rulao,'imgs/cake_sub_page/sweet_cake_5.jpg','rulao_2',{name:'和风白果乳酪蛋糕',price:'￥280'});
	let rulao_list_3 =new Sweet(rulao,'imgs/cake_sub_page/sweet_cake_6.jpg','rulao_3',{name:'奶伴车厘子乳酪蛋糕',price:'￥199'});
	let fantang_list_1 =new Sweet(fantang,'imgs/cake_sub_page/sweet_cake_7.jpg','rulao_1',{name:'薄荷之恋翻糖蛋糕',price:'￥1999'});
	let fantang_list_2 =new Sweet(fantang,'imgs/cake_sub_page/sweet_cake_8.jpg','rulao_2',{name:'一生承诺翻糖蛋糕',price:'￥2999'});
	let fantang_list_3 =new Sweet(fantang,'imgs/cake_sub_page/sweet_cake_9.jpg','rulao_3',{name:'可爱彩虹翻糖蛋糕',price:'￥999'});
});