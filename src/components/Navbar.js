import bag from '../svg/bag.svg';

const Navbar = (props) => {
  return (
    <div className='header'>
    <span className='logo'>YouShop</span>
    <div className="search">
      <input value={props.search} onChange={props.Search} type="text" placeholder="Type to search... e.g. phone, tablet, pc" maxLength="40"/>
    </div>
      <div className='cart-btn' onClick={props.Modal}>
        <div className='itemAdded'><span>{}</span></div>
        <img src={bag} width="28" height="28"/>
    </div>
  </div>
  );
};

export default Navbar;