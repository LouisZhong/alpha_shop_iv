import rightArrow from 'assets/icons/right-arrow.svg'
import leftArrow from 'assets/icons/left-arrow.svg'
import ProgressControlCss from 'components/Main/ProgressControl.module.css'
import { useState } from 'react'

export default function ProgressControlNew() {

  const [step, setStep] = useState(0)

  function handlePrevClick () {
    setStep(step - 1)
  }

  function handleNextClick() {
    setStep(step + 1)
  }

  function StepButton ({ step }) {
    if (step <= 0) {
      return (
        <section className={`${ProgressControlCss.buttonGroupAddress}`} data-phase="address">
          <button class="next" onClick={handleNextClick}>
            下一步
            <img src={rightArrow} className={ProgressControlCss.cursorLeft} alt='svg-icon-right-arrow' />          
          </button>
        </section>
      ) 
    } else if (step === 1) {
      return (
        <section className={`${ProgressControlCss.buttonGroupShipping}`} data-phase="shipping">
          <button class="prev" onClick={handlePrevClick}>
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button class="next" onClick={handleNextClick}>
            下一步
            <img src={rightArrow} className='' alt='svg-icon-right-arrow' />
          </button>
        </section>
      ) 
    } else if (step === 2) {
      return (        
        <section className={`${ProgressControlCss.buttonGroupPay}`} data-phase="credit-card">
          <button class="prev" onClick={handlePrevClick}>
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button class="next">
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