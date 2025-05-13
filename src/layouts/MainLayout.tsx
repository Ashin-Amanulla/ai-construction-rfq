import { useStore } from '@/store/useStore';
import { ProjectList } from '@/components/ProjectList/ProjectList';
import { ChatInterface } from '@/components/Chat/ChatInterface';
import { WorkflowSummary } from '@/components/Workflow/WorkflowSummary';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export const MainLayout = () => {
  const { isMobileMenuOpen, toggleMobileMenu, isRightPanelOpen } = useStore();
  
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 md:px-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden mr-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">RFQ Manager</span>
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm">Alex Rodriguez</span>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Project List */}
        <aside className={cn(
          "w-80 border-r bg-muted/40 h-full md:block transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "block absolute z-10 inset-y-14 left-0 right-0 w-full bg-background" : "hidden"
        )}>
          <ProjectList />
        </aside>
        
        {/* Middle Panel - Chat Interface */}
        <main className="flex-1 overflow-hidden flex flex-col">
          <ChatInterface />
        </main>
        
        {/* Right Panel - Workflow Summary */}
        {isRightPanelOpen && (
          <aside className="w-80 border-l h-full hidden md:block">
            <WorkflowSummary />
          </aside>
        )}
      </div>
    </div>
  );
};