import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import Footer from "../components/Footer";

function SingleProfileView() {
  return (
    <div>
      <div>
        <Header />
        <div className="spv-container">
          <Profile />
          <div className="posts-main-container">
            <CreatePost />
            <Newsfeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProfileView;
