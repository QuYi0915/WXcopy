//1页面元素复制、2指定文本内容复制；
(function(window){
	var _this = window||global;
	var $C=function(){};
	var eltext='';//复制内容
	var trim=true;//复制元素时是否去掉空格
	//插入iframe，操作iframe进行复制；
	var iframeElement = document.createElement('iframe');
	iframeElement.style.cssText = 'width:0;height:0;position:absolute;top:0;border:0;';
	iframeElement.src = 'about:blank';
	document.documentElement.appendChild(iframeElement);
	// var iframeElement = document.getElementsByTagName('iframe')[0];
	var iframeWindow = iframeElement.contentWindow;

	//文本插入到iframe中；
	function addcontent(text){
		iframeWindow.document.open();
		iframeWindow.document.write(text);
		iframeWindow.document.close();
		return iframeWindow.document.execCommand('selectAll', false, '');
	}
	//取出元素text节点内容；
	function getText(node){
		for(var i=0;i<node.childNodes.length;i++){
			if(node.childNodes[i].nodeType===1){
				getText(node.childNodes[i])
			}else if(node.childNodes[i].nodeType===3){
				eltext+=node.childNodes[i].nodeValue.replace(/\s/g,'');
			}
		}
	}

	$C.prototype.init=function (option){
		if(option&&option.el){
			this.el=option.el||'div';
			this.elDOM=document.querySelector(this.el);
			if(!this.elDOM){
				throw '复制元素未找到，选择器为querySelector方法参数';
			}
		}
		(option&&typeof option.trim==='boolean')&&(trim=false);
		return this;
	};

	$C.prototype.copy=function(text){
		if(!text){
			eltext='';
			if(trim){
				getText(this.elDOM);
				text=eltext;
			}else{
				text=this.elDOM.outerHTML;
			}
		}
		if(!addcontent(text)){
			this.done=false;
		}
		this.done = iframeWindow.document.execCommand('copy', false, '');
		return this;
	};

	// _this.document.designMode = 'On';
	_this.$C=new $C();
}(window));
