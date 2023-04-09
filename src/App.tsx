import { Footer } from "./components/Footer"
import { PasswordGenerator } from "./components/PasswordGenerator"

function App() {
  return (
    <div className="touch-none select-none p-[1rem] ">
      <PasswordGenerator />
      <Footer />
    </div>
  )
}

export default App
