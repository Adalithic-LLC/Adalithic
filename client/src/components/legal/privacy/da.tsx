// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyDa() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Drives af Adalithic LLC</p>
      <p>Sidst opdateret: July 3, 2026</p>
      <p>
        Arcatext er et brugerdefineret tastatur og en sprogapplikation designet til at hjælpe brugere med at skrive,
        oversætte, omformulere og bedre forstå beskeder på tværs af sprog. Denne privatlivspolitik
        forklarer, hvilke oplysninger Arcatext behandler, hvordan disse oplysninger bruges, hvornår de
        gemmes, hvornår de kan deles, og hvilke valgmuligheder du har.
      </p>
      <p>Ved at bruge Arcatext accepterer du de fremgangsmåder, der er beskrevet i denne privatlivspolitik.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Hvem vi er</h3>
      <p>Arcatext drives af Adalithic LLC.</p>
      <p>Hvis du har spørgsmål om privatliv, kan du kontakte os på:</p>
      <p>
        E-mail: arcatextapp@gmail.com
        <br />
        Supportside: https://adalithic.com/
      </p>
      <p>Hvis disse kontaktoplysninger ændres, vil vi opdatere denne privatlivspolitik.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Oplysninger vi behandler</h3>
      <p>
        Arcatext er designet til kun at behandle de oplysninger, der er nødvendige for at levere, forbedre,
        personalisere og understøtte appens sprogfunktioner.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Kort fortalt</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext sælger ikke dine data til nogen.</li>
          <li>Vi sporer kun beskeder, der bliver omformuleret (du skal trykke på Omformulér-knappen, så hvis du skriver med tastaturet uden at trykke på Omformulér, spores eller gemmes ingen beskeder).</li>
          <li>Vi bruger data til bedre at forstå dit sprogniveau og til at levere læringsfunktioner. Vi er ikke personligt interesserede i, hvad du skriver, men ønsker kun at hjælpe med at fremskynde din sprogindlæring!</li>
          <li>Vi frasorterer visse omformulerede tekster og gemmer dem ikke (for eksempel adgangskoder, kortnumre og koder — se den komplette liste i afsnit 7).</li>
          <li>Du kan til enhver tid slå Omformulér-sporing fra eller til (i hoved-Arcatext-appen). Vi har standardindstillingen 'til', så vi kan levere læringsfunktioner.</li>
        </ol>
      </div>
      <p className="font-medium">A. Tekst du vælger at oversætte, omformulere, tjekke eller analysere</p>
      <p>
        Når du bruger Arcatext-funktioner såsom oversættelse, omformulering, omvendt oversættelse,
        synonymforslag, grammatikhjælp, betydningsafklaring eller læringsfeedback, kan den
        tekst, du indsender, blive behandlet af Arcatext og sendt til tredjeparts AI-tjeneste-
        udbydere, så den ønskede funktion kan fungere.
      </p>
      <p>Dette kan omfatte:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Beskeder du skriver ind i Arcatext-tastaturet</li>
        <li>Beskeder du vælger at omformulere</li>
        <li>Tekst du vælger til oversættelse eller omformulering</li>
        <li>Tekst du beder Arcatext om at tjekke, forklare eller omdanne</li>
        <li>
          Kontekst der er nødvendig for at forbedre kvaliteten af oversættelse eller omformulering, såsom valgt sprog,
          skrift, tone, formalitet eller kønsindstillinger
        </li>
      </ul>
      <p className="font-medium">B. Omformulerede beskeder knyttet til din profil</p>
      <p>Arcatext kan gemme beskeder, som du omformulerer, for at levere:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ydelsesmålinger</li>
        <li>Fremskridtssporing</li>
        <li>Personaliserede læringsfunktioner</li>
        <li>Skrivehistorik</li>
        <li>Sprogindlæringsindsigt</li>
        <li>Andre Arcatext-funktioner</li>
      </ul>
      <p>
        Disse omformulerede beskeder kan være knyttet til din Arcatext-profil, så appen kan vise
        dig oplysninger såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din omformuleringshistorik</li>
        <li>Dine læringsfremskridt</li>
        <li>Dine sprogøvelsesmønstre</li>
        <li>Dine mest brugte sprog eller funktioner</li>
        <li>Ydelsesmålinger relateret til din brug af Arcatext</li>
        <li>Personaliserede anbefalinger eller læringsværktøjer</li>
      </ul>
      <p>
        Omformulerede beskeder, der forbliver forbundet med din profil, behandles som fortrolige bruger-
        data. Adalithic LLC sælger, licenserer eller deler ikke profil-tilknyttede omformulerede beskeder med
        eksterne virksomheder, annoncører, databroker eller uafhængige tredjeparter.
      </p>
      <p>
        Profil-tilknyttede omformulerede beskeder bruges internt af Adalithic LLC til at levere
        Arcatexts funktioner, vedligeholde appen, forbedre brugeroplevelsen og understøtte
        læringsrelateret funktionalitet.
      </p>
      <p className="font-medium">C. Tastaturindstillinger og sprogpræferencer</p>
      <p>Arcatext kan behandle appindstillinger og sprogpræferencer, såsom:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kildesprog</li>
        <li>Målsprog</li>
        <li>Tastatursprog</li>
        <li>Alfabet- eller skriftmuligheder, såsom standardskrift eller romaniseret tekst</li>
        <li>
          Talerens køn, modtagerens køn eller gruppechat-kønsindstillinger, når det er nødvendigt for
          oversættelsesnøjagtighed
        </li>
        <li>Tone-, formalitets- eller læringspræferencer</li>
        <li>Funktionspræferencer inde i appen</li>
      </ul>
      <p>
        Disse indstillinger bruges til at levere tastatur-, oversættelses-, omformulerings- og læringsoplevelsen.
        Nogle indstillinger kan gemmes lokalt på din enhed eller knyttes til din profil,
        hvis du opretter eller bruger en Arcatext-konto.
      </p>
      <p className="font-medium">D. Kontooplysninger</p>
      <p>
        Hvis Arcatext tilbyder kontobaserede funktioner, kan vi indsamle og gemme kontooplysninger
        såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>E-mailadresse</li>
        <li>Brugernavn</li>
        <li>Adgangskode eller godkendelsesoplysninger</li>
        <li>Abonnementsstatus</li>
        <li>Apppræferencer</li>
        <li>Profilindstillinger</li>
      </ul>
      <p>
        Adgangskoder, hvis de bruges, gemmes ikke i klartekst. Godkendelse kan også håndteres af
        tredjeparts identitetsudbydere, app-store-udbydere eller platformstjenester.
      </p>
      <p className="font-medium">E. Enheds- og platformsoplysninger</p>
      <p>
        Arcatext kan få adgang til enheds- og platformsoplysninger, der er nødvendige for at levere funktionalitet,
        initialisere indstillinger, forbedre ydeevnen og understøtte kompatibilitet på tværs af enheder og
        operativsystemer.
      </p>
      <p>Dette kan omfatte:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Enhedens sprogindstillinger</li>
        <li>Enhedstype</li>
        <li>Operativsystemversion</li>
        <li>Appversion</li>
        <li>Platformrelaterede konfigurationsoplysninger</li>
        <li>Oplysninger om tilladelsesstatus</li>
      </ul>
      <p>
        Disse oplysninger bruges til at konfigurere og understøtte appoplevelsen og er ikke beregnet
        til direkte at identificere dig.
      </p>
      <p className="font-medium">F. Grundlæggende tekniske og diagnostiske oplysninger</p>
      <p>
        Arcatext kan behandle begrænsede tekniske oplysninger, der er nødvendige for at drive, sikre, forbedre eller
        fejlfinde appen, såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Nedbrudslogfiler</li>
        <li>Ydelsesdata</li>
        <li>Fejlrapporter</li>
        <li>Grundlæggende brugshændelser</li>
        <li>Hvorvidt en funktion blev åbnet, fuldført eller mislykkedes</li>
      </ul>
      <p>Hvor det er muligt, indsamles disse oplysninger på en måde, der ikke direkte identificerer dig.</p>
      <p className="font-medium">G. Oplysninger vi ikke bevidst indsamler</p>
      <p>Arcatext indsamler ikke bevidst:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din præcise placering</li>
        <li>Dine kontakter</li>
        <li>Dine fotos</li>
        <li>Dine fulde betalingskortoplysninger</li>
        <li>Indholdet af alt, hvad du skriver uden for Arcatext-funktioner</li>
        <li>Adgangskoder skrevet i andre apps</li>
        <li>Sikkerhedskoder skrevet i andre apps</li>
      </ul>
      <p>
        Arcatext behandler tekst, som du vælger at indsende via Arcatext-funktioner. Arcatext bruger
        ikke tastaturtilladelser til hemmeligt at indsamle al tekst, du skriver.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Brugerdefinerede tastaturtilladelser og netværksadgang
      </h3>
      <p>
        Arcatext fungerer som et tredjepartstastatur og sprogværktøj. Nogle funktioner kan kræve
        yderligere tilladelser, internetforbindelse eller adgang på enhedsniveau afhængigt af din
        enhed, dit operativsystem eller din platform.
      </p>
      <p>For eksempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          På Apple-enheder skal brugere muligvis aktivere "Tillad fuld adgang" for visse tastatur- og
          onlinesprogfunktioner.
        </li>
        <li>
          På Android-enheder kan brugere blive bedt om at give tilladelser relateret til tastatur-
          funktionalitet, internetadgang, notifikationer eller appfunktioner.
        </li>
      </ul>
      <p>Disse tilladelser kan være nødvendige for funktioner såsom:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI-oversættelse</li>
        <li>Omformulering</li>
        <li>Omvendt oversættelse</li>
        <li>Sprogkontrol</li>
        <li>Ydelsesmålinger</li>
        <li>Læringsfunktioner</li>
        <li>Skybaseret sprogbehandling</li>
        <li>Kontosynkronisering</li>
      </ul>
      <p>
        Når disse tilladelser er aktiveret, kan Arcatext sende den tekst, du vælger at behandle, til
        vores tjenesteudbydere, så den ønskede funktion kan fungere.
      </p>
      <p>
        Arcatext bruger ikke tastaturtilladelser til hemmeligt at indsamle alt, hvad du skriver, spore
        urelateret skriveaktivitet eller overvåge oplysninger uden for Arcatext-funktioner.
      </p>
      <p>
        Du bør ikke bruge Arcatext til at skrive adgangskoder, betalingsoplysninger, sikkerhedskoder eller
        andre meget følsomme oplysninger. Nogle operativsystemer skifter muligvis automatisk til
        systemtastaturet for adgangskodefelter, men brugere bør stadig udvise forsigtighed ved indtastning af
        følsomme oplysninger.
      </p>
      <p>
        Du kan til enhver tid deaktivere tastaturtilladelser, internettilladelser eller relaterede adgangsindstillinger
        via dine enhedsindstillinger, selvom nogle Arcatext-funktioner kan holde op med at
        fungere korrekt.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Hvordan vi bruger oplysninger</h3>
      <p>
        Arcatext bruger oplysninger til formål relateret til at levere, personalisere, analysere,
        sikre og forbedre appen.
      </p>
      <p>Vi kan bruge oplysninger til at:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Oversætte tekst</li>
        <li>Omformulere beskeder</li>
        <li>Levere alternative formuleringer eller synonymer</li>
        <li>Tjekke betydningen af en oversættelse</li>
        <li>Forklare sprogvalg</li>
        <li>Understøtte forskellige skrifter eller romaniseringsmuligheder</li>
        <li>Anvende køns-, tone- eller formalitetsindstillinger</li>
        <li>Gemme omformulerede beskeder til brugervendte læringsfunktioner</li>
        <li>Levere ydelsesmålinger og fremskridtssporing</li>
        <li>Personalisere sprogindlæringsanbefalinger</li>
        <li>Forbedre appens pålidelighed og ydeevne</li>
        <li>Forbedre Arcatexts sprogsystemer og funktioner til store sprogmodeller</li>
        <li>Opdage fejl, nedbrud, misbrug eller sikkerhedsproblemer</li>
        <li>Opretholde appsikkerhed</li>
        <li>Besvare supportanmodninger</li>
        <li>Overholde juridiske forpligtelser</li>
      </ul>
      <p>Vi bruger ikke profil-tilknyttede omformulerede beskeder til at oprette annonceprofiler.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI-behandling og tredjeparts tjenesteudbydere
      </h3>
      <p>
        For at levere oversættelses- og sprogfunktioner kan Arcatext sende indsendt tekst og relaterede
        indstillinger til tredjeparts AI-modeludbydere og andre tjenesteudbydere.
      </p>
      <p>
        Disse udbydere behandler teksten for at returnere oversættelser, omformuleringer, forklaringer eller
        andre sprogoutput. Deres håndtering af data er underlagt deres egne privatlivspolitikker,
        vilkår og behandlingsfremgangsmåder.
      </p>
      <p>
        Fra denne politiks seneste opdatering angiver vores AI-modeludbydere, at data indsendt gennem
        deres API'er som standard ikke bruges til at træne eller forbedre deres modeller, medmindre kunden tilvælger
        det. Arcatext tilvælger ikke bevidst modeltræning for brugerindsendt oversættelses-
        indhold, medmindre denne politik opdateres til at angive andet.
      </p>
      <p>Arcatext kan også bruge tjenesteudbydere til:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Apphosting</li>
        <li>Databaselagring</li>
        <li>Analyse</li>
        <li>Nedbrudsrapportering</li>
        <li>Kundesupport</li>
        <li>Sikkerhedsovervågning</li>
        <li>Godkendelse</li>
        <li>Betalingsbehandling</li>
        <li>AI-behandling og sprogmodelfunktionalitet</li>
      </ul>
      <p>
        Disse udbydere må kun behandle oplysninger i det omfang, det er nødvendigt for at levere tjenester til
        Arcatext og Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Lagring af omformulerede beskeder</h3>
      <p>Arcatext kan gemme beskeder, som du omformulerer, så vi kan levere:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ydelsesmålinger</li>
        <li>Læringsfunktioner</li>
        <li>Brugerhistorik</li>
        <li>Fremskridtssporing</li>
        <li>Personaliserede sprogværktøjer</li>
      </ul>
      <p>
        Når omformulerede beskeder er knyttet til din profil, kan de være forbundet med oplysninger
        såsom din konto, e-mailadresse, brugernavn, apppræferencer eller brugshistorik. Denne
        forbindelse gør det muligt for Arcatext at levere personaliserede funktioner.
      </p>
      <p>
        Profil-tilknyttede omformulerede beskeder er fortrolige og sælges, licenseres eller deles ikke
        uden for Adalithic LLC, undtagen med tjenesteudbydere, der behandler dataene på vores vegne for at
        drive Arcatext.
      </p>
      <p>Eksempler på funktioner, der kan afhænge af gemte omformulerede beskeder, omfatter:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Sporing af din forbedring over tid</li>
        <li>Visning af sprogindlæringsstatistik</li>
        <li>Hjælp til at gennemgå tidligere omformulerede beskeder</li>
        <li>Identifikation af grammatik- eller ordforrådsmønstre</li>
        <li>Forbedring af personaliserede anbefalinger</li>
        <li>Understøttelse af fremtidige læringsværktøjer inde i Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Hvad vi frasorterer og aldrig gemmer eller logger
      </h3>
      <p>
        For at beskytte dig screener Arcatext automatisk tekst på din enhed, før nogen omformuleret
        post gemmes. Når den registrerer noget følsomt, kasserer den hele posten — den
        gemmer ikke en forkortet eller redigeret version, og intet knyttes til din profil.
      </p>
      <p>En omformuleret post gemmes IKKE, når:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Sikre eller følsomme felter</span> — du skriver i et
          adgangskode- eller sikkert-indtastningsfelt eller et felt beregnet til e-mail, telefonnumre, PIN-koder eller
          numeriske koder, URL'er eller søgning.
        </li>
        <li>
          <span className="font-medium">E-mailadresser</span> — teksten indeholder en e-mail-
          adresse.
        </li>
        <li>
          <span className="font-medium">Betalingskortnumre</span> — teksten indeholder en 13–16-
          cifret sekvens, der ligner et kredit- eller betalingskortnummer.
        </li>
        <li>
          <span className="font-medium">Verifikations- eller engangskoder</span> — teksten indeholder
          en selvstændig 4–8-cifret kode.
        </li>
        <li>
          <span className="font-medium">Konto- eller ID-numre</span> — teksten indeholder en lang
          ubrudt række af 9 eller flere cifre.
        </li>
        <li>
          <span className="font-medium">Adgangskoder, API-nøgler og andre hemmeligheder</span> — teksten
          indeholder et token med høj entropi, der ligner en adgangskode, nøgle eller anden tilfældig hemmelighed.
        </li>
      </ul>
      <p>Når der er tvivl, fejler Arcatext til fordel for ikke at gemme.</p>
      <p>
        <span className="font-medium">Serverlogfiler.</span> Vores servere logger aldrig indholdet af
        dine beskeder. Logfiler registrerer kun driftsmetadata — en kontoidentifikator, anmodnings-
        status, timing og et uigennemsigtigt anmodnings-ID — der bruges til at holde tjenesten pålidelig og til at
        diagnosticere problemer.
      </p>
      <p>
        <span className="font-medium">Din kontrol.</span> Du kan slå Omformulér-lagring
        helt fra til enhver tid i Arcatext-appen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonymiserede og afidentificerede sprogdata
      </h3>
      <p>
        Arcatext og Adalithic LLC kan bruge gemte beskeder og sproginteraktioner til at forbedre
        sprogsystemer, oversættelseskvalitet, omformuleringsfunktioner og ydeevnen af store sprogmodeller.
      </p>
      <p>
        Arcatext og Adalithic LLC kan også oprette anonymiserede, afidentificerede eller aggregerede
        sprogdatasæt afledt af brugerindsendte beskeder. Disse datasæt bruges internt
        af Adalithic LLC til at forbedre Arcatexts sprogfunktioner og kvalitet. Vi sælger, licenserer
        eller deler ikke disse datasæt med tredjeparter.
      </p>
      <p>
        Anonymiserede eller afidentificerede datasæt er ikke beregnet til at identificere dig personligt eller at være
        forbundet med en specifik brugerprofil. Ingen anonymiserings- eller afidentificerings-
        proces kan dog garantere, at reidentifikation er umulig under alle omstændigheder. Adalithic
        LLC bruger rimelige sikkerhedsforanstaltninger, der er designet til at reducere denne risiko.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Dataopbevaring, kontosletning og din ret til sletning
      </h3>
      <p>
        Vi opbevarer kun oplysninger, så længe det er rimeligt nødvendigt til de formål, der er beskrevet
        i denne privatlivspolitik, medmindre en længere opbevaringsperiode er påkrævet ved lov.
      </p>
      <p>Generelt:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Omformulerede beskeder knyttet til din profil kan opbevares, mens din konto er aktiv eller
          efter behov for at levere funktioner og målinger.
        </li>
        <li>Apppræferencer kan gemmes lokalt på din enhed eller knyttes til din profil.</li>
        <li>
          Tekniske logfiler kan midlertidigt opbevares til fejlfinding, pålidelighed, misbrugsforebyggelse
          eller sikkerhedsformål.
        </li>
        <li>
          Supportbeskeder kan opbevares efter behov for at besvare brugere og vedligeholde support-
          registreringer.
        </li>
        <li>
          Anonymiserede, afidentificerede eller aggregerede datasæt kan opbevares i længere perioder,
          fordi de ikke er beregnet til at identificere en specifik bruger.
        </li>
        <li>
          Anonyme logfiler af omformulerede beskeder kan opbevares, efter at din konto er slettet, som
          beskrevet nedenfor.
        </li>
      </ul>
      <p>
        Du kan til enhver tid slette din Arcatext-konto inde fra appen. Når du sletter din
        konto, fjerner vi din profil og dine kontooplysninger, herunder din e-mailadresse,
        dit brugernavn og dine godkendelsesoplysninger.
      </p>
      <p>
        Arcatext vedligeholder anonyme logfiler af omformulerede beskeder, selv efter at en konto er slettet.
        Dette gør det muligt for brugere at drage fordel af deres beskedhistorik, hvis de opretter en konto igen
        med den samme identifikator (dvs. en e-mailadresse). Dette hjælper også Arcatext med fortsat at
        træne sine egne interne AI-modeller på anonyme omformulerede beskeddata.
      </p>
      <p>
        For at holde disse opbevarede logfiler anonyme erstattes din e-mailadresse på tidspunktet for
        sletning med en envejs, uigenkaldelig identifikator. De opbevarede omformulerede beskeder er ikke
        gemt med din e-mailadresse og kan ikke læses eller knyttes tilbage til dig af Arcatext-
        personale. Hvis du senere opretter en ny konto med den samme e-mailadresse, kan disse beskeder
        muligvis blive genforbundet med din nye konto.
      </p>
      <p>
        <span className="font-medium">Anmodning om fuldstændig sletning.</span> Hvis du foretrækker, at dine
        opbevarede omformulerede beskeddata slettes permanent og fuldstændigt frem for at blive opbevaret
        i anonym form, kan du kontakte os på arcatextapp@gmail.com med emnelinjen "Data
        Erasure Request." Inkluder e-mailadressen på den konto, hvis data du ønsker at slette.
        Denne anmodningsmail skal sendes fra den samme e-mail, der er tilknyttet den pågældende
        konto. Anmodninger om datasletning kan kun foretages for konti, der allerede er blevet
        slettet. Vi vil slette de tilknyttede opbevarede data i overensstemmelse med gældende lov.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Følsomme oplysninger</h3>
      <p>
        Arcatext er et sprogværktøj, ikke et sikkert boks. Du bør ikke indsende meget følsomme
        oplysninger til oversættelse, omformulering, kontrol eller læringsfunktioner.
      </p>
      <p>Undgå at indtaste:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Adgangskoder</li>
        <li>Kreditkortnumre</li>
        <li>Bankoplysninger</li>
        <li>CPR-numre eller offentlige ID'er</li>
        <li>Journaloplysninger</li>
        <li>Juridiske hemmeligheder</li>
        <li>Private adresser</li>
        <li>Fortrolige forretningsoplysninger</li>
        <li>
          Meget følsomme personlige beskeder, som du ikke ønsker behandlet eller gemt til
          sprogrelaterede formål
        </li>
      </ul>
      <p>
        Hvis du vælger at indsende følsomme oplysninger, forstår du, at de kan blive behandlet af
        Arcatext og dets tjenesteudbydere for at levere den ønskede funktion.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Børns privatliv</h3>
      <p>Arcatext er ikke beregnet til børn under 13 år.</p>
      <p>
        Hvis du er under 13 år, må du ikke bruge Arcatext, medmindre din forælder, værge, skole eller
        autoriserede uddannelsesinstitution har godkendt din brug på en måde, der er tilladt i henhold til gældende
        lov.
      </p>
      <p>
        Hvis Adalithic LLC bliver opmærksom på, at personlige oplysninger fra et barn under 13 år er blevet
        indsamlet i strid med gældende lov, kan vi tage skridt, der er designet til at begrænse eller slette
        disse oplysninger, hvor det er relevant.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Internationale dataoverførsler</h3>
      <p>
        Arcatext og dets tjenesteudbydere kan behandle oplysninger i USA eller andre
        lande. Disse lande kan have privatlivslove, der adskiller sig fra lovene i din
        placering.
      </p>
      <p>
        Ved at bruge Arcatext forstår du, at dine oplysninger kan blive behandlet i lande
        uden for dit bopælssted. Yderligere oplysninger om overførsler, herunder de
        sikkerhedsforanstaltninger vi bruger, findes i afsnittet Regionsspecifikke privatlivsrettigheder nedenfor.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Dine valgmuligheder</h3>
      <p>Du har flere valgmuligheder vedrørende dine oplysninger.</p>
      <p className="font-medium">Tastaturtilladelser og adgangsindstillinger</p>
      <p>
        Du kan deaktivere tastaturtilladelser, internettilladelser eller relaterede adgangsindstillinger
        via dine enheds- eller operativsystemindstillinger. Nogle Arcatext-funktioner, der er afhængige af
        onlinebehandling eller tastaturintegration, fungerer muligvis ikke længere korrekt.
      </p>
      <p className="font-medium">Stop med at bruge tastaturet</p>
      <p>Du kan til enhver tid fjerne Arcatext fra din tastaturliste eller afinstallere appen.</p>
      <p className="font-medium">Begræns hvad du indsender</p>
      <p>
        Du kan vælge ikke at indsende følsom eller personlig tekst til oversættelse, omformulering,
        kontrol eller læringsfunktioner.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Privatlivsanmodninger</h3>
      <p>
        Hvis du har spørgsmål om dine oplysninger eller denne privatlivspolitik, kan du kontakte
        Adalithic LLC på:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC kan gennemgå og besvare anmodninger i overensstemmelse med gældende lov og
        virksomhedens operationelle kapaciteter.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Californisk privatlivsmeddelelse</h3>
      <p>
        Hvis du er bosiddende i Californien, giver dette afsnit yderligere oplysninger.
      </p>
      <p>Arcatext kan behandle følgende kategorier af oplysninger:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Brugerindsendt indhold</span> — Tekst indsendt til
          oversættelse, omformulering, kontrol eller analyse. Formål: at levere sprogfunktioner.
        </li>
        <li>
          <span className="font-medium">Gemte omformulerede beskeder</span> — Beskeder du omformulerer, der
          kan være knyttet til din profil. Formål: at levere målinger, historik og lærings-
          funktioner.
        </li>
        <li>
          <span className="font-medium">Kontooplysninger</span> — E-mailadresse, brugernavn,
          godkendelsesoplysninger. Formål: at levere kontobaserede funktioner.
        </li>
        <li>
          <span className="font-medium">Præferencer</span> — Sprog, skrift, tone, køn og
          tastaturindstillinger. Formål: at tilpasse appen.
        </li>
        <li>
          <span className="font-medium">Tekniske oplysninger</span> — Appversion, nedbrudslogfiler,
          enhedstype, operativsystem. Formål: at vedligeholde og forbedre appen.
        </li>
        <li>
          <span className="font-medium">Supportoplysninger</span> — E-mails eller beskeder du sender
          os. Formål: at besvare supportanmodninger.
        </li>
        <li>
          <span className="font-medium">Afidentificerede sprogdata</span> — Anonymiserede eller
          aggregerede sprogeksempler afledt af brugerindsendelser. Formål: at forbedre sprog-
          systemer.
        </li>
      </ul>
      <p>Adalithic LLC sælger eller deler ikke dine personlige oplysninger.</p>
      <p>Hvis du har spørgsmål om dine privatlivsrettigheder, kan du kontakte arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Sikkerhed</h3>
      <p>
        Vi bruger rimelige tekniske og organisatoriske foranstaltninger til at beskytte oplysninger, der behandles
        via Arcatext.
      </p>
      <p>
        Profil-tilknyttede omformulerede beskeder behandles som fortrolige brugerdata. Vi tager skridt,
        der er designet til at begrænse adgangen til disse oplysninger til autoriseret personale og tjeneste-
        udbydere, der har brug for adgang til at drive, sikre, forbedre eller understøtte Arcatext.
      </p>
      <p>
        Ingen metode til elektronisk lagring eller internettransmission er dog fuldstændig sikker. Vi
        kan ikke garantere absolut sikkerhed.
      </p>
      <p>Du er ansvarlig for at beslutte, hvilke oplysninger du indsender via Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Datadeling</h3>
      <p>Arcatext og Adalithic LLC kan dele oplysninger under begrænsede omstændigheder:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Med AI-udbydere for at levere oversættelse, omformulering, kontrol og sprogfunktioner</li>
        <li>Med tjenesteudbydere, der hjælper med at drive, sikre, gemme, analysere eller forbedre appen</li>
        <li>Med analyse- eller nedbrudsrapporteringsudbydere</li>
        <li>Med betalingsbehandlere eller app-store-udbydere</li>
        <li>Hvis det kræves ved lov eller retlig proces</li>
        <li>For at beskytte rettigheder, sikkerhed eller sikkerhed for Arcatext, brugere, Adalithic LLC eller andre</li>
        <li>I forbindelse med fusioner, opkøb, finansiering eller aktivsalg</li>
      </ul>
      <p>Vi sælger ikke dine data.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. App Store, fakturering og betalingsoplysninger
      </h3>
      <p>
        Hvis Arcatext tilbyder betalte funktioner, abonnementer eller køb i appen, kan betalingsbehandling
        håndteres af tredjeparts platformsudbydere såsom Apple, Google eller andre
        autoriserede betalingsbehandlere.
      </p>
      <p>For eksempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Køb på Apple-platforme kan blive behandlet gennem Apples App Store og StoreKit-systemer.</li>
        <li>Køb på Android-platforme kan blive behandlet gennem Google Play Billing og Googles betalingssystemer.</li>
      </ul>
      <p>
        Arcatext og Adalithic LLC modtager eller gemmer ikke direkte fulde betalingskortoplysninger,
        der bruges gennem disse platformsfaktureringssystemer.
      </p>
      <p>
        Din brug af tredjeparts app stores, faktureringssystemer og betalingsudbydere kan også være
        underlagt disse udbyderes egne privatlivspolitikker, vilkår og betalingsregler.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Ændringer af denne privatlivspolitik</h3>
      <p>
        Vi kan opdatere denne privatlivspolitik fra tid til anden for at afspejle ændringer i vores app,
        teknologi, tjenesteudbydere, juridiske forpligtelser eller forretningspraksis.
      </p>
      <p>Når vi opdaterer politikken, vil vi revidere datoen for "Sidst opdateret" øverst.</p>
      <p>
        Hvis ændringerne er væsentlige, kan vi give yderligere meddelelse via appen, hjemmesiden eller
        andre passende metoder.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Kontakt os</h3>
      <p>Hvis du har spørgsmål, bekymringer eller privatlivsanmodninger, kan du kontakte:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext Privatlivskontakt
        <br />
        E-mail: arcatextapp@gmail.com
        <br />
        Supportside: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Regionsspecifikke privatlivsrettigheder</h3>
      <p>
        Hvis der er nogen konflikt mellem denne privatlivspolitik og brugsvilkårene i privatlivsrelaterede
        anliggender, har denne privatlivspolitik forrang.
      </p>
      <p className="font-medium">Dine rettigheder (global oversigt)</p>
      <p>
        Afhængigt af hvor du bor, kan du have rettigheder vedrørende dine personlige oplysninger,
        herunder retten til at få adgang til, rette, slette eller begrænse behandlingen af dine data,
        retten til dataportabilitet, retten til at gøre indsigelse mod visse behandlinger og retten til at
        trække samtykke tilbage, hvor behandlingen er baseret på samtykke. Detaljerede rettigheder og hvordan du udøver
        dem er beskrevet i de regionsspecifikke afsnit nedenfor. Du kan også kontakte os på
        arcatextapp@gmail.com for at fremsætte en anmodning, og vi vil svare i overensstemmelse med gældende
        lov.
      </p>

      <p className="font-medium">
        Tillæg A — Det Europæiske Økonomiske Samarbejdsområde (EØS), Den Europæiske Union og EFTA-lande
      </p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i: Østrig, Belgien, Bulgarien, Kroatien, Cypern,
        Tjekkiet, Danmark, Estland, Finland, Frankrig, Tyskland, Grækenland, Ungarn, Irland, Italien,
        Letland, Litauen, Luxembourg, Malta, Holland, Polen, Portugal, Rumænien, Slovakiet,
        Slovenien, Spanien, Sverige, Island og Norge.
      </p>
      <p className="font-medium">Retsgrundlag for behandling</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Opfyldelse af en kontrakt</span> — behandling nødvendig for at
          levere de centrale tastatur-, oversættelses-, omformulerings- og sprogfunktioner, du anmoder om.
        </li>
        <li>
          <span className="font-medium">Legitime interesser</span> — sikkerhed, misbrugsforebyggelse,
          serviceforbedring og udvikling af sprogsystemer. Vi har gennemført en afvejningstest
          og konkluderet, at disse interesser i de fleste tilfælde ikke tilsidesættes af dine rettigheder og friheder.
        </li>
        <li>
          <span className="font-medium">Samtykke</span> — valgfrie funktioner såsom lagring af omformulerede
          beskeder til læring og fremskridtssporing. Du kan til enhver tid trække samtykke tilbage ved at
          slå funktionen fra i appen.
        </li>
      </ul>
      <p className="font-medium">Dine rettigheder</p>
      <p>
        Med forbehold for gældende undtagelser har du ret til at få adgang til dine personlige data; opnå
        berigtigelse af unøjagtige data; opnå sletning af dine data ("retten til at blive glemt");
        opnå begrænsning af behandling; modtage dine data i et bærbart format; gøre indsigelse mod
        behandling baseret på legitime interesser; og trække samtykke tilbage, hvor behandlingen er baseret på
        samtykke. Du kan udøve disse rettigheder ved at kontakte os på arcatextapp@gmail.com. Vi vil
        svare inden for de tidsrammer, der kræves ved lov (generelt én måned, som kan forlænges i komplekse
        tilfælde).
      </p>
      <p className="font-medium">Ret til at klage</p>
      <p>
        Du har ret til at indgive en klage til din lokale tilsynsmyndighed (databeskyttelses-
        myndighed), hvis du mener, at dine rettigheder er blevet krænket.
      </p>
      <p className="font-medium">Repræsentant</p>
      <p>
        Adalithic LLC har udpeget en repræsentant i Den Europæiske Union i henhold til artikel 27 i
        GDPR. Vores repræsentant er Prighter Group. Du kan kontakte vores repræsentant eller udøve
        dine registreredes rettigheder gennem dem ved at bruge følgende sikre portal:{" "}
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
      <p className="font-medium">Internationale dataoverførsler</p>
      <p>
        Dine oplysninger kan blive overført til USA og andre lande uden for
        EØS/EFTA. Vi baserer os på standardkontraktbestemmelser (SCC'er) godkendt af Europa-Kommissionen
        som den primære overførselsmekanisme sammen med passende supplerende foranstaltninger (såsom
        kryptering og adgangskontrol), hvor det er påkrævet.
      </p>
      <p className="font-medium">Opbevaring og automatiseret behandling</p>
      <p>
        Opbevaringsperioder er beskrevet i afsnit 9. Automatiseret behandling og forbedring af
        sprogmodeller på brugerindsendt tekst er baseret på legitime interesser eller samtykke (hvor
        det er relevant) og er underlagt de sikkerhedsforanstaltninger, der er beskrevet i denne politik.
      </p>

      <p className="font-medium">Tillæg B — Storbritannien</p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i Storbritannien. Bestemmelserne i tillæg A
        gælder med følgende tilpasninger:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Henvisninger til GDPR erstattes med UK GDPR.</li>
        <li>Tilsynsmyndigheden er Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC har udpeget en repræsentant i Storbritannien i henhold til artikel 27 i
          UK GDPR. Vores britiske repræsentant er Prighter Group, som kan kontaktes gennem den samme sikre
          portal:{" "}
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

      <p className="font-medium">Tillæg C — Schweiz</p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i Schweiz. Du har rettigheder i henhold til den reviderede
        føderale databeskyttelseslov (nFADP), herunder ret til adgang, berigtigelse og
        sletning. Du kan udøve disse rettigheder ved at kontakte os på arcatextapp@gmail.com. Adalithic
        LLC har udpeget en repræsentant i Schweiz i henhold til den reviderede føderale databeskyttelses-
        lov. Vores schweiziske repræsentant er Prighter Group, som kan kontaktes gennem den samme sikre
        portal:{" "}
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

      <p className="font-medium">Tillæg D — Canada, herunder Québec</p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i Canada, herunder Québec. Du har rettigheder i henhold til
        PIPEDA og Québecs Law 25 til at få adgang til og rette dine personlige oplysninger og til at trække
        samtykke til visse behandlinger tilbage. Du kan udøve disse rettigheder ved at kontakte os på
        arcatextapp@gmail.com. En fransksproget version af denne privatlivspolitik leveres til
        beboere i Québec. I tilfælde af et databrud, der udgør en reel risiko for betydelig skade,
        vil vi underrette berørte personer og de relevante myndigheder som krævet af gældende
        lov.
      </p>

      <p className="font-medium">Tillæg E — USA</p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i USA. Beboere i Californien har de
        rettigheder, der er beskrevet i den californiske privatlivsmeddelelse i afsnit 15 ovenfor, herunder retten
        til at få kendskab til, slette og rette personlige oplysninger og til at fravælge ethvert salg eller enhver deling.
        Adalithic LLC sælger eller deler ikke dine personlige oplysninger til adfærdsbaseret annoncering på tværs af kontekster,
        og du vil ikke blive diskrimineret for at udøve dine rettigheder. Andre amerikanske
        delstaters privatlivslove kan gælde afhængigt af din bopælsstat, og vi vil respektere
        gældende rettigheder, hvor det kræves. For at udøve disse rettigheder kan du kontakte os på
        arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Tillæg F — Andre lande og regioner</p>
      <p>
        Dette tillæg gælder for forbrugere bosiddende i alle andre lande og regioner, hvor Arcatext
        udbydes (undtagen sanktionerede eller embargobelagte jurisdiktioner). Hvor lokal lov giver dig
        yderligere uophævelige privatlivsrettigheder (for eksempel i henhold til love såsom Brasiliens LGPD eller
        privatlivslove i Japan, Sydkorea, Australien, Indien og andre jurisdiktioner), gælder disse rettigheder.
        Du kan kontakte os på arcatextapp@gmail.com for at udøve sådanne rettigheder, og vi vil
        svare i overensstemmelse med gældende lokal lov.
      </p>
    </div>
  );
}
