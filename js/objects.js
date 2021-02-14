const nameArray1 = [
    "Buddy",
    "Bella",
    "Coconut",
    "Charlie",
    "Dory",
    "Muffin",
    "Peanut", 
];
const nameArray2 = [
    "Apple Pie",
    "Bingo",
    "Freckles",
    "Jellybean",
    "Kiwi",
    "Leia",
    "Olive"
];
const nameArray3 = [
    "Prince",
    "Shadow", 
    "Teddy",
    "Waffle",
    "Zelda",
    "Lad", 
    "Toto" 
];


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

date = yyyy + '-' + mm + '-' + dd;

const objectUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + date + "&end_date=" + date + "&api_key=skMIlYVflrBKlTx05WV0iuEr5j3bGiDgbNFeQj7a";
const objectContainer = document.querySelector(".objects-container");
const loader = document.querySelector(".loader");
const randomName1 = nameArray1[Math.floor(Math.random()*nameArray1.length)];
const randomName2 = nameArray2[Math.floor(Math.random()*nameArray2.length)];
const randomName3 = nameArray3[Math.floor(Math.random()*nameArray3.length)];

async function fetchObjects() {

    try {
        const response = await fetch(objectUrl);

        const results = await response.json();

        objectsHtml(results.near_earth_objects);

    } catch (error) {
        console.log(error);
        loader.style.display = "none";
        objectContainer.innerHTML = `<div class="api-error"><p>The Asteroid News couldn't be loaded.</p> <p>We'll try to fix it - please, check back later!</p></div>`;
    }
}
fetchObjects();


function objectsHtml(objects) {

    const obj = objects[date];

    sortObj(obj);

    const diameter0 = Math.round(obj[0].estimated_diameter.meters.estimated_diameter_max);
    const diameter1 = Math.round(obj[1].estimated_diameter.meters.estimated_diameter_max);
    const diameter2 = Math.round(obj[2].estimated_diameter.meters.estimated_diameter_max);

    let distance0 = Math.round(obj[0].close_approach_data[0].miss_distance.kilometers / 1000000 * 10) / 10 + " mill km";
    let distance1 = Math.round(obj[1].close_approach_data[0].miss_distance.kilometers / 1000000 * 10) / 10 + " mill km";
    let distance2 = Math.round(obj[2].close_approach_data[0].miss_distance.kilometers / 1000000 * 10) / 10 + " mill km";

    if (distance0 === 0 + " mill km"){
        distance0 = Math.round(obj[0].close_approach_data[0].miss_distance.kilometers / 1000) + " thousand km";
    }
    if (distance1 === 0){
        distance1 = Math.round(obj[0].close_approach_data[0].miss_distance.kilometers / 1000) + " thousand km";
    }
    if (distance2 === 0){
        distance2 = Math.round(obj[0].close_approach_data[0].miss_distance.kilometers / 1000) + " thousand km";
    }

    objectContainer.innerHTML = "";

    loader.style.display = "none";
    
    objectContainer.innerHTML += `  <li>${obj[0].name}, let's call it <strong>${randomName1}</strong>. ${randomName1} is ${diameter0} m wide and only <strong>${distance0}</strong> away.</li>
                                    <li><strong>${randomName2}</strong> ${obj[1].name}, is ${diameter1} m wide, and <strong>${distance1}</strong> from Earth today.</li>
                                    <li>Lastly, we have <strong>${randomName3}</strong> ${obj[2].name}. It's ${diameter2} m wide and passing <strong>${distance2}</strong> away.</li>
    `;
};

function sortObj(obj) {
     var newObj = obj.sort (
          function(a,b) {
            let aDistance = parseFloat(a.close_approach_data[0].miss_distance.kilometers);
            let bDistance = parseFloat(b.close_approach_data[0].miss_distance.kilometers);
           if(aDistance > bDistance) {
                return 1;
              } else if(aDistance < bDistance) {
                  return -1;
              } else {
                  return 0;
              }
          }
      );
  };

  
