define(['jquery'],function($) {
	function ScrollTo(opts) {                               //构造函数实现功能
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);  //如果用户传递参数则覆盖默认参数
        this.$el = $('html body');                          //缓存多次执行的操作
	}
	
	ScrollTo.prototype.move = function() {                  //在原型上添加方法节省内存
		var opts = this.opts;
		    dest = opts.dest;                               //局部变量提高访问速度
        
		if ($(window).scrollTop() != dest) {                //如果已达到目的地或在运动则不调用animate
			if (!this.$el.is(':animated')) {
				this.$el.animate({
			        scrollTop: dest
		        }, opts.speed);
			}
		}
	};
	
	ScrollTo.prototype.go = function() {
		var dest = this.opts.dest;                          //局部变量提高访问速度
		if ($(window).scrollTop() != dest) {
			this.$el.scrollTop(dest);
		} 
	};	
	
	ScrollTo.DEFAULTS = {                                   //设置默认参数目标点与速度
		dest: 0,
		speed: 800
	};

	return {                                                //通过返回值实现模块与外部通信
		ScrollTo: ScrollTo
	};
});