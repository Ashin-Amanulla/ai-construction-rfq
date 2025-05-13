import { Project, MessageType } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Commercial Complex - Phase 1',
    client: 'Metropolis Developers Ltd',
    status: 'In Progress',
    lastActivity: '2025-06-15T14:30:00Z',
    engineer: 'Alex Rodriguez',
    deadline: '2025-07-01T23:59:59Z',
    totalCost: 12575000.50,
    markup: 15,
    stage: {
      current: 2,
      total: 5,
      name: 'Vendor RFQ Distribution'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Project created',
        sender: 'system',
        timestamp: '2025-06-10T09:00:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'New RFQ received for the Commercial Complex project. Initial review shows 25-story structure with mixed retail and office space.',
        sender: 'user',
        timestamp: '2025-06-10T09:05:00Z'
      },
      {
        id: 'msg-3',
        type: MessageType.TEXT,
        content: 'I\'ll help analyze the project requirements. Could you upload the architectural drawings and specifications?',
        sender: 'assistant',
        timestamp: '2025-06-10T09:06:00Z'
      },
      {
        id: 'msg-4',
        type: MessageType.FILE,
        content: 'Uploaded project documents',
        sender: 'user',
        timestamp: '2025-06-10T09:10:00Z',
        attachments: [
          {
            id: 'attachment-1',
            name: 'ARCH-DWG-R0.pdf',
            type: 'application/pdf',
            url: '#',
            size: 24500000
          },
          {
            id: 'attachment-2',
            name: 'STRUCT-SPECS.pdf',
            type: 'application/pdf',
            url: '#',
            size: 15700000
          }
        ]
      },
      {
        id: 'msg-5',
        type: MessageType.TEXT,
        content: 'Based on the drawings, we\'ll need detailed quotes for:\n1. Structural steel work (estimated 2,500 tons)\n2. Curtain wall systems (85,000 sq ft)\n3. MEP systems\n4. Foundation work\n\nShall I prepare RFQs for our preferred vendors?',
        sender: 'assistant',
        timestamp: '2025-06-10T09:15:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'RFQ Received',
        timestamp: '2025-06-10T09:00:00Z',
        user: 'Alex Rodriguez'
      },
      {
        id: 'timeline-2',
        action: 'Initial Review Completed',
        timestamp: '2025-06-10T11:30:00Z',
        user: 'Alex Rodriguez',
        details: 'Project deemed viable for bidding'
      },
      {
        id: 'timeline-3',
        action: 'BOM Development Started',
        timestamp: '2025-06-12T14:30:00Z',
        user: 'Sarah Chen'
      },
      {
        id: 'timeline-4',
        action: 'Vendor List Approved',
        timestamp: '2025-06-14T10:15:00Z',
        user: 'Michael Wong',
        details: '12 vendors selected for RFQ distribution'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Preliminary BOM',
        type: 'bom',
        url: '#',
        createdAt: '2025-06-12T14:30:00Z',
        updatedAt: '2025-06-14T16:45:00Z'
      },
      {
        id: 'doc-2',
        name: 'Technical Specifications',
        type: 'spec',
        url: '#',
        createdAt: '2025-06-13T09:30:00Z',
        updatedAt: '2025-06-13T09:30:00Z'
      }
    ]
  },
  {
    id: 'project-2',
    name: 'Residential Tower - The Heights',
    client: 'Urban Living Developers',
    status: 'Draft',
    lastActivity: '2025-06-17T10:00:00Z',
    engineer: 'Emily Chang',
    deadline: '2025-07-20T23:59:59Z',
    totalCost: 0,
    markup: 0,
    stage: {
      current: 1,
      total: 5,
      name: 'Initial Review'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Project created',
        sender: 'system',
        timestamp: '2025-06-17T10:00:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'New residential tower project received. Need to review feasibility.',
        sender: 'user',
        timestamp: '2025-06-17T10:05:00Z'
      },
      {
        id: 'msg-3',
        type: MessageType.TEXT,
        content: 'I\'ll help assess the project feasibility. Please share the initial project brief and any preliminary drawings.',
        sender: 'assistant',
        timestamp: '2025-06-17T10:06:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'RFQ Received',
        timestamp: '2025-06-17T10:00:00Z',
        user: 'Emily Chang'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Project Brief',
        type: 'spec',
        url: '#',
        createdAt: '2025-06-17T10:00:00Z',
        updatedAt: '2025-06-17T10:00:00Z'
      }
    ]
  },
  {
    id: 'project-3',
    name: 'Hospital Expansion Wing',
    client: 'City General Healthcare',
    status: 'Costing',
    lastActivity: '2025-06-14T11:15:00Z',
    engineer: 'Sarah Chen',
    deadline: '2025-06-30T23:59:59Z',
    totalCost: 8732575.75,
    markup: 18,
    stage: {
      current: 3,
      total: 5,
      name: 'Vendor Quote Analysis'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Project created',
        sender: 'system',
        timestamp: '2025-06-05T09:00:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'Received vendor quotes for the specialized medical gas piping system. Need to analyze compliance with HTM 02-01 standards.',
        sender: 'user',
        timestamp: '2025-06-05T09:05:00Z'
      },
      {
        id: 'msg-3',
        type: MessageType.TEXT,
        content: 'I\'ll help review the quotes against HTM 02-01 requirements. Please upload the vendor submissions.',
        sender: 'assistant',
        timestamp: '2025-06-05T09:06:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'RFQ Received',
        timestamp: '2025-06-01T09:00:00Z',
        user: 'Sarah Chen'
      },
      {
        id: 'timeline-2',
        action: 'Technical Review',
        timestamp: '2025-06-03T14:30:00Z',
        user: 'David Park',
        details: 'Medical gas system specifications validated'
      },
      {
        id: 'timeline-3',
        action: 'Vendor Quotes Received',
        timestamp: '2025-06-10T10:45:00Z',
        user: 'Sarah Chen',
        details: '4 out of 5 vendors submitted quotes'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Medical Gas BOM',
        type: 'bom',
        url: '#',
        createdAt: '2025-06-08T15:30:00Z',
        updatedAt: '2025-06-09T10:15:00Z'
      }
    ]
  },
  {
    id: 'project-4',
    name: 'Data Center Facility',
    client: 'TechCore Solutions',
    status: 'Review',
    lastActivity: '2025-06-16T13:20:00Z',
    engineer: 'Michael Wong',
    deadline: '2025-07-15T23:59:59Z',
    totalCost: 15892000.00,
    markup: 20,
    stage: {
      current: 4,
      total: 5,
      name: 'Internal Proposal Review'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Proposal draft completed',
        sender: 'system',
        timestamp: '2025-06-16T13:20:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'Technical proposal draft ready for internal review. Includes Tier III compliance details and power redundancy specifications.',
        sender: 'user',
        timestamp: '2025-06-16T13:25:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'Proposal Draft Completed',
        timestamp: '2025-06-16T13:20:00Z',
        user: 'Michael Wong',
        details: 'Awaiting technical review'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Technical Proposal Draft',
        type: 'proposal',
        url: '#',
        createdAt: '2025-06-16T13:20:00Z',
        updatedAt: '2025-06-16T13:20:00Z'
      }
    ]
  },
  {
    id: 'project-5',
    name: 'Industrial Warehouse Complex',
    client: 'Global Logistics Co',
    status: 'Submitted',
    lastActivity: '2025-06-15T16:45:00Z',
    engineer: 'Robert Martinez',
    deadline: '2025-07-30T23:59:59Z',
    totalCost: 6789000.00,
    markup: 15,
    stage: {
      current: 5,
      total: 5,
      name: 'Client Review'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Proposal submitted to client',
        sender: 'system',
        timestamp: '2025-06-15T16:45:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'Final proposal submitted. Includes value engineering options for steel structure and automated loading dock systems.',
        sender: 'user',
        timestamp: '2025-06-15T16:50:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'Proposal Submitted',
        timestamp: '2025-06-15T16:45:00Z',
        user: 'Robert Martinez',
        details: 'Awaiting client feedback'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Final Technical Proposal',
        type: 'proposal',
        url: '#',
        createdAt: '2025-06-15T16:45:00Z',
        updatedAt: '2025-06-15T16:45:00Z'
      }
    ]
  },
  {
    id: 'project-6',
    name: 'Shopping Mall Renovation',
    client: 'Retail Properties Inc',
    status: 'Won',
    lastActivity: '2025-06-10T14:30:00Z',
    engineer: 'Lisa Anderson',
    deadline: '2025-08-15T23:59:59Z',
    totalCost: 4567000.00,
    markup: 18,
    stage: {
      current: 5,
      total: 5,
      name: 'Project Won'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Project awarded',
        sender: 'system',
        timestamp: '2025-06-10T14:30:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'Client has accepted our proposal. Preparing for project handover to execution team.',
        sender: 'user',
        timestamp: '2025-06-10T14:35:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'Project Awarded',
        timestamp: '2025-06-10T14:30:00Z',
        user: 'Lisa Anderson',
        details: 'Client signed acceptance letter'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Acceptance Letter',
        type: 'spec',
        url: '#',
        createdAt: '2025-06-10T14:30:00Z',
        updatedAt: '2025-06-10T14:30:00Z'
      }
    ]
  },
  {
    id: 'project-7',
    name: 'Office Building Retrofit',
    client: 'Corporate Spaces Ltd',
    status: 'Lost',
    lastActivity: '2025-06-08T11:20:00Z',
    engineer: 'James Wilson',
    deadline: '2025-07-25T23:59:59Z',
    totalCost: 3456000.00,
    markup: 16,
    stage: {
      current: 5,
      total: 5,
      name: 'Project Lost'
    },
    messages: [
      {
        id: 'msg-1',
        type: MessageType.SYSTEM,
        content: 'Bid unsuccessful',
        sender: 'system',
        timestamp: '2025-06-08T11:20:00Z'
      },
      {
        id: 'msg-2',
        type: MessageType.TEXT,
        content: 'Client selected another contractor. Main factor was pricing. Documenting lessons learned.',
        sender: 'user',
        timestamp: '2025-06-08T11:25:00Z'
      }
    ],
    timeline: [
      {
        id: 'timeline-1',
        action: 'Bid Lost',
        timestamp: '2025-06-08T11:20:00Z',
        user: 'James Wilson',
        details: 'Competition won on lower price point'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Lessons Learned Report',
        type: 'spec',
        url: '#',
        createdAt: '2025-06-08T11:20:00Z',
        updatedAt: '2025-06-08T11:20:00Z'
      }
    ]
  }
];