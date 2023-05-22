import { Main } from 'components/Main/Main.jsx'
import { useState } from 'react'

let initialSteps = [0]

function App() {
const [steps, setSteps] = useState(
  initialSteps
)

  return (
    <>
      <Main />
    </>
  );
}

export default App;
