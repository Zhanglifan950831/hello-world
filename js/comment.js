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
        url:"../php/listComment.php",
        data:location.search.slice(1),
        success:function(obj){
            $('#comment thead th').html(obj[0].sName);
            var html='';
            $.each(obj,function(i,elem){
                var reg=/\s+/;
                var PInner=elem.content.split(reg).join('<br>');
                html+=`<tr><td>用户:${elem.uName}</td><td><p>${PInner}</p></td></tr>`;
            });
            $('#comment tbody').html(html);
        }
    })

    $('#post').click(function(){
        var data=$('#comment aside>form').serialize()+'&'+location.search.slice(1);
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
        if(reg.test($('#comment aside textarea').val()))
        {
            alert('请填写内容!内容不能不空!');
            return;
        }
        console.log(data);
        $.ajax({
            type:"POST",
            data:data,
            url:"../php/doInsertComment.php",
            success:function(obj){
                if(obj.msg=='succ')
                {
                    var html='';
                    var reg=/\s+/;
                    var PInner=$("#comment aside textarea").val().split(reg).join('<br>');
                    html+=`<tr><td>用户:${sessionStorage.getItem('userInfo')}</td><td><p>${PInner}</p></td></tr>`;

                    if(!$('#comment article tbody>tr:first').length)
                    {
                        $('#comment article tbody').html(html);
                    }
                    else
                    {
                        $('#comment article tbody>tr:last').after(html); 
                    }
                    $('#comment aside input').val('');
                    $('#comment aside textarea').val('');
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

