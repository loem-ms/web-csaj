import Layout from '../components/layout';
import Posthighlight from '../components/posthighlight';
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout title="CSAJ">

    <>
    <section className="">
        <svg className="w-64 fill-current text-gray-200 absolute left-0 rotate-45 transform top-1/2 2xl:opacity-50 lg:opacity-20 lg:block hidden -translate-y-1/2 -mt-20 -translate-x-1/2" viewBox="0 0 280 364" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M266 84h-91c-7 0-14 0-14-7 0-14 14-21 14-42S161 0 140 0s-35 14-35 35 14 28 14 42c0 7-7 7-14 7H14C0 84 0 84 0 98v91c0 7 0 14 7 14 14 0 21-14 42-14s35 14 35 35-14 35-35 35-28-14-42-14c-7 0-7 7-7 14v91c0 14 0 14 14 14h91c7 0 14 0 14-7 0-14-14-21-14-42s14-35 35-35 35 14 35 35-14 28-14 42c0 7 7 7 14 7h91c14 0 14 0 14-14v-91c0-7 0-14-7-14-14 0-21 14-42 14s-35-14-35-35 14-35 35-35 28 14 42 14c7 0 7-7 7-14V98c0-14 0-14-14-14Z" className=""></path></svg>
        <svg className="w-full max-w-sm fill-current text-gray-200 absolute right-0 transform top-1/2 2xl:opacity-50 lg:opacity-20 lg:block hidden -translate-y-1/2 -mt-20 translate-x-1/2" viewBox="0 0 420 402" height="402" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.94 169.17s61.531-81.707 97.859-63.734c36.348 17.973-7.246 48.914 27.965 65.082 35.191 16.172 88.34-4.008 76.578-50.734s-32.656-13.578-48.965-38.641C139.033 56.083 235.615.819 235.615.819s58.816 116.39 75.531 85.94c20.246-36.835 55.859-74.636 92.836-17.937 0 0 31.727 42.211 4.305 60.094-27.422 17.887-51.047 7.754-61.355 27.176-10.254 19.461 66.219 71.629 66.219 71.629s-52.273 84.191-86.203 62.109c-33.934-22.102 6.195-58.887-45.57-69.824-22.539-4.008-60.164 9.433-66.797 41.195-2.274 47.406 28.07 35.367 48.844 60.883 20.844 25.461-78.363 79.117-78.363 79.117s-27.719-68.723-66.691-81.426c-38.973-12.758-15.629 37.555-51.047 44.152-35.422 6.93-84.281-41.93-60.551-83.754 23.78-41.93 57.328-.805 60.234-34.125 3.007-33.707-65.066-76.879-65.066-76.879l-.001.001Z" className=""></path></svg>
        <div className="flex max-w-7xl lg:flex-row flex-col px-10 relative mx-auto py-12 lg:py-32">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">
              
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative">
                  Welcome to CSAJ!
              </h1>
              <div className="relative">
              </div>
              <p className="text-gray-500 text-xl lg:max-w-md">Cambodian Students' Association in Japan</p><div className="tails-relative">Here should be a brief introduction about what CSAJ is.</div><p></p>
              <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
                  <a href="#_" className="px-6 py-3 text-lg bg-gray-200 text-center text-gray-700 rounded font-bold">Learn More About Us</a>
              </div>
          </div>
          <div className="lg:w-1/4 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-16 lg:pl-10 xl:pl-0">
              <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
          </div>
        </div>
    </section>
    </>

    <>
    <section className="w-full py-16 bg-white">
        <div className="px-10 mx-auto max-w-7xl">
            <div className="text-center">
                <h2 className="relative inline-block px-5 py-2 mb-5 text-5xl font-bold font-extrabold bg-white border-2 border-black">
                    <div className="absolute w-full py-2 h-full inset-0 border-2 border-black bg-black ml-1.5 mt-1.5"></div>
                    <div className="absolute inset-0 w-full h-full py-2 bg-white"></div>
                    <span className="relative">Our Activities</span>
                </h2>
                <p className="text-xl font-medium text-gray-800 mb-7">View the latest posts from our blog</p>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {allPostsData.map((post) => (
                        <Posthighlight post={{id: post.id, date: post.date, title: post.title, image: '/logo.jpg'}} />
                    ))}
            </div>
        </div>
    </section>
    </>

    <>
    <section className="w-full py-16 pb-20 bg-white">
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
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
