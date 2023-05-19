import { StepProgress } from 'components/Main/StepProgress';
import { Step1 } from 'components/Main/Step1.js'
import { Step2 } from 'components/Main/Step2.js'
import { Step3 } from 'components/Main/Step3.js'
import { ProgressControl } from 'components/Main/ProgressControl.js'
import mainCss from 'components/Main/Main.module.scss'

export default function Register () {
  return (
    <>
      <section className={mainCss.registerContainer}>
        <StepProgress />
        <section class="form-container col col-12">
          <Step1 />
          <Step2 />
          <Step3 />
        </section>        
        <ProgressControl />
      </section>
    </>
  )
}

