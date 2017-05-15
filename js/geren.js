$(function(){
//home
$(".title h2").animate({marginLeft:0},1000)
$(".desc .td").animate({marginRight:120},1000)
$(".desc .td2").fadeIn(2500)
    //全屏轮播
	var t=setInterval(move,4000)
        var num=0;
        function move() {
            num++;
            if(num>$(".bodyImg").length-1){
                num=0;
            }
            if(num<0){
                num=$(".bodyImg").length-1;
            }

            $(".bodyImg").filter(".active").removeClass("active").end().eq(num).addClass("active")

        }

    //导航跳转
    $(".list1").click(function(){
        $("body,html").animate({scrollTop:"550px"},"fast")
    })
    $(".list2").click(function(){
        $("body,html").animate({scrollTop:"1470px"},"fast")
    })
    $(".list3").click(function(){
        $("body,html").animate({scrollTop:"2350px"},"fast")
    })
    $(".list4").click(function(){
        $("body,html").animate({scrollTop:"2600px"},"fast")
    })
    //技能展示环
    //1
    var canvas=document.querySelector(".hua1");
    var cobj=canvas.getContext("2d");
    function atr(deg) {
       return deg*Math.PI/180
   }          
   cobj.translate(60,60);
   cobj.lineWidth=10;
   cobj.strokeStyle="#ed6811";
   cobj.font="bold 30px 华文彩云";
   cobj.fillStyle="#fff";
   cobj.textAlign="center";
   cobj.textBaseline="middle";

   var angle=0;
   var maxangle=85*0.01*360; //90%*360
   var f;
   function progress() {
       angle++;
       cobj.clearRect(-60,-60,120,120)
       cobj.beginPath();
       cobj.arc(0,0,50,-atr(90),atr(angle-90))
       cobj.stroke();
       cobj.fillText(Math.floor(angle/360*100)+"%",0,0);
       if(angle>maxangle){
           cancelAnimationFrame(f);//取消动画
       }else{
           f=requestAnimationFrame(progress); //动画
       }
   }
   progress()

   //2
   var canvas2=document.querySelector(".hua2");
    var cobj2=canvas2.getContext("2d");
    function atr2(deg) {
       return deg*Math.PI/180
   }          
   cobj2.translate(60,60);
   cobj2.lineWidth=10;
   cobj2.strokeStyle="#ed6811";
   cobj2.font="bold 30px 华文彩云";
   cobj2.fillStyle="#fff";
   cobj2.textAlign="center";
   cobj2.textBaseline="middle";

   var angle2=0;
   var maxangle2=80*0.01*360; //90%*360
   var f2;
   function progress2() {
       angle2++;
       cobj2.clearRect(-60,-60,120,120)
       cobj2.beginPath();
       cobj2.arc(0,0,50,-atr2(90),atr2(angle2-90))
       cobj2.stroke();
       cobj2.fillText(Math.floor(angle2/360*100)+"%",0,0);
       if(angle2>maxangle2){
           cancelAnimationFrame(f2);//取消动画
       }else{
           f=requestAnimationFrame(progress2); //动画
       }
   }
   progress2()

   //3
   var canvas3=document.querySelector(".hua3");
    var cobj3=canvas3.getContext("2d");
    function atr3(deg) {
       return deg*Math.PI/180
   }          
   cobj3.translate(60,60);
   cobj3.lineWidth=10;
   cobj3.strokeStyle="#ed6811";
   cobj3.font="bold 30px 华文彩云";
   cobj3.fillStyle="#fff";
   cobj3.textAlign="center";
   cobj3.textBaseline="middle";

   var angle3=0;
   var maxangle3=90*0.01*360; //90%*360
   var f3;
   function progress3() {
       angle3++;
       cobj3.clearRect(-60,-60,120,120)
       cobj3.beginPath();
       cobj3.arc(0,0,50,-atr3(90),atr3(angle3-90))
       cobj3.stroke();
       cobj3.fillText(Math.floor(angle3/360*100)+"%",0,0);
       if(angle3>maxangle3){
           cancelAnimationFrame(f3);//取消动画
       }else{
           f=requestAnimationFrame(progress3); //动画
       }
   }
   progress3()

   //4
   var canvas4=document.querySelector(".hua4");
    var cobj4=canvas4.getContext("2d");
    function atr4(deg) {
       return deg*Math.PI/180
   }          
   cobj4.translate(60,60);
   cobj4.lineWidth=10;
   cobj4.strokeStyle="#ed6811";
   cobj4.font="bold 30px 华文彩云";
   cobj4.fillStyle="#fff";
   cobj4.textAlign="center";
   cobj4.textBaseline="middle";

   var angle4=0;
   var maxangle4=90*0.01*360; //90%*360
   var f4;
   function progress4() {
       angle4++;
       cobj4.clearRect(-60,-60,120,120)
       cobj4.beginPath();
       cobj4.arc(0,0,50,-atr4(90),atr4(angle4-90))
       cobj4.stroke();
       cobj4.fillText(Math.floor(angle4/360*100)+"%",0,0);
       if(angle4>maxangle4){
           cancelAnimationFrame(f4);//取消动画
       }else{
           f=requestAnimationFrame(progress4); //动画
       }
   }
   progress4()

   //5
   var canvas5=document.querySelector(".hua5");
    var cobj5=canvas5.getContext("2d");
    function atr5(deg) {
       return deg*Math.PI/180
   }          
   cobj5.translate(60,60);
   cobj5.lineWidth=10;
   cobj5.strokeStyle="#ed6811";
   cobj5.font="bold 30px 华文彩云";
   cobj5.fillStyle="#fff";
   cobj5.textAlign="center";
   cobj5.textBaseline="middle";

   var angle5=0;
   var maxangle5=70*0.01*360; //90%*360
   var f5;
   function progress5() {
       angle5++;
       cobj5.clearRect(-60,-60,120,120)
       cobj5.beginPath();
       cobj5.arc(0,0,50,-atr5(90),atr5(angle5-90))
       cobj5.stroke();
       cobj5.fillText(Math.floor(angle5/360*100)+"%",0,0);
       if(angle5>maxangle5){
           cancelAnimationFrame(f5);//取消动画
       }else{
           f=requestAnimationFrame(progress5); //动画
       }
   }
   progress5()

   //6
   var canvas6=document.querySelector(".hua6");
    var cobj6=canvas6.getContext("2d");
    function atr6(deg) {
       return deg*Math.PI/180
   }          
   cobj6.translate(60,60);
   cobj6.lineWidth=10;
   cobj6.strokeStyle="#ed6811";
   cobj6.font="bold 30px 华文彩云";
   cobj6.fillStyle="#fff";
   cobj6.textAlign="center";
   cobj6.textBaseline="middle";

   var angle6=0;
   var maxangle6=60*0.01*360; //90%*360
   var f6;
   function progress6() {
       angle6++;
       cobj6.clearRect(-60,-60,120,120)
       cobj6.beginPath();
       cobj6.arc(0,0,50,-atr6(90),atr6(angle6-90))
       cobj6.stroke();
       cobj6.fillText(Math.floor(angle6/360*100)+"%",0,0);
       if(angle6>maxangle6){
           cancelAnimationFrame(f6);//取消动画
       }else{
           f=requestAnimationFrame(progress6); //动画
       }
   }
   progress6()

   //作品链接
   $(".tu1").click(function(){
        $(".mask1").slideDown("slow");
   })
   $(".tu2").click(function(){
        $(".mask2").slideDown("slow");
   })
   $(".tu3").click(function(){
        $(".mask3").slideDown("slow");
   })
   $(".tu4").click(function(){
        $(".mask4").slideDown("slow");
   })
   $(".tu5").click(function(){
        $(".mask5").slideDown("slow");
   })
   $(".tu6").click(function(){
        $(".mask6").slideDown("slow");
   })

   //返回顶部
    $(".fanhui").click(function () {
        $("body,html").animate({scrollTop:0},200,"linear");
    })
})