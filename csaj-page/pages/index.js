import Layout from '../components/layout';
import Posthighlight from '../components/posthighlight';
import { getSortedPostsData } from '../lib/posts';
import FeatureText from '../components/feature';


export default function Home({ allPostsData }) {
  return (
    <Layout title="CSAJ">

    <>
    <section className="bg-rose-200">
        <div className="flex max-w-7xl lg:flex-row flex-col px-10 relative mx-auto py-12 lg:py-12 ">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">  
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-blue-600">
                  Welcome to CSAJ!
              </h1>
              <div className="relative">
              </div>
              <p className="text-gray-500 text-xl lg:max-w-md">Cambodian Students' Association in Japan</p><div className="tails-relative">Here should be a brief introduction about what CSAJ is.</div><p></p>
              <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
                  <a href="/about" className="px-6 py-3 text-lg bg-white text-center text-black-700 rounded font-bold">Learn More About Us</a>
              </div>
          </div>
          <div className="lg:w-1/4 w-full mx-auto ">
              <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
          </div>
        </div>
    </section>
    </>

    <>
    <section className="w-full py-16 bg-white">
        <div className="px-10 mx-auto max-w-7xl">
            <div className="text-center">
                <h2 className="relative text-blue-600 inline-block px-5 py-2 mb-5 text-5xl font-bold font-extrabold bg-white border-2 border-black">
                    <div className="absolute w-full py-2 h-full inset-0 border-2 border-black bg-black ml-1.5 mt-1.5"></div>
                    <div className="absolute inset-0 w-full h-full py-2 bg-white"></div>
                    <span className="relative"><a href="/news">Our Activities</a></span>
                </h2>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {allPostsData.map((post) => (
                        <Posthighlight post={{id: post.id, date: post.date, title: post.title, abstract:post.abstract, image: post.image}} />
                    ))}
            </div>

            <p className="text-2xl font-medium text-gray-800 mb-7 text-right py-8"><a href="/news">See more</a></p>
        </div>
    </section>
    </>

    <>
    <section className="w-full py-8 pb-20 bg-white">
          <div className="container px-8 mx-auto sm:px-12 lg:px-20">
              <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">Our Partners</h1>
              <p className="text-lg text-center text-gray-600">We've been trusted and used by some of the top companies in the industry.</p>
              <div className="grid grid-cols-2 gap-16 py-16 mb-0 text-center lg:grid-cols-6">
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/nintendo-logo.svg" alt="Ninendo Logo" className="block object-contain h-8 lg:h-10"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/google-icon.svg" alt="Google Logo" className="block object-contain h-12"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/reddit.svg" alt="Reddit Logo" className="block object-contain h-12 lg:h-16"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/youtube-logo.svg" alt="Youtube Logo" className="block object-contain h-9 lg:h-16"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <img src="https://cdn.devdojo.com/tails/images/amazon.svg" alt="Amazon Logo" className="block object-contain h-10 lg:h-16"/>
                  </div>
              </div>
              
          </div>
    </section>
    </>
      
  </Layout>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData().slice(0, 6)
    return {
      props: {
        allPostsData
      }
    }
  }
