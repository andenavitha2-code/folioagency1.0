import { Link } from "react-router-dom";
const Partnership = () => {
  return (
    <div id="partnership" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 lg:pt-24">
        <div className="flex items-center justify-between mb-6">

  {/* Left Side */}
  <div className="flex items-center space-x-4">
    <img
      src="/assests/logo.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />

    <span className="text-folio-accent font-semibold text-sm md:text-base">
      04. Our Partnerships
    </span>
  </div>

  {/* Right Side */}
  <button className="bg-folio-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg">
    Contact Us
  </button>

</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 text-center">
          Our Partnerships
        </h2>
        <p className="text-gray-600 text-base lg:text-lg xl:text-xl  leading-tight mb-4 text-center">
         Agency is a full-service agency,busy designing and building<br/>beautiful digital products,brands and experiences.
        </p>
      </div>

      {/* Partnership Cards */}
<div className="px-6 md:px-12 lg:px-20 py-12">
  <div className="max-w-7xl mx-auto space-y-16">

    {/* Sapiens */}
    <Link to="/work" className="block">
      <div className="flex flex-col lg:flex-row items-center gap-12 cursor-pointer hover:scale-[1.02] transition duration-300">

        <div className="w-full lg:w-1/3">
          <span className="inline-block bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
            Featured Product
          </span>

          <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Sapiens: The Free Character Builder App.
          </h3>

          <p className="mt-6 text-gray-500 text-base lg:text-lg leading-8">
            Beautiful library of modular, component-based character
            illustrations free to use for all your personal or client
            projects.
          </p>
        </div>

        <div className="w-full lg:w-2/3 relative flex justify-center">
          <img
            src="/assests/sapiens.png"
            alt="Sapiens"
            className="w-full max-w-2xl object-contain"
          />

          <button className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3563FF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </Link>

    {/* Bento Vol 2 */}
    <Link to="/work" className="block">
      <div className="w-full lg:max-w-md ml-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm cursor-pointer hover:scale-[1.02] transition">

        <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#2B1B35]">
          Bento Vol. 2
        </h3>

        <div className="flex justify-center my-8">
          <img
            src="/assests/bento-vol-2.png"
            alt="Bento Vol.2"
            className="w-full max-w-md object-contain"
          />
        </div>

        <p className="text-gray-500 text-base lg:text-lg leading-8">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands and experiences.
        </p>

      </div>
    </Link>
        {/* Bento 3D Illustration */}
    <Link to="/work" className="block">
      <div className="w-full lg:max-w-md bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm cursor-pointer hover:scale-[1.02] transition">

        <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#2B1B35] leading-tight">
          Bento 3D Illustration
        </h3>

        <div className="flex justify-center my-8">
          <img
            src="/assests/bento-3d-illustration.png"
            alt="Bento 3D Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        <p className="text-gray-500 text-base lg:text-lg leading-8">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands and experiences.
        </p>

      </div>
    </Link>

    {/* Bento Vol 3 */}
    <Link to="/work" className="block">
      <div className="w-full lg:max-w-xl ml-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm cursor-pointer hover:scale-[1.02] transition">

        <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#2B1B35]">
  Bento Vol. 3
</h3>

<div className="flex justify-center my-8">
  <img
    src="/assests/bento-vol-3.png"
    alt="Bento Vol. 3"
    className="w-full max-w-md object-contain"
  />
</div>

<p className="text-gray-500 text-base lg:text-lg leading-8">
  Agency is a full-service agency, busy designing and building beautiful
  digital products, brands and experiences.
</p>

      </div>
    </Link>

    {/* Sapiens Man */}
    <Link to="/work" className="block">
      <div className="w-full md:w-[620px] bg-white rounded-[32px] p-10">

  {/* Heading */}
  <h3 className="text-[36px] font-bold text-[#2B1B35] mb-6">
  Sapiens: Man
</h3>

<div className="flex justify-center mb-8">
  <img
    src="/assests/sapiens-2.png"
    alt="Sapiens Man"
    className="w-[460px] object-contain"
  />
</div>

<p className="w-[310px] text-[#6B7280] text-[18px] leading-8">
  Agency is a full-service agency, busy designing and building beautiful
  digital products, brands and experiences.
</p>

</div>
    </Link>

  </div>
</div>


      {/* Navigation Dots */}
<div className="flex justify-center gap-2 py-10">
  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
  <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
</div>
</div>
  )
}

export default Partnership