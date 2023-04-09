import { useEffect, useState } from "react"
import { Range } from "react-range"

type SliderProps = {
  trackClassName: string
  thumbClassName: string
  min?: number
  max?: number
  value: number
  step?: number
  onChange: (value: number) => void
}

function Slider(props: SliderProps) {
  const { trackClassName, thumbClassName, min, max, value, step, onChange } = props

  const [values, setValues] = useState([value])

  useEffect(() => {
    setValues(() => [value])
  }, [value])

  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={(newValue) => onChange(newValue[0])}
      draggableTrack={true}
      allowOverlap={true}
      renderTrack={({ props, children }) => (
        <div {...props} className={trackClassName}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => <div {...props} className={thumbClassName} />}
    />
  )
}

export { Slider }
