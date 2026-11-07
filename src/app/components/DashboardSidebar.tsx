"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Bookmark,
  UserRound,
  Settings,
  PlusCircle,
  Users,
  Building2,
  ChartNoAxesCombined,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const menuItemByRole = {
  seeker: [
    {
      id: "overview",
      name: "Overview",
      url: "/dashboard/seeker",
      icon: LayoutDashboard,
    },
    {
      id: "browse-jobs",
      name: "Browse Jobs",
      url: "/dashboard/seeker/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "applications",
      name: "My Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      id: "saved-jobs",
      name: "Saved Jobs",
      url: "/dashboard/seeker/saved-jobs",
      icon: Bookmark,
    },
    {
      id: "profile",
      name: "My Profile",
      url: "/dashboard/seeker/profile",
      icon: UserRound,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/seeker/settings",
      icon: Settings,
    },
  ],
  recruiter: [
    {
      id: "overview",
      name: "Overview",
      url: "/dashboard/recruiter",
      icon: LayoutDashboard,
    },
    {
      id: "post-job",
      name: "Post a Job",
      url: "/dashboard/recruiter/jobs/new",
      icon: PlusCircle,
    },
    {
      id: "manage-jobs",
      name: "Manage Jobs",
      url: "/dashboard/recruiter/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "applicants",
      name: "Applicants",
      url: "/dashboard/recruiter/applicants",
      icon: Users,
    },
    {
      id: "company-profile",
      name: "Company Profile",
      url: "/dashboard/recruiter/company",
      icon: Building2,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/recruiter/settings",
      icon: Settings,
    },
  ],
  admin: [
    {
      id: "overview",
      name: "Overview",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      name: "Manage Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      id: "jobs",
      name: "Manage Jobs",
      url: "/dashboard/admin/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "companies",
      name: "Manage Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      id: "analytics",
      name: "Reports & Analytics",
      url: "/dashboard/admin/analytics",
      icon: ChartNoAxesCombined,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};

export function DashboardSidebar() {
  const { data: session } = authClient.useSession();
  const role = session?.user?.role || "recruiter"; // Default to admin if role is not available

  console.log("Session:", session);
  console.log("User:", session?.user);
  console.log("Role:", session?.user?.role);
  return (
    <Sidebar >
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup>
          <SidebarMenu>
            {menuItemByRole[role].map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton render={<Link href={item.url} />}>
                  <item.icon />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
