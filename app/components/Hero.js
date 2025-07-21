import React from 'react';

const Hero = () => {
  return (
    <div className="relative ">
      {/* Background SVG */}
      <div className="absolute inset-0   -z-10  overflow-hidden bg-[#e0e0d8]">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="120%" viewBox="0 0 1280 717" enableBackground="new 0 0 1280 717" xmlSpace="preserve"
          className='-ml-[115px] -mt-[290px]'
          >
          <path fill="none" opacity="1.000000" stroke="none"
            d="
M937.000000,718.000000
  C624.705688,718.000000 312.911346,718.000000 1.058520,718.000000
  C1.058520,479.068939 1.058520,240.137833 1.058520,1.103372
  C427.544342,1.103372 854.088684,1.103372 1280.816528,1.103372
  C1280.816528,239.999878 1280.816528,478.999939 1280.816528,718.000000
  C1166.471069,718.000000 1051.985596,718.000000 937.000000,718.000000
z" />
          <path fill="#C0CDD3" opacity="1.000000" stroke="none"
            d="M654.690186,109.293335
  C666.616699,114.165306 676.855774,121.015480 686.435120,128.942352
  C688.068481,130.293961 689.802124,131.524384 691.178101,132.573456
  C740.736877,50.876526 811.859802,9.207245 907.893616,25.250961
  C1007.200317,41.841457 1060.890381,106.668755 1079.206543,203.559967
  C1148.142212,188.576141 1195.917725,223.682327 1217.522461,259.712738
  C1242.948853,302.116272 1244.361694,347.224182 1218.828857,389.753265
  C1180.548218,453.515747 1122.260620,456.470551 1084.751343,450.198425
  C1080.548096,506.780121 1054.923340,549.582153 1000.688416,569.483459
  C950.090698,588.050232 904.197815,575.928955 865.107178,538.547424
  C790.780640,623.601196 661.722534,627.024841 585.792786,563.822693
  C560.514526,594.918457 527.384521,611.621033 487.632111,611.623596
  C448.270599,611.626099 414.629242,596.522095 389.310120,565.207458
  C342.711151,586.864807 297.353973,584.658752 255.353973,554.489624
  C210.373001,522.179260 197.634140,466.410522 207.037552,429.496948
  C200.056274,428.329437 193.074173,427.311401 186.158127,425.956207
  C180.953262,424.936310 175.634369,424.000732 170.719101,422.110199
  C162.069550,418.783386 153.132263,415.655884 145.320831,410.820740
  C131.864655,402.491516 119.666122,392.391479 110.101036,379.488220
  C101.922859,368.455902 95.017227,356.829254 90.831238,343.595551
  C85.641624,327.188995 82.391624,310.412598 84.236404,293.351013
  C86.016373,276.888977 89.816338,260.922974 97.363701,245.602615
  C107.264351,225.505356 121.585693,209.936081 139.424118,197.224060
  C152.508377,187.899963 167.292664,181.386688 182.876343,178.347992
  C198.257706,175.348724 214.148193,173.817444 229.852982,177.931274
  C234.475204,179.142075 239.166092,180.287216 243.896713,180.782990
  C245.587418,180.960175 248.262543,179.609375 249.169983,178.141174
  C255.955612,167.162354 264.568268,157.685577 274.046326,149.179108
  C282.682220,141.428482 292.099457,134.451950 301.694672,127.899071
  C308.649292,123.149536 316.393219,119.526512 323.899597,115.621040
  C335.325684,109.676163 347.547485,105.996727 360.029694,102.937012
  C378.185852,98.486458 396.643951,98.474983 415.062469,99.206604
  C423.739380,99.551262 432.471741,101.468552 440.927734,103.647964
  C451.299774,106.321198 461.612488,109.500267 471.563385,113.439392
  C478.723694,116.273849 485.369965,120.509277 492.025391,124.487984
  C498.734283,128.498627 505.126190,133.037292 511.782471,137.141052
  C512.658691,137.681290 514.787903,137.525558 515.477783,136.834549
  C529.056702,123.232674 544.863708,113.549934 562.944275,106.743286
  C579.517090,100.504219 596.389282,98.107117 613.722656,99.185745
  C624.932190,99.883316 636.185974,101.640953 646.700806,106.254303
  C649.189209,107.346100 651.811584,108.132523 654.690186,109.293335
z" />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className='-mt-[10px]'>
        <nav className="pt-8 px-8 flex justify-between items-center text-black">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
            <span className="font-stardos">Skylane</span>
          </div>
          <div className="font-medium md:flex space-x-8">
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <button className="bg-black text-white px-8 rounded-2xl py-3 font-medium cursor-pointer">
            Get Started
          </button>
        </nav>
      </div>

      <div className='mt-[50px] flex flex-col justify-center items-center'>
        <h2 className="flex font-lora text-center text-6xl flex-wrap justify-center items-center leading-tight">
          Find The Best
          <span className="inline-flex items-center mx-2">
            <img src="/plane.png" width={80} className="inline-block rotate-20" />
          </span>
          <span>Flights</span>
          <br className="w-full" />
          <span className="w-full text-center -mt-6">& Travel Smarter</span>
        </h2>

        <p className='text-gray-600 font-medium mt-4 mb-6 text-center'>
          Discover The Best Flight Deals Across The Globe -- Compare<br />
          Routes, Save Money, And Travel Smarter Every Time You Fly.
        </p>

        <button className='bg-black text-white font-medium py-3 rounded-2xl border-8 border-gray-200 px-12 -mt-2'>
          Get Started
        </button>
      </div>

    </div>
  );
};

export default Hero;
