document.addEventListener("DOMContentLoaded", function() {
    const lights = document.querySelectorAll('.lights');
    const redButton = document.querySelector('.Red');
    const yellowButton = document.querySelector('.Yellow');
    const greenButton = document.querySelector('.Green');
    const allButton = document.querySelector('.All');
    const alternativeButton = document.querySelector('.Alternative');

    let currentIndex = 0;

    redButton.addEventListener('click', function() {
        lights.forEach(light => {
            light.style.backgroundColor = 'black';
        });
        lights[0].style.backgroundColor = 'red';
    });

    yellowButton.addEventListener('click', function() {
        lights.forEach(light => {
            light.style.backgroundColor = 'black';
        });
        lights[1].style.backgroundColor = 'yellow';
    });

    greenButton.addEventListener('click', function() {
        lights.forEach(light => {
            light.style.backgroundColor = 'black';
        });
        lights[2].style.backgroundColor = 'green';
    });

    allButton.addEventListener('click', function() {
        lights[0].style.backgroundColor = 'red';
        lights[1].style.backgroundColor = 'yellow';
        lights[2].style.backgroundColor = 'green';
    });

    alternativeButton.addEventListener('click', function() {
        lights.forEach(light => {
            light.style.backgroundColor = 'black';
        });

        function changeLight() {
            lights.forEach(light => {
                light.style.backgroundColor = 'black';
            });

            lights[currentIndex].style.backgroundColor = ['red', 'yellow', 'green'][currentIndex];
            alternativeButton.style.backgroundColor = ['red', 'yellow', 'green'][currentIndex];

            currentIndex = (currentIndex + 1) % 3;

            setTimeout(changeLight, 5000); 
        }

        changeLight();
    });
});
