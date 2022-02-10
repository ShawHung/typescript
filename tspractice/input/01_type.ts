let num:number = 1;
console.log(num);

interface Config{
    color: string;
    width: number;
}

function Se(la:Config):void{
    if(la.color){
        console.log(la.color)
    }
    if(la.width){
        console.log(la.width)
    }
}

let s = Se({color:"red",width:500})