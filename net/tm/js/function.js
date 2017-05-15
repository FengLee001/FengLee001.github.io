// window.onload=function(){
// 	const lis =document.querySelectorAll(".xxk li");
// 	const div =document.querySelectorAll(".xxk dl dt");
// 	const zhe =document.querySelector(".zhezhao .zz");
// 	const zhe1 =document.querySelector(".zhezhao");
// 	const banner =document.querySelectorAll(".bannerbox ul li");
// 	const banner1 =document.querySelector(".bannerbox .k1");
// 	xxka(lis,div);
// 	// zzhao(zhe1,zhe);
// 	xxka(banner,banner1);
// }


	// 选项卡   
	// btn选项卡按钮及父级   
	// con选项卡内容
	function xxka(btn,con){
		for(var i=0;i<btn.length;i++){
		btn[i].ind=i;
		btn[i].onmouseover=function(){
			
			// con[this.ind].style.transition="height 2s";
			con[this.ind].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[this.ind].style.display="none";
		}
	}
}





// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zhezhu(box1,box2){
	for(let i=0;i<box1.length;i++){
		box1[i].onmouseover=function(){
			box2[i].style.opacity=0.5;
		}
		box1[i].onmouseout=function(){
			box2[i].style.opacity=0;
		}
	}
}



		//轮播图  
			
	//z2           轮播图层级 			z-index之后的升级数字				（数字）     	  2
	//z1           初始图层级 			z-index之后的初始数字				（数字）     	  1
	//tu1           banner图 		 网站中的banner图选择器名称       	 （字符选择器） 	".tu"
	//banner       banner图背景		  网站中的banner背景选择器名称    	 （字符选择器） 	".banner"
	//li           轮播点  			网站中的轮播点选择器名称             （字符选择器）   ".box ul li"   
	//colorarr     背景图颜色 			 在数组中分别填入颜色    			（数组）    ["green","red","blue"]
	//lbcolor     选中轮播点颜色 			 填入颜色            			（数组）		"#fff"
	//lbcolor2    初始轮播点颜色 			 填入颜色            			（数组）		"orange"
	//js             轮播时间  				 填入时间 						（数组）		1000
	//youbtn		右键					网站中右键的名称															".jiantou_you"
	//zuobtn		左键					网站中左键的名称														".jiantou_zuo"



		function lunbo(tu1,banner1,li1,z2,js,z1){
			const tu=$(tu1);//banner图
			const banner =$(banner1)[0];//banner背景只有一个
			const li=$(li1);//轮播点 
			// const color=colorarr//背景图颜色
			// const youfan=$(youbtn)[0];
			// const zuofan=$(zuobtn)[0];
			// console.log(zuofan);
			// console.log(youfan);
			tu[0].style.zIndex=z1;//轮播图层级
			// li[0].style.background=lbcolor;//选中轮播点颜色
			// banner.style.background=colorarr[0];
			var num=0;
			var t=setInterval(move,js);//轮播时间
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,js);//轮播时间
			}

			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for (let i=0; i<tu.length; i++) {
					// tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;//初始图层级					
					// li[i].style.background=lbcolor2//初始轮播点颜色
				};
				tu[j].style.zIndex=z2;//轮播图层级
				// animate(tu[num],{opacity:1},800);
				// banner.style.background=colorarr[j];
				// li[j].style.background=lbcolor;//选中轮播点颜色
				num=j;
				clearInterval(t);
			}
		}
		function move(){
				num++;
				if(num>=tu.length){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=z1;//初始图层级
					tu[i].style.opacity=0;
					// li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[num].style.zIndex=z2;//轮播图层级
				animate(tu[num],{opacity:1},800);
				// banner.style.background=colorarr[num];
				// li[num].style.background=lbcolor;//选中轮播点颜色
			}

	
		
		// youfan.onmousedown=function(){
		// 	// console.log(num);
		// 	clearInterval(t);
		// 	for(let i=0;i<tu.length;i++){
		// 		tu[i].style.opacity=0;
		// 		tu[i].style.zIndex=z1;
		// 		// li[i].style.background=lbcolor2;
		// 	}
		// 	// tupian[num].style.opacity=0;
		// 	// tupian[num].style.zIndex=tuZ;
		// 	// li[num].style.background=lunboColor;
		// 	num++;
		// 	if(num>=tu.length){
		// 		num=0;
		// 	}
		// 	// banner.style.background=colorarr[num];
		// 	tu[num].style.zIndex=z2;
		// 	animate(tu[num],{opacity:1},800);
		// 	// li[num].style.background=lbcolor;
		// }
		// youfan.onmouseup=function(){
		// 	t=setInterval(move,js);
		// }

		// zuofan.onmousedown=function(){
			
		// 	clearInterval(t);
		// 	for(let i=0;i<tu.length;i++){
		// 	tu[i].style.opacity=0;
		// 	// console.log(tu[num].style.opacity);
		// 	tu[i].style.zIndex=z1;
		// 	// li[i].style.background=lbcolor2;
		// 	}
		// 	num--;
		// 	if(num<0){
		// 		num=tu.length-1;
		// 	}
		// 	// banner.style.background=colorarr[num];
		// 	tu[num].style.zIndex=z2;
		// 	animate(tu[num],{opacity:1},800);
		// 	// li[num].style.background=lbcolor;
		// }
		// zuofan.onmouseup=function(){
		// 	t=setInterval(move,js);
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
		
	}




	function lunbo1(tu1,banner1,li1,colorarr,z2,lbcolor,lbcolor2,js,z1,youbtn,zuobtn){
			const tu=$(tu1);//banner图
			const banner =$(banner1)[0];//banner背景只有一个
			const li=$(li1);//轮播点 
			const color=colorarr//背景图颜色
			const youfan=$(youbtn)[0];
			const zuofan=$(zuobtn)[0];
			// console.log(zuofan);
			// console.log(youfan);
			tu[0].style.zIndex=z1;//轮播图层级
			li[0].style.background=lbcolor;//选中轮播点颜色
			banner.style.background=colorarr[0];
			var num=0;
			var t=setInterval(move,js);//轮播时间
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,js);//轮播时间
			}


			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for (let i=0; i<tu.length; i++) {
					// tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;//初始图层级					
					li[i].style.background=lbcolor2//初始轮播点颜色
				};
				tu[j].style.zIndex=z2;//轮播图层级
				// animate(tu[num],{opacity:1},800);
				banner.style.background=colorarr[j];
				li[j].style.background=lbcolor;//选中轮播点颜色
				num=j;
				clearInterval(t);
			}
		}
		function move(){
				num++;
				if(num>=tu.length){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=z1;//初始图层级
					// tu[i].style.opacity=0;
					li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[num].style.zIndex=z2;//轮播图层级
				// animate(tu[num],{opacity:1},800);
				banner.style.background=colorarr[num];
				li[num].style.background=lbcolor;//选中轮播点颜色
			}

	
		
		youfan.onmousedown=function(){
			// console.log(num);
			clearInterval(t);
			for(let i=0;i<tu.length;i++){
				// tu[i].style.opacity=0;
				tu[i].style.zIndex=z1;
				li[i].style.background=lbcolor2;
			}
			// tupian[num].style.opacity=0;
			// tupian[num].style.zIndex=tuZ;
			// li[num].style.background=lunboColor;
			num++;
			if(num>=tu.length){
				num=0;
			}
			banner.style.background=colorarr[num];
			tu[num].style.zIndex=z2;
			// animate(tu[num],{opacity:1},800);
			li[num].style.background=lbcolor;
		}
		youfan.onmouseup=function(){
			t=setInterval(move,js);
		}

		zuofan.onmousedown=function(){
			
			clearInterval(t);
			for(let i=0;i<tu.length;i++){
			// tu[i].style.opacity=0;
			// console.log(tu[num].style.opacity);
			tu[i].style.zIndex=z1;
			li[i].style.background=lbcolor2;
			}
			num--;
			if(num<0){
				num=tu.length-1;
			}
			banner.style.background=colorarr[num];
			tu[num].style.zIndex=z2;
			// animate(tu[num],{opacity:1},800);
			li[num].style.background=lbcolor;
		}
		zuofan.onmouseup=function(){
			t=setInterval(move,js);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				clearInterval(t);
				for (let i = 0; i <li.length; i++) {					
					// tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;
					li[i].style.background=lbcolor2;
				}
			banner.style.background=colorarr[j];
			tu[j].style.zIndex=z2;
			// animate(tu[j],{opacity:1},800);
			li[j].style.background=lbcolor;

			}			
		}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}



