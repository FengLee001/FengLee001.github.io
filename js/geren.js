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