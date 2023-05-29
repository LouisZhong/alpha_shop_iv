import Register from 'components/Main/Register.jsx'
import Cart from 'components/Cart/Cart.jsx'
import mainCss from 'components/Main/Main.module.scss'
import ProgressControl from 'components/Main/ProgressControl.jsx'
import { useContext, useState } from 'react'
import { CreditCardContext } from 'context/CreditCardContext'
import { CartContextProvider } from 'context/CartContext'


const data = [
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

export function Main () {
  //信用卡資料
  const initialCardInfo = useContext(CreditCardContext)
  const [creditCardInfo, setCreditCardInfo] = useState(initialCardInfo)
  //流程換頁資料
  const [step, setStep] = useState(0)

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

  return (
    <main className="site-main">
      <div className={mainCss.mainContainer}>       
        <CartContextProvider>
          <Register 
            step={step}
            handleCardInputValue={handleCardInputValue}
          />
            <Cart />
          <CreditCardContext.Provider value={ creditCardInfo }>
            <ProgressControl 
            onPrevStep={handlePrevClick}
            onNextStep={handleNextClick}
            step={step}
            />
          </CreditCardContext.Provider>   
        </CartContextProvider>        
      </div> 
    </main>
  )
}

