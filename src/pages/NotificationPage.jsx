// external libs 
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../styles/NotificationPage.css"
function NotificationPage() {
    return (
      <main className="home-div">
        <section className=" notification-section | disclaimer-container transparent-container flex-col text-left gap-100">
          <h1>Admission Form Now Open!</h1>
            <ReactReadMoreReadLess
                    charLimit={100}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                >
                    The admission form for the upcoming academic year is now available. Students are encouraged to start filling out the form and submit it within the given timeline. Admission Form Dates: July 30, 2023 - June 8, 2023
            </ReactReadMoreReadLess>
        </section>
        <section className=" notification-section  | disclaimer-container transparent-container flex-col text-left gap-100">
          <h1>Admission Form Now Open!</h1>
            <ReactReadMoreReadLess
                    charLimit={100}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                >
                    The admission form for the upcoming academic year is now available. Students are encouraged to start filling out the form and submit it within the given timeline. Admission Form Dates: July 30, 2023 - June 8, 2023
            </ReactReadMoreReadLess>
        </section>
      </main>
    );
  }
  
  export default NotificationPage;