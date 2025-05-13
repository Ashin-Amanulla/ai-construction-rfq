import { formatDistanceToNow } from 'date-fns';
import { TimelineItem as TimelineItemType } from '@/types';

interface TimelineItemProps {
  item: TimelineItemType;
  isLast: boolean;
}

export const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        {!isLast && <div className="w-0.5 bg-border flex-1 my-1"></div>}
      </div>
      
      <div className={`pb-${isLast ? '0' : '4'} flex-1`}>
        <p className="text-sm font-medium">{item.action}</p>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{item.user}</span>
          <span>{formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}</span>
        </div>
        {item.details && (
          <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
        )}
      </div>
    </div>
  );
};