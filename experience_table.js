var showExperienceTable = false
document.getElementById("experience_toggle").onclick = function() {
    const experience_table = document.getElementById("experience_table")
    showExperienceTable = !showExperienceTable
    experience_table.style.display = showExperienceTable ? "block" : "none"
    
    const experience_toggle = document.getElementById("experience_toggle")
    experience_toggle.innerHTML = showExperienceTable ? "experience.kill()" : "./experience"
}

const experiences = [
    {
        title: 'ASU Bike Co-Op- Bike Mechanic',
        description: 'Asssited customers in detecting and fixing bike problems. Actively worked in a team environment to assist and finsh projects. I replced tires, tubes wheels and brakes aon a daily basis both by myself and with co-workers. Inaddition to this I built bikes from scratch.'
    },
    {
        title: 'GAP Inc. 2021 Learning Experience',
        description: 'Appied and went through a rigorous interview process. Learned multiple soft and hard skills that are used in engineering projects. I also successfully learned Scrum and Agile and used them in active team work/project environments. All the while Leanring from and talking to engineers and tech members at GAP Inc.'
    },
   
]

tableElem = document.getElementById("experience_table")

for (var i = 0; i < experiences.length; i++) {
    experienceRow = document.createElement('tr');
    experienceRow.className = "experience-entry"

    titleCol = document.createElement('td');
    titleCol.className = "experience-title"
    titleCol.appendChild(document.createTextNode(experiences[i].title)); //to print cell number

    descriptionCol = document.createElement('td');
    descriptionCol.className = "experience-desc"
    descriptionCol.appendChild(document.createTextNode(experiences[i].description)); //to print cell number
    
    experienceRow.appendChild(titleCol);
    experienceRow.appendChild(descriptionCol);

    tableElem.appendChild(experienceRow);
}