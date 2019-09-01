(function(){
    var designwidth=720;
    var fontsize=100;
    function resize(){
        var width=document.documentElement.clientWidth;
        var size=width/designwidth*fontsize;
        var html=document.querySelector('html');
        html.style.fontSize=size+"px";
    }
    resize();
    window.onresize=resize;
})(window,document);