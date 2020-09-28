const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = () => {
    app();
};
const app = () => {

    function getDataFromInput() {
        const resultList = document.getElementById('resultList')
        let inputData = document.getElementById('searchInput').value.split(',');
        let formattedData = inputData.map((item) => item.trim())
        formattedData.forEach((item, i, arr) => {
            resultList.insertAdjacentHTML('afterbegin', `
            <li class="result__item">${item}<span></span></li>
        `);
            document.querySelector('.result__item span').classList.add(`arr-item-${arr[i]}`)
            const api = `https://restcountries.eu/rest/v2/name/${arr[i]}`.replace(/%20/g, '')
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { capital } = data[0];
                    //Set DOM Elements from the API
                    document.querySelector(`.arr-item-${arr[i]}`).textContent = capital
                })
        });

        return formattedData
    }
    getDataFromInput()

}



//https://restcountries.eu/rest/v2/name/{YourNameCountry}?fields=capital