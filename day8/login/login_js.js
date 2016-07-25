/**
 * Created by wangyanyan on 2016/7/13.
 */
window.onload = function () {
    var _$ = function (id) {
        return document.getElementById(id);
    };

    var name = _$('username');
    var password = _$('password');
    var btn = _$('button');
    var storage=window.localStorage;

    //check weather localStorage has datas
    if (localStorage.getItem('NAME')){
        name.value=localStorage.getItem('NAME');
        password.value=localStorage.getItem('PASSWORD');
    }
    
    var exp = {
        name: /^[\u4e00-\u9fa5]{2,}$/,
        password: /^\w{6,20}$/
    };

    function check(exp,value) {

        return exp.test(value);
    }
    
    function isLeagl() {
        if (!check(exp.name,name.value)){
            alert('您输入的用户名不合法!');
            return false;
        }else if (!check(exp.password,password.value)){
            alert('您输入的密码不合法!')
        }else {
            return true;
        }
    }
    var remName=_$('rememberName');

    function login() {
        //将用户名密码放入localStorage中
        if (remName.checked){
            localStorage.setItem('NAME',name.value);
            localStorage.setItem('PASSWORD',password.value);
        }
        if (isLeagl()){
            fetch('http://api.neuqstlab.qoder.cn/users/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    password: password.value
                })
            }).then(function(res){
                return res.json();
            }).then(function(json){
                console.log(json);
                if(json.code === 10000){
                    localStorage.setItem('id',json.data.id);
                    location.href='../index.html';
                }else {
                    alert('用户名或密码错误！')
                }
            });
        }
    }
    btn.onclick=login;
    
};


