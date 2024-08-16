// Function to handle the "Add Blog" button click
function addBlog() {
    // Get the input values from the form
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    // Create a new blog card element
    const newBlogCard = document.createElement('div');
    newBlogCard.classList.add('blog-card');

    // Create and set up the blog title element
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = titleInput.value || 'Untitled';

    // Create and set up the blog description element
    const blogDescription = document.createElement('p');
    blogDescription.textContent = descriptionInput.value || 'No description provided.';

    // Create and set up the blog date element
    const blogDate = document.createElement('span');
    blogDate.textContent = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Append elements to the new blog card
    newBlogCard.appendChild(blogTitle);
    newBlogCard.appendChild(blogDescription);
    newBlogCard.appendChild(blogDate);

    // Add the new blog card to the blog cards container
    const blogCardsContainer = document.querySelector('.blog-cards');
    blogCardsContainer.appendChild(newBlogCard);

    // Clear the input fields
    titleInput.value = "";
    descriptionInput.value = "";
}

// Add event listener to the "Add Blog" button
document.querySelector('.add-blog-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    addBlog();
});
