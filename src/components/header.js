import heroImg from '../img/hero/hero_img.png'
import heroImg2 from '../img/hero/hero_img2.png'


function Header() {
  return (
    <>
        <section className="bg-white dark:bg-black poppins">
            <div className="container flex flex-col justify-between gap-0 items-center px-0 py-6 lg:px-6 lg:py-6 mx-auto my-auto lg:flex-row lg:min-h-[calc(100vh-82px)]">

                <div className="w-full lg:w-1/2 flex flex-col justify-center p-0 md:p-6 text-black dark:text-white" data-aos="fade-right" data-aos-duration="1300">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight	md:text-left">Création de vôtre site <span className="bg-gradient-to-r from-[#45008B] to-[#9953F3] inline-block text-transparent bg-clip-text"> web.</span> </h1>
                    <p className="text-justify mt-6 mb-8 text-md md:text-lg sm:mb-6"> En tant qu’entreprise, il est essentiel d’avoir une présence sur le web. Capter de nouveaux prospects, rassurer sa clientèle ou mettre en avant ses services.</p>
                    <p className='text-justify mt-0 mb-8 text-md md:text-lg sm:mb-6'> Chez <span className="font-bold">Nocturna</span> nous avons mis au point la meilleure offre du marché pour votre e-réputation.</p>
                    <div className="flex justify-center sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="btnOutline inter text-center px-8 py-3 text-lg font-bold rounded tracking-wide">Découvrir</a>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-8" data-aos="fade-left" data-aos-duration="1300">
                    <img src={heroImg2} alt="" className="" />
                </div>
                
            </div>
        </section>        
    </>
  );
}

export default Header;