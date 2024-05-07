import React from "react";
import SectionWithImage from "../components/SectionWithImage";
import content from "../assets/content/home.json"
import "../styles/HomePage.css"
// external libs 
import ReactReadMoreReadLess from "react-read-more-read-less";
import { UserCard } from 'react-ui-cards';
// importing custom hooks 
import useScrollAnimation from '../hooks/UseScrollAnimation';

 /*---------------------data generator functions for resuable componenets-------------------- 
 Note: all generator functions starts with get */


function getSectionWithImageFirst(){
  const firstSection = content.homePage.SectionWithImageFirst
  // modifications in content 
  // const heading = (
  //   <>
  //     {firstSection.headingInBlack}
  //     <span className="text-primary"> {firstSection.headingInBlue} </span>
  //   </>
  // );
  const paragraph = (
    <>
     {firstSection.paragraph.beforeBreakPoint}
     <br/>
     {firstSection.paragraph.afterBreakPoint}
    </>
  );
  const buttons = [
    { text: firstSection.button1.text, href: firstSection.button1.redirection },
    { text: firstSection.button2.text, href: firstSection.button2.redirection },
  ];
  const data = {
    "imageSrc":firstSection.imageSrc,
    "imageAlt":firstSection.imageAlt,
    "heading":firstSection.heading,
    "typeWriterHeading":firstSection.typeWriterHeading,
    "paragraph": paragraph,
    "buttons":buttons,
    "imageOnLeft":firstSection.imageOnLeft


  }
  return data
}
// -----------------------specific componenets to homepage ----------------
// function Services(){
//   return (
//     <h1>Here are your services </h1>
//   )
// }
// ---------------------main home componenet ------------------------
function HomePage() {
  // generating data for reusable components 
  const FirstSecImgData =  getSectionWithImageFirst()
  const AboutData = content.AboutData
  // make animations for elements 
  const aboutTitle = useScrollAnimation(['animate__animated','animate__fadeInUp']);
  const staffTitle = useScrollAnimation(['animate__animated','animate__fadeInUp']);
  return (
    <main className="home-div">
      <section>
      <SectionWithImage
        imageSrc={content.homeImages}
        imageAlt={FirstSecImgData.imageAlt}
        heading={FirstSecImgData.heading}
        typeWriterHeading={FirstSecImgData.typeWriterHeading}
        paragraph={FirstSecImgData.paragraph}
        buttons={FirstSecImgData.buttons}
        imageOnLeft={FirstSecImgData.imageOnLeft}
      />
      {/* <Services /> */}
      </section>
      <section className="about-home-section | disclaimer-container transparent-container flex-col text-left gap-100">
        <h1 ref={aboutTitle} className="about-heading">About</h1>
        <ReactReadMoreReadLess
                charLimit={600}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {AboutData.paragraph}
            </ReactReadMoreReadLess>
      </section>
      <section className="teaching-section">
          <h1 ref={staffTitle}>Teaching Staff</h1>
          <div className="transparent-side-container flex flex-wrap justify-content-around mt-400">
             <UserCard
                float
                header='departments/english.jpg'
                avatar='other/dummy.jpg'
                name='Mr. Ravinder Singh.'
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/hindi.jpg'
                avatar='other/dummy.jpg'
                name='Dr. Madan Lal'
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/economics.jpg'
                avatar='other/dummy.jpg'
                name='Cap. Sandeep Kumar'
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/history.png'
                avatar='other/dummy.jpg'
                name='Mr. Surender Dhiman'
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/political.jpg'
                avatar='other/dummy.jpg'
                name='Mr. Sanjeev Kumar'
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/music.jpg'
                avatar='other/dummy.jpg'
                name='Unknown'
                positionName='Vacant'
            />
             <UserCard
                float
                header='departments/commerce.jpg'
                avatar='other/dummy.jpg'
                name='Dr. Rajan Devi Negi '
                positionName='Assistant Professor'
            />
             <UserCard
                float
                header='departments/commerce.jpg'
                avatar='other/dummy.jpg'
                name='Mr. Rahul Sharma'
                positionName='Assistant Professor'
            />
          </div>
      </section>
      <section className="teaching-section">
          <h1 ref={staffTitle}>Non Teaching Staff</h1>
          <div className=" transparent-side-container flex flex-wrap justify-content-around mt-400">
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mr. Roshan Lal'
                positionName='Superintendent'
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mr. Himanshu Bhargava'
                positionName='Clerk'
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mr. Balmakund'
                positionName="Peon"
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mr. Balmakund'
                positionName="Peon"
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mr. Dhani Ram'
                positionName="Peon"
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mrs. Dev Kumari'
                positionName="Peon"
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mrs. Shushma Devi'
                positionName="Peon"
            />
             <UserCard
                float
                avatar='other/dummy.jpg'
                name='Mrs. Kaushalya Devi'
                positionName="Peon"
            />
          </div>
      </section>
    </main>
    
  );
}

export default HomePage;
