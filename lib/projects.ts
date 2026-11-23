import { flagshipProject, workProjects, type Project } from "@/content/site";

export const allProjects: Project[] = [flagshipProject, ...workProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return allProjects
    .filter((p): p is Project & { slug: string } => Boolean(p.hasCaseStudy && p.slug))
    .map((p) => p.slug);
}
