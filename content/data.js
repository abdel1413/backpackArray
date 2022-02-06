import backpack from "./Backpack_Frog.js";
const back_pack = new backpack(
  "pack01",
  "../asset/images/backpack_img.png",
  "backpack",
  50,
  "blue",
  false,
  10,
  5,
  5,
  "Febuary 03 10:45:00 PST"
);

const frogpack = new backpack(
  "pack02",
  "../asset/images/backpack_img.png",
  "frogpack",
  30,
  "green",
  true,
  "Febuary 03, 10:56:00 PST",
  4,
  2,
  2
);

const anotherFrog = new backpack(
  "pack03",
  "../asset/images/backpack_img.png",
  "frogpack2",
  24,
  "gray",
  false,
  "Febuary 03, 12:36:00 PST",
  6,
  3,
  3
);

const both_pack = [back_pack, frogpack, anotherFrog];

export default both_pack;
