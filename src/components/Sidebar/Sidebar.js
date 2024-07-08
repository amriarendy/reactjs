import './Sidebar.css';
import ListMenu from '../ListMenu/ListMenu';

const Sidebar = () => {
    return (
        <aside class="sidebar">
        <div class="sidebar-header">
          <img src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png" alt="logo" />
          <h2>CodingLab</h2>
        </div>
        <ul class="sidebar-links">
            <ListMenu />
        </ul>
        <div class="user-account">
          <div class="user-profile">
            <img src="images/profile-img.jpg" alt="Profile Image" />
            <div class="user-detail">
              <h3>Eva Murphy</h3>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </aside>
    )
}

export default Sidebar;