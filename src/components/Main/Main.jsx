import Register from 'components/Main/Register.jsx'
import Cart from 'components/Cart/Cart.jsx'
import mainCss from 'components/Main/Main.module.scss'
import ProgressControl from 'components/Main/ProgressControl.jsx'
import { useState } from 'react'

export function Main () {

  const [step, setStep] = useState(0)

  function handlePrevClick () {
    setStep(step - 1)
  }

  function handleNextClick() {
    setStep(step + 1)
  }

  return (
    <main className="site-main">
      <div className={mainCss.mainContainer}>
        <Register 
          step={step}
        />
        <Cart />
        <ProgressControl 
          onPrevStep={handlePrevClick}
          onNextStep={handleNextClick}
          step={step}
        />
      </div> 
    </main>
  )
}

