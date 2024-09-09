

const FeatureSection = () => {
    return(
        <section className="bg-gray-100 relative py-16 lg:py-32">
  <div className="absolute inset-y-0 left-0 w-1/2 hidden lg:block">
  <img className="object-cover h-full" src="/images/banner-img.png" alt="Basisthan" />
  </div>
  <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
    <div className="lg:w-7/12 lg:pl-16">
      <div className="section-title mb-12">
        <h6 className="text-gray-600 text-sm font-semibold uppercase mb-2">Why Webster is best!</h6>
        <h2 className="text-4xl font-bold leading-tight mb-4">Our awesome core features</h2>
        <p className="text-gray-700">Truly ideal solutions for your business. Create a website that you are gonna be proud of.</p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-orange-500 text-3xl">
              <i className="ti-desktop"></i>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">Perfect design</h5>
              <p className="text-gray-700">Out of box thinking and <span className="text-orange-500" title="Won 10+ Awards">Award-winning</span> web design agency.</p>
              <a className="text-orange-500 hover:text-orange-600 flex items-center mt-4" href="#">
                Read more <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-orange-500 text-3xl">
              <i className="ti-headphone"></i>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">Fast Customer support</h5>
              <p className="text-gray-700">Our Support Team will do its best to provide the best helpful answer for the issues.</p>
              <a className="text-orange-500 hover:text-orange-600 flex items-center mt-4" href="#">
                Read more <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-orange-500 text-3xl">
              <i className="ti-panel"></i>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">Easy to Customize</h5>
              <p className="text-gray-700">Webster code is easy and requires no/less programming skills to create a website</p>
              <a className="text-orange-500 hover:text-orange-600 flex items-center mt-4" href="#">
                Read more <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-orange-500 text-3xl">
              <i className="ti-shield"></i>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">Powerful Performance</h5>
              <p className="text-gray-700">High performance, super fast with top page speed &amp; YSlow ratings</p>
              <a className="text-orange-500 hover:text-orange-600 flex items-center mt-4" href="#">
                Read more <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default FeatureSection;