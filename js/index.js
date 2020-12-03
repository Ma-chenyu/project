
//更换顶部导航栏样式
function scroll() {
    var display = $(window).scrollTop();
    var third = $(window).scrollTop();
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    if (scrollTop > 200) {
        $('.nav_ul').addClass('nav_down');
        $('.more').hover(function(){
            console.log("hover me");
            $(this).addClass('new_hover');
        },function(){
            $(this).removeClass('new_hover');
        });
        // $('#mine').attr('src','./images/icon/mine_black.png');
        $('#search').attr('src','./images/icon/search_black.png');  
    } else {
        $('.nav_ul').removeClass('nav_down');
        $('#search').attr('src','./images/icon/search_white.png');
        // $('#mine').attr('src','./images/icon/mine_white.png');
    }
    // 日程安排
    if(display > 500 && display<1400){
        ulDisplay();
        // radomBackground();
    }else{
        $('.second_li').removeClass('show down');
    }
    // 联系人
    if(third > 1150 && third < 2200){
        thirdLarge();
    }else{
        return false;
        // $('.third_li').removeClass('third_large');
    }
}
$(window).on('scroll', function() {
    scroll();
});

// 日历
const lang = navigator.language;
let date = new Date();
let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {
    weekday: 'long'
})
let monthName = date.toLocaleString(lang, {
     month: 'long'
})
let year = date.getFullYear()
document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;

// 侧边栏
$(function(){
    $('#mine').click(function(){
        toggleNavigation();
    })
});

function toggleNavigation(){
    if($('.left_nav').hasClass('display_nav')){
        // console.log("1");
        //移除
        $('.left_nav').removeClass('display_nav');
    }else{
        $('.left_nav').addClass('display_nav');
    }
}


// 无序列表顺序显示
function ulDisplay(){ 
    let second_ul = $('.second_li');
    $.each(second_ul,function(i){
        let that = $(this);
        
        setTimeout(function(){
            that.css('opacity','1');
        },100*i);
        setTimeout(function(){
            $.each(second_ul,function(i){
                let that = $(this);
                setTimeout(function(){
                    that.addClass('down');
                },150*i);
            })
        },100)
    })
}


// 随机背景色
function radomBackground(){
    var tags = $(".second_li");
    tags.each(function(){
        var r = Math.floor(Math.random()*200);
        var g = Math.floor(Math.random()*200);
        var b = Math.floor(Math.random()*200);
        $(this).css("background-color","rgb(" + r +"," + g +"," + 255 + ")");
        if(r+b > 255){
            $(this).css("color","#fff");
        }
    })
}

//third
//列表样式
function thirdLarge(){
    let third_li = $('.third_li');
    $.each(third_li,function(i){
        let that = $(this);
        setTimeout(function(){
            that.addClass('third_large');
        },250*i)
    },
    setInterval(() => {
            $('.third_li').removeClass('third_large')
    }, 1500));
    

}

// 联系人展示
function thirdMain(){
    $('.third_li').hover(function(){
        let tel_li = $('.tel_li');
        $('#third_main').addClass('show_tel_second');
        $.each(tel_li,function(i){
            let that = $(this);
            setTimeout(function(){
                that.addClass('show_tel')
            },200*i)
        });
        
    },function(){
        $('#third_main').removeClass('show_tel_second');
        $('.tel_li').removeClass('show_tel');
    })
        
}    
thirdMain();


//left_nav
// 获取经纬度
function getLocation(){
    if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("111");
}else{
  $('#demo_one').html("Geolocation is not supported by this browser.");
}
}
function showPosition(position){
console.log("22222");
$('#demo_one').html(position.coords.latitude + '°');  
$('#demo_two').html(position.coords.longitude + '°');  
}



// 切换页面背景色
function forthChangeBack(){
    $('#plus').click(function(){
        if($('#plus').hasClass('plus_click')
            &&$('.forth_display').hasClass('hidden')){

            $('#plus').removeClass('plus_click');

            $('#forth_main').removeClass('forth_second');
            $('#forth_main').addClass('forth_first');

            $('.forth_display').removeClass('hidden');
        }else{
            // $('#forth_main').addClass('forth_second');
            $('#forth_main').removeClass('forth_first');
            $('#forth_main').addClass('forth_second');

            $('#plus').addClass('plus_click');
            $('.forth_display').addClass('hidden');
        }
        if($('#forth_main').hasClass('forth_second')){
            $('#forth_main').removeClass('forth_second');
            $('#forth_main').addClass('forth_first')   

        }else{
            $('#forth_main').removeClass('forth_first')   

            $('#forth_main').addClass('forth_second')   

        }
    $('#forth_page').toggleClass('forth_page_first');
    
    })
}


forthChangeBack();
getLocation();
showPosition();