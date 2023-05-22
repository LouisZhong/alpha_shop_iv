
import minus from 'assets/icons/minus.svg'
import plus from 'assets/icons/plus.svg'
import cartScss from 'components/Cart/Cart.module.scss'
import { useState } from 'react'

const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  }
]

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
  const [products, setProduct] = useState(items)

  function handleQuantityClick (productId, action) {
    const nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: action === 'minus' ? product.quantity -1 : product.quantity + 1
        }
      } else {
        return product
      }
    })
    //過濾數量=0的商品
    const updateProducts = nextProducts.filter(product => product.quantity > 0)
    setProduct(updateProducts)
  }

  function handleMinusClick () {
    // setCount(count - 1)
  }
  
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
        <div class="text">運費</div>
        <div className={cartScss.price}>free</div>
      </section>
      <section className={`${cartScss.cartInfo} ${cartScss.total}`}>
        <div class="text">小計</div>
        <div className={cartScss.price}>5200</div>
      </section>
    </section>
  )
}
