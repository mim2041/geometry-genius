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
  
  // simple 0.5*b*h or w*l calculation
  
  function simpleAreaCalculation1(inputId1, inputId2) {
    const inputFieldId1 = document.getElementById(inputId1);
    const value1 = parseFloat(inputFieldId1.value);
    console.log(value1);
  
    const inputFieldId2 = document.getElementById(inputId2);
    const value2 = parseFloat(inputFieldId2.value);
    console.log(value2);
  
    let result = parseFloat(0.5 * value1 * value2);
    result = result.toFixed(2);
    console.log(result);
  
    return result;
  }
  
  // simple pi*b*h or w*l calculation
  
  function simpleAreaCalculation2(inputId1, inputId2) {
    const inputFieldId1 = document.getElementById(inputId1);
    const value1 = parseFloat(inputFieldId1.value);
    console.log(value1);
  
    const inputFieldId2 = document.getElementById(inputId2);
    const value2 = parseFloat(inputFieldId2.value);
    console.log(value2);
  
    let result = parseFloat(3.14 * value1 * value2);
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
      <div class='m-1 p-2 border flex justify-between items-center '>
          <span>${numberOfCalculation + 1} . ${title}</span>
          <p>${result}</p>
          <span class="p-2 bg-[blue] text-white rounded">Convert to m<sup>2</span>
          
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
        "rectangle-input-field-w",
        "rectangle-input-field-l"
      );
      const title = document.getElementById("title-parallelogram").innerText;
      saveToCalculationArea(title, result);
    });
  document.getElementById("btn-rhombus").addEventListener("click", function () {
    const result = simpleAreaCalculation1(
      "rectangle-input-field-w",
      "rectangle-input-field-l"
    );
    const title = document.getElementById("title-rhombus").innerText;
    saveToCalculationArea(title, result);
  });
  
  document.getElementById("btn-pantagon").addEventListener("click", function () {
    const result = simpleAreaCalculation1(
      "rectangle-input-field-w",
      "rectangle-input-field-l"
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
  
  // document.getElementById("btn-ellipse").addEventListener("click", function () {
  //   const result = simpleAreaCalculation2(
  //     "id="ellipsis-input-field-a",
  //     "id="ellipsis-input-field-b"
  //   );
  //   const title = document.getElementById("title-ellipse").innerText;
  //   saveToCalculationArea(title, result);
  // });
  
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
  document.getElementById("rectangle").addEventListener("mouseover", (event) => {
    // document.body.style.backgroundColor = randomColor();
    document.getElementById("rectangle").style.backgroundColor = randomColor();
  });
  document
    .getElementById("parallelogram")
    .addEventListener("mouseover", (event) => {
      // document.body.style.backgroundColor = randomColor();
      document.getElementById("parallelogram").style.backgroundColor =
        randomColor();
    });
  document.getElementById("rhombus").addEventListener("mouseover", (event) => {
    // document.body.style.backgroundColor = randomColor();
    document.getElementById("rhombus").style.backgroundColor = randomColor();
  });
  document.getElementById("pantagon").addEventListener("mouseover", (event) => {
    // document.body.style.backgroundColor = randomColor();
    document.getElementById("pantagon").style.backgroundColor = randomColor();
  });
  document.getElementById("ellipse").addEventListener("mouseover", (event) => {
    // document.body.style.backgroundColor = randomColor();
    document.getElementById("ellipse").style.backgroundColor = randomColor();
  });
  
  function checkInputValidation(inputValue) {
    if (isNaN(inputValue) || inputValue === "" || inputValue < 0) {
      return false;
    }
  }