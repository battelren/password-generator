const repoUrl = "https://github.com/battelren/password-generator"

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[1rem] justify-center text-gray-500 text-sm font-medium mx-[1.5rem]">
      <div>
        <div className="font-bold">■開発言語など</div>
        <div>React, TypeScript, Heroicons</div>
      </div>

      <div>
        <div className="font-bold">■GitHub</div>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          {repoUrl}
        </a>
      </div>
    </div>
  )
}

export { Footer }
