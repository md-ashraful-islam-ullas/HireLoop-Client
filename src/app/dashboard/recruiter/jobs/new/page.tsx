"use client";

import type { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "@/lib/actions/jobs";
import { JobFormData } from "@/types/jobs";

const categories = [
  "Engineering",
  "Design",
  "Product",
  "Marketing",
  "Data & AI",
  "DevOps",
];
const levels = ["Entry", "Junior", "Mid", "Senior", "Lead"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const workModes = ["On-site", "Hybrid", "Remote"];
const benefits = [
  "Health insurance",
  "Flexible hours",
  "Paid leave",
  "Learning budget",
  "Bonus",
];

const fieldClass =
  "h-12 rounded-lg border-white/15 bg-[#0a0a0b] px-3.5 text-sm text-white placeholder:text-white/45 focus-visible:border-[#6650ed] focus-visible:ring-[#6650ed]/30";
const areaClass =
  "rounded-lg border-white/15 bg-[#0a0a0b] px-3.5 py-3 text-sm leading-6 text-white placeholder:text-white/45 focus-visible:border-[#6650ed] focus-visible:ring-[#6650ed]/30";
const selectClass =
  "h-12 w-full rounded-lg border border-white/15 bg-[#0a0a0b] px-3.5 text-sm text-white outline-none transition-colors focus-visible:border-[#6650ed] focus-visible:ring-3 focus-visible:ring-[#6650ed]/30";
const labelClass = "text-sm font-medium text-white/85";

type ChipProps = {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  defaultChecked?: boolean;
};

function Chip({ type, name, value, defaultChecked }: ChipProps) {
  return (
    <label className="cursor-pointer">
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="flex min-h-11 items-center rounded-full border border-white/10 bg-white/6 px-4 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 peer-checked:border-[#6650ed] peer-checked:bg-[#6650ed]/25 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#8e7cff]">
        {value}
      </span>
    </label>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
      {children}
    </section>
  );
}

function RecruiterJobPostingPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const jobDetails = {
      ...Object.fromEntries(formData.entries()),
      benefits: formData.getAll("benefits"),
    } as JobFormData;

    console.log("Job posting submitted:", jobDetails);
    const result = await createJob(jobDetails);
    console.log("Job created:", result);
  }

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#030304] px-4 py-16 text-white sm:px-6 lg:px-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-107.5 bg-[radial-gradient(ellipse_at_top,rgba(65,65,68,0.34),transparent_68%)]" />

      <div className="relative w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
            Post a New Job
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-7 text-white/65 sm:text-lg">
            Add the details and reach qualified job seekers on HireLoop.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-xl border border-white/10 bg-[#111113] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:p-8"
        >
          <Section
            title="Job basics"
            description="Tell candidates what the role is and where it is based."
          >
            <div className="space-y-2">
              <Label htmlFor="job-title" className={labelClass}>
                Job title
              </Label>
              <Input
                id="job-title"
                name="jobTitle"
                placeholder="e.g. Frontend Developer"
                className={fieldClass}
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company" className={labelClass}>
                  Company name
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="e.g. Binary Brains"
                  className={fieldClass}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className={labelClass}>
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Dhaka, Bangladesh"
                  className={fieldClass}
                  required
                />
              </div>

              <select
                id="category"
                name="category"
                defaultValue=""
                className={selectClass}
              >
                <option value="">Select category</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                id="level"
                name="level"
                defaultValue=""
                className={selectClass}
              >
                <option value="">Select level</option>
                {levels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className="space-y-2">
              <legend className={labelClass}>Job type</legend>
              <div className="flex flex-wrap gap-2.5">
                {jobTypes.map((item, index) => (
                  <Chip
                    key={item}
                    type="radio"
                    name="jobType"
                    value={item}
                    defaultChecked={index === 0}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className={labelClass}>Work mode</legend>
              <div className="flex flex-wrap gap-2.5">
                {workModes.map((item, index) => (
                  <Chip
                    key={item}
                    type="radio"
                    name="workMode"
                    value={item}
                    defaultChecked={index === 0}
                  />
                ))}
              </div>
            </fieldset>
          </Section>

          <Section
            title="Role details"
            description="Describe the opportunity and what you are looking for."
          >
            <div className="space-y-2">
              <Label htmlFor="description" className={labelClass}>
                Job description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell candidates about the role, the team, and day-to-day work."
                className={`${areaClass} min-h-32`}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className={labelClass}>
                Requirements
              </Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="List the skills, experience, and qualifications needed."
                className={`${areaClass} min-h-28`}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className={labelClass}>
                Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                placeholder="React, Next.js, Tailwind CSS"
                className={fieldClass}
              />
              <p className="text-xs text-white/55">
                Separate skills with commas.
              </p>
            </div>

            <fieldset className="space-y-2">
              <legend className={labelClass}>
                Benefits{" "}
                <span className="font-normal text-white/55">(optional)</span>
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {benefits.map((item) => (
                  <Chip
                    key={item}
                    type="checkbox"
                    name="benefits"
                    value={item}
                  />
                ))}
              </div>
            </fieldset>
          </Section>

          <Section
            title="Salary and applications"
            description="Set the pay range and how candidates should apply."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="salary-min" className={labelClass}>
                  Minimum salary
                </Label>
                <Input
                  id="salary-min"
                  name="salaryMin"
                  inputMode="numeric"
                  placeholder="e.g. 80,000"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary-max" className={labelClass}>
                  Maximum salary
                </Label>
                <Input
                  id="salary-max"
                  name="salaryMax"
                  inputMode="numeric"
                  placeholder="e.g. 120,000"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency" className={labelClass}>
                  Currency
                </Label>
                <select
                  id="currency"
                  name="currency"
                  defaultValue="BDT"
                  className={selectClass}
                >
                  <option value="BDT">BDT (৳)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="period" className={labelClass}>
                  Pay period
                </Label>
                <select
                  id="period"
                  name="period"
                  defaultValue="month"
                  className={selectClass}
                >
                  <option value="month">Per month</option>
                  <option value="year">Per year</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className={labelClass}>
                  Application deadline
                </Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  className={`${fieldClass} scheme-dark`}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="openings" className={labelClass}>
                  Number of openings
                </Label>
                <Input
                  id="openings"
                  name="openings"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="apply-email" className={labelClass}>
                Contact email for applicants
              </Label>
              <Input
                id="apply-email"
                name="applyEmail"
                type="email"
                placeholder="careers@company.com"
                className={fieldClass}
                required
              />
            </div>
          </Section>

          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 className="size-4 text-[#8e7cff]" />
              You can edit these details later.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-white/15 bg-[#111113]/80 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                Save draft
              </Button>
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-xl bg-[#6650ed] px-8 font-semibold text-white shadow-[0_0_18px_rgba(102,80,237,0.35)] hover:bg-[#7663f2]"
              >
                Publish job
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecruiterJobPostingPage;
