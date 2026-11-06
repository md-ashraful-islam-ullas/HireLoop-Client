import {
  ChartColumnIncreasing,
  Crown,
  LucideIcon,
  Zap,
} from "lucide-react";

export type PricingPlan = {
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    icon: Crown,
  },
  {
    name: "Growth",
    monthlyPrice: 17,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    icon: ChartColumnIncreasing,
    featured: true,
  },
  {
    name: "Premium",
    monthlyPrice: 99,
    description: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    icon: Zap,
  },
];
