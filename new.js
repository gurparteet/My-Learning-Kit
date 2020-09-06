
function sum1() 
{
     var a= parseInt(document.getElementById("num1").value) ;
 var b= parseInt(document.getElementById("num2").value) ;
 var sum= a+b ;
 document.getElementById("output").innerHTML ="Sum of the number is : " + sum ;
 

}

function areat() 
{
    var a= parseInt(document.getElementById("a").value) ;
    var b= parseInt(document.getElementById("b").value) ;
    var c= parseInt(document.getElementById("c").value) ;

    var s = (a+b+c)/2 ;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c)) ;
    area=area.toFixed(2);
    document.getElementById("areatri").innerHTML= "Area of triangle is: " + area ;

}

function quadroot() 
{
    var a= parseInt(document.getElementById("d").value) ;
    var b= parseInt(document.getElementById("e").value) ;
    var c= parseInt(document.getElementById("f").value) ;

    var z= b*b - 4*a*c  ;

    if( Number(z) > 0 ) {
        var root1 =  (-1*b  +  Math.sqrt(b * b - (4 * a *c))) / ( 2 * a) ;
        root1=root1.toFixed(2) ;
        var root2 = (-1*b  -  Math.sqrt(b * b - (4 * a *c))) / ( 2 * a) ;
        root2=root2.toFixed(2);
        document.getElementById("rootquad").innerHTML= "Root 1 is : " + root1+ " <br> "+ "Root 2 is : " + root2 ;
    }
        else if(z < 0) {
            document.getElementById("rootquad").innerHTML = "No Real roots" ;
    }  
        else {
            var root3 = ((-1*b) / (2*a));
            root3=root3.toFixed(2) ; 
            document.getElementById("rootquad").innerHTML= "One root of the equation is: " + root3 ;
        }
    

}

function show() 
{
    var num= parseInt(document.getElementById("numm").value) ;
    var cntp = 0 ;
    var cntn = 0 ;
    if( num > 0) {
        document.getElementById("show").innerHTML="Positive No." ;
        cntp++ ;
    } else if (num < 0) {
        document.getElementById("show").innerHTML="Negative  No." ;
        cntn++ ;
    }
    else {
        document.getElementById("pro").disabled= true ; 
    }
    document.getElementById("show").innerHTML= "postive: " + cntp + " &" + "negative: " + cntn ;
    

}

function show2()
{
    var num=  parseInt(prompt("Input num here")) ;
    var cntp = 0 ;
    var cntn = 0 ;

    while( num != 0) 
    {
        if (num > 0 ) {
            alert("Positive") ;            
            cntp++ ;
            num= parseInt(prompt("Input num here")) ;
            
        }
        else {
            alert("Negative") ;
             cntn++;
            num= parseInt(prompt("Input num here")) ;
        }
    }
    
        alert("Negative no count: "+ cntn + "  and "+ "Positive no. count: "  + cntp) ;
        document.getElementById("pro2").disabled= true ; 
      


}


function show3()
{
    var nul= parseInt(prompt("Enter number here")) ;
    var count = 0 ;

    while( nul!=0)
    {
      if(nul%2==0 && nul%3==0) {
        alert("Yes divisible by 6") ;
        count++ ;        
      }
      else {
        alert("Not divisible by 6") ; 
        ;

      }
      nul = parseInt(prompt("Enter a new number")) ; 
    }

    alert("Program Ended" +" and " +  " \n Previous count of nos. divisible by 6 : " + count ) ;
    document.getElementById("pro3").disabled=true ;

      

    }

/*
    if( nul != 0) {

        while( (nul%2==0) && (nul%3==0)) {
            alert("Yes divisible by 6") ;
            count++ ;
            nul=parseInt(prompt("Enter new Number here")) ;            
        }
        
        alert("\Number is not divisible by 6. \nPrevious count : " + count) ;

        nul=parseInt(prompt("Enter new Number here")) ;
    

    }
    else {
         
        alert("Program Ended " + " and " + "Previous count of nos. divisible by 6 : " + count) ;
        document.getElementById("pro2").disabled= true ;
    }
}
*/
function reverse()
{
    var num= parseInt(document.getElementById("num4").value) ;
    while(num != 0) {
        var a = num%10 ;
        num= Math.floor(num/10) ;
        document.getElementById("showreverse").innerHTML= document.getElementById("showreverse").innerHTML + a + ", " ;
    }

    document.getElementById("reverse").disabled= true ;

}

function dig7()
{
var num= parseInt(document.getElementById("n7").value) ;
var count= 0 ;
while( num != 0) {
    var d = num%10 ;
    if(d==7) {
        count++ ;
        num= Math.floor(num/10) ;
    }
    else{
        num= Math.floor(num/10) ;
    }
}
document.getElementById("7dig").innerHTML= "No of 7 digits in the number is: " + count ;
alert("Progrm Ended\nCheck Results below ") ;


}

