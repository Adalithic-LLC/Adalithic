// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacySv() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Drivs av Adalithic LLC</p>
      <p>Senast uppdaterad: September 3, 2026</p>
      <p>
        Arcatext är ett anpassat tangentbord och en språkapplikation som är utformad för att hjälpa
        användare att skriva, översätta, omformulera och bättre förstå meddelanden på olika språk.
        Denna integritetspolicy förklarar vilken information Arcatext behandlar, hur informationen
        används, när den lagras, när den kan delas och vilka val du har.
      </p>
      <p>Genom att använda Arcatext godkänner du de metoder som beskrivs i denna integritetspolicy.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Vilka vi är</h3>
      <p>Arcatext drivs av Adalithic LLC.</p>
      <p>För integritetsfrågor, kontakta oss på:</p>
      <p>
        E-post: arcatextapp@gmail.com
        <br />
        Supportsida: https://adalithic.com/
      </p>
      <p>Om dessa kontaktuppgifter ändras kommer vi att uppdatera denna integritetspolicy.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Information vi behandlar</h3>
      <p>
        Arcatext är utformat för att endast behandla den information som behövs för att
        tillhandahålla, förbättra, anpassa och stödja appens språkfunktioner.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Enkelt uttryckt</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext säljer inte dina uppgifter till någon.</li>
          <li>Vi spårar endast meddelanden som Omformuleras (du måste trycka på Omformulera-knappen, så om du skriver med tangentbordet utan att trycka på Omformulera spåras eller lagras inga meddelanden).</li>
          <li>Vi använder data för att bättre förstå din språkfärdighet och för att leverera inlärningsfunktioner. Vi är inte personligen intresserade av vad du skriver, utan vill bara hjälpa till att påskynda din språkinlärning!</li>
          <li>Vi filtrerar bort viss Omformulerad text och lagrar den inte (till exempel lösenord, kortnummer och koder — se den fullständiga listan i avsnitt 7).</li>
          <li>Du kan stänga av eller sätta på Omformulera-spårning när som helst (i huvudappen Arcatext). Vi har som standard läget 'på' så att vi kan leverera inlärningsfunktioner.</li>
        </ol>
      </div>
      <p className="font-medium">A. Text du väljer att översätta, omformulera, kontrollera eller analysera</p>
      <p>
        När du använder Arcatext-funktioner såsom översättning, Omformulering, omvänd översättning,
        synonymförslag, grammatikhjälp, betydelseförtydligande eller inlärningsfeedback kan den
        text du skickar in behandlas av Arcatext och skickas till tredjeparts AI-tjänsteleverantörer
        så att den begärda funktionen kan fungera.
      </p>
      <p>Detta kan omfatta:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Meddelanden du skriver in på Arcatext-tangentbordet</li>
        <li>Meddelanden du väljer att Omformulera</li>
        <li>Text du väljer för översättning eller omformulering</li>
        <li>Text du ber Arcatext att kontrollera, förklara eller omvandla</li>
        <li>
          Kontext som behövs för att förbättra kvaliteten på översättning eller Omformulering, såsom
          valt språk, skrift, ton, formalitet eller könsinställningar
        </li>
      </ul>
      <p className="font-medium">B. Omformulerade meddelanden kopplade till din profil</p>
      <p>Arcatext kan lagra meddelanden som du Omformulerar för att tillhandahålla:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prestationsmått</li>
        <li>Framstegsspårning</li>
        <li>Personanpassade inlärningsfunktioner</li>
        <li>Skrivhistorik</li>
        <li>Insikter om språkinlärning</li>
        <li>Andra Arcatext-funktioner</li>
      </ul>
      <p>
        Dessa Omformulerade meddelanden kan kopplas till din Arcatext-profil så att appen kan visa
        dig information såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din Omformuleringshistorik</li>
        <li>Dina inlärningsframsteg</li>
        <li>Dina mönster för språkövning</li>
        <li>Dina mest använda språk eller funktioner</li>
        <li>Prestationsmått relaterade till din användning av Arcatext</li>
        <li>Personanpassade rekommendationer eller inlärningsverktyg</li>
      </ul>
      <p>
        Omformulerade meddelanden som förblir kopplade till din profil behandlas som konfidentiell
        användardata. Adalithic LLC säljer, licensierar eller delar inte profilkopplade Omformulerade
        meddelanden med utomstående företag, annonsörer, datamäklare eller orelaterade tredje parter.
      </p>
      <p>
        Profilkopplade Omformulerade meddelanden används internt av Adalithic LLC för att
        tillhandahålla Arcatexts funktioner, underhålla appen, förbättra användarupplevelsen och
        stödja inlärningsrelaterad funktionalitet.
      </p>
      <p className="font-medium">C. Tangentbordsinställningar och språkpreferenser</p>
      <p>Arcatext kan behandla appinställningar och språkpreferenser, såsom:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Källspråk</li>
        <li>Målspråk</li>
        <li>Tangentbordsspråk</li>
        <li>Alfabets- eller skriftalternativ, såsom standardskrift eller romaniserad text</li>
        <li>
          Talarens kön, mottagarens kön eller könsinställningar för gruppchatt när det behövs för
          översättningsnoggrannhet
        </li>
        <li>Ton, formalitet eller inlärningspreferenser</li>
        <li>Funktionspreferenser inne i appen</li>
      </ul>
      <p>
        Dessa inställningar används för att tillhandahålla tangentbords-, översättnings-,
        Omformulerings- och inlärningsupplevelsen. Vissa inställningar kan lagras lokalt på din enhet
        eller kopplas till din profil om du skapar eller använder ett Arcatext-konto.
      </p>
      <p className="font-medium">D. Kontoinformation</p>
      <p>
        Om Arcatext erbjuder kontobaserade funktioner kan vi samla in och lagra kontoinformation
        såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>E-postadress</li>
        <li>Användarnamn</li>
        <li>Lösenord eller autentiseringsuppgifter</li>
        <li>Prenumerationsstatus</li>
        <li>Appinställningar</li>
        <li>Profilinställningar</li>
      </ul>
      <p>
        Lösenord, om de används, lagras inte i klartext. Autentisering kan också hanteras av
        tredjeparts identitetsleverantörer, appbutiksleverantörer eller plattformstjänster.
      </p>
      <p className="font-medium">E. Enhets- och plattformsinformation</p>
      <p>
        Arcatext kan komma åt enhets- och plattformsinformation som behövs för att tillhandahålla
        funktionalitet, initiera inställningar, förbättra prestanda och stödja kompatibilitet mellan
        enheter och operativsystem.
      </p>
      <p>Detta kan omfatta:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Enhetens språkinställningar</li>
        <li>Enhetstyp</li>
        <li>Operativsystemets version</li>
        <li>Appversion</li>
        <li>Plattformsrelaterad konfigurationsinformation</li>
        <li>Information om behörighetsstatus</li>
      </ul>
      <p>
        Denna information används för att konfigurera och stödja appupplevelsen och är inte avsedd
        att direkt identifiera dig.
      </p>
      <p className="font-medium">F. Grundläggande teknisk information och diagnostikinformation</p>
      <p>
        Arcatext kan behandla begränsad teknisk information som behövs för att driva, säkra,
        förbättra eller felsöka appen, såsom:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kraschloggar</li>
        <li>Prestandadata</li>
        <li>Felrapporter</li>
        <li>Grundläggande användningshändelser</li>
        <li>Huruvida en funktion öppnades, slutfördes eller misslyckades</li>
      </ul>
      <p>Där det är möjligt samlas denna information in på ett sätt som inte direkt identifierar dig.</p>
      <p className="font-medium">G. Anonym diagnostik om skriv- och Glide-kvalitet</p>
      <p>
        För att mäta och förbättra autokorrigering och Glide-skrivning (svepning) samlar Arcatext in anonym, aggregerad diagnostik om hur väl dessa funktioner fungerar. Informationen är kopplad till en slumpmässig identifierare per installation som inte är kopplad till ditt konto, ditt namn, din e-postadress eller din enhetsidentitet.
      </p>
      <p>För autokorrigering omfattar detta:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hur ofta automatiska korrigeringar behålls eller ångras</li>
        <li>Aggregerade räkningar av vilken bokstav som ändrades till vilken annan bokstav</li>
        <li>Antalet tangenttryckningar</li>
        <li>Anonyma mätningar av träffsäkerhet (hur nära tangentens mitt tryckningarna hamnar)</li>
        <li>Appens nuvarande korrigeringsinställningar</li>
      </ul>
      <p>För Glide-skrivning omfattar detta:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hur många svepningar som gav ett ord</li>
        <li>Hur ofta du valde ett annat förslag eller raderade resultatet</li>
        <li>Hur långt ner i förslagslistan det avsedda ordet fanns</li>
        <li>Anonyma mätningar av svepningens geometri, såsom typisk hastighet, jämnhet och hur långt från tangenternas mitt svepningarna passerar</li>
        <li>Appens nuvarande Glide-inställningar</li>
      </ul>
      <p>Båda innehåller även din appversion, din operativsystemversion och det aktiva tangentbordsspråket.</p>
      <p>Ingen av dem innehåller någonsin de ord, bokstäver eller meddelanden du skriver. Inget skrivet innehåll samlas in. Aggregerade räkningar av bokstavsändringar och svepgeometri kan inte användas för att rekonstruera något du har skrivit. Informationen används enbart för att mäta och förbättra skrivkvaliteten. Den säljs inte, delas inte för annonsering och används inte för att spåra dig i andra företags appar eller webbplatser.</p>
      <p>Du kan stänga av detta när som helst i huvudappen Arcatext, under inställningarna för lagring av Reword-data. Det är påslaget som standard, och den enda inställningen omfattar både autokorrigeringens och Glides diagnostik.</p>
      <p className="font-medium">H. Information vi inte avsiktligt samlar in</p>
      <p>Arcatext samlar inte avsiktligt in:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Din exakta plats</li>
        <li>Dina kontakter</li>
        <li>Dina foton</li>
        <li>Din fullständiga betalkortsinformation</li>
        <li>Innehållet i allt du skriver utanför Arcatext-funktioner</li>
        <li>Lösenord som skrivs in i andra appar</li>
        <li>Säkerhetskoder som skrivs in i andra appar</li>
      </ul>
      <p>
        Arcatext behandlar text som du väljer att skicka in via Arcatext-funktioner. Arcatext
        använder inte tangentbordsbehörigheter för att i hemlighet samla in all text du skriver.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Behörigheter för anpassat tangentbord och nätverksåtkomst
      </h3>
      <p>
        Arcatext fungerar som ett tredjepartstangentbord och språkverktyg. Vissa funktioner kan kräva
        ytterligare behörigheter, internetanslutning eller åtkomst på enhetsnivå beroende på din
        enhet, ditt operativsystem eller din plattform.
      </p>
      <p>Till exempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          På Apple-enheter kan användare behöva aktivera "Tillåt fullständig åtkomst" för vissa
          tangentbords- och onlinespråkfunktioner.
        </li>
        <li>
          På Android-enheter kan användare bli ombedda att bevilja behörigheter relaterade till
          tangentbordsfunktionalitet, internetåtkomst, aviseringar eller appfunktioner.
        </li>
      </ul>
      <p>Dessa behörigheter kan vara nödvändiga för funktioner såsom:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI-översättning</li>
        <li>Omformulering</li>
        <li>Omvänd översättning</li>
        <li>Språkkontroll</li>
        <li>Prestationsmått</li>
        <li>Inlärningsfunktioner</li>
        <li>Molnbaserad språkbehandling</li>
        <li>Kontosynkronisering</li>
      </ul>
      <p>
        När dessa behörigheter är aktiverade kan Arcatext skicka den text du väljer att behandla till
        våra tjänsteleverantörer så att den begärda funktionen kan fungera.
      </p>
      <p>
        Arcatext använder inte tangentbordsbehörigheter för att i hemlighet samla in allt du skriver,
        spåra orelaterad skrivaktivitet eller övervaka information utanför Arcatext-funktioner.
      </p>
      <p>
        Du bör inte använda Arcatext för att skriva lösenord, betalningsinformation, säkerhetskoder
        eller annan mycket känslig information. Vissa operativsystem kan automatiskt växla till
        systemtangentbordet för lösenordsfält, men användare bör ändå vara försiktiga när de anger
        känslig information.
      </p>
      <p>
        Du kan inaktivera tangentbordsbehörigheter, internetbehörigheter eller relaterade
        åtkomstinställningar när som helst via dina enhetsinställningar, även om vissa
        Arcatext-funktioner då kan sluta fungera korrekt.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Hur vi använder information</h3>
      <p>
        Arcatext använder information för ändamål relaterade till att tillhandahålla, anpassa,
        analysera, säkra och förbättra appen.
      </p>
      <p>Vi kan använda information för att:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Översätta text</li>
        <li>Omformulera meddelanden</li>
        <li>Tillhandahålla alternativa formuleringar eller synonymer</li>
        <li>Kontrollera betydelsen av en översättning</li>
        <li>Förklara språkval</li>
        <li>Stödja olika skrifter eller romaniseringsalternativ</li>
        <li>Tillämpa inställningar för kön, ton eller formalitet</li>
        <li>Lagra Omformulerade meddelanden för användarvända inlärningsfunktioner</li>
        <li>Tillhandahålla prestationsmått och framstegsspårning</li>
        <li>Personanpassa rekommendationer för språkinlärning</li>
        <li>Förbättra appens tillförlitlighet och prestanda</li>
        <li>Förbättra Arcatexts språksystem och funktioner för stora språkmodeller</li>
        <li>Upptäcka buggar, krascher, missbruk eller säkerhetsproblem</li>
        <li>Upprätthålla appens säkerhet</li>
        <li>Svara på supportförfrågningar</li>
        <li>Uppfylla rättsliga skyldigheter</li>
      </ul>
      <p>Vi använder inte profilkopplade Omformulerade meddelanden för att skapa annonsprofiler.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI-behandling och tredjeparts tjänsteleverantörer
      </h3>
      <p>
        För att tillhandahålla översättnings- och språkfunktioner kan Arcatext skicka inskickad text
        och relaterade inställningar till tredjeparts AI-modellleverantörer och andra
        tjänsteleverantörer.
      </p>
      <p>
        Dessa leverantörer behandlar texten för att returnera översättningar, Omformuleringar,
        förklaringar eller andra språkutdata. Deras hantering av data styrs av deras egna
        integritetspolicyer, villkor och behandlingsmetoder.
      </p>
      <p>
        I skrivande stund, vid denna policys senaste uppdatering, uppger våra AI-modellleverantörer
        att data som skickas in via deras API:er inte används för att träna eller förbättra deras
        modeller som standard, om inte kunden väljer att delta. Arcatext väljer inte avsiktligt att
        delta i modellträning för användarinskickat översättningsinnehåll, om inte denna policy
        uppdateras för att ange något annat.
      </p>
      <p>Arcatext kan också använda tjänsteleverantörer för:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Apphosting</li>
        <li>Databaslagring</li>
        <li>Analys</li>
        <li>Kraschrapportering</li>
        <li>Kundsupport</li>
        <li>Säkerhetsövervakning</li>
        <li>Autentisering</li>
        <li>Betalningshantering</li>
        <li>AI-behandling och språkmodellsfunktionalitet</li>
      </ul>
      <p>
        Dessa leverantörer får endast behandla information i den utsträckning som behövs för att
        tillhandahålla tjänster till Arcatext och Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Lagring av Omformulerade meddelanden</h3>
      <p>Arcatext kan lagra meddelanden som du Omformulerar så att vi kan tillhandahålla:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prestationsmått</li>
        <li>Inlärningsfunktioner</li>
        <li>Användarhistorik</li>
        <li>Framstegsspårning</li>
        <li>Personanpassade språkverktyg</li>
      </ul>
      <p>
        När Omformulerade meddelanden är kopplade till din profil kan de associeras med information
        såsom ditt konto, din e-postadress, ditt användarnamn, dina appinställningar eller din
        användningshistorik. Denna koppling gör att Arcatext kan tillhandahålla personanpassade
        funktioner.
      </p>
      <p>
        Profilkopplade Omformulerade meddelanden är konfidentiella och säljs, licensieras eller delas
        inte utanför Adalithic LLC, förutom med tjänsteleverantörer som behandlar data för vår
        räkning för att driva Arcatext.
      </p>
      <p>Exempel på funktioner som kan förlita sig på lagrade Omformulerade meddelanden inkluderar:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Spåra din förbättring över tid</li>
        <li>Visa statistik för språkinlärning</li>
        <li>Hjälpa dig att granska tidigare Omformulerade meddelanden</li>
        <li>Identifiera mönster i grammatik eller ordförråd</li>
        <li>Förbättra personanpassade rekommendationer</li>
        <li>Stödja framtida inlärningsverktyg inne i Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Vad vi filtrerar bort och aldrig lagrar eller loggar
      </h3>
      <p>
        För att skydda dig granskar Arcatext automatiskt text på din enhet innan någon Omformulerad
        post lagras. När det upptäcker något känsligt kasseras hela posten — det lagrar inte en
        förkortad eller redigerad version, och ingenting kopplas till din profil.
      </p>
      <p>En Omformulerad post lagras INTE när:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Säkra eller känsliga fält</span> — du skriver i ett
          lösenords- eller säkerhetsfält, eller ett fält avsett för e-post, telefonnummer, PIN-koder
          eller numeriska koder, URL:er eller sökning.
        </li>
        <li>
          <span className="font-medium">E-postadresser</span> — texten innehåller en e-postadress.
        </li>
        <li>
          <span className="font-medium">Betalkortsnummer</span> — texten innehåller en sekvens på
          13–16 siffror som ser ut som ett kredit- eller betalkortsnummer.
        </li>
        <li>
          <span className="font-medium">Verifierings- eller engångskoder</span> — texten innehåller
          en fristående kod på 4–8 siffror.
        </li>
        <li>
          <span className="font-medium">Konto- eller ID-nummer</span> — texten innehåller en lång
          obruten följd av 9 eller fler siffror.
        </li>
        <li>
          <span className="font-medium">Lösenord, API-nycklar och andra hemligheter</span> — texten
          innehåller en token med hög entropi som ser ut som ett lösenord, en nyckel eller annan
          slumpmässig hemlighet.
        </li>
      </ul>
      <p>Vid tveksamhet väljer Arcatext att inte lagra.</p>
      <p>
        <span className="font-medium">Serverloggar.</span> Våra servrar loggar aldrig innehållet i
        dina meddelanden. Loggar registrerar endast driftsmetadata — en kontoidentifierare,
        förfrågningsstatus, tidpunkt och ett ogenomskinligt förfrågnings-ID — som används för att
        hålla tjänsten tillförlitlig och för att diagnostisera problem.
      </p>
      <p>
        <span className="font-medium">Din kontroll.</span> Du kan stänga av Omformulera-lagring helt
        när som helst i Arcatext-appen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonymiserad och avidentifierad språkdata
      </h3>
      <p>
        Arcatext och Adalithic LLC kan använda lagrade meddelanden och språkinteraktioner för att
        förbättra språksystem, översättningskvalitet, Omformuleringsfunktioner och prestanda för
        stora språkmodeller.
      </p>
      <p>
        Arcatext och Adalithic LLC kan också skapa anonymiserade, avidentifierade eller aggregerade
        språkdatauppsättningar härledda från användarinskickade meddelanden. Dessa datauppsättningar
        används internt av Adalithic LLC för att förbättra Arcatexts språkfunktioner och kvalitet. Vi
        säljer, licensierar eller delar inte dessa datauppsättningar med tredje parter.
      </p>
      <p>
        Anonymiserade eller avidentifierade datauppsättningar är inte avsedda att identifiera dig
        personligen eller kopplas till en specifik användarprofil. Ingen anonymiserings- eller
        avidentifieringsprocess kan dock garantera att återidentifiering är omöjlig under alla
        omständigheter. Adalithic LLC använder rimliga skyddsåtgärder utformade för att minska denna
        risk.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Datalagring, kontoradering och din rätt till radering
      </h3>
      <p>
        Vi behåller information endast så länge som rimligen är nödvändigt för de ändamål som beskrivs
        i denna integritetspolicy, om inte en längre lagringsperiod krävs enligt lag.
      </p>
      <p>I allmänhet:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Omformulerade meddelanden kopplade till din profil kan behållas medan ditt konto är aktivt
          eller efter behov för att tillhandahålla funktioner och mått.
        </li>
        <li>Appinställningar kan lagras lokalt på din enhet eller kopplas till din profil.</li>
        <li>
          Tekniska loggar kan tillfälligt behållas för felsökning, tillförlitlighet, förebyggande av
          missbruk eller säkerhetsändamål.
        </li>
        <li>
          Supportmeddelanden kan behållas efter behov för att svara användare och upprätthålla
          supportregister.
        </li>
        <li>
          Anonymiserade, avidentifierade eller aggregerade datauppsättningar kan behållas under
          längre perioder eftersom de inte är avsedda att identifiera en specifik användare.
        </li>
        <li>
          Anonyma loggar av Omformulerade meddelanden kan behållas efter att ditt konto har raderats,
          enligt beskrivningen nedan.
        </li>
      </ul>
      <p>
        Du kan radera ditt Arcatext-konto när som helst inifrån appen. När du raderar ditt konto tar
        vi bort din profil och kontoinformation, inklusive din e-postadress, ditt användarnamn och
        dina autentiseringsuppgifter.
      </p>
      <p>
        Arcatext upprätthåller anonyma loggar av Omformulerade meddelanden även efter att ett konto
        har raderats. Detta gör att användare kan dra nytta av sin meddelandehistorik om de skapar
        ett konto igen med samma identifierare (dvs. en e-postadress). Detta hjälper också Arcatext
        att fortsätta träna sina egna interna AI-modeller på anonym Omformulerad meddelandedata.
      </p>
      <p>
        För att hålla dessa behållna loggar anonyma ersätts din e-postadress vid raderingstillfället
        med en enkelriktad, oåterkallelig identifierare. De behållna Omformulerade meddelandena
        lagras inte med din e-postadress och kan inte läsas eller kopplas tillbaka till dig av
        Arcatext-personal. Om du senare skapar ett nytt konto med samma e-postadress kan dessa
        meddelanden återkopplas till ditt nya konto.
      </p>
      <p>
        <span className="font-medium">Begära fullständig radering.</span> Om du föredrar att din
        behållna Omformulerade meddelandedata raderas permanent och fullständigt snarare än behålls i
        anonym form, kan du kontakta oss på arcatextapp@gmail.com med ämnesraden "Data Erasure
        Request." Ange e-postadressen för det konto vars data du vill radera. Detta begäransmejl måste
        skickas från samma e-post som är associerad med det aktuella kontot. Begäran om dataradering
        kan endast göras för konton som redan har raderats. Vi kommer att radera den associerade
        behållna datan i enlighet med tillämplig lag.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Känslig information</h3>
      <p>
        Arcatext är ett språkverktyg, inte ett säkert valv. Du bör inte skicka in mycket känslig
        information för översättning, Omformulering, kontroll eller inlärningsfunktioner.
      </p>
      <p>Undvik att ange:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Lösenord</li>
        <li>Kreditkortsnummer</li>
        <li>Bankinformation</li>
        <li>Personnummer eller myndighets-ID</li>
        <li>Journaler</li>
        <li>Juridiska hemligheter</li>
        <li>Privata adresser</li>
        <li>Konfidentiell affärsinformation</li>
        <li>
          Mycket känsliga personliga meddelanden som du inte vill ska behandlas eller lagras för
          språkrelaterade ändamål
        </li>
      </ul>
      <p>
        Om du väljer att skicka in känslig information förstår du att den kan behandlas av Arcatext
        och dess tjänsteleverantörer för att tillhandahålla den begärda funktionen.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Barns integritet</h3>
      <p>Arcatext är inte avsett för barn under 13 år.</p>
      <p>
        Om du är under 13 år får du inte använda Arcatext om inte din förälder, vårdnadshavare, skola
        eller auktoriserade utbildningsinstitution har godkänt din användning på ett sätt som
        tillåts enligt tillämplig lag.
      </p>
      <p>
        Om Adalithic LLC blir medvetet om att personlig information från ett barn under 13 år har
        samlats in i strid med tillämplig lag kan vi vidta åtgärder utformade för att begränsa eller
        radera den informationen där så är lämpligt.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Internationella dataöverföringar</h3>
      <p>
        Arcatext och dess tjänsteleverantörer kan behandla information i USA eller andra länder. Dessa
        länder kan ha integritetslagar som skiljer sig från lagarna på din plats.
      </p>
      <p>
        Genom att använda Arcatext förstår du att din information kan behandlas i länder utanför din
        bostadsort. Ytterligare information om överföringar, inklusive de skyddsåtgärder vi använder,
        finns i avsnittet Regionspecifika integritetsrättigheter nedan.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Dina val</h3>
      <p>Du har flera val gällande din information.</p>
      <p className="font-medium">Tangentbordsbehörigheter och åtkomstinställningar</p>
      <p>
        Du kan inaktivera tangentbordsbehörigheter, internetbehörigheter eller relaterade
        åtkomstinställningar via din enhets eller ditt operativsystems inställningar. Vissa
        Arcatext-funktioner som förlitar sig på onlinebehandling eller tangentbordsintegration kanske
        inte längre fungerar korrekt.
      </p>
      <p className="font-medium">Sluta använda tangentbordet</p>
      <p>Du kan ta bort Arcatext från din tangentbordslista eller avinstallera appen när som helst.</p>
      <p className="font-medium">Begränsa vad du skickar in</p>
      <p>
        Du kan välja att inte skicka in känslig eller personlig text för översättning, Omformulering,
        kontroll eller inlärningsfunktioner.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Integritetsförfrågningar</h3>
      <p>
        Om du har frågor om din information eller denna integritetspolicy kan du kontakta Adalithic
        LLC på:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC kan granska och svara på förfrågningar i enlighet med tillämplig lag och
        företagets operativa kapacitet.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Kaliforniens integritetsmeddelande</h3>
      <p>
        Om du är bosatt i Kalifornien ger detta avsnitt ytterligare information.
      </p>
      <p>Arcatext kan behandla följande kategorier av information:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Användarinskickat innehåll</span> — Text som skickas in för
          översättning, Omformulering, kontroll eller analys. Ändamål: att tillhandahålla
          språkfunktioner.
        </li>
        <li>
          <span className="font-medium">Lagrade Omformulerade meddelanden</span> — Meddelanden du
          Omformulerar som kan kopplas till din profil. Ändamål: att tillhandahålla mått, historik och
          inlärningsfunktioner.
        </li>
        <li>
          <span className="font-medium">Kontoinformation</span> — E-postadress, användarnamn,
          autentiseringsinformation. Ändamål: att tillhandahålla kontobaserade funktioner.
        </li>
        <li>
          <span className="font-medium">Preferenser</span> — Språk, skrift, ton, kön och
          tangentbordsinställningar. Ändamål: att anpassa appen.
        </li>
        <li>
          <span className="font-medium">Teknisk information</span> — Appversion, kraschloggar,
          enhetstyp, operativsystem. Ändamål: att underhålla och förbättra appen.
        </li>
        <li>
          <span className="font-medium">Supportinformation</span> — E-post eller meddelanden du
          skickar till oss. Ändamål: att svara på supportförfrågningar.
        </li>
        <li>
          <span className="font-medium">Avidentifierad språkdata</span> — Anonymiserade eller
          aggregerade språkexempel härledda från användarinskick. Ändamål: att förbättra språksystem.
        </li>
      </ul>
      <p>Adalithic LLC säljer eller delar inte din personliga information.</p>
      <p>Om du har frågor om dina integritetsrättigheter, kontakta arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Säkerhet</h3>
      <p>
        Vi använder rimliga tekniska och organisatoriska åtgärder för att skydda information som
        behandlas via Arcatext.
      </p>
      <p>
        Profilkopplade Omformulerade meddelanden behandlas som konfidentiell användardata. Vi vidtar
        åtgärder utformade för att begränsa åtkomsten till denna information till auktoriserad personal
        och tjänsteleverantörer som behöver åtkomst för att driva, säkra, förbättra eller stödja
        Arcatext.
      </p>
      <p>
        Ingen metod för elektronisk lagring eller internetöverföring är dock helt säker. Vi kan inte
        garantera absolut säkerhet.
      </p>
      <p>Du är ansvarig för att bestämma vilken information du skickar in via Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Datadelning</h3>
      <p>Arcatext och Adalithic LLC kan dela information under begränsade omständigheter:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Med AI-leverantörer för att tillhandahålla översättning, Omformulering, kontroll och språkfunktioner</li>
        <li>Med tjänsteleverantörer som hjälper till att driva, säkra, lagra, analysera eller förbättra appen</li>
        <li>Med analys- eller kraschrapporteringsleverantörer</li>
        <li>Med betalningsförmedlare eller appbutiksleverantörer</li>
        <li>Om det krävs enligt lag eller rättslig process</li>
        <li>För att skydda Arcatexts, användares, Adalithic LLC:s eller andras rättigheter, säkerhet eller trygghet</li>
        <li>I samband med fusioner, förvärv, finansiering eller försäljning av tillgångar</li>
      </ul>
      <p>Vi säljer inte dina uppgifter.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. Appbutik, fakturering och betalningsinformation
      </h3>
      <p>
        Om Arcatext erbjuder betalfunktioner, prenumerationer eller köp i appen kan betalningshantering
        skötas av tredjeparts plattformsleverantörer såsom Apple, Google eller andra auktoriserade
        betalningsförmedlare.
      </p>
      <p>Till exempel:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Köp på Apple-plattformar kan behandlas via Apples App Store och StoreKit-system.</li>
        <li>Köp på Android-plattformar kan behandlas via Google Play Billing och Googles betalningssystem.</li>
      </ul>
      <p>
        Arcatext och Adalithic LLC tar inte direkt emot eller lagrar fullständig betalkortsinformation
        som används via dessa plattformars faktureringssystem.
      </p>
      <p>
        Din användning av tredjeparts appbutiker, faktureringssystem och betalningsleverantörer kan
        också styras av dessa leverantörers egna integritetspolicyer, villkor och betalningsregler.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Ändringar av denna integritetspolicy</h3>
      <p>
        Vi kan uppdatera denna integritetspolicy då och då för att återspegla ändringar i vår app,
        teknik, tjänsteleverantörer, rättsliga skyldigheter eller affärsmetoder.
      </p>
      <p>När vi uppdaterar policyn kommer vi att revidera datumet "Senast uppdaterad" högst upp.</p>
      <p>
        Om ändringarna är betydande kan vi lämna ytterligare meddelande via appen, webbplatsen eller
        andra lämpliga metoder.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Kontakta oss</h3>
      <p>Om du har frågor, funderingar eller integritetsförfrågningar, kontakta:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext integritetskontakt
        <br />
        E-post: arcatextapp@gmail.com
        <br />
        Supportsida: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Regionspecifika integritetsrättigheter</h3>
      <p>
        Om det finns någon konflikt mellan denna integritetspolicy och användarvillkoren i
        integritetsrelaterade frågor, har denna integritetspolicy företräde.
      </p>
      <p className="font-medium">Dina rättigheter (global sammanfattning)</p>
      <p>
        Beroende på var du bor kan du ha rättigheter gällande din personliga information, inklusive
        rätten att få tillgång till, korrigera, radera eller begränsa behandlingen av dina uppgifter,
        rätten till dataportabilitet, rätten att invända mot viss behandling och rätten att återkalla
        samtycke där behandling baseras på samtycke. Detaljerade rättigheter och hur du utövar dem
        anges i de regionspecifika avsnitten nedan. Du kan också kontakta oss på arcatextapp@gmail.com
        för att göra en begäran, och vi kommer att svara i enlighet med tillämplig lag.
      </p>

      <p className="font-medium">
        Rider A — Europeiska ekonomiska samarbetsområdet (EEA), Europeiska unionen och EFTA-länder
      </p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i: Österrike, Belgien, Bulgarien, Kroatien,
        Cypern, Tjeckien, Danmark, Estland, Finland, Frankrike, Tyskland, Grekland, Ungern, Irland,
        Italien, Lettland, Litauen, Luxemburg, Malta, Nederländerna, Polen, Portugal, Rumänien,
        Slovakien, Slovenien, Spanien, Sverige, Island och Norge.
      </p>
      <p className="font-medium">Rättsliga grunder för behandling</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Fullgörande av ett avtal</span> — behandling som är nödvändig
          för att tillhandahålla de centrala tangentbords-, översättnings-, Omformulerings- och
          språkfunktioner du begär.
        </li>
        <li>
          <span className="font-medium">Berättigade intressen</span> — säkerhet, förebyggande av
          missbruk, tjänsteförbättring och utveckling av språksystem. Vi har genomfört en
          avvägningstest och dragit slutsatsen att dessa intressen i de flesta fall inte åsidosätts av
          dina rättigheter och friheter.
        </li>
        <li>
          <span className="font-medium">Samtycke</span> — valfria funktioner såsom lagring av
          Omformulerade meddelanden för inlärning och framstegsspårning. Du kan återkalla samtycke när
          som helst genom att stänga av funktionen i appen.
        </li>
      </ul>
      <p className="font-medium">Dina rättigheter</p>
      <p>
        Med förbehåll för tillämpliga undantag har du rätt att få tillgång till dina personuppgifter;
        få rättelse av felaktiga uppgifter; få radering av dina uppgifter ("rätten att bli
        bortglömd"); få begränsning av behandlingen; ta emot dina uppgifter i ett portabelt format;
        invända mot behandling baserad på berättigade intressen; och återkalla samtycke där behandling
        baseras på samtycke. Du kan utöva dessa rättigheter genom att kontakta oss på
        arcatextapp@gmail.com. Vi kommer att svara inom de tidsramar som krävs enligt lag (i allmänhet
        en månad, förlängningsbart i komplexa fall).
      </p>
      <p className="font-medium">Rätt att klaga</p>
      <p>
        Du har rätt att lämna in ett klagomål till din lokala tillsynsmyndighet
        (dataskyddsmyndighet) om du anser att dina rättigheter har kränkts.
      </p>
      <p className="font-medium">Representant</p>
      <p>
        Adalithic LLC har utsett en representant i Europeiska unionen enligt artikel 27 i GDPR. Vår
        representant är Prighter Group. Du kan kontakta vår representant, eller utöva dina rättigheter
        som registrerad genom dem, via följande säkra portal:{" "}
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
      <p className="font-medium">Internationella dataöverföringar</p>
      <p>
        Din information kan överföras till USA och andra länder utanför EEA/EFTA. Vi förlitar oss på
        standardavtalsklausuler (SCC) som godkänts av Europeiska kommissionen som den primära
        överföringsmekanismen, tillsammans med lämpliga kompletterande åtgärder (såsom kryptering och
        åtkomstkontroller) där så krävs.
      </p>
      <p className="font-medium">Lagring och automatiserad behandling</p>
      <p>
        Lagringsperioder beskrivs i avsnitt 9. Automatiserad behandling och förbättring av språkmodeller
        på användarinskickad text baseras på berättigade intressen eller samtycke (där tillämpligt) och
        omfattas av de skyddsåtgärder som beskrivs i denna policy.
      </p>

      <p className="font-medium">Rider B — Storbritannien</p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i Storbritannien. Bestämmelserna i Rider A gäller
        med följande anpassningar:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hänvisningar till GDPR ersätts med UK GDPR.</li>
        <li>Tillsynsmyndigheten är Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC har utsett en representant i Storbritannien enligt artikel 27 i UK GDPR. Vår
          brittiska representant är Prighter Group, som kan kontaktas via samma säkra portal:{" "}
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

      <p className="font-medium">Rider C — Schweiz</p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i Schweiz. Du har rättigheter enligt den
        reviderade federala dataskyddslagen (nFADP), inklusive rätten till tillgång, rättelse och
        radering. Du kan utöva dessa rättigheter genom att kontakta oss på arcatextapp@gmail.com.
        Adalithic LLC har utsett en representant i Schweiz enligt den reviderade federala
        dataskyddslagen. Vår schweiziska representant är Prighter Group, som kan kontaktas via samma
        säkra portal:{" "}
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

      <p className="font-medium">Rider D — Kanada, inklusive Québec</p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i Kanada, inklusive Québec. Du har rättigheter
        enligt PIPEDA och Québecs Law 25 att få tillgång till och korrigera din personliga information
        och att återkalla samtycke till viss behandling. Du kan utöva dessa rättigheter genom att
        kontakta oss på arcatextapp@gmail.com. En fransk version av denna integritetspolicy
        tillhandahålls för invånare i Québec. I händelse av ett dataintrång som utgör en verklig risk
        för betydande skada kommer vi att meddela berörda individer och relevanta myndigheter enligt
        vad som krävs enligt tillämplig lag.
      </p>

      <p className="font-medium">Rider E — USA</p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i USA. Invånare i Kalifornien har de rättigheter
        som beskrivs i Kaliforniens integritetsmeddelande i avsnitt 15 ovan, inklusive rätten att få
        veta, radera och korrigera personlig information och att välja bort all försäljning eller
        delning. Adalithic LLC säljer eller delar inte din personliga information för beteendebaserad
        annonsering över olika kontexter, och du kommer inte att diskrimineras för att du utövar dina
        rättigheter. Andra delstatliga integritetslagar i USA kan gälla beroende på din delstat, och vi
        kommer att respektera tillämpliga rättigheter där så krävs. För att utöva dessa rättigheter,
        kontakta oss på arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Rider F — Andra länder och regioner</p>
      <p>
        Denna Rider gäller konsumenter som är bosatta i alla andra länder och regioner där Arcatext
        erbjuds (med undantag för sanktionerade eller embargobelagda jurisdiktioner). Där lokal lag
        ger dig ytterligare integritetsrättigheter som inte kan avstås (till exempel enligt lagar såsom
        Brasiliens LGPD eller integritetslagar i Japan, Sydkorea, Australien, Indien och andra
        jurisdiktioner) gäller dessa rättigheter. Du kan kontakta oss på arcatextapp@gmail.com för att
        utöva sådana rättigheter, och vi kommer att svara i enlighet med tillämplig lokal lag.
      </p>
    </div>
  );
}
