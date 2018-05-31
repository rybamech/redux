import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

/**
 * Сообщение представляет одно сообщение, отправленное в Thread-потоке
 */
export interface Message {
  id?: string;
  sentAt?: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
