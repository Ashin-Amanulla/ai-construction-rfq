import { formatDistanceToNow } from 'date-fns';
import { ChatMessage as ChatMessageType, MessageType } from '@/types';
import { cn } from '@/lib/utils';
import { Paperclip, Bot, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';
  
  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
          {message.content}
        </div>
      </div>
    );
  }
  
  const renderAttachments = () => {
    if (!message.attachments || message.attachments.length === 0) return null;
    
    return (
      <div className="mt-2 space-y-2">
        {message.attachments.map((attachment) => (
          <div 
            key={attachment.id}
            className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 text-sm"
          >
            <Paperclip className="h-4 w-4" />
            <span className="flex-1 truncate">{attachment.name}</span>
            <span className="text-xs text-muted-foreground">
              {(attachment.size / 1000000).toFixed(1)} MB
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className={cn(
      "flex gap-3 mb-4 max-w-3xl",
      isUser ? "ml-auto flex-row-reverse" : ""
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>
      
      <Card className={cn(
        "p-4 w-full",
        isUser ? "bg-primary text-primary-foreground" : "",
        message.type === MessageType.FILE ? "border-dashed" : ""
      )}>
        <div className="flex justify-between items-start mb-1">
          <span className="font-medium text-sm">
            {isUser ? 'You' : 'Assistant'}
          </span>
          <span className="text-xs opacity-70">
            {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
          </span>
        </div>
        
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {renderAttachments()}
      </Card>
    </div>
  );
};