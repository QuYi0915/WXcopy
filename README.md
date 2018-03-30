# 安装 #

引入js即可

`
    <script src="$C.js"></script>
`

# 使用 #

**初始化配置**

1.el：{String} 为 document.querySelector 选择器参数；

2.hideEl：{Boolean} 为复制源元素是否显示在页面上，用于元素复制时使用；

3.调用init方法后返回当前el元素及选择器；当调用copy方法后将返回done属性，类型为Boolean，用于判断是否copy成功；


    var COPY =$C.init({
    	el:'#copyid',
    	hideEl:true
    });


**调用**

1.可直接调用，该方式复制内容为init方法中的元素子内容

2.也可直接填入内容,内容为string类型，若设置该参数时将替换init方法中的元素子内容

    COPY.copy([{string}]);
    
**注意：必须在交互事件中调用copy方法 如click、touchend**

# 示例 #

	var copybtn = document.querySelector('#copybtn');
	var COPY = $C.init({
		el: '#copyid',
		hideEl: true`
	});
	copybtn.addEventListener('touchend', function () {
		//COPY.copy();//复制元素子内容
		COPY.copy('自定义内容');
	});

