console.log ('JS OK');

const resultElement =  document.getElementById('result');

const ourTeam = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jpg'},
    { name: 'Angela Caroll', role: 'Chief Editor', image: 'angela-caroll-chief-editor.jpg'},
    { name: 'Walter Gordon', role: 'Office Manager', image: 'walter-gordon-office-manager.jpg'},
    { name: 'Angela Lopez', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg'},
    { name: 'Scott Estrada', role: 'Developer', image: 'scott-estrada-developer.jpg'},
    { name: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg'}
    
];

console.log(ourTeam);



const createCardFromElement = (object) => {
    const div = document.createElement('div');
    div.classList.add('col');
    const image = document.createElement('img');
    image.src = `img/${object.image}`;
    const paragraph = document.createElement('h4');
    paragraph.append(object.name);
    const role = document.createElement('h6');
    role.append(object.role);
    div.appendChild(image);
    div.appendChild(paragraph);
    div.appendChild(role);
   
    
    return div;
}


for (let person of ourTeam) {
   
    console.log(person);

    const card = createCardFromElement(person);

    resultElement.appendChild(card);
   
    
}




