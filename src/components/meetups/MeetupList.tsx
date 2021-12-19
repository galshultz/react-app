import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

export type Meetup = {
  id: number;
  title: string;
  description: string;
  image: string;
  address: string;
}

type Meetups = {
  meetups: Meetup[]
}

//Creates the meetup list (ul) in all meetups page
function MeetupList(props: Meetups) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;