
a='4 plus (3 plus 2) plus "hi " '
a=a.match(/\"(.*?)"/)
while (a.indexOf('"')>-1)
    a = a.replace(/\"(.*?)"/,"@");
for(i in a.match("@")
    
    


