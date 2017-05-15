
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
	//函数简化    obj=document范围   如("img",section[i]) section[i]下的img
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
	//pic轮播图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮播点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮播点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮播
	// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,type=0){
		
	// 	const tupian=$(pic);
	// 	const banner=$(bigbannerBox)[0];
	// 	const li=$(lis);
	// 	const color=colorArr;
	// 	tupian[0].style.zIndex=tuactiveZ;
	// 	li[0].style.background=liactivebgColor;
	// 	banner.style.background=color[0];
	// 	var num=0;
	// 	var t=setInterval(move,lunboTime);
	// 	banner.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	banner.onmouseout=function(){
	// 		t=setInterval(move,lunboTime);
	// 	}
	// 	for(let j=0;j<li.length;j++){
	// 		li[j].onmouseover=function(){
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[j].style.zIndex=tuactiveZ;
	// 			li[j].style.background=liactivebgColor;
	// 			banner.style.background=color[j];
	// 			num=j;
	// 			}
	// 		}
	// 		function move(){
	// 		num++;
	// 		if(num>tupian.length-1){
	// 			num=0;
	// 		}
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[num].style.zIndex=tuactiveZ;
	// 		li[num].style.background=liactivebgColor;
	// 		banner.style.background=color[num];
	// 	}
	// 	if(type==1){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lis);
	// 		const color=colorArr;
	// 		tupian[0].style.opacity=tuactiveZ;
	// 		li[0].style.background=liactivebgColor;
	// 		banner.style.background=color[0];
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
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.opacity=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 			// tupian[j].style.opacity=1;
	// 			animate(tupian[j],{opacity:tuactiveZ},500);
	// 			li[j].style.background=liactivebgColor;
	// 			banner.style.background=color[j];
	// 			num=j;
	// 			}
	// 			}


	// 			function move(){
	// 			num++;
	// 			console.log(num)

	// 			if(num>tupian.length-1){
	// 				num=0;

	// 			}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.opacity=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			// tupian[num].style.opacity=1;
	// 			// console.log(num)
	// 			animate(tupian[num],{opacity:tuactiveZ},500);
	// 			li[num].style.background=liactivebgColor;
	// 			banner.style.background=color[num];

	// 		}
	// 	}
	// }



	function lunbo_touming(pic,bigbannerBox,second,tuactiveO,tuO){
			const tu = $(pic);
			// const banner = $(bigbannerBox)[0];
			// const li = $(lis);
			// const color = colorArr;
			// var second = 1000;

			// 给出初始值
			tu[0].style.opacity=tuactiveO;
			// li[0].style.backgroundColor=liactivebgcolor;
			// banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			// for(let j=0;j<li.length;j++){
				// li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.opacity=tuO;
						// li[i].style.backgroundColor=liscolor;

					// }
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					// tu[j].style.opacity=tuactiveO;
					animate(tu[i],{opacity:tuactiveO},500);
					// li[j].style.backgroundColor=liactivebgcolor;
					// banner.style.backgroundColor=color[j];
					// num=j;
				}
			// }
			
			// banner.onmouseover=function(){
			// 	clearInterval(t);
			// }
			// banner.onmouseout=function(){
			// 	t = setInterval(move,second);
			// }

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>tu.length-1){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuO;
					// li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				// tu[num].style.opacity=tuactiveO;
				animate(tu[num],{opacity:tuactiveO},500);
				// li[num].style.backgroundColor=liactivebgcolor;
				// banner.style.backgroundColor=color[num];
				}
			}

