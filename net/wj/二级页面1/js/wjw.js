$(function(){
	//banner
	const tupian=$(".bannerTu");
	const banner=$(".bannerBox")[0];
	const li=$(".lunbodian li");
	const leftbtn=$(".zuo")[0];
	const rightbtn=$(".you")[0];
	tupian[0].style.opacity=1;
	var flag=true;
	var num=0;
	var t=setInterval(move,3000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			clearInterval(t);
		if(flag){
			flag=false;
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=1;
				tupian[i].style.opacity=0;
				li[i].classList.remove("seld");
			}
			li[j].classList.add("seld");
			tupian[j].style.zIndex=2
			animate(tupian[j],{opacity:1},500,function(){
				flag=true;
				num=j;	
			});			
			}
		}
	}

	leftbtn.onmouseover=function(){
		clearInterval(t);
	}

	leftbtn.onclick=function(){
		if(flag){
		move("l");	
	   }		
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onclick=function(){
		if(flag){
		move("r");	
	  }
	}
	function move(type="l"){			
		flag=false;
		if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
		}else if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
		for(let i=0;i<tupian.length;i++){
			tupian[i].style.zIndex=1;
			tupian[i].style.opacity=0;
			li[i].classList.remove("seld");
		}
        li[num].classList.add("seld");
		tupian[num].style.zIndex=2;
		animate(tupian[num],{opacity:1},500,function(){
			flag=true;
		});		
	}

		
})