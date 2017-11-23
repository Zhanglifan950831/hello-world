$(function(){
    /***************************加载页面头部和尾部***************************************************************/
    $('#header').load('header.php',function(){
        $('#nav li:eq(3)>a').addClass('active');
        if(sessionStorage.getItem('userInfo'))
        {
            $('#top a').removeClass('btnLogin').addClass('userInfo').html(sessionStorage.getItem('userInfo')).after('<a class="exit" href="javascript:void(0)">退出</a>');
        }
    });

    /*****************************点击精品图旋转切换背面*****************************************************************/
    var bRotate=false;
    $('#works ul').on('click','li',function(){
        if(!bRotate)
        {
            $(this).addClass('selectedRotate');
            bRotate=true;
        }
        else
        {
            $(this).removeClass('selectedRotate');
            bRotate=false;
        }
    });
    $('#works ul').on('click','li:not(.selectedRotate)',function(){
        $(this).addClass('selectedRotate').siblings('.selectedRotate').removeClass('selectedRotate');
        bRotate=true;
    })
})