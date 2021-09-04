const fullName = 'Johhnhy English'
const position = '.Net Developer'
const desc = 'I am a student'
const interest = ['Watching anime', 'Music and Band', 'Play my bird']
const pastExperience = [
    {
        'title': 'Internship',
        'company': 'PWU',
        'desc': 'Fix any computer CSS related things'
    },
    {
        'title': 'Database Admin (Plantilla Position)',
        'company': 'LGU',
        'desc': 'Manage database of the municipality priority the HR Dept. and CCTV Footage'
    }
]

function displayPosition(name,jobtitle,desc) {
    console.log(name.toUpperCase())
    console.log(jobtitle)
    console.log(desc)
}

function displaySkill (skillName,isCool) {
    if (isCool==true) {
        console.log('* BAM: '+skillName)
    }
    console.log('* ' + skillName)
}

//Display the Resume
displayPosition(fullName,position,desc)
console.log('My Interests: ')
interest.forEach(names => {
    console.log('* ' + names)
});
console.log('My Previous Experience: ')
pastExperience.forEach(element => {
    console.log(element)
});
displaySkill('C#',true)
displaySkill('.NET',true)
displaySkill('Java',false)
displaySkill('Cobalt',false)


