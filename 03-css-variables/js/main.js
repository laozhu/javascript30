const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  /**
   * Update CSS variables of document.
   *
   * @param {Null}
   * @return {Null}
   */

  let raf;
  raf && window.cancelAnimationFrame(raf);
  raf = window.requestAnimationFrame(() => {
    const html = document.documentElement;
    const suffix = this.dataset.sizing || '';
    html.style.setProperty(`--${this.name}`, this.value + suffix);
  });
}

// For IE (input[type=range])
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// For chrome, firefox and safari (input[type=range])
inputs.forEach(input => input.addEventListener('input', handleUpdate));
