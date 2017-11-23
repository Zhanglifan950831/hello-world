$(function(){
	/******************************************************************************************/
	/***************************加载页面头部和尾部***************************************************************/
	$('#header').load('php/header.php',function(){
		$('#nav li:first-child>a').addClass('active').attr({href:'index.html'});
		$('#logo img').attr({src:'imgs/logo.png'});
		if(sessionStorage.getItem('userInfo'))
        {
            $('#top a').removeClass('btnLogin').addClass('userInfo').html(sessionStorage.getItem('userInfo')).after('<a class="exit" href="javascript:void(0)">退出</a>');
        }
	});
	$('#footer').load('php/footer.php');

	/****************************触发登陆模块**************************************************************/
    $('#header').on('click','#top a.btnLogin',function(){
        location.href="doLogin.html";
    });
    $('#header').on('click','#top a.exit',function(){
        if(confirm('确认退出?'))
        {
            sessionStorage.clear();
            $(this).remove();
            $('#top a.userInfo').removeClass('userInfo').addClass('btnLogin').html('登陆');
        }
    });
	/***************************banner轮播切换***************************************************************/
	$('.slider img').css({width:$(window).width()});

	$('#banner').css({height:$('.slider img:eq(0)').css('height')});
	/*幻灯片切换*/
	var slider={
		Width:1366,
		duration:2000,
		timer:null,
		now:0,
		interval:5000,

		init:function(){
			this.Width=$(window).width();
			this.createIconUl();
			$('.icon').on('click','li',function(ev){
				clearTimeout(this.timer);
				this.timer=null;
				var $target=$(ev.target);
				var idx=$target.index();
				this.now=idx;
				this.updateView(idx); 
				this.fade(idx);
			}.bind(this));
			this.autoFade();
		},
		updateView:function(idx){
			$('.icon>li:eq('+idx+')').addClass('selected').siblings('.selected').removeClass('selected');
		},
		//淡入淡出函数
		fade:function(idx){
			$('.slider>li:eq('+idx+')').show(this.duration,this.autoFade.bind(this)).siblings().hide(this.duration);
		},
		autoFade:function(){
			clearTimeout(this.timer);
			this.timer=null;
			this.timer=setTimeout(function(){
				if(++this.now==$('.slider>li').length)
				{
					this.now=0;
				}
				this.updateView(this.now);
				this.fade(this.now);
			}.bind(this),this.interval);
		},
		/*创建图标ul*/
		createIconUl:function(){
			$('.slider').css({width:2*this.Width});
			$icon=$('<ul class="icon"></ul>');
			$('.slider>li').each(function(i,elem){
				$li=$("<li></li>");
				i==0&&$li.addClass('selected');
				$icon.append($li);
			});
			$('#banner').append($icon);
		}
	};
	slider.init();

	/******************************************************************************************/	
})
