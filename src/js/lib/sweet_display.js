define([],function(){
	function Sweet(parent,imgPath,className,json){
		this.parent = parent;
		this.imgPath = imgPath;
		this.className = className;
		this.name = json.name;
		this.price = json.price;
		this.box = document.createElement('div');
		this.init();
	}
	Sweet.prototype = {
		constructor:Sweet,
		init:function(){
			let img = document.createElement('img');
			let img_box =document.createElement('div');
			let infor =document.createElement('div');
			let name = document.createElement('span');
			let price = document.createElement('span');
			let add = document.createElement('div');
			let buy = document.createElement('div');
			add.innerText = '加入购物车';
			buy.innerText = '立即购买';
			name.innerText = this.name;
			price.innerText = this.price;
			add.style.cssText = 'width:120px;height:35px;text-align:center;color:white;background-color:pink;line-height:35px;font-size:14px;position:absolute;bottom:0;left:0;cursor:pointer';
			buy.style.cssText = 'width:120px;height:35px;text-align:center;color:red;background-color:white;line-height:35px;font-size:14px;position:absolute;bottom:0;right:0;cursor:pointer';
			name.style.cssText = 'width:250px;height:30px;font-size:20px;text-align:center;color:rgb(156,107,48);position:absolute;top:30px;left:0;';
			price.style.cssText = 'width:250px;height:20px;font-size:16px;text-align:center;color:rgb(156,107,48);position:absolute;bottom:15px;left:0;';
			infor.style.cssText = 'width:250px;height:92px;background-color:rgb(255,255,255);position:absolute;bottom:0;left:0;opacity:0.7;';
			img.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;';
			img_box.style.cssText = 'width:250px;height:307px;position:relative;';
			this.box.style.cssText = 'width:250px;height:353px;position:relative;margin:10px 36px;float:left;left:75px;';
			this.box.className = this.className;
			img.src = this.imgPath;
			infor.appendChild(name);
			infor.appendChild(price);
			img_box.appendChild(img);
			img_box.appendChild(infor);
			this.box.appendChild(img_box);
			this.box.appendChild(add);
			this.box.appendChild(buy);
			this.parent.appendChild(this.box);
		},
	};
	return Sweet;
});