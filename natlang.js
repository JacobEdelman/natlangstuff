function replacer(a){
	a = a.replace(/ plus /g," + ");
	a = a.replace(/ minus /g," - ");
	a = a.replace(/ times /g," * ");
	a = a.replace(/ divided by /g," / ");
	a = a.replace(/ as long as /g," while ");
	a = a.split("\n");
	//aloks stuff here(a is now a list)
	var tempa = "";
	for(var i in a){
		if(a[i].indexOf("loop")>-1){
			var stmt=a[i].match(/loop(.*)\S/);
			var args=stmt.replace("loop","");
			a[i]=a[i].replace(stmt,"for iiii in range("+args+"):");
		}
		tempa+=i+"\n";
		tempa+=a[i]+"\n";
	}
	
	a = tempa;
	return(a);
}
function change(a){
	var b = [];

	while (a.indexOf('"') > -1) {
	    b.push(a.match(/\"(.*?)"/));
	    a = a.replace(/\"(.*?)"/,"@");}
	a = replacer(a);
	for(var i in b){
	    a = a.replace("@",b[i][0]);
	}

	return(a);
}
	
