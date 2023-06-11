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
 * メッセージがくるまでWait
 */
export function getMessage(room: string) {
  return new Promise((resolve) => {
    if(!callbacks[room]){
      callbacks[room] = []
    }
    callbacks[room].push(resolve)
  })
}
