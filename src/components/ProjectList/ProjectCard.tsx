import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useStore } from '@/store/useStore';
import { Project } from '@/types';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, AlertCircle, Award, XCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { selectedProjectId, setSelectedProjectId } = useStore();
  const isSelected = selectedProjectId === project.id;
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Draft':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'Costing':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'Review':
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case 'Submitted':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Won':
        return <Award className="h-4 w-4 text-green-500" />;
      case 'Lost':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft':
        return 'bg-muted text-muted-foreground';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Costing':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300';
      case 'Review':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300';
      case 'Submitted':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Won':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Lost':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };
  
  return (
    <div
      className={cn(
        "p-4 mb-2 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted",
        isSelected ? "bg-muted border-l-4 border-primary" : "border-l-4 border-transparent"
      )}
      onClick={() => setSelectedProjectId(project.id)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-sm truncate max-w-[180px]">{project.name}</h3>
        <span className={cn("text-xs px-2 py-1 rounded-full flex items-center gap-1", getStatusColor(project.status))}>
          {getStatusIcon(project.status)}
          {project.status}
        </span>
      </div>
      <div className="text-xs text-muted-foreground mb-1">
        {project.client}
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">
          {project.engineer}
        </span>
        <span className="text-muted-foreground">
          {formatDistanceToNow(new Date(project.lastActivity), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
};