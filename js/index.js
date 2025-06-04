const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Hlaing Ei ${thisYear}`;

footer.appendChild(copyright);
document.body.appendChild(footer);

const skills = ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
// Select the form by name
const messageForm = document.forms["leave_message"];

// Add event listener to handle form submission
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submit behavior

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log the values to the console
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

const messageSection = document.querySelector("#messages");

const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");

newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span> wrote: ${usersMessage}</span>
`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

messageForm.reset();

});

// Creating fetch
fetch("https://api.github.com/users/Serena-Tun/repos")
  .then(response => response.json())
  .then(data => {
    const repositories = data;
    console.log(repositories); 

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

// Creating for loop
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error("Error fetching GitHub repos:", error);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    const errorMsg = document.createElement("li");
    errorMsg.innerText = "Failed to load projects. Please try again later.";
    projectList.appendChild(errorMsg);
  });
