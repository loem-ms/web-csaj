import Layout from "../components/layout";
import Member from "../components/member";

export default function About() {
    return  (
        <Layout>

            
            <section className="relative py-20 overflow-hidden bg-white">
                <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                    <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
                </span>

                <span className="absolute bottom-0 left-0"> </span>

                <div className="relative px-16 mx-auto max-w-7xl">
                    <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        Board Members
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                    </div>
                </div>

                <div className="relative px-16 mx-auto max-w-7xl">
                    <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        IT Committee
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                    </div>
                </div>
            </section>
        </Layout>
    );
  }