function showData(response) {
    let color = response.data;
    console.log(color)
    const trafficColor1 = document.querySelector('#color1');
    const trafficColor2 = document.querySelector('#color2');
    const trafficColor3 = document.querySelector('#color3');

    trafficColor1.style.background = color[0].col1;
    trafficColor2.style.background = color[0].col2;
    trafficColor3.style.background = color[0].col3;
}

function setColor(event) {
    const color1 = document.querySelector('#set1').value;
    const color2 = document.querySelector('#set2').value;
    const color3 = document.querySelector('#set3').value;

    let color = {
        col1: color1,
        col2: color2,
        col3: color3
    }

    const url = "https://traffic-color.herokuapp.com/color";
    axios.post(url, color).then(showData)
}

function getColor() {
    const url = "https://traffic-color.herokuapp.com/color";
    axios.get(url).then(showData)
} 


const btnSetColor = document.querySelector('#setAllColor')
btnSetColor.addEventListener('click', setColor)

setInterval(getColor, 5000)