import Layout from "../components/layout";
import Member from "../components/member";
import FeatureText from "../components/feature";


export const MISSION = {
    'title': "Mission",
    'abstract': "OUR MISSION",
    'detail': "Mission is noissim if we read backward and mnssiio if we group consonants and vowels. This Mission is also iiomnss if we regroup by putting vowels first. "
}

export const VISION = {
    'title': "Vision",
    'abstract': "OUR VISION",
    'detail': "Vision is noisiv if we read backward and nsviio if we group consonants and vowels. This Vision is also iionsv if we regroup by putting vowels first. "
}

export const VALUE = {
    'title': "Values",
    'abstract': "OUR VALUES",
    'detail': "Values is seulav if we read backward and lsvaeu if we group consonants and vowels. This Value is also aeulsv if we regroup by putting vowels first. "
}

export default function About() {
    return  (
        <Layout title="CSAJ-About Us">
            <h1 className="py-12 text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center text-blue-600">
                Cambodian Students' Association in Japan
            </h1>
            <>
            <section className="w-full px-8 py-8 md:py-8 xl:px-0 tails-selected-element bg-blue-100">
                <FeatureText info={MISSION} />
                <FeatureText info={VISION} />
                <FeatureText info={VALUE} />
            </section>
            </>
            <section className="relative py-12 overflow-hidden bg-white">
                <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                    <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
                </span>

                <span className="absolute bottom-0 left-0"> </span>

                <div className="relative px-16 mx-auto max-w-7xl text-center">
                    <h2 className="relative mt-5 mb-10 text-4xl font-semibold text-blue-600 leading-tight lg:text-5xl">
                        CSAJ/CSAK Board Members
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                    </div>
                </div>

                <div className="relative px-16 mx-auto max-w-7xl text-center text-blue-600">
                    <h2 className="relative  mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        CSAN Leading Committee
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                    </div>
                </div>

                <div className="relative px-16 mx-auto max-w-7xl text-center text-blue-600">
                    <h2 className="relative  mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        KSAK Leading Committee
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                    </div>
                </div>

                <div className="relative px-16 mx-auto max-w-7xl text-center text-blue-600">
                    <h2 className="relative  mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        ACSK Leading Committee
                    </h2>
                    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                    </div>
                </div>
            </section>
        </Layout>
    );
  }