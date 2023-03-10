import Layout from '../components/layout';
import Posthighlight from '../components/posthighlight';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
    return (
        <Layout title="CSAJ">

            <>
                <section className="">
                    <div className="flex max-w-full flex-row lg:flex-row space-x-24 relative mx-auto py-2 lg:py-2 px-16 lg:px-16">
                        <div className="w-1/2 lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">
                            <h1 className=" text-20xl md:text-4xl lg:text-5xl font-sans mb-8 relative text-blue-600 font-bold">
                                Cambodian Students' Association in Japan
                            </h1>

                            <p className="font-sans text-justify text-lg">
                                The Cambodia Students' Association in Japan (CSAJ) is a non-profit organization that aims to bring together Cambodian students studying in Japan and provide support for their academic and personal growth.
                                Established in XXXX, the association has grown to become a prominent voice for the Cambodian student community in Japan, promoting cultural exchange and providing a platform for students to network and build connections.
                            </p>

                            <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
                                <a href="/about" className="px-6 py-3 text-lg bg-blue-600 text-center text-black-400 rounded font-bold text-white">Learn More About Us</a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 mx-auto">
                            <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
                        </div>

                    </div>
                </section>
            </>

            <>
                <section className="bg-white py-16">
                    <div className="px-10 mx-auto max-w-7xl">
                        <div className="text-center">
                            <h1 className="mb-3 text-5xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600 py-12">Our Activities</h1>
                        </div>

                        <div className="grid grid-cols-12 gap-8 py-8">
                            {allPostsData.map((post) => (
                                <Posthighlight post={{ id: post.id, date: post.date, title: post.title, abstract: post.abstract, image: post.image }} />
                            ))}
                        </div>
                        <p className="text-2xl font-sansmb-7 text-right py-0 text-blue-600"><a href="/news">See more</a></p>
                    </div>
                </section>
            </>

            <>
                <div className="flex item-center justify-center px-16">
                    <div className="hidden grid-cols-3 gap-32 sm:grid">
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">22</h4>
                            <p className="text-sm font-semibold text-gray-400">Prefectures</p>
                        </div>
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">147</h4>
                            <p className="text-sm font-semibold text-gray-400">Students</p>
                        </div>
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">729</h4>
                            <p className="text-sm font-semibold text-gray-400">Alumni</p>
                        </div>
                    </div>
                </div>
            </>

            <>
                <section className="w-full py-24 lg:py-24 bg-white">
                    <div className="container px-8 mx-auto sm:px-12 lg:px-20">
                        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600">Our Partners</h1>
                        <div className="grid grid-flow-col auto-col-max gap-16 py-16 mb-0 text-center lg:grid-flow-col lg:auto-col-max">
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/kh-embassy.jpeg" alt="Embassy Logo" className="block object-contain h-56 lg:h-56" />
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
