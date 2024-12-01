import Link from "next/link"

export default function recipes() {
    return(
        <div className="justify-items-center">
        <div className="mt-7 mb-7 justify-items-center w-72 md:w-96 lg:w-2/6 flex-auto justify-center 
        items-center text-center bg-sky-200 m-2">
            <h1 className="md:text-4xl text-2xl w-full md:p-5 p-2
             text-white font-bold
             bg-sky-500 m-2">Recipes:</h1>
            <ul className="space-y-2 p-6 text-base lg:text-xl font-bold">
                <li>
                    <Link href="/recipes/biryani" className="hover:text-green-500 hover:border-b-blue-400 hover:border-b-2">Biryani</Link>
                </li>
                <li>
                    <Link href="/recipes/macroni" className="hover:text-green-500 hover:border-b-blue-400 hover:border-b-2">Macroni</Link>
                </li>
                <li><Link href="/recipes/gulabjamun" className="hover:text-green-500 hover:border-b-blue-400 hover:border-b-2">Gulab Jamun</Link></li>
                <li>Qoorma</li>
                <li>Kheer</li>
                <li>Daal</li>
                <li>Mix Sabzi</li>
                <li>Achar</li>
                <li>Karahi</li>
            </ul>
        </div>
        </div>
    )
}