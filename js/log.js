function changeBtnStyle(){
    // 点击登录
    $('#btn_log').click(function(){
        $('#btn_log').addClass('btn_left');
        $('#btn_reg').removeClass('btn_right');
        $('#log_form').load('../pages/log.html');
    })
    // 点击注册
    $('#btn_reg').click(function(){
        $('#btn_reg').addClass('btn_right');
        $('#btn_log').removeClass('btn_left');
        $('#log_form').load('../pages/register.html');
    })
  $('#btn_log').click();

}


changeBtnStyle();
  $('.container-left li:first').click();
