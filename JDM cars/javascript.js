

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btn = document.getElementById('btn');
    const dayNightIcon = document.getElementById('dayNightIcon');

    let day = true; 

    btn.addEventListener('click', () => {
        if (day) {
            dayNightIcon.src = 'pictures/sun.png';
            body.style.backgroundColor = '#999999'; 
        } else {
            dayNightIcon.src = 'pictures/moon.png'; 
            body.style.backgroundColor = 'white'; 
        }
        day = !day;
    });
});
