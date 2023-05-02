import rightArrow from '../../../icons/right-arrow.svg'
import leftArrow from '../../../icons/left-arrow.svg'

function Insert (src) {
  return (
    <img 
      src={src}
      alt='fo'
    />
  )
}

export function ProgressControl () {
  return (
    <>
      <section class="button-group col col-12" data-phase="address">
        <button class="next">
          下一步
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-right-arrow"></use>
          </svg> */}
          <img src={rightArrow} className='cursor-point' alt='svg-icon-right-arrow' />          
        </button>
      </section>
      <section class="button-group col col-12" data-phase="shipping">
        <button class="prev">
          <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-left-arrow"></use>
          </svg> */}
          上一步
        </button>
        <button class="next">
          下一步
          <img src={rightArrow} className='' alt='svg-icon-right-arrow' />
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-right-arrow"></use>
          </svg> */}
        </button>
      </section>
      <section class="button-group col col-12" data-phase="credit-card">
        <button class="prev">
          <img src={leftArrow} className='' alt='svg-icon-right-arrow' />
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-left-arrow"></use>
          </svg> */}
          上一步
        </button>
        <button class="next">
          確認下單
        </button>
      </section>
    </>
  )
} 