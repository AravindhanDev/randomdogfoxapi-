const fox_results = document.getElementById('fox-results');
const dog_results = document.getElementById('dog-results');
const fox_btn = document.getElementById('fox-btn');
const dog_btn = document.getElementById('dog-btn');

fox_btn.addEventListener('click', getRandomFox);
dog_btn.addEventListener('click', getRandomDog);

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
        .then((res) => res.json())
        .then((data) => {
            fox_results.innerHTML = `<img src="${data.image}" alt="fox-img" />`;
        });
}

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then((res) => res.json())
        .then((data) => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            } else {
                dog_results.innerHTML = `<img src="${data.url}" alt="dog-img" />`;
            }
        });
}