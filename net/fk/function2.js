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
		for(let i=0;i<btn.length;i++){
		// btn[i].index=i;
		btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){	
			con[j].style.display="none";
			}
			con[i].style.display="block";
		}
	}

}



// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zzhao(a,b){
	a.onmouseover=function(){
		b.style.display="block";
	}
	a.onmouseout=function(){
		b.style.display="none";
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




		function lunbo(tu1,banner1,li1,colorarr,z2,lbcolor,lbcolor2,js,z1){
			const tu=$(tu1);//banner图
			const banner =$(banner1)[0];//banner背景只有一个
			const li=$(li1);//轮播点 
			const color=colorarr//背景图颜色
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
				for (let i = 0; i < tu.length; i++) {
					tu[i].style.zIndex=z1;//初始图层级
					li[i].style.background=lbcolor2//初始轮播点颜色
				};
				tu[j].style.zIndex=z2;//轮播图层级
				banner.style.background=colorarr[j];
				li[j].style.background=lbcolor;//选中轮播点颜色
				num=j;
			}
		}
		function move(){
				num++;
				if(num>2){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=z1;//初始图层级
					li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[num].style.zIndex=z2;//轮播图层级
				banner.style.background=colorarr[num];
				li[num].style.background=lbcolor;//选中轮播点颜色
			}

		}