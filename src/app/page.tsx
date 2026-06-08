export default function Home() {
  return (
    <div className="w-full flex justify-center ">
      <div className="sm:max-w-[70%] lg:w-[50%] sm:absolute sm:px-0 px-6 top-0 left-[96px] flex flex-col items-start pt-10 sm:pt-24 lg:border-red-500 md:border-yellow-500 sm:border-green-500">
        <div>
          Liam Monaghan{" "}
          <a className="mt-8" target="_blank" href="https://light.lpm.sh">
            💡
          </a>
        </div>

        <div className="pt-8">
          I&apos;m a Christian, student, developer,{" "}
          <a href="/photos" className="text-neutral-500 hover:text-neutral-600 underline">
            photographer
          </a>
          , Pittsburgh and Ohio State sports fan, and can't live without music. You can usually find me{" "}
          <a href="https://github.com/lpmsh" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            coding
          </a>{" "}
          or hanging out with friends. I also occasionally{" "}
          <a href="/blog" className="text-neutral-500 hover:text-neutral-600 underline">
            write about things
          </a>
          .
        </div>

        {/*<div className="pt-8">
          I'm currently hacking on{" "}
          <a href="https://promptiac.com?utm_source=lpmsh" target="_blank" className="text-blue-500 hover:text-opacity-70">
            Promptiac
          </a>
          .
        </div>*/}

        <div className="pt-8">
          I'm currently working on developer relations at{" "}
          <a href="https://merge.dev" target="_blank" className="text-[#2C2A25] hover:text-opacity-70 underline">
            Merge
          </a>{" "}
          and studying computer science at{" "}
          <a href="https://purdue.edu" target="_blank" className="text-[#CFB991] hover:text-opacity-70 underline">
            Purdue
          </a>
          .
        </div>
        <div className="pt-2">
          I was previously a software engineer intern for{" "}
          <a href="https://flowglad.com" target="_blank" className="text-[#DD7D2A] hover:text-opacity-70 underline">
            Flowglad
          </a>{" "}
          and{" "}
          <a href="https://roda.com" target="_blank" className="text-[#1D6CDC] hover:text-opacity-70 underline">
            Roda
          </a>
          .
        </div>

        <div className="pt-8">
          You can reach me on{" "}
          <a href="https://twitter.com/lmon_25" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            X
          </a>{" "}
          or email: monaghal [at] purdue [dot] edu. You can also find me on{" "}
          <a href="https://www.linkedin.com/in/liampmonaghan/" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            LinkedIn
          </a>
          {" or "}
          <a href="https://instagram.com/lpm_visuals" target="_blank" className="text-neutral-500 hover:text-neutral-600 underline">
            Instagram
          </a>
          .
        </div>
      </div>
    </div>
  );
}
