import {useState} from 'react';
import Card from "../Card";
import './resume.css';

const Resume = () => {

  const [educaton, setEducation] = useState([
    {
      dates: "Batch of 2023",
      title: "B.E, Electronics and Telecommunication",
      subtitle: "Government College of Engineering, Nagpur",
      description: "CGPA: 8.11"
    },
    // {
    //   dates: "Batch of 2019",
    //   title: "Grade XII",
    //   subtitle: "Shri Nirala Junior College, Nagpur",
    //   description: "Percentage: 66%"
    // },
    // {
    //   dates: "Batch of 2017",
    //   title: "Grade X",
    //   subtitle: "Seventh Day Adventist Higher Secondary School, Nagpur",
    //   description: "Percentage: 67%"
    // },
  ]);


  const [experience, setExperience] = useState([
    {
      dates: "2021",
      title: "Virtual Internship",
      subtitle: "Microsoft",
      description: "Got hand's on experience with Microsoft Azure, built AI based fitness bot. Awarded with certificate of completion as a part of Future Ready Talent Program."
    },
      {
        dates: "2021",
        title: "Java",
        subtitle: "Coding Ninjas",
        description: "Gained basic to advanced knowledge of Java. Awarded with certificate of Excellence."
      },
      
      {
        dates: "2022",
        title: "Amazon Web Services (AWS) ",
        subtitle: "NASSCOM",
        description: "AWS Cloud Masterclass ‑ Cloud Practitioner Essentials"
      },
    ]);
  
    
  
    const [achievements, setAchievements] = useState([
      {
        dates: "2021",
        title: "Winner",
        subtitle: "Devfest India",
        description: "DevFest is an annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers."
      },
      {
        dates: "2021",
        title: "Finalist",
        subtitle:"Code for Good Hackathon",
        description: "Code for Good Hackathon at Next Wave Technologies. Developed JavaScript App as a solution to a Healthcare issue. Bagged 4th prize out of 210+ teams"
      },
      {
        dates: "2020",
        title: "Tech Lead",
        subtitle: "GCE Nagpur",
        description: "Helped organised sessions and conferences on various computing domains and career guidance. Volunteered at the annual, national event DSC 2020 to publish content."
      },
      {
        dates: "2021",
        title: "Content Creator",
        subtitle: "Feel and Vibe Youtube Channel",
        description: "Created and managed youtube channel with 1k+ subscribers and 4lakhs+ views"
      },
    ]);


    const [community, setCommunity] = useState([
      {
        dates: "July 2023 - Present",
        title: "Software Engineering Intern",
        subtitle: "LightMetrics Technologies",
        description: "Working with backend team to develop fast and reliable RESTful API's using NodeJS and PostgreSQL"
      },
      // {
      //   dates: "March 2020 - March 2021",
      //   title: "LeanIn IGDTUW",
      //   subtitle:"Mentor",
      //   description: "Small groups of women who come together for gaining technical expertise and peer support. Mentored the DSA circle, a batch of 150 female students, helping the women in STEM build their problem solving skills."
      // },
      // {
      //   dates: "August 2019 - September 2020",
      //   title: "IEEE IGDTUW",
      //   subtitle: "Publishing Head",
      //   description: "Helped organised sessions and conferences on various computing domains and career guidance. Designed and published posters and certificates for various events conducted, designed the annual IEEE brochure and newsletter. Volunteered at the annual, national event DSC 2019 to publish content."
      // },
      // {
      //   dates: "2020 - 2021",
      //   title: "Innerve IGDTUW",
      //   subtitle: "Core Member",
      //   description: "Organised annual techfest of IGDTUW, with 30+ events and 2000+ nationwide participation. Led a team of 30 students to manage the human resources needed."
      // },
    ]);

    return (
      <div className="col-grid">
        
        <div className="col">
          <h1>Education</h1>
          <Card cardInfo={educaton}/>
        </div>

        <div className="col">
          <h1>Experience</h1>
          <Card cardInfo={community}/>
        </div> 

        <div className="col">
          <h1>Certifications</h1>
          <Card cardInfo={experience}/>
        </div>

        <div className="col">
          <h1>Achievements</h1>
          <Card cardInfo={achievements}/>
        </div>
 
      </div>   
        
    )
}

export default Resume