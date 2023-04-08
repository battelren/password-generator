const repoUrl = "https://github.com/battelren/password-generator"

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <p className="text-gray-500 text-sm font-medium">
        <span className="font-bold">開発環境:</span> React, TypeScript, HeroIcons
        <br />
        <span className="font-bold">GitHub:</span>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          {repoUrl}
        </a>
      </p>
    </div>
  )
}

export { Footer }
