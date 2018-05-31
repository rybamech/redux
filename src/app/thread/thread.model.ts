import { Message } from '../message/message.model';

/**
 * Thread (Тема) представляет группу пользователей, обменивающихся сообщениями
 */
export interface Thread {
  id: string;
  name: string;
  avatarSrc: string;
  messages: Message[];
}
