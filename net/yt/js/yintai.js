$(function(){
	zjlunbo(".bannertu",".banner_bj",".lunbo li",".leftbtn",".rightbtn",[],2,"#e5004f",1500,1,"#211616")
	xuanxiangka1(".chaozhi_zs1",".chaozhi_zxBox",".chaozhi_dw");
	xuanxiangka1(".rmcp",".baihuo_ybox1",".tuijiantiao");
	jiedianlunbo(".shangshangA2_1big",".shangshangA2_10",1,500,".lbtn",".rbtn");
	jiedianlunbo(".shangshangA2_1big_1",".shangshangA2_10_1",1,500,".lbtn_1",".rbtn_1");
	jiedianlunbo(".shangshangA2_1big_2",".shangshangA2_10_2",1,500,".lbtn_2",".rbtn_2");
	jiedianlunbo(".shangshangA2_1big_3",".shangshangA2_10_3",1,500,".lbtn_3",".rbtn_3");
	jiedianlunbo(".shangshangA2_1big_4",".shangshangA2_10_4",1,500,".lbtn_4",".rbtn_4");
	jiedianlunbo(".shangshangA2_1big_5",".shangshangA2_10_5",1,500,".lbtn_5",".rbtn_5");
	jiedianlunbo(".shangshangA2_1big_6",".shangshangA2_10_6",1,500,".lbtn_6",".rbtn_6");
	jiedianlunbo(".shangshangA2_1big_7",".shangshangA2_10_7",1,500,".lbtn_7",".rbtn_7");
	jiedianlunbo(".shangshangA2_1big_8",".shangshangA2_10_8",1,500,".lbtn_8",".rbtn_8");
	jiedianlunbo2(".zhuang_gl",".gaolen",1,500,".zuo",".you",".xiaolunbo li","xiaolunboLi");
	jiedianlunbo2(".zhuang_glB",".gaolenB",1,500,".zuoB",".youB",".xiaolunboB li","xiaolunboLi2");
	louceng(".BtnBox li","section",".BtnBox",500,770)
	const FD=$(".FD")[0];
	let obj=scrollobj();
	FD.onclick=function(){
	animate(obj,{scrollTop:0},500);
	}
})	