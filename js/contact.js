$(function(){
    var sCode='';
    /***************************加载页面头部和尾部***************************************************************/
    $('#header').load('header.php',function(){
        $('#nav li:eq(4)>a').addClass('active');
        if(sessionStorage.getItem('userInfo'))
        {
            $('#top a').removeClass('btnLogin').addClass('userInfo').html(sessionStorage.getItem('userInfo')).after('<a class="exit" href="javascript:void(0)">退出</a>');
        }
    });

    /****************************AJAX获取验证码****************************************************************/
    $.ajax({
        type:"GET",
        url:"../php/vCodeStr.php",
        success:function(txt){
            $('#btnChange').siblings('label').attr({"data-code":txt});
        }
    });
    /*****************************切换验证码图片*****************************************************************/

    function changeImgCode(){
        $('#btnChange').prev().attr({src:"../php/vCode.php"});
        $.ajax({
            type:"GET",
            url:"../php/vCodeStr.php",
            success:function(txt){
                $('#btnChange').siblings('label').attr({"data-code":txt});
            }
        });
    }
    $('#btnChange').click(function(){
        changeImgCode();
    });
    /********************************表单验证*******************************************************/
    $('#note input[name="subject"]').blur(function(){
        if($(this).val()=="")
        {
            this.focus();
            $(this).next().css({color:"#f00"}).html('主题不能为空!');
        }
        else
        {
            $(this).next().css({color:"#090"}).html('验证成功!');
        }   
    });
    $('#note input[name="email"]').blur(function(){
        var reg=/^\w+@([a-zA-Z0-9]+\.)[a-zA-Z0-9]{2,3}$/;
        if(!reg.test($(this).val()))
        {
            this.focus();
            $(this).next().css({color:"#f00"}).html('邮箱格式不正确!');
        }
        else
        {
            $(this).next().css({color:"#090"}).html('验证成功!');
        }
    });
    $('#note textarea').blur(function(){
        if($(this).val()=="")
        {
            this.focus();
            $(this).next().css({color:"#f00"}).html('留言内容不能为空!');
        }
        else
        {
            $(this).next().css({color:"#090"}).html('验证成功!');
        }   
    });
    /********************提交验证是否发起异步请求************************************************************/
    $('#note input[type="submit"]').click(function(){
        sCode=$("#btnChange").siblings('label').attr("data-code");
        if($('#note input[name="subject"]').val()==""){
            $('#note input[name="subject"]').get(0).focus();
            $('#note input[name="subject"]').next().css({color:"#f00"}).html('主题不能为空!');
            return;
        }
        if($('#note input[name="email"]').val()==""){
            $('#note input[name="email"]').get(0).focus();
            $('#note input[name="email"]').next().css({color:"#f00"}).html('邮箱地址不能为空!');
            return;
        }
        if($('#note textarea').val()==""){
            $('#note textarea').get(0).focus();
            $('#note textarea').next().css({color:"#f00"}).html('留言内容不能为空!');
            return;
        }
        if($('#note input[name="vCode"]').val()!=sCode)
        {
            changeImgCode();
        }
        else
        {
            $.ajax({
                type:"POST",
                url:"../php/email.php",
                data:'subject='+$('#note input[name="subject"]').val()+'&message='+$('#note textarea').val()+'&email='+$('#note input[name="email"]').val(),
                success:function(txt){
                    if(txt==1){
                        $('#note input').val('');
                        $('#note textarea').val('');
                        alert('留言成功!');
                    }
                    else
                    {
                        if(txt==0)
                        {
                            alert('留言失败,可能邮件地址错误,请重新输入邮件地址!')
                        }
                    }
                }
            })
        }
    });
});