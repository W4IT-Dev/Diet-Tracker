document.querySelector('#list .list-item').focus();

document.addEventListener('keydown', e => {
    if (e.key.includes("Arrow")) e.preventDefault();

    if (e.key == "ArrowUp") nav(-1);
    if (e.key == "ArrowDown") nav(1);

    if(e.key.includes("Soft") || e.key == "Enter") handleSoftkeys(e.key);

})
window.onerror = function (e) {
    console.error(e);
    // alert("This is a stack trace! Wow! --> %s", error.stack);
};

