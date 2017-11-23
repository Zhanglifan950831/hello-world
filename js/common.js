$(function(){
    /***************************加载页面头部和尾部***************************************************************/
    $('#footer').load('../php/footer.php');
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
})
