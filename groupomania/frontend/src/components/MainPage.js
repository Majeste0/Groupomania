import BannerLogged from "./BannerLogged";
import NewArticleBtn from "./NewArticleBtn";

import "../styles/MainPage.scss";
import Postsexample from "./Postsexample";

import Publications from "./Publications";

const MainPage = () => {
  return (
    <div className="main_MainPage">
      <BannerLogged />
      <header className="header_MainPage">
        <NewArticleBtn />
        <h3 className="title_MainPage">Liste des posts</h3>
      </header>
      <Publications />
    </div>
  );
};

export default MainPage;
