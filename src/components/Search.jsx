import { data } from '../data';
import bagplus from '../svg/bag-plus.svg'

function Search(props) {
  let filteredData = data.filter((item) => {
    if (props.search === '') {
      return item;
    } else {
      return (
        item.category.toLowerCase().includes(props.search)
        || 
        item.name.toLowerCase().includes(props.search)
      )
    }
  })

  return (
    filteredData.map((item) => (
      <div className='product' key={item.id}>
      <div className='product-img'>
        <img src={require(`../images/${item.img}`)} alt={item.name}/>
      </div>
      <div className='product-name'>{item.name}</div>
      <div className='product-footer'>
        <div className='product-price'>$ {item.price}</div>
        <button className='add-to-cart' value={item.id} onClick={props.addToCart} title='Add to cart'>
          <img src={bagplus} alt="Bag Logo" width="24" height="24"/>
        </button>
      </div>  
    </div>
    ))
  );
};

export default Search;