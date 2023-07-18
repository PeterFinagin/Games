
// All possible ways of making an API calls in JS "https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b"

// XMLHttpRequest() (dont work)
// function sendRequest() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "http://api.openweathermap.org/data/2.5/weather?"+ new URLSearchParams({
//         appid: "ea4039df735bb7ce2c7c0cc4aaa17c6b",
//         q: document.getElementById('city').value,
//         units: document.getElementById("units").value
//     }));
//     request.send();
//     request.onload = () => {
//         // console.log(request);
//         if (request.status == 200) {
//             console.log(JSON.parse(request.response));
//             // document.getElementById("wind").innerHTML = JSON.parse.wind.speed;
//         } else {
//             console.log(`error ${request.status} ${request.statusText}`);
//         }
//     }
//     document.getElementById("wind").innerHTML = ? ;
// }





/* just fetch */
// function sendRequest(){
//     fetch("http://api.openweathermap.org/data/2.5/weather?"+ new URLSearchParams({
//         appid: "ea4039df735bb7ce2c7c0cc4aaa17c6b",
//         q: document.getElementById('city').value,
//         units: document.getElementById("units").value
//     }))
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             console.log(data.wind.speed)
//             document.getElementById("wind").innerHTML = data.wind.speed;
//         })
// }

/* fetch with async and await */
// function sendRequest() {
//     async function Request() {
//         let response = await fetch("http://api.openweathermap.org/data/2.5/weather?"+ new URLSearchParams({
//             appid: "ea4039df735bb7ce2c7c0cc4aaa17c6b",
//             q: document.getElementById('city').value,
//             units: document.getElementById("units").value
//         }))
//         let data = await response.json();
//         return data;
//     }
// Request().then(data => {
//     console.log(data)
//     console.log(data.wind.speed)
//     document.getElementById("wind").innerHTML = data.wind.speed;
// });
// }


/* axios by CDN */
/* or */
/* axios with node (don't work) */
// function sendRequest() {
//     axios.get("http://api.openweathermap.org/data/2.5/weather?"
//         + new URLSearchParams({
//         appid: "ea4039df735bb7ce2c7c0cc4aaa17c6b",
//         q: document.getElementById('city').value,
//         units: document.getElementById("units").value
//     }))
//         .then(response => {
//             console.log(response);
//             console.log(response.data.wind.speed);
//             document.getElementById("wind").innerHTML = response.data.wind.speed;
//         })
//         .catch(error => console.log(error));
// }



/* jQuery method $.ajax() */
// function sendRequest() {
//     $(document).ready(function () {
//         $.ajax({
//             url: "http://api.openweathermap.org/data/2.5/weather?"
//                 + new URLSearchParams({
//                     appid: "ea4039df735bb7ce2c7c0cc4aaa17c6b",
//                     q: document.getElementById('city').value,
//                     units: document.getElementById("units").value
//                 }),
//             type: "GET",
//             success: function (result) {
//                 console.log(result);
//                 document.getElementById("wind").innerHTML = result.wind.speed;
//             },
//             error: function (error) {
//                 console.log(error);
//             }
//         })
//     })
// }
