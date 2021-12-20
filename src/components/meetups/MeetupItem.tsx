import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites-context';

type Props = {
    id: number;
    title: string;
    description: string;
    image: string;
    address: string; 
}

function MeetupItem (props: Props) {
    
    const favouriteCtx = useContext(FavouritesContext);
    const isItemFavourite = favouriteCtx.isItemFavourite(props.id)

    //Adds/removes meetup from the favourites list according to its state
    function toggleFavouritesStatusHandler() {
        if(isItemFavourite){
            favouriteCtx.removeFavourite(props.id)
        } else {
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    const navigate = useNavigate()
    const toShareMeetup = () => {
        navigate('/sharemeetup', {state: props})
    }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouritesStatusHandler}>{isItemFavourite ? "Remove From Favourites" : "Add To Favourites"}</button>
        </div>
        <div className={classes.actions}>
        <button onClick={() => toShareMeetup()}>Share this meetup</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;
