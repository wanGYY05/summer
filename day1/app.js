/**
 * Created by wangyanyan on 2016/7/8.
 */

/******************************************************************************************************************/
document.write("Today用得到的网址：" +
    "数组：" +
    "<br>" +
    "习题：http://www.imooc.com/wap/article?article_id=3021" +
    "<br>" +
    "答案：http://www.imooc.com/article/3084" +
    "<br>" +
    "知识点：http://www.imooc.com/wap/article?article_id=3609" +
    "字符串：" +
    "知识点：http://www.w3school.com.cn/jsref/jsref_obj_string.asp" +
    "<br>" +
    "习题：http://www.imooc.com/wap/article?article_id=2910" +
    "<br>");
/******************************************************************************************************************/
document.write('定义对象、输出对象属性：'+'<br>');
var $=function (str) {
    document.write(str);
    document.write("<br />")
};
var per=new Object();
per.name="wangyy";
per.age='21';
per.hobby='ball';

$(per.name);
$(per.age);
$(per.hobby);

/**********************************************************************************************************************/

document.write('数组排序：'+'<br>');
var arr1=[1,-1,2,10,20,4,14];
document.write(arr1+"<br>");
arr1.sort(function (a,b) {
    return a-b;
    }
);
document.write(arr1 + '<br>');

/**********************************************************************************************************************/

document.write('forEach遍历数组：'+'<br>');
var arr2=['a','b','c'];
arr2.forEach(function (each,index) {
    document.write(each + index + "&nbsp");
});
document.write('<br>');

/**********************************************************************************************************************/

document.write('filter筛选：'+'<br>');
var arr3=[-1,-2,3,4,5,2,9,-8].filter(function (each) {
    return each > 0;
});
document.write(arr3 + '<br>');

/**********************************************************************************************************************/

document.write('every判断：'+'<br>');

/**********************************************************************************************************************/

document.write('some判断：'+'<br>');

/**********************************************************************************************************************/

document.write('map改值：'+'<br>');

/**********************************************************************************************************************/

document.write('reduce求和：'+'<br>');

/**********************************************************************************************************************/

document.write('其他方法'+'<br>');
document.write(
    'isArray是否是数组 '
    +'concat合并数组 '
    +'join将数组元素改为字符串 '
    +'slice选取部分数组 '
    +'indexOf查找指定元素的下标 '
    +'<br>');

/******************************************************************************************************************/
/*第一题的筛选对象数组age大于18的元素*/

A1=[{age:19,name:'jack'},{age:5,name:'Apple'},{age:12,name:'Lynn'},{age:25,name:'David'}];
var filterAdult=function (arr) {
    var res=[];
    if(Array.isArray(arr)){
        arr.forEach(function (each) {
            if (each.age > 18){
                res.push(each);
            }
        })
    }else {
        alert('参数不是数组类型！');
    }
    for (var i=0;i < res.length;i++){
        document.write('{age:'+res[i].age+',name:'+res[i].name+']');
        }
};
filterAdult(A1);
document.write('<br>');
/******************************************************************************************************************/
/*第二题数组中是否所有元素都大于零*/

var isAllNumPosive=function (arr) {
    var i=0;
    if (Array.isArray(arr)){
        i=arr.every(function (each) {
            return each > 0;
        })
    }else {
        alert('参数不是数组类型！');
    }
    return i;
};
var isZero=[12,5,3,5,6,6,7,8,9,9,9,7,6,2,0];
var noZero=[12,5,3,5,6,6,7,8,9,9,9,7,6,2];
var other=[12,5,3,5,6,6,7,8,9,9,9,7,6,2,'a',{b:4}];
document.write(isAllNumPosive(isZero));
document.write(isAllNumPosive(noZero));
document.write(isAllNumPosive(other));
document.write('<br>');
/******************************************************************************************************************/
/*第三题将第N（从0开始）个元素放到开头。*/
var putFirst=function (arr,n) {
    if (Array.isArray(arr)){
        var temp=arr[n];
        arr.slice(n,1);
        arr.unshift(temp);
    }else {
        alert('参数不是数组类型！');
    }
};
var A4=[0,1,2,3,4,5,6,7,8,9];
putFirst(A4,5);
document.write(A4);
document.write('<br>');
/******************************************************************************************************************/
/*第五题对数组中的数字进行求和*/
var sum=function (arr) {
    var res=0;
    if (Array.isArray(arr)){
            arr.forEach(function (each) {
                if (typeof each === 'number'){
                    res += each;
                }
            })
    }else {
        alert('参数不是数组类型！');
    }
    return res;
};
var A5_1=[1,2,3,4];
var A5_2=[1,2,3,4,1.2,'a',{a:3}];
document.write(sum(A5_1)+'<br>');
document.write(sum(A5_2)+'<br>');
/******************************************************************************************************************/
/*第六题根据age排序*/
var sortAge=function (arr) {
    if (Array.isArray(arr)){
        arr.sort(function (a,b) {
            return a.age - b.age;
        })
    }else {
        alert('参数不是数组类型！');
    }
};
sortAge(A1);
for (var i=0;i < A1.length;i++){
    document.write('{age:'+A1[i].age+',name:'+A1[i].name+']');
}
document.write('<br>');
/******************************************************************************************************************/
/*第七题将数组元素去重*/
var quChong=function (arr) {
    var con=[];
    if (Array.isArray(arr)){
        arr.forEach(function (each) {
            if (con.indexOf(each) === -1){
                con.push(each);
            }
        })
    }else{
        throw new TypeError('param is not array');
    }
    return con;
}
var A7=[1,2,3,3,4,4,5,6,7,8,9,0,0,'a','a','ds','f','f'];
document.write(quChong(A7)+'<br>');
/******************************************************************************************************************/
/*第八题数组内容乱序*/
var random=function (arr) {
    if (Array.isArray(arr)){
        arr.sort(function () {
            return Math.random() > 0.5 ? 0 : 1;
        })
    }else{
        throw new TypeError('param is not array');
    }
    return arr;
};
var A8=[1,2,3,4];
document.write(random(A8)+'<br>');

/******************************************************************************************************************/
document.write('****************************************************************************************');
document.write('<br>');
document.write('字符串练习题:');

/*第一题首字母改大写*/
var B1='abc';
var firstLetterToUpperCase=function (str){
    var res;
    if (typeof str === 'string'){
        res=str.charAt(0).toUpperCase() + str.substr(1);
    }else{
        res=str;
    }
    return res;
};
document.write(firstLetterToUpperCase(B1));

