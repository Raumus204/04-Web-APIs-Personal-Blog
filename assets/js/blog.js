// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backButton = document.querySelector("#back");
const mainElement = document.querySelector("#main");
const articleList = document.querySelector("#list");

const todos = [];
// TODO: Create a function that builds an element and appends it to the DOM
function renderArticles() {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const li = document.createElement('li');
        li.textContent = todo;
        li.setAttribute('data-index', i);
        
        articleList.appendChild(li);
    }
}
// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.


// TODO: Call the `renderBlogList` function


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener("click", function() {
    redirectPage("index.html");
    console.log("yes you clicked on me idk why i dont work");
});
