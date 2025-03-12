import intro from './assets/intro.png';

const Home = () => {
  return (
    <div id='home' className='px-4 sm:px-8 lg:px-35  py-25 md:py-40'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
       
        <div className='w-full lg:w-[30rem] text-center lg:text-left'>
          <h1 className='text-orange-400 font-semibold text-xl sm:text-2xl'>
            RESIDENTIAL & OFFICE SPACES
          </h1>
          <br />
          <p className='text-gray-600 text-sm sm:text-base'>
            At TechState, we blend technology with real estate expertise to deliver smarter,
            faster, and more efficient property solutions. Whether you're buying, 
            selling, or investing, our data-driven approach and market 
            insights ensure you make informed decisions with confidence.
            <br /> Your future starts here—with <span className='text-blue-600'>TechState.</span>
          </p>
        </div>
      
        <div className='w-full flex justify-center lg:w-auto'>
          <img 
            src={intro} 
            alt='TechState' 
            className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[550px] h-auto rounded-[10rem] lg:rounded-[20rem] '
          />
        </div>
      </div>
    </div>
  );
};

export default Home;