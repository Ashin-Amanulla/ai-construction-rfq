// Project Types
export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Draft' | 'In Progress' | 'Costing' | 'Review' | 'Submitted' | 'Won' | 'Lost';
  lastActivity: string;
  engineer: string;
  deadline: string;
  totalCost: number;
  markup: number;
  stage: {
    current: number;
    total: number;
    name: string;
  };
  messages: ChatMessage[];
  timeline: TimelineItem[];
  documents: Document[];
}

// Chat Message Types
export enum MessageType {
  TEXT = 'text',
  FILE = 'file',
  SYSTEM = 'system',
  FORM = 'form'
}

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  sender: 'user' | 'assistant' | 'system';
  timestamp: string;
  attachments?: Attachment[];
  formData?: Record<string, any>;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

// Timeline Item Types
export interface TimelineItem {
  id: string;
  action: string;
  timestamp: string;
  user: string;
  details?: string;
}

// Document Types
export interface Document {
  id: string;
  name: string;
  type: 'bom' | 'quote' | 'proposal' | 'spec';
  url: string;
  createdAt: string;
  updatedAt: string;
}