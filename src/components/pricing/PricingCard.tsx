import { ArrowRight, Plus } from "lucide-react";

import type { PricingPlan } from "./Pricing-data";

type PricingCardProps = {
  plan: PricingPlan;
  price: number;
  billingPeriod: "monthly" | "yearly";
};

const PricingCard = ({
  plan,
  price,
  billingPeriod,
}: PricingCardProps) => {
  const Icon = plan.icon;
  const formattedPrice = Number.isInteger(price) ? price : price.toFixed(2);

  return (
    <article
      className={`flex min-h-108 flex-col rounded-3xl border p-5 transition-colors sm:p-6 ${
        plan.featured
          ? "border-white/20 bg-linear-to-br from-[#242426] to-[#141416] shadow-[0_12px_35px_rgba(255,255,255,0.12)]"
          : "border-white/15 bg-[#030304]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#080809]">
            <Icon className="size-5 text-[#e9a6ff]" strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="truncate text-2xl font-medium text-white">{plan.name}</h3>
        </div>

        <p className="shrink-0 text-white">
          <span className="text-4xl font-semibold tracking-[-0.06em]">
            ${formattedPrice}
          </span>
          <span className="ml-1 text-sm text-white/75">/month</span>
        </p>
      </div>

      <div className="mt-8">
        <p className="text-base font-medium text-white">{plan.description}</p>
        <ul className="mt-3 space-y-3" aria-label={`${plan.name} plan features`}>
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-white/65 sm:text-base"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-white/80">
                <Plus className="size-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`mt-auto flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-left text-sm font-medium transition-colors ${
          plan.featured
            ? "bg-white text-[#171719] hover:bg-white/85"
            : "bg-[#303032] text-white hover:bg-[#3b3b3e]"
        }`}
      >
        <span>Choose This Plan</span>
        <ArrowRight className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </button>

      <span className="sr-only">
        Billed {billingPeriod === "yearly" ? "yearly" : "monthly"}
      </span>
    </article>
  );
};

export default PricingCard;
