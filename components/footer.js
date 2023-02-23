export const YEAR = 2023;

export default function Footer() {
    return (
        <section className="text-gray-800 bg-gray-100 font-sans text-lg">
            <div className="flex flex-row items-center px-8 py-8 max-w-8xl justify-between space-x-36">
                <div className="flex-none">
                    <p className="font-sans">Copyright © {YEAR} Cambodian Students' Association in Japan (CSAJ)
                    </p>
                </div>

                <div className="flex-auto text-right">
                    <p className="font-sans">csaj.info@gmail.com</p>
                </div>

                <div className="flex-auto">
                    <span className="flex-auto justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a href="https://www.facebook.com/csajpage" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}