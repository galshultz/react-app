import { useNavigate  } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const navigate  = useNavigate();

  //Saves Meetup data that was received from NewMeetupForm component to firebase DB
  function addMeetupHandler(meetupData: object) {
    fetch(
      "https://react-getting-started-shultz-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=> {
        navigate('/') 
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
