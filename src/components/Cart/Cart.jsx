
import minus from 'assets/icons/minus.svg'
import plus from 'assets/icons/plus.svg'
import cartScss from 'components/Cart/Cart.module.scss'

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

function ItemRender () {
  const listItems = items.map(item => 
    <div key={item.id} className={cartScss.productContainer} data-count="0" data-price="3999">
      <img src={item.img} className={cartScss.productImg} />
      <div className={cartScss.productInfo}>
        <div className={cartScss.productName}>{item.name}</div>
        <div className={cartScss.productControlContainer}>
          <div className={cartScss.productControl}>
            <img src={minus} className={cartScss.minus} alt="minus"/>
            <span className={cartScss.productCount}>1</span>
            <img src={plus} className={cartScss.plus} alt="plus" />
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
  return (
    <section className={cartScss.cartContainer}>      
      <h3 className={cartScss.productTitle}>購物籃</h3>
      <section className={cartScss.productList} data-total-price="0">
        <ItemRender />
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
