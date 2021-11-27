/* eslint-disable */
import './style.css';
import { studentDetails } from './studentdetails';

const getData = () => fetch('https://api.hatchways.io/assessment/students/');

const data = async () => {
  try {
    let f = await (await getData()).json();
    f = f.students.slice(0, 15);
    studentDetails(f);
  } catch (err) {
    return err;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  data();
});

export { getData };