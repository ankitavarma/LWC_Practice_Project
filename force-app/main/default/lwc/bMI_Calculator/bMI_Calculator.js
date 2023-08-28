import { LightningElement } from 'lwc';

export default class BMI_Calculator extends LightningElement {
height = ''
weight=''
bmivalue=''
result=''
eventHandler(event){
    const{name,value} = event.target
    if(name=== "height")
    {
        this.height = value

    }
    if(name=== "weight")
    {
        this.weight = value

    }

}
submitHandler(event){
event.preventDefault()
console.log("height" ,this.height)
console.log("weight" ,this.weight)
this.calculate()
}
calculate(){
    //BMI = weight in kg /(height in m * height in m)

    let height = Number(this.height)/100;
    let bmi = Number(this.weight)/(height*height);
    this.bmivalue= Number(bmi.toFixed(2))
    
    if(this.bmivalue <18.5)
    {
        this.result = "UnderWeight"
    }
    else if(this.bmivalue >=18.5 && this.bmivalue <25){
        this.result="Healthy"
    } 
    else if(this.bmivalue >=25 && this.bmivalue <30){
        this.result="OverWeight"
    }
    else{
        this.result="Obese"
    }
    console.log("BMI Value is:", this.bmivalue)
    console.log("result is:",this.result)
}

reCalculate(){
    this.height = ''
    this.weight=''
    this.bmivalue=''
    this.result=''
}
}