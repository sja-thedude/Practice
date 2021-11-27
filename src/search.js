/* eslint-disable */
import { studentDetails } from './studentdetails';
import { getData } from './index';

const data = async (name) => {
  try {
    let f = await (await getData()).json();
    f = f.students.slice(0, 15);
    f = f.filter((item) => item.firstName.toLowerCase().includes(name)
    || item.lastName.toLowerCase().includes(name));
    studentDetails(f);
  } catch (err) {
    return err;
  }
};

export { data };