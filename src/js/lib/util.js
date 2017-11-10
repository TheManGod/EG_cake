define(function(){
	return  {
		 getComputedStyleValue: function(obj,styleName){
				var value='';
				if(window.getComputedStyle){
					value=getComputedStyle(obj)[styleName];
				}else{
					value=obj.currentStyle[styleName];
				}	
				return value;
			},
			getEvent:function(){
				return event || window.event;
			},
			getTarget: function(event){
				return event.target || event.srcElement;
			},
			stopPropagation: function(event){
				if (event.stopPropagation){
					event.stopPropagation();
					} else {
					event.cancelBubble = true;
					}
			}
		};
});