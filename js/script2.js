
function simpleAreaCalculation(inputId1, inputId2) {
  const inputFieldId1 = document.getElementById(inputId1);
  const value1 = parseFloat(inputFieldId1.value);
  console.log(value1);

  const inputFieldId2 = document.getElementById(inputId2);
  const value2 = parseFloat(inputFieldId2.value);
  console.log(value2);

  let result = parseFloat(value1 * value2);
  result = result.toFixed(2);
  console.log(result);

  return result;
}

// save calculation history

function saveToCalculationArea(title, result) {
  console.log(result, "from function");
  //   const shapeTitleField = document.getElementById(title);
  //   const shapeTitle = shapeTitleField.innerText;
  const calculationList = document.getElementById("calculation-area");
  const li = document.createElement("li");
  //   li.innerText = result;

  const list = calculationList.querySelectorAll("li");
  let numberOfCalculation = list.length;
  li.innerHTML = `
    <div class='m-5 p-2 border flex justify-between items-center'>
        <span>${numberOfCalculation + 1} . ${title}</span>
        <p>${result}</p>
        <button class="btn btn-primary">Convert to m^2</button>
    </div>
`;
  document.getElementById("calculation-area").appendChild(li);
}

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const result = simpleAreaCalculation(
    "rectangle-input-field-w",
    "rectangle-input-field-l"
  );
  const title = document.getElementById("title-rectangle").innerText;
  saveToCalculationArea(title, result);
});

document.getElementById("btn-triangle").addEventListener("click", function () {
  const result = simpleAreaCalculation(
    "triangle-input-field-b",
    "triangle-input-field-h"
  );
  const title = document.getElementById("title-triangle").innerText;
  saveToCalculationArea(title, result);
});
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const result = simpleAreaCalculation(
      "parallelogram-input-field-w",
      "parallelogram-input-field-l"
    );
    const title = document.getElementById("title-parallelogram").innerText;
    saveToCalculationArea(title, result);
  });
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const result = simpleAreaCalculation(
    "rectangle-input-field-w",
    "rectangle-input-field-l"
  );
  const title = document.getElementById("title-rhombus").innerText;
  saveToCalculationArea(title, result);
});
document.getElementById("btn-pantagon").addEventListener("click", function () {
  const result = simpleAreaCalculation(
    "rectangle-input-field-w",
    "rectangle-input-field-l"
  );
  const title = document.getElementById("title-pantagon").innerText;
  saveToCalculationArea(title, result);
});
// document.getElementById("btn-ellipse").addEventListener("click", function () {
//   const result = simpleAreaCalculation(
//     "rectangle-input-field-w",
//     "rectangle-input-field-l"
//   );
//   const title = document.getElementById("title-ellipse").innerText;
//   saveToCalculationArea(title, result);
// });

// random color

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
    console.log(color)
  }
  return "rgb(" + color.join(", ") + ")";
}

document.getElementById("triangle").addEventListener("mouseover", (event) => {
  document.getElementById("triangle").style.backgroundColor = randomColor();
});
document.getElementById("rectangle").addEventListener("mouseover", (event) => {
  document.getElementById("rectangle").style.backgroundColor = randomColor();
});
document.getElementById("parallelogram").addEventListener("mouseover", (event) => {
    document.getElementById("parallelogram").style.backgroundColor =randomColor();
  });
document.getElementById("rhombus").addEventListener("mouseover", (event) => {
  document.getElementById("rhombus").style.backgroundColor = randomColor();
});
document.getElementById("pantagon").addEventListener("mouseover", (event) => {
  document.getElementById("pantagon").style.backgroundColor = randomColor();
});
document.getElementById("ellipse").addEventListener("mouseover", (event) => {
  document.getElementById("ellipse").style.backgroundColor = randomColor();
});