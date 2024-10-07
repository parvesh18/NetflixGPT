import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - Movie Trailer 
          - Title Card 
        Secondary Container
          - Movie List * n
            - Movie Card * n
      
      */}
    </div>
  );
};

export default Browse;
