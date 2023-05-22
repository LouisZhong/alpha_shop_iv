
import minus from 'assets/icons/minus.svg'
import plus from 'assets/icons/plus.svg'
import cartScss from 'components/Cart/Cart.module.scss'
import {useState} from 'react'

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
  },
]

let itemCount = [0, 0]

function ItemRender ({ count, onPlus, onMinus}) {
  const listItems = items.map(item => 
    <div key={item.id} className={cartScss.productContainer} data-count="0" data-price="3999">
      <img src={item.img} className={cartScss.productImg} />
      <div className={cartScss.productInfo}>
        <div className={cartScss.productName}>{item.name}</div>
        <div className={cartScss.productControlContainer}>
          <div className={cartScss.productControl}>
            <img src={minus} onClick={onMinus} className={cartScss.minus} alt="minus"/>
            <span className={cartScss.productCount}>{count}</span>
            <button onClick={() => { console.log(item.id)}}>test</button>
            <img src={plus} onClick={onPlus} className={cartScss.plus} alt="plus" />
          </div>
        </div>
        <div className={cartScss.productPrice}>{item.price}</div>
      </div>
    </div>
  );

  return (
    <>{listItems}</>
  )  
}

export default function Cart () {
  const [count, setCount] = useState(itemCount)

  function handlePlusClick () {
    setCount(count + 1)
  }

  function handleMinusClick () {
    setCount(count - 1)
  }
  
  return (
    <section className={cartScss.cartContainer}>      
      <h3 className={cartScss.productTitle}>購物籃</h3>
      <section className={cartScss.productList} data-total-price="0">
        <ItemRender 
          onPlus={handlePlusClick}
          onMinus={handleMinusClick}
          count={count}
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
