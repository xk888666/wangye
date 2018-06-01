var tabs=document.getElementById('tabs');
var lis=tabs.getElementsByTagName('li');
var d2=document.getElementById('d2');
var div=d2.getElementsByTagName('div');
for(var i=0;i<lis.length; i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className='';
		}
		for(var i=0; i<div.length;i++){
			div[i].className='';
		}
		this.className='act';
		div[this.index].className='show';
	}
}