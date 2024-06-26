function calculateBMI(){
    const height=document.querySelector("#height").value/100;
    const weight=document.querySelector("#weight").value;
    let btn=document.querySelector("button");
    let p=document.querySelector("#para");
    let bodyCondition=document.querySelector("#bodyCondition");
  
    console.log(height);
    console.log(weight);
  
    let bmi=(weight/(height*height));
    const BMI=bmi.toFixed(1);
  
    console.log(bmi);
  
    p.textContent=BMI;
  
    if(BMI<=18.4 && BMI>=0)
    {
       bodyCondition.textContent="You are Underweight !";
       bodyCondition.style.color="red";
       bodyCondition.style.fontWeight="600";
    }
    else if(BMI>=30)
    {
      bodyCondition.textContent="You are Overweight !";
      bodyCondition.style.color="red";
      bodyCondition.style.fontWeight="600";
    }
    else if(BMI>=18.5 && BMI<=29.9){
      bodyCondition.textContent="Your Weight is Fine";
      bodyCondition.style.color="darkGreen";
      bodyCondition.style.fontWeight="600";
    }
    else{
      bodyCondition.textContent="You entered wrong information";
    }
  }