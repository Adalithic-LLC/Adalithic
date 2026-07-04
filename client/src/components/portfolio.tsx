import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import type { Project } from "@shared/schema";

// Import the Arcatext logo (absolute path so it resolves from any URL depth)
const arcatextLogo = "/Arcatext%20logo.png";

export default function Portfolio() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const formatDetails = (details: string) => {
    if (!details) return null;
    const lines = details.split('\n');
    return lines.map((line, index) => {
      if (line.includes('arcatextapp@gmail.com')) {
        const parts = line.split('arcatextapp@gmail.com');
        return (
          <span key={index} className="block">
            {parts[0]}
            <a 
              href="mailto:arcatextapp@gmail.com" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              arcatextapp@gmail.com
            </a>
            {parts[1]}
          </span>
        );
      }
      if (line.includes('Privacy policy')) {
        return (
          <span key={index} className="block">
            <a 
              href="/privacy" 
              className="text-primary hover:underline"
            >
              Privacy policy
            </a>
          </span>
        );
      }
      return <span key={index} className="block">{line}</span>;
    });
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="h-8 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src={arcatextLogo} 
                      alt="Arcatext Logo" 
                      className="w-auto h-8 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary mb-6">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.body}
                  </p>
                  <div className="text-gray-600 space-y-2">
                    {formatDetails(project.details)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
