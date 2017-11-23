$(function(){
    $('#header').load('header.php',function(){
        $('#nav li:last>a').addClass('active');
        if(sessionStorage.getItem('userInfo'))
        {
            $('#top a').removeClass('btnLogin').addClass('userInfo').html(sessionStorage.getItem('userInfo')).after('<a class="exit" href="javascript:void(0)">退出</a>');
        }
    });
    $.ajax({
        type:"GET",
        url:"../php/list.php",
        success:function(obj){
            var html="";
            $.each(obj,function(i,elem){
                html+=`<tr><td><a href="listComment.html?sID=${elem.sid}">${elem.sName}</a></td></tr>`
            });
            $('#bbs article tbody').html(html); 
        }
    })
    $('#submit').click(function(){
        var data=$('#bbs aside>form').serialize();
        if(sessionStorage.getItem('userInfo'))
        {
            data+="&uName="+sessionStorage.getItem('userInfo');
        }
        else
        {
            alert('您必须先登录!');
            return;
        }
        var reg=/^\s*$/;
        if(reg.test($('#bbs aside input').val()))
        {
            alert('请填写主题!不能为空!');
            $('#bbs aside input').get(0).focus();
            return;
        }
        if(reg.test($('#bbs aside textarea').val()))
        {
            alert('请填写内容!内容不能不空!');
            return;
        }
        console.log($('#bbs article tbody>tr:first').length);
        $.ajax({
            type:"POST",
            data:data,
            url:"../php/doInsert.php",
            success:function(obj){
                if(obj.msg=='succ')
                {
                    var html='';
                    html+=`<tr><td><a href="listComment.html?sID=${obj.sID}">${$("#bbs aside input").val()}</a></td></tr>`;
                    if(!$('#bbs article tbody>tr:first').length)
                    {
                        $('#bbs article tbody').html(html);
                    }
                    else
                    {
                        $('#bbs article tbody>tr:first').before(html); 
                    }
                    $('#bbs aside input').val('');
                    $('#bbs aside textarea').val('');
                    alert('发布成功!');
                }
                else
                {
                    alert('发布失败!');
                }              
            }
        })
    })
});
