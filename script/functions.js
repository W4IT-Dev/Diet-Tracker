function loadData(){
    if(data) {
        list.innerHTML = ""
        for(let i = 0; i < data.length; i++) {
            list.innerHTML += `
            <div class="list-item" tabindex="${i}" data-day="${data[i].day}" data-weight="${data[i].weight}">Day ${data[i].day}</div>
            `
        }
document.querySelector('#list .list-item').focus();

    }
}


function calc() {
    let x = document.querySelector('#weight').value;
    let y = document.querySelector('#height').value / 100;
    console.log(x, y)
    y *= y;
    console.log(x, y)

    const bmi = x / y;
    console.log(x, y, bmi)
    let status = null;
    if (bmi < 18.5) status = "underweight"
    if (bmi > 18.5 && bmi < 24.9) status = "normal"
    if (bmi > 25.0 && bmi < 29.9) status = "overweight"
    if (bmi > 30.0) status = "obese"
    alert(bmi + status)
}

function nav(move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.list-item');
    const targetElement = items[next];
    if (targetElement) targetElement.focus();
}

function showDetails() {
    details.style.left = "0px";
    document.querySelector('header').innerText = "Day " + document.activeElement.dataset.day;
    document.querySelector('.weight').innerText = document.activeElement.dataset.weight + " kg"
    document.querySelector('.note.secondary').innerText = document.activeElement.dataset.note || "-"
    setSoftkey("Back", " ", "Options")
}

function goBack(){
    details.style.left = "240px";
    document.querySelector('header').innerText = "Diet Tracker";
    setSoftkey("BMI", "VIEW", "Options")
}

function setSoftkey(a, b, c) {
    if (a) left.innerText = a;
    if (b) center.innerText = b;
    if (c) right.innerText = c;
}

function handleSoftkeys(key) {
    if (key == "SoftLeft") {
        if (details.style.left == "240px") return window.location.href = "/bmi.html";
        if (details.style.left == "0px") return goBack();
    }
    if(key == "Enter") {
        if(main.style.left == "0px") showDetails();
    }
}