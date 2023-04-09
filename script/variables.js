let list = document.querySelector('#list');
let main = document.querySelector('#main');
let details = document.querySelector('#details');
let header = document.querySelector('header');
let softkeydisplay = document.querySelector('#footer1');
let left = softkeydisplay.firstElementChild;
let center = softkeydisplay.children[1];
let right = softkeydisplay.lastElementChild;

let currentSettings = JSON.stringify(localStorage.settings) || {
    weightUnit: "kg",
    motivator: true
};
let data =  JSON.stringify(localStorage.data) || [{
    day: 1,
    weight: 49,
    note: ""
}, {
    day: 2,
    weight: 50,
    note: ""
}];