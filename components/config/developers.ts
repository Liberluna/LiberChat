interface Developer {
  icon: string;
  name: string;
  desc: string;
  link: string;
}

let Devs: Developer[] = [
  {
  icon: "https://github.com/Pochi-Liberluna.png",
    name: "Pochi",
    desc: "Liberlunaのリーダー。LiberChatの開発に'少しは'携わっている。ほとんどTypeScriptで書かれてて何もできない。気に食わない所を修正したりしてる。",
    link: "https://twitter.com/Pochi_Liberluna",
  },
  {
    icon: "https://github.com/nakasyou.png",
    name: "nakasyou",
    desc: "LiberChatの開発指揮者、メイン開発者。主にバックエンド・UXを担当。",
    link: "https://nakasyou.github.io",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/121654029",
    name: "ame . x",
    desc: "色々してる訳ではないが色々してる。フロントエンド・UI担当",
    link: "https://github.com/edamame-x",
  },
];

//shuffle

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

Devs = shuffle(Devs);

export default Devs;
