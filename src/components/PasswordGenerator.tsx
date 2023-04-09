import React, { useEffect, useRef, useState } from "react"
import { Checkbox } from "./Checkbox"
import { getRandomPassword } from "../utils/RandomPassword"
import { ArrowPathIcon, Square2StackIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Slider } from "./Slider"

const MIN_PASSWORD_LENGTH = 4
const MAX_PASSWORD_LENGTH = 32

const PasswordGenerator: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState<number>(12)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true)
  const [password, setPassword] = useState<string>("")

  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(true)
  const [isPasswordCopied, setIsPasswordCopied] = useState<boolean>(false)

  const passwordRef = useRef<HTMLInputElement>(null)

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

  return (
    <div className=" flex flex-col p-[1rem] gap-y-[0.5rem]">
      <div className="mb-[0.8rem]">
        <label htmlFor="password" className="block font-medium mb-[1rem] text-[1.8rem] text-center">
          パスワード生成
        </label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          ref={passwordRef}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none w-full border border-gray-400 py-2 px-4 rounded text-center"
        />
      </div>

      <div className="grid grid-cols-2 gap-y-[0.5rem] mx-[3rem]">
        <div className="col-span-2 flex flex-row items-center gap-x-[0.5rem]">
          <label htmlFor="password-length" className="block text-[1.2rem] whitespace-nowrap w-[8rem]">
            桁数：{passwordLength}
          </label>
          <Slider
            trackClassName="h-[0.5rem] w-full bg-gray-300 rounded-lg"
            thumbClassName="outline-none h-[1.5rem] w-[1.5rem] bg-gray-600 rounded-full"
            min={MIN_PASSWORD_LENGTH}
            max={MAX_PASSWORD_LENGTH}
            step={1}
            value={passwordLength}
            onChange={(newValue) => setPasswordLength(newValue)}
          />
        </div>

        <Checkbox text="英小文字" state={includeLowercase} setState={setIncludeLowercase} />
        <Checkbox text="英大文字" state={includeUppercase} setState={setIncludeUppercase} />
        <Checkbox text="数字" state={includeNumbers} setState={setIncludeNumbers} />
        <Checkbox text="記号" state={includeSymbols} setState={setIncludeSymbols} />
      </div>

      <div className="flex flex-row gap-x-[0.5rem] mt-[0.8rem]">
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
