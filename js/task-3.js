
document.querySelector('#name-input').addEventListener('input', event => {
  const result = event.target.value.trim();
  document.querySelector('#name-output').textContent = result ? result : "Anonymous";
});


















