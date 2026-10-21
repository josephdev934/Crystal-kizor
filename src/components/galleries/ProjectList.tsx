import type { Project } from "@/content/content";

const pad = (n: number) => String(n).padStart(2, "0");

// Every project as an editorial row: no clicking needed, so projects without photos still show.
export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ol className="m-0 list-none border-b border-border p-0">
      {projects.map((project, i) => (
        <li key={project.name} className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-10">
          <p className="m-0 text-label font-semibold tracking-label md:col-span-1">{pad(i + 1)}</p>
          <div className="md:col-span-5">
            <h3 className="font-display tracking-tight text-h3">{project.name}</h3>
            <p className="mt-2 text-small font-semibold uppercase tracking-label">
              {project.location}
              {project.status ? ` · ${project.status}` : ""}
            </p>
          </div>
          <p className="m-0 max-w-reading text-body-lg md:col-span-6">{project.description}</p>
        </li>
      ))}
    </ol>
  );
}
