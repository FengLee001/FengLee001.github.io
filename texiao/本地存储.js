//设置cookie
function setCookie(key,value,time){
    if(time){
        var date=new Date()
        date .setTime(date.getTime()+time);
        document.cookie=key+"="+value+";expires="+date.toGMTString();
    }else{
        document.cookie=key+"="+value;
    }
}
//获取cookie  name
function getCookie(name) {
    var cookie=document.cookie;
    var arr=cookie.split("; ")
    arr.forEach(function (v) {
        var newarr=v.split("=");
        if(newarr[0]==name){
            val=newarr[1]
        }
    });
    return val;
}
//删除cookie
function delCookie(name) {
    var date=new Date();
    date.setTime(date.getTime()-1000);
    document.cookie=name+"="+";expires="+date.toGMTString();
}