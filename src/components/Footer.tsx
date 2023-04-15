const repoUrl = "https://github.com/battelren/password-generator"

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center mt-10 text-gray-500 text-sm font-medium mx-[1.5rem]">
      <div className="font-bold">■開発言語など</div>
      <div>React, TypeScript, Heroicons</div>
      <br />
      <span className="font-bold">■GitHub</span>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        {repoUrl}
      </a>
    </div>
  )
}

export { Footer }
