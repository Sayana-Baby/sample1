if(document.regform.j1.value==""){
    document.getElementById('scrn').innerHTML='please enter a name';
    return false
}
else{
   inp=document.regform.j1.value; 
  pttern=/^[A-z \.]+$/  
  reslt=pttern.test(inp);
  if(reslt==false)
  {
    document.getElementById('scrn').innerHTML='name contain only alphabets,space and dots'
    return false;
  }
}
if(document.regform.e1.value==""){
    document.getElementById('scren').innerHTML='please enter a name';
    return false
}
else{
   inp=document.regform.e1.value; 
  pttern=/^[0-9 ]+$/  
  reslt=pttern.test(inp);
  if(reslt==false)
  {
    document.getElementById('scren').innerHTML='email contain only @ alphabets,space and dots'
    return false;
  }
}
if(document.regform.c1.value==""){
    document.getElementById('screen').innerHTML='please enter a name';
    return false
}
else{
   inp=document.regform.c1.value; 
  pttern=/^[A-z 0-9 @ \.]+$/  
  reslt=pttern.test(inp);
  if(reslt==false)
  {
    document.getElementById('screen').innerHTML=' phone number contain only numbers'
    return false;
  }
}