// TODO: Create a variable that selects the form element
const formInfo = document.querySelector('#formInfo');
let username = document.querySelector('#username');
let title = document.querySelector('#title');
let content = document.querySelector('#content');
const errorElement = document.getElementById('error');


function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Check for missing data
    if (!username.value.trim() || !title.value.trim() || !content.value.trim()) {
        errorElement.textContent = "Please complete the form.";
    } else {
        // Create a blog post object
        const blogPost = {
            username: username.value.trim(),
            title: title.value.trim(),
            content: content.value.trim()
        };

        // Store form data in local storage
        storeLocalStorage(blogPost);

        // Redirect to the blog page
        redirectPage("blog.html");
    }
}

formInfo.addEventListener('submit', handleFormSubmission);