new class{start(){this.updateTimer(),this.intervalId=setInterval((()=>{this.updateTimer()}),1e3)}updateTimer(){const t=this.targetDate-new Date;if(t<=0)return clearInterval(this.intervalId),this.refs.days.textContent="00",this.refs.hours.textContent="00",this.refs.mins.textContent="00",void(this.refs.secs.textContent="00");const e=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);this.refs.days.textContent=this.pad(e),this.refs.hours.textContent=this.pad(s),this.refs.mins.textContent=this.pad(r),this.refs.secs.textContent=this.pad(a)}pad(t){return String(t).padStart(2,"0")}constructor({selector:t,targetDate:e}){this.timerEl=document.querySelector(t),this.targetDate=e,this.refs={days:this.timerEl.querySelector('[data-value="days"]'),hours:this.timerEl.querySelector('[data-value="hours"]'),mins:this.timerEl.querySelector('[data-value="mins"]'),secs:this.timerEl.querySelector('[data-value="secs"]')},this.start()}}({selector:"#timer-1",targetDate:new Date("Oct 22, 2024")});
//# sourceMappingURL=index.e7112ebe.js.map
