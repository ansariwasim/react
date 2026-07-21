import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card.jsx'

function App() {
   
const data = [
  {
    img:"https://picsum.photos/301",
    name: "John Doe",
    aboutUs: "John Doe is a dedicated software developer with a strong passion for creating innovative and user-friendly digital solutions. With several years of experience in web development, he has worked on a variety of projects ranging from small business websites to large-scale enterprise applications. He enjoys solving complex problems through clean, maintainable code and continuously learning new technologies to stay ahead in the fast-changing tech industry. John believes that collaboration, creativity, and attention to detail are the keys to successful software development. Outside of work, he enjoys contributing to open-source projects, reading about emerging technologies, and  "
  },
  {
    img:"https://picsum.photos/301",
    name: "Jane Smith",
    aboutUs: "Jane Smith is a creative and detail-oriented UI/UX designer who is passionate about crafting intuitive and visually engaging digital experiences. She specializes in transforming complex ideas into simple, accessible, and user-centered designs that improve customer satisfaction and business success. Throughout her career, Jane has collaborated with developers, product managers, and stakeholders to design websites and mobile applications that balance aesthetics with functionality. She values research, usability testing, and continuous feedback to ensure every design decision enhances the user journey. Beyond her professional work, Jane enjoys exploring art, photography, "
  },
  {
    img:"https://picsum.photos/301",
    name: "Michael Brown",
    aboutUs: "Michael Brown is an experienced project manager with a proven ability to lead cross-functional teams and deliver successful projects across various industries. He is passionate about strategic planning, effective communication, and building strong relationships with clients and team members. Michael believes that every successful project begins with clear goals, realistic timelines, and transparent collaboration. He has managed projects of different sizes, ensuring quality, efficiency, and customer satisfaction throughout every stage of development. His leadership style emphasizes teamwork, accountability, and continuous improvement, helping teams overcome challenges while maintaining productivity and  "
  }
];


  return (
    <div className='flex justify-around p-10'>
   {data.map((ele, idx)=>{
    return <Card key={idx} img ={ele.img}  name ={ele.name} aboutUs={ele.aboutUs} />
   })}

    </div>
  
  );
}

export default App
