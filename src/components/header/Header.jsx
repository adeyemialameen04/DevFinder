import Loader from "../loader/Loader";
import "./header.css";
import { BsSearch } from "react-icons/bs";
const Header = ({ loading }) => {
  return (
    <header>
      <form className="container form__container">
        <>{loading ? <Loader /> : <BsSearch className="search-icon" />}</>
        <input type="search" placeholder="Search GITHUB username ..." />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
