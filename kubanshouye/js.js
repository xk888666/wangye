var leftsidebar=document.getElementsByClassName('leftsidebar')[0];
var lis=leftsidebar.getElementsByTagName('li');
var contes=document.getElementsByClassName('contes')[0];
var boxs=contes.getElementsByClassName('box');
var rightsidebar=document.getElementsByClassName('rightsidebar')[0];
var liss=rightsidebar.getElementsByTagName('li');
var nei=document.getElementsByClassName('nei')[0];
var neirong=nei.getElementsByClassName('neirong');

for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			for(var i=0;i<boxs.length;i++){
				boxs[i].className='box';
			}
			this.className='act';
			boxs[this.index].className='box show';
	}
}
for(var i=0;i<liss.length;i++){
	liss[i].index=i;
	liss[i].onclick=function(){
		for(var i=0;i<liss.length;i++){
				liss[i].className='';
			}
			for(var i=0;i<neirong.length;i++){
				neirong[i].className='neirong';
			}
			this.className='act';
			neirong[this.index].className='neirong act3';
	}
}


