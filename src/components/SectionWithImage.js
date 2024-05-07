import "../styles/SectionWithImage.css"
import {Link} from "react-router-dom"
// external libs 
import ImageGallery from 'react-image-gallery';
import Typewriter from "typewriter-effect";
function RenderContent({heading, paragraph, buttons }){
    return (
                <div className="content">
                    <h1 className="hero-heading | animate__animated animate__slideInLeft">{heading}</h1>
                    <p className="animate__animated animate__slideInLeft">{paragraph}</p>
                    <div className="section-btn-div">
                    {buttons.map((button, index) => (
                        <Link className="section-btn btn " key={index} to={button.href}>
                        {button.text}
                        </Link>
                    ))}
                    </div>
                </div>
            );
        }

function RenderImage({imageSrc,imageAlt}){
    if (imageSrc) {
      // return <div className="section-image"> <img  src={imageSrc} alt={imageAlt} /> </div>;
      return <div className="section-image"><ImageGallery showNav={false} items={imageSrc} showThumbnails={false} autoPlay={true} showPlayButton={false} showFullscreenButton={false} slideInterval={8000}/></div>;
    } else {
      return <div className="section-image "> <div className="placeholder-image" /></div>;
    }
  };

function SectionWithImage({ imageSrc, imageAlt, heading, paragraph, buttons, imageOnLeft ,typeWriterHeading}){
 

  return (
    <div className={`section-with-image ${imageOnLeft ? 'image-on-left' : 'image-on-right'}`}>
      <div className="section-content">
        {imageOnLeft ? (
          <>
            <RenderImage  imageAlt={imageAlt} imageSrc={imageSrc}/>
            <RenderContent 
        heading={
          typeWriterHeading?(
              <>
                  {heading}
                  <span className="text-primary">
                  <Typewriter
                  onInit={(typewriter) => {
                      typeWriterHeading.map((currentHeading)=>{
                        typewriter
                            .typeString(currentHeading)
                            .pauseFor(1000)
                            .deleteAll()
                      })
                      typewriter.start();
                  }}
                  />
                  </span>
              </>
          ):(
            <>
            {heading}
            </>
          )
        }
        paragraph={paragraph}
        buttons={buttons}
        imageOnLeft={imageOnLeft} />
          </>
        ) : (
          <>
            <RenderContent  imageAlt={imageAlt}
           heading={
            typeWriterHeading?(
                <>
                    {heading}
                    <span className="text-primary type-writer-text">
                    <Typewriter
                    options={{loop:true}}
                    onInit={(typewriter) => {
                        typeWriterHeading.map((currentHeading)=>{
                          typewriter
                              .typeString(currentHeading)
                              .pauseFor(1000)
                              .deleteAll()
                        })
                        typewriter.start();
                    }}
                    />
                    </span>
                </>
            ):(
              <>
              {heading}
              </>
            )
          }
        paragraph={paragraph}
        buttons={buttons}
        imageOnLeft={imageOnLeft}/>
            <RenderImage imageAlt={imageAlt} imageSrc={imageSrc}/>
            
          </>
        )}
      </div>
    </div>
  );
};

export default SectionWithImage;
