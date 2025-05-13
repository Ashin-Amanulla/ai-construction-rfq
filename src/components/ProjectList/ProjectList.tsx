import { FC } from 'react';
import { useStore } from '@/store/useStore';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Search } from 'lucide-react';

export const ProjectList: FC = () => {
  const { projects } = useStore();
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            <span>New RFQ</span>
          </Button>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8"
          />
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 mb-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="m-0">
            <div className="space-y-0 overflow-auto">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="active" className="m-0">
            <div className="space-y-0 overflow-auto">
              {projects
                .filter(p => ['Draft', 'In Progress', 'Costing', 'Review'].includes(p.status))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="m-0">
            <div className="space-y-0 overflow-auto">
              {projects
                .filter(p => ['Submitted', 'Won', 'Lost'].includes(p.status))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};