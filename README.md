
# 安装 #

引入js即可

`
    <script src="$C.js"></script>
`

# 使用 #

**初始化配置**

1.el：{String} 为 document.querySelector 选择器参数；

2.trim：{Boolean} 为复制源元素是否删除空格回车等空白，默认删除；

3.调用init方法后返回当前el元素及选择器；当调用copy方法后将返回done属性，类型为Boolean，用于判断是否copy成功；


    var COPY =$C.init({
    	el:'#copyid',
    	trim:false
    });


**调用**

1.可直接调用，该方式复制内容为init方法中的元素子文本内容

2.也可直接填入内容,内容为string类型，使用此方法并不会对init方法中传入元素内容复制进行覆盖，依旧可以调用COPY.copy()复制原本定义元素的内容

    COPY.copy([{string}]);
    
**注意：必须在交互事件中调用copy方法 如click、touchend**

# 示例 #

	var copybtn = document.querySelector('#copybtn');
	var COPY = $C.init({
		el: '#copyid'
	});
	copybtn.addEventListener('touchend', function () {
		//COPY.copy();//复制元素子内容
		COPY.copy('自定义内容');
	});

# 说明 #

**兼容性**
方法使用了document.execCommand方法进行复制，默认兼容该方法兼容浏览器，已测试移动端包括：safari、UC、微信（ios），PC端包括：chrome、firefox、UC浏览器
