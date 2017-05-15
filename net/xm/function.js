
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}


	function xxk(bbn,ccn){
	for(let i=0;i<bbn.length;i++){
		bbn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<ccn.length;j++){
				ccn[j].style.display="none"
			}			
			ccn[i].style.display="block"
		}
		// bbn[i].onmouseout=function (){
			// ccn[i].style.display="none"
		// }
	}	
}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.onload=function(){
				select();
			}
		}else if(typeof select=="string"){
			return obj.querySelectorAll(select);
		}
	}



//层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	// function Zlunbo(pic,bigbannerBox,lunbodian,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,left,right,type=1){
	// 	if(type==0){
	// 	var flag=true;	
	// 	const tupian=$(pic);
	// 	const banner=$(bigbannerBox)[0];
	// 	const li=$(lunbodian);
	// 	// const color=colorArr;
	// 	const leftbtn=$(left)[0];
	// 	const rightbtn=$(right)[0];
	// 	tupian[0].style.zIndex=tuBigZ;
	// 	li[0].style.background=liactivebgColor;
	// 	// banner.style.background=color[0];
	// 	var num=0;
	// 	var t=setInterval(move,lunboTime);
	// 	banner.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	banner.onmouseout=function(){
	// 		t=setInterval(move,lunboTime);
	// 	}
		
	// 		for(let j=0;j<li.length;j++){
	// 		li[j].onmouseover=function(){
	// 			if(flag){
	// 			flag=false;
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[j].style.zIndex=tuBigZ;
	// 		li[j].style.background=liactivebgColor;
	// 		// banner.style.background=color[j];
	// 		num=j;
	// 		flag=true;
	// 		}
	// 		}
	// 	}
	// 	leftbtn.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	leftbtn.onclick=function(){
	// 		if(flag){
	// 		move("l");	
	// 		}
			
	// 	}
	// 	rightbtn.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	rightbtn.onclick=function(){
	// 		if(flag){
	// 		move("r");	
	// 		}
	// 	}
	// 	function move(type="l"){
	// 		if(flag){

	// 			flag=false;
	// 			if(type=="l"){
	// 		num++;
	// 		if(num>tupian.length-1){
	// 			num=0;
	// 		}
	// 	}if(type=="r"){
	// 		num--;
	// 		if(num<0){
	// 			num=tupian.length-1;
	// 		}
	// 	}
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[num].style.zIndex=tuBigZ;
	// 		li[num].style.background=liactivebgColor;
	// 		// banner.style.background=color[num];
	// 		flag=true;
	// 		}
	// 	}
	// 	}
		


	// 	else if(type==1){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lunbodian);
	// 		const leftbtn=$(left)[0];
	// 		const rightbtn=$(right)[0];
	// 		// const color=colorArr;
	// 		tupian[0].style.opacity=1;
	// 		li[0].style.background=liactivebgColor;
	// 		// banner.style.background=color[0];
	// 		var flag=true;
	// 		var num=0;
	// 		var t=setInterval(move,lunboTime);
	// 		banner.onmouseover=function(){
	// 			clearInterval(t);
	// 		}
	// 		banner.onmouseout=function(){
	// 			t=setInterval(move,lunboTime);
	// 		}
	// 		for(let j=0;j<li.length;j++){
	// 			li[j].onmouseover=function(){
	// 				clearInterval(t);
	// 			if(flag){
	// 			flag=false;
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				tupian[i].style.opacity=0;
	// 				li[i].style.background=lisColor;

	// 			}
	// 			tupian[num].style.zIndex=tuBigZ;
	// 			animate(tupian[num],{opacity:1},donghuaTime);
	// 			li[j].style.background=liactivebgColor;
	// 			// banner.style.background=color[j];
	// 			num=j;
	// 			flag=true;
	// 		}
	// 			}
	// 		}
	// 		leftbtn.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	leftbtn.onclick=function(){
	// 		if(flag){
	// 		move("l");	
	// 		}
			
	// 	}
	// 	rightbtn.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	rightbtn.onclick=function(){
	// 		if(flag){
	// 		move("r");	
	// 		}
	// 	}
	// 		function move(type="l"){
	// 		if(flag){
	// 		flag=false;
	// 		if(type=="l"){
	// 		num++;
	// 		if(num>tupian.length-1){
	// 			num=0;
	// 		}
	// 		}else 
	// 		if(type=="r"){
	// 		num--;
	// 		if(num<0){
	// 			num=tupian.length-1;
	// 		}
	// 	}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				tupian[i].style.opacity=0;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[num].style.zIndex=tuBigZ;
	// 			animate(tupian[num],{opacity:1},donghuaTime);
	// 			li[num].style.background=liactivebgColor;
	// 			// banner.style.background=color[num];
	// 			flag=true;
	// 		}
	// 		}
	// 	}
	// }




//层级轮播
	// pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// zuojian 左箭头
	// youjian 右箭头
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
		function Zlunbo(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			const leftBtn=$(zuojian)[0];
			const rightBtn=$(youjian)[0];
			tupian[0].style.zIndex=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>bannertushuliang){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}
				if(type=="l"){
					num--;
					if(num<0){
						num=tupian.length-1;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}

			}
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.zIndex=tuactiveZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
		}




// 左右轮播
	function zylunbo(pic,bigbannerBox,left,right,lunbodian,liactivebgColor,lunboTime,donghuaTime,lisColor){	
		const tu=$(pic);
		const img=$(bigbannerBox)[0];
		const imgW=parseInt(window.getComputedStyle(img,null).width);
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		const li=$(lunbodian);
		//初始化
		li[0].style.background=liactivebgColor;
		var flag=true;
		// console.log(imgW)
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgW+"px";
		}
		tu[0].style.left=0;
		// var t=setInterval(move,lunboTime);
		var now=0;
		var next=0;

		function move(type="l"){
			flag=false;
			if(type=="l"){
			next++;
			if(next>tu.length-1){
				next=0;
				}
			tu[next].style.left=imgW+"px";
			animate(tu[now],{left:-imgW},donghuaTime);
			
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW+"px";
				animate(tu[now],{left:imgW},donghuaTime);

			}
			

			animate(tu[next],{left:0},500,function(){
				flag=true;
				// for(let i=0;i<li.length;i++){
				// 	li[i].style.background="orange";
				// }
				li[next].style.background=liactivebgColor;
				li[now].style.background=lisColor;
				now=next;
			});
			
		}
		// img.onmouseover=function(){
			// clearInterval(t);
		// }
		// img.onmouseout=function(){
			 // t=setInterval(move,lunboTime);
			
		// }
		leftbtn.onmouseover=function(){
			// clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}
		rightbtn.onmouseover=function(){
			// clearInterval(t);
		}
		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}

		for(let i=0; i<li.length;i++){
			li[i].onmouseover=function(){
				// clearInterval(t);
					if(flag){		
					if(i<now){
						// next=i-1;
						now=i;
						move("r");
					}else if(i>now){
						// next=i-1;
						now=i;
						move("l");
					}
				}
			}
		}


		window.onblur=function(){
			// clearInterval(t);
		}
		window.onfocus=function(){
			// t=setInterval(move,1000);
		}
	}

