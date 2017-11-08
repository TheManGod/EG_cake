define(function(){
	return function getComputedStyleValue(obj,styleName){
				var value='';
				if(window.getComputedStyle){
					value=getComputedStyle(obj)[styleName];
				}else{
					value=obj.currentStyle[styleName];
				}	
				return value;
			}
});