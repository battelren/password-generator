import { Footer } from "./components/Footer"
import { PasswordGenerator } from "./components/PasswordGenerator"

function App() {
  return (
    <div className="touch-manipulation select-none p-[1rem] max-w-[430px] mx-auto flex flex-col gap-y-[2rem]">
      <PasswordGenerator />
      <Footer />
    </div>
  )
}

export default App
