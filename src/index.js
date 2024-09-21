class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerEl = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      days: this.timerEl.querySelector('[data-value="days"]'),
      hours: this.timerEl.querySelector('[data-value="hours"]'),
      mins: this.timerEl.querySelector('[data-value="mins"]'),
      secs: this.timerEl.querySelector('[data-value="secs"]'),
    };
    this.start();
  }

  start() {
    this.updateTimer();
    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const time = this.targetDate - new Date();
    if (time <= 0) {
      clearInterval(this.intervalId);
      this.refs.days.textContent = '00';
      this.refs.hours.textContent = '00';
      this.refs.mins.textContent = '00';
      this.refs.secs.textContent = '00';
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.refs.days.textContent = this.pad(days);
    this.refs.hours.textContent = this.pad(hours);
    this.refs.mins.textContent = this.pad(mins);
    this.refs.secs.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 22, 2024'),
});