function sumdig()
{
    var input= parseInt(document.getElementById("newnum").value) ;
    var k = 0 ;
    var sum = 0 ;
    while(input != 0) 
    {
        k= input%10 ;
        sum = sum + k ; 
        input= Math.floor(input/10) ; 
        
    }
    document.getElementById("digsum").innerHTML = "Sum of the digits is: " + sum ;  
}

function palin()
{
    var input = parseInt(document.getElementById("numP").value) ;
    var reverse = 0 ;
    var output= document.getElementById("pal") ;
    var num = 0 ;
    var keep = input ; 
    while(input != 0 ) 
    {
        num= input%10 ;
        input= Math.floor(input/10) ;
        reverse=(reverse*10) + num ;
    }
    if (keep == reverse) 
    {
        output.innerHTML= "Yes" ;
    }
    else{
        output.innerHTML="No" ;
    }
}

function factorial() 
{
    var input= parseInt(document.getElementById("fac").value) ;
    var output= document.getElementById("outputfac");
    var k=1 ;

    for(i=1 ; i<= input ; i++) 
    {
        k*=i ;
        
    }
    output.innerHTML = input + "! is : " + k ;

}
function facwhile() 
{
    var num= parseInt(prompt("Input")) ;
    var tally= 1
    var k = 1 
while (tally <= num  ) {
    k*=tally ;
    tally++ ;
}
alert(num + "! is:  " + k ) ; 
} 


function fibonacci() 
{
    var input = parseInt(document.getElementById("fib").value) ;
    var output = document.getElementById("fibonac") ;
    output.innerHTML= "0,1," ;
    var n1= 0 ;
    var n2=1;
    var sum=0
    for(i=1 ; i < (input-2) ; i++)
    {
        sum= n1+n2 ;
        n1=n2 ;
        n2=sum ;
        output.innerHTML= output.innerHTML +   sum + ","   ;
    }
}
function chromosome()
{
    var input= parseInt(document.getElementById("chro").value) ;
    var output= document.getElementById("outputchr")
    output.innerHTML= input + ":  is the chromosome rows " + "<br><br>" ;

     for(i=1 ; i<=input ; i++) 
    {
        for ( j=1 ; j <=i ; j++)
        {
            output.innerHTML=output.innerHTML+  "XX" ; 
        }
        output.innerHTML= output.innerHTML + "<br>" ; 
    }


}
function btob() 
{
    var input = parseInt(document.getElementById("base10").value) ;
   
 document.getElementById("outbase8").innerHTML = input.toString(8) ; 
}


function btb()
{
    var input = parseInt(document.getElementById("bse10").value) ;
    var k = 0 ; 
   while(input !=0) 
 {
     k= input%8 ;
     input= Math.floor(input/8) ;
    document.getElementById("outb8").innerHTML= k + document.getElementById("outb8").innerHTML  ; 
 }
 document.getElementById("stp").disabled =true ;

}

function perfectnum()
{
    var num = parseInt(prompt("input num here")) ; 
    var sum = 0 ;
    var k = 0 ;
    var output= document.getElementById("outputperfect") ; 
    for(i=1 ; i < num ; i++) 
    {
        k=num%i ;
        if(k == 0){
            sum+=i ;

        }
    }
   if (num==sum) 
   {
        output.innerHTML= "PERFECT!" ; 

   } 
   else{
       output.innerHTML= "IMPERFECT! " ;
   }
}

function from40()
{   var input= 0;
    var cnt10n= 0 ;
    var cnt40p = 0 ;
    var output= document.getElementById("output40") ;

    for(i=1 ; i<= 10 ; i++) 
    {
        var input= parseInt(prompt("Input Here !")) ;
        if ( input < 0 ){
            cnt10n++ ;
        }
        
    }
    for(i=11 ; i<= 30 ; i++ ) 
    {
        var input= parseInt(prompt("Input Here another 20!")) ;
    }
    for ( i =31 ; i <=40 ; i++ )
    {
        var input= parseInt(prompt("Input Here last 10 !")) ;
        if ( input > 0 ){
            cnt40p++ ;
        }
    }

    if( cnt40p == cnt10n) 
    {
       output.innerHTML = "Yes" ; 

    }
    else
     {
        output.innerHTML= "No" ; 
     }

}
function counter1()
{
    var input = parseInt(prompt("enter a number ")) ;  
    var count= 0 ;
    var consecutive= 0 ; 

    while (input != 0 ) 
    {
        if(input == 1 ) {
            count++ ;
            consecutive = count;
            var input = parseInt(prompt("enter next number ")) ;    
        }
        else
        {
        count=0 ;
        var input = parseInt(prompt("enter next number ")) ;
        }   
    }
    document.getElementById("output1s").innerHTML= "The maximum no of consecutive 1s is : "  + consecutive ; 

}

