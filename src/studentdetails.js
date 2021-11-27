/* eslint-disable */
import tag from './addtag';
import { data } from './search';

const itemContainer = document.querySelector('.items-container');
const nameSearch = document.querySelector('.form-name');

const studentDetails = (list) => {
  let details = list.map((item) => {
    let average = item.grades.reduce((acc, item) => parseInt(item) + acc, 0);
    average /= item.grades.length;

    return `<section class= 'student-card d-flex'><img src=${item.pic} alt="">
       <article class="student-details d-flex f-col">
           <h1 class="name">${item.firstName} ${item.lastName}</h1>
           <ul class="details">
               <li>Email : ${item.email}</li>
               <li>Company : ${item.company}</li>
               <li>Skill : ${item.skill}</li>
               <li>Average : ${average}%</li>
           </ul>
           <ul class="test-scores f-col">
               <li>Test 1 : ${item.grades[0]}%</li>
               <li>Test 2 : ${item.grades[1]}%</li>
               <li>Test 3 : ${item.grades[2]}%</li>
               <li>Test 4 : ${item.grades[3]}%</li>
               <li>Test 5 : ${item.grades[4]}%</li>
               <li>Test 6 : ${item.grades[5]}%</li>
               <li>Test 7 : ${item.grades[6]}%</li>
               <li>Test 8 : ${item.grades[7]}%</li>
           </ul>
           <article class="tag-cont d-flex f-col">
       <ul class="tag d-flex">
       </ul>
       <div>
           <input placeholder="add tag" type="text" name="tag" class="tag-input">
       </div>
   </article>
   </article>
       </article>
   <div class="d-flex f-col icon">
   <button type="button" class="fa fa-plus" data-id= 'plus'></button>
   <button type="button" class="fa fa-minus" data-id= 'minus'></button>
   </div></section>`;
  });

  details = details.join('');
  itemContainer.innerHTML = details;
  const studentCard = document.querySelectorAll('.student-card');

  studentCard.forEach((card) => {
    card.addEventListener('click', (e) => {
      const { id } = e.target.dataset;
      if (id) {
        if (id === 'plus') {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      }
    });
  });

  const tagInput = document.querySelectorAll('.tag-input');

  tagInput.forEach((input) => {
    input.addEventListener('change', (e) => {
      e.preventDefault();
      const myInput = input.value;
      const cont = e.target.parentElement.previousElementSibling;
      cont.innerHTML += tag(myInput);
      input.value = '';
    });
  });
};

nameSearch.addEventListener('input', () => {
  const name = nameSearch.value;
  data(name);
});

export { studentDetails };
