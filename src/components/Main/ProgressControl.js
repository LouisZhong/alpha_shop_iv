import rightArrow from 'assets/icons/right-arrow.svg'
import leftArrow from 'assets/icons/left-arrow.svg'
import ProgressControlCss from 'components/Main/ProgressControl.module.css'

export function ProgressControl () {
  return (
      <section className={ProgressControlCss.progressControlContainer}>
        <section className={`${ProgressControlCss.buttonGroupAddress}`} data-phase="address">
          <button class="next">
            下一步
            <img src={rightArrow} className={ProgressControlCss.cursorLeft} alt='svg-icon-right-arrow' />          
          </button>
        </section>
        <section className={`${ProgressControlCss.buttonGroupShipping}`} data-phase="shipping">
          <button class="prev">
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button class="next">
            下一步
            <img src={rightArrow} className='' alt='svg-icon-right-arrow' />
          </button>
        </section>
        <section className={`${ProgressControlCss.buttonGroupPay}`} data-phase="credit-card">
          <button class="prev">
            <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
            上一步
          </button>
          <button class="next">
            確認下單
          </button>
        </section>
      </section>      
  )
} 