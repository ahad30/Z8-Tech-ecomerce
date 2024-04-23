import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Flashsale from "./Flashsale/Flashsale";
import Product from "./Product/Product";
import Ads from "./Ads/Ads";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Banner></Banner>
      <Category></Category>
      {/* <Flashsale></Flashsale>
      <Product></Product>
      <Ads></Ads> */}
    </div>
  );
};

export default Home;
