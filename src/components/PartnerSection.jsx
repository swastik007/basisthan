const PartnerSection = () => {
    return(
        <section className="py-16 bg-">
  <div className="container mx-auto">
    <div className="flex">
      <div className="relative w-full overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-400 ease-in-out"
        >
          {/* First Item */}
          <div className="w-full flex justify-center">
            <ul className="grid grid-cols-5 gap-4">
              <li>
                <a href="#">
                  <img
                    src="http://via.placeholder.com/225x120"
                    alt=""
                    className="w-full"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://via.placeholder.com/225x120"
                    alt=""
                    className="w-full"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://via.placeholder.com/225x120"
                    alt=""
                    className="w-full"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://via.placeholder.com/225x120"
                    alt=""
                    className="w-full"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://via.placeholder.com/225x120"
                    alt=""
                    className="w-full"
                  />
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default PartnerSection;