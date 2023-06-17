export interface Message {
  user: string
  type: "text" | "enter" | "exit"
  body: string
  room: string
  date: Date
  processed: boolean // 既に処理されているか。
  hashtrip: string //二度の処理を防ぐ
  [x: string]: any //こことの競合 プロパティ意外はオウム返し 
}
