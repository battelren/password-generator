import { CheckIcon } from "@heroicons/react/24/outline"

type CheckboxProps = {
  text: string
  isChecked: boolean
  setIsChecked: (value: React.SetStateAction<boolean>) => void
}

function Checkbox(props: CheckboxProps) {
  const { text, isChecked, setIsChecked } = props
  const bgColor = isChecked ? "bg-indigo-500" : "bg-white"
  const border = isChecked ? "" : "border border-gray-400"
  const icon = isChecked ? <CheckIcon className="h-[1.2rem] w-[1.2rem] text-white stroke-[0.32rem]" /> : null

  return (
    <div className="flex flex-row gap-x-[0.4rem] items-center" onClick={() => setIsChecked(!isChecked)}>
      <div className={`${border} ${bgColor} w-[1.5rem] h-[1.5rem] rounded-md flex flex-row gap-x-[0.3rem] items-center justify-center cursor-pointer`}>
        {icon}
      </div>
      <span className="text-gray-700 text-[1.2rem]">{text}</span>
    </div>
  )
}

export { Checkbox }
