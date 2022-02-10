"use strict";
//1、Typescript接口（interface）基本用法
const AProp = {
    style: {
        background: "#4f4d4e"
    },
    onClick: (e) => {
        console.log(e);
    },
    key: 1,
    id: 4202008820,
    name: "shawhung",
    hello: "world" //测试自定义属性
};
// AProp.id = 323232; 这样就会报错，因为只读属性不可修改
AProp.onClick("as");
//此时如果使用IPerson接口，若不存在已约定属性，编译器会报错
// let per1:IPerson = { name: "shaw", age: 23, gender: "male"}//添加gender属性报错，因为IPerson接口没有约定该参数。
// 使用类型断言跳过检测
let per2 = { name: "shaw", age: 23, gender: "male" };
// 类型断言另一种形式
let per3 = { name: "shaw", age: 23, gender: "male" };
console.log(per2);
console.log(per3);
//定义另外一个变量，然后赋值
let per4 = { name: "shaw", age: 23, gender: "male" };
let per5 = per4;
console.log(per5);
//# sourceMappingURL=02_interface.js.map