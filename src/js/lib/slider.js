define(['animation','util'],function(animation,util){
	let getComputedStyleValue = util.getComputedStyleValue;
	function Slider(imgs,content){
		this.imgs = imgs;
		this.content = content;
		this.sliderComponent = null;
		this.timer = null;
		this.ul = document.createElement('ul');
		this.img_box = document.createElement('div');
		this.index = 0;
		this.btn_array = [];
		this.btn_box = document.createDocumentFragment();
		this.content_width = parseInt(getComputedStyleValue(this.content,'width'));
		this.init();
		this.autoChange();
		this.showORhide();
	}
	Slider.prototype={
		constructor:Slider,
		init:function(){
			this.sliderComponent = document.createElement('div');
			this.sliderComponent.style = 'width:100%;height:100%;position:relative;overflow:hidden';
			this.img_box.style = 'width:'+this.content_width*(this.imgs.length+1)+'px;height:100%;position:absolute;top:0;left:0';
			for(let i=0,len=this.imgs.length+1;i<len;i++){
				let imgBox=document.createElement('div');
				let img = document.createElement('img');
			img.style = 'width:'+this.content_width+'px;height:100%;';
			imgBox.style = 'width:'+this.content_width+'px;height:100%;float:left';
			if(i===this.imgs.length){
				img.src = this.imgs[0];
			}else{
			img.src = this.imgs[i];
			}
			imgBox.appendChild(img);
			this.img_box.appendChild(imgBox);
			}

			//添加原点选择器
			for(let i = 0,len = this.imgs.length;i<len;i++){
				let li = document.createElement('li');
				let _this = this;
				li.style = 'width:10px;height:10px;border:1px solid black;border-radius:50%;float:left;margin:20px;';
				li.onclick = function(){
					_this.index = i;
					if(_this.timer){
					clearInterval(_this.timer);
				}
					_this.moveImg(_this.index);
					_this.autoChange.call(_this);
				};
				this.ul.appendChild(li);
			}

			//添加上下选择器
			for(var i=0;i<2;i++){
				var btn=document.createElement('span');
				this.btn_array.push(btn);
				if(i==0){
					btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;left:0;color:white;text-align:center;font-size:20px;line-height:50px;top:40%;cursor:pointer;display:none;';
					btn.innerHTML='&lt';
					btn.onclick=this.prePic.bind(this);
					btn.className='btn';
				}else{
					btn.style='position:absolute;width:50px;height:50px;border-radius:50%;background-color:gray;opacity:0.5;left:'+(this.content_width-50)+'px;color:white;text-align:center;font-size:20px;line-height:50px;top:40%;cursor:pointer;display:none;';
					btn.innerHTML='&gt';
					btn.onclick=this.nextPic.bind(this);
					btn.className='btn';
				}
				this.btn_box.appendChild(btn);
			}
			this.ul.style = 'position:absolute;bottom:5%;left:50%';
			this.ul.firstChild.className = 'current_pic';
			this.sliderComponent.appendChild(this.img_box);
			this.sliderComponent.appendChild(this.ul);
			this.sliderComponent.appendChild(this.btn_box);
			this.content.appendChild(this.sliderComponent);
		},
		autoChange:function(){
			let _this = this;
			this.timer = setInterval(function(){
				// console.log(_this.index);
				_this.index++;
				_this.moveImg.call(_this,_this.index);
			},5000);
		},
		moveImg:function(num){
			for(let i = 0,len = this.imgs.length;i<len;i++){
					this.ul.childNodes[i].className = ' ';
				}
				if(num===this.img_box.childNodes.length){
					this.index = 1;
					this.img_box.style.left = 0;
				}
				if(num===-1){
					this.index = this.img_box.childNodes.length-2;
					this.img_box.style.left = (this.img_box.childNodes.length-1)*-this.content_width+'px';
				}
				animation(this.img_box,{'left': this.index*-this.content_width});
				if(this.index===this.img_box.childNodes.length-1){
				this.ul.childNodes[0].className = 'current_pic';
			}else{
				this.ul.childNodes[this.index].className = 'current_pic';
			}
		},
		prePic:function(){
			this.index--;
			if(this.timer){
			clearInterval(this.timer);
		}
			this.moveImg(this.index);
			this.autoChange.call(this);
		},
		nextPic:function(){
			this.index++;
			if(this.timer){
			clearInterval(this.timer);
		}
			this.moveImg(this.index);
			this.autoChange.call(this);
		},
		showORhide:function(){
			let _this = this;
			this.sliderComponent.onmouseover = function(){
				_this.btn_array.forEach(function(item){
					item.style.display = 'block';
				});
			};

			this.sliderComponent.onmouseout = function(){
				_this.btn_array.forEach(function(item){
					item.style.display = 'none';
				});
			};
		}

	};
	return Slider;
});