function selfdivide() 
{
    var input = parseInt(prompt("input here")) ; 
     var d= 0 ;
    var flag = true ;
    var output = document.getElementById("outputself") ; 

    while(  flag == true && input !=0   )  
    {
            d= input%10 ;
        if( d == 0 ) 
        {
            flag= false ;
            
        }
        else if( input%d == 0) 
        {
            input= Math.floor(input/10) ;
    
        }
        else {
            flag=false ;
        }
        
        

    }   
    if ( flag == true) 
    {
         alert("Yes"); 
    } 
    else {
        alert("No") ;
    } 

}

function bintodec() 
{
    var num = parseInt(prompt("Input num here")) ;
    var dec= 0 ;
    var d=0 ; 
    for(i=1 ; i<=num ; i++)
    {
        var d = parseInt(prompt("Input Binary here")) ;
        dec=dec+ d*Math.pow(2, num-i) ;  

    } 
    alert("the decimal no is : " + dec) ;

}

function sqrt() 
{
    var num = parseInt(prompt("Inputnum here")) ; 
    var sprevious= 0 ;
    var snext = num/2 ;

    do 
    {
        sprevious=snext ;
        snext=0.5*(sprevious + num/sprevious) ;
         
    }

    while ((sprevious-snext) >= 0.000001); 
    alert("the sqrt. of "+ num + " is =" + snext  ) ;
}


function sqrtw()

{
    var num = parseInt(prompt("Input here")) ;
    var sprevious = 0 ;
    var snext = num/2 ;
    
    sprevious=snext ;
    snext= 0.5*( sprevious + (num / sprevious)) ; 
    while ( sprevious- snext > 0.000001) 
    { 
        sprevious=snext ; 
        snext=0.5*( sprevious + (num / sprevious)) ;
        
    }
    alert("The sqrt of the num "+ num+" is: "+ snext );
    document.getElementById("outsqt").innerHTML= "The sqrt of the num "+ num+" is: "+ snext ; 
}

function  balnced() 
{
    var num= parseInt(prompt("Input here")) ; 
    var d= num;
    var count=0; 
    var sum1=0;
    var sum2=0;

    while(d != 0 ) 
    {
        d= Math.floor(d/10) ; 
        count++ ;
    }

    for( i=1 ; i <= (count/2) ; i++ ) 
    {
        sum1+= num%10 ;
        num= Math.floor(num/10) ;
    }
    if(count%2 == 0) 
    {
        for( i=1 ; i <= (count/2) ; i++ ) 
        {
            sum2+= num%10 ;
            num= Math.floor(num/10) ;
            
        }
        if(sum2==sum1) 
        {
            alert("Balanced")
            document.getElementById("outbal").innerHTML= "Balanced" ; 
        }
        else 
        {
            alert("Not Balanced") ;
            document.getElementById("outbal").innerHTML= "Not Balanced" ; 
         }

    }
    else 
    {
        num = Math.floor(num/10) ; 

         for( i=1 ; i <= (count/2) ; i++ ) 
        {
            sum2+= num%10 ;
            num= Math.floor(num/10) ;
            
        }
        if(sum2==sum1) 
        {
            alert("Balanced") ;
            document.getElementById("outbal").innerHTML= "Balanced" ;
        }
        else 
        {
            alert("Not Balanced") ;
            document.getElementById("outbal").innerHTML= "Not Balanced" ;
         }

    }


}

function nonas()
{
    var a= parseInt(prompt("Input 1st num here")) ;
    var b= parseInt(prompt("Input 2nd num here")) ;
    var c= parseInt(prompt("Input 3rd num here")) ;

    if(a > b) 
    {
        if(b > c) 
        {
            alert("The non-ascending order of the numbers is : " + a + "," + b + "," + c  ) ;
        }
        else 
        {
            if( a > c) {
                alert("The non-ascending order of the numbers is : " + a + "," + c + "," + b) ;
            }
            else 
            {
                alert("The non-ascending order of the numbers is : " + c + "," + a + "," + b ) ;
            }
        }

    }
    else
    {
        if( a > c) 
        {
                alert("The non-ascending order of the numbers is : " + b + "," + a + "," + c) ;
            
        }
        else
        {
           if(b > c)
            {
                alert("The non-ascending order of the numbers is : " + b + "," + c + "," + a) ;                
           }
           else
           {
                alert("The non-ascending order of the numbers is : " + c + "," + b + "," + a) ;
           }
            
        }
    }
}

function power2() 
{
    var num=parseInt(prompt("Input num here")) ;

    if( num > 1) 
    {
        while((num) != 1) 
        {
            num=num/2 ; 
        }
        alert("Yes") ;


    }
    else if ( num < 1) {
        alert("No") ;
    } 
    else
    {
        alert("Yes")
    }


}


































 //for hover image
 $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  }); 