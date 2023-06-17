interface Devs {
    Icon: string,
    Name: string,
    Desc: string
    Link: string
}

const Devs: Devs[] = [
    {
        Icon: "https://avatars.githubusercontent.com/u/121654029",
        Name: "ame . x",
        Desc: "色々してる訳ではないが色々してる",
        Link: "https://github.com/edamame-x"
    }
]


//ここで組み立て

/*
<div className="text-center w-30">
            <img
              src="https://avatars.githubusercontent.com/u/121654029"
              alt="DevIcon"
              className="rounded-full w-20 h-20 mt-5 mx-auto"
            />
            <div className="mt-5 text-xl">Name</div>
            <div className="mt-2 text-sm word-break">Description</div>
          </div>
*/

export default Devs