import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_rln8i07', 'template_zw340kj', form.current, {
                publicKey: 'PTya6qLtu5r0Ar3Hk',
            })
            .then(
                () => {
                alert('SUCCES!');
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
    };

    
  return (

        <section className="text-gray-700 body-font relative">
            <div className="container px-0 lg:px-5 py-24 mx-auto">
                <div className="flex flex-col w-full xl:w-2/3 mx-auto text-center mb-12">
                    <h1 className="font-extrabold text-4xl sm:text-5xl leading-8 tracking-tight text-gray-900 dark:text-white">
                        <span class="offre-titre-contact poppins">Contactez-nous</span>
                    </h1>
                    <p className=" mt-8 mx-auto leading-relaxed text-base sm:text-lg">
                        Pour obtenir un devis sur votre projet, remplissez le formulaire. Nous vous contacterons par la suite pour répondre à votre demande. 
                    </p>
                </div>
                
                <div className="w-full xl:w-2/3 mx-auto">
                    <div ref={form} className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label for="user_name" className="leading-7 text-sm text-gray-600">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label
                                for="user_surname"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="user_surname"
                                name="user_surname"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_tel"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Téléphone
                            </label>
                            <input
                                id="user_tel"
                                name="user_tel"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_ville"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Ville
                            </label>
                            <input
                                id="user_ville"
                                name="user_ville"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_choix_projet"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Votre projet <span class="text-xs text-slate-400">(facultatif)</span>
                            </label>
                            <select
                                id="user_choix_projet"
                                name="user_choix_projet"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option value="">Sélectionnez...</option>
                                <option value="choix_projet_standard">Site web standard</option>
                                <option value="choix_projet_premium">Site web premium</option>
                                <option value="choix_projet_autre">Autre</option>
                            </select>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="user_message"
                                name="user_message"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="btnOutline flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    
    );
  }
  
  export default Contact;
  