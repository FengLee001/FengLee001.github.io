
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



	function lunbo_touming(pic,bigbannerBox,lis,colorArr,second,tuactiveO,liactivebgcolor,tuO,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;
			// var second = 1000;

			// 给出初始值
			tu[0].style.opacity=tuactiveO;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.opacity=tuO;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					// tu[j].style.opacity=tuactiveO;
					animate(tu[j],{opacity:tuactiveO},500);
					li[j].style.backgroundColor=liactivebgcolor;
					banner.style.backgroundColor=color[j];
					num=j;
				}
			}
			
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t = setInterval(move,second);
			}

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>tu.length-1){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuO;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				// tu[num].style.opacity=tuactiveO;
				animate(tu[num],{opacity:tuactiveO},500);
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
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
			animate(btnbox,{width:35,height:324},200,function(){
				flagx=true;
			})
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			
			animate(btnbox,{width:0,height:0},200,function(){
				btnbox.style.display="none";
				flagx=true;
			})

			}
	}
	setTimeout(function(){
			animate(nav,{top:-50},function(){
				flags=true;
			})
		},1000)

}




// 获取轮播图       	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		li	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function sxlunbo(tu1,hezi,t1,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			// const leftBtn=$(zuo)[0];//获取左按钮
			// const rightBtn=$(you)[0];//获取右按钮
			// const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).height);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.top=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.top=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

			var now=0;//当前轮播图初始值--下标
			var next=0;//其他轮播图初始值--下标

			// 轮播效果函数
			function move(type="l"){//默认左按钮入口
				flag=false;//默认开关为关闭状态
				if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
				if(next>tu.length-1){ //移至最后一页
					next=0;//其他轮播图值返回0;
				}	
				tu[next].style.top=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.top=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{top:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			img.onmouseover=function(){
				clearInterval(t)
			}
			img.onmouseout=function(){
				t=setInterval(move,t1);
			}
		// 	leftBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}
		// 	leftBtn.onclick=function(){
		// 		if(flag){
		// 		move("l");
		// 		}
		// 	}
		// 	rightBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}

		// 	rightBtn.onclick=function(){
		// 		if(flag){
		// 			move("r");
		// 		}
		// 	}
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.top=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.top=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}

