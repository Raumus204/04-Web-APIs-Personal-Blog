// TODO: Create a variable that selects the form element
const form = document.querySelector('#formInfo');
const userName = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const errorElement = document.querySelector("#error");
const submitButton = document.querySelector("#submit");
const formData = [];


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handler(event) {
    event.preventDefault(); // Prevent default form submission
   

    // Check if any of the fields are empty
    if (!userName.value.trim() || !title.value.trim() || !content.value.trim()) {
        errorElement.innerHTML = "Please complete the form";
    } else {
        let data = {
            userName: userName.value.trim(),
            title: title.value.trim(),
            content: content.value.trim(),
          };
          formData.push(data);
          data.value = '';
 
        localStorage.setItem("formData", JSON.stringify(formData));
        redirectPage("blog.html"); 
    }
}
    
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handler);