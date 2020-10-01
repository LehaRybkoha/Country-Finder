const submitBtn = document.getElementById('submitBtn');
const searchInput = document.getElementById('searchInput');

submitBtn.onclick = () => {
    if (searchInput.value.length > 0) {
        getDataFromInput();
    }
};
//Allows you to send data by Enter button
searchInput.onkeydown = () => {
    if (event.keyCode === 13) {
        getDataFromInput();
    }
};
searchInput.oninput = () => {
    makeInputWiderWhileTyping(searchInput);
};

//Func that Jaden Cases each item
function toJadenCase(str) {
    let oldArr = str.toLowerCase().split(' ');
    let newArr = [];
    for (let value of oldArr) {
        value = value[0].toUpperCase() + value.slice(1);
        newArr.push(value);
    }
    return newArr.join(' ');
}

//Func that makes input wider, while typing
function makeInputWiderWhileTyping(input) {
    const heightLimit = 400;
    input.style.height = '';
    input.style.height = Math.min(input.scrollHeight, heightLimit) + 'px';
}

//Func that gets data from input and builds <li>
function getDataFromInput() {
    event.preventDefault();

    const resultList = document.getElementById('resultList');
    //Get Data from input and separate it by ','
    let inputData = searchInput.value.split(',');
    //Delete spaces from each side
    let formattedData = inputData.map((item) => item.trim());

    //Get data from API and find the same item in formattedData and make a new <li>
    formattedData.forEach((item, i, arr) => {
        let api = `https://restcountries.eu/rest/v2/name/${arr[i]}`;
        resultList.insertAdjacentHTML('afterbegin', `<li class="result__item">${toJadenCase(item)}<span></span></li>`);
        document.querySelector('.result__item span').classList.add(`arr-item-${arr[i]}`);

        //API
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {capital} = data[0];
                //Set DOM Elements from the API
                document.querySelector(`.arr-item-${arr[i]}`).textContent = capital
            })
            .catch(() => {
                alert('Please, type a country without mistakes in English language');
                document.querySelector('.result__item').remove()
            })
    });

    searchInput.value = '';
    return formattedData
}