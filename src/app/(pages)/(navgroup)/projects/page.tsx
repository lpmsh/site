import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import mergi from "@/assets/mergi.png";
import puppo from "@/assets/puppo.png";
import studysail from "@/assets/studysail.png";



interface Project {
    title: string;
    description: string;
    dateRange: [string, string];
    logo?: string | StaticImport;
    link?: string;
    color?: string;
}
const projects: Project[] = [
    {
        title: "Mergi",
        description:
            "A calendar app for students by students. Mergi is, finally, a good time management tool for students to manage every aspect of their lives in and out of school. So many students, including my co-founder and I, have difficulty managing time. There is no one good tool to manage all the aspects of our lives as students. We have to use tools from our school to manage assignments and our own calendars to manage our personal time.",
        dateRange: ["March 2024", "Present"],
        link: "https://mergi.co",
        color: "#F3DD51",
        logo: mergi,
    },
    {
        title: "PuppoPool",
        description:
            "PuppoPool is a digitization of my family's annual college football pool. At the end of the year, every year, my grandfather would always send out a list of the college football bowl and playoff games for our extended family to pick their winners. The person with the most correct picks would win when all the games were over. PuppoPool is simply a web based version of this system in which my family members can be invited to pick. It's complete with a leaderboard, pick monitoring system, admin panel for my grandfather and I to monitor the competition, and game data for more informed picks.",
        dateRange: ["December 2022", "Present"],
        link: "https://puppopool.com",
        logo: puppo,
    },
    {
        title: "StudySail",
        description:
            "StudySail was my take on AI flashcards. StudySaill allowed students to upload any homework assignment, studyguide, or notes from class and turn them into flashcards. Using OpenAI models and file processing techniques, StudySail would extract the text from multiple different file types and provide it to the OpenAI model as context to generate terms and defenitions for flashcards. I've since shutdown the project due to better options out there like Quizlet's new AI features.",
        dateRange: ["April 2023", "August 2023"],
        logo: studysail,
    },
];

export default function ProjectsPage() {
    return (
        <div>
            <div className="text-4xl font-bold md:text-left text-center">Projects</div>
            <div className="flex flex-col gap-y-3 mt-4">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ title, description, dateRange, link, color, logo }: Project) {
    return (
        <div className={`sm:row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-6 dark:bg-neutral-900`}>
            <div className="flex gap-x-2 items-center pb-1">
                {logo && <Image src={logo} width={35} alt="" />}
                <div className="text-2xl font-semibold" style={{ color }}>
                    {title}
                </div>
                {link && (
                    <a href={link} target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            />
                        </svg>
                    </a>
                )}
            </div>

            <div className="text-neutral-500">
                {dateRange[0]} - {dateRange[1]}
            </div>
            {description && <div className="pt-4">{description}</div>}
        </div>
    );
}
