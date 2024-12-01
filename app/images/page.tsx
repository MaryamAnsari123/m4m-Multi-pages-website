import Image from "next/image"

export default function images(){
    return (
        <div className="mt-8 mb-8 justify-items-center">
            <h1 className="bg-gradient-to-l to-orange-100 md:w-96 w-56 from-cyan-400 
            md:text-4xl text-2xl md:p-5 p-2 text-blue-600 font-bold text-center">Images</h1>
<div className="border-2 border-gray-800 p-4 md:p-8 bg-gray-200 m-2">
            <div className="flex flex-col md:flex-row justify-center 
            items-center space-x-5 lg:space-x-24">
                    <Image 
                    className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/b1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/b2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/b3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>

                <div className="flex flex-col md:flex-row justify-center items-center 
                space-x-5 lg:space-x-24">
                    <Image 
                    className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/m1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/m2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/m3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center 
        space-x-5 lg:space-x-24">
                    <Image 
                    className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/g1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/g2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8 w-56 h-56 hover:shadow-xl hover:shadow-blue-600"
                    src="/img/g3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={100} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>
        </div>
</div>
    )
}