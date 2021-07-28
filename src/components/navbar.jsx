const Navbar = ({noOfCounter}) => {
  return (  
    
    <nav className="navbar navbar-light bg-light">
      <a href="https://getbootstrap.com" className="navbar-brand">
      Navbar <span className="badge rounded-pill bg-primary">{noOfCounter}</span>
      </a>
    </nav>
  );
}
 
export default Navbar;
