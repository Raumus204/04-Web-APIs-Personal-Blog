// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightSwitch = document.querySelector(".switch-light");
const container = document.querySelector('.container');
const icon = document.getElementById("toggle");

// Check local storage for saved mode and set it
let mode = localStorage.getItem('mode') || 'light';
container.setAttribute('class', mode);
icon.innerHTML = mode === 'light' ? '&#x1F31E;' : '&#x1F318;';

//

// Event listener for toggle switch
lightSwitch.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    icon.innerHTML = "&#x1F318;";
    document.documentElement.style.setProperty('--circle-color', '#ff0022');
  } else {
    mode = 'light';
    container.setAttribute('class', 'light');
    icon.innerHTML = '&#x1F31E;';
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
  }
    // Save the current mode to local storage
  localStorage.setItem('mode', mode);
});



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const data = localStorage.getItem("formData");
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage() {
 
  let existingFormData = JSON.parse(localStorage.getItem('formData'));
  if(!existingFormData) {
    existingFormData = [];
  }
          //creating an object
  let formData = {
      username: username.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    }
  
          existingFormData.push(formData);
          localStorage.setItem("formData", JSON.stringify(existingFormData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
