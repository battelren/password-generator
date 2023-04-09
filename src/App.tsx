import { Footer } from "./components/Footer"
import { PasswordGenerator } from "./components/PasswordGenerator"

function App() {
  return (
    <div className="touch-none select-none p-[1rem] max-w-[430px] mx-auto">
      <PasswordGenerator />
      <Footer />
    </div>
  )
}

export default App
