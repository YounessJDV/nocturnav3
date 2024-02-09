import { useState } from "react";
import imgFaq from '../img/faq/faq_illustration.png'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="my-6 bg-white rounded-xl shadow-lg poppins">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-left sm:text-md md:text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-10 h-10 transition duration-150 ease-in-out bg-gradient-to-r from-[#45008B] to-[#9953F3] md:hover:from-slate-900 md:hover:to-slate-900 duration:0 hover:duration-500 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-white transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 poppins" data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="top-bottom">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">

            <div className="mx-auto justify-items-center	sm:text-center lg:max-w-2xl">
              <img className="faqImgLg mx-auto" src={imgFaq} alt="illustration_faq"></img>
              <h2 className=" mb-0 text-center font-sans text-3xl font-bold leading-none text-gray-900 sm:text-4xl">
                <span className="faq-titre">
                  Foire aux questions
                </span>
              </h2> 
            </div>

          </div>

          <div className="space-y-4">
            <Item title="Pourquoi choisir Nocturna ?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="Quelles sonts les différentes étapes">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="Is the Space Pope reptilian!?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="How much money you got on you?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
          </div>
        </div>
      </div>
    );
  };

  export default Faq;