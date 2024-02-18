

export default function Home() {
  return (
    <main className="flex">
      <div className="main">
        <div className="w-screen h-screen">
          <nav className="flex w-screen justify-between px-11 py-8 font-medium">
            <a href="#" className="text-lg">Cynthia Ugwu</a>
            <h2 className="flex cursor-pointer">MENU<span className="font-extralight">+</span></h2>
          </nav>
          <div className="mt-36 pl-11 w-fit">
            <h1 className="text-[10rem] font-medium opacity-65 leading-">PRODUCT</h1>
            <div className="pl-44 w-fit">
              <h1 className="text-[10rem] font-medium opacity-65 leading-">DESIGNER</h1>
              <span className="">BASED IN TORONTO</span>
            </div>
          </div>


        </div>

      </div>
    </main>
  );
}
