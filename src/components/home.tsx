import intro from './assets/intro.png'

const home = () => {
  return (
    <div id='home'>
    <div className='flex justify-around pl-[4rem] pt-[15rem]'>
      <div className="w-[30rem] pt-20 ">
        <h1 className='text-orange-400 font-semibold text-2xl'>RESIDENTIAL & OFFICE SPACES</h1>
        <br></br>
        <p className='text-gray-600'>
          At TechState, we blend technology with real estate expertise to deliver smarter,
          faster, and more efficient property solutions. Whether you're buying, 
          selling, or investing, our data-driven approach and market 
          insights ensure you make informed decisions with confidence.
           <br></br> Your future starts here—with <span className='text-blue-600'>TechState.</span>
          </p>
      </div>
      <div className="">
        <img src={intro} width={550} height={500} className='rounded-[20rem]' />
      </div>
    </div>
    </div>
  )
}

export default home