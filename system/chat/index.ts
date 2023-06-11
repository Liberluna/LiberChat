/**
 * メッセージのType定義
 */
export interface Message {
  text: string
  user: string
  room: string
}
class Listener {
  constructor(room: string){
    const kv = await Deno.openKv()
    this.promise = new Promise((resolve) => {
      
    })
  }
  waitRes () {
    
  }
}
