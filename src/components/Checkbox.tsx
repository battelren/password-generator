import { ReactNode } from "react"

type CheckboxProps = {
  text: string
  isChecked: boolean
  setIsChecked: (value: React.SetStateAction<boolean>) => void
  containerClassName?: string
  checkedBoxClassName?: string
  uncheckedBoxClassName?: string
  textClassName?: string
  checkedIcon?: ReactNode
}

function Checkbox(props: CheckboxProps) {
  const { text, isChecked, setIsChecked, containerClassName, checkedBoxClassName, textClassName, uncheckedBoxClassName, checkedIcon } = props
  const containerBaseClassName = "w-[1.5rem] h-[1.5rem] rounded-md flex flex-row gap-x-[0.3rem] items-center justify-center cursor-pointer"

  return (
    <div
      className={containerClassName ?? "flex flex-row gap-x-[0.4rem] items-center"}
      onTouchEnd={(e) => {
        setIsChecked(!isChecked)
        e.preventDefault()
        e.stopPropagation()
      }}
      onMouseUp={(e) => {
        setIsChecked(!isChecked)
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {isChecked ? (
        <div className={checkedBoxClassName ?? `bg-indigo-500 ${containerBaseClassName}`}>{checkedIcon}</div>
      ) : (
        <div className={uncheckedBoxClassName ?? `border border-gray-400 ${containerBaseClassName}`}></div>
      )}
      <span className={textClassName ?? "text-gray-700 text-[1.2rem]"}>{text}</span>
    </div>
  )
}

export { Checkbox }
