import moment from "moment";

const GetMonth = () => {
  let month = [];

  for (let i = 0; i < 30; i++) {
    i % 4 === 0 && month.push(moment().subtract(i, "d").format("YYYY-MM-DD"));
  }
  month = (month.reverse());
//   console.log(month);

  return month;
};

export default GetMonth;
