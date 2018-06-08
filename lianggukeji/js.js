
var xia=$('.xia').eq(3);
var box1=$('.box1');
var title=$('.title');
var t=title.innerWidth();
var c=$('.con').innerWidth();
title.click(function(){
	var n=$(this).parent().index();
box1.each(function(i){
			if(i<=n){
				$(this).css('left',i*t);
			}else{
				$(this).css('left',i*t+c);
			}
		});
});