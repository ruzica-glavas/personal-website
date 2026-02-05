export default function Header(){
    return(
        <>
            <nav className="w-full bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between hover:text-black cursor-pointer">
                    <span className="text-xl font-bold">MySite</span>
                    <ul className="flex gap-6 text-gray-600">
                        <li className="hover:text-black cursor-pointer">Home</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}