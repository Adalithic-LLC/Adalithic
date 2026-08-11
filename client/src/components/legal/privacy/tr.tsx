// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyTr() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Adalithic LLC tarafından işletilmektedir</p>
      <p>Son Güncelleme: August 11, 2026</p>
      <p>
        Arcatext, kullanıcıların diller arasında mesaj yazmasına, çevirmesine, yeniden
        ifade etmesine ve mesajları daha iyi anlamasına yardımcı olmak için tasarlanmış özel bir
        klavye ve dil uygulamasıdır. Bu Gizlilik Politikası, Arcatext'in hangi bilgileri işlediğini,
        bu bilgilerin nasıl kullanıldığını, ne zaman saklandığını, ne zaman paylaşılabileceğini ve
        hangi seçeneklere sahip olduğunuzu açıklar.
      </p>
      <p>Arcatext'i kullanarak, bu Gizlilik Politikasında açıklanan uygulamaları kabul etmiş olursunuz.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Biz Kimiz</h3>
      <p>Arcatext, Adalithic LLC tarafından işletilmektedir.</p>
      <p>Gizlilik ile ilgili sorularınız için bizimle iletişime geçin:</p>
      <p>
        E-posta: arcatextapp@gmail.com
        <br />
        Destek Sayfası: https://adalithic.com/
      </p>
      <p>Bu iletişim bilgileri değişirse, bu Gizlilik Politikasını güncelleyeceğiz.</p>

      <h3 className="font-semibold text-secondary pt-2">2. İşlediğimiz Bilgiler</h3>
      <p>
        Arcatext, yalnızca uygulamanın dil özelliklerini sağlamak, geliştirmek, kişiselleştirmek
        ve desteklemek için gereken bilgileri işlemek üzere tasarlanmıştır.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Basit ifadeyle</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext verilerinizi hiç kimseye satmaz.</li>
          <li>Yalnızca Yeniden İfade edilen mesajları takip ederiz (Yeniden İfade Et düğmesine dokunmanız gerekir; bu nedenle Yeniden İfade Et'e dokunmadan klavyeyle yazarsanız hiçbir mesaj takip edilmez veya saklanmaz).</li>
          <li>Verileri, dil yeterliliğinizi daha iyi anlamak ve öğrenme özellikleri sunmak için kullanırız. Ne yazdığınızla kişisel olarak ilgilenmiyoruz, yalnızca dil öğreniminizi hızlandırmanıza yardımcı olmak istiyoruz!</li>
          <li>Belirli Yeniden İfade edilen metinleri filtreler ve saklamayız (örneğin şifreler, kart numaraları ve kodlar — tam liste için Bölüm 7'ye bakın).</li>
          <li>Yeniden İfade takibini istediğiniz zaman açıp kapatabilirsiniz (ana Arcatext uygulamasında). Öğrenme özelliklerini sunabilmemiz için varsayılan olarak 'açık' durumdadır.</li>
        </ol>
      </div>
      <p className="font-medium">A. Çevirmeyi, Yeniden İfade Etmeyi, Kontrol Etmeyi veya Analiz Etmeyi Seçtiğiniz Metin</p>
      <p>
        Çeviri, Yeniden İfade Etme, ters çeviri, eş anlamlı önerileri, dilbilgisi yardımı, anlam
        netleştirme veya öğrenme geri bildirimi gibi Arcatext özelliklerini kullandığınızda,
        gönderdiğiniz metin Arcatext tarafından işlenebilir ve istenen özelliğin çalışabilmesi için
        üçüncü taraf yapay zeka hizmet sağlayıcılarına gönderilebilir.
      </p>
      <p>Bu şunları içerebilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Arcatext klavyesine yazdığınız mesajlar</li>
        <li>Yeniden İfade Etmeyi seçtiğiniz mesajlar</li>
        <li>Çeviri veya yeniden ifade etme için seçtiğiniz metin</li>
        <li>Arcatext'ten kontrol etmesini, açıklamasını veya dönüştürmesini istediğiniz metin</li>
        <li>
          Seçili dil, yazı sistemi, ton, resmiyet veya cinsiyet ayarları gibi çeviri veya Yeniden
          İfade Etme kalitesini artırmak için gereken bağlam
        </li>
      </ul>
      <p className="font-medium">B. Profilinize Bağlı Yeniden İfade Edilen Mesajlar</p>
      <p>Arcatext, aşağıdakileri sağlamak için Yeniden İfade Ettiğiniz mesajları saklayabilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Performans ölçümleri</li>
        <li>İlerleme takibi</li>
        <li>Kişiselleştirilmiş öğrenme özellikleri</li>
        <li>Yazma geçmişi</li>
        <li>Dil öğrenimi içgörüleri</li>
        <li>Diğer Arcatext özellikleri</li>
      </ul>
      <p>
        Bu Yeniden İfade edilen mesajlar, uygulamanın size aşağıdaki gibi bilgileri gösterebilmesi
        için Arcatext profilinize bağlanabilir:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Yeniden İfade Etme geçmişiniz</li>
        <li>Öğrenme ilerlemeniz</li>
        <li>Dil pratik alışkanlıklarınız</li>
        <li>En çok kullandığınız diller veya özellikler</li>
        <li>Arcatext kullanımınızla ilgili performans ölçümleri</li>
        <li>Kişiselleştirilmiş öneriler veya öğrenme araçları</li>
      </ul>
      <p>
        Profilinize bağlı kalan Yeniden İfade edilen mesajlar, gizli kullanıcı verisi olarak ele
        alınır. Adalithic LLC, profile bağlı Yeniden İfade edilen mesajları dış şirketlere,
        reklamcılara, veri simsarlarına veya ilgisiz üçüncü taraflara satmaz, lisanslamaz veya
        paylaşmaz.
      </p>
      <p>
        Profile bağlı Yeniden İfade edilen mesajlar, Arcatext'in özelliklerini sağlamak,
        uygulamayı sürdürmek, kullanıcı deneyimini iyileştirmek ve öğrenme ile ilgili işlevleri
        desteklemek için Adalithic LLC tarafından dahili olarak kullanılır.
      </p>
      <p className="font-medium">C. Klavye Ayarları ve Dil Tercihleri</p>
      <p>Arcatext, aşağıdaki gibi uygulama ayarlarını ve dil tercihlerini işleyebilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kaynak dil</li>
        <li>Hedef dil</li>
        <li>Klavye dili</li>
        <li>Standart yazı sistemi veya romanize metin gibi alfabe veya yazı sistemi seçenekleri</li>
        <li>
          Çeviri doğruluğu için gerektiğinde konuşmacı cinsiyeti, alıcı cinsiyeti veya grup sohbeti
          cinsiyet ayarları
        </li>
        <li>Ton, resmiyet veya öğrenme tercihleri</li>
        <li>Uygulama içindeki özellik tercihleri</li>
      </ul>
      <p>
        Bu ayarlar klavye, çeviri, Yeniden İfade Etme ve öğrenme deneyimini sağlamak için
        kullanılır. Bazı ayarlar cihazınızda yerel olarak saklanabilir veya bir Arcatext hesabı
        oluşturur ya da kullanırsanız profilinize bağlanabilir.
      </p>
      <p className="font-medium">D. Hesap Bilgileri</p>
      <p>
        Arcatext hesap tabanlı özellikler sunuyorsa, aşağıdaki gibi hesap bilgilerini toplayıp
        saklayabiliriz:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>E-posta adresi</li>
        <li>Kullanıcı adı</li>
        <li>Şifre veya kimlik doğrulama bilgileri</li>
        <li>Abonelik durumu</li>
        <li>Uygulama tercihleri</li>
        <li>Profil ayarları</li>
      </ul>
      <p>
        Şifreler, kullanılıyorsa, düz metin olarak saklanmaz. Kimlik doğrulama ayrıca üçüncü taraf
        kimlik sağlayıcıları, uygulama mağazası sağlayıcıları veya platform hizmetleri tarafından
        da yönetilebilir.
      </p>
      <p className="font-medium">E. Cihaz ve Platform Bilgileri</p>
      <p>
        Arcatext, işlevselliği sağlamak, ayarları başlatmak, performansı iyileştirmek ve cihazlar
        ile işletim sistemleri arasında uyumluluğu desteklemek için gereken cihaz ve platform
        bilgilerine erişebilir.
      </p>
      <p>Bu şunları içerebilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Cihaz dil ayarları</li>
        <li>Cihaz türü</li>
        <li>İşletim sistemi sürümü</li>
        <li>Uygulama sürümü</li>
        <li>Platformla ilgili yapılandırma bilgileri</li>
        <li>İzin durumu bilgileri</li>
      </ul>
      <p>
        Bu bilgiler, uygulama deneyimini yapılandırmak ve desteklemek için kullanılır ve sizi
        doğrudan tanımlamak amaçlı değildir.
      </p>
      <p className="font-medium">F. Temel Teknik ve Tanılama Bilgileri</p>
      <p>
        Arcatext, uygulamayı çalıştırmak, güvence altına almak, iyileştirmek veya sorunlarını
        gidermek için gereken sınırlı teknik bilgileri işleyebilir, örneğin:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Çökme günlükleri</li>
        <li>Performans verileri</li>
        <li>Hata raporları</li>
        <li>Temel kullanım olayları</li>
        <li>Bir özelliğin açılıp açılmadığı, tamamlanıp tamamlanmadığı veya başarısız olup olmadığı</li>
      </ul>
      <p>Mümkün olduğunda, bu bilgiler sizi doğrudan tanımlamayacak şekilde toplanır.</p>
      <p className="font-medium">G. Anonim yazım ve Glide kalitesi tanılamaları</p>
      <p>
        Otomatik düzeltmeyi ve Glide (kaydırarak) yazmayı ölçmek ve iyileştirmek için Arcatext, bu özelliklerin ne kadar iyi çalıştığına dair anonim, toplu tanılama verileri toplar. Bu bilgiler, hesabınıza, adınıza, e-posta adresinize veya cihaz kimliğinize bağlı olmayan, kuruluma özgü rastgele bir tanımlayıcıyla ilişkilendirilir.
      </p>
      <p>Otomatik düzeltme için bu şunları içerir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Otomatik düzeltmelerin ne sıklıkta korunduğu veya geri alındığı</li>
        <li>Hangi harfin hangi başka harfle değiştirildiğine dair toplu sayımlar</li>
        <li>Tuş vuruşu sayısı</li>
        <li>Anonim dokunma isabet ölçümleri (dokunuşların tuş merkezine ne kadar yakın düştüğü)</li>
        <li>Uygulamanın mevcut düzeltme ayarları</li>
      </ul>
      <p>Glide yazımı için bu şunları içerir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kaç kaydırmanın bir kelime ürettiği</li>
        <li>Ne sıklıkta farklı bir öneri seçtiğiniz veya sonucu sildiğiniz</li>
        <li>İstenen kelimenin öneri listesinde kaçıncı sırada göründüğü</li>
        <li>Kaydırma geometrisine dair anonim ölçümler; örneğin tipik hız, düzgünlük ve kaydırmaların tuş merkezlerinden ne kadar uzaktan geçtiği</li>
        <li>Uygulamanın mevcut Glide ayarları</li>
      </ul>
      <p>Her ikisi de ayrıca uygulama sürümünüzü, işletim sistemi sürümünüzü ve etkin klavye dilinizi içerir.</p>
      <p>Hiçbiri, yazdığınız kelimeleri, harfleri veya mesajları asla içermez. Hiçbir şekilde yazılan içerik toplanmaz. Toplu harf değişikliği ve kaydırma geometrisi sayımları, yazdığınız hiçbir şeyi yeniden oluşturmak için kullanılamaz. Bu bilgiler yalnızca yazım kalitesini ölçmek ve iyileştirmek için kullanılır. Satılmaz, reklam amacıyla paylaşılmaz ve sizi diğer şirketlerin uygulamaları veya web siteleri genelinde izlemek için kullanılmaz.</p>
      <p>Bunu istediğiniz zaman ana Arcatext uygulamasında, Reword veri depolama ayarlarından kapatabilirsiniz. Varsayılan olarak açıktır ve bu tek denetim hem otomatik düzeltme hem de Glide tanılamalarını kapsar.</p>
      <p className="font-medium">H. Kasıtlı Olarak Toplamadığımız Bilgiler</p>
      <p>Arcatext kasıtlı olarak şunları toplamaz:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kesin konumunuz</li>
        <li>Kişileriniz</li>
        <li>Fotoğraflarınız</li>
        <li>Tam ödeme kartı bilgileriniz</li>
        <li>Arcatext özellikleri dışında yazdığınız her şeyin içeriği</li>
        <li>Diğer uygulamalara yazılan şifreler</li>
        <li>Diğer uygulamalara yazılan güvenlik kodları</li>
      </ul>
      <p>
        Arcatext, Arcatext özellikleri aracılığıyla göndermeyi seçtiğiniz metni işler. Arcatext,
        yazdığınız tüm metni gizlice toplamak için klavye izinlerini kullanmaz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Özel Klavye İzinleri ve Ağ Erişimi
      </h3>
      <p>
        Arcatext, üçüncü taraf bir klavye ve dil aracı olarak işlev görür. Bazı özellikler,
        cihazınıza, işletim sisteminize veya platformunuza bağlı olarak ek izinler, internet
        bağlantısı veya cihaz düzeyinde erişim gerektirebilir.
      </p>
      <p>Örneğin:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Apple cihazlarında, kullanıcıların belirli klavye ve çevrimiçi dil özellikleri için "Tam
          Erişime İzin Ver" seçeneğini etkinleştirmesi gerekebilir.
        </li>
        <li>
          Android cihazlarında, kullanıcılardan klavye işlevselliği, internet erişimi, bildirimler
          veya uygulama özellikleriyle ilgili izinleri vermeleri istenebilir.
        </li>
      </ul>
      <p>Bu izinler aşağıdaki gibi özellikler için gerekli olabilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Yapay zeka çevirisi</li>
        <li>Yeniden İfade Etme</li>
        <li>Ters çeviri</li>
        <li>Dil kontrolü</li>
        <li>Performans ölçümleri</li>
        <li>Öğrenme özellikleri</li>
        <li>Bulut tabanlı dil işleme</li>
        <li>Hesap senkronizasyonu</li>
      </ul>
      <p>
        Bu izinler etkinleştirildiğinde, Arcatext, istenen özelliğin çalışabilmesi için işlemeyi
        seçtiğiniz metni hizmet sağlayıcılarımıza gönderebilir.
      </p>
      <p>
        Arcatext, yazdığınız her şeyi gizlice toplamak, ilgisiz yazma etkinliklerini takip etmek
        veya Arcatext özellikleri dışındaki bilgileri izlemek için klavye izinlerini kullanmaz.
      </p>
      <p>
        Arcatext'i şifreleri, ödeme bilgilerini, güvenlik kodlarını veya diğer son derece hassas
        bilgileri yazmak için kullanmamalısınız. Bazı işletim sistemleri şifre alanları için
        otomatik olarak sistem klavyesine geçebilir, ancak kullanıcılar hassas bilgi girerken yine
        de dikkatli olmalıdır.
      </p>
      <p>
        Cihaz ayarlarınız aracılığıyla klavye izinlerini, internet izinlerini veya ilgili erişim
        ayarlarını istediğiniz zaman devre dışı bırakabilirsiniz, ancak bazı Arcatext özellikleri
        düzgün çalışmayı durdurabilir.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Bilgileri Nasıl Kullanırız</h3>
      <p>
        Arcatext, bilgileri uygulamayı sağlamak, kişiselleştirmek, analiz etmek, güvence altına
        almak ve iyileştirmekle ilgili amaçlarla kullanır.
      </p>
      <p>Bilgileri şu amaçlarla kullanabiliriz:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Metni çevirmek</li>
        <li>Mesajları Yeniden İfade Etmek</li>
        <li>Alternatif ifadeler veya eş anlamlılar sağlamak</li>
        <li>Bir çevirinin anlamını kontrol etmek</li>
        <li>Dil seçimlerini açıklamak</li>
        <li>Farklı yazı sistemlerini veya romanizasyon seçeneklerini desteklemek</li>
        <li>Cinsiyet, ton veya resmiyet ayarlarını uygulamak</li>
        <li>Kullanıcıya yönelik öğrenme özellikleri için Yeniden İfade edilen mesajları saklamak</li>
        <li>Performans ölçümleri ve ilerleme takibi sağlamak</li>
        <li>Dil öğrenimi önerilerini kişiselleştirmek</li>
        <li>Uygulama güvenilirliğini ve performansını iyileştirmek</li>
        <li>Arcatext'in dil sistemlerini ve büyük dil modeli özelliklerini iyileştirmek</li>
        <li>Hataları, çökmeleri, kötüye kullanımı veya güvenlik sorunlarını tespit etmek</li>
        <li>Uygulama güvenliğini sürdürmek</li>
        <li>Destek taleplerine yanıt vermek</li>
        <li>Yasal yükümlülüklere uymak</li>
      </ul>
      <p>Profile bağlı Yeniden İfade edilen mesajları reklam profilleri oluşturmak için kullanmayız.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. Yapay Zeka İşleme ve Üçüncü Taraf Hizmet Sağlayıcılar
      </h3>
      <p>
        Çeviri ve dil özelliklerini sağlamak için Arcatext, gönderilen metni ve ilgili ayarları
        üçüncü taraf yapay zeka model sağlayıcılarına ve diğer hizmet sağlayıcılara gönderebilir.
      </p>
      <p>
        Bu sağlayıcılar, çeviriler, Yeniden İfade Etmeler, açıklamalar veya diğer dil çıktılarını
        döndürmek için metni işler. Verileri işlemeleri kendi gizlilik politikaları, koşulları ve
        işleme uygulamalarına tabidir.
      </p>
      <p>
        Bu politikanın son güncellemesi itibarıyla, yapay zeka model sağlayıcılarımız, API'leri
        aracılığıyla gönderilen verilerin, müşteri katılım tercihinde bulunmadıkça, varsayılan
        olarak modellerini eğitmek veya iyileştirmek için kullanılmadığını belirtmektedir. Bu
        politika aksini belirtecek şekilde güncellenmedikçe, Arcatext, kullanıcı tarafından
        gönderilen çeviri içeriği için model eğitimine kasıtlı olarak katılım tercihinde bulunmaz.
      </p>
      <p>Arcatext ayrıca aşağıdakiler için hizmet sağlayıcıları kullanabilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Uygulama barındırma</li>
        <li>Veritabanı depolama</li>
        <li>Analitik</li>
        <li>Çökme raporlama</li>
        <li>Müşteri desteği</li>
        <li>Güvenlik izleme</li>
        <li>Kimlik doğrulama</li>
        <li>Ödeme işleme</li>
        <li>Yapay zeka işleme ve dil modeli işlevselliği</li>
      </ul>
      <p>
        Bu sağlayıcıların bilgileri yalnızca Arcatext ve Adalithic LLC'ye hizmet sağlamak için
        gerektiği kadar işlemelerine izin verilir.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Yeniden İfade Edilen Mesajların Saklanması</h3>
      <p>Arcatext, aşağıdakileri sağlayabilmemiz için Yeniden İfade Ettiğiniz mesajları saklayabilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Performans ölçümleri</li>
        <li>Öğrenme özellikleri</li>
        <li>Kullanıcı geçmişi</li>
        <li>İlerleme takibi</li>
        <li>Kişiselleştirilmiş dil araçları</li>
      </ul>
      <p>
        Yeniden İfade edilen mesajlar profilinize bağlandığında, hesabınız, e-posta adresiniz,
        kullanıcı adınız, uygulama tercihleriniz veya kullanım geçmişiniz gibi bilgilerle
        ilişkilendirilebilir. Bu bağlantı, Arcatext'in kişiselleştirilmiş özellikler sağlamasına
        olanak tanır.
      </p>
      <p>
        Profile bağlı Yeniden İfade edilen mesajlar gizlidir ve Arcatext'i çalıştırmak için verileri
        bizim adımıza işleyen hizmet sağlayıcılar dışında Adalithic LLC dışına satılmaz, lisanslanmaz
        veya paylaşılmaz.
      </p>
      <p>Saklanan Yeniden İfade edilen mesajlara dayanabilecek özelliklerin örnekleri şunlardır:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Zaman içindeki gelişiminizi takip etme</li>
        <li>Dil öğrenimi istatistiklerini gösterme</li>
        <li>Geçmiş Yeniden İfade edilen mesajları gözden geçirmenize yardımcı olma</li>
        <li>Dilbilgisi veya kelime dağarcığı örüntülerini belirleme</li>
        <li>Kişiselleştirilmiş önerileri iyileştirme</li>
        <li>Arcatext içindeki gelecekteki öğrenme araçlarını destekleme</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Neleri Filtreliyoruz ve Asla Saklamıyor veya Kaydetmiyoruz
      </h3>
      <p>
        Sizi korumak için Arcatext, herhangi bir Yeniden İfade edilen giriş saklanmadan önce metni
        cihazınızda otomatik olarak tarar. Hassas bir şey tespit ettiğinde, girişin tamamını atar —
        kısaltılmış veya redakte edilmiş bir sürüm saklamaz ve profilinize hiçbir şey bağlanmaz.
      </p>
      <p>Bir Yeniden İfade edilen giriş şu durumlarda saklanMAZ:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Güvenli veya hassas alanlar</span> — bir şifre veya güvenli
          giriş alanına ya da e-posta, telefon numaraları, PIN veya sayısal kodlar, URL'ler ya da
          arama için ayrılmış bir alana yazıyorsanız.
        </li>
        <li>
          <span className="font-medium">E-posta adresleri</span> — metin bir e-posta adresi
          içeriyorsa.
        </li>
        <li>
          <span className="font-medium">Ödeme kartı numaraları</span> — metin, kredi veya banka
          kartı numarasına benzeyen 13–16 haneli bir dizi içeriyorsa.
        </li>
        <li>
          <span className="font-medium">Doğrulama veya tek seferlik kodlar</span> — metin, tek
          başına 4–8 haneli bir kod içeriyorsa.
        </li>
        <li>
          <span className="font-medium">Hesap veya kimlik numaraları</span> — metin, 9 veya daha
          fazla haneli uzun, kesintisiz bir dizi içeriyorsa.
        </li>
        <li>
          <span className="font-medium">Şifreler, API anahtarları ve diğer sırlar</span> — metin,
          bir şifre, anahtar veya diğer rastgele sırra benzeyen yüksek entropili bir belirteç
          içeriyorsa.
        </li>
      </ul>
      <p>Şüphe durumunda, Arcatext saklamama yönünde hareket eder.</p>
      <p>
        <span className="font-medium">Sunucu günlükleri.</span> Sunucularımız mesajlarınızın
        içeriğini asla kaydetmez. Günlükler yalnızca operasyonel meta verileri kaydeder — bir hesap
        tanımlayıcısı, istek durumu, zamanlama ve şeffaf olmayan bir istek kimliği — hizmeti
        güvenilir tutmak ve sorunları teşhis etmek için kullanılır.
      </p>
      <p>
        <span className="font-medium">Kontrolünüz.</span> Yeniden İfade saklamayı Arcatext
        uygulamasında istediğiniz zaman tamamen kapatabilirsiniz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonimleştirilmiş ve Kimliksizleştirilmiş Dil Verileri
      </h3>
      <p>
        Arcatext ve Adalithic LLC, dil sistemlerini, çeviri kalitesini, Yeniden İfade Etme
        özelliklerini ve büyük dil modeli performansını iyileştirmek için saklanan mesajları ve dil
        etkileşimlerini kullanabilir.
      </p>
      <p>
        Arcatext ve Adalithic LLC ayrıca, kullanıcı tarafından gönderilen mesajlardan türetilen
        anonimleştirilmiş, kimliksizleştirilmiş veya toplulaştırılmış dil veri kümeleri
        oluşturabilir. Bu veri kümeleri, Arcatext'in dil özelliklerini ve kalitesini iyileştirmek
        için Adalithic LLC tarafından dahili olarak kullanılır. Bu veri kümelerini üçüncü taraflara
        satmaz, lisanslamaz veya paylaşmayız.
      </p>
      <p>
        Anonimleştirilmiş veya kimliksizleştirilmiş veri kümeleri, sizi kişisel olarak tanımlamak
        veya belirli bir kullanıcı profiliyle ilişkilendirmek amaçlı değildir. Ancak hiçbir
        anonimleştirme veya kimliksizleştirme süreci, her koşulda yeniden tanımlamanın imkansız
        olduğunu garanti edemez. Adalithic LLC, bu riski azaltmak için tasarlanmış makul güvenlik
        önlemleri kullanır.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Veri Saklama, Hesap Silme ve Silinme Hakkınız
      </h3>
      <p>
        Bilgileri yalnızca bu Gizlilik Politikasında açıklanan amaçlar için makul ölçüde gerekli
        olduğu sürece saklarız, yasa daha uzun bir saklama süresi gerektirmedikçe.
      </p>
      <p>Genel olarak:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Profilinize bağlı Yeniden İfade edilen mesajlar, hesabınız etkin olduğu sürece veya
          özellikleri ve ölçümleri sağlamak için gerektiği kadar saklanabilir.
        </li>
        <li>Uygulama tercihleri cihazınızda yerel olarak saklanabilir veya profilinize bağlanabilir.</li>
        <li>
          Teknik günlükler, hata ayıklama, güvenilirlik, kötüye kullanımı önleme veya güvenlik
          amaçlarıyla geçici olarak saklanabilir.
        </li>
        <li>
          Destek mesajları, kullanıcılara yanıt vermek ve destek kayıtlarını tutmak için gerektiği
          kadar saklanabilir.
        </li>
        <li>
          Anonimleştirilmiş, kimliksizleştirilmiş veya toplulaştırılmış veri kümeleri, belirli bir
          kullanıcıyı tanımlamak amaçlı olmadığından daha uzun süre saklanabilir.
        </li>
        <li>
          Yeniden İfade edilen mesajların anonim günlükleri, aşağıda açıklandığı gibi, hesabınız
          silindikten sonra da saklanabilir.
        </li>
      </ul>
      <p>
        Arcatext hesabınızı uygulama içinden istediğiniz zaman silebilirsiniz. Hesabınızı
        sildiğinizde, e-posta adresiniz, kullanıcı adınız ve kimlik doğrulama bilgileriniz dahil
        profilinizi ve hesap bilgilerinizi kaldırırız.
      </p>
      <p>
        Arcatext, bir hesap silindikten sonra bile Yeniden İfade edilen mesajların anonim
        günlüklerini tutar. Bu, kullanıcıların aynı tanımlayıcıyla (yani bir e-posta adresi) tekrar
        hesap oluşturmaları durumunda mesajlaşma geçmişlerinden yararlanmalarına olanak tanır. Bu
        ayrıca Arcatext'in kendi dahili yapay zeka modellerini anonim Yeniden İfade edilen mesaj
        verileri üzerinde eğitmeye devam etmesine yardımcı olur.
      </p>
      <p>
        Bu saklanan günlükleri anonim tutmak için, e-posta adresiniz silme sırasında tek yönlü,
        geri döndürülemez bir tanımlayıcı ile değiştirilir. Saklanan Yeniden İfade edilen mesajlar
        e-posta adresinizle saklanmaz ve Arcatext personeli tarafından okunamaz veya size geri
        bağlanamaz. Daha sonra aynı e-posta adresini kullanarak yeni bir hesap oluşturursanız, bu
        mesajlar yeni hesabınıza yeniden bağlanabilir.
      </p>
      <p>
        <span className="font-medium">Tam silme talebinde bulunma.</span> Saklanan Yeniden İfade
        edilen mesaj verilerinizin anonim biçimde saklanmak yerine kalıcı ve tamamen silinmesini
        tercih ederseniz, "Data Erasure Request" konu satırıyla arcatextapp@gmail.com adresinden
        bizimle iletişime geçebilirsiniz. Verilerini silmek istediğiniz hesabın e-posta adresini
        ekleyin. Bu talep e-postası, söz konusu hesapla ilişkili aynı e-postadan gönderilmelidir.
        Veri silme talepleri yalnızca zaten silinmiş hesaplar için yapılabilir. İlgili saklanan
        verileri geçerli yasaya uygun olarak sileceğiz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Hassas Bilgiler</h3>
      <p>
        Arcatext bir dil aracıdır, güvenli bir kasa değildir. Çeviri, Yeniden İfade Etme, kontrol
        etme veya öğrenme özellikleri için son derece hassas bilgiler göndermemelisiniz.
      </p>
      <p>Şunları girmekten kaçının:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Şifreler</li>
        <li>Kredi kartı numaraları</li>
        <li>Banka bilgileri</li>
        <li>Sosyal güvenlik numaraları veya devlet kimlikleri</li>
        <li>Tıbbi kayıtlar</li>
        <li>Yasal sırlar</li>
        <li>Özel adresler</li>
        <li>Gizli iş bilgileri</li>
        <li>
          Dille ilgili kullanımlar için işlenmesini veya saklanmasını istemediğiniz son derece
          hassas kişisel mesajlar
        </li>
      </ul>
      <p>
        Hassas bilgiler göndermeyi seçerseniz, bunun istenen özelliği sağlamak için Arcatext ve
        hizmet sağlayıcıları tarafından işlenebileceğini anlamış olursunuz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Çocukların Gizliliği</h3>
      <p>Arcatext, 13 yaşın altındaki çocuklar için tasarlanmamıştır.</p>
      <p>
        13 yaşın altındaysanız, ebeveyniniz, yasal vasiniz, okulunuz veya yetkili eğitim kurumunuz
        geçerli yasanın izin verdiği bir şekilde kullanımınızı onaylamadıkça Arcatext'i
        kullanamazsınız.
      </p>
      <p>
        Adalithic LLC, 13 yaşın altındaki bir çocuktan kişisel bilgilerin geçerli yasayı ihlal
        edecek şekilde toplandığının farkına varırsa, uygun olduğunda bu bilgileri kısıtlamak veya
        silmek için tasarlanmış adımlar atabiliriz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Uluslararası Veri Aktarımları</h3>
      <p>
        Arcatext ve hizmet sağlayıcıları bilgileri Amerika Birleşik Devletleri'nde veya diğer
        ülkelerde işleyebilir. Bu ülkeler, bulunduğunuz yerdeki yasalardan farklı gizlilik yasalarına
        sahip olabilir.
      </p>
      <p>
        Arcatext'i kullanarak, bilgilerinizin ikamet ettiğiniz yer dışındaki ülkelerde
        işlenebileceğini anlamış olursunuz. Kullandığımız güvenlik önlemleri de dahil olmak üzere
        aktarımlar hakkında ek bilgiler aşağıdaki Bölgeye Özel Gizlilik Hakları bölümünde yer alır.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Seçenekleriniz</h3>
      <p>Bilgileriniz konusunda çeşitli seçenekleriniz vardır.</p>
      <p className="font-medium">Klavye İzinleri ve Erişim Ayarları</p>
      <p>
        Klavye izinlerini, internet izinlerini veya ilgili erişim ayarlarını cihazınız veya işletim
        sistemi ayarlarınız aracılığıyla devre dışı bırakabilirsiniz. Çevrimiçi işleme veya klavye
        entegrasyonuna dayanan bazı Arcatext özellikleri artık düzgün çalışmayabilir.
      </p>
      <p className="font-medium">Klavyeyi Kullanmayı Bırakma</p>
      <p>Arcatext'i klavye listenizden kaldırabilir veya uygulamayı istediğiniz zaman kaldırabilirsiniz.</p>
      <p className="font-medium">Gönderdiklerinizi Sınırlama</p>
      <p>
        Çeviri, Yeniden İfade Etme, kontrol etme veya öğrenme özellikleri için hassas veya kişisel
        metin göndermemeyi seçebilirsiniz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Gizlilik Talepleri</h3>
      <p>
        Bilgileriniz veya bu Gizlilik Politikası hakkında sorularınız varsa, Adalithic LLC ile şu
        adresten iletişime geçebilirsiniz:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC, talepleri geçerli yasaya ve şirketin operasyonel yeteneklerine uygun olarak
        inceleyip yanıtlayabilir.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Kaliforniya Gizlilik Bildirimi</h3>
      <p>
        Bir Kaliforniya sakiniyseniz, bu bölüm ek bilgiler sağlar.
      </p>
      <p>Arcatext aşağıdaki bilgi kategorilerini işleyebilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Kullanıcı tarafından gönderilen içerik</span> — Çeviri,
          Yeniden İfade Etme, kontrol etme veya analiz için gönderilen metin. Amaç: dil özellikleri
          sağlamak.
        </li>
        <li>
          <span className="font-medium">Saklanan Yeniden İfade edilen mesajlar</span> — Profilinize
          bağlanabilecek Yeniden İfade Ettiğiniz mesajlar. Amaç: ölçümler, geçmiş ve öğrenme
          özellikleri sağlamak.
        </li>
        <li>
          <span className="font-medium">Hesap bilgileri</span> — E-posta adresi, kullanıcı adı,
          kimlik doğrulama bilgileri. Amaç: hesap tabanlı özellikler sağlamak.
        </li>
        <li>
          <span className="font-medium">Tercihler</span> — Dil, yazı sistemi, ton, cinsiyet ve
          klavye ayarları. Amaç: uygulamayı özelleştirmek.
        </li>
        <li>
          <span className="font-medium">Teknik bilgiler</span> — Uygulama sürümü, çökme günlükleri,
          cihaz türü, işletim sistemi. Amaç: uygulamayı sürdürmek ve iyileştirmek.
        </li>
        <li>
          <span className="font-medium">Destek bilgileri</span> — Bize gönderdiğiniz e-postalar veya
          mesajlar. Amaç: destek taleplerine yanıt vermek.
        </li>
        <li>
          <span className="font-medium">Kimliksizleştirilmiş dil verileri</span> — Kullanıcı
          gönderilerinden türetilen anonimleştirilmiş veya toplulaştırılmış dil örnekleri. Amaç: dil
          sistemlerini iyileştirmek.
        </li>
      </ul>
      <p>Adalithic LLC kişisel bilgilerinizi satmaz veya paylaşmaz.</p>
      <p>Gizlilik haklarınız hakkında sorularınız varsa, arcatextapp@gmail.com ile iletişime geçin.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Güvenlik</h3>
      <p>
        Arcatext aracılığıyla işlenen bilgileri korumak için makul teknik ve organizasyonel önlemler
        kullanırız.
      </p>
      <p>
        Profile bağlı Yeniden İfade edilen mesajlar, gizli kullanıcı verisi olarak ele alınır. Bu
        bilgilere erişimi, Arcatext'i çalıştırmak, güvence altına almak, iyileştirmek veya desteklemek
        için erişime ihtiyaç duyan yetkili personel ve hizmet sağlayıcılarla sınırlandırmak için
        tasarlanmış adımlar atarız.
      </p>
      <p>
        Ancak, hiçbir elektronik depolama veya internet iletim yöntemi tamamen güvenli değildir.
        Mutlak güvenliği garanti edemeyiz.
      </p>
      <p>Arcatext aracılığıyla hangi bilgileri göndereceğinize karar vermekten siz sorumlusunuz.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Veri Paylaşımı</h3>
      <p>Arcatext ve Adalithic LLC, sınırlı durumlarda bilgi paylaşabilir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Çeviri, Yeniden İfade Etme, kontrol etme ve dil özellikleri sağlamak için yapay zeka sağlayıcılarıyla</li>
        <li>Uygulamayı çalıştırmaya, güvence altına almaya, saklamaya, analiz etmeye veya iyileştirmeye yardımcı olan hizmet sağlayıcılarla</li>
        <li>Analitik veya çökme raporlama sağlayıcılarıyla</li>
        <li>Ödeme işlemcileri veya uygulama mağazası sağlayıcılarıyla</li>
        <li>Yasa veya yasal süreç gerektiriyorsa</li>
        <li>Arcatext'in, kullanıcıların, Adalithic LLC'nin veya başkalarının haklarını, güvenliğini ya da güvenceli olmasını korumak için</li>
        <li>Birleşmeler, satın almalar, finansman veya varlık satışları ile bağlantılı olarak</li>
      </ul>
      <p>Verilerinizi satmayız.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. Uygulama Mağazası, Faturalandırma ve Ödeme Bilgileri
      </h3>
      <p>
        Arcatext ücretli özellikler, abonelikler veya uygulama içi satın alımlar sunuyorsa, ödeme
        işleme, Apple, Google veya diğer yetkili ödeme işlemcileri gibi üçüncü taraf platform
        sağlayıcıları tarafından yönetilebilir.
      </p>
      <p>Örneğin:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Apple platformlarındaki satın alımlar, Apple'ın App Store ve StoreKit sistemleri aracılığıyla işlenebilir.</li>
        <li>Android platformlarındaki satın alımlar, Google Play Billing ve Google ödeme sistemleri aracılığıyla işlenebilir.</li>
      </ul>
      <p>
        Arcatext ve Adalithic LLC, bu platform faturalandırma sistemleri aracılığıyla kullanılan tam
        ödeme kartı bilgilerini doğrudan almaz veya saklamaz.
      </p>
      <p>
        Üçüncü taraf uygulama mağazalarını, faturalandırma sistemlerini ve ödeme sağlayıcılarını
        kullanmanız, ayrıca bu sağlayıcıların kendi gizlilik politikaları, koşulları ve ödeme
        kurallarına da tabi olabilir.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Bu Gizlilik Politikasındaki Değişiklikler</h3>
      <p>
        Bu Gizlilik Politikasını, uygulamamızdaki, teknolojimizdeki, hizmet sağlayıcılarımızdaki,
        yasal yükümlülüklerimizdeki veya iş uygulamalarımızdaki değişiklikleri yansıtmak için zaman
        zaman güncelleyebiliriz.
      </p>
      <p>Politikayı güncellediğimizde, en üstteki "Son Güncelleme" tarihini revize edeceğiz.</p>
      <p>
        Değişiklikler önemliyse, uygulama, web sitesi veya diğer uygun yöntemler aracılığıyla ek
        bildirim sağlayabiliriz.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Bize Ulaşın</h3>
      <p>Sorularınız, endişeleriniz veya gizlilik talepleriniz varsa, iletişime geçin:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext Gizlilik İletişimi
        <br />
        E-posta: arcatextapp@gmail.com
        <br />
        Destek Sayfası: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Bölgeye Özel Gizlilik Hakları</h3>
      <p>
        Bu Gizlilik Politikası ile Kullanım Koşulları arasında gizlilikle ilgili konularda herhangi
        bir çelişki olması durumunda, bu Gizlilik Politikası geçerlidir.
      </p>
      <p className="font-medium">Haklarınız (Küresel Özet)</p>
      <p>
        Yaşadığınız yere bağlı olarak, kişisel bilgileriniz konusunda haklara sahip olabilirsiniz;
        bunlara verilerinize erişme, düzeltme, silme veya işlenmesini kısıtlama hakkı, veri
        taşınabilirliği hakkı, belirli işlemelere itiraz etme hakkı ve işleme onaya dayalıysa onayı
        geri çekme hakkı dahildir. Ayrıntılı haklar ve bunların nasıl kullanılacağı aşağıdaki bölgeye
        özel bölümlerde belirtilmiştir. Talepte bulunmak için ayrıca arcatextapp@gmail.com adresinden
        bizimle iletişime geçebilirsiniz ve geçerli yasaya uygun olarak yanıt vereceğiz.
      </p>

      <p className="font-medium">
        Ek A — Avrupa Ekonomik Alanı (EEA), Avrupa Birliği ve EFTA Ülkeleri
      </p>
      <p>
        Bu Ek, şu ülkelerde ikamet eden tüketicilere uygulanır: Avusturya, Belçika, Bulgaristan,
        Hırvatistan, Kıbrıs, Çekya, Danimarka, Estonya, Finlandiya, Fransa, Almanya, Yunanistan,
        Macaristan, İrlanda, İtalya, Letonya, Litvanya, Lüksemburg, Malta, Hollanda, Polonya,
        Portekiz, Romanya, Slovakya, Slovenya, İspanya, İsveç, İzlanda ve Norveç.
      </p>
      <p className="font-medium">İşleme için yasal dayanaklar</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Bir sözleşmenin ifası</span> — talep ettiğiniz temel klavye,
          çeviri, Yeniden İfade Etme ve dil özelliklerini sağlamak için gerekli işleme.
        </li>
        <li>
          <span className="font-medium">Meşru menfaatler</span> — güvenlik, kötüye kullanımı
          önleme, hizmet iyileştirme ve dil sistemlerinin geliştirilmesi. Bir denge testi
          gerçekleştirdik ve çoğu durumda bu menfaatlerin haklarınız ve özgürlükleriniz tarafından
          geçersiz kılınmadığı sonucuna vardık.
        </li>
        <li>
          <span className="font-medium">Onay</span> — öğrenme ve ilerleme takibi için Yeniden İfade
          edilen mesajları saklamak gibi isteğe bağlı özellikler. Özelliği uygulamada kapatarak
          onayınızı istediğiniz zaman geri çekebilirsiniz.
        </li>
      </ul>
      <p className="font-medium">Haklarınız</p>
      <p>
        Geçerli istisnalara tabi olarak, kişisel verilerinize erişme; hatalı verilerin
        düzeltilmesini sağlama; verilerinizin silinmesini sağlama ("unutulma hakkı"); işlemenin
        kısıtlanmasını sağlama; verilerinizi taşınabilir bir biçimde alma; meşru menfaatlere dayalı
        işlemeye itiraz etme; ve işleme onaya dayalı olduğunda onayı geri çekme hakkına sahipsiniz.
        Bu hakları arcatextapp@gmail.com adresinden bizimle iletişime geçerek kullanabilirsiniz.
        Yasanın gerektirdiği süreler içinde (genellikle bir ay, karmaşık durumlarda uzatılabilir)
        yanıt vereceğiz.
      </p>
      <p className="font-medium">Şikayet hakkı</p>
      <p>
        Haklarınızın ihlal edildiğine inanıyorsanız, yerel denetim makamınıza (veri koruma makamı)
        şikayette bulunma hakkına sahipsiniz.
      </p>
      <p className="font-medium">Temsilci</p>
      <p>
        Adalithic LLC, GDPR'nin 27. Maddesi uyarınca Avrupa Birliği'nde bir temsilci atamıştır.
        Temsilcimiz Prighter Group'tur. Temsilcimizle iletişime geçebilir veya veri sahibi
        haklarınızı aşağıdaki güvenli portal aracılığıyla onlar üzerinden kullanabilirsiniz:{" "}
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
      <p className="font-medium">Uluslararası veri aktarımları</p>
      <p>
        Bilgileriniz Amerika Birleşik Devletleri'ne ve EEA/EFTA dışındaki diğer ülkelere
        aktarılabilir. Birincil aktarım mekanizması olarak Avrupa Komisyonu tarafından onaylanan
        Standart Sözleşme Maddeleri'ne (SCC'ler) ve gerektiğinde uygun ek önlemlere (şifreleme ve
        erişim kontrolleri gibi) güveniriz.
      </p>
      <p className="font-medium">Saklama ve otomatik işleme</p>
      <p>
        Saklama süreleri Bölüm 9'da açıklanmıştır. Kullanıcı tarafından gönderilen metin üzerinde
        dil modellerinin otomatik işlenmesi ve iyileştirilmesi, meşru menfaatlere veya (uygun
        olduğunda) onaya dayanır ve bu Politikada açıklanan güvenlik önlemlerine tabidir.
      </p>

      <p className="font-medium">Ek B — Birleşik Krallık</p>
      <p>
        Bu Ek, Birleşik Krallık'ta ikamet eden tüketicilere uygulanır. Ek A'daki hükümler aşağıdaki
        uyarlamalarla uygulanır:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>GDPR'ye yapılan atıflar UK GDPR ile değiştirilir.</li>
        <li>Denetim makamı Information Commissioner's Office (ICO)'dur.</li>
        <li>
          Adalithic LLC, UK GDPR'nin 27. Maddesi uyarınca Birleşik Krallık'ta bir temsilci
          atamıştır. Birleşik Krallık temsilcimiz Prighter Group'tur ve aynı güvenli portal
          aracılığıyla ulaşılabilir:{" "}
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

      <p className="font-medium">Ek C — İsviçre</p>
      <p>
        Bu Ek, İsviçre'de ikamet eden tüketicilere uygulanır. Erişim, düzeltme ve silme hakları
        dahil olmak üzere revize edilmiş Federal Veri Koruma Yasası (nFADP) uyarınca haklara
        sahipsiniz. Bu hakları arcatextapp@gmail.com adresinden bizimle iletişime geçerek
        kullanabilirsiniz. Adalithic LLC, revize edilmiş Federal Veri Koruma Yasası uyarınca
        İsviçre'de bir temsilci atamıştır. İsviçre temsilcimiz Prighter Group'tur ve aynı güvenli
        portal aracılığıyla ulaşılabilir:{" "}
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

      <p className="font-medium">Ek D — Kanada, Québec dahil</p>
      <p>
        Bu Ek, Québec dahil olmak üzere Kanada'da ikamet eden tüketicilere uygulanır. Kişisel
        bilgilerinize erişmek, bunları düzeltmek ve belirli işlemelere verilen onayı geri çekmek için
        PIPEDA ve Québec'in Law 25 yasası uyarınca haklara sahipsiniz. Bu hakları
        arcatextapp@gmail.com adresinden bizimle iletişime geçerek kullanabilirsiniz. Québec sakinleri
        için bu Gizlilik Politikasının Fransızca bir sürümü sağlanmıştır. Önemli zarar riski taşıyan
        bir veri ihlali durumunda, geçerli yasanın gerektirdiği şekilde etkilenen kişileri ve ilgili
        makamları bilgilendireceğiz.
      </p>

      <p className="font-medium">Ek E — Amerika Birleşik Devletleri</p>
      <p>
        Bu Ek, Amerika Birleşik Devletleri'nde ikamet eden tüketicilere uygulanır. Kaliforniya
        sakinleri, kişisel bilgileri bilme, silme ve düzeltme ve herhangi bir satış veya paylaşımdan
        vazgeçme hakları dahil olmak üzere yukarıdaki Bölüm 15'teki Kaliforniya Gizlilik Bildiriminde
        açıklanan haklara sahiptir. Adalithic LLC, kişisel bilgilerinizi bağlamlar arası davranışsal
        reklamcılık için satmaz veya paylaşmaz ve haklarınızı kullandığınız için ayrımcılığa maruz
        kalmazsınız. İkamet ettiğiniz eyalete bağlı olarak diğer ABD eyalet gizlilik yasaları
        geçerli olabilir ve gerektiğinde geçerli hakları yerine getireceğiz. Bu hakları kullanmak
        için arcatextapp@gmail.com adresinden bizimle iletişime geçin.
      </p>

      <p className="font-medium">Ek F — Diğer Ülkeler ve Bölgeler</p>
      <p>
        Bu Ek, Arcatext'in sunulduğu diğer tüm ülkelerde ve bölgelerde ikamet eden tüketicilere
        uygulanır (yaptırım uygulanan veya ambargolu yargı bölgeleri hariç). Yerel yasanın size ek
        vazgeçilemez gizlilik hakları tanıdığı durumlarda (örneğin Brezilya'nın LGPD gibi yasaları
        veya Japonya, Güney Kore, Avustralya, Hindistan ve diğer yargı bölgelerindeki gizlilik
        yasaları uyarınca), bu haklar geçerlidir. Bu tür herhangi bir hakkı kullanmak için
        arcatextapp@gmail.com adresinden bizimle iletişime geçebilirsiniz ve geçerli yerel yasaya
        uygun olarak yanıt vereceğiz.
      </p>
    </div>
  );
}
