import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/accountController1.findAccounts'
export default class ApexWithImperativeParams extends LightningElement {
    searchKey=''
    accounts
    timer
    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        this.timer = setTimeout(()=>{
            this.callApex()
        }, 1000)
    }

    callApex(){
        findAccounts({searchKey:this.searchKey})
        .then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}