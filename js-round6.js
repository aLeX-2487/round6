/**
 * Created by aLeX on 2017/5/27.
 */

$(document).ready(function(){
    $("li").eq(1).click(function(){
        if($(".article").is(":hidden")) {$(".article").show() }
        else  $(".article").hide()
    })
    $("header span a").click(function(){
        var warning=confirm("你确定要退出登录，并返回登录页面吗？");
        if(warning){
            location.href ="./js-round6.0.html";
        }
    })
})



