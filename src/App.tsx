import { Route, Routes } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import ShareMeetup from "./components/meetups/ShareMeetup";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />}></Route>
          <Route path="/newmeetup" element={<NewMeetupPage />}></Route>
          <Route path="/favourites" element={<FavouritesPage />}></Route>
          <Route path="/sharemeetup" element={<ShareMeetup />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
