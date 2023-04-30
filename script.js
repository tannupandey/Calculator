let string ="";
//classes array me se button find karke lana hai
let buttons=document.querySelectorAll('.button');
//we will make array out of this buttons variable just defined
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{  //arrow function to handle each click on corresponding button
    if(e.target.innerHTML=='C'){
      document.location.reload(true);
    }
    else if(e.target.innerHTML=='='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else{
      console.log(e.target);
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
    string=eval(string);
    }
  });
})