
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


//获取一个元素的style(width height)
	//attr(obj,style);
	//obj  类型 DOM元素
	//style 类型 string
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}  
	//例子 attr(ul[i],"height")


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





		

//解决scrollTop兼容性 
function scrollobj(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=100;
		html.scrollTop=100;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=body;
		}
		body.scrollTop=0;
		html.scrollTop=0;
		return obj;

		// 第二种方法
		// document.body.scrollTop=1;
		// document.documentElement.scrollTop=1;//赋不上值
		// let obj=document.body.scrollTop?document.body:document.documentElement;

		// 	return obj;

}

			// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
	//db 底部
function louceng(anniu,Section,anniukuai,daohang,chushise,activese,donghuaTime,num,dibu){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	const db=$(dibu)[0];
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=false;

	//
	for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let k=0;k<section.length;k++){
					if(scroll.scrollTop+0.5*CH>=section[k].offsetTop){
						for(let j=0;j<section.length;j++){
							btn[j].style.background=chushise;
						}
					btn[k].style.background=activese[k];
				}
			}
			btn[i].style.background=activese[i];
		}
	
			btn[i].onmouseout=function(){				
				btn[i].style.background=chushise;
				for(let k=0;k<section.length;k++){
					if(scroll.scrollTop+0.5*CH>=section[k].offsetTop){
						for(let j=0;j<section.length;j++){
							btn[j].style.background=chushise;
						}
						btn[k].style.background=activese[k];
					}
				}

			}
			
				
		}

	db.onclick=function(){
		animate(scroll,{scrollTop:0},donghuaTime);
	}
	//


	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese[i];
			}
			// if(scroll.scrollTop+CH>=section[i].offsetTop){
			// 	let img=$(pic,section[i]);
			// 	for(let k=0;k<img.length;k++){
			// 		img[k].src=img[k].getAttribute(picurl);
			// 	}
			// }
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}

}

