const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const promiseOutput = async(emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  let jumlahEmosi = 0;
  theaterIXX.forEach(hitung);
  theaterVGC.forEach(hitung);

  function hitung(item, index) {
      if (item.hasil == emosi) { jumlahEmosi++ }
  }
  return jumlahEmosi;
};

module.exports = {
  promiseOutput,
};
