define([],function(){
	function Dessert_display(content,className,url,json){
		this.content = content;
		this.commodify = document.createElement('div');
		this.className = className;
		this.img = document.createElement('img');
		this.img_url = url;
		this.name = json.name;
		this.price = json.price;
		this.init();
	}
	Dessert_display.prototype = {
		constructor:Dessert_display,
		init:function(){
			let infor = document.createElement('div'); 
			let name = document.createElement('div');
			let price = document.createElement('div');
			infor.style = 'color:rgb(100,100,100);position:absolute;top:165px;right:10px';
			name.style = 'width:180px;height:35px;line-height:35px;text-align:center;background-color:rgba(230,230,230,0.5);';
			price.style = 'width:180px;height:35px;line-height:35px;text-align:center;';
			this.commodify.style = 'width:200px;height:250px;border:1px solid rgb(176,145,106);position:absolute;z-index:5;background-color:white;';
			this.img.style = 'width:180px;height:190px;background-image:url('+this.img_url+');margin:10px;';
			name.innerText = this.name;
			price.innerText = this.price;
			infor.appendChild(name);
			infor.appendChild(price);
			this.commodify.id = this.className;
			this.commodify.appendChild(this.img);
			this.commodify.appendChild(infor);
			this.content.appendChild(this.commodify);
		}
	};
	return Dessert_display;
});