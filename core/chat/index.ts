export interface Message {
  user: string;
  type: "text" | "enter" | "exit" | "system";
  body: string;
  room: string;
  date: Date;
  uuid: string;
}
