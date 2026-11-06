import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#030304] px-4 py-24 text-white sm:px-6 sm:py-28 lg:px-14 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-bg.png"
          alt=""
          fill
          className="object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(73,61,239,0.82),rgba(15,13,66,0.5)_52%,rgba(3,3,4,0.96)_62%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030304]/20 to-[#030304]" />
      </div>

      <div className="mx-auto flex max-w-275 flex-col items-center text-center motion-safe:animate-[cta-enter_700ms_ease-out_both]">
        <h2 className="max-w-190 text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-5 max-w-180 text-base font-medium leading-7 text-white/65 sm:text-lg">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-9 flex w-full flex-row items-stretch justify-center gap-3 sm:w-auto sm:items-center">
          <Link
            href="/sign-up"
            className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#171719] shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="rounded-xl border border-white/15 bg-[#111113]/80 px-6 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
