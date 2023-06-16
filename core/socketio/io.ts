interface Socket {
  emit: (data: any) => void
  on: (eventName: string, callBack: (data: any) => any) => void
}
type Io = (t: string, e?: Record<any,any>) => Socket

export async function getIO(): Promise<Io>{
  const res = await fetch("https://cdn.socket.io/socket.io-2.3.0.js")

  const script = await res.text()

  const func = new Function(script)

  const ioContainer: {
    io?: Io,
  } = {}

  func.call(ioContainer)

  const newContainer = ioContainer as {
    io: Io
  }

  return newContainer.io
}