import './style.css';

// const searchBar = document.getElementsById('name');
// let names = [];
// searchBar.addEventListener('keyup', (e) => {
//   const searchString = e.target.value;
//   const fullName = names.filter((character) => {
//     return (
//       character.firstName.includes(searchString) || character.secondName.includes(searchString)
//     );
//   });
//   itemArr(fullName);
// });

const getData = async () => {
  const response = await fetch('https://api.hatchways.io/assessment/students/');
  response.json().then((json) => {
    const itemArr = json.students;
    itemArr.forEach((item) => {
      let grades = item.grades;
      grades = grades.map(elem => parseInt(elem))
      let avg = grades.reduce((a,b) => a+b) / grades.length
      const container = document.querySelector('#items');
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="card">
      <div class="image">
      <img src=${item.pic} class="pic" alt="item image" id="${item.id}"></div>
      <div class="details">
      <p class="name">${item.firstName} ${item.lastName}</p>
      <p class="email">Email: ${item.email}</p>
      <p class="company">Company: ${item.company}</p>
      <p class="skill">Skill: ${item.skill}</p>
      <p class="grades">Average: ${avg}% </p>
      </div>
      <button class="add"> + </button>
      <div class="marks"><div>
      <div class="tag">
      <input type="text" id="tag" name="tag" placeholder="Add a Tag">
      </div>
      </div>`;
      container.appendChild(card);
    });
});
}

// const addGrades = Array.from(document.querySelectorAll('.marks'));
// addGrades.forEach((card, index) => {
//   if (index > 1) {
//     card.classList.add('hide');
//   }
// });

// const addBtn = document.getElementsByClassName(".add");

// const addBtnText = (card) => {
//   if (card.classList.contains('hide')) {
//     addBtn.innerHTML = '+';
//   } else {
//     addBtn.innerHTML = '-';
//   }
// };

// addBtn.addEventListener('click', () => {
//   addGrades.forEach((card, index) => {
//     if (index > 1) {
//       card.classList.toggle('hide');
//       addBtnText(card);
//     }
//   });
// });

getData();
