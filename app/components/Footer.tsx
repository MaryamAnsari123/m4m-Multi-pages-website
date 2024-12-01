import Link from "next/link"
export default function Footer() {
    return(
        <div> 
            <p className="bg-slate-700 text-white font-bold text-base text-center p-5"><em>021-00000000</em>
                <br />
                <em>goodfoodgoodmood@gmail.com</em>
                <br />
                <em>&copy; goodfoodgoodmood <sup>&reg;</sup></em>
            </p>
            <p className="font-mono text-lg bg-yellow-200 text-center text-black ">
            Made by 
                <Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5" 
                target="_blank"
                className="hover:text-blue-500 cursor-pointer font-bold"> Maryam Ansari</Link></p>
        </div>
    )
}