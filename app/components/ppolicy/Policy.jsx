import React from "react";
import "../ppolicy/Policy.css";

const Policy = () => {
  return (
    <>
      <div className="container">
        <h1>Privacy policy</h1>
        <p>Ultimo Aggiornamento 01/09/2023</p>
        <p className="title1">
          La presente Privacy Policy descrive come In Piazza (&quot;noi&quot;,
          &quot;nostro&quot;o &quot;il sito&quot;) raccoglie, utilizza e
          protegge le informazioni personali fornite dagli utenti
          (&quot;tu&quot; , &quot;tuo &quot; o &quot;l&apos;utente&quot;)
          durante l&apos;utilizzo del nostro sito. Questa politica si applica
          solo alle informazioni raccolte tramite il sito e non si applica alle
          informazioni raccolte offline o tramite altri canali.
        </p>
        <div className="policy-points">
          <ol>
            <li className="titles">Raccolta delle informazioni personali</li>
            <ol>
              <li>
                Informazioni fornite volontariamente: Possiamo raccogliere
                informazioni personali fornite volontariamente dagli utenti,
                come il nome, l&apos;indirizzo e-mail, il numero di telefono,
                l&apos;indirizzo e altre informazioni di contatto, solo se
                fornite volontariamente durante la registrazione o durante la
                compilazione di moduli sul sito.
              </li>
              <li>
                Informazioni di navigazione: Il nostro sito può raccogliere
                automaticamente alcune informazioni di navigazione, come
                l&apos;indirizzo IP, il tipo di browser, il percorso di
                navigazione, la data e l&apos;ora di accesso. Queste
                informazioni vengono raccolte per analizzare le tendenze,
                amministrare il sito e raccogliere informazioni demografiche
                aggregate.{" "}
              </li>
            </ol>
          </ol>
          <li className="titles">
            Utilizzo delle informazioni personali
            <ol>
              <li>
                Utilizziamo le informazioni personali fornite dagli utenti per
                rispondere alle richieste di informazioni, fornire servizi
                personalizzati, inviare comunicazioni promozionali, migliorare
                il nostro sito e per scopi interni di ricerca e analisi.
              </li>
              <li>
                Non condivideremo, venderemo o affitteremo le tue informazioni
                personali a terze parti senza il tuo consenso, tranne che come
                descritto nella presente Privacy Policy o come richiesto dalla
                legge.{" "}
              </li>
              <li>
                In caso di necessità, potremmo condividere le tue informazioni
                personali con le autorità competenti per rispondere a richieste
                legittime, conformarsi ai requisiti legali o proteggere i nostri
                diritti, la nostra proprietà o la nostra sicurezza.
              </li>
            </ol>
          </li>
          <li className="titles">
            Sicurezza delle informazioni personali
            <ol>
              <li>
                Utilizziamo misure di sicurezza ragionevoli per proteggere le
                informazioni personali dagli accessi non autorizzati, dalla
                divulgazione o dall&apos;alterazione. Tuttavia, nessun metodo di
                trasmissione o di archiviazione elettronica è sicuro al 100%.{" "}
              </li>
              <li>
                Conserviamo le informazioni personali solo per il tempo
                necessario al raggiungimento delle finalità per cui sono state
                raccolte.
              </li>
            </ol>
          </li>
          <li className="titles">
            Collegamenti a siti di terze parti
            <ol>
              <li>
                Il nostro sito potrebbe contenere collegamenti a siti di terze
                parti. Non siamo responsabili delle pratiche sulla privacy o del
                contenuto di tali siti. Ti invitiamo a leggere le politiche
                sulla privacy di tali siti prima di fornire loro qualsiasi
                informazione personale.
              </li>
            </ol>
          </li>
          <li className="titles">
            Modifiche alla Privacy Policy
            <ol>
              <li>
                Ci riserviamo il diritto di apportare modifiche a questa Privacy
                Policy di tanto in tanto. Ti consigliamo di rivedere
                periodicamente questa pagina per essere informato sulle
                eventuali modifiche. L&apos;utilizzo continuato del nostro sito
                costituisce la tua accettazione di tali modifiche.
              </li>
            </ol>
          </li>
          <li className="titles">
            Contatti
            <ol>
              <li>
                Se hai domande o dubbi riguardo a questa Privacy Policy, ti
                preghiamo di contattarci tramite le informazioni di contatto
                fornite sul nostro sito.
              </li>
            </ol>
          </li>
        </div>
        <p className="bottom">
          Accettando questa policy sulla privacy, dichiari di aver letto e
          compreso le nostre pratiche sulla privacy e di acconsentire alla
          raccolta, all&apos;utilizzo e alla divulgazione delle tue informazioni
          personali come descritto nella presente politica
        </p>
      </div>
    </>
  );
};

export default Policy;
