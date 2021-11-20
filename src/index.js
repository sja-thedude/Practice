import './style.css';

const getData = async () => {
  const response = await fetch('https://api.hatchways.io/assessment/students/');
  response.json().then((json) => {
    const itemArr = json.students;
    itemArr.forEach((item) => {
      // arr = response.data.students[0].grades;
      // arr = arr.map(elem => parseInt(elem))
      // avg = arr.reduce((a,b) => a+b) /arr.length
      // console.log(avg);
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
      <p class="grades">Average: ${item.grades} </p>
      </div>
      <div class="add"> + </div>
      </div>`;
      container.appendChild(card);
    });
});
}

// const addBtn = document.getElementsByClassName(".add");
// addBtn.addEventListener('click', () => {
  
// });

getData();