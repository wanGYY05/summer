/**
 * Created by wangyanyan on 2016/7/12.
 */
//定义一获取Id的函数
//定义一对象用于在localStorage中存储数据
var json_data={
    title:[],
    time:[],
    data:[]
};

var _$ = function (id) {
    if (id) {
        return document.getElementById(id);
    } else {
        throw new Error('arguments can not be null');
    }
};
//用于判断在页面刷新后localstorage中是否有数据，如果有，则将数据显示在左边的列表里
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
}
//实现按钮的清除功能^
//获取时间、标题、内容
var tim = _$('tim');
var til = _$('til');
var con = _$('con');
//获取按钮
var btn_clear = _$('btn_clear');
//清除函数
var clear = function () {
    tim.value = '';
    til.value = '';
    con.value = '';
};
btn_clear.onclick = clear;
//实现按钮的清除功能_$
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
        var p = document.createElement('p');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        p.innerHTML = tim.value;
        div1.appendChild(p);
        div1.className = 'list_time';
        div2.innerHTML = '&nbsp;' + til.value;
        div2.className = 'list_title';
        var li = document.createElement('li');
        li.data = con.value;
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
    //此save将数据存到了storage中
    var save = function () {
        if (save1()){//判断，否则save1返回false时，下面的代码仍执行，并将空的表格存到了LocalStorage中。（）中写save1（）而不是save1是因为前者会执行
            //if (JSON_DATA){json_data=JSON_DATA;}//如果LocalStorage中有数据，则用该数据，否则用自己定义的数据，此步骤是为了解决如果LocalStorage中JSON_DATA为空，json_data也会被初始化为空的情况
            json_data.time.push(tim.value);
            json_data.title.push(til.value);
            json_data.data.push(con.value);
            storage.setItem('json_data', JSON.stringify(json_data));
        }
    };
    var btn_save = _$('btn_save');
    btn_save.onclick = save;

//点击左侧第一条，显示内容

    var li = document.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            var p = this.children[0].firstElementChild;
            tim.value = p.innerHTML;
            var div2 = this.children[1];
            til.value = div2.innerHTML.slice(6, div2.innerHTML.length);
            con.value = this.getAttribute('data');
        };
    }




















