define(['util'],function(util){
	let getComputedStyleValue = util.getComputedStyleValue;
	return function animation(obj,jSon,fn){
			if(obj.timer){
					clearInterval(obj.timer);
				}
			obj.timer=setInterval(function(){
			for(var p in jSon){
			var styleName=p;
			var iTarget=jSon[p];
			var box=obj;
			var iCurrent=parseFloat(getComputedStyleValue(obj,styleName));
			if('opacity'===styleName){
				var iSpeed=0.01;
				iSpeed=(jSon[styleName]-iCurrent)*100/8;
				if(iSpeed>0){
					iSpeed=Math.ceil(iSpeed)/100;
				}else{
					iSpeed=Math.floor(iSpeed)/100;
				}
			if((iCurrent>=iTarget)&&(iSpeed>0)||(iCurrent<=iTarget)&&(iSpeed<0)){
				box.style[styleName]=iTarget;
				box.style.filter='alpha(opacity='+(iCurrent+iSpeed)*100+')';
				delete jSon[styleName];
			}else{
				box.style[styleName]=(iCurrent+iSpeed);
				box.style.filter='alpha(opacity='+(iCurrent+iSpeed)*100+')';
				}
			}else{
				var iSpeed=0.001;
				iSpeed=(jSon[styleName]-iCurrent)/8;
				if(iSpeed>0){
					iSpeed=Math.ceil(iSpeed);
				}else{
					iSpeed=Math.floor(iSpeed);
				}
			if((iCurrent>=iTarget&&iSpeed>0)||(iCurrent<=iTarget&&iSpeed<0)){
				box.style[styleName]=iTarget+'px';
				delete jSon[styleName];
			}else{
				box.style[styleName]=(iCurrent+iSpeed)+'px';
				}			
			
			}
			}
			if(!Object.keys(jSon).length){
				clearInterval(obj.timer);
				if(fn&&fn instanceof Function){
					fn();
				}
			}
			},60);
		}
	});