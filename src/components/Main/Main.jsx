import Register from 'components/Main/Register.jsx'
import Cart from 'components/Cart/Cart.jsx'
import mainCss from 'components/Main/Main.module.scss'
import ProgressControl from 'components/Main/ProgressControl.jsx'
import { useContext, useState } from 'react'
import { CartContext } from 'context/CartContext'
import { CreditCardContext } from 'context/CreditCardContext'

export function Main () {
  //信用卡資料
  const initialCardInfo = useContext(CreditCardContext)
  const [creditCardInfo, setCreditCardInfo] = useState(initialCardInfo)
  //流程換頁資料
  const [step, setStep] = useState(0)
  //引入購物車原始資料
  const cartData = useContext(CartContext)
  const [products, setProduct] = useState(cartData)
  
  //處理結帳流程換頁
  function handlePrevClick () {
    setStep(step - 1)
  }

  function handleNextClick() {
    setStep(step + 1)
  }
  
  //處理卡片資料
  function handleCardInputValue (e) {
    setCreditCardInfo({
      ...creditCardInfo,
      [e.target.dataset.name]: e.target.value
    })
  }

  //處理商品增減及更新數量至原始資料
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
  
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  return (
    <main className="site-main">
      <div className={mainCss.mainContainer}>
        <Register 
          step={step}
          handleCardInputValue={handleCardInputValue}
        />
        <CartContext.Provider value={products}>
          <Cart 
            handleQuantityClick={handleQuantityClick}
            totalPrice={totalPrice}
          />
        </CartContext.Provider>
        <CreditCardContext.Provider value={ creditCardInfo }>
          <ProgressControl 
          onPrevStep={handlePrevClick}
          onNextStep={handleNextClick}
          step={step}
          totalPrice={totalPrice}
          />
        </CreditCardContext.Provider>              
      </div> 
    </main>
  )
}

