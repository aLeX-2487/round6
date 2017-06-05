/**
 * Created by aLeX on 2017/5/27.
 */

$(document).ready(function() {
    $("button").click(function () {
        name = $("input[name='id']").val();   //不加var,全局变量
        password = $("input[name='password']").val();
        $.ajax({
            type: "post",  //默认是get，这里任务要求是post
            url: "http://119.10.57.69:880/carrots-admin-ajax/a/login",  //发送请求的地址
            data: {"name": name, "pwd": password},  //是一个对象，连同请求发送到服务器的数据
            dataType: "json",  //一般采用json
            success: function (data) {  //方法，请求成功后的回调函数
                $(".tip-2").html(data.message);   //data.messag为服务器接口返回信息
                $(".tip-2").css({"text-align":"center","font-size":"2rem"});
                if(data.message=="success"){location.href="./js-round6.html"};
            }
        })
    })
    //简单验证字符长度
    $("input[name='id']").change(function () {
        if($("input[name='id']").val().length<5||$("input[name='id']").val().length>11){
            $(".tip-1").html("请输入5-11位字母、数字用户名");
        }
        else {$(".tip-1").html("")}
    })
    $("input[name='password']").change(function () {
        if($("input[name='password']").val().length<6||$("input[name='password']").val().length>12){
            $(".tip-2").html("请输入6-12位密码");
            $(".tip-2").css({"text-align":"left","font-size":".6rem"});
        }
        else {$(".tip-2").html("")}
    })
})


