require.config({
	baseUrl:'js/lib'
});
require([],function(){
	let toggle = 0;
	let cat = document.getElementsByClassName('HOT_cat')[0];
	cat.onclick = function(){
		if(toggle==0){
		cat.style.opacity = 0;
		toggle = 1;
		return;
	}
		if(toggle==1){
		cat.style.opacity = '1';
		toggle = 0;
		return;
		}
	};
});