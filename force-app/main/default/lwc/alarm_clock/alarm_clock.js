import { LightningElement} from 'lwc';
//import alarmclockAsset from '@salesforce/resourceUrl/alarmclockAsset'
//import clockRingtones from '@salesforce/resourceUrl/clockRingtone'
export default class alarm_clock extends LightningElement {
 //ringtone = new Audio( clockRingtones+'/clockRingtone/clockRingtone.mp3' )
 ringtone = new Audio('https://ust-d2-dev-ed--c.vf.force.com/resource/1684830655000/clockRingtone')
  
 currentTimes =''
hours =[]
mins=[]
meridiem=['AM','PM']

hourselected
minselected
meridiemselected
isAlarmset= false
alarmTime 
isAlarmTrigger =false


get isfieldNotSelected(){
    //return !(this.hourselected && this.minselected && this.meridiemselected)
    return !(this.hourselected && this.minselected )
    }

    get shakeImage(){
        return this.isAlarmTrigger ? 'shake':''
    }
     
 connectedCallback(){
    this.currentTimeHandler();
    this.createOptionForHour();
    this.createOptionForMins();
 }

 
 currentTimeHandler(){
    setInterval(()=>{
        let dateTime = new Date();
        let hour = dateTime.getHours();
        let min= dateTime.getMinutes();
        let sec=dateTime.getSeconds();
        let ampm = "AM";
    
        if(hour == 0){
            hour= 12;
        }else if(hour > 12){
            hour = hour-12;
            ampm = "PM"
        }
        hour = hour<10 ? "0"+hour :hour
        min = min<10 ? "0"+min :min
        sec = sec<10 ? "0"+sec :sec
        console.log( "Hour:" +hour)
        console.log("Minute:" + min)
        console.log("Seconds:"+sec)

        this.currentTimes = hour + ":" +min+ ":" +sec+" "+ampm;
        //thiscurrentTimes='${hour}:${min}:${sec}'; optional code works same 
        console.log(this.currentTimes)
        if(this.alarmTime === hour + "" +min){
            console.log("alarm Trigger")
            this.isAlarmTrigger = true
           this.ringtone.play()
            this.ringtone.loop = true
        }
    },
    1000)
}
createOptionForHour(){
    for(let i=1 ; i<= 12;i++){
        let val = i<10?"0"+i:i
        this.hours.push(val);
    }
}
createOptionForMins()
{
    for(let i=0 ; i<= 59;i++){
        let val = i<10?"0"+i:i
        this.mins.push(val);
    }
}

optionhandler(event){
const{label,value} =event.detail
if(label ==='Hour(s)'){
this.hourselected=value
console.log("this.hourselected",this.hourselected)
}
else if(label==='Mintue(s)'){
this.minselected=value
}
else if(label==='Am/Pm'){
this.meridiemselected=value
}else{}

console.log("this.hourselected",this.hourselected)
console.log("this.minselected",this.minselected )
console.log("this.meridiemselected",this.meridiemselected )
}

setAlarmHandler(){
   // this.alarmTime = this.hourselected+":"+this.minselected+""+this.meridiemselected;
    this.alarmTime = this.hourselected+''+this.minselected;
    this.isAlarmset = true
    console.log("this is alarm time set function",+this.alarmTime)
}

clearAlarmHandler(){
    this.isAlarmset = false
    this.alarmTime = ''
   this.isAlarmTrigger = false
    this.ringtone.pause()
    
    this.hourselected = ''
    this.minselected = ''
   this.meridiemselected = ''

   /*const element = this.template.querySelectorAll('c-clock-dropdown')
   Array.from(element).forEach(element => {
    reset("")
    
   });*/
 }
}