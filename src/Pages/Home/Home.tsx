import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Flashsale from "./Flashsale/Flashsale";
import Product from "./Product/Product";
import Ads from "./Ads/Ads";
import SearchBar from "./SearchBar/SearchBar";
import Selling from "./Selling/Selling";
import AuctionProduct from "./Auction-product/AuctionProduct";
import ClassifedAds from "./ClassfiedAds/ClassifedAds";
import TopSeller from "./ToSeller/TopSeller";
import TopBrands from "./TopBrands/TopBrands";

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Banner></Banner>
      <Category></Category>
      <Flashsale></Flashsale>
      <Product></Product>
      <Ads></Ads>
      <Selling></Selling>
      <AuctionProduct></AuctionProduct>
      <ClassifedAds></ClassifedAds>
      <TopSeller></TopSeller>
      <TopBrands></TopBrands>
    </div>
  );
};

export default Home;
