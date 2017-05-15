
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
	//层级轮播
	//pic轮播图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// zuojian 左箭头
	// youjian 右箭头
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮播点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮播点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮播
	// function Zlunbo(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
	// 	const tupian=$(pic);
	// 	const banner=$(bigbannerBox)[0];
	// 	const li=$(lis);
	// 	const color=colorArr;
	// 	const leftBtn=$(zuojian)[0];
	// 	const rightBtn=$(youjian)[0];
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
	// 	function move(type="r"){
	// 		if(type=="r"){
	// 			num++;
	// 			if(num>bannertushuliang){
	// 				num=0;
	// 			}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[num].style.zIndex=tuactiveZ;
	// 			li[num].style.background=liactivebgColor;
	// 			banner.style.background=color[num];
	// 			}
	// 		if(type=="l"){
	// 			num--;
	// 			if(num<0){
	// 				num=tupian.length-1;
	// 			}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[num].style.zIndex=tuactiveZ;
	// 			li[num].style.background=liactivebgColor;
	// 			banner.style.background=color[num];
	// 			}

	// 		}

	// 		leftBtn.onclick=function(){
	// 			move("l");
	// 		}
	// 		rightBtn.onclick=function(){
	// 			move("r");
	// 		}


	// 	if(type==1){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lis);
	// 		const color=colorArr;
	// 		const leftBtn=$(zuojian)[0];
	// 		const rightBtn=$(youjian)[0];

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
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.opacity=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 			tupian[j].style.opacity=tuactiveZ;
	// 			animate(tupian[j],{opacity:0},500);
	// 			li[j].style.background=liactivebgColor;
	// 			banner.style.background=color[j];
	// 			num=j;
	// 			}
	// 			}
	// 		function move(type="r"){
	// 			if(type=="r"){
	// 				num++;
	// 				if(num>bannertushuliang){
	// 					num=0;
	// 				}
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.opacity=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 				tupian[num].style.opacity=tuactiveZ;
	// 				animate(tupian[num],{opacity:0},500);
	// 				li[num].style.background=liactivebgColor;
	// 				banner.style.background=color[num];
	// 			}
	// 			if(type=="l"){
	// 				num--;
	// 				if(num<0){
	// 					num=tupian.length-1;
	// 				}
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.opacity=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 				tupian[num].style.opacity=tuactiveZ;
	// 				animate(tupian[num],{opacity:0},500);
	// 				li[num].style.background=liactivebgColor;
	// 				banner.style.background=color[num];
	// 			}
	// 		}

	// 		leftBtn.onclick=function(){
	// 			move("l");
	// 		}
	// 		rightBtn.onclick=function(){
	// 			move("r");
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
	// // bannertushuliang,banner图的数量-1；
	// 	function Zlunbo(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lis);
	// 		const color=colorArr;
	// 		const leftBtn=$(zuojian)[0];
	// 		const rightBtn=$(youjian)[0];
	// 		tupian[0].style.zIndex=tuactiveZ;
	// 		li[0].style.background=liactivebgColor;
	// 		banner.style.background=color[0];
	// 		var num=0;
	// 		var t=setInterval(move,lunboTime);
	// 		function move(type="r"){
	// 			if(type=="r"){
	// 				num++;
	// 				if(num>bannertushuliang){
	// 					num=0;
	// 				}
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.zIndex=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 				tupian[num].style.zIndex=tuactiveZ;
	// 				li[num].style.background=liactivebgColor;
	// 				banner.style.background=color[num];
	// 				}
	// 			if(type=="l"){
	// 				num--;
	// 				if(num<0){
	// 					num=tupian.length-1;
	// 				}
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.zIndex=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 				tupian[num].style.zIndex=tuactiveZ;
	// 				li[num].style.background=liactivebgColor;
	// 				banner.style.background=color[num];
	// 				}

	// 		}
	// 		banner.onmouseover=function(){
	// 			clearInterval(t);
	// 		}
	// 		banner.onmouseout=function(){
	// 			t=setInterval(move,lunboTime);
	// 		}
	// 		leftBtn.onclick=function(){
	// 			move("l");
	// 		}
	// 		rightBtn.onclick=function(){
	// 			move("r");
	// 		}
	// 		for(let j=0;j<li.length;j++){
	// 			li[j].onmouseover=function(){
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.zIndex=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 			tupian[j].style.zIndex=tuactiveZ;
	// 			li[j].style.background=liactivebgColor;
	// 			banner.style.background=color[j];
	// 			num=j;
	// 			}
	// 		}
	// 	}






	function Zlunbo(pic,bigbannerBox,lunbodian,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,left,right,type=1){
		if(type==0){
		var flag=true;	
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		// const color=colorArr;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		// banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				if(flag){
				flag=false;
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			// banner.style.background=color[j];
			num=j;
			flag=true;
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
			if(flag){

				flag=false;
				if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
		}if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			// banner.style.background=color[num];
			flag=true;
			}
		}
		}
		


		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const leftbtn=$(left)[0];
			const rightbtn=$(right)[0];
			// const color=colorArr;
			tupian[0].style.opacity=1;
			li[0].style.background=liactivebgColor;
			// banner.style.background=color[0];
			var flag=true;
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}

			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					clearInterval(t);
				if(flag){
				flag=false;
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.15;
					li[i].style.background=lisColor;

				}
				tupian[j].style.zIndex=tuBigZ;
				// banner.style.background=color[j];
				li[j].style.background=liactivebgColor;
				animate(tupian[j],{opacity:1},donghuaTime,function(){
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
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	function move(type="l"){			
			flag=false;
			if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
			}else 
			if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.15;
					li[i].style.background=lisColor;
				}
				tupian[num].style.zIndex=tuBigZ;
				
				li[num].style.background=liactivebgColor;
				// banner.style.background=color[num];
				animate(tupian[num],{opacity:1},donghuaTime,function(){
					flag=true;
				});
				
			
			}
		}
	}





// 左右节点多图轮播
	// bigbannerBox 最大的盒子
	// picbox 放图片的盒子
	// pic 图片
	// left 左箭头
	// right 右箭头
	// num 轮播的图片个数
	// lunboTime 轮播时间
	// donghuaTime 动画时间
function jielunbo(bigbannerBox,picbox,pic,left,right,num,donghuaTime){
		const win=$(bigbannerBox)[0];
		const box=$(picbox)[0];
		const lis=$(pic);
		const boxchildrenlen=box.children.length;
		var n=num;
		const imgw=930;
		// const imgw=parseInt(window.getComputedStyle(document.querySelector(pic),null).width)*n;
		win.style.width=993+"px";
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		var flag=true;		
		// var t=setInterval(move,lunboTime);
		function move(type="l"){
			flag=false;

			if(type=="l"){
				animate(box,{marginLeft:-imgw},donghuaTime,function(){
				flag=true;
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.appendChild(first);
				}				
				box.style.marginLeft=0;
			});	
			}else if(type=="r"){
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.insertBefore(last,first);	
				}				
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuaTime,function(){
					flag=true;															
				})
			}
			
		}
		// win.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// win.onmouseout=function(){
		// 	 t=setInterval(move,lunboTime);
		// }
		leftbtn.onclick=function(){
			if(flag){
			move("r");
			}
			
		}
		rightbtn.onclick=function(){
			if(flag){
			move("l");
			}
		}

		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
}