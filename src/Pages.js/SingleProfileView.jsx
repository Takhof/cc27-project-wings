import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import useLocalStorage from "use-local-storage";

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

  // access local storage, set in Login
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const loggedInUserId = localStorage.getItem("id");
  console.log("USER ID FROM LOCAL STORAGE: ", loggedInUserId);

  // Get userId from querystring
  const queryParams = new URLSearchParams(window.location.search);
  let userId = queryParams.get("user_id") || loggedInUserId;
  console.log("Showing profile data for UserID: ", userId);

  return (
    <div>
      <div className="App" data-theme={theme}>
        <div>
          <Header />
          <div className="spv-container">
            <Profile userId={userId} />
            <div className="posts-main-container">
              <CreatePost />
              <Newsfeed theme={theme} setTheme={setTheme} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProfileView;