// 获取轮播图       	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		lis	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function zuoyoulunbo(tu1,hezi,zuo,you,t1,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			const leftBtn=$(zuo)[0];//获取左按钮
			const rightBtn=$(you)[0];//获取右按钮
			// const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.left=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.left=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			// var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

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
				tu[next].style.left=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.left=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{left:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			img.onmouseover=function(){
				// clearInterval(t)
			}
			img.onmouseout=function(){
				// t=setInterval(move,t1);
			}
			leftBtn.onmouseover=function(){
				// clearInterval(t)
			}
			leftBtn.onclick=function(){
				if(flag){
				move("l");
				}
			}
			rightBtn.onmouseover=function(){
				// clearInterval(t)
			}

			rightBtn.onclick=function(){
				if(flag){
					move("r");
				}
			}
			window.onblur=function(){
			// clearInterval(t);
		}
		window.onfocus=function(){
			// t=setInterval(move,1000);
		}
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.left=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.left=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
	}




	// 获取轮播图 2      	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		lis	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function zuoyoulunbo2(tu1,hezi,zuo,you,lis,t1,t2,s1,s2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			const leftBtn=$(zuo)[0];//获取左按钮
			const rightBtn=$(you)[0];//获取右按钮
			const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.left=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.left=0;//第一张轮播图放在中间，显示出来

			li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			// var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

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
				tu[next].style.left=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.left=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{left:0},500,function(){flag=true;//循环播放后开关打开
					li[next].style.background=s2;//其他轮播点显示白色
					li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			// img.onmouseover=function(){
				// clearInterval(t)
			// }
			// img.onmouseout=function(){
				// t=setInterval(move,t1);
			// }
			// leftBtn.onmouseover=function(){
				// clearInterval(t)
			// }
			leftBtn.onclick=function(){
				if(flag){
				move("r");
				}
			}
			// rightBtn.onmouseover=function(){
				// clearInterval(t)
			// }

			rightBtn.onclick=function(){
				if(flag){
					move("l");
				}
			}
			// window.onblur=function(){
			// clearInterval(t);
		// }
		// window.onfocus=function(){
			// t=setInterval(move,1000);
		// }
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		// clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			// tu[i].style.left=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		// tu[j].style.left=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
	}






	// 多张图的轮播
