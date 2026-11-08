import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getJobs } from "@/lib/api/jobs";

type MongoId = string | { $oid: string };

type PostedJob = {
  _id: MongoId;
  jobTitle: string;
  company: string;
  location: string;
  salaryMin: string;
  salaryMax: string;
  currency: string;
  period: string;
  deadline: string;
};

const currencySymbols: Record<string, string> = {
  BDT: "৳",
  USD: "$",
  EUR: "€",
};

function getJobId(id: MongoId) {
  return typeof id === "string" ? id : id.$oid;
}

function isJobActive(deadline: string) {
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return deadline >= todayString;
}

function formatDeadline(deadline: string) {
  const parsedDeadline = new Date(`${deadline}T00:00:00`);

  if (Number.isNaN(parsedDeadline.getTime())) {
    return deadline;
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDeadline);
}

function formatSalary(job: PostedJob) {
  const { salaryMin, salaryMax, currency, period } = job;

  if (!salaryMin && !salaryMax) return "Not disclosed";

  const symbol = currencySymbols[currency] ?? "";
  const format = (value: string) =>
    `${symbol}${Number(value).toLocaleString("en-US")}`;

  const range =
    salaryMin && salaryMax
      ? `${format(salaryMin)} – ${format(salaryMax)}`
      : format(salaryMin || salaryMax);

  const suffix =
    period === "month" ? " / mo" : period === "year" ? " / yr" : "";

  return `${range}${suffix}`;
}

const RecruiterManageJobsPage = async () => {
  const jobs = (await getJobs()) as PostedJob[];

  return (
    <div className="relative min-h-full overflow-hidden bg-[#030304] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(65,65,68,0.34),transparent_68%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8e7cff]">
              Recruiter workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Manage jobs
            </h1>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Review and manage the jobs you have posted.
            </p>
          </div>

          <Button
            render={<Link href="/dashboard/recruiter/jobs/new" />}
            className="w-full bg-[#6650ed] text-white hover:bg-[#7966f1] sm:w-auto"
          >
            Publish new job
          </Button>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111113] shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="h-14 px-5 text-white/60">
                  Job name
                </TableHead>
                <TableHead className="h-14 text-white/60">Company</TableHead>
                <TableHead className="h-14 text-white/60">Location</TableHead>
                <TableHead className="h-14 text-white/60">Salary</TableHead>
                <TableHead className="h-14 text-white/60">Status</TableHead>
                <TableHead className="h-14 text-white/60">Deadline</TableHead>
                <TableHead className="h-14 px-5 text-right text-white/60">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.length > 0 ? (
                jobs.map((job) => {
                  const active = isJobActive(job.deadline);

                  return (
                    <TableRow
                      key={getJobId(job._id)}
                      className="border-white/10 hover:bg-white/4"
                    >
                      <TableCell className="px-5 py-5 font-semibold text-white">
                        {job.jobTitle}
                      </TableCell>
                      <TableCell className="py-5 text-white/75">
                        {job.company}
                      </TableCell>
                      <TableCell className="py-5 text-white/75">
                        {job.location}
                      </TableCell>
                      <TableCell className="py-5 whitespace-nowrap text-white/75">
                        {formatSalary(job)}
                      </TableCell>
                      <TableCell className="py-5">
                        <Badge
                          className={
                            active
                              ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                              : "border border-white/15 bg-white/10 text-white/60"
                          }
                        >
                          {active ? "Active" : "Closed"}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-5 text-white/75">
                        {formatDeadline(job.deadline)}
                      </TableCell>
                      <TableCell className="px-5 py-5">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            type="button"
                            className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
                          >
                            Edit
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            type="button"
                            className="text-[#8e7cff] hover:bg-white/10 hover:text-[#b2a7ff]"
                          >
                            View
                          </Button>

                          <Button
                            variant="destructive"
                            size="sm"
                            type="button"
                            className="bg-rose-500/15 text-rose-300 hover:bg-rose-500/25 hover:text-rose-200"
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableCell
                    colSpan={7}
                    className="h-32 text-center text-white/55"
                  >
                    You have not posted any jobs yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RecruiterManageJobsPage;