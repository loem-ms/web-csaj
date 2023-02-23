import Layout from '../components/layout';
import Posthighlight from '../components/posthighlight';
import { getSortedPostsData } from '../lib/posts';
import FeatureText from '../components/feature';


export default function Home({ allPostsData }) {
    return (
        <Layout title="CSAJ">

            <>
                <section className="">
                    <div className="flex max-w-7xl lg:flex-row space-x-24 relative mx-auto py-16 lg:py-16 ">
                        <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">
                            <h1 className=" text-20xl md:text-4xl lg:text-5xl font-sans mb-8 relative text-blue-600">
                                Cambodian Students' Association in Japan
                            </h1>

                            <p className="font-sans text-justify text-lg">
                                The Cambodia Students' Association in Japan (CSAJ) is a non-profit organization that aims to bring together Cambodian students studying in Japan and provide support for their academic and personal growth.
                                Established in XXXX, the association has grown to become a prominent voice for the Cambodian student community in Japan, promoting cultural exchange and providing a platform for students to network and build connections.
                            </p>

                            <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
                                <a href="/about" className="px-6 py-3 text-lg bg-gray-300 text-center text-black-700 rounded font-bold">Learn More About Us</a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 mx-auto">
                            <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
                        </div>

                    </div>
                </section>
            </>

            <>
                <section className="bg-white py-16s">
                    <div className="px-10 mx-auto max-w-7xl">
                        <div className="text-center">
                            <h2 className="relative text-blue-600 inline-block px-5 py-2 mb-5 text-5xl font-bold  bg-white border-2 border-black">
                                <div className="absolute w-full py-2 h-full inset-0 border-2 border-black bg-black ml-1.5 mt-1.5"></div>
                                <div className="absolute inset-0 w-full h-full py-2 bg-white"></div>
                                <span className="relative font-sans lg:text-5xl"><a href="/news">Our Activities</a></span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-12 gap-8 py-8">
                            {allPostsData.map((post) => (
                                <Posthighlight post={{ id: post.id, date: post.date, title: post.title, abstract: post.abstract, image: post.image }} />
                            ))}
                        </div>

                        <p className="text-2xl font-sansmb-7 text-right py-4 text-black-400"><a href="/news">See more</a></p>
                    </div>
                </section>
            </>

            <>
                <section className="w-full py-8 bg-white">
                    <div className="container px-8 mx-auto sm:px-12 lg:px-20">
                        <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-5xl font-sans">Our Partners</h1>
                        <div className="grid grid-flow-col auto-col-max gap-16 py-16 mb-0 text-center lg:grid-flow-col lg:auto-col-max">
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/kh-embassy.jpeg" alt="Ninendo Logo" className="block object-contain h-8 lg:h-56" />
                            </div>
                        </div>

                    </div>
                </section>
            </>

        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData().slice(0, 3)
    return {
        props: {
            allPostsData
        }
    }
}
