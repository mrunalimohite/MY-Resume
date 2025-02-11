document.querySelector(".footer-iconTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


//download resume 
document.getElementById("downloadResume").addEventListener("click", () => {
    window.open('My Resume.pdf', '_blank');
});

//hover effecy for projects
document.querySelectorAll(".project-details").forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "scale(1.02)";
    });
    project.addEventListener("mouseleave", () => {
        project.style.transform = "scale(1)";
    });
});