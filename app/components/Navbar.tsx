import Link from "next/link";

export default function Navbar() {
return (
    <header className="text-center">
        <nav>
            <h1 className="bg-gradient-to-br to-orange-300 from-red-500 text-3xl 
            md:text-4xl lg:text-7xl 
            lg:p-10 p-2 text-white font-bold">
                G&hearts;&hearts;D FO&#128523;D <br />G&hearts;&hearts;D M&#128525;OD</h1>
                <p className="bg-gradient-to-l to-violet-200 from-pink-200 text-sm lg:text-base
                 p-2 text-yellow-700 font-bold">
                    All type of Recipes are Available here</p>
        <div className="bg-slate-800 text-white font-bold text-xs md:text-base lg:text-xl p-3 
        lg:space-x-14 space-x-5">
        <Link href="/" className="hover:text-yellow-400 hover:border-b-cyan-400 hover:border-b-2">HOME</Link>
    
        <Link href="/recipes" className=" hover:text-yellow-400 hover:border-b-cyan-400 hover:border-b-2">RECIPES</Link>
        
        <Link href="/about" className=" hover:text-yellow-400 hover:border-b-cyan-400 hover:border-b-2">ABOUT</Link>
        
        <Link href="/images" className=" hover:text-yellow-400 hover:border-b-cyan-400 hover:border-b-2">IMAGES</Link>
        
      </div>
        </nav>
    </header> 
    )
}