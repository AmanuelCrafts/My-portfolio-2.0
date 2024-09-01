import Arrow from "@/assets/icons/arrow-up-right.svg";

const links = [
  {
    title: "Telegram",
    href: "https://t.me/aman_z445",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/aman_z445/",
  },
  {
    title: "Github",
    href: "https://github.com/AmanuelCrafts",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/amanuel-abebaw-86151b315/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a
                className="inline-flex items-center gap-1.5"
                href={link.href}
                key={link.title}
                target="_blank"
              >
                <span className="font-semibold">{link.title}</span>
                <Arrow className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
