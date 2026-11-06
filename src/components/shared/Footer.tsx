import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const linkGroups = [
  {
    title: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    title: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    title: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030304] px-4 pb-8 pt-14 text-white sm:px-6 sm:pt-16 lg:px-14 lg:pt-20">
      <div className="mx-auto max-w-300">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.8fr)_repeat(3,minmax(0,1fr))] md:gap-8 lg:gap-16">
          <div className="max-w-75">
            <Link href="/" aria-label="Hireloop home" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Hireloop"
                width={154}
                height={44}
                className="h-auto w-36"
              />
            </Link>

            <p className="mt-7 text-sm leading-7 text-white/45 sm:text-base">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-medium text-[#7161f5] sm:text-base">
                {group.title}
              </h2>
              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/45 transition-colors hover:text-white/80 sm:text-base"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/8 pt-7 sm:mt-20 sm:pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-colors hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="#"
              aria-label="Pinterest"
              className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-colors hover:bg-[#E60023] hover:text-white"
            >
              <FaPinterestP size={18} />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-colors hover:bg-[#0A66C2] hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:gap-7 sm:text-base">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex gap-4 sm:gap-7">
              <Link href="#" className="transition-colors hover:text-white/70">
                Terms &amp; Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white/70">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
