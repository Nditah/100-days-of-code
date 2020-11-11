import moment from "moment";

const GetSixMonths = () => {
  let sixMonths = [];

  for (let i = 0; i < 180; i++) {
    i % 15 === 0 &&
      sixMonths.push(moment().subtract(i, "d").format("YYYY-MM-DD"));
  }

  sixMonths = (sixMonths.reverse());
//   console.log(sixMonths);

  return sixMonths;
};

export default GetSixMonths;
