const data = require("./cars.json");
const newData = require("./newData.json");
const fs = require("fs");

function processData() {
  let detailedData = data.map((car) => {
    return {
      Make: car.Name.slice(0, car.Name.indexOf(" ")),
      Model: car.Name.slice(car.Name.indexOf(" ") + 1),
      Year: new Date(car.Year).getFullYear(),
      Miles_per_Gallon: car.Miles_per_Gallon,
      Cylinders: car.Cylinders,
      Displacemen: car.Displacement,
      Horsepower: car.Horsepower,
      Weight_in_lbs: car.Weight_in_lbs,
      Acceleration: car.Acceleration,
      Origin: car.Origin,
    };
  });
  return detailedData;
}

// fs.writeFile(
//   "./data/newData.json",
//   JSON.stringify(processData()),
//   "utf-8",
//   (err) => {
//     console.error(err);
//   }
// );
console.log(Array.isArray(newData));
