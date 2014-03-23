function replacer(a){
	a=a.replace(/ plus /g," + ");
	a=a.replace(/ plus /g," + ");
	a=a.replace(/ plus /g," + ");
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
