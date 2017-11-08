define(['animation'],function(animation){
	 function Slider(imgs,parent){
		this.imgs = imgs;
		this.parent = parent;
		this.sliderComponent = null;
		this.index=0;
		this.init();
		this.autoChange();
	}
	Slider.prototype={
		constructor:Slider,
		init:function(){
			this.sliderComponent = document.createElement('div');
			this.sliderComponent.style = 'width:100%;height:100%;position:relative';
			for(var i=0,len=this.imgs.length;i<len;i++){
				var imgBox=document.createElement('div');
				var img = document.createElement('img');
			img.style = 'width:100%;height:100%;opacity:0';
			imgBox.style = 'width:100%;height:100%;position:absolute';
			img.src = this.imgs[i];
			imgBox.appendChild(img);
			this.sliderComponent.appendChild(imgBox);
			}
			for(var i=0;i<2;i++){
				var btn=document.createElement('span');
				if(i==0){
					btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;left:0;color:white;text-align:center;font-size:20px;line-height:50px;top:40%;cursor:pointer';
					btn.innerHTML='&lt';
					btn.onclick=this.prePic.bind(this);
					btn.className='btn';
				}else{
					btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;right:0;color:white;text-align:center;font-size:20px;line-height:50px;top:40%;cursor:pointer';
					btn.innerHTML='&gt';
					btn.onclick=this.nextPic.bind(this);
					btn.className='btn';
				}
				this.sliderComponent.appendChild(btn);
			}
			this.sliderComponent.getElementsByTagName('img')[0].style.opacity=1;
			this.parent.appendChild(this.sliderComponent);

		},
		autoChange:function(){
			var _this=this;
			_this.timer = setInterval(function(){
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':0});
				if(_this.index==_this.imgs.length-1){
					_this.index=0;
				}else{
					_this.index++;
				}
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':1});
			},5000);
		},
		prePic:function(){
			var _this=this;
			if(_this.timer){
						clearInterval(this.timer);
					}
			animation(this.sliderComponent.getElementsByTagName('img')[this.index],{'opacity':0});
			if(this.index==0){
					this.index=this.imgs.length-1;
				}else{
					this.index--;
				}
			animation(this.sliderComponent.getElementsByTagName('img')[this.index],{'opacity':1});
				this.timer=setInterval(function(){
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':0});
				if(_this.index==_this.imgs.length-1){
					_this.index=0;
				}else{
					_this.index++;
				}
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':1});
			},5000);
		},
		nextPic:function(){
			var _this=this;
			if(_this.timer){
						clearInterval(_this.timer);
					}
			animation(this.sliderComponent.getElementsByTagName('img')[this.index],{'opacity':0});
			if(this.index==this.imgs.length-1){
					this.index=0;
				}else{
					this.index++;
				}
			animation(this.sliderComponent.getElementsByTagName('img')[this.index],{'opacity':1});
				this.timer=setInterval(function(){
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':0});
				if(_this.index==_this.imgs.length-1){
					_this.index=0;
				}else{
					_this.index++;
				}
				animation(_this.sliderComponent.getElementsByTagName('img')[_this.index],{'opacity':1});
			},5000);
		}


	}
	return Slider;
});