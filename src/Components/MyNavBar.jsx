import Navbar from "react-bootstrap/Navbar";
import MySelectTitle from "./MySelectTitle";
import MySelectRating from "./MySelectRating";
function MyNavbar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <MySelectTitle />
      <MySelectRating />
    </Navbar>
  );
}

export default MyNavbar;
