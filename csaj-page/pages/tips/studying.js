import Layout from '../../components/layout';

export default function Tips() {
  return (
    <Layout title="CSAJ-Tips">

        <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center">
            Studying in Japan
        </h1>

        <section className="w-full py-20 bg-gray-50">
            <div className="px-10 mx-auto max-w-7xl">
                
                <div className="grid overflow-hidden lg:rounded-xl">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Living in Japan</h3>
                            <p className="text-lg text-gray-600">
                                A beautiful drag and drop interface that allows you to create the landing page of your dreams. Our templates are designed for maximum conversion and the best user experience.
                            </p>
                        </div>
                        <div className="overflow-hidden bg-gray-100 h-96">
                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80" className="object-cover w-full h-full" alt=""/>
                        </div>
                    </div>

                    <div className="grid items-center lg:grid-cols-2">
                        <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                            <img src="https://images.unsplash.com/photo-1541506618330-7c369fc759b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1665&amp;q=80" className="object-cover w-full h-full" alt=""/>
                        </div>
                        <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Study in Japan</h3>
                            <p className="text-lg text-left text-gray-600">
                                Delight your users with the most intuitive and easy to follow designs that will help you convert those visitors into paying customers.
                            </p>
                        </div>
                    </div>

                    <div className="grid items-center lg:grid-cols-2">
                        <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0 tails-relative">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Working in Japan</h3>
                            <p className="text-lg text-gray-600">
                                All our templates are easy to customize and make your own. It has never been easier to integrate beautiful designs into your web applications.
                            </p>
                        </div>
                        <div className="bg-gray-100 h-96">
                            <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3203&amp;q=80" className="object-cover w-full h-full" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </Layout>
  );
}