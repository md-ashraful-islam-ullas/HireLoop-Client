"use client";

import { useState } from "react";

import PricingCard from "./PricingCard";
import { pricingPlans } from "./Pricing-data";

const YEARLY_DISCOUNT = 0.25;

const PriceSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const isYearly = billingPeriod === "yearly";

  return (
    <section
      id="pricing"
      className="bg-[#030304] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-317.5">
        <header className="text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-white/65 sm:text-base">
            <span className="size-2 bg-[#6550f4]" aria-hidden="true" />
            <span>Pricing</span>
            <span className="size-2 bg-[#6550f4]" aria-hidden="true" />
          </div>

          <h2 className="mx-auto mt-6 max-w-140 text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </header>

        <div className="mt-14 flex justify-center sm:mt-16">
          <div className="flex rounded-full border border-white/10 bg-[#262628] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              aria-pressed={!isYearly}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors sm:text-base ${
                !isYearly
                  ? "bg-white text-[#171719] shadow-sm"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              aria-pressed={isYearly}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
                isYearly
                  ? "bg-white text-[#171719] shadow-sm"
                  : "text-white/75 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-[#df00c8] px-2 py-0.5 text-xs font-bold text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-9 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              price={
                isYearly
                  ? plan.monthlyPrice * (1 - YEARLY_DISCOUNT)
                  : plan.monthlyPrice
              }
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
