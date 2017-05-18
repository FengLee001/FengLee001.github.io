// window.onload=function(){
//   const dianji=document.querySelector(".box");
//   function fangsuo(btn){

// 	btn.onclick=function(){

// 	  var num=200;
// 	  var a=setInterval(function(){
// 	  	   num+=50;
// 	  	   btn.style.width=num+"px";
// 	       btn.style.height=num+"px";

//               if(num==500){
//        	       clearInterval(a); 
// 	   var b=setInterval(function(){
// 		       num-=50;
// 		       btn.style.width=num+"px";
// 		       btn.style.height=num+"px";
		       
// 		          if(num==200){
// 		          clearInterval(b);
// 		           }
// 		    },100);
// 	     }
// 	    },100); 
// 	  }
//    }
//   fangsuo(dianji);
// }




// window.onload=function(){
//   var box=document.querySelector(".box");
//   box.onclik=function(){
//    animate(box,{width:500,height:500},2000,

//    	   function(){
   	      
//       // animate(box,{width:200,height:200},2000);
//      })
//   }
// }
function  $(select,obj=document){
    if( typeof select=='function'){
      window.onload=function(){
        select();
         }

      }else if(typeof select=="string"){
      	return obj.querySelectorAll(select);
      }

   }


// $(
// 	function(){
// 		const box=$('.box');
// 		const ins=$('.in',box[1]);
// // 		// console.log(box[1]);
// // 		// const box=document.querySelector('.box');
// // 		// const ins=box.querySelector(".in");
// 		console.log(ins);
// // 		// $(".box")

// 	}
// )


// window.onload=function(){
// 	const box=$('.box');
// 		const ins=$('.in',box[0]);
// 		// console.log(box[1]);
// 		// const box=document.querySelector('.box');
// 		// const ins=box.querySelector(".in");
// 		console.log(ins);
// 		// $(".box")
// }