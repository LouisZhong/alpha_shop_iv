import { StepProgress } from 'components/Main/StepProgress';
import { Form } from 'components/Main/Form';

import mainCss from 'components/Main/Main.module.scss'

export default function Register ({ step, handleCardInputValue }) {
  return (
    <>
      <section className={mainCss.registerContainer}>
        {/* <StepProgress /> */}
        <StepProgress
          step={step}
        />
        <section className="form-container col col-12">          
          <Form 
            step={step}
            handleCardInputValue={handleCardInputValue}
          />
        </section>        
      </section>
    </>
  )
}

