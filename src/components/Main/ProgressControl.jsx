import rightArrow from 'assets/icons/right-arrow.svg'
import leftArrow from 'assets/icons/left-arrow.svg'
import ProgressControlCss from 'components/Main/ProgressControl.module.css'
import { useContext } from 'react'
import { CreditCardContext } from 'context/CreditCardContext'

export default function ProgressControl( {step, onPrevStep, onNextStep, totalPrice} ) {
  const cardInfo = useContext(CreditCardContext)
  
  function handleSubmit() {
    console.log(`持卡人姓名: ${cardInfo.cardHolder}`)
    console.log(`卡號: ${cardInfo.cardNum}`)
    console.log(`有效期限: ${cardInfo.expireDate}`)
    console.log(`CVC: ${cardInfo.cvc}`)
    console.log(`Price: ${totalPrice}`)
  }

  function StepButton ({ step }) {
    if (step <= 0) {
      return (
        <section className={`${ProgressControlCss.buttonGroupAddress}`} data-phase="address">
          <button className="next" onClick={onNextStep}>
            下一步
            <img src={rightArrow} className={ProgressControlCss.cursorLeft} alt='svg-icon-right-arrow' />          
          </button>
        </section>
      ) 
    } else if (step === 1) {
      return (
        <section className={`${ProgressControlCss.buttonGroupShipping}`} data-phase="shipping">
          <button className="prev" onClick={onPrevStep}>
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button className="next" onClick={onNextStep}>
            下一步
            <img src={rightArrow} className='' alt='svg-icon-right-arrow' />
          </button>
        </section>
      ) 
    } else if (step === 2) {
      return (        
        <section className={`${ProgressControlCss.buttonGroupPay}`} data-phase="credit-card">
          <button className="prev" onClick={onPrevStep}>
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button className="next" onClick={handleSubmit}>
            確認下單
          </button>
        </section>
      )
    }
  }

  return (
    <>
      <section className={ProgressControlCss.progressControlContainer}>
        <StepButton 
          step={step}
        /> 
      </section>
    </>
  )
}