import { Step1  } from "components//Main/Step1";
import { Step2 } from "components//Main/Step2";
import { Step3 } from "components//Main/Step3";

export function Form ({ step, handleCardInputValue }) {
  if (step <= 0) {
    return <Step1 />
  } else if ( step === 1) {
    return <Step2 />
  } else if (step > 1) {
    return <Step3 handleCardInputValue={handleCardInputValue}/>
  }
}