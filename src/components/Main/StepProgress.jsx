import pgComplete from 'assets/icons/pg-complete.svg';
import StepProgressCss from 'components/Main/StepProgress.module.scss'

export function StepProgress ({ step }) {
  if (step <= 0) {
    return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className={`${StepProgressCss.progressContainer}`}>
        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="address">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
              <span className={StepProgressCss.text}>1</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>寄送地址</span>
        </span>
        <span className={`${StepProgressCss.progressBar} ${StepProgressCss.progressBarActive}`} data-order="1"></span>

        <span className={`${StepProgressCss.progressGroup}`} data-phase="shipping">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>2</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>運送方式</span>
        </span>
        <span className={`${StepProgressCss.progressBar}`} data-order="2"></span>

        <span className={`${StepProgressCss.progressGroup}`} data-phase="credit-card">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>3</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>付款資訊</span>
        </span>
      </section>
    </>
    )
  } else if (step === 1) {
    return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className={`${StepProgressCss.progressContainer}`}>
        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="address">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
              <span className={StepProgressCss.text}>✓</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>寄送地址</span>
        </span>
        <span className={`${StepProgressCss.progressBar} ${StepProgressCss.progressBarActive}`} data-order="1"></span>

        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="shipping">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>2</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>運送方式</span>
        </span>
        <span className={`${StepProgressCss.progressBar} ${StepProgressCss.progressBarActive}`} data-order="2"></span>

        <span className={`${StepProgressCss.progressGroup}`} data-phase="credit-card">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>3</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>付款資訊</span>
        </span>
      </section>
    </>
    )
  } else if (step >1 ) {
    return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className={`${StepProgressCss.progressContainer}`}>
        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="address">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
              <span className={StepProgressCss.text}>✓</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>寄送地址</span>
        </span>
        <span className={`${StepProgressCss.progressBar} ${StepProgressCss.progressBarActive}`} data-order="1"></span>

        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="shipping">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer} ${StepProgressCss.circleActive}`}>
              <span className={StepProgressCss.text}>✓</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>運送方式</span>
        </span>
        <span className={`${StepProgressCss.progressBar} ${StepProgressCss.progressBarActive}`} data-order="2"></span>

        <span className={`${StepProgressCss.progressGroup} ${StepProgressCss.groupActive}`} data-phase="credit-card">
          <span className={StepProgressCss.progressIcon}>
            <div className={`${StepProgressCss.circleContainer}`}>
              <span className={StepProgressCss.text}>3</span>              
            </div>
            <img src={pgComplete} className={`${StepProgressCss.pgComplete}`} alt="logo"/>
          </span>
          <span className={`${StepProgressCss.progressLabel}`}>付款資訊</span>
        </span>
      </section>
    </>
    )
  }
}