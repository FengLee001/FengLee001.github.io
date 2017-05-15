$(function(){

	//太原
	const taiyuan=$(".taiyuan")[0];
	const taiyuanmeau=$(".taiyuanmeau")[0];
	const qitameau=$(".qitameau")[0];
	const blue=$(".blue")[0];
	const body=$("body")[0];

	taiyuan.onclick=function(e){
		e.stopPropagation()
		taiyuanmeau.style.display="block";
	}
	blue.onclick=function(e){
		e.stopPropagation()
		taiyuanmeau.style.display="none";
		qitameau.style.display="block";
	}
	body.onclick=function(){
		taiyuanmeau.style.display="none";
		qitameau.style.display="none";
	}
	//banner

		const tu=$(".item");
		const img=$(".banner")[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBtn=$(".prev")[0];
		const rightBtn=$(".next")[0];
		const lunbodian=$(".bannerbox ul li");
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var flag=true;
		var t=setInterval(move,3000);
		var now=0;
		var next=1;
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					now=next;
					next++;
					if(next>tu.length-1){
					next=0;
					}
					flag=true;
				});
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					now=next;
					next--;
					if(next<0){
					next=tu.length-1;
					}
					flag=true;
				});
			}
			lunbodian[now].classList.remove("act");
			lunbodian[next].classList.add("act");	
		}
		
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t=setInterval(move,3000);
		}
		leftBtn.onmouseover=function(){
			clearInterval(t);
		}
		rightBtn.onmouseover=function(){
			clearInterval(t);
		}
		leftBtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightBtn.onclick=function(){
			if(flag){
				move("r");
			}
		}	
			
			for(let i=0;i<lunbodian.length;i++){
				lunbodian[i].onclick=function(){
					clearInterval(t);
					if(flag){
						if(i<now){
							next=i;
							move("l");
							now=i;
							// move("r");
							
						}else if(i>now){
								next=i;
								move("r");
								now=i;
						}
					}
				}	
			}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,3000);
		}

	// 优惠促销
		const box1=$(".yhgundong")[0];
		const da1=$(".yhcon")[0];
		const zuobtn1=$(".yhpre")[0];
		const youbtn1=$(".yhnext")[0];
		// var flag1=true;
		var t1=setInterval(move1,2000);
		function move1(type="l"){
			// flag1=false;
			let first1=box1.firstElementChild;
			let last1=box1.lastElementChild;
			if(type=="l"){
				box1.style.left=-295+"px";
				box1.insertBefore(last1,first1);
				animate(box1,{left:0},500,function(){
					// flag1=true;
				});
			}else if(type=="r"){
				animate(box1,{left:-295},500,function(){
				box1.appendChild(first1);
				box1.style.left=0;
				// flag1=true;
			});
			}
		}
		da1.onmouseover=function(){
			clearInterval(t1);
		}
		da1.onmouseout=function(){
			t1=setInterval(move1,2000);
		}
		zuobtn1.onclick=function(){
			// if(flag1){
				move1("l");
			// }
		}
		youbtn1.onclick=function(){
			// if(flag){
				move1("r");
			// }
		}

	//公告
	const box3=$(".gonggao ul")[0];
    const leftBtn3=$(".left")[0];
    const rightBtn3=$(".right")[0];
    const img3=$(".gonggao ul li");
    const imgw3=parseInt(window.getComputedStyle(img3[0],null).width);

    var flag=true;
    let n=1;
    function move3(type="r"){
        flag=false;
        if(type=="r"){
            animate(box3,{left:-imgw3},500,function(){
            	for(let i=0;i<n;i++){
            		let first=box3.firstElementChild;
                    box3.appendChild(first);
            	}
                    
                box3.style.left=0;
                flag=true;
            });
        }else if(type=="l"){
        	for(let i=0;i<n;i++){
        		let last=box3.lastElementChild;
                let first=box3.firstElementChild;
                box3.insertBefore(last,first);	     
            }
            box3.style.left=-imgw3+"px";
            animate(box3,{left:0},500,function(){  
                flag=true;
            });
        }
    }
    leftBtn3.onclick=function(){
        if(flag){
            move3("l");
        }
    }
    rightBtn3.onclick=function(){
        if(flag){
            move3("r");
        }
    }
    setInterval(move3,2000);
})


  //title快速显示
    var x = 10, y = 20;
    const img=$(".img1");
    function showTitle() { 
        for(let i=0;i<img.length;i++){
            img[i].onmouseover=function (e) {
                this.myTitle = this.title;
                this.title = "";
                var showdiv = document.createElement("div");
                showdiv.classList.add("showdiv");
                document.body.appendChild(showdiv);
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].innerHTML=this.myTitle;
                    showdiv1[j].style.top=(e.pageY + y) + "px";
                    showdiv1[j].style.left= (e.pageX + x) + "px";
                    showdiv1[j].show="fast";
                }
                
            }
            img[i].onmouseout=function(){
                this.title = this.myTitle;
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].remove();
                }
            }
            img[i].onmousemove=function(e){
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].style.top=(e.pageY + y) + "px";
                    showdiv1[j].style.left= (e.pageX + x) + "px";
                }
            }
        }  
    }
    showTitle();