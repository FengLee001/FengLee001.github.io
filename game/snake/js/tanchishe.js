
//定义初始蛇信息
//根据蛇信息创建蛇
//蛇移动 时间间隔函数
	//定义新蛇头的位置信息
	//改变初始蛇的信息(添加新蛇头信息)
	//去除旧蛇尾信息
//去除旧蛇尾she类名
//重新创建蛇


$(function(){
	const sence=$(".sence")[0];
	// const fen=$(".fen")[0];
	// const guan=$(".guan")[0];
	const zuigaofen=$(".fenshuban .zuigaofen span")[0];
	const defen=$(".fenshuban .defen span")[0];
	const pauseobj=$(".fenshuban .pause")[0];
	let tcs1=new tcs(sence,zuigaofen,defen,pauseobj);

})
class tcs{
	constructor(sence,zuigaofen,defen,pauseobj){
		this.sence=sence;
		this.zuigaofen=zuigaofen;
		this.defen=defen;
		this.pauseobj=pauseobj;
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];  //前三格为初始蛇
		this.shefx="right";
		this.shekeyflag=true;
		this.fenshu=0;
		this.statu=true;
		// this.startTime;
		// this.dtime=0;
		this.play();
	}
	play(){
		// let time=new Date();
		// this.startTime=time.getTime();

		if(Number(localStorage.zuigaofen)){
			this.zuigaofen.innerHTML=localStorage.zuigaofen;
			this.maxfen=localStorage.zuigaofen;
		}else{
			this.maxfen=0;
			this.zuigaofen.innerHTML=this.maxfen;
		}
		this.changefenshu();		
		//建场景 能放20*20个
		this.createSence();
		//创建蛇
		this.createShe();
		//蛇跑
		this.shemove();
		//控制蛇
		this.contorlshe();
		//创建食物
		this.createfood();;
		//暂停
		this.pause();
	}
	changefenshu(){
		this.defen.innerHTML=this.fenshu;
		// if(this.maxfen){
			if(this.maxfen<this.fenshu){
				this.maxfen=this.fenshu;
			}
		// }
	}
	createSence(){
		//行
		for(let i=0;i<20;i++){
			//列  
			for(let j=0;j<20;j++){
				let gezi=$("<div>");
				gezi.id=`${i}-${j}`;   //记录位置信息 每个场景都有id属性
				gezi.classList.add("gezi"); 
				this.sence.appendChild(gezi);
			}
		}
	}

	createShe(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i]).classList.add("she");  //给他加样式
		}
	}

	shemove(){
		let that=this; 
		this.t=setInterval(function(){
			let newtou;  //新头控制蛇的方向
			if(that.shefx=="right"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}	
			if(that.shefx=="left"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}	
			if(that.shefx=="top"){
				newtou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}	
			if(that.shefx=="bottom"){
				newtou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}	
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				alert("游戏结束");
				that.gameover();
				return;
			}
			for(let i=0;i<that.she.length;i++){  //碰到自己游戏结束
				if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
					alert("游戏结束");
					that.gameover();
					return;
				}
			}
			that.she.push(newtou);
			if(newtou.x==that.foodw.x&&newtou.y==that.foodw.y){
				that.getElement(that.foodw).classList.remove("food");   //蛇吃不长
				that.createfood();
				that.fenshu++;
				that.changefenshu();
			}else{
				let oldwei=that.she.shift(that.she[0]);
				that.removewei(oldwei);   
				that.createShe();
			}that.shekeyflag=true;
		},300)
		
	}

	removewei(oldwei){    //让页面中的尾部类名位置信息也去掉
		this.getElement(oldwei).classList.remove("she");
	}

	contorlshe(){
		let that=this;
		window.onkeydown=function(e){
			if(that.shekeyflag){
				that.shekeyflag=false;
				if(e.keyCode==37){
					if(that.shefx!="right"){
						that.shefx="left";
					}
				}
				if(e.keyCode==40){
					if(that.shefx!="top"){
						that.shefx="bottom";
					}
				}
				if(e.keyCode==39){
					if(that.shefx!="left"){
						that.shefx="right";
					}
				}
				if(e.keyCode==38){
					if(that.shefx!="bottom"){
					that.shefx="top";
					}
				}
			}			
		}
	}
	createfood(){
		this.foodw={};   
		this.foodw.x=Math.floor(Math.random()*20);
		this.foodw.y=Math.floor(Math.random()*20);
		this.getElement(this.foodw).classList.add("food");
	}
	gameover(){
		localStorage.zuigaofen=this.maxfen;
		clearInterval(this.t);
	}
	pause(){
		let that=this;
		this.pauseobj.onclick=function(){
			if(that.statu){
				that.statu=false;
				clearInterval(that.t);
				that.pauseobj.innerHTML="开始"
			}else{
				that.statu=true;
				that.pauseobj.innerHTML="暂停";
				that.shemove();
			}
			
		}
	}
	//封装的方法
	getElement(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}

	

}







//练习
// class tcs{
// 	constructor(sence){
// 		this.sence=sence;
// 		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
// 		this.play();
// 	}


// play(){
// 	//场景
// 	this.createSence();
// 	//造蛇
// 	this.createshe();
// 	//蛇动
// 	this.shemove();
// }

// createSence(){
// 	for(let i=0;i<20;i++){
// 		for(let j=0;j<20;j++){
// 			let gezi=$("<div>");
// 			gezi.id=`${i}-${j}`;
// 			gezi.classList.add("gezi");
// 			this.sence.appendChild(gezi);
// 		}
// 	}
// }
// createshe(){
// 	for(let i=0;i<this.she.length;i++){
// 		this.getElement(this.she[i]).classList.add("she");
// 	}
// }
// shemove(){
// 	let that=this;
// 	this.t=setInterval(function(){
// 		let newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1}
// 	},300)
// }
// }