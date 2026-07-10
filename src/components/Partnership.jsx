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

      {/* Partnership Cards - Zig-Zag Layout */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Sapiens Card */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-10">

  {/* Left */}
  <div className="lg:w-1/3">

    <div className="flex items-center justify-between mb-6">
      <span className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
        Featured Product
      </span>

      
    </div>

    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
      Sapiens: The Free Character Builder App.
    </h3>

    <p className="mt-8 text-gray-500 leading-8">
      Beautiful library of modular, component-based character illustrations
      free to use for all your personal or client projects.
    </p>

  </div>

  {/* Right */}
  <div className="lg:w-2/3 flex justify-center relative">

    <img
      src="/assests/sapiens.png"
      alt="Sapiens"
      className="w-full max-w-[650px] object-contain"
    />
    <button
  className="
    absolute
    right-[-24px]
    top-1/2
    -translate-y-1/2
    w-16
    h-16
    rounded-full
    bg-[#3563FF]
    flex
    items-center
    justify-center
  "
>
  <svg
    className="w-7 h-7 text-white"
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
          </div>

          {/* Bento Vol 2 */}
          <div className="w-full md:w-[470px] bg-white rounded-[32px] p-10 ml-auto">

  {/* Heading + Arrow */}
  <div className="flex items-center justify-between mb-8">
    <h3 className="text-[42px] font-bold text-[#2B1B35] leading-none">
      Bento Vol. 2
    </h3>
  </div>

  {/* Image */}
  <div className="flex justify-center mb-10">
    <img
      src="/assests/bento-vol-2.png"
      alt="Bento Vol. 2"
      className="w-[500px] object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="w-[310px] text-[#6B7280] text-[18px] leading-8">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>

          {/* Bento 3D Illustration */}
          <div className="w-full md:w-[470px] bg-white rounded-[32px] p-10">

  {/* Heading + Arrow */}
  <div className="flex items-center justify-between mb-8">
    <h3 className=" mt-4 text-[36px] font-bold text-[#2B1B35] leading-none whitespace-nowrap text-left">
      Bento 3D Illustration
    </h3>

  </div>

  {/* Image */}
  <div className="flex justify-center mb-10">
    <img
      src="/assests/bento-3d-illustration.png"
      alt="Bento 3D Illustration"
      className="w-[500px] object-contain "
    />
  </div>

  {/* Paragraph */}
  <p className="w-[310px] text-[#6B7280] text-[18px] leading-8 text-left">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>

          {/* Bento Vol 3 */}
          <div className="w-full md:w-[620px] bg-white rounded-[32px] p-10 ml-auto">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-between mb-6">
    <h3 className=" mt-4 ml-4 text-[36px] font-bold text-[#2B1B35] whitespace-nowrap">
      Bento Vol. 3
    </h3>

    
  </div>

  {/* Image */}
  <div className=" ml-4 mt-6 ">
    <img
      src="/assests/bento-vol-3.png"
      alt="Bento Vol. 3"
      className="w-[460px] max-w-none object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="ml-4 mt-6 w-[310px] text-[#6B7280] text-[18px] leading-8">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>


          {/* Sapiens Man */}
          <div className="w-full md:w-[620px] bg-white rounded-[32px] p-10">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-start mt-0 mb-6">
    <h3 className="text-[36px] font-bold text-[#2B1B3] whitespace-nowrap mb-6">
      Sapiens: Man
    </h3>

  </div>

  {/* Image */}
  <div className=" mb-6">
    <img
      src="/assests/sapiens-2.png"
      alt="Sapiens: Man"
      className="w-[460px] object-contain -ml-16 "
    />
  </div>

  {/* Paragraph */}
  <p className="w-[310px] text-[#6B7280] text-[18px] leading-8">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>
</div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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