var prright=document.getElementsByClassName('prright')[0];
var lis=prright.getElementsByTagName('li');
var container=document.getElementsByClassName('container')[0];
var list=container.getElementsByClassName('list');
for(var i=0;i<lis.length; i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className='';
		}
		for(var i=0; i<list.length;i++){
			list[i].className='list';
		}
		this.className='';
		list[this.index].className='list show clearfix';
	}
}


  var t=null;
	var sped=5000;
	var index=0;
	var lunbo=document.getElementsByClassName('lunbo')[0];
	var imgs2=document.getElementsByClassName('imgs2')[0];
	var liss=imgs2.getElementsByTagName('li');
	var img=imgs2.getElementsByTagName('img')[0];
	var prev=document.getElementsByClassName('prev')[0];
	var next=document.getElementsByClassName('next')[0];
	var btns=document.getElementsByClassName('btns')[0].getElementsByTagName('li');
	var imgW=img.offsetWidth;
	var imgs2L=liss.length;
	function switchImgs(){
		if(index>imgs2L-1){
			index=0;
		}
		if(index<0){
			index=imgs2L-1;
		}
		imgs2.style.left=-imgW*index+'px';
	}
	function switchBtns(){
		for(var i=0;i<btns.length;i++){
			btns[i].className='';
		}
		btns[index].className='active';
	}
	for(var i=0;i<btns.length;i++){
		btns[i].idx=i;
		btns[i].onclick=function(){
			index=this.idx;
			switchImgs();
			switchBtns();
		}
	}
	next.onclick=function(){
		index++;
		switchImgs();
		switchBtns();
	}
	prev.onclick=function(){
		index--;
		switchImgs();
		switchBtns();
	}
	lunbo.onmouseover=function(){
		clearInterval(t);
	}
	lunbo.onmouseout=function(){
		t=setInterval(next.onclick,sped);
	}
	lunbo.onmouseout();









	var t=null;
	var dir=0;
	var speed=10;
	var box=document.getElementsByClassName('box')[0];
	var imgs=document.getElementsByClassName('imgs')[0];
	var btn1=document.getElementsByClassName('button1')[0];
	var btn2=document.getElementsByClassName('button2')[0];
	var boxWidth=box.offsetWidth; 
	var imgsWidth=imgs.offsetWidth; 
	imgs.style.width=imgsWidth*2+'px';
	imgs.innerHTML+=imgs.innerHTML;
	function move(){
		var imgsLeft=imgs.offsetLeft;
		if(dir){
			if(imgsLeft==-(imgsWidth-boxWidth)){
				imgs.style.left=-(imgsWidth*2-boxWidth)+'px';
			}else{
				imgs.style.left=++imgsLeft+'px';
			}
		}else{
			if(imgsLeft==-imgsWidth){
				imgs.style.left='0px';
			}else{
				imgs.style.left=--imgsLeft+'px';
			}
		}
	}
	imgs.onmouseover=function(){
		clearInterval(t);
	}
	imgs.onmouseout=function(){
		t=setInterval(move,speed);
	}
	imgs.onmouseout();
	btn1.onclick=function(){
		dir=0;
	}
	btn2.onclick=function(){
		dir=1;
	}




