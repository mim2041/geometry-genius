function areaCalculationType1(inputId1,inputId2){
    const inputFieldId1 = document.getElementById(inputId1);
    const value1 = parseFloat(inputFieldId1.value);
    console.log(value1)

    const inputFieldId2 = document.getElementById(inputId2);
    const value2 = parseFloat(inputFieldId2.value);
    console.log(value2)

    let area = parseFloat(value1 * value2);
    area = area.toFixed(2);
    return area;
}

function areaCalculationType2(inputId1, inputId2){
    const inputFieldId1 = document.getElementById(inputId1);
    const value1 = parseFloat(inputFieldId1.value);
    console.log(value1)

    const inputFieldId2 = document.getElementById(inputId2);
    const value2 = parseFloat(inputFieldId2.value);
    console.log(value2)

    let area = parseFloat(.5 * value1 * value2);
    area = area.toFixed(2);
    return area;
}

function calculationAreaDisplay(){
    const displayLists = document.getElementById('display-lists');
    const li1 = document.createElement('li');
    li1.innerText = 'Hello';
    const li2 = document.createElement('li');
    li2.innerText = 'Hello';
    displayLists.appendChild(li1);
    displayLists.appendChild(li2);
    // calculationArea.appendChild(li);
}

document.getElementById('btn-triangle').addEventListener('click',function(){
    const area = areaCalculationType2('triangle-input-field-b','triangle-input-field-h');

})

document.getElementById('btn-rectangle').addEventListener('click',function(){
    areaCalculationType1('rectangle-input-field-w','rectangle-input-field-l');
    calculationAreaDisplay();
})

document.getElementById('btn-parallelogram').addEventListener('click',function(){
    areaCalculationType1('parallelogram-input-field-b','parallelogram-input-field-h');
    
})

document.getElementById('btn-triangle').addEventListener('click',function(){

})

document.getElementById('btn-triangle').addEventListener('click',function(){

})