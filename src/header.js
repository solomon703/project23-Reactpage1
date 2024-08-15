import './index.css';
function Header(){
  return(
  <navbar className="check1">
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Account</a></li>
    <li><a href="#">Login</a></li>
    <li><a href="#">Membership</a></li>
    <li><a href="#">Support</a></li>
    <input type="text" name="input" id="input" placeholder='Search Here....'/>
    <button id='search-but'>Search</button>
    <li><a href="#">Cart</a></li>
    <li><a href="#">Location</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Explore More</a></li>
    {/* <i class="fa-solid fa-truck-fast"></i> */}
    </ul>
  </navbar>

);
};
export default Header;