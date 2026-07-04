// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyVi() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Được vận hành bởi Adalithic LLC</p>
      <p>Cập Nhật Lần Cuối: July 3, 2026</p>
      <p>
        Arcatext là một ứng dụng bàn phím tùy chỉnh và ngôn ngữ được thiết kế để giúp người dùng viết,
        dịch, diễn đạt lại và hiểu rõ hơn các tin nhắn qua nhiều ngôn ngữ. Chính Sách Quyền Riêng Tư này
        giải thích thông tin nào Arcatext xử lý, thông tin đó được sử dụng như thế nào, khi nào nó được
        lưu trữ, khi nào nó có thể được chia sẻ, và bạn có những lựa chọn nào.
      </p>
      <p>Bằng cách sử dụng Arcatext, bạn đồng ý với các thực hành được mô tả trong Chính Sách Quyền Riêng Tư này.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Chúng Tôi Là Ai</h3>
      <p>Arcatext được vận hành bởi Adalithic LLC.</p>
      <p>Đối với các câu hỏi về quyền riêng tư, hãy liên hệ với chúng tôi tại:</p>
      <p>
        Email: arcatextapp@gmail.com
        <br />
        Trang Hỗ Trợ: https://adalithic.com/
      </p>
      <p>Nếu các chi tiết liên hệ này thay đổi, chúng tôi sẽ cập nhật Chính Sách Quyền Riêng Tư này.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Thông Tin Chúng Tôi Xử Lý</h3>
      <p>
        Arcatext được thiết kế để chỉ xử lý thông tin cần thiết để cung cấp, cải thiện,
        cá nhân hóa và hỗ trợ các tính năng ngôn ngữ của ứng dụng.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Nói một cách đơn giản</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext không bán dữ liệu của bạn cho bất kỳ ai.</li>
          <li>Chúng tôi chỉ theo dõi các tin nhắn được Diễn Đạt Lại (bạn phải nhấn nút Diễn Đạt Lại, vì vậy nếu bạn gõ bằng bàn phím mà không nhấn Diễn Đạt Lại, không có tin nhắn nào bị theo dõi hoặc lưu trữ).</li>
          <li>Chúng tôi sử dụng dữ liệu để hiểu rõ hơn về trình độ ngôn ngữ của bạn, nhằm cung cấp các tính năng học tập. Chúng tôi không quan tâm cá nhân đến nội dung bạn nhắn, mà chỉ muốn giúp đẩy nhanh việc học ngôn ngữ của bạn!</li>
          <li>Chúng tôi lọc ra một số văn bản đã Diễn Đạt Lại và không lưu trữ nó (ví dụ: mật khẩu, số thẻ và mã — xem danh sách đầy đủ trong Mục 7).</li>
          <li>Bạn có thể tắt hoặc bật theo dõi Diễn Đạt Lại bất kỳ lúc nào (trong ứng dụng Arcatext chính). Chúng tôi mặc định ở trạng thái 'bật' để có thể cung cấp các tính năng học tập.</li>
        </ol>
      </div>
      <p className="font-medium">A. Văn Bản Bạn Chọn để Dịch, Diễn Đạt Lại, Kiểm Tra hoặc Phân Tích</p>
      <p>
        Khi bạn sử dụng các tính năng Arcatext như dịch, Diễn Đạt Lại, dịch ngược,
        gợi ý từ đồng nghĩa, hỗ trợ ngữ pháp, làm rõ nghĩa hoặc phản hồi học tập,
        văn bản bạn gửi có thể được Arcatext xử lý và có thể được gửi đến các nhà cung cấp dịch vụ AI
        bên thứ ba để tính năng được yêu cầu có thể hoạt động.
      </p>
      <p>Điều này có thể bao gồm:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Các tin nhắn bạn gõ vào bàn phím Arcatext</li>
        <li>Các tin nhắn bạn chọn để Diễn Đạt Lại</li>
        <li>Văn bản bạn chọn để dịch hoặc diễn đạt lại</li>
        <li>Văn bản bạn yêu cầu Arcatext kiểm tra, giải thích hoặc chuyển đổi</li>
        <li>
          Bối cảnh cần thiết để cải thiện chất lượng dịch hoặc Diễn Đạt Lại, chẳng hạn như ngôn ngữ đã chọn,
          chữ viết, giọng điệu, mức độ trang trọng hoặc cài đặt giới tính
        </li>
      </ul>
      <p className="font-medium">B. Các Tin Nhắn Đã Diễn Đạt Lại Được Liên Kết với Hồ Sơ của Bạn</p>
      <p>Arcatext có thể lưu trữ các tin nhắn mà bạn Diễn Đạt Lại nhằm cung cấp:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Các chỉ số hiệu suất</li>
        <li>Theo dõi tiến độ</li>
        <li>Các tính năng học tập được cá nhân hóa</li>
        <li>Lịch sử viết</li>
        <li>Thông tin chi tiết về học ngôn ngữ</li>
        <li>Các tính năng Arcatext khác</li>
      </ul>
      <p>
        Các tin nhắn đã Diễn Đạt Lại này có thể được liên kết với hồ sơ Arcatext của bạn để ứng dụng có thể hiển thị
        cho bạn thông tin như:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Lịch sử Diễn Đạt Lại của bạn</li>
        <li>Tiến độ học tập của bạn</li>
        <li>Các mô hình luyện tập ngôn ngữ của bạn</li>
        <li>Các ngôn ngữ hoặc tính năng bạn sử dụng nhiều nhất</li>
        <li>Các chỉ số hiệu suất liên quan đến việc bạn sử dụng Arcatext</li>
        <li>Các đề xuất hoặc công cụ học tập được cá nhân hóa</li>
      </ul>
      <p>
        Các tin nhắn đã Diễn Đạt Lại vẫn được kết nối với hồ sơ của bạn được coi là dữ liệu người dùng
        bảo mật. Adalithic LLC không bán, cấp phép hoặc chia sẻ các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ với
        các công ty bên ngoài, nhà quảng cáo, môi giới dữ liệu hoặc các bên thứ ba không liên quan.
      </p>
      <p>
        Các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ được Adalithic LLC sử dụng nội bộ để cung cấp
        các tính năng của Arcatext, duy trì ứng dụng, cải thiện trải nghiệm người dùng và hỗ trợ
        chức năng liên quan đến học tập.
      </p>
      <p className="font-medium">C. Cài Đặt Bàn Phím và Tùy Chọn Ngôn Ngữ</p>
      <p>Arcatext có thể xử lý các cài đặt ứng dụng và tùy chọn ngôn ngữ, chẳng hạn như:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ngôn ngữ nguồn</li>
        <li>Ngôn ngữ đích</li>
        <li>Ngôn ngữ bàn phím</li>
        <li>Các tùy chọn bảng chữ cái hoặc chữ viết, chẳng hạn như chữ viết chuẩn hoặc văn bản La-tinh hóa</li>
        <li>
          Cài đặt giới tính người nói, giới tính người nhận hoặc giới tính trò chuyện nhóm khi cần thiết cho
          độ chính xác của bản dịch
        </li>
        <li>Giọng điệu, mức độ trang trọng hoặc tùy chọn học tập</li>
        <li>Tùy chọn tính năng bên trong ứng dụng</li>
      </ul>
      <p>
        Các cài đặt này được sử dụng để cung cấp trải nghiệm bàn phím, dịch, Diễn Đạt Lại và học tập.
        Một số cài đặt có thể được lưu trữ cục bộ trên thiết bị của bạn hoặc được liên kết với hồ sơ của bạn
        nếu bạn tạo hoặc sử dụng tài khoản Arcatext.
      </p>
      <p className="font-medium">D. Thông Tin Tài Khoản</p>
      <p>
        Nếu Arcatext cung cấp các tính năng dựa trên tài khoản, chúng tôi có thể thu thập và lưu trữ thông tin tài khoản
        chẳng hạn như:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Địa chỉ email</li>
        <li>Tên người dùng</li>
        <li>Mật khẩu hoặc thông tin xác thực</li>
        <li>Trạng thái đăng ký</li>
        <li>Tùy chọn ứng dụng</li>
        <li>Cài đặt hồ sơ</li>
      </ul>
      <p>
        Mật khẩu, nếu được sử dụng, không được lưu trữ ở dạng văn bản thuần túy. Việc xác thực cũng có thể được xử lý bởi
        các nhà cung cấp danh tính bên thứ ba, nhà cung cấp cửa hàng ứng dụng hoặc các dịch vụ nền tảng.
      </p>
      <p className="font-medium">E. Thông Tin Thiết Bị và Nền Tảng</p>
      <p>
        Arcatext có thể truy cập thông tin thiết bị và nền tảng cần thiết để cung cấp chức năng,
        khởi tạo cài đặt, cải thiện hiệu suất và hỗ trợ khả năng tương thích trên các thiết bị và
        hệ điều hành.
      </p>
      <p>Điều này có thể bao gồm:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Cài đặt ngôn ngữ thiết bị</li>
        <li>Loại thiết bị</li>
        <li>Phiên bản hệ điều hành</li>
        <li>Phiên bản ứng dụng</li>
        <li>Thông tin cấu hình liên quan đến nền tảng</li>
        <li>Thông tin trạng thái quyền</li>
      </ul>
      <p>
        Thông tin này được sử dụng để cấu hình và hỗ trợ trải nghiệm ứng dụng và không nhằm mục đích
        trực tiếp xác định danh tính của bạn.
      </p>
      <p className="font-medium">F. Thông Tin Kỹ Thuật và Chẩn Đoán Cơ Bản</p>
      <p>
        Arcatext có thể xử lý thông tin kỹ thuật hạn chế cần thiết để vận hành, bảo mật, cải thiện hoặc
        khắc phục sự cố ứng dụng, chẳng hạn như:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Nhật ký sự cố</li>
        <li>Dữ liệu hiệu suất</li>
        <li>Báo cáo lỗi</li>
        <li>Các sự kiện sử dụng cơ bản</li>
        <li>Liệu một tính năng đã được mở, hoàn thành hay thất bại</li>
      </ul>
      <p>Ở những nơi có thể, thông tin này được thu thập theo cách không trực tiếp xác định danh tính của bạn.</p>
      <p className="font-medium">G. Thông Tin Chúng Tôi Không Cố Ý Thu Thập</p>
      <p>Arcatext không cố ý thu thập:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Vị trí chính xác của bạn</li>
        <li>Danh bạ của bạn</li>
        <li>Ảnh của bạn</li>
        <li>Thông tin thẻ thanh toán đầy đủ của bạn</li>
        <li>Nội dung của mọi thứ bạn gõ bên ngoài các tính năng Arcatext</li>
        <li>Mật khẩu được gõ vào các ứng dụng khác</li>
        <li>Mã bảo mật được gõ vào các ứng dụng khác</li>
      </ul>
      <p>
        Arcatext xử lý văn bản mà bạn chọn gửi thông qua các tính năng Arcatext. Arcatext không
        sử dụng quyền bàn phím để bí mật thu thập toàn bộ văn bản bạn gõ.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Quyền Bàn Phím Tùy Chỉnh và Truy Cập Mạng
      </h3>
      <p>
        Arcatext hoạt động như một công cụ bàn phím và ngôn ngữ bên thứ ba. Một số tính năng có thể yêu cầu
        các quyền bổ sung, kết nối internet hoặc truy cập cấp thiết bị tùy thuộc vào
        thiết bị, hệ điều hành hoặc nền tảng của bạn.
      </p>
      <p>Ví dụ:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Trên các thiết bị Apple, người dùng có thể cần bật "Cho Phép Truy Cập Toàn Bộ" đối với một số tính năng bàn phím và
          ngôn ngữ trực tuyến nhất định.
        </li>
        <li>
          Trên các thiết bị Android, người dùng có thể được yêu cầu cấp các quyền liên quan đến chức năng bàn phím,
          truy cập internet, thông báo hoặc các tính năng ứng dụng.
        </li>
      </ul>
      <p>Các quyền này có thể cần thiết cho các tính năng như:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dịch bằng AI</li>
        <li>Diễn Đạt Lại</li>
        <li>Dịch ngược</li>
        <li>Kiểm tra ngôn ngữ</li>
        <li>Các chỉ số hiệu suất</li>
        <li>Các tính năng học tập</li>
        <li>Xử lý ngôn ngữ dựa trên đám mây</li>
        <li>Đồng bộ hóa tài khoản</li>
      </ul>
      <p>
        Khi các quyền này được bật, Arcatext có thể gửi văn bản bạn chọn để xử lý đến
        các nhà cung cấp dịch vụ của chúng tôi để tính năng được yêu cầu có thể hoạt động.
      </p>
      <p>
        Arcatext không sử dụng quyền bàn phím để bí mật thu thập mọi thứ bạn gõ, theo dõi
        hoạt động gõ phím không liên quan hoặc giám sát thông tin bên ngoài các tính năng Arcatext.
      </p>
      <p>
        Bạn không nên sử dụng Arcatext để gõ mật khẩu, thông tin thanh toán, mã bảo mật hoặc
        các thông tin nhạy cảm cao khác. Một số hệ điều hành có thể tự động chuyển sang
        bàn phím hệ thống cho các trường mật khẩu, nhưng người dùng vẫn nên thận trọng khi nhập
        thông tin nhạy cảm.
      </p>
      <p>
        Bạn có thể vô hiệu hóa quyền bàn phím, quyền internet hoặc các cài đặt truy cập liên quan
        bất kỳ lúc nào thông qua cài đặt thiết bị của bạn, mặc dù một số tính năng Arcatext có thể ngừng
        hoạt động đúng cách.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Cách Chúng Tôi Sử Dụng Thông Tin</h3>
      <p>
        Arcatext sử dụng thông tin cho các mục đích liên quan đến việc cung cấp, cá nhân hóa, phân tích,
        bảo mật và cải thiện ứng dụng.
      </p>
      <p>Chúng tôi có thể sử dụng thông tin để:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dịch văn bản</li>
        <li>Diễn Đạt Lại tin nhắn</li>
        <li>Cung cấp các cách diễn đạt thay thế hoặc từ đồng nghĩa</li>
        <li>Kiểm tra nghĩa của một bản dịch</li>
        <li>Giải thích các lựa chọn ngôn ngữ</li>
        <li>Hỗ trợ các chữ viết khác nhau hoặc các tùy chọn La-tinh hóa</li>
        <li>Áp dụng cài đặt giới tính, giọng điệu hoặc mức độ trang trọng</li>
        <li>Lưu trữ các tin nhắn đã Diễn Đạt Lại cho các tính năng học tập hướng đến người dùng</li>
        <li>Cung cấp các chỉ số hiệu suất và theo dõi tiến độ</li>
        <li>Cá nhân hóa các đề xuất học ngôn ngữ</li>
        <li>Cải thiện độ tin cậy và hiệu suất của ứng dụng</li>
        <li>Cải thiện các hệ thống ngôn ngữ và các tính năng mô hình ngôn ngữ lớn của Arcatext</li>
        <li>Phát hiện lỗi, sự cố, lạm dụng hoặc các vấn đề bảo mật</li>
        <li>Duy trì bảo mật ứng dụng</li>
        <li>Phản hồi các yêu cầu hỗ trợ</li>
        <li>Tuân thủ các nghĩa vụ pháp lý</li>
      </ul>
      <p>Chúng tôi không sử dụng các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ để tạo hồ sơ quảng cáo.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. Xử Lý AI và Các Nhà Cung Cấp Dịch Vụ Bên Thứ Ba
      </h3>
      <p>
        Để cung cấp các tính năng dịch và ngôn ngữ, Arcatext có thể gửi văn bản đã gửi và các cài đặt liên quan
        đến các nhà cung cấp mô hình AI bên thứ ba và các nhà cung cấp dịch vụ khác.
      </p>
      <p>
        Các nhà cung cấp này xử lý văn bản để trả về bản dịch, Diễn Đạt Lại, giải thích hoặc
        các đầu ra ngôn ngữ khác. Việc xử lý dữ liệu của họ được điều chỉnh bởi các chính sách quyền riêng tư của riêng họ,
        các điều khoản và thực hành xử lý.
      </p>
      <p>
        Tính đến lần cập nhật cuối cùng của chính sách này, các nhà cung cấp mô hình AI của chúng tôi tuyên bố rằng dữ liệu được gửi thông qua
        các API của họ không được sử dụng để đào tạo hoặc cải thiện các mô hình của họ theo mặc định trừ khi khách hàng chọn
        tham gia. Arcatext không cố ý chọn tham gia đào tạo mô hình đối với nội dung dịch do người dùng gửi
        trừ khi chính sách này được cập nhật để nói khác đi.
      </p>
      <p>Arcatext cũng có thể sử dụng các nhà cung cấp dịch vụ cho:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Lưu trữ ứng dụng</li>
        <li>Lưu trữ cơ sở dữ liệu</li>
        <li>Phân tích</li>
        <li>Báo cáo sự cố</li>
        <li>Hỗ trợ khách hàng</li>
        <li>Giám sát bảo mật</li>
        <li>Xác thực</li>
        <li>Xử lý thanh toán</li>
        <li>Xử lý AI và chức năng mô hình ngôn ngữ</li>
      </ul>
      <p>
        Các nhà cung cấp này chỉ được phép xử lý thông tin khi cần thiết để cung cấp dịch vụ cho
        Arcatext và Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Lưu Trữ Các Tin Nhắn Đã Diễn Đạt Lại</h3>
      <p>Arcatext có thể lưu trữ các tin nhắn mà bạn Diễn Đạt Lại để chúng tôi có thể cung cấp:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Các chỉ số hiệu suất</li>
        <li>Các tính năng học tập</li>
        <li>Lịch sử người dùng</li>
        <li>Theo dõi tiến độ</li>
        <li>Các công cụ ngôn ngữ được cá nhân hóa</li>
      </ul>
      <p>
        Khi các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ của bạn, chúng có thể được liên kết với thông tin
        chẳng hạn như tài khoản, địa chỉ email, tên người dùng, tùy chọn ứng dụng hoặc lịch sử sử dụng của bạn.
        Kết nối này cho phép Arcatext cung cấp các tính năng được cá nhân hóa.
      </p>
      <p>
        Các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ là bảo mật và không được bán, cấp phép hoặc chia sẻ
        bên ngoài Adalithic LLC ngoại trừ với các nhà cung cấp dịch vụ xử lý dữ liệu thay mặt chúng tôi để
        vận hành Arcatext.
      </p>
      <p>Các ví dụ về các tính năng có thể dựa vào các tin nhắn đã Diễn Đạt Lại được lưu trữ bao gồm:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Theo dõi sự cải thiện của bạn theo thời gian</li>
        <li>Hiển thị số liệu thống kê học ngôn ngữ</li>
        <li>Giúp bạn xem lại các tin nhắn đã Diễn Đạt Lại trước đây</li>
        <li>Xác định các mô hình ngữ pháp hoặc từ vựng</li>
        <li>Cải thiện các đề xuất được cá nhân hóa</li>
        <li>Hỗ trợ các công cụ học tập trong tương lai bên trong Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Những Gì Chúng Tôi Lọc Ra và Không Bao Giờ Lưu Trữ hoặc Ghi Nhật Ký
      </h3>
      <p>
        Để bảo vệ bạn, Arcatext tự động sàng lọc văn bản trên thiết bị của bạn trước khi bất kỳ mục Diễn Đạt Lại nào
        được lưu trữ. Khi phát hiện bất kỳ điều gì nhạy cảm, nó loại bỏ toàn bộ mục — nó
        không lưu trữ một phiên bản rút gọn hoặc được biên tập, và không có gì được liên kết với hồ sơ của bạn.
      </p>
      <p>Một mục Diễn Đạt Lại KHÔNG được lưu trữ khi:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Các trường an toàn hoặc nhạy cảm</span> — bạn đang gõ trong một
          trường mật khẩu hoặc trường nhập an toàn, hoặc một trường được chỉ định cho email, số điện thoại, mã PIN hoặc
          mã số, URL hoặc tìm kiếm.
        </li>
        <li>
          <span className="font-medium">Địa chỉ email</span> — văn bản chứa một địa chỉ
          email.
        </li>
        <li>
          <span className="font-medium">Số thẻ thanh toán</span> — văn bản chứa một chuỗi 13–16
          chữ số trông giống như số thẻ tín dụng hoặc thẻ ghi nợ.
        </li>
        <li>
          <span className="font-medium">Mã xác minh hoặc mã một lần</span> — văn bản chứa
          một mã độc lập từ 4–8 chữ số.
        </li>
        <li>
          <span className="font-medium">Số tài khoản hoặc số ID</span> — văn bản chứa một chuỗi
          dài liên tục từ 9 chữ số trở lên.
        </li>
        <li>
          <span className="font-medium">Mật khẩu, khóa API và các bí mật khác</span> — văn bản
          chứa một mã thông báo có độ ngẫu nhiên cao trông giống như mật khẩu, khóa hoặc bí mật ngẫu nhiên khác.
        </li>
      </ul>
      <p>Khi có nghi ngờ, Arcatext nghiêng về hướng không lưu trữ.</p>
      <p>
        <span className="font-medium">Nhật ký máy chủ.</span> Máy chủ của chúng tôi không bao giờ ghi lại nội dung
        các tin nhắn của bạn. Nhật ký chỉ ghi lại siêu dữ liệu vận hành — một mã định danh tài khoản, trạng thái yêu cầu,
        thời gian và một ID yêu cầu không rõ ràng — được sử dụng để giữ cho dịch vụ đáng tin cậy và để
        chẩn đoán các vấn đề.
      </p>
      <p>
        <span className="font-medium">Quyền kiểm soát của bạn.</span> Bạn có thể tắt hoàn toàn việc lưu trữ Diễn Đạt Lại
        bất kỳ lúc nào trong ứng dụng Arcatext.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Dữ Liệu Ngôn Ngữ Được Ẩn Danh và Khử Nhận Dạng
      </h3>
      <p>
        Arcatext và Adalithic LLC có thể sử dụng các tin nhắn đã lưu trữ và các tương tác ngôn ngữ để cải thiện
        các hệ thống ngôn ngữ, chất lượng dịch, các tính năng Diễn Đạt Lại và hiệu suất mô hình ngôn ngữ lớn.
      </p>
      <p>
        Arcatext và Adalithic LLC cũng có thể tạo ra các bộ dữ liệu ngôn ngữ được ẩn danh, khử nhận dạng hoặc tổng hợp
        được lấy từ các tin nhắn do người dùng gửi. Các bộ dữ liệu này được Adalithic LLC sử dụng nội bộ
        để cải thiện các tính năng và chất lượng ngôn ngữ của Arcatext. Chúng tôi không bán,
        cấp phép hoặc chia sẻ các bộ dữ liệu này với bên thứ ba.
      </p>
      <p>
        Các bộ dữ liệu được ẩn danh hoặc khử nhận dạng không nhằm mục đích xác định danh tính cá nhân bạn hoặc
        được liên kết với một hồ sơ người dùng cụ thể. Tuy nhiên, không có quy trình ẩn danh hoặc khử nhận dạng nào
        có thể đảm bảo rằng việc tái nhận dạng là không thể trong mọi trường hợp. Adalithic
        LLC sử dụng các biện pháp bảo vệ hợp lý được thiết kế để giảm thiểu rủi ro này.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Lưu Giữ Dữ Liệu, Xóa Tài Khoản và Quyền Xóa Bỏ của Bạn
      </h3>
      <p>
        Chúng tôi chỉ lưu giữ thông tin trong thời gian hợp lý cần thiết cho các mục đích được mô tả
        trong Chính Sách Quyền Riêng Tư này, trừ khi pháp luật yêu cầu thời gian lưu giữ dài hơn.
      </p>
      <p>Nói chung:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ của bạn có thể được lưu giữ trong khi tài khoản của bạn hoạt động hoặc
          khi cần thiết để cung cấp các tính năng và chỉ số.
        </li>
        <li>Tùy chọn ứng dụng có thể được lưu trữ cục bộ trên thiết bị của bạn hoặc được liên kết với hồ sơ của bạn.</li>
        <li>
          Nhật ký kỹ thuật có thể được lưu giữ tạm thời cho mục đích gỡ lỗi, độ tin cậy, ngăn chặn lạm dụng,
          hoặc bảo mật.
        </li>
        <li>
          Các tin nhắn hỗ trợ có thể được lưu giữ khi cần thiết để phản hồi người dùng và duy trì hồ sơ
          hỗ trợ.
        </li>
        <li>
          Các bộ dữ liệu được ẩn danh, khử nhận dạng hoặc tổng hợp có thể được lưu giữ trong thời gian dài hơn
          vì chúng không nhằm mục đích xác định một người dùng cụ thể.
        </li>
        <li>
          Nhật ký ẩn danh của các tin nhắn đã Diễn Đạt Lại có thể được lưu giữ sau khi tài khoản của bạn bị xóa, như
          được mô tả bên dưới.
        </li>
      </ul>
      <p>
        Bạn có thể xóa tài khoản Arcatext của mình bất kỳ lúc nào từ trong ứng dụng. Khi bạn xóa
        tài khoản của mình, chúng tôi xóa hồ sơ và thông tin tài khoản của bạn, bao gồm địa chỉ email,
        tên người dùng và thông tin xác thực của bạn.
      </p>
      <p>
        Arcatext duy trì nhật ký ẩn danh của các tin nhắn đã Diễn Đạt Lại ngay cả sau khi một tài khoản bị xóa.
        Điều này cho phép người dùng hưởng lợi từ lịch sử nhắn tin của họ nếu họ tạo lại tài khoản
        với cùng một mã định danh (tức là một địa chỉ email). Điều này cũng giúp Arcatext tiếp tục
        đào tạo các mô hình AI nội bộ của riêng mình trên dữ liệu tin nhắn đã Diễn Đạt Lại ẩn danh.
      </p>
      <p>
        Để giữ cho các nhật ký được lưu giữ này ẩn danh, địa chỉ email của bạn được thay thế tại thời điểm
        xóa bằng một mã định danh một chiều, không thể đảo ngược. Các tin nhắn đã Diễn Đạt Lại được lưu giữ không được
        lưu trữ cùng với địa chỉ email của bạn và không thể được đọc hoặc liên kết lại với bạn bởi nhân viên Arcatext.
        Nếu sau này bạn tạo một tài khoản mới bằng cùng một địa chỉ email, các tin nhắn này
        có thể được kết nối lại với tài khoản mới của bạn.
      </p>
      <p>
        <span className="font-medium">Yêu cầu xóa bỏ hoàn toàn.</span> Nếu bạn muốn dữ liệu tin nhắn đã Diễn Đạt Lại
        được lưu giữ của mình bị xóa vĩnh viễn và hoàn toàn thay vì được lưu giữ
        ở dạng ẩn danh, bạn có thể liên hệ với chúng tôi tại arcatextapp@gmail.com với dòng chủ đề "Data
        Erasure Request." Bao gồm địa chỉ email của tài khoản mà bạn muốn xóa dữ liệu.
        Email yêu cầu này phải được gửi từ cùng một email được liên kết với tài khoản
        đang được đề cập. Yêu cầu xóa dữ liệu chỉ có thể được thực hiện đối với các tài khoản đã bị
        xóa. Chúng tôi sẽ xóa dữ liệu được lưu giữ liên quan theo luật hiện hành.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Thông Tin Nhạy Cảm</h3>
      <p>
        Arcatext là một công cụ ngôn ngữ, không phải là một két an toàn bảo mật. Bạn không nên gửi thông tin nhạy cảm cao
        để dịch, Diễn Đạt Lại, kiểm tra hoặc cho các tính năng học tập.
      </p>
      <p>Tránh nhập:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mật khẩu</li>
        <li>Số thẻ tín dụng</li>
        <li>Thông tin ngân hàng</li>
        <li>Số An Sinh Xã Hội hoặc giấy tờ tùy thân do chính phủ cấp</li>
        <li>Hồ sơ y tế</li>
        <li>Bí mật pháp lý</li>
        <li>Địa chỉ riêng tư</li>
        <li>Thông tin kinh doanh bảo mật</li>
        <li>
          Các tin nhắn cá nhân nhạy cảm cao mà bạn không muốn được xử lý hoặc lưu trữ cho
          các mục đích liên quan đến ngôn ngữ
        </li>
      </ul>
      <p>
        Nếu bạn chọn gửi thông tin nhạy cảm, bạn hiểu rằng nó có thể được xử lý bởi
        Arcatext và các nhà cung cấp dịch vụ của họ để cung cấp tính năng được yêu cầu.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Quyền Riêng Tư của Trẻ Em</h3>
      <p>Arcatext không dành cho trẻ em dưới 13 tuổi.</p>
      <p>
        Nếu bạn dưới 13 tuổi, bạn không được sử dụng Arcatext trừ khi cha mẹ, người giám hộ hợp pháp, trường học hoặc
        cơ sở giáo dục được ủy quyền của bạn đã chấp thuận việc sử dụng của bạn theo cách được luật hiện hành cho phép.
      </p>
      <p>
        Nếu Adalithic LLC nhận thức được rằng thông tin cá nhân từ một trẻ em dưới 13 tuổi đã được
        thu thập vi phạm luật hiện hành, chúng tôi có thể thực hiện các bước được thiết kế để hạn chế hoặc xóa
        thông tin đó khi thích hợp.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Chuyển Dữ Liệu Quốc Tế</h3>
      <p>
        Arcatext và các nhà cung cấp dịch vụ của họ có thể xử lý thông tin tại Hoa Kỳ hoặc các
        quốc gia khác. Các quốc gia này có thể có luật quyền riêng tư khác với luật ở
        vị trí của bạn.
      </p>
      <p>
        Bằng cách sử dụng Arcatext, bạn hiểu rằng thông tin của bạn có thể được xử lý ở các quốc gia
        bên ngoài nơi cư trú của bạn. Thông tin bổ sung về việc chuyển giao, bao gồm các
        biện pháp bảo vệ mà chúng tôi sử dụng, xuất hiện trong mục Quyền Riêng Tư Theo Khu Vực bên dưới.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Các Lựa Chọn của Bạn</h3>
      <p>Bạn có một số lựa chọn liên quan đến thông tin của mình.</p>
      <p className="font-medium">Quyền Bàn Phím và Cài Đặt Truy Cập</p>
      <p>
        Bạn có thể vô hiệu hóa quyền bàn phím, quyền internet hoặc các cài đặt truy cập liên quan
        thông qua cài đặt thiết bị hoặc hệ điều hành của bạn. Một số tính năng Arcatext dựa vào
        xử lý trực tuyến hoặc tích hợp bàn phím có thể không còn hoạt động đúng cách.
      </p>
      <p className="font-medium">Ngừng Sử Dụng Bàn Phím</p>
      <p>Bạn có thể xóa Arcatext khỏi danh sách bàn phím của mình hoặc gỡ cài đặt ứng dụng bất kỳ lúc nào.</p>
      <p className="font-medium">Giới Hạn Những Gì Bạn Gửi</p>
      <p>
        Bạn có thể chọn không gửi văn bản nhạy cảm hoặc cá nhân để dịch, Diễn Đạt Lại,
        kiểm tra hoặc cho các tính năng học tập.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Yêu Cầu về Quyền Riêng Tư</h3>
      <p>
        Nếu bạn có câu hỏi về thông tin của mình hoặc Chính Sách Quyền Riêng Tư này, bạn có thể liên hệ
        Adalithic LLC tại:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC có thể xem xét và phản hồi các yêu cầu theo luật hiện hành và
        khả năng vận hành của công ty.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Thông Báo về Quyền Riêng Tư California</h3>
      <p>
        Nếu bạn là cư dân California, mục này cung cấp thông tin bổ sung.
      </p>
      <p>Arcatext có thể xử lý các loại thông tin sau:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Nội dung do người dùng gửi</span> — Văn bản được gửi để
          dịch, Diễn Đạt Lại, kiểm tra hoặc phân tích. Mục đích: để cung cấp các tính năng ngôn ngữ.
        </li>
        <li>
          <span className="font-medium">Các tin nhắn đã Diễn Đạt Lại được lưu trữ</span> — Các tin nhắn bạn Diễn Đạt Lại mà
          có thể được liên kết với hồ sơ của bạn. Mục đích: để cung cấp các chỉ số, lịch sử và các tính năng
          học tập.
        </li>
        <li>
          <span className="font-medium">Thông tin tài khoản</span> — Địa chỉ email, tên người dùng,
          thông tin xác thực. Mục đích: để cung cấp các tính năng dựa trên tài khoản.
        </li>
        <li>
          <span className="font-medium">Tùy chọn</span> — Cài đặt ngôn ngữ, chữ viết, giọng điệu, giới tính và
          bàn phím. Mục đích: để tùy chỉnh ứng dụng.
        </li>
        <li>
          <span className="font-medium">Thông tin kỹ thuật</span> — Phiên bản ứng dụng, nhật ký sự cố,
          loại thiết bị, hệ điều hành. Mục đích: để duy trì và cải thiện ứng dụng.
        </li>
        <li>
          <span className="font-medium">Thông tin hỗ trợ</span> — Email hoặc tin nhắn bạn gửi
          cho chúng tôi. Mục đích: để phản hồi các yêu cầu hỗ trợ.
        </li>
        <li>
          <span className="font-medium">Dữ liệu ngôn ngữ được khử nhận dạng</span> — Các ví dụ ngôn ngữ được ẩn danh hoặc
          tổng hợp được lấy từ các bài gửi của người dùng. Mục đích: để cải thiện các hệ thống ngôn ngữ.
        </li>
      </ul>
      <p>Adalithic LLC không bán hoặc chia sẻ thông tin cá nhân của bạn.</p>
      <p>Nếu bạn có câu hỏi về quyền riêng tư của mình, hãy liên hệ arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Bảo Mật</h3>
      <p>
        Chúng tôi sử dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin được xử lý
        thông qua Arcatext.
      </p>
      <p>
        Các tin nhắn đã Diễn Đạt Lại được liên kết với hồ sơ được coi là dữ liệu người dùng bảo mật. Chúng tôi thực hiện các bước
        được thiết kế để hạn chế quyền truy cập vào thông tin này cho nhân viên được ủy quyền và các nhà cung cấp dịch vụ
        cần quyền truy cập để vận hành, bảo mật, cải thiện hoặc hỗ trợ Arcatext.
      </p>
      <p>
        Tuy nhiên, không có phương pháp lưu trữ điện tử hoặc truyền qua internet nào là hoàn toàn bảo mật. Chúng tôi
        không thể đảm bảo bảo mật tuyệt đối.
      </p>
      <p>Bạn chịu trách nhiệm quyết định thông tin nào bạn gửi thông qua Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Chia Sẻ Dữ Liệu</h3>
      <p>Arcatext và Adalithic LLC có thể chia sẻ thông tin trong những trường hợp hạn chế:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Với các nhà cung cấp AI để cung cấp các tính năng dịch, Diễn Đạt Lại, kiểm tra và ngôn ngữ</li>
        <li>Với các nhà cung cấp dịch vụ giúp vận hành, bảo mật, lưu trữ, phân tích hoặc cải thiện ứng dụng</li>
        <li>Với các nhà cung cấp phân tích hoặc báo cáo sự cố</li>
        <li>Với các bộ xử lý thanh toán hoặc nhà cung cấp cửa hàng ứng dụng</li>
        <li>Nếu pháp luật hoặc quy trình pháp lý yêu cầu</li>
        <li>Để bảo vệ các quyền, sự an toàn hoặc bảo mật của Arcatext, người dùng, Adalithic LLC hoặc những người khác</li>
        <li>Liên quan đến việc sáp nhập, mua lại, tài trợ hoặc bán tài sản</li>
      </ul>
      <p>Chúng tôi không bán dữ liệu của bạn.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. Cửa Hàng Ứng Dụng, Lập Hóa Đơn và Thông Tin Thanh Toán
      </h3>
      <p>
        Nếu Arcatext cung cấp các tính năng trả phí, đăng ký hoặc mua hàng trong ứng dụng, việc xử lý thanh toán
        có thể được xử lý bởi các nhà cung cấp nền tảng bên thứ ba như Apple, Google hoặc các
        bộ xử lý thanh toán được ủy quyền khác.
      </p>
      <p>Ví dụ:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Các giao dịch mua trên nền tảng Apple có thể được xử lý thông qua hệ thống App Store và StoreKit của Apple.</li>
        <li>Các giao dịch mua trên nền tảng Android có thể được xử lý thông qua hệ thống Google Play Billing và thanh toán của Google.</li>
      </ul>
      <p>
        Arcatext và Adalithic LLC không trực tiếp nhận hoặc lưu trữ thông tin thẻ thanh toán đầy đủ
        được sử dụng thông qua các hệ thống lập hóa đơn nền tảng này.
      </p>
      <p>
        Việc bạn sử dụng các cửa hàng ứng dụng bên thứ ba, hệ thống lập hóa đơn và nhà cung cấp thanh toán cũng có thể được
        điều chỉnh bởi các chính sách quyền riêng tư, điều khoản và quy tắc thanh toán của riêng các nhà cung cấp đó.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Thay Đổi đối với Chính Sách Quyền Riêng Tư Này</h3>
      <p>
        Chúng tôi có thể cập nhật Chính Sách Quyền Riêng Tư này theo thời gian để phản ánh những thay đổi trong ứng dụng,
        công nghệ, nhà cung cấp dịch vụ, nghĩa vụ pháp lý hoặc thực hành kinh doanh của chúng tôi.
      </p>
      <p>Khi chúng tôi cập nhật chính sách, chúng tôi sẽ sửa đổi ngày "Cập Nhật Lần Cuối" ở đầu trang.</p>
      <p>
        Nếu các thay đổi là đáng kể, chúng tôi có thể cung cấp thông báo bổ sung thông qua ứng dụng, trang web hoặc
        các phương thức thích hợp khác.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Liên Hệ Với Chúng Tôi</h3>
      <p>Nếu bạn có câu hỏi, thắc mắc hoặc yêu cầu về quyền riêng tư, hãy liên hệ:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext Privacy Contact
        <br />
        Email: arcatextapp@gmail.com
        <br />
        Trang Hỗ Trợ: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Quyền Riêng Tư Theo Khu Vực Cụ Thể</h3>
      <p>
        Nếu có bất kỳ xung đột nào giữa Chính Sách Quyền Riêng Tư này và Điều Khoản Sử Dụng về các vấn đề liên quan đến
        quyền riêng tư, Chính Sách Quyền Riêng Tư này sẽ chi phối.
      </p>
      <p className="font-medium">Quyền của Bạn (Tóm Tắt Toàn Cầu)</p>
      <p>
        Tùy thuộc vào nơi bạn sống, bạn có thể có các quyền liên quan đến thông tin cá nhân của mình,
        bao gồm quyền truy cập, sửa, xóa hoặc hạn chế việc xử lý dữ liệu của bạn, quyền
        di chuyển dữ liệu, quyền phản đối việc xử lý nhất định và quyền rút lại sự đồng ý khi việc xử lý
        dựa trên sự đồng ý. Các quyền chi tiết và cách thực hiện chúng được nêu ra trong các mục theo
        khu vực cụ thể bên dưới. Bạn cũng có thể liên hệ với chúng tôi tại arcatextapp@gmail.com để đưa ra yêu cầu, và chúng tôi sẽ phản hồi theo luật
        hiện hành.
      </p>

      <p className="font-medium">
        Điều Khoản Bổ Sung A — Khu Vực Kinh Tế Châu Âu (EEA), Liên Minh Châu Âu và Các Quốc Gia EFTA
      </p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại: Áo, Bỉ, Bulgaria, Croatia, Síp,
        Cộng Hòa Séc, Đan Mạch, Estonia, Phần Lan, Pháp, Đức, Hy Lạp, Hungary, Ireland, Ý,
        Latvia, Litva, Luxembourg, Malta, Hà Lan, Ba Lan, Bồ Đào Nha, Romania, Slovakia,
        Slovenia, Tây Ban Nha, Thụy Điển, Iceland và Na Uy.
      </p>
      <p className="font-medium">Cơ sở pháp lý cho việc xử lý</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Thực hiện hợp đồng</span> — việc xử lý cần thiết để
          cung cấp các tính năng cốt lõi về bàn phím, dịch, Diễn Đạt Lại và ngôn ngữ mà bạn yêu cầu.
        </li>
        <li>
          <span className="font-medium">Lợi ích hợp pháp</span> — bảo mật, ngăn chặn lạm dụng,
          cải thiện dịch vụ và phát triển các hệ thống ngôn ngữ. Chúng tôi đã tiến hành một bài kiểm tra cân bằng
          và kết luận rằng những lợi ích này không bị lấn át bởi các quyền và tự do của bạn trong
          hầu hết các trường hợp.
        </li>
        <li>
          <span className="font-medium">Sự đồng ý</span> — các tính năng tùy chọn như lưu trữ các tin nhắn đã Diễn Đạt Lại
          để học tập và theo dõi tiến độ. Bạn có thể rút lại sự đồng ý bất kỳ lúc nào bằng cách
          tắt tính năng trong ứng dụng.
        </li>
      </ul>
      <p className="font-medium">Quyền của bạn</p>
      <p>
        Tùy thuộc vào các ngoại lệ hiện hành, bạn có quyền truy cập dữ liệu cá nhân của mình; yêu cầu
        chỉnh sửa dữ liệu không chính xác; yêu cầu xóa dữ liệu của bạn ("quyền được lãng quên");
        yêu cầu hạn chế việc xử lý; nhận dữ liệu của bạn ở định dạng có thể di chuyển; phản đối
        việc xử lý dựa trên lợi ích hợp pháp; và rút lại sự đồng ý khi việc xử lý dựa trên
        sự đồng ý. Bạn có thể thực hiện các quyền này bằng cách liên hệ với chúng tôi tại arcatextapp@gmail.com. Chúng tôi sẽ
        phản hồi trong khung thời gian được luật yêu cầu (thường là một tháng, có thể gia hạn trong các trường hợp phức tạp).
      </p>
      <p className="font-medium">Quyền khiếu nại</p>
      <p>
        Bạn có quyền nộp đơn khiếu nại với cơ quan giám sát địa phương của bạn (cơ quan bảo vệ
        dữ liệu) nếu bạn tin rằng các quyền của bạn đã bị vi phạm.
      </p>
      <p className="font-medium">Đại diện</p>
      <p>
        Adalithic LLC đã bổ nhiệm một đại diện tại Liên Minh Châu Âu theo Điều 27 của
        GDPR. Đại diện của chúng tôi là Prighter Group. Bạn có thể liên hệ với đại diện của chúng tôi, hoặc thực hiện
        các quyền chủ thể dữ liệu của bạn thông qua họ, bằng cách sử dụng cổng bảo mật sau:{" "}
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
      <p className="font-medium">Chuyển dữ liệu quốc tế</p>
      <p>
        Thông tin của bạn có thể được chuyển đến Hoa Kỳ và các quốc gia khác bên ngoài
        EEA/EFTA. Chúng tôi dựa vào Các Điều Khoản Hợp Đồng Tiêu Chuẩn (SCCs) được Ủy Ban Châu Âu phê duyệt
        làm cơ chế chuyển giao chính, cùng với các biện pháp bổ sung thích hợp (chẳng hạn như
        mã hóa và kiểm soát truy cập) khi cần thiết.
      </p>
      <p className="font-medium">Lưu giữ và xử lý tự động</p>
      <p>
        Các thời gian lưu giữ được mô tả trong Mục 9. Việc xử lý tự động và cải thiện
        các mô hình ngôn ngữ trên văn bản do người dùng gửi dựa trên lợi ích hợp pháp hoặc sự đồng ý (khi có thể áp dụng)
        và tuân theo các biện pháp bảo vệ được mô tả trong Chính Sách này.
      </p>

      <p className="font-medium">Điều Khoản Bổ Sung B — Vương Quốc Anh</p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại Vương Quốc Anh. Các quy định trong Điều Khoản Bổ Sung A
        áp dụng với những điều chỉnh sau:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Các tham chiếu đến GDPR được thay thế bằng UK GDPR.</li>
        <li>Cơ quan giám sát là Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC đã bổ nhiệm một đại diện tại Vương Quốc Anh theo Điều 27 của
          UK GDPR. Đại diện tại Vương Quốc Anh của chúng tôi là Prighter Group, có thể liên hệ thông qua cùng một cổng
          bảo mật:{" "}
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

      <p className="font-medium">Điều Khoản Bổ Sung C — Thụy Sĩ</p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại Thụy Sĩ. Bạn có các quyền theo
        Đạo Luật Liên Bang về Bảo Vệ Dữ Liệu sửa đổi (nFADP), bao gồm các quyền truy cập, chỉnh sửa và
        xóa. Bạn có thể thực hiện các quyền này bằng cách liên hệ với chúng tôi tại arcatextapp@gmail.com. Adalithic
        LLC đã bổ nhiệm một đại diện tại Thụy Sĩ theo Đạo Luật Liên Bang về Bảo Vệ Dữ Liệu sửa đổi.
        Đại diện tại Thụy Sĩ của chúng tôi là Prighter Group, có thể liên hệ thông qua cùng một cổng bảo mật:{" "}
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

      <p className="font-medium">Điều Khoản Bổ Sung D — Canada, bao gồm Québec</p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại Canada, bao gồm Québec. Bạn có các quyền theo
        PIPEDA và Law 25 của Québec để truy cập và sửa thông tin cá nhân của bạn và để rút lại
        sự đồng ý đối với việc xử lý nhất định. Bạn có thể thực hiện các quyền này bằng cách liên hệ với chúng tôi tại
        arcatextapp@gmail.com. Một phiên bản tiếng Pháp của Chính Sách Quyền Riêng Tư này được cung cấp cho
        cư dân Québec. Trong trường hợp vi phạm dữ liệu gây ra rủi ro thực sự về tổn hại đáng kể,
        chúng tôi sẽ thông báo cho các cá nhân bị ảnh hưởng và các cơ quan liên quan theo yêu cầu của luật
        hiện hành.
      </p>

      <p className="font-medium">Điều Khoản Bổ Sung E — Hoa Kỳ</p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại Hoa Kỳ. Cư dân California có
        các quyền được mô tả trong Thông Báo về Quyền Riêng Tư California trong Mục 15 ở trên, bao gồm các quyền
        được biết, xóa và sửa thông tin cá nhân và được từ chối bất kỳ hành vi bán hoặc chia sẻ nào.
        Adalithic LLC không bán hoặc chia sẻ thông tin cá nhân của bạn cho quảng cáo hành vi theo ngữ cảnh chéo,
        và bạn sẽ không bị phân biệt đối xử vì thực hiện các quyền của mình. Các luật quyền riêng tư của các bang
        khác của Hoa Kỳ có thể áp dụng tùy thuộc vào bang nơi bạn cư trú, và chúng tôi sẽ tôn trọng
        các quyền hiện hành khi được yêu cầu. Để thực hiện các quyền này, hãy liên hệ với chúng tôi tại
        arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Điều Khoản Bổ Sung F — Các Quốc Gia và Khu Vực Khác</p>
      <p>
        Điều Khoản Bổ Sung này áp dụng cho người tiêu dùng cư trú tại tất cả các quốc gia và khu vực khác nơi Arcatext
        được cung cấp (không bao gồm các khu vực pháp lý bị trừng phạt hoặc cấm vận). Khi luật địa phương cấp cho bạn
        các quyền riêng tư bổ sung không thể từ bỏ (ví dụ theo các luật như LGPD của Brazil hoặc
        các luật quyền riêng tư ở Nhật Bản, Hàn Quốc, Úc, Ấn Độ và các khu vực pháp lý khác), những quyền đó
        áp dụng. Bạn có thể liên hệ với chúng tôi tại arcatextapp@gmail.com để thực hiện bất kỳ quyền nào như vậy, và chúng tôi sẽ
        phản hồi theo luật địa phương hiện hành.
      </p>
    </div>
  );
}
