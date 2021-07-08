const ref = {
inputEl: document.querySelector('#name-input'),
outputEl: document.querySelector('#name-output'),
};

ref.inputEl.placeholder = 'незнакомец';
ref.inputEl.addEventListener ('input', onInputChange);

function onInputChange (event) {
  console.log(event.currentTarget.value);
  ref.outputEl.textContent = event.currentTarget.value  
};
