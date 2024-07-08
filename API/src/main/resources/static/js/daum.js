var mapContainer, map, geocoder, marker;

function initializeMap() {
    mapContainer = document.getElementById('mapd');
    var mapOption = {
        center: new daum.maps.LatLng(37.537187, 127.005476),
        level: 5
    };

    map = new daum.maps.Map(mapContainer, mapOption);
    geocoder = new daum.maps.services.Geocoder();
    marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(37.537187, 127.005476),
        map: map
    });
}

function sample5_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = data.address;
            document.getElementById("sample5_address").value = addr;

            geocoder.addressSearch(data.address, function(results, status) {
                if (status === daum.maps.services.Status.OK) {
                    var result = results[0];
                    var coords = new daum.maps.LatLng(result.y, result.x);

                    mapContainer.style.display = "block";
                    map.relayout();
                    map.setCenter(coords);
                    marker.setPosition(coords);
                }
            });
        }
    }).open();
}

// 페이지 로드 시 지도 초기화
window.onload = function() {
    initializeMap();
};

// 모달 창 띄우기
function showMap() {
    var modal = document.getElementById("mapModal");
    modal.style.display = "block";

    var address = document.getElementById("sample5_address").value;
    var detailAddress = document.getElementById("detailAddress").value;
    var fullAddress = address + " " + detailAddress;

    if (!map) {
        initializeMap();
    }

    geocoder.addressSearch(fullAddress, function(results, status) {
        if (status === kakao.maps.services.Status.OK) {
            var result = results[0];
            var coords = new kakao.maps.LatLng(result.y, result.x);

            map.relayout();
            map.setCenter(coords);
            marker.setPosition(coords);
        } else {
            alert("주소를 찾을 수 없습니다.");
        }
    });
}

// 모달 닫기
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("mapModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("mapModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}