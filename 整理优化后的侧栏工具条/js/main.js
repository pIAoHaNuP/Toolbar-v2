requirejs.config({                                
	paths: {
		jquery: 'jquery-3.0.0.min'                                 //设置别名
	}
});

requirejs(['jquery', 'scrollto'], function($, scrollto) {          //引入scrollto模块
    var scroll = new scrollto.ScrollTo({                           //实例化 
        dest: 0,
        speed: 200
    });
	
	$('#backTop').on('click', $.proxy(scroll.move, scroll));       //为返回顶部按钮添加点击事件，使用proxy方法改变this指向
	$(window).on('scroll', function() {                            //监听window对象滚动事件
		checkPosition($(window).height());
	});
    checkPosition($(window).height());

    function move() {                                              //实现缓冲滚动功能
		$('html body').animate({
			scrollTop: 0
		}, 800);
	}

	function go() {
		$('html body').scrollTop(0);
	}

    function checkPosition(pos) {                                  //判断当前滚动条高度
		if ($(window).scrollTop() > pos) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}
});