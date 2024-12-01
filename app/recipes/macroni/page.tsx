import Image from "next/image"

export default function biryani(){
    return (
        <div className="mt-7 mb-7">
            <h1 className="lg:text-6xl md:text-4xl text-2xl  text-center font-bold 
            bg-gradient-to-b to-slate-500 from-slate-300 p-2 md:p-4 lg:p-8">
                MECRONI</h1>
                <div className="mt-8 gap-4 md:gap-20 flex flex-col md:flex-row 
                items-center justify-center">
                    <Image 
                    className="w-44 h-44"
                    src="/img/m1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="w-44 h-44"
                    src="/img/m2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="w-44 h-44"
                    src="/img/m3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>
                </div>
    )
}