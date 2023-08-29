"use client";
import React from "react";
import "./Storia.css";
import Image from "next/image";
import apertura from "../../../public/assets/apertura.webp";
import cocktail from "../../../public/assets/cocktail1.webp";
import champagne from "../../../public/assets/champagne.webp";
// import logo from "../../../public/assets/champagne.webp";
import window from "../../../public/assets/window.webp";
import { motion } from "framer-motion";

const Storia = () => {
  return (
    <>
      <main className="font-antic">
        <section>
          <div className="storia_container text-black">
            <h1 className="text-5xl font-medium [text-shadow:_4px_4px_10px_rgba(0,0,0,0.8)] ">
              Chi Siamo
            </h1>
            <div className="lg:flex lg:flex-row lg:items-center gap-8">
              <div className="about-us__img-container">
                <Image
                  src={apertura}
                  alt="opening pic"
                  objectFit="cover"
                  fill="true"
                  className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full "
                />
              </div>
              <p className="text-xl mt-6 lg:text-2xl xl:text-3xl">
                Benvenuti ad In Piazza, il nostro bar, champagneria e cocktail
                lounge! <br /> <br />
                Siamo due amici che, dopo anni di duro lavoro, sacrifici e
                sogni, abbiamo finalmente deciso di realizzare il nostro sogno
                aprendo un bar che offrisse esperienze uniche e indimenticabili.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-primary">
          <div className="storia_container text-white">
            <div className="lg:flex lg:flex-row-reverse lg:items-center gap-8">
              <div className="about-us__img-container">
                <Image
                  src={cocktail}
                  alt="opening pic"
                  objectFit="cover"
                  fill="true"
                  className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full"
                />
              </div>
              <p className="text-xl xl:text-3xl">
                I nostri cocktail sono studiati attentamente, utilizzando solo
                gli ingredienti più freschi e di prima qualità. Ogni drink è una
                creazione originale, ideata per stupire e soddisfare i gusti più
                raffinati.
                <br /> <br />
                Dalle classiche ricette dei cocktail tradizionali alle nostre
                creazioni inedite, le nostre bevande sono pensate per
                sorprendere e deliziare ogni vostro palato.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-form">
          <div className="storia_container text-black">
            <div className="lg:flex lg:flex-row lg:items-center gap-8">
              <div className="about-us__img-container">
                <Image
                  src={champagne}
                  alt="opening pic"
                  objectFit="cover"
                  fill="true"
                  className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full"
                />
              </div>
              <p className="text-xl xl:text-3xl">
                Ma la nostra offerta non si limita solo ai cocktail. Siamo anche
                appassionati di champagne e vini pregiati.
                <br /> <br />
                Abbiamo selezionato una lista di champagne rinomati e vini
                provenienti da diverse regioni del mondo, per offrire una vasta
                scelta di etichette che si abbinino alla perfezione ai nostri
                piatti e alle vostre preferenze.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="storia_container text-white">
            <div className="lg:flex lg:flex-row-reverse lg:items-center gap-8">
              <div className="about-us__img-container">
                <Image
                  src={window}
                  alt="opening pic"
                  objectFit="cover"
                  fill="true"
                  className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full"
                />
              </div>
              <p className="text-xl xl:text-3xl">
                Il nostro locale è un&apos;oasi di relax e divertimento, un
                luogo in cui potrete trascorrere piacevoli serate in compagnia
                di amici o familiari. <br />
                <br />
                Abbiamo curato ogni dettaglio dell&apos;arredamento per creare
                un&apos;atmosfera accogliente, sofisticata e contemporanea, in
                cui potrete sentirvi a vostro agio.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-form">
          <div className="storia_container text-black">
            <p className="text-xl xl:text-3xl">
              Vi aspettiamo nel nostro bar, champagneria e cocktail lounge per
              farvi vivere esperienze uniche e indimenticabili. I nostri drink,
              la nostra selezione di champagne e la nostra ospitalità vi
              conquisteranno fin dal primo istante. Siete i benvenuti nel nostro
              mondo di sapori, colori e sensazioni.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Storia;
