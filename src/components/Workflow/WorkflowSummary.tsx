import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  FileText,
  X,
  BarChart3,
  Files,
  FileSpreadsheet,
  Calendar
} from 'lucide-react';
import { TimelineItem } from './TimelineItem';
import { formatDistanceToNow } from 'date-fns';

export const WorkflowSummary = () => {
  const { selectedProject, toggleRightPanel } = useStore();
  
  if (!selectedProject) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-lg font-medium">No project selected</h3>
          <p className="text-muted-foreground">Select a project to view workflow details.</p>
        </div>
      </div>
    );
  }
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  
  // Calculate days until deadline
  const daysUntilDeadline = () => {
    const deadline = new Date(selectedProject.deadline);
    const now = new Date();
    const diffTime = deadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-xl font-semibold">Workflow</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleRightPanel}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {/* Stage Progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{selectedProject.stage.name}</h3>
              <span className="text-xs text-muted-foreground">
                Stage {selectedProject.stage.current} of {selectedProject.stage.total}
              </span>
            </div>
            <Progress value={(selectedProject.stage.current / selectedProject.stage.total) * 100} />
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-xs flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Total Cost
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3">
                <p className="text-sm font-bold">
                  {formatCurrency(selectedProject.totalCost)}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-xs flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Markup
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3">
                <p className="text-sm font-bold">{selectedProject.markup}%</p>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader className="py-3">
                <CardTitle className="text-xs flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Deadline
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold">
                    {new Date(selectedProject.deadline).toLocaleDateString()}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    daysUntilDeadline() < 3 ? 'bg-red-100 text-red-700' : 
                    daysUntilDeadline() < 7 ? 'bg-amber-100 text-amber-700' : 
                    'bg-green-100 text-green-700'
                  }`}>
                    {daysUntilDeadline()} days left
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              View BOM
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Files className="h-4 w-4" />
              View Vendor Quotes
            </Button>
            <Button className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />
              Generate Proposal
            </Button>
          </div>
          
          <Separator />
          
          {/* Timeline */}
          <div>
            <h3 className="font-medium mb-4">Timeline</h3>
            <div className="space-y-0">
              {selectedProject.timeline.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === selectedProject.timeline.length - 1} 
                />
              ))}
            </div>
          </div>
          
          {/* Documents */}
          <div>
            <h3 className="font-medium mb-4">Documents</h3>
            <div className="space-y-2">
              {selectedProject.documents.map(doc => (
                <div 
                  key={doc.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(doc.updatedAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};