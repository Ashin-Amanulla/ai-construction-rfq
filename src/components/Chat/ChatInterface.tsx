import { useRef, useEffect, FormEvent, useState } from 'react';
import { useStore } from '@/store/useStore';
import { ChatMessage } from './ChatMessage';
import { MessageType } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Paperclip, SendHorizontal } from 'lucide-react';

export const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { selectedProject, addMessage } = useStore();
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProject?.messages]);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || !selectedProject) return;
    
    // Add user message
    addMessage(selectedProject.id, {
      type: MessageType.TEXT,
      content: message,
      sender: 'user'
    });
    
    // Simulate assistant response (in real app, this would be an API call)
    setTimeout(() => {
      if (selectedProject) {
        addMessage(selectedProject.id, {
          type: MessageType.TEXT,
          content: `I'm processing your request regarding "${message}". I'll get back to you shortly with more information.`,
          sender: 'assistant'
        });
      }
    }, 1000);
    
    setMessage('');
  };
  
  if (!selectedProject) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-lg font-medium">No project selected</h3>
          <p className="text-muted-foreground">Select a project from the list to view the conversation.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">{selectedProject.name}</h2>
        <p className="text-sm text-muted-foreground">{selectedProject.client}</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {selectedProject.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <Separator />
      
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="flex-shrink-0"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message or use a slash command..."
            className="flex-1"
          />
          
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim()}
            className="flex-shrink-0"
          >
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-2 flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="text-xs"
          >
            /update BOM
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="sm" 
            className="text-xs"
          >
            /status
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="text-xs"
          >
            /upload
          </Button>
        </div>
      </form>
    </div>
  );
};