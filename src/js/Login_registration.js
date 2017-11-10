var passWord = document.getElementById("password");
var forgetYanZhengMa = document.getElementById("forgetyanzhengma");
passWord.onclick = function() {
	forgetYanZhengMa.style.display = "none";
}
/*function check() {
	if (passWord.value.length < 6 && passWord.value.length > 20 ) {
	alert("密码长度必须大于六位！");
//	console.log("密码长度必须大于六位！");
//	passWord.innerHTML = "密码长度不符合要求";
}
}
*/
if( /^[a-zA-Z0-9]{6,18}$/.test( passWord ) ) {
    alert( 'ok' );
}
