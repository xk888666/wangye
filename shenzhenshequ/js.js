var ul=document.getElementsByTagName('ul')[3];
var li1s=ul.getElementsByClassName('li1');
var neirong=document.getElementsByClassName('neirong')[0];
var boxs=neirong.getElementsByClassName('box');
for(var i=0; i<li1s.length;i++){
	li1s[i].index=i;
	li1s[i].onclick=function(){
		for(var i=0; i<li1s.length; i++){
			li1s[i].className='li1';
		}
		for(var i=0; i<boxs.length; i++){
			boxs[i].className='box';
		}
		this.className='li1 act';
		boxs[this.index].className='box act1';
	}
}




var ul1=document.getElementsByTagName('ul')[8];
var li1ss=ul1.getElementsByClassName('li1');
var neirong1=document.getElementsByClassName('neirong')[1];
var boxss=neirong1.getElementsByClassName('box');
for(var i=0; i<li1ss.length;i++){
	li1ss[i].index=i;
	li1ss[i].onclick=function(){
		for(var i=0; i<li1ss.length; i++){
			li1ss[i].className='li1';
		}
		for(var i=0; i<boxss.length; i++){
			boxss[i].className='box';
		}
		this.className='li1 act';
		boxss[this.index].className='box show';
	}
}




var ul2=document.getElementsByClassName('ul1')[0];
var li2=ul2.getElementsByClassName('li1');
var neirong2=document.getElementsByClassName('neirong')[2];
var box2=neirong2.getElementsByClassName('box');
for(var i=0; i<li2.length;i++){
	li2[i].index=i;
	li2[i].onclick=function(){
		for(var i=0; i<li2.length; i++){
			li2[i].className='li1';
		}
		for(var i=0; i<box2.length; i++){
			box2[i].className='box';
		}
		this.className='li1 act';
		box2[this.index].className='box hover';
	}
}
	var t=null;
	var speed=10;
	var ul2=document.getElementsByClassName('ul2')[0];
	var ul2Width=ul2.offsetWidth;
	ul2.style.width=ul2Width*2+'px';
	ul2.innerHTML+=ul2.innerHTML;
	function move(){
		var ul2Left=ul2.offsetLeft;
		if(ul2Left==-ul2Width){
			ul2.style.left='0px';
		}else{
			ul2.style.left=--ul2Left+'px';
		}
	}
	ul2.onmouseover=function(){
		clearInterval(t);
	}
	ul2.onmouseout=function(){
		t=setInterval(move,speed);
	}
	ul2.onmouseout();

