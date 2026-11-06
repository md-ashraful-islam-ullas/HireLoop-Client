import {
  Bookmark,
  Building2,
  ChartColumnIncreasing,
  Contact,
  Hexagon,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: Sparkles,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: Contact,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
];

const JobFeature = () => {
  return (
    <section className="bg-[#111112] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-375">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-white/65 sm:text-base">
            <span className="size-2 bg-[#6550f4]" aria-hidden="true" />
            <span>Features Job</span>
            <span className="size-2 bg-[#6550f4]" aria-hidden="true" />
          </div>

          <h2 className="mx-auto mt-6 max-w-145 text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:mt-20 xl:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex items-start gap-7">
              <div className="flex size-24 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-linear-to-br from-[#030304] to-[#1b1b1d] shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <Icon
                  className="size-8 text-[#e7a9ff]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className="pt-0.5">
                <h3 className="text-lg font-medium leading-tight text-white sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-50 text-base leading-7 text-white/60">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobFeature;
