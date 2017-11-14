define([],function(){
	function Factory(parent,className,imgPath,json){
		this.parent = parent;
		this.className = className;
		this.path = imgPath;
		this.displayName = json.name;
		this.infor = json.infor;
		this.newPrice = json.newPrice;
		this.oldPrice = json.oldPrice;
		this.left = json.left;
		this.box = document.createElement('div');
		this.img = document.createElement('img');
		this.infor_box = document.createElement('div');
		this.init();
	}
	Factory.prototype = {
		constructor:Factory,
		init:function(){
			let infor = document.createElement('div');
			let name = document.createElement('p');
			let word = document.createElement('p');
			let price = document.createElement('div');
			let newPrice = document.createElement('span');
			let oldPrice = document.createElement('span');
			let buyButton = document.createElement('div');
			newPrice.innerHTML = this.newPrice;
			oldPrice.innerHTML = this.oldPrice;
			name.innerHTML = this.displayName;
			word.innerHTML = this.infor;
			buyButton.innerText = '抢购';
			buyButton.style.cssText = 'width:85px;height:49px;background-image:url(imgs/cake_sub_page/buy_bgi.jpg);text-align:center;line-height:40px;position:absolute;bottom:14px;right:90px;color:red;cursor:pointer;';
			newPrice.style.cssText = 'display:block;font-size:18px;border-right:1px solid black;float:left';
			oldPrice.style.cssText = 'display:block;font-size:8px;float:left;text-decoration:line-through;line-height:25px;';
			price.style.cssText = 'width:92px;height:20px;text-align:center;position:absolute;bottom:25px;left:60px;';
			name.style.cssText = 'width:150px;height:24px;line-height:24px;text-align:center;font-size:20px;border-bottom:1px solid black;';
			word.style.cssText = 'width:150px;height:24px;line-height:24px;text-align:center;font-size:12px;color:red;';
			infor.style.cssText = 'width:150px;height:48px;position:absolute;top:10px;left:20px;';
			this.box.style.cssText = 'width:487px;height:240px;position:absolute;';
			this.img.style.cssText = 'position:absolute;bottom:0;left:54px;';
			this.infor_box.style.cssText = 'position:absolute;background-image:url(imgs/cake_sub_page/infor_img.jpg);width:199px;height:114px;right:24px;top:63px;';
			this.img.src = this.path;
			if(!this.oldPrice){
				newPrice.style.borderRight = 'none';
			}
			if (this.left) {
				this.infor_box.style.left = '24px';
				this.img.style.left = '250px';
				buyButton.style.left = '90px';
			}
			infor.appendChild(name);
			infor.appendChild(word);
			price.appendChild(newPrice);
			price.appendChild(oldPrice);
			this.infor_box.appendChild(infor);
			this.infor_box.appendChild(price);
			this.box.appendChild(this.infor_box);
			this.box.appendChild(this.img);
			this.box.appendChild(buyButton);
			this.box.className = this.className;
			this.parent.appendChild(this.box);
		},
	};
	return Factory;
});