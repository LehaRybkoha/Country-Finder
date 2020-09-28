const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = () => {
    getDataFromInput();
};
function getDataFromInput() {
    let inputData = document.getElementById('searchInput').value.split(',');
    return setDataFromFunc(inputData.map((item) => item.trim()))
}

function setDataFromFunc(inputData) {
    const resultList = document.getElementById('resultList')
    return inputData.forEach((item, i, arr) => {
        resultList.insertAdjacentHTML('beforeend', `
            <li>${item}</li>
        `);
    });
}