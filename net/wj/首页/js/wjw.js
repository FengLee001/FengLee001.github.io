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

		//倒计时
		const dh=$(".dh")[0];
		const dm=$(".dm")[0];
		const ds=$(".ds")[0];
		class djs{
			constructor(h,m,s,date){
				this.h=h;
				this.m=m;
				this.s=s;
				// this.t=t;
				this.date=date;
			}
			play(){
				let map=this.gettime();
				this.writes(map);
				this.update();
			}
			gettime(){
				let now= new Date();
				let chatime=this.date.getTime()-now.getTime();
				chatime/=1000;
				// let t=parseInt(chatime/60/60/24);
				let h=parseInt(chatime/60/60%24);
				let m=parseInt(chatime/60%60);
				let s=parseInt(chatime%60);
				let map =new Map();

				h=h<10?('0'+h):h;
				m=m<10?('0'+m):m;
				s=s<10?('0'+s):s;
				
				map.set("h",h);
				map.set("m",m);
				map.set("s",s);
				return map;
			}
			writes(map){
				this.h.innerHTML=map.get("h");
				this.m.innerHTML=map.get("m");
				this.s.innerHTML=map.get("s");
				
			}
			update(){
				let that=this;
				setInterval(function(){
					that.writes(that.gettime());
				},1000)
			}
		}
		let wuyi=new Date(2017,10,1,0,0,0)	
		let wydjs1=new djs(dh,dm,ds,wuyi);
		wydjs1.play();

	//乐享
		const btn=$(".enjoy");
		const con=$(".lexiang_contX");
		const ems=$(".hong")
		con[0].style.display="block";
		btn[0].style.background="#fff";
		ems[0].style.display="block";
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
				btn[j].style.background="#fbfbfb"
				ems[j].style.display="none"
			}
			con[i].style.display="block";
			btn[i].style.background="#fff";
			ems[i].style.display="block";
		}
	}
})