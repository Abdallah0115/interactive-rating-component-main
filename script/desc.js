let z=document.getElementsByName("r1");
let temp;
for(i=0;i<z.length;i++)
{
    z[i].onclick=function(){
        let y=document.getElementsByName("r1");
        for(j=0;j<y.length;j++)
        {
            y[j].style.cssText="background-color::hsla(217, 12%, 63%, 0.178) ;";;
        }
        this.style.cssText="background-color:hsl(217, 12%, 63%) ;";
        temp=this.value;
        document.getElementById('s2').removeAttribute("disabled") ;
        document.getElementById('s2').style.cssText="background-color:white; color:hsl(25, 97%, 53%)" ;
        document.getElementById('s2').onclick=function (){
            document.getElementsByClassName('mess')[0].innerHTML=`you  selected ${temp} out of 5`;    
            let g= document.getElementsByClassName("box");
            g[0].style.cssText="transform:  translateX(70px) rotatey(180deg);transition-duration: 4s; ";
            document.getElementsByClassName('card-1')[0].style.cssText='visibility: hidden;transition: 1s;; ' ;
            document.getElementsByTagName('footer')[0].style.cssText="transform:rotatey(180deg);transition-duration:5s;"
        }
    }    
}

