import moment from 'moment';

const GetWeek = () => {
  let week = [];

  for (let i = 0; i < 7; i++) {
    week.push(moment().subtract(i, "d").format("YYYY-MM-DD"));
  }

  week = (week.reverse());
  
  return week;
};

export default GetWeek;
