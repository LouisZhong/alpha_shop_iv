
import minus from 'assets/icons/minus.svg'
import plus from 'assets/icons/plus.svg'
import cartScss from 'components/Cart/Cart.module.scss'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'

function ItemRender ({ products, handleQuantityClick }) {
    const listItems = products.map(product => 
    <div key={product.id} className={cartScss.productContainer} data-count="0" data-price="3999">
      <img src={product.img} className={cartScss.productImg} />
      <div className={cartScss.productInfo}>
        <div className={cartScss.productName}>{product.name}</div>
        <div className={cartScss.productControlContainer}>
          <div className={cartScss.productControl}>
            <img src={minus} onClick={() => {handleQuantityClick(product.id, 'minus')}} className={cartScss.minus} alt="minus"/>
            <span className={cartScss.productCount}>{product.quantity}</span>
            <img src={plus} onClick={() => {handleQuantityClick(product.id, 'plus')}} className={cartScss.plus} alt="plus" />
          </div>
        </div>
        <div className={cartScss.productPrice}>{product.price}</div>
      </div>
    </div>
  ); 
  return (
    <>{listItems}</>
  )  
}

export default function Cart () {

  //從CartContext拿資料
  const { products, handleQuantityClick, totalPrice } = useContext(CartContext)

  return (
    <section className={cartScss.cartContainer}>      
      <h3 className={cartScss.productTitle}>購物籃</h3>
      <section className={cartScss.productList} data-total-price="0">
        <ItemRender 
          handleQuantityClick={handleQuantityClick}
          products={products}    
        />
      </section>
      <section className={`${cartScss.cartInfo} ${cartScss.shipping}`}>
        <div className="text">運費</div>
        <div className={cartScss.price}>免費</div>
      </section>
      <section className={`${cartScss.cartInfo} ${cartScss.total}`}>
        <div className="text">小計</div>
        <div className={cartScss.price}>{totalPrice}</div>
      </section>
    </section>
  )
}

