export interface Message {
  user: string
  type: "text" | "enter"
  body: string
  room: string
}
