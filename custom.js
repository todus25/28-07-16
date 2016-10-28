
document.getElementById("x").addEventListener('keyup',function (){
	var a = this.value;
	var g=document.getElementById('w').value;
    var s=parseInt(g)
	if(g=='')
		s=0;
	if(a>3 && a<=10)
		 z=.1;
		
	else if(a>10)
z=.3;
	else
		z=0;
	
	document.getElementById('w').value=650*a-650*z*a+s;
	var d=document.getElementById('w').value;
	});


	
	
document.getElementById("y").addEventListener('keyup',function (){
	var b = this.value;
	var g=document.getElementById('w').value;
    var s=parseInt(g)
	if(g=='')
		s=0;
	if(b>3 && b<=10)
		 x=.1;
		
	else if(b>10)
x=.3;
	else
		x=0;

		document.getElementById('w').value=750*b-750*x*b+s;
		
	
	});
	
	document.getElementById("z").addEventListener('keyup',function (){
	var a = this.value;
	var d=document.getElementById('w').value;
	var g=document.getElementById('w').value;
    var s=parseInt(g)
	if(g=='')
		s=0;
	if(a>3 && a<=10)
		 z=.1;
		
	else if(a>10)
z=.3;
	else
		z=0;
	
	
		document.getElementById('w').value=s+450*a-450*z*a;
	
	
	});
	
	
	
	