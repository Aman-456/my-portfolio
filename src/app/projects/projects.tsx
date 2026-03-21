"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        DATA.projects.forEach((p) =>
            (p.technologies as readonly string[]).forEach((t) => tags.add(t)),
        );
        return Array.from(tags).sort();
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        return DATA.projects.filter((project) => {
            const matchesQuery =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((tag) =>
                    (project.technologies as readonly string[]).includes(tag),
                );

            return matchesQuery && matchesTags;
        });
    }, [searchQuery, selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
    };

    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 w-full max-w-2xl mx-auto">
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder="Search by title or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex h-14 w-full rounded-xl border-2 border-input bg-background px-6 py-2 text-lg shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mt-6">
                            {allTags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant={
                                        selectedTags.includes(tag) ? "default" : "secondary"
                                    }
                                    className="cursor-pointer px-3 py-1 text-sm transition-all hover:scale-105"
                                    onClick={() => toggleTag(tag)}
                                >
                                    {tag}
                                </Badge>
                            ))}
                            {selectedTags.length > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="cursor-pointer px-3 py-1 text-sm transition-all hover:scale-105"
                                    onClick={() => setSelectedTags([])}
                                >
                                    Clear All
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>
            </BlurFade>

            <div className="mt-12">
                {filteredProjects.length === 0 ? (
                    <p className="text-center text-muted-foreground mt-8">
                        No projects found matching your criteria.
                    </p>
                ) : (
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
                        {filteredProjects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
