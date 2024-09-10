import SocialLinks from "@/components/Nav/SocialLinks";

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
                    <a href="/photos" className="text-custom-500 hover:text-custom-600">
                        photographer
                    </a>
                    , Pittsburgh and Ohio State sports fan, and can't live without music. You can usually find me{" "}
                    <a href="https://github.com/slyguy5646" target="_blank" className="text-custom-500 hover:text-custom-600">
                        coding
                    </a>{" "}
                    or hanging out with friends. I also occasionally{" "}
                    <a href="/blog" className="text-custom-500 hover:text-custom-600">
                        write about things
                    </a>
                    .
                </div>

                <div className="pt-8">
                    I'm a co-founder of <a href="https://mergi.co" target="_blank" className="text-custom-500 hover:text-custom-600">Mergi</a>...
                </div>
                <div className="pt-2">
                    and I currently work at <a href="https://roda.com" target="_blank" className="text-custom-500 hover:text-custom-600">Roda</a>.
                </div>

                <div className="fixed bottom-8">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}
