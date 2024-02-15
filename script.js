const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav"); //por predefinição, a fonte de áudio é "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; //passar o áudio src com base na tecla premida
  audio.play(); // reporduzir audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`); //obter o elemento da tecla clicada
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); //adicionando o valor da chave de dados ao array allkeys
  //chamar a função playTune passando o valor da tecla de dados como argumento
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value; //passar o valor do seletor de intervalo como um volume de áudio
};

const showHideKeys = () => {
  //alternar a classe de ocultação de cada tecla no clique da caixa de verificação
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

//Teclas do teclado do PC, obter todas as propriedades da tecla clicada
const pressedKey = (e) => {
  //se a tecla premida estiver no conjunto de todas as teclas, chamar apenas a função playTune
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
