//1、Typescript接口（interface）基本用法

interface IProp {
    style: {};
    onClick: (e:string) => void;
    key: number;
    name?: any; /*可选属性*/
    [attr: string] : any;  /*自定义属性*/
    readonly id : number; /*只读属性，不可修改。和const怎么区分使用，readonly可以常用于描述属性，const常用于定义不可变常量*/
}

const AProp:IProp = {
    style: {
        background: "#4f4d4e"
    },
    onClick: (e:string) => {
        console.log(e)
    },
    key: 1,
    id: 4202008820,//测试自定义属性
    name : "shawhung",//测试可选属性
    hello : "world"//测试自定义属性
}

// AProp.id = 323232; 这样就会报错，因为只读属性不可修改
AProp.onClick("as");

//2、类型断言
interface IPerson  {
    name: string;
    age: number;
}

//此时如果使用IPerson接口，若不存在已约定属性，编译器会报错

// let per1:IPerson = { name: "shaw", age: 23, gender: "male"}//添加gender属性报错，因为IPerson接口没有约定该参数。

// 使用类型断言跳过检测
let per2:IPerson = {name:"shaw", age: 23, gender: "male"} as IPerson;

// 类型断言另一种形式
let per3:IPerson = <IPerson>{name:"shaw", age: 23, gender: "male"};

console.log(per2);
console.log(per3);

//定义另外一个变量，然后赋值
let per4 = {name:"shaw", age: 23, gender: "male"};

let per5:IPerson = per4;

console.log(per5);




