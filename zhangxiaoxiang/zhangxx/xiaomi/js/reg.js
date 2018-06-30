$(document).ready(function(){
    $("#submit").click(function () {
        //验证昵称
        var u=document.getElementById("uName");
        //表单设置的required属性，为必填项，如果为空，则valueMissing返回true
        if (u.validity.valueMissing==true){
            //自定义提示信息
            u.setCustomValidity("昵称不能为空");
        }//输入值与pattern不匹配的时候，返回true
        else if(u.validity.patternMismatch==true){
            u.setCustomValidity("昵称必须是字母，数字，下划线2-16位")
        }
        else {
            //如果以上情况都符合，我们要把提示信息设置为空
            u.setCustomValidity("");
        }

        //验证密码
        var pwd=document.getElementById("pwd");
        //表单设置的required属性，为必填项，如果为空，则valueMissing返回true
        if (pwd.validity.valueMissing==true){
            //自定义提示信息
            pwd.setCustomValidity("密码不能为空");
        }//输入值与pattern不匹配的时候，返回true
        else if(pwd.validity.patternMismatch==true){
            pwd.setCustomValidity("密码必须是6-16位的英文或者数字")
        }
        else {
            //如果以上情况都符合，我们要把提示信息设置为空
            pwd.setCustomValidity("");
        }

        //验证邮箱
        var email=document.getElementById("email");
        //表单设置的required属性，为必填项，如果为空，则valueMissing返回true
        if (email.validity.valueMissing==true){
            //自定义提示信息
            email.setCustomValidity("邮箱不能为空");
        }//输入值与typeMismatch不匹配的时候，返回true
        else if(email.validity.typeMismatch==true){
            email.setCustomValidity("邮箱格式不正确")
        }
        else {
            //如果以上情况都符合，我们要把提示信息设置为空
            email.setCustomValidity("");
        }


    })
})

