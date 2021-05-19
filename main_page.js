function calculate(){
    Celsius = document.getElementById("Celsius").value
    Fahrenheit = Celsius*1.8+32;
    console.log(Fahrenheit)
    Answer = document.getElementById("LabelAnswer").value

   if (Fahrenheit >= 95){
        Answer = "It's Hot";
        console.log(Answer)

        document.getElementById("LabelAnswer").innerHTML = "It's Hot" +  Fahrenheit + "°F";
        
    
   }
   else{
       Answer = "It's Cold"
       console.log(Answer)
       document.getElementById("LabelAnswer").innerHTML = "It's Cold " + Fahrenheit + "°F";
   }
}