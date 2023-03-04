import Layout from '../components/layout';

export default function Tips() {
    return (
        <Layout title="CSAJ-Tips">

            <section className="w-full py-10 bg-white font-sans">
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 relative text-center text-blue-600">
                    Life in Japan
                </h1>
                <div className="px-10 mx-auto max-w-7xl py-16">

                    <div className="grid overflow-hidden lg:rounded-xl">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                                <img src="/images/columns/column.png" className="object-cover w-full h-full" alt="" />
                            </div>
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-teal-600" >
                                    <a href='/columns'> Meet Our Members</a>
                                </h3>
                                <p className="text-lg text-left text-gray-600 text-justify">
                                    Through a variety of articles and interviews, we'll delve into the rich culture, vibrant cities, and unique experiences that make Japan such a fascinating place to live.
                                    From discussing the job market and education system, to exploring the best places to eat and visit, we'll provide a wealth of insights and information for anyone interested in learning more about life in Japan.
                                    So sit back, relax, and join us on this exciting journey through Japan!
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/columns">[Read more]</a>
                                </p>
                            </div>
                        </div>

                        <div className="grid items-center lg:grid-cols-2">
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-blue-400">
                                    <a href='/tips/living'> Living in Japan</a>
                                </h3>
                                <p className="text-lg text-gray-600 text-justify">
                                    Japan is a beautiful country that is steeped in rich history and culture, and is home to many international students who come to study and experience the unique blend of traditional and modern lifestyles.
                                    However, moving to a new country can be an intimidating experience, especially if you are from a different culture and are not familiar with the local customs and ways of ...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/living"> [Read more]</a>
                                </p>
                            </div>
                            <div className="overflow-hidden bg-gray-100 h-96">
                                <img src="/images/columns/living-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                        </div>

                        <div className="grid items-center lg:grid-cols-2">
                            <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                                <img src="/images/columns/studying-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-teal-600" >
                                    <a href='/tips/studying'> Studying in Japan</a>
                                </h3>
                                <p className="text-lg text-left text-gray-600 text-justify">
                                    Japan is a popular destination for international students, with its rich cultural heritage, advanced technology, and world-renowned education system.
                                    However, studying in a foreign country can be an intimidating experience, especially if you are not familiar with the local customs and ways of life...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/studying">[Read more]</a>
                                </p>
                            </div>
                        </div>

                        <div className="grid items-center lg:grid-cols-2">
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0 tails-relative">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-violet-600">
                                    <a href='/tips/working'> Working in Japan</a>
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Japan is a fascinating country with a rich cultural heritage and a thriving economy, making it an attractive destination for international students who are looking to start their careers after graduation.
                                    However, the process of finding a job in Japan can be a bit challenging, especially for those who are unfamiliar with the local culture and customs...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/working">[Read more]</a>
                                </p>
                            </div>
                            <div className="bg-gray-100 h-96">
                                <img src="/images/columns/working-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}