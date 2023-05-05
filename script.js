// Get the navigation menu and all the links inside it
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the ID of the section to scroll to
    const sectionId = link.getAttribute('href').slice(1);

    // Scroll to the section with a smooth animation
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get the two resume buttons and add click event listeners to them
const resumeButton1 = document.getElementById('resume-button-1');
const resumeButton2 = document.getElementById('resume-button-2');

resumeButton1.addEventListener('click', () => {
  window.open('https://example.com/resume.pdf', '_blank');
});

resumeButton2.addEventListener('click', () => {
  window.open('https://example.com/resume.pdf', '_blank');
});

// Get the two resume links and add click event listeners to them
const resumeLink1 = document.getElementById('resume-link-1');
const resumeLink2 = document.getElementById('resume-link-2');

resumeLink1.addEventListener('click', () => {
  window.open('https://example.com/resume.pdf', '_blank');
});

resumeLink2.addEventListener('click', () => {
  window.open('https://example.com/resume.pdf', '_blank');
});

// Get the project cards and add click event listeners to them
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const deployedLink = card.querySelector('.project-deployed-link').getAttribute('href');
    window.open(deployedLink, '_blank');
  });
});
