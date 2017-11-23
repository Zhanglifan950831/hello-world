$(function(){
    /***************************加载页面头部和尾部***************************************************************/
    $('#header').load('header.php');
    $('.switchBox a:nth-of-type(1)').addClass('active');
    $('.switchBox').on('click','a',function(){
        var distance=parseInt($('.logIn').css('width'));
        $(this).html()=='注册'? $('.logBox').animate({left:-distance},1500):$('.logBox').animate({left:0},1500);
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    $('.logIn input[type="button"]').click(function(){
        var data=$('.logIn form').serialize();
        /*$('#top a').removeClass('btnLogin').addClass('userInfo').html('test').after('<a class="exit" href="javascript:void(0)">退出</a>');
        sessionStorage.setItem('userInfo','test');*/
        $.ajax({
            type:"GET",
            url:"../php/login.php",
            data:data,
            success:function(obj){
                if(obj.msg=='succ')
                {
                    $('#top a').removeClass('btnLogin').addClass('userInfo').html(obj.userName).after('<a class="exit" href="javascript:void(0)">退出</a>');
                    sessionStorage.setItem('userInfo',obj.userName);
                    $('.logIn input:lt(2)').val('');
                }
                else
                {
                    alert('用户名或密码错误!');
                }
            },
            error:function(){
                alert(0);
            }
        })
    });
    $('.register input[name="userName"]').blur(function(){
        var reg=/^\s*$/;
        if(reg.test($(this).val()))
        {
            $(this).next().html('用户名不能为空!').css({color:"#e00"});
            this.focus();
        }
        else
        {
            $.ajax({
                type:"GET",
                url:'../php/checkUser.php',
                data:'userName='+$(this).val(),
                success:function(obj){
                    if(obj.msg=='succ')
                    {
                        $('.register input[name="userName"]').next().html('用户名可以注册').css({color:"#090"});
                    }
                    else
                    {
                        $('.register input[name="userName"]').next().html('用户名已占用!').css({color:"#e00"});
                    }
                }
            });
        }
    });
    $('.register input[name="pwd"]').blur(function(){
        var reg=/^\s*$/;
        if(reg.test($(this).val()))
        {
            $(this).next().html('密码不能为空!').css({color:"#e00"});
            this.focus();
        }
        else
        {
            $(this).next().html('');
        }
    });
    $('.register input[name="pwd1"]').blur(function(){
        if($(this).val()!=$('.register input[name="pwd"]').val())
        {
            $(this).next().html('两次密码不一致,请重输!').css({color:"#e00"});
            this.focus();
        }
        else
        {
            $(this).next().html('');
        }
    });
    $('.register input[name="emial"]').blur(function(){
        var reg=/^\w+@([a-zA-Z0-9]+\.)[a-zA-Z0-9]{2,3}$/;
        if(!reg.test($(this).val()))
        {
            $(this).next().html('请输入正确的邮箱格式!').css({color:"#e00"});
            this.focus();
        }
        else
        {
            $(this).next().html('');
        }
    });
    $('.register input[type="button"]').click(function(){
        var reg=/^\s*$/;
        var regEmail=/^\w+@([a-zA-Z0-9]+\.)[a-zA-Z0-9]{2,3}$/;
        if(reg.test($('.register input[name="userName"]').val()))
        {
            $('.register input[name="userName"]').next().html('用户名不能为空!').css({color:"#e00"});
            $('.register input[name="userName"]').get(0).focus();
            return;
        }
        if(reg.test($('.register input[name="pwd"]').val()))
        {
            $('.register input[name="pwd"]').next().html('密码不能为空!').css({color:"#e00"});
            $('.register input[name="pwd"]').get(0).focus();
            return;
        }
        if(reg.test($('.register input[name="pwd1"]').val()))
        {
            $('.register input[name="pwd1"]').next().html('确认密码不能为空!').css({color:"#e00"});
            $('.register input[name="pwd1"]').get(0).focus();
            return;
        }
        if(reg.test($('.register input[name="email"]').val()))
        {
            $('.register input[name="email"]').next().html('邮箱不能为空!').css({color:"#e00"});
            $('.register input[name="email"]').get(0).focus();
            return;
        }
        var data=$('.register form').serialize();
        $.ajax({
            type:"POST",
            url:"../php/register.php",
            data:data,
            success:function(obj){
                if(obj.msg=='succ')
                {
                    alert('恭喜您已成功注册!');
                    $('.register input:lt(4)').val('');
                }
                else
                {
                    alert('注册失败,请尝试重新注册');
                }
            }
        });
    });
})