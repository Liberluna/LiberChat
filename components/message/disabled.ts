const DoNotUseWords: string[] = ["ポチンチン"]; //伏字にする言葉 XSS対策にもOK
const SysMsg = "**システムにより伏字になりました**"; //伏字にしたときに置き換えられる言葉

export { DoNotUseWords, SysMsg };
