import pgComplete from 'icons/pg-complete.svg';
import StepProgressCss from 'components/step/StepProgress/StepProgress.module.css'

export function StepProgress () {
  return (
    <>
      <h2 class="register-title col col-12">結帳</h2>
      <section class={`${StepProgressCss.progressContainer}`}>
        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="address">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
              <span className={StepProgressCss.text}>1</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span class="progress-label">寄送地址</span>
        </span>
        <span className={`${StepProgressCss.progressBar}`} data-order="1"></span>
        <span className={`${StepProgressCss.progressGroup}`} data-phase="shipping">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>2</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span class="progress-label">運送方式</span>
        </span>
        <span className={`${StepProgressCss.progressBar}`} data-order="2"></span>
        <span className={`${StepProgressCss.progressGroup}`} data-phase="credit-card">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>3</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span class="progress-label">付款資訊</span>
        </span>
      </section>
    </>
  )
}