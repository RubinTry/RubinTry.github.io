var oLeftBox=document.querySelector(".leftBox");
var oMenu=document.querySelector("#homeTitleLeft");
var oClose=document.querySelector("#close");
var oWrapper=document.querySelector(".wrapper");
var k=0,p;

oMenu.addEventListener("click",function(){
	
	//k用于判定侧滑菜单是否已滑出
	setTimeout(function(){
		if(k==1){
			p=-320;
			oLeftBox.style.transform="translate(-320px,0)";
			oWrapper.style.transform="translate(0px,0)";
			oWrapper.style.background="transparent"
			k=0;
		}
		else{
			p=0;
			oLeftBox.style.transform="translate(0px,0)";
			oWrapper.style.transform="translate(320px,0)";
			oWrapper.style.background="rgba(0,0,0,.7)"
			k=1;
	}
	},100)
	
});
oClose.addEventListener("click",function(){
	oWrapper.style.background="transparent"
	oLeftBox.style.transform="translate(-320px,0)"
	oWrapper.style.transform="translate(0px,0)"
})
oWrapper.addEventListener("click",function(){
	
	//如果已经侧滑，则执行以下代码进行向回滑操作
	if(k==1){
		oLeftBox.style.transform="translate(-320px,0)";
		oWrapper.style.transform="translate(0px,0)";
		oWrapper.style.background="transparent"
	}
});
