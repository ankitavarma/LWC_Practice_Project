import { LightningElement ,wire} from 'lwc';
import getAccountList from '@salesforce/apex/accountController1.getAccountList'
export default class ApexWithImperativecall extends LightningElement {

    accounts
    handleClick(){
        getAccountList().then(result =>{
            this.accounts=result
            console.log(this.result);
        }).catch(error =>{
            console.error(error);
        })
    }

    
}