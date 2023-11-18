const AIP_code = `09f407f8867a9b9782aad5111f4f30bc` 

const getData = ()=> {
    const searchValue = document.getElementById('inputFild');
    const searchText =searchValue.value;
    searchValue.value = '';
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${AIP_code}&units=metric`;
     fetch(Url)
     .then(res => res.json())
     .then(data => showData(data))

};


const showData = temp =>{
document.getElementById('CityName').innerText = temp.name;
document.getElementById('wether').innerText = temp.weather[0].main;
document.getElementById('tempetature').innerText= temp.main.temp;
// set wether icon
const url = ` https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
const wetherIcon = document.getElementById('icon');
wetherIcon.setAttribute('src',url);

// console.log(temp);
}