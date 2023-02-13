
export default function Navbar() {
    return (
        <section className="w-full px-8 text-gray-700 bg-white">
            <div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col md:flex-row">
                    <a href="/" className="flex items-center mb-5 font-mono text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <img className="object-cover h-40" src="/logo.jpg" alt="" />
                    </a>
                </div>
            <div className="inline-flex items-center lg:justify-end xl:ml-5">
                <nav className="flex flex-wrap items-center space-x-2 text-2xl font-mono tracking-tighter uppercase sm:space-x-16">
                    <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="/news" className="text-gray-600 hover:text-gray-800">NEWS</a>
                    <a href="/tips" className="text-gray-600 hover:text-gray-800">Life in Japan</a>
                    <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
                </nav>
                <a href="#" className="inline-flex tracking-tighter uppercase text-xl items-center sm:mt-0 mt-5 sm:ml-8 justify-center px-5 py-2.5 font-mono text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Join Us</a>
            </div>
            
            </div>
        </section>
    );
}