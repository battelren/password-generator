import React from "react"

type CheckboxProps = {
  text: string
  state: boolean
  setState: (value: React.SetStateAction<boolean>) => void
}

function Checkbox(props: CheckboxProps) {
  const { text, state, setState } = props

  return (
    <label className="flex flex-row gap-x-[0.5rem] items-center select-none">
      <input type="checkbox" className="h-[1rem] w-[1rem] text-indigo-600" checked={state} onChange={(e) => setState(e.target.checked)} />
      <span className="text-gray-700">{text}</span>
    </label>
  )
}

export { Checkbox }
