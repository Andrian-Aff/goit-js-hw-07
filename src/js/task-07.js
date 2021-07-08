const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputRateChange = (event) => {
    //console.dir(event.target);
    textEl.style.fontSize = event.target.value*0.32 + "px";
};

inputRangeEl.addEventListener('input', onInputRateChange);