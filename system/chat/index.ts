/**
 * メッセージのType定義
 */
export interface Message {
  text: string
  user: string
  room: string
}
/**
 * 受信処理をする関数。
 */
export function from (msg: Message) {
  
}
