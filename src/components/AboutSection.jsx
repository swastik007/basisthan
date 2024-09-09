const AboutSection = () => {
    return(
        <section className="py-16">
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      {/* Image Section */}
      <div className="w-full md:w-5/12">
        <img
          src="http://via.placeholder.com/1000x1500"
          alt=""
          className="w-full h-auto"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-7/12 pl-8">
        <div className="w-full">
          <div className="mb-4 text-left">
            <h5 className="font-semibold mb-1 leading-tight text-primary opacity-90">
              Commodo augue Aliquam ornare
            </h5>
            <h2 className="font-bold leading-tight text-2xl md:text-4xl">
              Suspendisse et justo Praesent mattis et amet Lorem ipsum dolor sit
              amet consectetuer Praesent justo
            </h2>
            <div className="w-16 h-1 bg-primary my-4" />
          </div>
        </div>
        <div className="clearfix" />
        <h6 className="text-lg font-semibold mb-4">
          Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras
          tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet
          ligula Etiam sit
        </h6>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
          et justo. Praesent mattis commodo augue Aliquam ornare hendrerit augue
          Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet
          ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis.
        </p>
        {/* Icon List Section */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-6">
            <ul className="space-y-3 text-primary">
              <li>
                <i className="fa fa-check" /> Duis dictum auctor augue
              </li>
              <li>
                <i className="fa fa-check" /> Suspendisse sit amet velit in dui.
              </li>
              <li>
                <i className="fa fa-check" /> Phasellus a metus nec augue justo.
              </li>
              <li>
                <i className="fa fa-check" /> Duis dictum auctor augue
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-3 text-primary">
              <li>
                <i className="fa fa-check" /> Duis dictum auctor augue
              </li>
              <li>
                <i className="fa fa-check" /> Suspendisse sit amet velit in dui.
              </li>
              <li>
                <i className="fa fa-check" /> Phasellus a metus nec augue justo.
              </li>
              <li>
                <i className="fa fa-check" /> Suspendisse sit amet velit in dui.
              </li>
            </ul>
          </div>
        </div>
        {/* Button */}
        <div className="mt-8">
          <a
            className="bg-black text-white rounded-full py-3 px-6 uppercase inline-flex items-center space-x-2"
            href="#"
          >
            <i className="fa fa-play-circle" aria-hidden="true" />
            <span>Read more</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    );
}

export default AboutSection;