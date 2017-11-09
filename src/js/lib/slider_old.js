define(['animation','util'],function(animation,getComputedStyleValue){
	 function Slider(imgs,parent){
		this.imgs = imgs;
		this.parent = parent;
		this.sliderComponent = null;
		this.index=0;
		this.ul = document.createElement('ul');
		this.box = document.createElement('div');
		this.btn_box = document.createDocumentFragment();
		this.parent_width = parseInt(getComputedStyleValue(this.parent,'width'));
		this.init();
		this.autoChange();
	}
	Slider.prototype={
		constructor:Slider,
		init:function(){
			this.sliderComponent = document.createElement('div');
			this.sliderComponent.style = 'width:'+this.parent_width*(this.imgs.length+1)+'px;height:100%;position:relative';
			for(var i=0,len=this.imgs.length+1;i<len;i++){
				var imgBox=document.createElement('div');
				var img = document.createElement('img');
			img.style = 'width:'+this.parent_width+'px;height:100%;';
			imgBox.style = 'width:'+this.parent_width+'px;height:100%;float:left';
			if(i===this.imgs.length){
				img.src = this.imgs[0];
			}else{
			img.src = this.imgs[i];
			}
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
					btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;left:'+(this.parent_width-50)+'px;color:white;text-align:center;font-size:20px;line-height:50px;top:40%;cursor:pointer';
					btn.innerHTML='&gt';
					btn.onclick=this.nextPic.bind(this);
					btn.className='btn';
				}
				this.btn_box.appendChild(btn);
			}
			for(let i = 0,len = this.imgs.length;i<len;i++){
				let li = document.createElement('li');
				li.style = 'width:10px;height:10px;border:1px solid black;border-radius:50%;float:left;margin:20px;';
				this.ul.appendChild(li);
			}
			this.ul.style = 'position:absolute;bottom:5%;left:50%';
			this.ul.firstChild.className = 'current_pic';
			this.box.style = 'position:relative;overflow:hidden;width:100%;height:100%;';
			this.box.appendChild(this.sliderComponent);
			this.box.appendChild(this.btn_box);
			this.box.appendChild(this.ul);
			this.parent.appendChild(this.box);
		},
		autoChange:function(){
			var _this=this;
			_this.timer = setInterval(function(){
				_this.index++;
				if(_this.index===_this.imgs.length+1){
					_this.index = 1;
					_this.sliderComponent.style.left = 0;
				}else if(_this.index===-1){
					_this.index = _this.imgs.length-1;
					_this.sliderComponent.style.left = (_this.index+1)*-_this.parent_width+'px';
				}
				animation(_this.sliderComponent,{'left':_this.index*-_this.parent_width});
				for(let i = 0,len = _this.imgs.length;i<len;i++){
					_this.ul.childNodes[i].className = ' ';
				}
				if(_this.index===_this.imgs.length){
					_this.ul.childNodes[0].setAttribute('class','current_pic');
				}else{
				_this.ul.childNodes[_this.index].setAttribute('class','current_pic');
			}
			},5000);
		},
		prePic:function(){
			var _this=this;
			if(_this.timer){
					clearInterval(this.timer);
					}
			_this.index--;
			if(_this.index===-1){
				_this.index = _this.imgs.length;
				_this.sliderComponent.style.left = _this.index*-_this.parent_width+'px';
			}
			animation(_this.sliderComponent,{'left':_this.index*-_this.parent_width});
			_this.timer = setInterval(function(){
				if(_this.index===_this.imgs.length){
					_this.index = 0;
					_this.sliderComponent.style.left = 0;
				}else if(_this.index===-1){
					_this.index = _this.imgs.length;
					_this.sliderComponent.style.left = _this.index*-_this.parent_width+'px';
				}
				_this.index++;
				animation(_this.sliderComponent,{'left':_this.index*-_this.parent_width});
			},5000);
		},
		nextPic:function(){
			var _this=this;
			if(_this.timer){
					clearInterval(_this.timer);
					}
			_this.index++;
			if(_this.index===_this.imgs.length+1){
					_this.index = 0;
					_this.sliderComponent.style.left = 0;
					animation(_this.sliderComponent,{'left':(++_this.index)*-_this.parent_width});
				}else{
				animation(_this.sliderComponent,{'left':(_this.index)*-_this.parent_width});
			}
			_this.timer = setInterval(function(){
				if(_this.index===_this.imgs.length){
					_this.index = 0;
					_this.sliderComponent.style.left = 0;
				}else if(_this.index===-1){
					_this.index = _this.imgs.length;
					_this.sliderComponent.style.left = _this.index*-_this.parent_width+'px';
				}
				_this.index++;
				animation(_this.sliderComponent,{'left':_this.index*-_this.parent_width});
			},5000);
		},
		createSelector:function(){
			

		}


	}
	return Slider;
});