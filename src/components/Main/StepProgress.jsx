import pgComplete from 'assets/icons/pg-complete.svg';
import StepProgressCss from 'components/Main/StepProgress.module.scss'

function Progress({number, phase, step}) {
  return (
    <>
      <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase={phase}>
        <span className={StepProgressCss.progressIcon}>
          <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
            <span className={StepProgressCss.text}>{number}</span>              
          </div>
          <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
        </span>
        <span class="progress-label">{step}</span>
      </span>
      {number !== 3 && (
        <span className={`${StepProgressCss.progressBar}`} data-order={number}></span>
      )}

    </>
  )
}


export function StepProgress () {
  return (
    <>
      <h2 class="register-title col col-12">結帳</h2>
      <section class={`${StepProgressCss.progressContainer}`}>
        <Progress 
          number={1}
          step="寄送地址"
          phase="address"
        />
        <Progress 
          number={2}
          step="運送方式"
          phase="shipping"
        />
        <Progress 
          number={3}
          step="付款資訊"
          phase="credit-card"
        />
      </section>
    </>
  )
}