const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');
const iconSection = document.querySelector('.icon');

const API_KEY = '5eb708f859ac5ef2113c95970fa5ac12';

const button = document.querySelector('.button');

// 날씨 설명 매핑 테이블
const weatherDescriptions = {
    '맑음': '맑음',
    '흐림': '흐림',
    '흐린 하늘': '흐림',
    '구름': '구름 낌',
    '구름 조금': '구름 조금',
    '구름 많음': '구름 많음',
    '온흐림': '흐림',
    '실 비': '가벼운 비',
    '실비': '가벼운 비',
    '비': '비',
    '강한 비': '강한 비',
    '소나기': '소나기',
    '약한 비': '약한 비',
    '중간 비': '중간 비',
    '강한 소나기': '강한 소나기',
    '눈': '눈',
    '강한 눈': '강한 눈',
    '진눈깨비': '진눈깨비',
    '안개': '안개',
    '소낙눈': '소낙눈',
    '우박': '우박',
    '천둥번개': '천둥번개'
};

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(latitude, longitude);
};

const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
        .then((response) => response.json()) // Response를 JSON으로 변환
        .then((json) => {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            let description = json.weather[0].description;
            const icon = json.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            // 날씨 설명을 매핑 테이블을 이용해 변환
            description = weatherDescriptions[description] || description;

            tempSection.innerText = temperature+" ℃";
            placeSection.innerText = place;
            descSection.innerText = description;
            iconSection.setAttribute('src', iconURL);
        })
        .catch((error) => {
            alert(error);
        });
}

const fail = () => {
    alert("좌표를 받아올 수 없음");
}