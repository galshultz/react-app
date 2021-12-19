import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../components/meetups/MeetupList";


//Gets all meetups saved in the DB and creates list element
function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState<Array<Meetup>>([])

  useEffect(()=>{
    setIsLoading(true)
    fetch(
      "https://react-getting-started-shultz-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
    ).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    }) 
  }, [])


  if (isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
