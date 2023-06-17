export interface Message {
[x: string]: string;
  user: string
  type: "text" | "enter"
  body: string
  room: string
  date: Date
}
