import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/markbayley/6466ab5530e8d09652e9706bfec11416/raw/2901f41923f1f77bc10141d13084a34ba5e1751d/chart-data.csv";

export const getData = async () => {
  const data = await csv(csvUrl);

  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};
