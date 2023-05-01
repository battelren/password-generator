import React, { useEffect, useRef, useState } from "react"
import { getRandomPassword } from "../utils/RandomPassword"
import { ArrowPathIcon, Square2StackIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Slider } from "./Slider"
import { Checkbox } from "./Checkbox"

const MIN_PASSWORD_LENGTH = 1
const MAX_PASSWORD_LENGTH = 64

const PasswordGenerator: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true)
  const [password, setPassword] = useState<string>("")

  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(true)
  const [isPasswordCopied, setIsPasswordCopied] = useState<boolean>(false)

  function generatePassword() {
    setPassword(() => getRandomPassword({ passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols }))
  }

  function copyPassword() {
    navigator.clipboard.writeText(password)
    setIsPasswordCopied(() => true)
  }

  useEffect(() => {
    generatePassword()
  }, [passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols])

  useEffect(() => {
    setIsPasswordEmpty(() => password.length === 0)
    setIsPasswordCopied(() => false)
  }, [password])

  const checkedIcon = <CheckIcon className="h-[1.2rem] w-[1.2rem] text-white stroke-[0.32rem]" />

  return (
    <div className="flex flex-col gap-y-[0.8rem]">
      <label className="block font-medium text-[2rem] text-center">パスワード生成</label>
      <div>
        <div className="text-[1.2rem] h-[6rem] px-[0.5rem] border border-gray-400 rounded w-full break-all flex flex-row items-center justify-center text-center">
          {password}
        </div>
      </div>

      <div className="grid grid-rows-3 grid-flow-col h-[9rem] w-[18rem] mx-auto">
        <div className="col-span-2 flex flex-row items-center gap-x-[0.5rem]">
          <label htmlFor="password-length" className="block text-[1.2rem] whitespace-nowrap w-[8rem]">
            桁数：{passwordLength}
          </label>
          <Slider
            trackClassName="h-[1rem] w-full bg-gray-300 rounded-lg"
            thumbClassName="outline-none h-[2rem] w-[2rem] bg-gray-600 rounded-full"
            min={MIN_PASSWORD_LENGTH}
            max={MAX_PASSWORD_LENGTH}
            step={1}
            value={passwordLength}
            onChange={(newValue) => setPasswordLength(newValue)}
          />
        </div>

        <Checkbox
          text="英小文字"
          isChecked={includeLowercase}
          setIsChecked={setIncludeLowercase}
          checkedBoxClassName="checkedbox"
          uncheckedBoxClassName="uncheckedbox"
          checkedIcon={checkedIcon}
          textClassName="text-gray-700 text-[1.2rem]"
        />
        <Checkbox
          text="英大文字"
          isChecked={includeUppercase}
          setIsChecked={setIncludeUppercase}
          checkedBoxClassName="checkedbox"
          uncheckedBoxClassName="uncheckedbox"
          checkedIcon={checkedIcon}
          textClassName="text-gray-700 text-[1.2rem]"
        />
        <Checkbox
          text="数字"
          isChecked={includeNumbers}
          setIsChecked={setIncludeNumbers}
          checkedBoxClassName="checkedbox"
          uncheckedBoxClassName="uncheckedbox"
          checkedIcon={checkedIcon}
          textClassName="text-gray-700 text-[1.2rem]"
        />
        <Checkbox
          text="記号"
          isChecked={includeSymbols}
          setIsChecked={setIncludeSymbols}
          checkedBoxClassName="checkedbox"
          uncheckedBoxClassName="uncheckedbox"
          checkedIcon={checkedIcon}
          textClassName="text-gray-700 text-[1.2rem]"
        />
      </div>

      <div className="flex flex-row gap-x-[0.5rem] mt-[0.2rem]">
        <button className="button w-[50%]" onClick={() => copyPassword()} disabled={isPasswordEmpty || isPasswordCopied}>
          {isPasswordCopied ? (
            <>
              <CheckIcon className="h-[1.5rem] w-[1.5rem]" />
              コピー完了
            </>
          ) : (
            <>
              <Square2StackIcon className="h-[1.5rem] w-[1.5rem]" />
              コピー
            </>
          )}
        </button>

        <button className="button flex flex-col w-[50%]" onClick={generatePassword} disabled={isPasswordEmpty}>
          <ArrowPathIcon className="h-[1.5rem] w-[1.5rem]" />
          更新
        </button>
      </div>
    </div>
  )
}

export { PasswordGenerator }
