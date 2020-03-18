$(function() {
    var $name = $('#name'),
        $phone = $('#phone'),
        $psd = $('#psd'),
        $yzm = $('#yzm'),
        $button = $('#button'),
        $name1 = $('#name1'),
        $phone1 = $('#phone1'),
        $psd1 = $('#psd1'),
        $vrf = $('#vrf'),
        $vrf1 = $('#vrf1');

    var namecount = false,
        psdcount = false,
        phonecount = false,
        yzmcount = false;

    var num = 59;

    $name.focus(()=>{
        $name1.html('设置后不可更改，中英文皆可，最长14个英文或7个汉字')
    });
    $psd.focus(()=>{
        $psd1.html('长度为8~14个字符，字母/数字/标点符号至少两种，不能有中文和空格')
    });

    $name.blur(()=>{
        if(!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($name.val()) && !/^[0-9]*$/.test($name.val()))){
            $name1.html('用户名只支持中英文，数字，下划线且不能为纯数字');
        }else if($name.val().length > 14){
            $name1.html('用户名长度不能超过14个字符')
        }else{
            $name1.html('');
            namecount=true;
        }
    });

    $phone.blur(()=>{
        if(!(/^\d{11}$/.test($phone.val()))){
            $phone1.html('手机号格式不正确');
        }else{
            $phone1.html('');
            phonecount = true;
        }
    });

    $psd.blur(()=>{
        if($psd.val().length < 8 || $psd.val().length > 14){
            $psd1.html('密码格式不符合要求')
        }else if(!(/^([\u4e00-\u9fa5]|[\S])+$/.test($psd.val()))){
            $psd1.html('密码格式不符合要求')
        }else{
            $psd1.html('');
            psdcount = true;
        }
    })

    $yzm.blur(()=>{
        if(!$yzm.val()){
            $vrf1.html('请输入验证码')
            yzmcount = false;
        }else{
            $vrf1.html('');
            yzmcount = true;
        }
    })

    $vrf.click(()=>{
        $vrf.addClass('disable').attr({'disabled':'disabled'});
        var time = setInterval(()=>{
            $vrf.html(num--);
        },1000);
        setTimeout(()=>{
            $vrf.removeClass('disable').removeAttr('disabled');
            clearInterval(time);
            $vrf.html('获取验证码');
            count = 59;
        },60000);
    });

    $button.click(()=>{
        if(! (namecount && psdcount && phonecount && yzmcount)){
            alert('注册失败')
        }else{
            alert('注册成功')
        }
        
    });
    
});