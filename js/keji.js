var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=590;
for (var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function () {
		for(var i=0;i<ctbox.length;i++){
			if(i<=this.index){
				ctbox[i].style.left=i*titleWidth+'px';
			}else{
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}
/*点击的序号记为n
则ctbox序号小于等于n的时候，ctbox的left值计算公式为序号*titleWidth 
ctbox序号大于n的时候
ctbox的left值计算公式为序号*titleWidth+contentWidth
 点击第0个标题 
0 650px 710px 770px
点击第一个标题
0 60px  710px 770px
点击第二个标题
0 60px  120px 770px
点击第三个标题
0 60px 120px  180px
*/