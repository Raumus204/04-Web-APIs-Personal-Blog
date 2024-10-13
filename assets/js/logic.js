// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightSwitch = document.querySelector(".switch-light");
const container = document.querySelector('.container');
const icon = document.getElementById("toggle");

// Check local storage for saved mode and set it
let mode = localStorage.getItem('mode') || 'light';
container.setAttribute('class', mode);
icon.innerHTML = mode === 'light' ? '&#x1F31E;' : '&#x1F318;';

// Event listener for toggle switch
lightSwitch.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    icon.innerHTML = "&#x1F318;";
  } else {
    mode = 'light';
    container.setAttribute('class', 'light');
    icon.innerHTML = '&#x1F31E;';
  }
    // Save the current mode to local storage
  localStorage.setItem('mode', mode);
});


  

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  // Retrieve data from local storage using the key "formData"
  const data = localStorage.getItem("formData");
  
  // Check if data exists; if not, return an empty array
  return data ? JSON.parse(data) : [];
  
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(formData) {
 
localStorage.setItem("formData", JSON.stringify(formData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

