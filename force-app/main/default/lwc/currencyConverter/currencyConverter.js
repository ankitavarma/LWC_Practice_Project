import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import currencyConverterAsset from '@salesforce/resourceUrl/currencyConverterAsset'
export default class CurrencyConverter extends LightningElement {
    countryList =countryCodeList
    currencyFrom ="AUD"
    currencyTo ="USD"
    Amount =''
    result 
    error
 currencyImage = currencyConverterAsset +"/currencyConverterAsset/currencyConverterImage.png";
    handleChange(event){
        const{name,value} = event.target
        console.log("name",name)
        console.log("value",value)
         this[name] = value;
    }

    submitHandler(event){
        event.preventDefault();
        this.converter();
    }

   async converter(){
    const API_URL = 'https://api.exchangerate.host/convert?from=INR&to=USD'
    try{
        const data = await fetch(API_URL);
        const jsonData = await data.json();
        this.result = (Number(this.Amount)*jsonData.result).toFixed(2);
        console.log("output",this.result)
        console.log(jsonData);
    }catch(error){
        console.log(error);
        console.log("an error occoured ..plese try again");
    }

    }
}