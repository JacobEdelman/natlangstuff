var a='4 plus "3 plus 2" plus "hi " ';

var b=[];

while (a.indexOf('"')>-1){
    b.push(a.match(/\"(.*?)"/));
    a = a.replace(/\"(.*?)"/,"@");}
    
for(var i in b){
    console.log(a);
    a=a.replace("@",b[i][0]);
}

console.log(a)
