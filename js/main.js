/*
* @Author: Lee
* @Date:   2017-02-17 20:51:54
* @Last Modified by:   Lee
* @Last Modified time: 2017-02-17 21:49:14
*/

'use strict';
(function(){
var container = document.getElementById("imgContainer");
var i = 0;
var next = document.getElementById("next");
next.onclick = function(){
	i++;
	container.style.transform ="rotateY("+40*i+"deg)"+" "+"translateY( 288px )";
};
var pre = document.getElementById("previous");
pre.onclick = function(){
	i--;
	container.style.transform ="rotateY("+40*i+"deg)"+" "+"translateY( 288px )";
};
})();