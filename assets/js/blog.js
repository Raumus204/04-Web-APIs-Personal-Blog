// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("#main");
const backButton = document.querySelector("#back");
const articleList = document.querySelector("#list");
// TODO: Create a function that builds an element and appends it to the DOM
let formData = JSON.parse(localStorage.getItem("formData")) || [];
function renderArticles() {
    for (let i = 0; i < formData.length; i++) {
        const li = document.createElement('li');
        const article = document.createElement('article');
        
        li.classList.add('card');
        li.setAttribute('data-index', i);
        
        let h2 = document.createElement('h2');
        h2.textContent = formData[i].username
        let blockquote = document.createElement('blockquote');
        blockquote.textContent = formData[i].title
        let p = document.createElement('p');
        p.textContent = "Posted By: " + formData[i].content

        li.appendChild(article);
        articleList.appendChild(li);
        article.appendChild(h2);
        article.appendChild(blockquote);
        article.appendChild(p);

    }
};
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPosts() { 
    if (formData.length === null)
        console.log("No blog posts")
        mainElement.innerText = "No Blog Posts"

};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (formData.length > 0) {
        renderArticles();
    } else {
        noBlogPosts();
    }
};
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function() {
    redirectPage("index.html");
    console.log("yes you clicked on me idk why i dont work");
});