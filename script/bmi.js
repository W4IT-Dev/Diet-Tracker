document.querySelector('input').focus();


function nava(move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.input');
    const targetElement = items[next];
    if (targetElement) targetElement.focus();
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowUp") nava(-1), e.preventDefault();
    if (e.key == "ArrowDown") nava(1), e.preventDefault();
    if (e.key == "Backspace" || e.key == "EndCall") window.location.href = "/index.html", e.preventDefault();
})



document.querySelector('button').addEventListener('focus', ()=>{
    document.querySelector('#center').innerText = "Calculate";
})