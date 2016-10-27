
document.getElementById("x").addEventListener('keyup',function (){
	var a = this.value;
	if(a>3 && a<=10)
		 z=.1;
		
	else if(a>10)
z=.3;
	else
		z=0;
	
	document.getElementById('w').value=650*a-650*z*a;
	var d=document.getElementById('w').value;
	});


	
	
document.getElementById("y").addEventListener('keyup',function (){
	var b = this.value;
	var g=document.getElementById('w').value;
	
	if(b>3 && b<=10)
		 x=.1;
		
	else if(b>10)
x=.3;
	else
		x=0;

		document.getElementById('w').value=750*b-750*x*b+g;
		
	
	});
	
	document.getElementById("z").addEventListener('keyup',function (){
	var a = this.value;
	var d=document.getElementById('w').value;
	if(a>3 && a<=10)
		 z=.1;
		
	else if(a>10)
z=.3;
	else
		z=0;
	
	
		document.getElementById('w').value=d+450*a-450*z*a;
	
	
	});
	
	
	
	