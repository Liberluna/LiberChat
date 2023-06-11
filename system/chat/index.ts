/**
 * メッセージのType定義
 */
export interface Message {
  text: string
  user: string
  room: string
}

export type Callback = (Message) => void

const callbacks: Record<string, Callback[]>
/**
 * サーバーがメッセージを受け取る
 */
export function from (msg: Message) {
  if(!callbacks[msg.room]){
    return
  }
  
  for(const callback of callbacks[msg.room]) {
    callback(msg)
  }
  callbacks[msg.room] = []
}
/**
 * メッセージの受け取りをCallback
 */
export function setCallback(room: string, callback: Callback) {
  if(!callbacks[room]){
    callbacks[room] = []
  }
  callbacks[room].push(callback)
}
