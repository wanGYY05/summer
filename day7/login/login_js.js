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
    if (storage.key(0)){
        name.value=storage.key(0);
        password.value=localStorage.getItem(storage.key(0));
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
            localStorage.setItem(name.value,password.value);
        }
        if (isLeagl()){
            location.href='../index.html';
        }
    }
    btn.onclick=login;
    
};


