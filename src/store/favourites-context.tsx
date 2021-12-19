import { createContext, useState } from "react";

type Meetup = {
    id: number,
    title: string,
    description: string,
    image: string,
    address: string
}

//Type for React createContext method
type Context = {
    favourites: Meetup[],
    totalFavourites: number,
    addFavourite: (favouriteMeetup: any) => void,
    removeFavourite: (meetupId: any) => void,
    isItemFavourite: (meetupId: any) => boolean
}


const FavouritesContext = createContext<Context>({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (favouriteMeetup) => {},
  isItemFavourite: (favouriteMeetup) => {return false}
});

export function FavouritesContexProvider(props: any) {
    
    const [userFavourites, setUserFavourits] = useState<Meetup[]>([])

    //Adds meetup to the favourites meetups array 
    const addFavouriteHandler = (favouriteMeetup: any) => {
        setUserFavourits((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup)
        })
    }

    //Adds meetup to the favourites meetups array 
    function removeFavouriteHandler(meetupId: number){
        setUserFavourits((prevUserFavourites) => {
            return prevUserFavourites.filter((meetup) => meetup.id !== meetupId )
        })
    }

    //Chacks if a meetup is favourite, returns true if meetup id in favorites array
    function isFavouriteHandler(meetupId: number){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        isItemFavourite: isFavouriteHandler
    };
  
    return (
    <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext