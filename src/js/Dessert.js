// 模块化JS开发，入口文件
require.config({
	baseUrl:'js/lib/'
});
require(['slider','Dessert_display','animation'],function(Slider,Dessert_display,animation){
	let imgs = ['imgs/list1.jpg','imgs/list2.jpg'];
	let	box = document.getElementById('slider');
	let Doughnut = document.getElementById('Doughnut');
	let snack = document.getElementById('snack');
	let slider_content = document.getElementsByClassName('slider_content')[0];
	let btn_Component = document.createDocumentFragment();
	let slider_1 = new Slider(imgs,box);
	let list_1 = new Dessert_display(Doughnut,'list_1','imgs/tiantianquan_list_1.jpg',{name:'香雪维纳斯',price:'￥80.00'});
	let list_2 = new Dessert_display(Doughnut,'list_2','imgs/tiantianquan_list_2.jpg',{name:'NEI圈双拼',price:'￥60.00'});
	let list_3 = new Dessert_display(Doughnut,'list_3','imgs/tiantianquan_list_3.jpg',{name:'醇香拉丝',price:'￥50.00'});
	let list_4 = new Dessert_display(Doughnut,'list_4','imgs/tiantianquan_list_4.jpg',{name:'小资甜甜圈',price:'￥20.00'});
	let list_5 = new Dessert_display(slider_content,'list_5','imgs/snack_list_1.jpg',{name:'草莓爱豆',price:'￥66.00'});
	let list_6 = new Dessert_display(slider_content,'list_6','imgs/snack_list_2.jpg',{name:'不要哭',price:'￥66.00'});
	let list_7 = new Dessert_display(slider_content,'list_7','imgs/snack_list_3.jpg',{name:'EG生巧',price:'￥30.00'});
	let list_8 = new Dessert_display(slider_content,'list_8','imgs/snack_list_4.jpg',{name:'北海道红豆',price:'￥40.00'});
	let list_9 = new Dessert_display(slider_content,'list_9','imgs/snack_list_5.jpg',{name:'半熟芝士',price:'￥40.00'});
	for(let i=0;i<2;i++){
		let btn=document.createElement('span');
		if(i==0){
			btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;left:2%;color:white;text-align:center;font-size:20px;line-height:50px;top:60%;cursor:pointer';
			btn.innerHTML='&lt';
			btn.onclick=function(){
				if(slider_content.style.left==='-380px'){
				animation(slider_content,{'left':0});
			}
			if(slider_content.style.left==='-760px'){
				animation(slider_content,{'left':-380});
			}
			};
			btn.className='btn';
		}else{
			btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;right:2%;color:white;text-align:center;font-size:20px;line-height:50px;top:60%;cursor:pointer';
			btn.innerHTML='&gt';
			btn.onclick=function(){
				if(!slider_content.style.left || slider_content.style.left ==='0px'){
					animation(slider_content,{'left':-380});
				}
				if(slider_content.style.left==='-380px'){
					animation(slider_content,{'left':-760});
				}
				
			};
			btn.className='btn';
		}
		btn_Component.appendChild(btn);
	}
	snack.appendChild(btn_Component);
});