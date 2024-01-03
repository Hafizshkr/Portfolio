import cardscolumn from "../../assets/cards-column.jpg"
import news from "../../assets/Newsllter.jpg"
import pass from "../../assets/PasswordGenerator.jpg"




const CardData = {
    "projects":  [
        
        {   
            "id": 1,
            "title": "Password Generator",
            "description": 
            "I am learning how to use JavaScript to mix the alphabet and generate a password, along with a copy function.",
            
            "link": "https://password-generator-eight-livid.vercel.app/",
            "source": "https://github.com/Hafizshkr/passwordGenerator" , 
            "stacks": ["HTML", "CSS" ,"Javascript"],
            "tags": "Challenge",
            "img": pass,
        },
        
        {
            "id": 2,
            "title": "Newsletter Signup ",
            "description": 
                "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
            "img": 'https://cdn.jsdelivr.net/npm/programming-languages-imgs/src/html/html.png', 
            "link": "https://newsletter-sign-up-with-success-message-rho.vercel.app/",
            "source": "https://github.com/Hafizshkr/newsletter-sign-up-with-success-message" , 
            "stacks": ["HTML", "CSS" ,"Javascript"],
            "tags": "Challenge",
            "img": news,
            
        },
        {   
            "id": 3,
            "title": "Card Component",
            "description": 
                "This is a solution to the 3-column preview card component challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
            "img": 'https://cdn.jsdelivr.net/npm/programming-languages-imgs/src/javascript/javascript.png', 
            "link": "https://3-column-preview-card-component-theta-dusky.vercel.app/",
            "source": "https://github.com/Hafizshkr/3-column-preview-card-component" , 
            "stacks": ["HTML", "CSS" ],
            "tags": "Challenge",
            "img": cardscolumn,
        },
    
        {   
            "id": 4,
            "title": "Project 4",
            "description": 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque et massa lacinia eleifend. Curabitur nec metus nec arcu venenatis lobortis.",
            "img": 'https://cdn.jsdelivr.net/npm/programming-languages-imgs/src/javascript/javascript.png', 
            "link": "/",
            "source": "https://github.com" , 
            "stacks": ["React" , "NodeJS", "MongoDB", "ExpressJS"],
            "tags": "Client"
            
        },
    ],

    "stacksData": [
        
        { "name": 'React', "img": "reactimg"},
        { "name": 'Nodejs', "img":  "Nodejsimg"},
        { "name": 'MongoDB', "img": "MongoDBimg" },
        { "name": 'ExpressJs', "img": "Expressimg"},
        { "name": 'Laravel', 'img': "laravelimg"},

    ],
}

export default CardData