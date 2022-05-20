let About = document.getElementById("About");
let Skills = document.getElementById("Skills");
let Qualifications = document.getElementById("Qualifications");
let Experience = document.getElementById("Experience");
let Contact = document.getElementById("Contact");
let Project = document.getElementById("Project");

nav_Click_();

function nav_Click_() {
    
    if(sessionStorage.getItem("screen_name") == "Project")
    {
        About.style="display: none";
        Skills.style="display: none";
        Qualifications.style="display: none";
        Experience.style="display: none";
        Contact.style="display: none";
        Project.style="display: flex";
    }
    else if(sessionStorage.getItem("screen_name") == "Skills")
    {
        About.style="display: none";
        Skills.style="display: flex";
        Qualifications.style="display: none";
        Experience.style="display: none";
        Contact.style="display: none";
        Project.style="display: none";
    }
    else if(sessionStorage.getItem("screen_name") == "Qualifications")
    {
        About.style="display: none";
        Skills.style="display: none";
        Qualifications.style="display: flex";
        Experience.style="display: none";
        Contact.style="display: none";
        Project.style="display: none";
    }
    else if(sessionStorage.getItem("screen_name") == "Experience")
    {
        About.style="display: none";
        Skills.style="display: none";
        Qualifications.style="display: none";
        Experience.style="display: flex";
        Contact.style="display: none";
        Project.style="display: none";
    }
    else if(sessionStorage.getItem("screen_name") == "Contact")
    {
        About.style="display: none";
        Skills.style="display: none";
        Qualifications.style="display: none";
        Experience.style="display: none";
        Contact.style="display: flex";
        Project.style="display: none";
    }
    else
    {
        About.style="display: flex";
        Skills.style="display: none";
        Qualifications.style="display: none";
        Experience.style="display: none";
        Contact.style="display: none";
        Project.style="display: none";

    }

}



function nav_Click(value) {
    sessionStorage.setItem("screen_name", value);
    nav_Click_();
}








