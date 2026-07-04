// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyNo() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Drevet av Adalithic LLC</p>
      <p>Sist oppdatert: July 3, 2026</p>
      <p>
        Arcatext er et tilpasset tastatur og en språkapplikasjon utformet for å hjelpe brukere med å skrive,
        oversette, omformulere og bedre forstå meldinger på tvers av språk. Denne personvernerklæringen
        forklarer hvilken informasjon Arcatext behandler, hvordan denne informasjonen brukes, når den
        lagres, når den kan deles, og hvilke valg du har.
      </p>
      <p>Ved å bruke Arcatext godtar du praksisen som beskrives i denne personvernerklæringen.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Hvem vi er</h3>
      <p>Arcatext drives av Adalithic LLC.</p>
      <p>For spørsmål om personvern kan du kontakte oss på:</p>
      <p>
        E-post: arcatextapp@gmail.com
        <br />
        Støtteside: https://adalithic.com/
      </p>
      <p>Hvis disse kontaktopplysningene endres, vil vi oppdatere denne personvernerklæringen.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Informasjon vi behandler</h3>
      <p>
        Arcatext er utformet for kun å behandle informasjonen som trengs for å levere, forbedre,
        tilpasse og støtte appens språkfunksjoner.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Enkelt forklart</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext selger ikke dine data til noen.</li>
          <li>Vi sporer kun meldinger som blir omformulert (du må trykke på Omformuler-knappen, så hvis du skriver med tastaturet uten å trykke på Omformuler, blir ingen meldinger sporet eller lagret).</li>
          <li>Vi bruker data for å bedre forstå dine språkferdigheter, for å levere læringsfunksjoner. Vi er ikke personlig interessert i hva du sender av tekstmeldinger, men ønsker bare å hjelpe deg med å akselerere din språklæring!</li>
          <li>Vi filtrerer ut visse omformulerte tekster og lagrer dem ikke (for eksempel passord, kortnumre og koder — se den fullstendige listen i seksjon 7).</li>
          <li>Du kan slå sporing av omformulering av og på når som helst (i hovedappen Arcatext). Vi har standardinnstillingen på 'på' slik at vi kan levere læringsfunksjoner.</li>
        </ol>
      </div>
      <p className="font-medium">A. Tekst du velger å oversette, omformulere, sjekke eller analysere</p>
      <p>
        Når du bruker Arcatext-funksjoner som oversettelse, omformulering, omvendt oversettelse,
        synonymforslag, grammatikkhjelp, betydningsavklaring eller læringstilbakemelding, kan teksten
        du sender inn bli behandlet av Arcatext og kan bli sendt til tredjeparts AI-tjenesteleverandører
        slik at den forespurte funksjonen kan fungere.
      </p>
      <p>Dette kan omfatte:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Meldinger du skriver inn i Arcatext-tastaturet</li>
        <li>Meldinger du velger å omformulere</li>
        <li>Tekst du velger for oversettelse eller omformulering</li>
        <li>Tekst du ber Arcatext om å sjekke, forklare eller transformere</li>
        <li>
          Kontekst som trengs for å forbedre kvaliteten på oversettelse eller omformulering, som valgt språk,
          skrift, tone, formalitet eller kjønnsinnstillinger
        </li>
      </ul>
      <p className="font-medium">B. Omformulerte meldinger knyttet til profilen din</p>
      <p>Arcatext kan lagre meldinger som du omformulerer for å tilby:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ytelsesmålinger</li>
        <li>Fremdriftssporing</li>
        <li>Personlig tilpassede læringsfunksjoner</li>
        <li>Skrivehistorikk</li>
        <li>Innsikt i språklæring</li>
        <li>Andre Arcatext-funksjoner</li>
      </ul>
      <p>
        Disse omformulerte meldingene kan knyttes til din Arcatext-profil slik at appen kan vise
        deg informasjon som:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din omformuleringshistorikk</li>
        <li>Din læringsfremgang</li>
        <li>Dine mønstre for språkøving</li>
        <li>Dine mest brukte språk eller funksjoner</li>
        <li>Ytelsesmålinger knyttet til din bruk av Arcatext</li>
        <li>Personlig tilpassede anbefalinger eller læringsverktøy</li>
      </ul>
      <p>
        Omformulerte meldinger som forblir knyttet til profilen din, behandles som konfidensielle
        brukerdata. Adalithic LLC selger, lisensierer eller deler ikke profiltilknyttede omformulerte meldinger med
        eksterne selskaper, annonsører, datameglere eller urelaterte tredjeparter.
      </p>
      <p>
        Profiltilknyttede omformulerte meldinger brukes internt av Adalithic LLC for å levere
        Arcatext sine funksjoner, vedlikeholde appen, forbedre brukeropplevelsen og støtte
        læringsrelatert funksjonalitet.
      </p>
      <p className="font-medium">C. Tastaturinnstillinger og språkpreferanser</p>
      <p>Arcatext kan behandle appinnstillinger og språkpreferanser, som:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kildespråk</li>
        <li>Målspråk</li>
        <li>Tastaturspråk</li>
        <li>Alfabet- eller skriftvalg, som standardskrift eller romanisert tekst</li>
        <li>
          Kjønn på taler, mottaker eller gruppechat-kjønnsinnstillinger når det trengs for
          oversettelsesnøyaktighet
        </li>
        <li>Tone, formalitet eller læringspreferanser</li>
        <li>Funksjonspreferanser inne i appen</li>
      </ul>
      <p>
        Disse innstillingene brukes for å levere tastatur-, oversettelses-, omformulerings- og læringsopplevelsen.
        Noen innstillinger kan lagres lokalt på enheten din eller knyttes til profilen din
        hvis du oppretter eller bruker en Arcatext-konto.
      </p>
      <p className="font-medium">D. Kontoinformasjon</p>
      <p>
        Hvis Arcatext tilbyr kontobaserte funksjoner, kan vi samle inn og lagre kontoinformasjon
        som:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>E-postadresse</li>
        <li>Brukernavn</li>
        <li>Passord eller autentiseringsopplysninger</li>
        <li>Abonnementsstatus</li>
        <li>App-preferanser</li>
        <li>Profilinnstillinger</li>
      </ul>
      <p>
        Passord, hvis de brukes, lagres ikke i klartekst. Autentisering kan også håndteres av
        tredjeparts identitetsleverandører, app-butikkleverandører eller plattformtjenester.
      </p>
      <p className="font-medium">E. Enhets- og plattforminformasjon</p>
      <p>
        Arcatext kan få tilgang til enhets- og plattforminformasjon som trengs for å levere funksjonalitet,
        initialisere innstillinger, forbedre ytelse og støtte kompatibilitet på tvers av enheter og
        operativsystemer.
      </p>
      <p>Dette kan omfatte:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Enhetens språkinnstillinger</li>
        <li>Enhetstype</li>
        <li>Operativsystemversjon</li>
        <li>App-versjon</li>
        <li>Plattformrelatert konfigurasjonsinformasjon</li>
        <li>Informasjon om tillatelsesstatus</li>
      </ul>
      <p>
        Denne informasjonen brukes for å konfigurere og støtte appopplevelsen og er ikke ment
        for å identifisere deg direkte.
      </p>
      <p className="font-medium">F. Grunnleggende teknisk og diagnostisk informasjon</p>
      <p>
        Arcatext kan behandle begrenset teknisk informasjon som trengs for å drive, sikre, forbedre eller
        feilsøke appen, som:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Krasjlogger</li>
        <li>Ytelsesdata</li>
        <li>Feilrapporter</li>
        <li>Grunnleggende bruks­hendelser</li>
        <li>Om en funksjon ble åpnet, fullført eller mislyktes</li>
      </ul>
      <p>Der det er mulig, samles denne informasjonen inn på en måte som ikke identifiserer deg direkte.</p>
      <p className="font-medium">G. Informasjon vi ikke bevisst samler inn</p>
      <p>Arcatext samler ikke bevisst inn:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din nøyaktige posisjon</li>
        <li>Dine kontakter</li>
        <li>Dine bilder</li>
        <li>Din fullstendige betalingskortinformasjon</li>
        <li>Innholdet i alt du skriver utenfor Arcatext-funksjoner</li>
        <li>Passord skrevet inn i andre apper</li>
        <li>Sikkerhetskoder skrevet inn i andre apper</li>
      </ul>
      <p>
        Arcatext behandler tekst som du velger å sende inn gjennom Arcatext-funksjoner. Arcatext bruker
        ikke tastaturtillatelser til i hemmelighet å samle inn all tekst du skriver.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Tillatelser for tilpasset tastatur og nettverkstilgang
      </h3>
      <p>
        Arcatext fungerer som et tredjeparts tastatur og språkverktøy. Noen funksjoner kan kreve
        ytterligere tillatelser, internettilkobling eller enhetsnivå-tilgang avhengig av din
        enhet, ditt operativsystem eller din plattform.
      </p>
      <p>For eksempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          På Apple-enheter kan brukere måtte aktivere "Tillat full tilgang" for visse tastatur- og
          nettbaserte språkfunksjoner.
        </li>
        <li>
          På Android-enheter kan brukere bli bedt om å gi tillatelser knyttet til tastatur­funksjonalitet,
          internettilgang, varsler eller appfunksjoner.
        </li>
      </ul>
      <p>Disse tillatelsene kan være nødvendige for funksjoner som:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI-oversettelse</li>
        <li>Omformulering</li>
        <li>Omvendt oversettelse</li>
        <li>Språksjekk</li>
        <li>Ytelsesmålinger</li>
        <li>Læringsfunksjoner</li>
        <li>Skybasert språkbehandling</li>
        <li>Kontosynkronisering</li>
      </ul>
      <p>
        Når disse tillatelsene er aktivert, kan Arcatext sende teksten du velger å behandle til
        våre tjenesteleverandører slik at den forespurte funksjonen kan fungere.
      </p>
      <p>
        Arcatext bruker ikke tastaturtillatelser til i hemmelighet å samle inn alt du skriver, spore
        urelatert skriveaktivitet eller overvåke informasjon utenfor Arcatext-funksjoner.
      </p>
      <p>
        Du bør ikke bruke Arcatext til å skrive passord, betalingsinformasjon, sikkerhetskoder eller
        annen svært sensitiv informasjon. Noen operativsystemer kan automatisk bytte til
        systemtastaturet for passordfelt, men brukere bør likevel utvise forsiktighet når de skriver inn
        sensitiv informasjon.
      </p>
      <p>
        Du kan deaktivere tastaturtillatelser, internettillatelser eller relaterte tilgangsinnstillinger
        når som helst gjennom enhetsinnstillingene dine, selv om noen Arcatext-funksjoner kan slutte å
        fungere som de skal.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Hvordan vi bruker informasjon</h3>
      <p>
        Arcatext bruker informasjon til formål knyttet til å levere, tilpasse, analysere,
        sikre og forbedre appen.
      </p>
      <p>Vi kan bruke informasjon til å:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Oversette tekst</li>
        <li>Omformulere meldinger</li>
        <li>Tilby alternative formuleringer eller synonymer</li>
        <li>Sjekke betydningen av en oversettelse</li>
        <li>Forklare språkvalg</li>
        <li>Støtte ulike skrifter eller romaniseringsalternativer</li>
        <li>Anvende innstillinger for kjønn, tone eller formalitet</li>
        <li>Lagre omformulerte meldinger for brukervendte læringsfunksjoner</li>
        <li>Tilby ytelsesmålinger og fremdriftssporing</li>
        <li>Tilpasse anbefalinger for språklæring</li>
        <li>Forbedre appens pålitelighet og ytelse</li>
        <li>Forbedre Arcatext sine språksystemer og funksjoner for store språkmodeller</li>
        <li>Oppdage feil, krasj, misbruk eller sikkerhetsproblemer</li>
        <li>Opprettholde appsikkerhet</li>
        <li>Svare på supporthenvendelser</li>
        <li>Overholde juridiske forpliktelser</li>
      </ul>
      <p>Vi bruker ikke profiltilknyttede omformulerte meldinger til å lage annonseprofiler.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI-behandling og tredjeparts tjenesteleverandører
      </h3>
      <p>
        For å levere oversettelses- og språkfunksjoner kan Arcatext sende innsendt tekst og relaterte
        innstillinger til tredjeparts AI-modellleverandører og andre tjenesteleverandører.
      </p>
      <p>
        Disse leverandørene behandler teksten for å returnere oversettelser, omformuleringer, forklaringer eller
        andre språkutdata. Deres håndtering av data reguleres av deres egne personvernerklæringer,
        vilkår og behandlingspraksis.
      </p>
      <p>
        På tidspunktet for denne erklæringens siste oppdatering opplyser våre AI-modellleverandører at data som sendes inn gjennom
        deres API-er ikke brukes til å trene eller forbedre deres modeller som standard med mindre kunden velger
        å delta. Arcatext velger ikke bevisst å delta i modelltrening for brukerinnsendt oversettelses­innhold
        med mindre denne erklæringen oppdateres til å si noe annet.
      </p>
      <p>Arcatext kan også bruke tjenesteleverandører til:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>App-hosting</li>
        <li>Databaselagring</li>
        <li>Analyse</li>
        <li>Krasjrapportering</li>
        <li>Kundestøtte</li>
        <li>Sikkerhetsovervåking</li>
        <li>Autentisering</li>
        <li>Betalingsbehandling</li>
        <li>AI-behandling og språkmodellfunksjonalitet</li>
      </ul>
      <p>
        Disse leverandørene har kun lov til å behandle informasjon i den grad det er nødvendig for å levere tjenester til
        Arcatext og Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Lagring av omformulerte meldinger</h3>
      <p>Arcatext kan lagre meldinger som du omformulerer slik at vi kan tilby:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ytelsesmålinger</li>
        <li>Læringsfunksjoner</li>
        <li>Brukerhistorikk</li>
        <li>Fremdriftssporing</li>
        <li>Personlig tilpassede språkverktøy</li>
      </ul>
      <p>
        Når omformulerte meldinger er knyttet til profilen din, kan de knyttes til informasjon
        som konto, e-postadresse, brukernavn, app-preferanser eller brukshistorikk. Denne
        tilknytningen gjør at Arcatext kan tilby personlig tilpassede funksjoner.
      </p>
      <p>
        Profiltilknyttede omformulerte meldinger er konfidensielle og selges, lisensieres eller deles ikke
        utenfor Adalithic LLC bortsett fra med tjenesteleverandører som behandler dataene på våre vegne for å
        drive Arcatext.
      </p>
      <p>Eksempler på funksjoner som kan avhenge av lagrede omformulerte meldinger inkluderer:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Spore din forbedring over tid</li>
        <li>Vise statistikk for språklæring</li>
        <li>Hjelpe deg med å gjennomgå tidligere omformulerte meldinger</li>
        <li>Identifisere grammatikk- eller ordforrådsmønstre</li>
        <li>Forbedre personlig tilpassede anbefalinger</li>
        <li>Støtte fremtidige læringsverktøy inne i Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Hva vi filtrerer ut og aldri lagrer eller logger
      </h3>
      <p>
        For å beskytte deg skanner Arcatext automatisk tekst på enheten din før noen omformulert
        oppføring lagres. Når det oppdager noe sensitivt, forkaster det hele oppføringen — det
        lagrer ikke en forkortet eller sladdet versjon, og ingenting knyttes til profilen din.
      </p>
      <p>En omformulert oppføring blir IKKE lagret når:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Sikre eller sensitive felt</span> — du skriver i et
          passord- eller sikkert inntastingsfelt, eller et felt beregnet på e-post, telefonnumre, PIN-koder eller
          numeriske koder, URL-er eller søk.
        </li>
        <li>
          <span className="font-medium">E-postadresser</span> — teksten inneholder en e-post­adresse.
        </li>
        <li>
          <span className="font-medium">Betalingskortnumre</span> — teksten inneholder en sekvens på 13–16
          sifre som ser ut som et kreditt- eller debetkortnummer.
        </li>
        <li>
          <span className="font-medium">Verifiserings- eller engangskoder</span> — teksten inneholder
          en frittstående kode på 4–8 sifre.
        </li>
        <li>
          <span className="font-medium">Konto- eller ID-numre</span> — teksten inneholder en lang
          ubrutt rekke på 9 eller flere sifre.
        </li>
        <li>
          <span className="font-medium">Passord, API-nøkler og andre hemmeligheter</span> — teksten
          inneholder et høyentropi-token som ser ut som et passord, en nøkkel eller en annen tilfeldig hemmelighet.
        </li>
      </ul>
      <p>Ved tvil velger Arcatext å ikke lagre.</p>
      <p>
        <span className="font-medium">Serverlogger.</span> Våre servere logger aldri innholdet i
        meldingene dine. Logger registrerer kun operasjonelle metadata — en kontoidentifikator, forespørsels­status,
        tidspunkt og en ugjennomsiktig forespørsels-ID — brukt til å holde tjenesten pålitelig og til å
        diagnostisere problemer.
      </p>
      <p>
        <span className="font-medium">Din kontroll.</span> Du kan slå av lagring av omformulering
        helt når som helst i Arcatext-appen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonymiserte og avidentifiserte språkdata
      </h3>
      <p>
        Arcatext og Adalithic LLC kan bruke lagrede meldinger og språkinteraksjoner for å forbedre
        språksystemer, oversettelseskvalitet, omformuleringsfunksjoner og ytelsen til store språkmodeller.
      </p>
      <p>
        Arcatext og Adalithic LLC kan også lage anonymiserte, avidentifiserte eller aggregerte
        språkdatasett avledet fra brukerinnsendte meldinger. Disse datasettene brukes internt
        av Adalithic LLC for å forbedre Arcatext sine språkfunksjoner og kvalitet. Vi selger ikke,
        lisensierer eller deler disse datasettene med tredjeparter.
      </p>
      <p>
        Anonymiserte eller avidentifiserte datasett er ikke ment å identifisere deg personlig eller å bli
        knyttet til en bestemt brukerprofil. Imidlertid kan ingen anonymiserings- eller avidentifiserings­prosess
        garantere at reidentifikasjon er umulig under enhver omstendighet. Adalithic
        LLC bruker rimelige sikringstiltak utformet for å redusere denne risikoen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Datalagring, sletting av konto og din rett til sletting
      </h3>
      <p>
        Vi oppbevarer informasjon kun så lenge det med rimelighet er nødvendig for formålene beskrevet
        i denne personvernerklæringen, med mindre en lengre oppbevaringsperiode kreves ved lov.
      </p>
      <p>Generelt:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Omformulerte meldinger knyttet til profilen din kan oppbevares mens kontoen din er aktiv eller
          etter behov for å tilby funksjoner og målinger.
        </li>
        <li>App-preferanser kan lagres lokalt på enheten din eller knyttes til profilen din.</li>
        <li>
          Tekniske logger kan oppbevares midlertidig for feilsøking, pålitelighet, forebygging av misbruk
          eller sikkerhetsformål.
        </li>
        <li>
          Supportmeldinger kan oppbevares etter behov for å svare brukere og opprettholde support­registre.
        </li>
        <li>
          Anonymiserte, avidentifiserte eller aggregerte datasett kan oppbevares i lengre perioder
          fordi de ikke er ment å identifisere en bestemt bruker.
        </li>
        <li>
          Anonyme logger over omformulerte meldinger kan oppbevares etter at kontoen din er slettet, som
          beskrevet nedenfor.
        </li>
      </ul>
      <p>
        Du kan slette din Arcatext-konto når som helst fra inne i appen. Når du sletter
        kontoen din, fjerner vi profilen din og kontoinformasjonen, inkludert e-postadressen din,
        brukernavnet og autentiseringsopplysningene.
      </p>
      <p>
        Arcatext opprettholder anonyme logger over omformulerte meldinger selv etter at en konto er slettet.
        Dette lar brukere dra nytte av sin meldingshistorikk hvis de oppretter en konto igjen
        med samme identifikator (dvs. en e-postadresse). Dette hjelper også Arcatext med å fortsette å
        trene sine egne interne AI-modeller på anonyme omformulerte meldingsdata.
      </p>
      <p>
        For å holde disse oppbevarte loggene anonyme erstattes e-postadressen din på tidspunktet for
        slettingen med en enveis, irreversibel identifikator. De oppbevarte omformulerte meldingene lagres ikke
        med e-postadressen din og kan ikke leses eller knyttes tilbake til deg av Arcatext-
        personell. Hvis du senere oppretter en ny konto med samme e-postadresse, kan disse meldingene
        bli koblet på nytt til den nye kontoen din.
      </p>
      <p>
        <span className="font-medium">Be om fullstendig sletting.</span> Hvis du foretrekker at dine
        oppbevarte omformulerte meldingsdata skal slettes permanent og fullstendig i stedet for å bli oppbevart
        i anonym form, kan du kontakte oss på arcatextapp@gmail.com med emnelinjen "Data
        Erasure Request." Oppgi e-postadressen til kontoen hvis data du vil slette.
        Denne forespørsels-e-posten må sendes fra den samme e-posten som er knyttet til den aktuelle kontoen.
        Forespørsler om datasletting kan kun gjøres for kontoer som allerede er
        slettet. Vi vil slette de tilknyttede oppbevarte dataene i samsvar med gjeldende lov.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Sensitiv informasjon</h3>
      <p>
        Arcatext er et språkverktøy, ikke et sikkert hvelv. Du bør ikke sende inn svært sensitiv
        informasjon for oversettelse, omformulering, sjekking eller læringsfunksjoner.
      </p>
      <p>Unngå å skrive inn:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Passord</li>
        <li>Kredittkortnumre</li>
        <li>Bankinformasjon</li>
        <li>Personnumre eller offentlige ID-er</li>
        <li>Medisinske journaler</li>
        <li>Juridiske hemmeligheter</li>
        <li>Private adresser</li>
        <li>Konfidensiell forretningsinformasjon</li>
        <li>
          Svært sensitive personlige meldinger du ikke ønsker behandlet eller lagret for
          språkrelaterte formål
        </li>
      </ul>
      <p>
        Hvis du velger å sende inn sensitiv informasjon, forstår du at den kan bli behandlet av
        Arcatext og dets tjenesteleverandører for å levere den forespurte funksjonen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Barns personvern</h3>
      <p>Arcatext er ikke ment for barn under 13 år.</p>
      <p>
        Hvis du er under 13 år, kan du ikke bruke Arcatext med mindre din forelder, verge, skole eller
        autorisert utdanningsinstitusjon har godkjent din bruk på en måte som er tillatt etter gjeldende
        lov.
      </p>
      <p>
        Hvis Adalithic LLC blir oppmerksom på at personopplysninger fra et barn under 13 år har blitt
        samlet inn i strid med gjeldende lov, kan vi ta skritt utformet for å begrense eller slette
        denne informasjonen der det er hensiktsmessig.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Internasjonale dataoverføringer</h3>
      <p>
        Arcatext og dets tjenesteleverandører kan behandle informasjon i USA eller andre
        land. Disse landene kan ha personvernlover som skiller seg fra lovene der du
        befinner deg.
      </p>
      <p>
        Ved å bruke Arcatext forstår du at informasjonen din kan bli behandlet i land
        utenfor ditt bosted. Ytterligere informasjon om overføringer, inkludert
        sikringstiltakene vi bruker, finnes i seksjonen om regionsspesifikke personvernrettigheter nedenfor.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Dine valg</h3>
      <p>Du har flere valg angående informasjonen din.</p>
      <p className="font-medium">Tastaturtillatelser og tilgangsinnstillinger</p>
      <p>
        Du kan deaktivere tastaturtillatelser, internettillatelser eller relaterte tilgangsinnstillinger
        gjennom enhets- eller operativsysteminnstillingene dine. Noen Arcatext-funksjoner som er avhengige av
        nettbasert behandling eller tastaturintegrasjon, kan slutte å fungere som de skal.
      </p>
      <p className="font-medium">Slutt å bruke tastaturet</p>
      <p>Du kan fjerne Arcatext fra tastaturlisten din eller avinstallere appen når som helst.</p>
      <p className="font-medium">Begrens hva du sender inn</p>
      <p>
        Du kan velge å ikke sende inn sensitiv eller personlig tekst for oversettelse, omformulering,
        sjekking eller læringsfunksjoner.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Personvernforespørsler</h3>
      <p>
        Hvis du har spørsmål om informasjonen din eller denne personvernerklæringen, kan du kontakte
        Adalithic LLC på:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC kan gjennomgå og svare på forespørsler i samsvar med gjeldende lov og
        selskapets operasjonelle kapasitet.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Personvernvarsel for California</h3>
      <p>
        Hvis du er bosatt i California, gir denne seksjonen ytterligere informasjon.
      </p>
      <p>Arcatext kan behandle følgende kategorier av informasjon:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Brukerinnsendt innhold</span> — Tekst innsendt for
          oversettelse, omformulering, sjekking eller analyse. Formål: å levere språkfunksjoner.
        </li>
        <li>
          <span className="font-medium">Lagrede omformulerte meldinger</span> — Meldinger du omformulerer som
          kan knyttes til profilen din. Formål: å levere målinger, historikk og læringsfunksjoner.
        </li>
        <li>
          <span className="font-medium">Kontoinformasjon</span> — E-postadresse, brukernavn,
          autentiseringsinformasjon. Formål: å levere kontobaserte funksjoner.
        </li>
        <li>
          <span className="font-medium">Preferanser</span> — Språk, skrift, tone, kjønn og
          tastaturinnstillinger. Formål: å tilpasse appen.
        </li>
        <li>
          <span className="font-medium">Teknisk informasjon</span> — App-versjon, krasjlogger,
          enhetstype, operativsystem. Formål: å vedlikeholde og forbedre appen.
        </li>
        <li>
          <span className="font-medium">Supportinformasjon</span> — E-poster eller meldinger du sender
          oss. Formål: å svare på supporthenvendelser.
        </li>
        <li>
          <span className="font-medium">Avidentifiserte språkdata</span> — Anonymiserte eller
          aggregerte språkeksempler avledet fra brukerinnsendinger. Formål: å forbedre språk­systemer.
        </li>
      </ul>
      <p>Adalithic LLC selger eller deler ikke dine personopplysninger.</p>
      <p>Hvis du har spørsmål om dine personvernrettigheter, kontakt arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Sikkerhet</h3>
      <p>
        Vi bruker rimelige tekniske og organisatoriske tiltak for å beskytte informasjon behandlet
        gjennom Arcatext.
      </p>
      <p>
        Profiltilknyttede omformulerte meldinger behandles som konfidensielle brukerdata. Vi tar skritt
        utformet for å begrense tilgangen til denne informasjonen til autorisert personell og tjeneste­leverandører
        som trenger tilgang for å drive, sikre, forbedre eller støtte Arcatext.
      </p>
      <p>
        Imidlertid er ingen metode for elektronisk lagring eller internettoverføring fullstendig sikker. Vi
        kan ikke garantere absolutt sikkerhet.
      </p>
      <p>Du er ansvarlig for å avgjøre hvilken informasjon du sender inn gjennom Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Datadeling</h3>
      <p>Arcatext og Adalithic LLC kan dele informasjon under begrensede omstendigheter:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Med AI-leverandører for å levere oversettelse, omformulering, sjekking og språkfunksjoner</li>
        <li>Med tjenesteleverandører som hjelper med å drive, sikre, lagre, analysere eller forbedre appen</li>
        <li>Med analyse- eller krasjrapporteringsleverandører</li>
        <li>Med betalingsbehandlere eller app-butikkleverandører</li>
        <li>Hvis det kreves ved lov eller rettslig prosess</li>
        <li>For å beskytte rettighetene, sikkerheten eller tryggheten til Arcatext, brukere, Adalithic LLC eller andre</li>
        <li>I forbindelse med fusjoner, oppkjøp, finansiering eller salg av eiendeler</li>
      </ul>
      <p>Vi selger ikke dine data.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. App-butikk, fakturering og betalingsinformasjon
      </h3>
      <p>
        Hvis Arcatext tilbyr betalte funksjoner, abonnementer eller kjøp i appen, kan betalingsbehandling
        håndteres av tredjeparts plattformleverandører som Apple, Google eller andre
        autoriserte betalingsbehandlere.
      </p>
      <p>For eksempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kjøp på Apple-plattformer kan behandles gjennom Apples App Store- og StoreKit-systemer.</li>
        <li>Kjøp på Android-plattformer kan behandles gjennom Google Play Billing og Googles betalingssystemer.</li>
      </ul>
      <p>
        Arcatext og Adalithic LLC mottar eller lagrer ikke direkte fullstendig betalingskortinformasjon
        som brukes gjennom disse plattformenes faktureringssystemer.
      </p>
      <p>
        Din bruk av tredjeparts app-butikker, faktureringssystemer og betalingsleverandører kan også
        reguleres av disse leverandørenes egne personvernerklæringer, vilkår og betalingsregler.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Endringer i denne personvernerklæringen</h3>
      <p>
        Vi kan oppdatere denne personvernerklæringen fra tid til annen for å gjenspeile endringer i appen vår,
        teknologi, tjenesteleverandører, juridiske forpliktelser eller forretningspraksis.
      </p>
      <p>Når vi oppdaterer erklæringen, vil vi revidere "Sist oppdatert"-datoen øverst.</p>
      <p>
        Hvis endringene er betydelige, kan vi gi ytterligere varsel gjennom appen, nettstedet eller
        andre hensiktsmessige metoder.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Kontakt oss</h3>
      <p>Hvis du har spørsmål, bekymringer eller personvernforespørsler, kontakt:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext personvernkontakt
        <br />
        E-post: arcatextapp@gmail.com
        <br />
        Støtteside: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Regionsspesifikke personvernrettigheter</h3>
      <p>
        Hvis det er konflikt mellom denne personvernerklæringen og bruksvilkårene i personvernrelaterte
        saker, gjelder denne personvernerklæringen.
      </p>
      <p className="font-medium">Dine rettigheter (global oppsummering)</p>
      <p>
        Avhengig av hvor du bor, kan du ha rettigheter angående dine personopplysninger,
        inkludert retten til å få tilgang til, korrigere, slette eller begrense behandlingen av dataene dine, retten
        til dataportabilitet, retten til å motsette deg visse typer behandling, og retten til å
        trekke tilbake samtykke der behandlingen er basert på samtykke. Detaljerte rettigheter og hvordan du utøver
        dem er fastsatt i de regionsspesifikke seksjonene nedenfor. Du kan også kontakte oss på
        arcatextapp@gmail.com for å fremsette en forespørsel, og vi vil svare i samsvar med gjeldende
        lov.
      </p>

      <p className="font-medium">
        Tillegg A — Det europeiske økonomiske samarbeidsområdet (EEA), Den europeiske union og EFTA-land
      </p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i: Østerrike, Belgia, Bulgaria, Kroatia, Kypros,
        Tsjekkia, Danmark, Estland, Finland, Frankrike, Tyskland, Hellas, Ungarn, Irland, Italia,
        Latvia, Litauen, Luxembourg, Malta, Nederland, Polen, Portugal, Romania, Slovakia,
        Slovenia, Spania, Sverige, Island og Norge.
      </p>
      <p className="font-medium">Rettslige grunnlag for behandling</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Oppfyllelse av en avtale</span> — behandling som er nødvendig for å
          levere de sentrale tastatur-, oversettelses-, omformulerings- og språkfunksjonene du ber om.
        </li>
        <li>
          <span className="font-medium">Berettigede interesser</span> — sikkerhet, forebygging av misbruk,
          tjenesteforbedring og utvikling av språksystemer. Vi har gjennomført en avveining
          og konkludert med at disse interessene ikke overstyres av dine rettigheter og friheter i
          de fleste tilfeller.
        </li>
        <li>
          <span className="font-medium">Samtykke</span> — valgfrie funksjoner som lagring av omformulerte
          meldinger for læring og fremdriftssporing. Du kan trekke tilbake samtykke når som helst ved
          å slå av funksjonen i appen.
        </li>
      </ul>
      <p className="font-medium">Dine rettigheter</p>
      <p>
        Med forbehold om gjeldende unntak har du rett til å få tilgang til dine personopplysninger; få
        rettet unøyaktige opplysninger; få slettet dataene dine ("retten til å bli glemt");
        få begrenset behandling; motta dataene dine i et portabelt format; motsette deg
        behandling basert på berettigede interesser; og trekke tilbake samtykke der behandlingen er basert på
        samtykke. Du kan utøve disse rettighetene ved å kontakte oss på arcatextapp@gmail.com. Vi vil
        svare innen fristene som kreves ved lov (vanligvis én måned, kan forlenges i komplekse
        tilfeller).
      </p>
      <p className="font-medium">Rett til å klage</p>
      <p>
        Du har rett til å inngi en klage til din lokale tilsynsmyndighet (databeskyttelsesmyndighet)
        hvis du mener at rettighetene dine er krenket.
      </p>
      <p className="font-medium">Representant</p>
      <p>
        Adalithic LLC har utnevnt en representant i Den europeiske union i henhold til artikkel 27 i
        GDPR. Vår representant er Prighter Group. Du kan kontakte vår representant, eller utøve
        dine registrertes rettigheter gjennom dem, ved å bruke følgende sikre portal:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>
      <p className="font-medium">Internasjonale dataoverføringer</p>
      <p>
        Informasjonen din kan overføres til USA og andre land utenfor
        EEA/EFTA. Vi baserer oss på standard personvernbestemmelser (SCC) godkjent av Europakommisjonen
        som den primære overføringsmekanismen, sammen med hensiktsmessige supplerende tiltak (som
        kryptering og tilgangskontroller) der det kreves.
      </p>
      <p className="font-medium">Oppbevaring og automatisert behandling</p>
      <p>
        Oppbevaringsperioder er beskrevet i seksjon 9. Automatisert behandling og forbedring av
        språkmodeller på brukerinnsendt tekst er basert på berettigede interesser eller samtykke (der
        det er aktuelt) og er underlagt sikringstiltakene beskrevet i denne erklæringen.
      </p>

      <p className="font-medium">Tillegg B — Storbritannia</p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i Storbritannia. Bestemmelsene i tillegg A
        gjelder med følgende tilpasninger:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Henvisninger til GDPR erstattes med UK GDPR.</li>
        <li>Tilsynsmyndigheten er Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC har utnevnt en representant i Storbritannia i henhold til artikkel 27 i
          UK GDPR. Vår britiske representant er Prighter Group, som kan kontaktes gjennom den samme sikre
          portalen:{" "}
          <a
            href="https://app.prighter.com/portal/17012077629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://app.prighter.com/portal/17012077629
          </a>
          .
        </li>
      </ul>

      <p className="font-medium">Tillegg C — Sveits</p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i Sveits. Du har rettigheter i henhold til den reviderte
        føderale loven om databeskyttelse (nFADP), inkludert rett til innsyn, retting og
        sletting. Du kan utøve disse rettighetene ved å kontakte oss på arcatextapp@gmail.com. Adalithic
        LLC har utnevnt en representant i Sveits i henhold til den reviderte føderale loven om databeskyttelse.
        Vår sveitsiske representant er Prighter Group, som kan kontaktes gjennom den samme sikre
        portalen:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>

      <p className="font-medium">Tillegg D — Canada, inkludert Québec</p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i Canada, inkludert Québec. Du har rettigheter i henhold til
        PIPEDA og Québecs Law 25 til å få innsyn i og korrigere dine personopplysninger og til å trekke
        tilbake samtykke til visse typer behandling. Du kan utøve disse rettighetene ved å kontakte oss på
        arcatextapp@gmail.com. En fransk versjon av denne personvernerklæringen tilbys for
        innbyggere i Québec. I tilfelle et databrudd som utgjør en reell risiko for betydelig skade,
        vil vi varsle berørte personer og de relevante myndighetene som kreves av gjeldende
        lov.
      </p>

      <p className="font-medium">Tillegg E — USA</p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i USA. Innbyggere i California har
        rettighetene beskrevet i personvernvarselet for California i seksjon 15 ovenfor, inkludert rettighetene
        til å få vite om, slette og korrigere personopplysninger og til å reservere seg mot ethvert salg eller deling.
        Adalithic LLC selger eller deler ikke dine personopplysninger for atferdsbasert annonsering på tvers av kontekster,
        og du vil ikke bli diskriminert for å utøve rettighetene dine. Andre amerikanske
        delstaters personvernlover kan gjelde avhengig av din bostedsdelstat, og vi vil overholde
        gjeldende rettigheter der det kreves. For å utøve disse rettighetene, kontakt oss på
        arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Tillegg F — Andre land og regioner</p>
      <p>
        Dette tillegget gjelder for forbrukere bosatt i alle andre land og regioner der Arcatext
        tilbys (unntatt sanksjonerte eller embargobelagte jurisdiksjoner). Der lokal lov gir deg
        ytterligere personvernrettigheter som ikke kan fravikes (for eksempel under lover som Brasils LGPD eller
        personvernlover i Japan, Sør-Korea, Australia, India og andre jurisdiksjoner), gjelder disse
        rettighetene. Du kan kontakte oss på arcatextapp@gmail.com for å utøve slike rettigheter, og vi vil
        svare i samsvar med gjeldende lokal lov.
      </p>
    </div>
  );
}
