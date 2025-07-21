import React from 'react'

const Window = () => {
  return (
   <div className="flex items-center justify-center h-auto gap-[100px]  bg-[#e0e0d8]">
      {/* Airplane window shape - rounded rectangle with very rounded corners */}
      <div
        id='first'
        className="w-[300px] h-[400px] bg-[#e0e0d8] border-[20px] border-[#b1b0ab] shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3)]  mb-[50px]"
        style={{
          borderRadius: '80px',
          WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 70%)',
          maskImage: 'linear-gradient(to left, black 40%, transparent 60%)',
        }}
      >


        {/* Inner window content - image container */}
         <div className="w-full h-full overflow-hidden flex items-center justify-center"
             style={{
               borderRadius: '72px'
             }}>
          {/* Image placeholder - replace src with your image */}
          <div
            className='bg-[#b1b0ab] w-full h-[340px] m-2'
            style={{
              borderRadius: '52px'
            }}>
          </div>
        </div>
      </div>
       <div
       id='second'
        className="w-[300px] h-[400px] bg-[#e0e0d8] border-[20px] border-[#b1b0ab] shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3)]
         mb-[30px]
        "
        style={{
          borderRadius: '80px',
        }}
      >
        {/* Inner window content - image container */}
        <div className="w-full h-full overflow-hidden flex items-center justify-center"
             style={{
               borderRadius: '72px'
             }}>
          {/* Image placeholder - replace src with your image */}
          <img
            src="/window.jpg"
            alt="View from airplane window"
            className="w-full h-full object-cover p-2 "
            style={{
              borderRadius: '72px'
            }}
          />
        </div>
      </div>
       <div
       id='third'
        className="w-[300px] h-[400px] bg-[#e0e0d8] border-[20px] border-[#b1b0ab] shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3)]
           mb-[50px]
        "
         style={{
          borderRadius: '80px',
          WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 70%)',
          maskImage: 'linear-gradient(to right, black 40%, transparent 60%)',
        }}
      >
        {/* Inner window content - image container */}
        <div className="w-full h-full overflow-hidden flex items-center justify-center"
             style={{
               borderRadius: '72px'
             }}>
          {/* Image placeholder - replace src with your image */}
          <div
            className='bg-[#b1b0ab] w-full h-[340px] m-2'
            style={{
              borderRadius: '52px'
            }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Window
