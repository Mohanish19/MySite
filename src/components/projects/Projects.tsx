import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/Mohanish19/CryptoFy",
            // background: "protege.jpg",
            background: "bg1",
            category: "JavaScript Project",
            title:"CryptoFy",
            subtitle: "A cryptocurrency application, providing the realtime details of the top 10 crypto coins along with cryptostatistics.",
            tech: [
                "html.jpg",
                "tailwindcss.png",
                "js.jpeg",
                "API.png",
                "coinGecko.jpg"
            ]
        },
        {
            link: "https://chat-app-4a37b.web.app/",
            // background: "medistat.jpg",
            background: "bg2",
            category: "JavaScript Project",
            title: "Chat Line",
            subtitle: "The Instant Messaging App with login and logout features.",
            tech:[
                "html.jpg",
                "tailwindcss.png",
                "js.jpeg",
                "firebase.png"
            ]
        },
        
        {
            link: "https://github.com/Mohanish19/PassWordManager",
            // background: "gtc2.jpeg",
            background: "bg3",
            category: "Python Project",
            title: "MBox Encryption",
            subtitle: "A password management tool, to encrypt and store passwords locally.",
            tech:[
                "python.png"
            ]
        },

        {
            link: "https://github.com/Mohanish19/Markdown-Blog",
                // background: "waste.jpg",
            background: "bg4",
            category: "Web App",
            title: "Markdown Blog",
            subtitle: "A blog site to create,read,undo,delete(CRUD) blogs with markdown feature.",
            tech:[
                "MongoDB.png",
                "express.png",
                "nodejs.jpg",
                ]
        },

        // {
        //     link: "https://github.com/nitashadhingra/Movie-Review-Analysis",
        //     // background: "mov.png",
        //     background: "bg5",
        //     category: "Machine Learning",
        //     title: "Movie Review Analysis",
        //     subtitle: "Sentiment Classification using Keras API",
        //     tech:[
        //         "tf.png",
        //         "keras.png"
        //     ]
        // },


        // {
        //     link: "https://github.com/nitashadhingra/Climate-Change-Analysis",
        //     // background: "climate.jpg",
        //     background: "bg6",
        //     category: "Machine Learning",
        //     title: "Climate Change Analysis",
        //     subtitle: "Used linear regression algo to study temperatures of earth.",
        //     tech:[
        //         "numpy.png",
        //         "scikit.png",
        //         "seaborn.png"
        //     ]
        // },

        {
            link: "https://github.com/Mohanish19/tasktracker",
            // background: "todo.jpeg",
            background: "bg7",
            category: "Web App",
            title: "ToDo List",
            subtitle: "My first react app to add and delete your daily todos",
            tech:[
                "reactjs.png",
                "css.jpg",
                "jsonserver.jpg"
            ]
        }
    ]

    return (
        <div id="project-sec">
            <div>
                <p className="heading sec">Featured <strong>Projects</strong></p>
            </div>

            
            <div className="card-grid">
                <ProjectCard info={projects} />
            </div>
        </div>
    )
}

export default Projects