Template.postItem.helpers({
	domain:function(){
		var a = document.createElement('a');
		//当标签遍历的时候each这个Block Helper会将当前一条记录对象的this付给helper
		a.href = this.url;
		return a.hostname;
	}
})