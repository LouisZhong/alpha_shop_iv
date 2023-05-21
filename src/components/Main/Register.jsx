import { StepProgress } from 'components/Main/StepProgress';
import { StepProgressNew } from 'components/Main/StepProgressNew';
import { Form } from 'components/Main/Form';

import mainCss from 'components/Main/Main.module.scss'

export default function Register ({ step }) {
  return (
    <>
      <section className={mainCss.registerContainer}>
        {/* <StepProgress /> */}
        <StepProgressNew 
          step={step}
        />
        <section class="form-container col col-12">          
          <Form 
            step={step}
          />
        </section>        
      </section>
    </>
  )
}

