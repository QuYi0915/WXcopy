
//1页面元素复制、2指定文本内容复制；
(function(window){
	var _this = window||global;
	var $C=function(){};
	$C.prototype.init=function (option){
		if(option&&option.el){
			this.el=option.el||'div';
			this.elDOM=document.querySelector(this.el);
			if(!this.elDOM){
				throw '复制元素未找到，选择器为querySelector方法参数';
			}
		}
		if(option&&option.hideEl){
			this.hideEl(this.elDOM);
		}
		return this;
	};
	$C.prototype.hideEl=function(el){
		el.style.opacity='0';
		el.style.display='absolute';
		el.style.zIndex='-999';
	};
	$C.prototype.copy=function(text){
		if(text){
			var textEl=document.createElement('div');
			var textNode=document.createTextNode(text);
			textEl.appendChild(textNode);
			this.hideEl(textEl);
			document.documentElement.appendChild(textEl);
			this.elDOM=textEl;
		}
		if(typeof _this.getSelection === 'function'){
			_this.getSelection().selectAllChildren(this.elDOM);
			if(_this.getSelection().baseNode.data){
				this.done=document.execCommand('copy',true);
			}else{
				this.done=false;
			}
		}else{
			this.done=false;
		}
		return this;
	};
	_this.$C=new $C();
}(window));