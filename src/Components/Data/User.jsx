import reactLogo from '../../assets/react.png'
import laravelLogo from '../../assets/laravel.png'
import MongoDBlogo from '../../assets/MongoDB.png'
import ExpressLogo from '../../assets/expressJS.png'
import NodejsLogo from '../../assets/Nodejs.png'



const INFO = {

    main: {
        title: "Hafiz's Portfolio",
        name: "Hafiz Shukor",
        email: "hafizshukor03@gmail.com",
        
    },

    socials: {
        twitter: "https://twitter.com/HafizShukor",
        github: "https://github.com/Hafizshkr",
        linkedin: "https://www.linkedin.com/in/hafiz-shukor-881719185/",

    },

    homepage: {
        title: "Hi, I'm hafiz and I'm web developer wannabe",
        description: " I'm passionate about web development. Whenever I create something, I can feel the power it brings, granting me the freedom to implement whatever I imagine on the website. So, I use these skills to solve the problems I encounter. "
    },

    about: {
        title: "My name is Hafiz, I'm self taught coder",
        description: 
        " I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback. "
    },

    blog: {
        title: "Lorem ipsum ",
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    },

    projects:  [
        {
            title: "Project 1",
            description: 
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png', 
            linkText: "Source",
            lnk: "https://github.com" , 
        },

        {
            title: "Project 2",
            description: 
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png', 
            link: "Source",
            Source: "https://github.com" , 
        },

        {
            title: "Project 3",
            description: 
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png', 
            linkText: "Source",
            Source: "https://github.com" , 
        },

        {
            title: "Project 4",
            description: 
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png', 
            linkText: "Source",
            Source: "https://github.com" , 
        },
    ],

    stacksData: [
        
        { name: 'React', logo: reactLogo},
        { name: 'Nodejs', logo:  NodejsLogo},
        { name: 'MongoDB', logo: MongoDBlogo },
        { name: 'ExpressJs', logo: ExpressLogo},
        { name: 'Laravel', logo: laravelLogo},

    ]
}



export default INFO;