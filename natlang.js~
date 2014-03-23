function replacer(a){
	a=a.replace(/ plus /g," + ");
	a=a.replace(/ minus /g," - ");
	a=a.replace(/ times /g," * ");
	a=a.replace(/ divided by /g," / ");
	a=a.replace(/ as long as /g," while ");
	
	return(a);
}
function change(a){
	var b=[];

	while (a.indexOf('"')>-1){
	    b.push(a.match(/\"(.*?)"/));
	    a = a.replace(/\"(.*?)"/,"@");}
	a=replacer(a);
	for(var i in b){
	    a=a.replace("@",b[i][0]);
	}

	return(a);
}
