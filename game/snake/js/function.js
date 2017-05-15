
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
	//函数简化  创捷节点
	function $(select,obj=document){

		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener("load",select,false)
		}else if(typeof select=="string"){
			//<af2>
			//正则表达式
			if(/^<\w+>$/.test(select)){ // <开始 >结束 \w 字母数字下划线
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
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
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tupian[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
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
			function move(){
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
		if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=1;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
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
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=0;
						li[i].style.background=lisColor;
					}
				// tupian[j].style.opacity=1;
				animate(tupian[j],{opacity:1},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){
				num++;
				if(num>bannertushuliang){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=0;
					li[i].style.background=lisColor;
				}
				// tupian[num].style.opacity=1;
				animate(tupian[num],{opacity:1},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
		}
	}



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
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=false;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese[i];
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
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



//事件函数
//obj   事件源
//type  事件类型  发生了什么
//fn     执行程序  
function one(obj,type,fn){
	//添加第一个type类型事件 执行fn
	obj.addEventListener(type,fn,false);
	//添加第一个type类型事件 执行clear
	obj.addEventListener(type,clear,false);
	function clear(){
		//清除 type类型事件中fn处理程序
		obj.removeEventListener(type,fn,false);
		//清除 type类型事件中clear处理程序
		obj.removeEventListener(type,clear,false);
	}
}



	//拖拽事件 drag()
	//box 要拖拽的元素  要求绝对定位
function drag(box){		
			const winw=document.documentElement.clientWidth;
			const winh=document.documentElement.clientHeight;
			const boxw=box.offsetWidth;
			const boxh=box.offsetHeight;
			box.addEventListener("mousedown",down,false);
			let shubiaox;
			let shubiaoy;
			let boxx;
			let boxy;
			
			function down(e){
				shubiaox=e.clientX;  //鼠标在元素身上位置距离屏幕左距离
				shubiaoy=e.clientY;  //鼠标在元素身上位置距离屏幕上距离
				boxx=box.offsetLeft; //元素box距离屏幕左距离
				boxy=box.offsetTop;  //元素box距离屏幕上距离
				window.addEventListener("mousemove",move,false);  //window添加mouse事件 保证鼠标不会因快速移动而导致元素反应不过来
				window.addEventListener("mouseup",up,false);	//添加一个up事件用来清除move移动事件			
			}

			function move(e){
				let shubiaonewx=e.clientX;    //鼠标在元素身上位置距离屏幕左新的距离
				let shubiaonewy=e.clientY;    //鼠标在元素身上位置距离屏幕上新的距离
				chax=shubiaonewx-shubiaox;
				chay=shubiaonewy-shubiaoy;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				if(lefts<0){
					lefts=0;
				}
				if(tops<0){
					tops=0;
				}
				if(lefts>=winw-boxw){
					lefts=winw-boxw;
				}
				if(tops>=winh-boxw){
					tops=winh-boxh;
				}
				box.style.left=lefts+"px";
				box.style.top=tops+"px";
			}
			function up(){     
					window.removeEventListener("mousemove",move,false);  //清除鼠标移动事件 鼠标离开元素不动
					window.removeEventListener("mouseup",up,false);  

			}
}