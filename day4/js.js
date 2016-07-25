/**
 * Created by wangyanyan on 2016/7/10.
 */
/****day4的实现********************************************************************************************************/
window.onload=function () {
    //实现按钮的清除功能
    var clear=document.getElementById('clear');
    var input=document.getElementsByClassName('input');
    clear.onclick=function () {
        clearTxt();
    };
    var clearTxt=function () {
        for(i=0;i<input.length;i++)
        {
            input[i].value=''
        }
   };
    //实现按钮的保存功能
    var save=document.getElementById('save');
    var list=document.getElementsByClassName('list')[0];
    var times=document.getElementById('times');
    var content_title2=document.getElementById('content_title2');
    save.onclick=function () {
        saveConten();
    };


    var saveConten=function () {
        var div=document.createElement("div");
        list.appendChild(div);
        var list_list=list.lastChild;
        console.log(list_list.value);
        var time=document.createElement("div");

        time.appendChild(times.value);
        time.className="p1";
        var con=document.createElement("div");

        con.appendChild(document.createTextNode(content_title2.value));
        con.className="p2";
        list_list.appendChild(con);
        list_list.appendChild(time);
    }

};