import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";

const trends = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const metrics = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: Building2 },
  { value: "2M", label: "Job Seekers", icon: UsersRound },
  { value: "97%", label: "Satisfaction Rate", icon: Sparkles },
];

const Banner = () => {
  return (
    <main className="relative overflow-hidden bg-[#030304] px-4 pb-12 pt-32 text-white sm:px-6 md:pt-40 lg:px-14 lg:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-107.5 bg-[radial-gradient(ellipse_at_top,rgba(65,65,68,0.34),transparent_68%)]" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/globe.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      <section className="relative z-10 mx-auto flex max-w-262.5 flex-col items-center text-center">
        {/* Jobs Badge */}

        <div className="relative mb-7 flex w-full items-center justify-center">
          {/* Horizontal Lines */}
          <div className="absolute left-1/2 top-1/2 h-px w-[65%] max-w-130 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-white/25 to-transparent" />

          {/* Badge */}
          <div className="relative z-10 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#111113] px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-white/65 shadow-[0_0_22px_rgba(255,255,255,0.04)] sm:text-sm">
            <span className="text-base" aria-hidden="true">
              💼
            </span>
            <strong className="font-bold text-white">50,000+</strong>
            <span>NEW JOBS THIS MONTH</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-212.5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[62px]">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-180 text-base font-medium leading-7 text-white/65 sm:text-lg sm:leading-8">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Form */}
        <form className="mt-8 flex w-full max-w-150 flex-col gap-2 rounded-xl border border-white/15 bg-[#111113] p-2 text-left shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:flex-row sm:items-center sm:rounded-xl">
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 py-3 text-sm font-medium text-white/60">
            <Search className="size-5 shrink-0 text-white/80" />
            <input
              type="search"
              placeholder="Job title, skill or company"
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/45"
              aria-label="Search by job title, skill or company"
            />
          </label>

          <span
            className="hidden h-7 w-px bg-white/15 sm:block"
            aria-hidden="true"
          />

          <label className="flex min-w-0 flex-1 items-center gap-3 border-t border-white/10 px-3 py-3 text-sm font-medium text-white/60 sm:border-t-0">
            <MapPin className="size-5 shrink-0 text-white/80" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/45"
              aria-label="Search by location or remote"
            />
          </label>

          <button
            type="submit"
            aria-label="Search jobs"
            className="flex size-11 shrink-0 items-center justify-center self-end rounded-lg bg-[#6650ed] text-white transition-colors hover:bg-[#7663f2] sm:self-auto"
          >
            <Search className="size-5" />
          </button>
        </form>

        {/* Trending Positions */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-sm font-medium text-white/60">
          <span className="mr-1">Trending Positions</span>

          {trends.map((trend) => (
            <button
              key={trend}
              type="button"
              className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 sm:text-sm"
            >
              {trend}
            </button>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-10 max-w-275 pb-8 sm:mt-14 lg:mt-16">
        {/* Job Seekers Text */}
        <p className="relative z-10 mx-auto max-w-150 pt-7.5 text-center text-2xl font-medium leading-snug tracking-[-0.03em] text-white/80 sm:pt-7.5 sm:text-3xl lg:text-[34px]">
          Assisting over <span className="font-bold text-white">15,000</span>{" "}
          job seekers
          <br />
          find their dream positions.
        </p>

        {/* Metrics Cards */}
        <div className="relative z-10 mx-auto mt-10 grid max-w-257.5 grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-5">
          {metrics.map(({ value, label, icon: Icon }) => (
            <article
              key={label}
              className="min-h-38.75 rounded-xl border border-white/10 bg-linear-to-br from-[#09090a] to-[#171719] p-5 text-left shadow-[0_12px_30px_rgba(0,0,0,0.28)] sm:min-h-43.75 sm:p-6"
            >
              <Icon className="size-5 text-white/90" strokeWidth={1.8} />

              <p className="mt-8 text-4xl font-bold tracking-[-0.04em] sm:mt-9 sm:text-[42px]">
                {value}
              </p>

              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Banner;
