const playSound = ({ sound, success }) => {
  /**
   * Play specific drum sound
   * Make success callback after 500ms or sound ended.
   *
   * @param {Node} sound (Selected audio node)
   * @param {Function} sucess (Callback after palying audio)
   * @return {Null}
   */

  const playingSound = sound;
  const playPromise = playingSound.play();

  // Stop sound function with success callback.
  const stopSound = () => {
    playingSound.pause();
    playingSound.currentTime = 0;
    success && success();
  };

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playingSound.currentTime = 0; // Reset audio.
        setTimeout(stopSound, 500); // When 500ms later stop sound.
        sound.addEventListener('ended', stopSound); // When audio ended stop sound.
      })
      .catch(error => console.log(error));
  }
};

// When key down play sound.
document.addEventListener('keydown', keyDownEvent => {
  const code = keyDownEvent.keyCode;
  const selector = `data-key='${code}'`;
  const key = document.querySelector(`.key[${selector}]`);
  const sound = document.querySelector(`audio[${selector}]`);
  if (!key || !sound) return;
  key.classList.add('playing');
  playSound({ sound });

  // When key up remove playing class name from key.
  document.addEventListener('keyup', keyUpEvent => {
    if (keyUpEvent.keyCode === code) {
      key.classList.remove('playing');
    }
  });
});

// When key clicked play sound.
const keys = document.querySelectorAll('.key');
keys &&
  Array.from(keys).forEach(key => {
    key.addEventListener('click', () => {
      const code = key.dataset.key;
      const selector = `audio[data-key='${code}']`;
      const sound = document.querySelector(selector);
      if (!key || !sound) return;
      key.classList.add('playing');
      playSound({
        sound,
        success: () => key.classList.remove('playing'),
      });
    });
  });
