/**
 * Created by wangyanyan on 2016/7/12.
 */


var _$ = function (id) {
    if (id) {
        return document.getElementById(id);
    } else {
        throw new Error('arguments can not be null');
    }
};

//获取时间、标题、内容
var tim = _$('tim');
var til = _$('til');
var con = _$('con');
//获取按钮
var btn_clear = _$('btn_clear');

//从服务器拉取todos列表
window.onload=function () {
    fetch('http://api.neuqstlab.qoder.cn/users/todos/' + localStorage.getItem('id'),{
        method: 'GET'
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
        for (var i=0;i<json.data.todos.length;i++){
            var p = document.createElement('p');
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            p.innerHTML = json.data.todos[i].time;
            div1.appendChild(p);
            div1.className = 'list_time';
            div2.innerHTML = '&nbsp;' + json.data.todos[i].title;
            div2.className = 'list_title';
            var li = document.createElement('li');
            li.setAttribute('data', json.data.todos[i].content);
            li.appendChild(div1);
            li.appendChild(div2);
            var ul = _$('ul');
            ul.appendChild(li);
            li.onclick = function () {
                var p = this.children[0].firstElementChild;
                tim.value = p.innerHTML;
                var div2 = this.children[1];
                til.value = div2.innerHTML.slice(6, div2.innerHTML.length);
                con.value = this.getAttribute('data');
            };
        }
    });

};




/*//用于判断在页面刷新后localstorage中是否有数据，如果有，则将数据显示在左边的列表里
 var storage=window.localStorage;
 var JSON_DATA=JSON.parse(storage.getItem("json_data"));
 if (JSON_DATA){
 for (var i=0;i<JSON_DATA.title.length;i++){
 var p = document.createElement('p');
 var div1 = document.createElement('div');
 var div2 = document.createElement('div');
 p.innerHTML =JSON_DATA.time[i];
 div1.appendChild(p);
 div1.className = 'list_time';
 div2.innerHTML = '&nbsp;' + JSON_DATA.title[i];
 div2.className = 'list_title';
 var li = document.createElement('li');
 li.setAttribute('data',JSON_DATA.data[i]);
 li.appendChild(div1);
 li.appendChild(div2);
 var ul = _$('ul');
 ul.appendChild(li);
 li.onclick=function () {
 var p = this.children[0].firstElementChild;
 tim.value = p.innerHTML;
 var div2 = this.children[1];
 til.value = div2.innerHTML.slice(6, div2.innerHTML.length);
 con.value = this.getAttribute('data');
 };
 }
 }*/
//实现按钮的清除功能^
var clear = function () {
    fetch('http://api.neuqstlab.qoder.cn/users/todos/' + localStorage.getItem('id'),{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
    });
    //清除左边的内容
    for (var j=0;j<document.getElementsByTagName('li').length;i++){
        document.getElementsByTagName('li')[0].parentNode.removeChild(document.getElementsByTagName('li')[0]);
    }
    //清除右边详细内容
    tim.value='';
    til.value='';
    con.value='';
};
btn_clear.onclick = clear;
//实现按钮的保存功能
var save1 = function () {
    if (til.value === '') {
        alert('输入的标题不能为空');
        til.style.borderColor = 'red';
        return false;
    } else if (tim.value === '') {
        alert('输入的时间不能为空');
        tim.style.borderColor = 'red';
        return false;
    } else if (con.value === '') {
        alert('输入的内容不能为空');
        con.style.borderColor = 'red';
        return false;
    } else {
        con.style.borderColor = '#c0c0c0';
        tim.style.borderColor = '#c0c0c0';
        til.style.borderColor = '#c0c0c0';
        var p = document.createElement('p');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        p.innerHTML = tim.value;
        div1.appendChild(p);
        div1.className = 'list_time';
        div2.innerHTML = '&nbsp;' + til.value;
        div2.className = 'list_title';
        var li = document.createElement('li');
        li.setAttribute('data', con.value);
        li.appendChild(div1);
        li.appendChild(div2);
        var ul = _$('ul');
        ul.appendChild(li);
        li.onclick = function () {
            var p = this.children[0].firstElementChild;
            tim.value = p.innerHTML;
            var div2 = this.children[1];
            til.value = div2.innerHTML.slice(6, div2.innerHTML.length);
            con.value = this.getAttribute('data');
        };
    }
    return true;
};

var save = function () {
    save1();
    fetch('http://api.neuqstlab.qoder.cn/users/todos/' + localStorage.getItem('id'),{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title:til.value,
            time:tim.value,
            content:con.value
        })
    }).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
    })
};
var btn_save = _$('btn_save');
btn_save.onclick = save;

//点击左侧第一条，显示内容
for (i = 0; i < document.getElementsByTagName('li').length; i++) {
    li[i].onclick = function () {
        var p = this.children[0].firstElementChild;
        tim.value = p.innerHTML;
        var div2 = this.children[1];
        til.value = div2.innerHTML.slice(6, div2.innerHTML.length);
        con.value = this.getAttribute('data');
    };
}