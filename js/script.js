// simple b*h or w*l calculation

function simpleAreaCalculation(inputId1, inputId2) {
    const inputFieldId1 = document.getElementById(inputId1);
    const inputFieldId2 = document.getElementById(inputId2);
  
    const isValid1 = checkInputValidation(inputFieldId1.value);
  
    const isValid2 = checkInputValidation(inputFieldId2.value);
  
    if (isValid1 && isValid2) {
      const value1 = parseFloat(inputFieldId1.value);
      const value2 = parseFloat(inputFieldId2.value);
      let result = parseFloat(value1 * value2);
      result = result.toFixed(2);
      return result;
    } else {
      return false;
    }
  }
  
  // simple 0.5*b*h or w*l calculation
  
  function simpleAreaCalculation1(inputId1, inputId2) {
    const inputFieldId1 = document.getElementById(inputId1);
    const inputFieldId2 = document.getElementById(inputId2);
  
    const isValid1 = checkInputValidation(inputFieldId1.value);
  
    const isValid2 = checkInputValidation(inputFieldId2.value);
  
    if (isValid1 && isValid2) {
      const value1 = parseFloat(inputFieldId1.value);
      const value2 = parseFloat(inputFieldId2.value);
      let result = parseFloat(0.5 * value1 * value2);
      result = result.toFixed(2);
      return result;
    } else {
      return false;
    }

  }
  
  // simple pi*b*h or w*l calculation
  
  function simpleAreaCalculation2(inputId1, inputId2) {
    const inputFieldId1 = document.getElementById(inputId1);
    const inputFieldId2 = document.getElementById(inputId2);
  
    const isValid1 = checkInputValidation(inputFieldId1.value);
  
    const isValid2 = checkInputValidation(inputFieldId2.value);
  
    if (isValid1 && isValid2) {
      const value1 = parseFloat(inputFieldId1.value);
      const value2 = parseFloat(inputFieldId2.value);
      let result = parseFloat(3.14 * value1 * value2);
      result = result.toFixed(2);
      return result;
    } else {
      return false;
    }
  }
  // save calculation history
  
  function saveToCalculationArea(title, result) {
    if (result) {
      const calculationList = document.getElementById("calculation-area");
      const li = document.createElement("li");
      //   li.innerText = result;
  
      const list = calculationList.querySelectorAll("li");
      let numberOfCalculation = list.length;
      li.innerHTML = `
            <div class='m-1 p-2 border flex justify-between items-center '>
                <span>${numberOfCalculation + 1} . ${title}</span>
                <p>${result}cm</p>
                <span id="convert-to-m2" onclick="convert()" class="p-2 bg-[blue] text-white rounded">Convert to m<sup>2</span>
                
            </div>
        `;
      document.getElementById("calculation-area").appendChild(li);
    } else {
      alert("Invalid input provide valid input values");
    }
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
    const result = simpleAreaCalculation1(
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
        "parallelogram-input-field-b",
        "parallelogram-input-field-h"
      );
      const title = document.getElementById("title-parallelogram").innerText;
      saveToCalculationArea(title, result);
    });
  document.getElementById("btn-rhombus").addEventListener("click", function () {
    const result = simpleAreaCalculation1(
      "rhombus-input-field-d1",
      "rhombus-input-field-d2"
    );
    const title = document.getElementById("title-rhombus").innerText;
    saveToCalculationArea(title, result);
  });
  
  document.getElementById("btn-pantagon").addEventListener("click", function () {
    const result = simpleAreaCalculation1(
      "pantagon-input-field-p",
      "pantagon-input-field-b"
    );
    const title = document.getElementById("title-pantagon").innerText;
    saveToCalculationArea(title, result);
  });
  document.getElementById("btn-ellipse").addEventListener("click", function () {
    const result = simpleAreaCalculation2(
      "ellipsis-input-field-a",
      "ellipsis-input-field-b"
    );
    const title = document.getElementById("title-ellipse").innerText;
    saveToCalculationArea(title, result);
  });
  
  
  // random color
  
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
      console.log(color);
    }
    return "rgb(" + color.join(", ") + ")";
  }
  document.getElementById("triangle").style.backgroundColor = randomColor();
  document.getElementById("triangle").addEventListener("mouseenter", (event) => {
    //   document.body.style.backgroundColor = randomColor();
    document.getElementById("triangle").style.backgroundColor = randomColor();
  });
  document.getElementById("rectangle").addEventListener("mouseenter", (event) => {
    // document.body.style.backgroundColor = randomColor();
    document.getElementById("rectangle").style.backgroundColor = randomColor();
  });
  document.getElementById("parallelogram").addEventListener("mouseenter", (event) => {
      document.getElementById("parallelogram").style.backgroundColor =randomColor();
    });
  document.getElementById("rhombus").addEventListener("mouseenter", (event) => {
    document.getElementById("rhombus").style.backgroundColor = randomColor();
  });
  document.getElementById("pantagon").addEventListener("mouseenter", (event) => {
    document.getElementById("pantagon").style.backgroundColor = randomColor();
  });
  document.getElementById("ellipse").addEventListener("mouseenter", (event) => {
    document.getElementById("ellipse").style.backgroundColor = randomColor();
  });
  
  function checkInputValidation(inputValue) {
    if (isNaN(inputValue) || inputValue === "" || inputValue < 0) {
      return false;
    } else return true;
  }