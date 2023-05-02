import { StepProgress } from './components/step/StepProgress/StepProgress.js';
import { Step1 } from './components/step/Step/Step1.js'
import { Step2 } from './components/step/Step/Step2.js'
import { Step3 } from './components/step/Step/Step3.js'
import { ProgressControl } from './components/step/ProgressControl/ProgressControl.js'
import './App.css';

function App() {
  return (
    <>
      <main class="site-main">
        <div class="main-container">
          <StepProgress />
          {/* <!-- register-form --> */}
          <section class="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>

        {/* <!-- progress-control --> */}
          <section class="progress-control-container col col-lg-6 col-sm-12">
            <ProgressControl />
          </section>   
        </div> 
      </main>
    </>
  );
}

export default App;
