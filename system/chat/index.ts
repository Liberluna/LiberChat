/**
 * メッセージのType定義
 */
export interface Message {
  text: string
  user: string
  room: string
}
export function waitRes () {
  return new Promise(resolve => {
    setTimeout(e=>resolve({hello:"world"},100)
  })
}
