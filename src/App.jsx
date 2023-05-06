import { StepProgress } from 'components/step/StepProgress/StepProgress.js';
import { Step1 } from 'components/step/Step/Step1.js'
import { Step2 } from 'components/step/Step/Step2.js'
import { Step3 } from 'components/step/Step/Step3.js'
import { ProgressControl } from 'components/step/ProgressControl/ProgressControl.js'
import AppCss from 'App.module.css'

function App() {
  return (
    <>
      <main class="site-main">
        <div class={AppCss.mainContainer}>
          <StepProgress />
          <section class="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>        
          <ProgressControl />
        </div> 
      </main>
    </>
  );
}

export default App;