function duotu_lunbo(box1,leftBtn1,rightBtn1,wins1,n1){
	const box = $(box1)[0];
	const leftBtn=$(leftBtn1)[0];
	const rightBtn=$(rightBtn1)[0];
	const wins=$(wins1)[0];
	let n=n1;//传几张图
	const imgW = parseInt(window.getComputedStyle(wins,null).width);
	let flag=true;
	const childlen = box.children.length;

	var t = setInterval(movel,1000);
	function movel(){
		flag=false;
		let first = box.firstElementChild;		
		animate(box,{left:-imgW},1500,function(){
			flag=true;
                  for(let i=0; i<n;i++){
                     box.appendChild(first);
                     first=box.firstElementChild;
                  }
			box.style.left=0;
		});			
	}
	//按钮
          function moveR(){
          	//box.insertBefore(last,firstChild);
          	for(let i=0;i<n;i++){
          		let firstChild=box.firstElementChild;
			let last=box.lastElementChild;	
			box.insertBefore(last,firstChild);
          	}
          	box.style.left=-imgW+"px";
          	animate(box,{left:0},1500);
          }
          
	leftBtn.onclick=function(){
		if(flag){
			moveR();
		}
	}
	rightBtn.onclick=function(){
		if(flag){
			movel();
		}
	}
	leftBtn.onmouseover=function(){
		clearInterval(t);
	}
	rightBtn.onmouseover=function(){
		clearInterval(t);
	}
	// 循环
	}
