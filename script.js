document.addEventListener("DOMContentLoaded", function() {
    // Sample data
    const projects = [
        { title: "Website Portfolio", description: "Demonstrates proficiency in HTML, CSS, and JavaScript. Shows ability to create a responsive and visually appealing web design. Highlights understanding of front-end development best practices." },
        { title: "Project 2", description: "Description of Project 2" }
    ];

    const resumeContent = `
        <h3>Experience</h3>
        <p>Details about your experience.</p>
        <h3>Education</h3>
        <p>Details about your education.</p>
    `;

    const blogPosts = [
        { title: "Blog Post 1", content: "Content of Blog Post 1" },
        { title: "Blog Post 2", content: "Content of Blog Post 2" }
    ];

    // Render projects
    const projectList = document.querySelector(".project-list");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectElement);
    });

    // Render resume content
    const resumeDiv = document.querySelector(".resume-content");
    resumeDiv.innerHTML = resumeContent;

    // Render blog posts
    const blogPostsDiv = document.querySelector(".blog-posts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsDiv.appendChild(postElement);
    });
});
