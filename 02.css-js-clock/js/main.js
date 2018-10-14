const setTime = () => {
  /**
   * Get time and set degree of clock hands.
   *
   * @param {Null}
   * @return {Null}
   */

  const now = new Date();

  const hour = now.getHours();
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hour * 15}deg)`;

  const minute = now.getMinutes();
  const minuteHand = document.querySelector('.min-hand');
  minuteHand.style.transform = `rotate(${minute * 6}deg)`;

  const second = now.getSeconds();
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${second * 6}deg)`;
};

setTime();
setInterval(setTime, 1000);
