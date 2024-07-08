import { Link } from "react-router-dom";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { MdOutlineWebAsset } from "react-icons/md";
import { LuTextCursorInput } from "react-icons/lu";
import { RxButton } from "react-icons/rx";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const ListMenu = () => {
  return (
    <>
      <h4>
        <span>Main Menu</span>
        <div class="menu-separator"></div>
      </h4>
      <li>
        <Link to="/">
          <span class="material-symbols-outlined">
            {" "}
            <RiDashboardHorizontalLine />{" "}
          </span>
          Dashboard
        </Link>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <MdWeb />{" "}
          </span>
          Page
        </a>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <MdOutlineWebAsset />{" "}
          </span>
          Blank
        </a>
      </li>
      <h4>
        <span>UI</span>
        <div class="menu-separator"></div>
      </h4>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <RxButton />{" "}
          </span>
          Button
        </a>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <LuTextCursorInput />{" "}
          </span>
          Input
        </a>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <MdOutlineFormatLineSpacing />{" "}
          </span>
          Option
        </a>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <FaCircle />{" "}
          </span>
          Card
        </a>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined">
            {" "}
            <MdLogout />{" "}
          </span>
          Logout
        </a>
      </li>
    </>
  );
};

export default ListMenu;
