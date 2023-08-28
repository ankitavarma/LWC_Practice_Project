import { LightningElement ,api} from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label=''
    @api options=[]
    @api uniqueId=''

    changeHandler(event){
        console.log(this.label)
    
     this.callParent(event.target.value)
    }

    callParent(value){
         // Creates the event with the data.
    const selectedEvent = new CustomEvent ('optionhandler',{
            detail:{
                label : this.label,
                value :value
            }
        });
        // Dispatches the event.
    this.dispatchEvent(selectedEvent);

    }
}