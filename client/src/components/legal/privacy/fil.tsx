// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyFil() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Pinapatakbo ng Adalithic LLC</p>
      <p>Huling Na-update: July 3, 2026</p>
      <p>
        Ang Arcatext ay isang custom na keyboard at aplikasyon ng wika na dinisenyo upang tulungan
        ang mga user na sumulat, magsalin, mag-reword, at mas maunawaan ang mga mensahe sa iba't
        ibang wika. Ipinapaliwanag ng Patakaran sa Privacy na ito kung anong impormasyon ang
        pinoproseso ng Arcatext, kung paano ginagamit ang impormasyong iyon, kung kailan ito
        iniimbak, kung kailan ito maaaring ibahagi, at kung anong mga pagpipilian ang mayroon ka.
      </p>
      <p>Sa paggamit ng Arcatext, sumasang-ayon ka sa mga kagawiang inilarawan sa Patakaran sa Privacy na ito.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Sino Kami</h3>
      <p>Ang Arcatext ay pinapatakbo ng Adalithic LLC.</p>
      <p>Para sa mga tanong tungkol sa privacy, makipag-ugnayan sa amin sa:</p>
      <p>
        Email: arcatextapp@gmail.com
        <br />
        Pahina ng Suporta: https://adalithic.com/
      </p>
      <p>Kung magbabago ang mga detalye ng pakikipag-ugnayan na ito, i-a-update namin ang Patakaran sa Privacy na ito.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Impormasyong Pinoproseso Namin</h3>
      <p>
        Ang Arcatext ay dinisenyo upang iproseso lamang ang impormasyong kinakailangan upang
        maibigay, mapabuti, mai-personalize, at masuportahan ang mga tampok sa wika ng app.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Sa simpleng salita</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Hindi ibinebenta ng Arcatext ang iyong data sa kahit sino.</li>
          <li>Sinusubaybayan lamang namin ang mga mensaheng na-Reword (kailangan mong i-tap ang Reword button, kaya kung magta-type ka gamit ang keyboard nang hindi tinatap ang Reword, walang mensaheng sinusubaybayan o iniimbak).</li>
          <li>Ginagamit namin ang data upang mas maunawaan ang iyong kasanayan sa wika, upang maghatid ng mga tampok sa pagkatuto. Hindi kami personal na interesado sa kung ano ang ini-text mo, ngunit nais lamang naming tulungang pabilisin ang iyong pagkatuto ng wika!</li>
          <li>Sinasala namin ang ilang na-Reword na teksto at hindi namin ito iniimbak (halimbawa, mga password, numero ng kard, at mga code — tingnan ang kumpletong listahan sa Seksyon 7).</li>
          <li>Maaari mong i-off o i-on ang pagsubaybay sa Reword anumang oras (sa pangunahing Arcatext app). Nakatakda kami sa 'on' na estado bilang default upang maihatid namin ang mga tampok sa pagkatuto.</li>
        </ol>
      </div>
      <p className="font-medium">A. Tekstong Pinili Mong Isalin, I-reword, Suriin, o Analisahin</p>
      <p>
        Kapag ginagamit mo ang mga tampok ng Arcatext tulad ng pagsasalin, Rewording, baligtad na
        pagsasalin, mga mungkahi ng kasingkahulugan, tulong sa gramatika, paglilinaw ng kahulugan,
        o feedback sa pagkatuto, ang tekstong iyong isinusumite ay maaaring iproseso ng Arcatext at
        maaaring ipadala sa mga third-party na AI service provider upang gumana ang hiniling na
        tampok.
      </p>
      <p>Maaaring kabilang dito ang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga mensaheng ini-type mo sa Arcatext keyboard</li>
        <li>Mga mensaheng pinili mong i-Reword</li>
        <li>Tekstong pinili mo para sa pagsasalin o rewording</li>
        <li>Tekstong hinihiling mo sa Arcatext na suriin, ipaliwanag, o baguhin</li>
        <li>
          Konteksto na kinakailangan upang mapabuti ang kalidad ng pagsasalin o Rewording, tulad ng
          napiling wika, script, tono, pormalidad, o mga setting ng kasarian
        </li>
      </ul>
      <p className="font-medium">B. Mga Na-Reword na Mensaheng Nakakabit sa Iyong Profile</p>
      <p>Maaaring iimbak ng Arcatext ang mga mensaheng iyong na-Reword upang maibigay ang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga sukatan ng pagganap</li>
        <li>Pagsubaybay sa progreso</li>
        <li>Mga personalized na tampok sa pagkatuto</li>
        <li>Kasaysayan ng pagsulat</li>
        <li>Mga pananaw sa pagkatuto ng wika</li>
        <li>Iba pang mga tampok ng Arcatext</li>
      </ul>
      <p>
        Ang mga na-Reword na mensaheng ito ay maaaring ikabit sa iyong Arcatext profile upang
        maipakita ng app ang impormasyong tulad ng:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ang iyong kasaysayan ng Rewording</li>
        <li>Ang iyong progreso sa pagkatuto</li>
        <li>Ang iyong mga pattern ng pagsasanay sa wika</li>
        <li>Ang iyong pinakamadalas na ginagamit na mga wika o tampok</li>
        <li>Mga sukatan ng pagganap na may kaugnayan sa iyong paggamit ng Arcatext</li>
        <li>Mga personalized na rekomendasyon o kasangkapan sa pagkatuto</li>
      </ul>
      <p>
        Ang mga na-Reword na mensaheng nananatiling nakakonekta sa iyong profile ay itinuturing na
        kumpidensyal na data ng user. Hindi ibinebenta, nililisensya, o ibinabahagi ng Adalithic
        LLC ang mga na-Reword na mensaheng nakakabit sa profile sa mga panlabas na kumpanya,
        advertiser, data broker, o hindi kaugnay na mga third party.
      </p>
      <p>
        Ang mga na-Reword na mensaheng nakakabit sa profile ay ginagamit sa loob ng Adalithic LLC
        upang maibigay ang mga tampok ng Arcatext, mapanatili ang app, mapabuti ang karanasan ng
        user, at masuportahan ang mga functionality na may kaugnayan sa pagkatuto.
      </p>
      <p className="font-medium">C. Mga Setting ng Keyboard at Kagustuhan sa Wika</p>
      <p>Maaaring iproseso ng Arcatext ang mga setting ng app at kagustuhan sa wika, tulad ng:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pinagmulang wika</li>
        <li>Target na wika</li>
        <li>Wika ng keyboard</li>
        <li>Mga opsyon sa alpabeto o script, tulad ng standard na script o romanized na teksto</li>
        <li>
          Kasarian ng nagsasalita, kasarian ng tagatanggap, o mga setting ng kasarian sa group-chat
          kapag kinakailangan para sa katumpakan ng pagsasalin
        </li>
        <li>Mga kagustuhan sa tono, pormalidad, o pagkatuto</li>
        <li>Mga kagustuhan sa tampok sa loob ng app</li>
      </ul>
      <p>
        Ang mga setting na ito ay ginagamit upang maibigay ang keyboard, pagsasalin, Rewording, at
        karanasan sa pagkatuto. Ang ilang mga setting ay maaaring iimbak nang lokal sa iyong device
        o ikabit sa iyong profile kung ikaw ay gumawa o gumamit ng Arcatext account.
      </p>
      <p className="font-medium">D. Impormasyon ng Account</p>
      <p>
        Kung nag-aalok ang Arcatext ng mga tampok na nakabatay sa account, maaari kaming mangolekta
        at mag-imbak ng impormasyon ng account tulad ng:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Email address</li>
        <li>Username</li>
        <li>Password o mga kredensyal sa pagpapatunay</li>
        <li>Katayuan ng subscription</li>
        <li>Mga kagustuhan sa app</li>
        <li>Mga setting ng profile</li>
      </ul>
      <p>
        Ang mga password, kung ginagamit, ay hindi iniimbak sa plain text. Ang pagpapatunay ay
        maaari ring pangasiwaan ng mga third-party na identity provider, mga app-store provider, o
        mga serbisyo ng platform.
      </p>
      <p className="font-medium">E. Impormasyon ng Device at Platform</p>
      <p>
        Maaaring i-access ng Arcatext ang impormasyon ng device at platform na kinakailangan upang
        maibigay ang functionality, ma-initialize ang mga setting, mapabuti ang pagganap, at
        masuportahan ang pagiging tugma sa iba't ibang device at operating system.
      </p>
      <p>Maaaring kabilang dito ang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga setting ng wika ng device</li>
        <li>Uri ng device</li>
        <li>Bersyon ng operating system</li>
        <li>Bersyon ng app</li>
        <li>Impormasyon ng konpigurasyong may kaugnayan sa platform</li>
        <li>Impormasyon ng katayuan ng pahintulot</li>
      </ul>
      <p>
        Ang impormasyong ito ay ginagamit upang i-configure at suportahan ang karanasan sa app at
        hindi inilaan upang direktang tukuyin ka.
      </p>
      <p className="font-medium">F. Pangunahing Teknikal at Diagnostic na Impormasyon</p>
      <p>
        Maaaring iproseso ng Arcatext ang limitadong teknikal na impormasyon na kinakailangan upang
        patakbuhin, i-secure, mapabuti, o ma-troubleshoot ang app, tulad ng:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga crash log</li>
        <li>Data ng pagganap</li>
        <li>Mga ulat ng error</li>
        <li>Mga pangunahing kaganapan ng paggamit</li>
        <li>Kung ang isang tampok ay nabuksan, natapos, o nabigo</li>
      </ul>
      <p>Kung saan posible, ang impormasyong ito ay kinokolekta sa paraang hindi direktang tumutukoy sa iyo.</p>
      <p className="font-medium">G. Impormasyong Hindi Namin Sinasadyang Kinokolekta</p>
      <p>Ang Arcatext ay hindi sinasadyang kinokolekta ang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ang iyong eksaktong lokasyon</li>
        <li>Ang iyong mga contact</li>
        <li>Ang iyong mga larawan</li>
        <li>Ang iyong kumpletong impormasyon ng payment card</li>
        <li>Ang nilalaman ng lahat ng ini-type mo sa labas ng mga tampok ng Arcatext</li>
        <li>Mga password na ini-type sa ibang mga app</li>
        <li>Mga security code na ini-type sa ibang mga app</li>
      </ul>
      <p>
        Pinoproseso ng Arcatext ang tekstong pinili mong isumite sa pamamagitan ng mga tampok ng
        Arcatext. Hindi ginagamit ng Arcatext ang mga pahintulot ng keyboard upang lihim na
        kolektahin ang lahat ng tekstong ini-type mo.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Mga Pahintulot ng Custom na Keyboard at Access sa Network
      </h3>
      <p>
        Ang Arcatext ay gumagana bilang isang third-party na keyboard at kasangkapan sa wika. Ang
        ilang mga tampok ay maaaring mangailangan ng karagdagang mga pahintulot, koneksyon sa
        internet, o access sa antas ng device depende sa iyong device, operating system, o platform.
      </p>
      <p>Halimbawa:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Sa mga Apple device, maaaring kailanganin ng mga user na i-enable ang "Allow Full Access"
          para sa ilang mga tampok ng keyboard at online na wika.
        </li>
        <li>
          Sa mga Android device, maaaring hilingin sa mga user na magbigay ng mga pahintulot na may
          kaugnayan sa functionality ng keyboard, access sa internet, mga abiso, o mga tampok ng app.
        </li>
      </ul>
      <p>Ang mga pahintulot na ito ay maaaring kailanganin para sa mga tampok tulad ng:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI na pagsasalin</li>
        <li>Rewording</li>
        <li>Baligtad na pagsasalin</li>
        <li>Pagsusuri ng wika</li>
        <li>Mga sukatan ng pagganap</li>
        <li>Mga tampok sa pagkatuto</li>
        <li>Cloud-based na pagproseso ng wika</li>
        <li>Pag-synchronize ng account</li>
      </ul>
      <p>
        Kapag ang mga pahintulot na ito ay naka-enable, maaaring ipadala ng Arcatext ang tekstong
        pinili mong iproseso sa aming mga service provider upang gumana ang hiniling na tampok.
      </p>
      <p>
        Hindi ginagamit ng Arcatext ang mga pahintulot ng keyboard upang lihim na kolektahin ang
        lahat ng iyong ini-type, subaybayan ang hindi kaugnay na aktibidad sa pag-type, o subaybayan
        ang impormasyon sa labas ng mga tampok ng Arcatext.
      </p>
      <p>
        Hindi mo dapat gamitin ang Arcatext upang mag-type ng mga password, impormasyon sa
        pagbabayad, mga security code, o iba pang lubhang sensitibong impormasyon. Ang ilang
        operating system ay maaaring awtomatikong lumipat sa system keyboard para sa mga field ng
        password, ngunit dapat pa ring mag-ingat ang mga user kapag naglalagay ng sensitibong
        impormasyon.
      </p>
      <p>
        Maaari mong i-disable ang mga pahintulot ng keyboard, mga pahintulot sa internet, o mga
        kaugnay na setting ng access anumang oras sa pamamagitan ng mga setting ng iyong device,
        bagaman ang ilang mga tampok ng Arcatext ay maaaring huminto sa maayos na paggana.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Paano Namin Ginagamit ang Impormasyon</h3>
      <p>
        Ginagamit ng Arcatext ang impormasyon para sa mga layuning may kaugnayan sa pagbibigay,
        pag-personalize, pag-analisa, pag-secure, at pagpapabuti ng app.
      </p>
      <p>Maaari naming gamitin ang impormasyon upang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Magsalin ng teksto</li>
        <li>Mag-reword ng mga mensahe</li>
        <li>Magbigay ng mga alternatibong pagbigkas o kasingkahulugan</li>
        <li>Suriin ang kahulugan ng isang pagsasalin</li>
        <li>Ipaliwanag ang mga pagpipilian sa wika</li>
        <li>Suportahan ang iba't ibang script o mga opsyon sa romanization</li>
        <li>Ilapat ang mga setting ng kasarian, tono, o pormalidad</li>
        <li>Mag-imbak ng mga na-Reword na mensahe para sa mga tampok sa pagkatuto na nakaharap sa user</li>
        <li>Magbigay ng mga sukatan ng pagganap at pagsubaybay sa progreso</li>
        <li>I-personalize ang mga rekomendasyon sa pagkatuto ng wika</li>
        <li>Pabutihin ang pagiging maaasahan at pagganap ng app</li>
        <li>Pabutihin ang mga sistema ng wika ng Arcatext at mga tampok ng large language model</li>
        <li>Tuklasin ang mga bug, crash, pang-aabuso, o mga isyu sa seguridad</li>
        <li>Panatilihin ang seguridad ng app</li>
        <li>Tumugon sa mga kahilingan sa suporta</li>
        <li>Sumunod sa mga legal na obligasyon</li>
      </ul>
      <p>Hindi namin ginagamit ang mga na-Reword na mensaheng nakakabit sa profile upang lumikha ng mga profile sa advertising.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI na Pagproseso at Mga Third-Party na Service Provider
      </h3>
      <p>
        Upang maibigay ang mga tampok sa pagsasalin at wika, maaaring ipadala ng Arcatext ang
        isinumiteng teksto at mga kaugnay na setting sa mga third-party na AI model provider at iba
        pang mga service provider.
      </p>
      <p>
        Pinoproseso ng mga provider na ito ang teksto upang magbalik ng mga pagsasalin, Rewording,
        paliwanag, o iba pang mga output ng wika. Ang kanilang paghawak ng data ay pinamamahalaan ng
        kanilang sariling mga patakaran sa privacy, mga tuntunin, at mga kagawian sa pagproseso.
      </p>
      <p>
        Sa oras ng huling pag-update ng patakarang ito, sinasabi ng aming mga AI model provider na
        ang data na isinumite sa pamamagitan ng kanilang mga API ay hindi ginagamit upang
        sanayin o pabutihin ang kanilang mga modelo bilang default maliban kung ang customer ay
        mag-opt in. Hindi sinasadyang nag-o-opt in ang Arcatext sa pagsasanay ng modelo para sa
        nilalamang pagsasaling isinumite ng user maliban kung ang patakarang ito ay ma-update upang
        sabihin ang iba.
      </p>
      <p>Maaari ring gumamit ang Arcatext ng mga service provider para sa:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pag-host ng app</li>
        <li>Pag-imbak ng database</li>
        <li>Analytics</li>
        <li>Pag-uulat ng crash</li>
        <li>Suporta sa customer</li>
        <li>Pagsubaybay sa seguridad</li>
        <li>Pagpapatunay</li>
        <li>Pagproseso ng pagbabayad</li>
        <li>AI na pagproseso at functionality ng language model</li>
      </ul>
      <p>
        Ang mga provider na ito ay pinapayagang magproseso ng impormasyon lamang kung kinakailangan
        upang magbigay ng mga serbisyo sa Arcatext at Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Pag-imbak ng mga Na-Reword na Mensahe</h3>
      <p>Maaaring iimbak ng Arcatext ang mga mensaheng iyong na-Reword upang maibigay namin ang:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga sukatan ng pagganap</li>
        <li>Mga tampok sa pagkatuto</li>
        <li>Kasaysayan ng user</li>
        <li>Pagsubaybay sa progreso</li>
        <li>Mga personalized na kasangkapan sa wika</li>
      </ul>
      <p>
        Kapag ang mga na-Reword na mensahe ay nakakabit sa iyong profile, maaari silang iugnay sa
        impormasyong tulad ng iyong account, email address, username, mga kagustuhan sa app, o
        kasaysayan ng paggamit. Ang koneksyong ito ay nagpapahintulot sa Arcatext na magbigay ng mga
        personalized na tampok.
      </p>
      <p>
        Ang mga na-Reword na mensaheng nakakabit sa profile ay kumpidensyal at hindi ibinebenta,
        nililisensya, o ibinabahagi sa labas ng Adalithic LLC maliban sa mga service provider na
        nagpoproseso ng data sa ngalan namin upang patakbuhin ang Arcatext.
      </p>
      <p>Ang mga halimbawa ng mga tampok na maaaring umasa sa mga naimbak na na-Reword na mensahe ay kinabibilangan ng:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pagsubaybay sa iyong pagpapabuti sa paglipas ng panahon</li>
        <li>Pagpapakita ng mga istatistika sa pagkatuto ng wika</li>
        <li>Pagtulong sa iyong suriin ang mga nakaraang na-Reword na mensahe</li>
        <li>Pagtukoy sa mga pattern ng gramatika o bokabularyo</li>
        <li>Pagpapabuti ng mga personalized na rekomendasyon</li>
        <li>Pagsuporta sa mga tampok sa pagkatuto sa hinaharap sa loob ng Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Ano ang Aming Sinasala at Hindi Kailanman Iniimbak o Ni-log
      </h3>
      <p>
        Upang protektahan ka, awtomatikong sinusuri ng Arcatext ang teksto sa iyong device bago
        maimbak ang anumang na-Reword na entry. Kapag natukoy nito ang anumang sensitibo, itinatapon
        nito ang buong entry — hindi ito nag-iimbak ng pinaikli o na-redact na bersyon, at walang
        naka-link sa iyong profile.
      </p>
      <p>Ang isang na-Reword na entry ay HINDI iniimbak kapag:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Mga secure o sensitibong field</span> — nagta-type ka sa isang
          password o secure-entry na field, o isang field na nakatalaga para sa email, mga numero ng
          telepono, PIN o numeric na code, URL, o paghahanap.
        </li>
        <li>
          <span className="font-medium">Mga email address</span> — naglalaman ang teksto ng isang email
          address.
        </li>
        <li>
          <span className="font-medium">Mga numero ng payment card</span> — naglalaman ang teksto ng
          isang 13–16 na digit na pagkakasunod-sunod na mukhang numero ng credit o debit card.
        </li>
        <li>
          <span className="font-medium">Mga verification o one-time code</span> — naglalaman ang teksto
          ng isang standalone na 4–8 na digit na code.
        </li>
        <li>
          <span className="font-medium">Mga numero ng account o ID</span> — naglalaman ang teksto ng
          isang mahabang tuloy-tuloy na hanay ng 9 o higit pang mga digit.
        </li>
        <li>
          <span className="font-medium">Mga password, API key, at iba pang lihim</span> — naglalaman ang
          teksto ng isang high-entropy na token na mukhang password, key, o iba pang random na lihim.
        </li>
      </ul>
      <p>Kapag may pag-aalinlangan, ang Arcatext ay pumapanig sa hindi pag-imbak.</p>
      <p>
        <span className="font-medium">Mga server log.</span> Ang aming mga server ay hindi kailanman
        nagla-log ng nilalaman ng iyong mga mensahe. Ang mga log ay nagre-record lamang ng
        operational na metadata — isang account identifier, katayuan ng request, timing, at isang
        opaque na request ID — na ginagamit upang panatilihing maaasahan ang serbisyo at upang
        mag-diagnose ng mga problema.
      </p>
      <p>
        <span className="font-medium">Ang iyong kontrol.</span> Maaari mong i-off ang pag-imbak ng
        Reword nang buo anumang oras sa Arcatext app.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonymized at De-Identified na Data ng Wika
      </h3>
      <p>
        Maaaring gamitin ng Arcatext at Adalithic LLC ang mga naimbak na mensahe at mga
        pakikipag-ugnayan sa wika upang mapabuti ang mga sistema ng wika, kalidad ng pagsasalin, mga
        tampok ng Rewording, at pagganap ng large language model.
      </p>
      <p>
        Maaari ring lumikha ang Arcatext at Adalithic LLC ng mga anonymized, de-identified, o
        pinagsama-samang dataset ng wika na hango sa mga mensaheng isinumite ng user. Ang mga
        dataset na ito ay ginagamit sa loob ng Adalithic LLC upang mapabuti ang mga tampok at
        kalidad ng wika ng Arcatext. Hindi namin ibinebenta, nililisensya, o ibinabahagi ang mga
        dataset na ito sa mga third party.
      </p>
      <p>
        Ang mga anonymized o de-identified na dataset ay hindi inilaan upang tukuyin ka nang
        personal o iugnay sa isang tiyak na profile ng user. Gayunpaman, walang proseso ng
        anonymization o de-identification ang makakagarantiya na imposible ang re-identification sa
        bawat pagkakataon. Gumagamit ang Adalithic LLC ng makatwirang mga panangga na dinisenyo
        upang bawasan ang panganib na ito.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Pagpapanatili ng Data, Pagtanggal ng Account, at Ang Iyong Karapatan sa Pagbura
      </h3>
      <p>
        Pinapanatili lamang namin ang impormasyon sa loob ng panahong makatwirang kinakailangan para
        sa mga layuning inilarawan sa Patakaran sa Privacy na ito, maliban kung ang mas mahabang
        panahon ng pagpapanatili ay kinakailangan ng batas.
      </p>
      <p>Sa pangkalahatan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Ang mga na-Reword na mensaheng nakakabit sa iyong profile ay maaaring panatilihin habang
          aktibo ang iyong account o kung kinakailangan upang magbigay ng mga tampok at sukatan.
        </li>
        <li>Ang mga kagustuhan sa app ay maaaring iimbak nang lokal sa iyong device o ikabit sa iyong profile.</li>
        <li>
          Ang mga teknikal na log ay maaaring pansamantalang panatilihin para sa debugging,
          pagiging maaasahan, pag-iwas sa pang-aabuso, o mga layunin sa seguridad.
        </li>
        <li>
          Ang mga mensahe sa suporta ay maaaring panatilihin kung kinakailangan upang tumugon sa mga
          user at mapanatili ang mga rekord ng suporta.
        </li>
        <li>
          Ang mga anonymized, de-identified, o pinagsama-samang dataset ay maaaring panatilihin sa
          mas mahabang panahon dahil hindi ito inilaan upang tukuyin ang isang tiyak na user.
        </li>
        <li>
          Ang mga anonymous na log ng mga na-Reword na mensahe ay maaaring panatilihin pagkatapos
          tanggalin ang iyong account, tulad ng inilarawan sa ibaba.
        </li>
      </ul>
      <p>
        Maaari mong tanggalin ang iyong Arcatext account anumang oras mula sa loob ng app. Kapag
        tinanggal mo ang iyong account, tinatanggal namin ang iyong profile at impormasyon ng
        account, kasama ang iyong email address, username, at mga kredensyal sa pagpapatunay.
      </p>
      <p>
        Pinapanatili ng Arcatext ang mga anonymous na log ng mga na-Reword na mensahe kahit
        pagkatapos tanggalin ang isang account. Nagbibigay-daan ito sa mga user na makinabang mula sa
        kanilang kasaysayan ng pagmemensahe kung gumawa silang muli ng account gamit ang parehong
        identifier (ibig sabihin, isang email address). Nakakatulong din ito sa Arcatext na
        magpatuloy sa pagsasanay ng sarili nitong panloob na mga AI model sa anonymous na data ng
        na-Reword na mensahe.
      </p>
      <p>
        Upang mapanatiling anonymous ang mga naimbak na log na ito, ang iyong email address ay
        pinapalitan sa oras ng pagtanggal ng isang one-way, hindi na maibabalik na identifier. Ang
        mga naimbak na na-Reword na mensahe ay hindi iniimbak kasama ang iyong email address at hindi
        mababasa o mai-link pabalik sa iyo ng mga tauhan ng Arcatext. Kung sa kalaunan ay gumawa ka
        ng bagong account gamit ang parehong email address, ang mga mensaheng ito ay maaaring
        muling ikonekta sa iyong bagong account.
      </p>
      <p>
        <span className="font-medium">Paghiling ng kumpletong pagbura.</span> Kung mas gusto mong ang
        iyong naimbak na data ng na-Reword na mensahe ay permanente at ganap na burahin sa halip na
        panatilihin sa anonymous na anyo, maaari kang makipag-ugnayan sa amin sa arcatextapp@gmail.com
        na may subject line na "Data Erasure Request." Isama ang email address ng account na nais
        mong burahin ang data. Ang email na kahilingang ito ay dapat ipadala mula sa parehong email
        na nauugnay sa account na pinag-uusapan. Ang mga kahilingan para sa pagbura ng data ay
        maaari lamang gawin para sa mga account na natanggal na. Buburahin namin ang nauugnay na
        naimbak na data alinsunod sa naaangkop na batas.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Sensitibong Impormasyon</h3>
      <p>
        Ang Arcatext ay isang kasangkapan sa wika, hindi isang secure na vault. Hindi mo dapat
        isumite ang lubhang sensitibong impormasyon para sa pagsasalin, Rewording, pagsusuri, o mga
        tampok sa pagkatuto.
      </p>
      <p>Iwasan ang paglalagay ng:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mga password</li>
        <li>Mga numero ng credit card</li>
        <li>Impormasyon ng bangko</li>
        <li>Mga Social Security number o government ID</li>
        <li>Mga medikal na rekord</li>
        <li>Mga legal na lihim</li>
        <li>Mga pribadong address</li>
        <li>Kumpidensyal na impormasyon ng negosyo</li>
        <li>
          Lubhang sensitibong personal na mensaheng hindi mo nais iproseso o iimbak para sa mga
          gamit na may kaugnayan sa wika
        </li>
      </ul>
      <p>
        Kung pipiliin mong isumite ang sensitibong impormasyon, nauunawaan mo na maaari itong
        iproseso ng Arcatext at ng mga service provider nito upang maibigay ang hiniling na tampok.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Privacy ng mga Bata</h3>
      <p>Ang Arcatext ay hindi inilaan para sa mga batang wala pang 13 taong gulang.</p>
      <p>
        Kung ikaw ay wala pang 13, hindi mo maaaring gamitin ang Arcatext maliban kung ang iyong
        magulang, legal na tagapangalaga, paaralan, o awtorisadong institusyong pang-edukasyon ay
        inaprubahan ang iyong paggamit sa paraang pinahihintulutan ng naaangkop na batas.
      </p>
      <p>
        Kung malaman ng Adalithic LLC na ang personal na impormasyon mula sa isang batang wala pang
        13 ay nakolekta nang labag sa naaangkop na batas, maaari kaming gumawa ng mga hakbang na
        dinisenyo upang paghigpitan o tanggalin ang impormasyong iyon kung naaangkop.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Mga Internasyonal na Paglilipat ng Data</h3>
      <p>
        Ang Arcatext at ang mga service provider nito ay maaaring magproseso ng impormasyon sa United
        States o iba pang mga bansa. Ang mga bansang ito ay maaaring may mga batas sa privacy na iba
        sa mga batas sa iyong lokasyon.
      </p>
      <p>
        Sa paggamit ng Arcatext, nauunawaan mo na ang iyong impormasyon ay maaaring iproseso sa mga
        bansa sa labas ng iyong lugar ng paninirahan. Ang karagdagang impormasyon tungkol sa mga
        paglilipat, kasama ang mga panangga na ginagamit namin, ay lumilitaw sa seksyon ng
        Region-Specific Privacy Rights sa ibaba.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Ang Iyong Mga Pagpipilian</h3>
      <p>Mayroon kang ilang mga pagpipilian tungkol sa iyong impormasyon.</p>
      <p className="font-medium">Mga Pahintulot ng Keyboard at Mga Setting ng Access</p>
      <p>
        Maaari mong i-disable ang mga pahintulot ng keyboard, mga pahintulot sa internet, o mga
        kaugnay na setting ng access sa pamamagitan ng mga setting ng iyong device o operating
        system. Ang ilang mga tampok ng Arcatext na umaasa sa online na pagproseso o pagsasama ng
        keyboard ay maaaring hindi na gumana nang maayos.
      </p>
      <p className="font-medium">Ihinto ang Paggamit ng Keyboard</p>
      <p>Maaari mong alisin ang Arcatext sa iyong listahan ng keyboard o i-uninstall ang app anumang oras.</p>
      <p className="font-medium">Limitahan ang Iyong Isinusumite</p>
      <p>
        Maaari mong piliing hindi isumite ang sensitibo o personal na teksto para sa pagsasalin,
        Rewording, pagsusuri, o mga tampok sa pagkatuto.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Mga Kahilingan sa Privacy</h3>
      <p>
        Kung mayroon kang mga tanong tungkol sa iyong impormasyon o sa Patakaran sa Privacy na ito,
        maaari kang makipag-ugnayan sa Adalithic LLC sa:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Maaaring suriin at tugunan ng Adalithic LLC ang mga kahilingan alinsunod sa naaangkop na
        batas at ang mga operational na kakayahan ng kumpanya.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Abiso sa Privacy ng California</h3>
      <p>
        Kung ikaw ay isang residente ng California, ang seksyong ito ay nagbibigay ng karagdagang
        impormasyon.
      </p>
      <p>Maaaring iproseso ng Arcatext ang mga sumusunod na kategorya ng impormasyon:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Nilalamang isinumite ng user</span> — Tekstong isinumite para
          sa pagsasalin, Rewording, pagsusuri, o pagsusuri. Layunin: upang magbigay ng mga tampok sa wika.
        </li>
        <li>
          <span className="font-medium">Mga naimbak na na-Reword na mensahe</span> — Mga mensaheng
          iyong na-Reword na maaaring nakakabit sa iyong profile. Layunin: upang magbigay ng mga
          sukatan, kasaysayan, at mga tampok sa pagkatuto.
        </li>
        <li>
          <span className="font-medium">Impormasyon ng account</span> — Email address, username,
          impormasyon sa pagpapatunay. Layunin: upang magbigay ng mga tampok na nakabatay sa account.
        </li>
        <li>
          <span className="font-medium">Mga kagustuhan</span> — Wika, script, tono, kasarian, at mga
          setting ng keyboard. Layunin: upang i-customize ang app.
        </li>
        <li>
          <span className="font-medium">Teknikal na impormasyon</span> — Bersyon ng app, mga crash log,
          uri ng device, operating system. Layunin: upang mapanatili at mapabuti ang app.
        </li>
        <li>
          <span className="font-medium">Impormasyon sa suporta</span> — Mga email o mensaheng ipinadala
          mo sa amin. Layunin: upang tumugon sa mga kahilingan sa suporta.
        </li>
        <li>
          <span className="font-medium">De-identified na data ng wika</span> — Mga anonymized o
          pinagsama-samang halimbawa ng wika na hango sa mga isinumite ng user. Layunin: upang mapabuti
          ang mga sistema ng wika.
        </li>
      </ul>
      <p>Hindi ibinebenta o ibinabahagi ng Adalithic LLC ang iyong personal na impormasyon.</p>
      <p>Kung mayroon kang mga tanong tungkol sa iyong mga karapatan sa privacy, makipag-ugnayan sa arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Seguridad</h3>
      <p>
        Gumagamit kami ng makatwirang teknikal at organisasyonal na mga hakbang upang protektahan
        ang impormasyong pinoproseso sa pamamagitan ng Arcatext.
      </p>
      <p>
        Ang mga na-Reword na mensaheng nakakabit sa profile ay itinuturing na kumpidensyal na data ng
        user. Gumagawa kami ng mga hakbang na dinisenyo upang paghigpitan ang access sa impormasyong
        ito sa mga awtorisadong tauhan at service provider na nangangailangan ng access upang
        patakbuhin, i-secure, mapabuti, o suportahan ang Arcatext.
      </p>
      <p>
        Gayunpaman, walang paraan ng elektronikong pag-imbak o paghahatid sa internet ang ganap na
        secure. Hindi namin magagarantiya ang absolutong seguridad.
      </p>
      <p>Ikaw ang responsable sa pagpapasya kung anong impormasyon ang isinusumite mo sa pamamagitan ng Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Pagbabahagi ng Data</h3>
      <p>Maaaring magbahagi ng impormasyon ang Arcatext at Adalithic LLC sa limitadong mga pagkakataon:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Sa mga AI provider upang magbigay ng pagsasalin, Rewording, pagsusuri, at mga tampok sa wika</li>
        <li>Sa mga service provider na tumutulong sa pagpapatakbo, pag-secure, pag-imbak, pag-analisa, o pagpapabuti ng app</li>
        <li>Sa mga analytics o crash-reporting provider</li>
        <li>Sa mga payment processor o app-store provider</li>
        <li>Kung kinakailangan ng batas o legal na proseso</li>
        <li>Upang protektahan ang mga karapatan, kaligtasan, o seguridad ng Arcatext, mga user, Adalithic LLC, o iba pa</li>
        <li>Kaugnay ng mga merger, acquisition, financing, o pagbebenta ng asset</li>
      </ul>
      <p>Hindi namin ibinebenta ang iyong data.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. App Store, Pagsingil, at Impormasyon sa Pagbabayad
      </h3>
      <p>
        Kung nag-aalok ang Arcatext ng mga bayad na tampok, subscription, o in-app na pagbili, ang
        pagproseso ng pagbabayad ay maaaring pangasiwaan ng mga third-party na platform provider
        tulad ng Apple, Google, o iba pang mga awtorisadong payment processor.
      </p>
      <p>Halimbawa:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ang mga pagbili sa mga Apple platform ay maaaring iproseso sa pamamagitan ng App Store at StoreKit system ng Apple.</li>
        <li>Ang mga pagbili sa mga Android platform ay maaaring iproseso sa pamamagitan ng Google Play Billing at mga sistema ng pagbabayad ng Google.</li>
      </ul>
      <p>
        Ang Arcatext at Adalithic LLC ay hindi direktang tumatanggap o nag-iimbak ng kumpletong
        impormasyon ng payment card na ginamit sa pamamagitan ng mga platform billing system na ito.
      </p>
      <p>
        Ang iyong paggamit ng mga third-party na app store, billing system, at payment provider ay
        maaari ring pamahalaan ng sariling mga patakaran sa privacy, mga tuntunin, at mga panuntunan
        sa pagbabayad ng mga provider na iyon.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Mga Pagbabago sa Patakaran sa Privacy na Ito</h3>
      <p>
        Maaari naming i-update ang Patakaran sa Privacy na ito paminsan-minsan upang ipakita ang mga
        pagbabago sa aming app, teknolohiya, mga service provider, legal na obligasyon, o mga
        kagawian sa negosyo.
      </p>
      <p>Kapag ina-update namin ang patakaran, babaguhin namin ang petsa ng "Last Updated" sa itaas.</p>
      <p>
        Kung ang mga pagbabago ay makabuluhan, maaari kaming magbigay ng karagdagang abiso sa
        pamamagitan ng app, website, o iba pang naaangkop na mga pamamaraan.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Makipag-ugnayan sa Amin</h3>
      <p>Kung mayroon kang mga tanong, alalahanin, o kahilingan sa privacy, makipag-ugnayan sa:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext Privacy Contact
        <br />
        Email: arcatextapp@gmail.com
        <br />
        Pahina ng Suporta: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Mga Karapatan sa Privacy na Tukoy sa Rehiyon</h3>
      <p>
        Kung mayroong anumang salungatan sa pagitan ng Patakaran sa Privacy na ito at ng Terms of
        Use sa mga bagay na may kaugnayan sa privacy, ang Patakaran sa Privacy na ito ang
        namamahala.
      </p>
      <p className="font-medium">Ang Iyong Mga Karapatan (Pandaigdigang Buod)</p>
      <p>
        Depende sa kung saan ka nakatira, maaari kang magkaroon ng mga karapatan tungkol sa iyong
        personal na impormasyon, kasama ang karapatang mag-access, magwasto, magtanggal, o
        paghigpitan ang pagproseso ng iyong data, ang karapatan sa portability ng data, ang
        karapatang tumutol sa ilang pagproseso, at ang karapatang bawiin ang pahintulot kung saan
        ang pagproseso ay nakabatay sa pahintulot. Ang mga detalyadong karapatan at kung paano
        gamitin ang mga ito ay nakalatag sa mga seksyong tukoy sa rehiyon sa ibaba. Maaari ka ring
        makipag-ugnayan sa amin sa arcatextapp@gmail.com upang gumawa ng kahilingan, at tutugon kami
        alinsunod sa naaangkop na batas.
      </p>

      <p className="font-medium">
        Rider A — European Economic Area (EEA), European Union, at mga Bansang EFTA
      </p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa: Austria, Belgium, Bulgaria,
        Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece,
        Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland,
        Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Iceland, at Norway.
      </p>
      <p className="font-medium">Mga legal na batayan para sa pagproseso</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Pagganap ng isang kontrata</span> — pagprosesong kinakailangan
          upang maibigay ang pangunahing keyboard, pagsasalin, Rewording, at mga tampok sa wika na
          hinihiling mo.
        </li>
        <li>
          <span className="font-medium">Mga lehitimong interes</span> — seguridad, pag-iwas sa
          pang-aabuso, pagpapabuti ng serbisyo, at pagbuo ng mga sistema ng wika. Nagsagawa kami ng
          balancing test at napagpasyahan na ang mga interes na ito ay hindi napapangibabawan ng iyong
          mga karapatan at kalayaan sa karamihan ng mga kaso.
        </li>
        <li>
          <span className="font-medium">Pahintulot</span> — mga opsyonal na tampok tulad ng pag-imbak
          ng mga na-Reword na mensahe para sa pagkatuto at pagsubaybay sa progreso. Maaari mong bawiin
          ang pahintulot anumang oras sa pamamagitan ng pag-off ng tampok sa app.
        </li>
      </ul>
      <p className="font-medium">Ang iyong mga karapatan</p>
      <p>
        Napapailalim sa naaangkop na mga eksepsiyon, mayroon kang karapatang i-access ang iyong
        personal na data; makakuha ng pagwawasto ng hindi tumpak na data; makakuha ng pagbura ng
        iyong data ("karapatang makalimutan"); makakuha ng paghihigpit sa pagproseso; tanggapin ang
        iyong data sa isang portable na format; tumutol sa pagprosesong nakabatay sa mga lehitimong
        interes; at bawiin ang pahintulot kung saan ang pagproseso ay nakabatay sa pahintulot.
        Maaari mong gamitin ang mga karapatang ito sa pamamagitan ng pakikipag-ugnayan sa amin sa
        arcatextapp@gmail.com. Tutugon kami sa loob ng mga takdang panahong kinakailangan ng batas
        (karaniwang isang buwan, na maaaring palawigin sa mga komplikadong kaso).
      </p>
      <p className="font-medium">Karapatang magreklamo</p>
      <p>
        Mayroon kang karapatang magsampa ng reklamo sa iyong lokal na supervisory authority (data
        protection authority) kung naniniwala kang nilabag ang iyong mga karapatan.
      </p>
      <p className="font-medium">Kinatawan</p>
      <p>
        Ang Adalithic LLC ay nagtalaga ng isang kinatawan sa European Union sa ilalim ng Article 27
        ng GDPR. Ang aming kinatawan ay ang Prighter Group. Maaari kang makipag-ugnayan sa aming
        kinatawan, o gamitin ang iyong mga karapatan bilang data-subject sa pamamagitan nila, gamit
        ang sumusunod na secure na portal:{" "}
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
      <p className="font-medium">Mga internasyonal na paglilipat ng data</p>
      <p>
        Ang iyong impormasyon ay maaaring ilipat sa United States at iba pang mga bansa sa labas ng
        EEA/EFTA. Umaasa kami sa Standard Contractual Clauses (SCCs) na inaprubahan ng European
        Commission bilang pangunahing mekanismo ng paglilipat, kasama ang naaangkop na mga
        karagdagang hakbang (tulad ng encryption at access controls) kung saan kinakailangan.
      </p>
      <p className="font-medium">Pagpapanatili at awtomatikong pagproseso</p>
      <p>
        Ang mga panahon ng pagpapanatili ay inilarawan sa Seksyon 9. Ang awtomatikong pagproseso at
        pagpapabuti ng mga language model sa tekstong isinumite ng user ay nakabatay sa mga
        lehitimong interes o pahintulot (kung saan naaangkop) at napapailalim sa mga pananggang
        inilarawan sa Patakarang ito.
      </p>

      <p className="font-medium">Rider B — United Kingdom</p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa United Kingdom. Ang mga
        probisyon sa Rider A ay nalalapat kasama ang mga sumusunod na pagbabago:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ang mga pagtukoy sa GDPR ay pinapalitan ng UK GDPR.</li>
        <li>Ang supervisory authority ay ang Information Commissioner's Office (ICO).</li>
        <li>
          Ang Adalithic LLC ay nagtalaga ng isang kinatawan sa United Kingdom sa ilalim ng Article 27
          ng UK GDPR. Ang aming kinatawan sa UK ay ang Prighter Group, na maaaring makontak sa
          pamamagitan ng parehong secure na portal:{" "}
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

      <p className="font-medium">Rider C — Switzerland</p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa Switzerland. Mayroon kang mga
        karapatan sa ilalim ng binagong Federal Act on Data Protection (nFADP), kasama ang mga
        karapatan sa access, pagwawasto, at pagbura. Maaari mong gamitin ang mga karapatang ito sa
        pamamagitan ng pakikipag-ugnayan sa amin sa arcatextapp@gmail.com. Ang Adalithic LLC ay
        nagtalaga ng isang kinatawan sa Switzerland sa ilalim ng binagong Federal Act on Data
        Protection. Ang aming kinatawan sa Switzerland ay ang Prighter Group, na maaaring makontak sa
        pamamagitan ng parehong secure na portal:{" "}
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

      <p className="font-medium">Rider D — Canada, kasama ang Québec</p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa Canada, kasama ang Québec.
        Mayroon kang mga karapatan sa ilalim ng PIPEDA at Law 25 ng Québec upang i-access at itama
        ang iyong personal na impormasyon at upang bawiin ang pahintulot sa ilang pagproseso. Maaari
        mong gamitin ang mga karapatang ito sa pamamagitan ng pakikipag-ugnayan sa amin sa
        arcatextapp@gmail.com. Isang bersyon sa wikang Pranses ng Patakaran sa Privacy na ito ay
        ibinibigay para sa mga residente ng Québec. Sa kaso ng isang paglabag sa data na
        nagdudulot ng tunay na panganib ng malaking pinsala, aabisuhan namin ang mga apektadong
        indibidwal at ang mga kaugnay na awtoridad ayon sa kinakailangan ng naaangkop na batas.
      </p>

      <p className="font-medium">Rider E — United States</p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa United States. Ang mga
        residente ng California ay may mga karapatang inilarawan sa California Privacy Notice sa
        Seksyon 15 sa itaas, kasama ang mga karapatang malaman, magtanggal, at magwasto ng personal na
        impormasyon at upang mag-opt out sa anumang pagbebenta o pagbabahagi. Ang Adalithic LLC ay
        hindi nagbebenta o nagbabahagi ng iyong personal na impormasyon para sa cross-context na
        behavioral advertising, at hindi ka madidiskrimina sa paggamit ng iyong mga karapatan. Ang
        iba pang mga batas sa privacy ng estado ng U.S. ay maaaring nalalapat depende sa iyong estado
        ng paninirahan, at igagalang namin ang mga naaangkop na karapatan kung saan kinakailangan.
        Upang gamitin ang mga karapatang ito, makipag-ugnayan sa amin sa arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Rider F — Iba Pang mga Bansa at Rehiyon</p>
      <p>
        Ang Rider na ito ay nalalapat sa mga consumer na naninirahan sa lahat ng iba pang mga bansa at
        rehiyon kung saan inaalok ang Arcatext (hindi kasama ang mga sanctioned o embargoed na
        hurisdiksyon). Kung saan ang lokal na batas ay nagbibigay sa iyo ng karagdagang mga
        karapatan sa privacy na hindi maaaring iwaksi (halimbawa sa ilalim ng mga batas tulad ng
        LGPD ng Brazil o mga batas sa privacy sa Japan, South Korea, Australia, India, at iba pang
        mga hurisdiksyon), ang mga karapatang iyon ay nalalapat. Maaari kang makipag-ugnayan sa amin
        sa arcatextapp@gmail.com upang gamitin ang anumang mga karapatang iyon, at tutugon kami
        alinsunod sa naaangkop na lokal na batas.
      </p>
    </div>
  );
}
