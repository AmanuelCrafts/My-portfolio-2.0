import HibretBooks from "@/assets/projects/Book App.png";
import Ethio from "@/assets/projects/ehtioplus.png";
import Tesla from "@/assets/projects/tesla.png";
import Sheger from "@/assets/projects/sheger.png";
import AdminDashboard from "@/assets/projects/admind-dasboard.jpg.png";
import xClone from "@/assets/projects/x.png";
import Movie from "@/assets/projects/mood2movie.png";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "E-commerce Website",
    year: "2024",
    title: "Full stack e-commerce Website not finished yet",
    results: [
      { title: "Full Stack" },
      { title: "Good looking" },
      { title: "Used MERN stack" },
    ],
    link: "https://sheger-store.vercel.app/",
    image: Sheger,
  },
  {
    company: "Hibret Books",
    year: "2024",
    title: "Books from Grade 9 to 12 with AI assistance",
    results: [
      { title: "AI Integration" },
      { title: "Improved site speed by 50%" },
      { title: "Used firebase as a backend" },
    ],
    link: "https://hibretbooks.vercel.app/",
    image: HibretBooks,
  },
  {
    company: "Ethio plus",
    year: "2022",
    title: "The cloned version of Disney +",
    results: [
      { title: "Full stack" },
      { title: "better looking" },
      { title: "Used firebase as a backend" },
    ],
    link: "https://aman-ethio-plus.netlify.app/",
    image: Ethio,
  },
  {
    company: "Tesla clone",
    year: "2024",
    title: "The cloned version of Tesla",
    results: [
      { title: "Used redux for state management" },
      { title: "Improved site speed by 50%" },
      { title: "Modern Animations" },
    ],
    link: "https://aman-tesla-clone.netlify.app/",
    image: Tesla,
  },
  {
    company: "Admin Dashboard",
    year: "2023",
    title: "Company management Admin Dashboard",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://admin-dashboard-aman.vercel.app/",
    image: AdminDashboard,
  },
  {
    company: "X Clone",
    year: "2024",
    title: "The Clone of X previously called Twitter",
    results: [
      { title: "Full Stack Web App" },
      { title: "Uses the MERN stack" },
      { title: "Better UI/UX" },
    ],
    link: "https://github.com/AmanuelCrafts/x-clone",
    image: xClone,
  },
  {
    company: "Mood to Movie",
    year: "2024",
    title: "Recommends Movie based on your mood",
    results: [
      { title: "Simple UI/UX" },
      { title: "Uses the TMDB api" },
      { title: "React project" },
    ],
    link: "https://mood-2-movie.vercel.app/",
    image: Movie,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real-world Results"
          subtitle="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${index * 10}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full rounded-3xl lg:w-auto lg:max-w-none"
                    width={1000}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
