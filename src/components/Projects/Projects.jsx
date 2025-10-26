import { lineClamp } from "react";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="mt-12">
        <div className="flex gap-6 overflow-x-auto pb-6 px-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {projects.map((project) => (
            <article
              key={project.id}
              className="min-w-[300px] md:min-w-0 bg-gray-900/70 border border-white/10 rounded-2xl p-6 shadow-[0_10px_30px_rgba(2,6,23,0.6)] transform transition hover:scale-[1.02] snap-start"
            >
              <div className="w-full h-40 rounded-md overflow-hidden mb-4 bg-black/20">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#8245ec]/20 text-[#e9d5ff] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsList = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="...">
            {/* ...existing project card markup... */}
          </article>
        ))}
      </div>
    </section>
  );
};