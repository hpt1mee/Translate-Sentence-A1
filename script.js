let Count_Sentence = document.querySelector('.Count_Sentece');
let Sentence = document.querySelector('.Sentence');
let English_Sentence = document.querySelector('.English_Sentence');
let check = document.querySelector('.chec');
let Count_Sent = 0;
let CountRightAnswers = 0;
check.innerText = CountRightAnswers;



const English = [
  'The cat sat on the mat',
  'The sun is shining',
  'Birds fly in the sky',
  'I like pizza',
  'He is a doctor'
];

const Russia = [
  'Кот сидел на коврике',
  'Солнце светит',
  'Птицы летают в небе',
  'Мне нравится пицца',
  'Он врач'
];

Sentence.innerText = `${English[Count_Sent]}`;
Count_Sentence.innerText = `${Count_Sent}/5`;


document.querySelector('.b1').addEventListener('click', () => {
  if (English_Sentence.value.trim() === '') {
    Swal.fire({
      title: 'Ошибка!',
      text: 'Строка Ввода Пустая!',
      icon: 'error',
      confirmButtonText: 'Исправить!'
    });
  } else {
    const userAnswer = English_Sentence.value.toLowerCase();
    const correctAnswer = Russia[Count_Sent].toLowerCase();

    if (userAnswer === correctAnswer) {
      CountRightAnswers++;
    }

    Count_Sent++;
    Count_Sentence.innerText = `${Count_Sent}/5`;
    English_Sentence.value = '';
    check.innerText = CountRightAnswers;

    if (Count_Sent < English.length) {
      Sentence.innerText = `${English[Count_Sent]}`;
    } else {
      Swal.fire({
        title: "Отличная Работа!",
        text: `Вы прошли тест на ${CountRightAnswers} из 5!`,
        icon: "success"
      });
    }
				if(CountRightAnswers == 0) {
					Swal.fire({
      title: 'Ошибка!',
      text: 'Везде Ошибки!',
      icon: 'error',
      confirmButtonText: 'Исправить!'
    });
				}
  }
});
