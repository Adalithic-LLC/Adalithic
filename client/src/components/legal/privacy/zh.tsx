// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyZh() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">由 Adalithic LLC 运营</p>
      <p>最后更新：August 11, 2026</p>
      <p>
        Arcatext 是一款自定义键盘和语言应用，旨在帮助用户跨语言撰写、翻译、改写并更好地理解消息。本隐私政策
        说明 Arcatext 处理哪些信息、如何使用这些信息、何时存储、何时可能共享，以及您拥有哪些选择。
      </p>
      <p>使用 Arcatext 即表示您同意本隐私政策所述的做法。</p>

      <h3 className="font-semibold text-secondary pt-2">1. 我们是谁</h3>
      <p>Arcatext 由 Adalithic LLC 运营。</p>
      <p>如有隐私相关问题，请通过以下方式联系我们：</p>
      <p>
        电子邮件：arcatextapp@gmail.com
        <br />
        支持页面：https://adalithic.com/
      </p>
      <p>如果这些联系信息发生变化，我们将更新本隐私政策。</p>

      <h3 className="font-semibold text-secondary pt-2">2. 我们处理的信息</h3>
      <p>
        Arcatext 的设计仅处理提供、改进、个性化和支持应用语言功能所需的信息。
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">简单来说</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext 不会将您的数据出售给任何人。</li>
          <li>我们只跟踪经过改写的消息（您必须点击改写按钮，因此如果您使用键盘输入而不点击改写，则不会跟踪或存储任何消息）。</li>
          <li>我们使用数据以更好地了解您的语言水平，从而提供学习功能。我们对您发送的内容本身并不感兴趣，只希望帮助加速您的语言学习！</li>
          <li>我们会过滤掉某些改写文本且不予存储（例如密码、卡号和验证码——完整列表见第 7 节）。</li>
          <li>您可以随时开启或关闭改写跟踪（在 Arcatext 主应用中）。我们默认为“开启”状态，以便提供学习功能。</li>
        </ol>
      </div>
      <p className="font-medium">A. 您选择翻译、改写、检查或分析的文本</p>
      <p>
        当您使用 Arcatext 功能（例如翻译、改写、反向翻译、同义词建议、语法辅助、含义澄清或学习反馈）时，
        您提交的文本可能会由 Arcatext 处理，并可能被发送给第三方 AI 服务提供商，以便所请求的功能能够运行。
      </p>
      <p>这可能包括：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>您在 Arcatext 键盘中输入的消息</li>
        <li>您选择改写的消息</li>
        <li>您选择用于翻译或改写的文本</li>
        <li>您请求 Arcatext 检查、解释或转换的文本</li>
        <li>
          用于提升翻译或改写质量所需的上下文，例如所选语言、
          文字、语气、正式程度或性别设置
        </li>
      </ul>
      <p className="font-medium">B. 与您的个人资料关联的改写消息</p>
      <p>Arcatext 可能会存储您改写的消息，以便提供：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>性能指标</li>
        <li>进度跟踪</li>
        <li>个性化学习功能</li>
        <li>写作历史</li>
        <li>语言学习洞见</li>
        <li>其他 Arcatext 功能</li>
      </ul>
      <p>
        这些改写消息可能会与您的 Arcatext 个人资料关联，以便应用向您展示诸如以下信息：
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>您的改写历史</li>
        <li>您的学习进度</li>
        <li>您的语言练习模式</li>
        <li>您最常使用的语言或功能</li>
        <li>与您使用 Arcatext 相关的性能指标</li>
        <li>个性化推荐或学习工具</li>
      </ul>
      <p>
        仍与您个人资料关联的改写消息被视为机密用户数据。Adalithic LLC 不会向外部公司、广告商、数据经纪商
        或无关的第三方出售、许可或共享与个人资料关联的改写消息。
      </p>
      <p>
        与个人资料关联的改写消息由 Adalithic LLC 在内部使用，以提供
        Arcatext 的功能、维护应用、改善用户体验并支持
        与学习相关的功能。
      </p>
      <p className="font-medium">C. 键盘设置和语言偏好</p>
      <p>Arcatext 可能会处理应用设置和语言偏好，例如：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>源语言</li>
        <li>目标语言</li>
        <li>键盘语言</li>
        <li>字母或文字选项，例如标准文字或罗马化文本</li>
        <li>
          在翻译准确性需要时的说话人性别、接收人性别或群聊性别设置
        </li>
        <li>语气、正式程度或学习偏好</li>
        <li>应用内的功能偏好</li>
      </ul>
      <p>
        这些设置用于提供键盘、翻译、改写和学习
        体验。如果您创建或使用 Arcatext 账户，某些设置可能会存储在您的设备本地或与您的个人资料关联。
      </p>
      <p className="font-medium">D. 账户信息</p>
      <p>
        如果 Arcatext 提供基于账户的功能，我们可能会收集并存储账户信息，
        例如：
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>电子邮件地址</li>
        <li>用户名</li>
        <li>密码或身份验证凭据</li>
        <li>订阅状态</li>
        <li>应用偏好</li>
        <li>个人资料设置</li>
      </ul>
      <p>
        如使用密码，密码不会以明文形式存储。身份验证也可能由
        第三方身份提供商、应用商店提供商或平台服务处理。
      </p>
      <p className="font-medium">E. 设备和平台信息</p>
      <p>
        Arcatext 可能会访问提供功能、初始化设置、改善性能以及支持跨设备和
        操作系统兼容性所需的设备和平台信息。
      </p>
      <p>这可能包括：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>设备语言设置</li>
        <li>设备类型</li>
        <li>操作系统版本</li>
        <li>应用版本</li>
        <li>与平台相关的配置信息</li>
        <li>权限状态信息</li>
      </ul>
      <p>
        此信息用于配置和支持应用体验，并非旨在
        直接识别您的身份。
      </p>
      <p className="font-medium">F. 基本技术和诊断信息</p>
      <p>
        Arcatext 可能会处理运行、保护、改进或排查应用问题所需的有限技术信息，例如：
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>崩溃日志</li>
        <li>性能数据</li>
        <li>错误报告</li>
        <li>基本使用事件</li>
        <li>某功能是否被打开、完成或失败</li>
      </ul>
      <p>在可能的情况下，此信息以不会直接识别您身份的方式收集。</p>
      <p className="font-medium">G. 关于输入质量和 Glide 质量的匿名诊断信息</p>
      <p>
        为了衡量并改进自动更正和 Glide（滑行）输入，Arcatext 会收集有关这些功能表现的匿名汇总诊断信息。这些信息与每次安装生成的随机标识符相关联，该标识符不会与您的账户、姓名、电子邮箱或设备身份相关联。
      </p>
      <p>就自动更正而言，这包括：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>自动更正被保留或被撤销的频率</li>
        <li>哪个字母被改成了哪个字母的汇总计数</li>
        <li>按键次数</li>
        <li>匿名的点按精度测量值（点按落点距离按键中心有多近）</li>
        <li>应用当前的更正设置</li>
      </ul>
      <p>就 Glide 输入而言，这包括：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>有多少次滑行生成了词语</li>
        <li>您选择其他候选词或删除结果的频率</li>
        <li>目标词在候选列表中出现的位置</li>
        <li>关于滑行轨迹的匿名测量值，例如通常的速度、平滑程度，以及滑行距离按键中心有多远</li>
        <li>应用当前的 Glide 设置</li>
      </ul>
      <p>两者还都包括您的应用版本、操作系统版本以及当前使用的键盘语言。</p>
      <p>两者都绝不会包含您输入的字词、字母或消息。不会收集任何输入内容。汇总的字母更改计数和滑行轨迹测量值无法用于还原您写过的任何内容。这些信息仅用于衡量和改进输入质量。它们不会被出售，不会为广告目的而共享，也不会用于在其他公司的应用或网站上追踪您。</p>
      <p>您可以随时在 Arcatext 主应用的 Reword 数据存储设置中关闭此功能。该功能默认开启，并且这一项设置同时涵盖自动更正和 Glide 的诊断信息。</p>
      <p className="font-medium">H. 我们不会有意收集的信息</p>
      <p>Arcatext 不会有意收集：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>您的精确位置</li>
        <li>您的联系人</li>
        <li>您的照片</li>
        <li>您完整的支付卡信息</li>
        <li>您在 Arcatext 功能之外输入的所有内容</li>
        <li>输入到其他应用中的密码</li>
        <li>输入到其他应用中的安全验证码</li>
      </ul>
      <p>
        Arcatext 处理您选择通过 Arcatext 功能提交的文本。Arcatext 不会
        利用键盘权限秘密收集您输入的所有文本。
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. 自定义键盘权限和网络访问
      </h3>
      <p>
        Arcatext 作为第三方键盘和语言工具运行。某些功能可能需要
        额外的权限、互联网连接或设备级访问，具体取决于您的
        设备、操作系统或平台。
      </p>
      <p>例如：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          在 Apple 设备上，用户可能需要为某些键盘和
          在线语言功能启用“允许完全访问”。
        </li>
        <li>
          在 Android 设备上，用户可能会被要求授予与键盘
          功能、互联网访问、通知或应用功能相关的权限。
        </li>
      </ul>
      <p>这些权限对于以下功能可能是必要的：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI 翻译</li>
        <li>改写</li>
        <li>反向翻译</li>
        <li>语言检查</li>
        <li>性能指标</li>
        <li>学习功能</li>
        <li>基于云的语言处理</li>
        <li>账户同步</li>
      </ul>
      <p>
        启用这些权限后，Arcatext 可能会将您选择处理的文本发送给
        我们的服务提供商，以便所请求的功能能够运行。
      </p>
      <p>
        Arcatext 不会利用键盘权限秘密收集您输入的所有内容、跟踪
        无关的输入活动，或监控 Arcatext 功能之外的信息。
      </p>
      <p>
        您不应使用 Arcatext 输入密码、支付信息、安全验证码或
        其他高度敏感的信息。某些操作系统可能会在密码字段中自动切换到
        系统键盘，但用户在输入
        敏感信息时仍应保持谨慎。
      </p>
      <p>
        您可以随时通过设备设置禁用键盘权限、互联网权限或相关访问设置，
        但某些 Arcatext 功能可能会停止
        正常运行。
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. 我们如何使用信息</h3>
      <p>
        Arcatext 出于提供、个性化、分析、
        保护和改进应用的相关目的使用信息。
      </p>
      <p>我们可能会使用信息来：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>翻译文本</li>
        <li>改写消息</li>
        <li>提供替代措辞或同义词</li>
        <li>检查翻译的含义</li>
        <li>解释语言选择</li>
        <li>支持不同的文字或罗马化选项</li>
        <li>应用性别、语气或正式程度设置</li>
        <li>为面向用户的学习功能存储改写消息</li>
        <li>提供性能指标和进度跟踪</li>
        <li>个性化语言学习推荐</li>
        <li>改善应用的可靠性和性能</li>
        <li>改进 Arcatext 的语言系统和大型语言模型功能</li>
        <li>检测漏洞、崩溃、滥用或安全问题</li>
        <li>维护应用安全</li>
        <li>响应支持请求</li>
        <li>遵守法律义务</li>
      </ul>
      <p>我们不会使用与个人资料关联的改写消息来创建广告画像。</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI 处理和第三方服务提供商
      </h3>
      <p>
        为提供翻译和语言功能，Arcatext 可能会将提交的文本和相关
        设置发送给第三方 AI 模型提供商和其他服务提供商。
      </p>
      <p>
        这些提供商处理文本以返回翻译、改写、解释或
        其他语言输出。他们对数据的处理受其自身隐私政策、
        条款和处理惯例的约束。
      </p>
      <p>
        截至本政策最后更新时，我们的 AI 模型提供商声明，通过
        其 API 提交的数据在默认情况下不会用于训练或改进其模型，除非客户选择
        加入。Arcatext 不会有意为用户提交的翻译
        内容选择加入模型训练，除非本政策更新为另有说明。
      </p>
      <p>Arcatext 还可能将服务提供商用于：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>应用托管</li>
        <li>数据库存储</li>
        <li>分析</li>
        <li>崩溃报告</li>
        <li>客户支持</li>
        <li>安全监控</li>
        <li>身份验证</li>
        <li>支付处理</li>
        <li>AI 处理和语言模型功能</li>
      </ul>
      <p>
        这些提供商仅被允许在为
        Arcatext 和 Adalithic LLC 提供服务所需的范围内处理信息。
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. 改写消息的存储</h3>
      <p>Arcatext 可能会存储您改写的消息，以便我们提供：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>性能指标</li>
        <li>学习功能</li>
        <li>用户历史</li>
        <li>进度跟踪</li>
        <li>个性化语言工具</li>
      </ul>
      <p>
        当改写消息与您的个人资料关联时，它们可能会与诸如
        您的账户、电子邮件地址、用户名、应用偏好或使用历史等信息相关联。此
        关联使 Arcatext 能够提供个性化功能。
      </p>
      <p>
        与个人资料关联的改写消息是机密的，不会被出售、许可或共享
        给 Adalithic LLC 之外，但代表我们处理数据以
        运营 Arcatext 的服务提供商除外。
      </p>
      <p>可能依赖已存储改写消息的功能示例包括：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>跟踪您随时间的进步</li>
        <li>展示语言学习统计数据</li>
        <li>帮助您回顾过去的改写消息</li>
        <li>识别语法或词汇模式</li>
        <li>改进个性化推荐</li>
        <li>支持 Arcatext 内未来的学习工具</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. 我们过滤掉且从不存储或记录的内容
      </h3>
      <p>
        为保护您，Arcatext 会在任何改写
        条目被存储之前，自动在您的设备上筛查文本。当它检测到任何敏感内容时，会丢弃整个条目——它
        不会存储缩短或脱敏版本，也不会将任何内容关联到您的个人资料。
      </p>
      <p>在以下情况下，改写条目不会被存储：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">安全或敏感字段</span>——您正在
          密码或安全输入字段中输入，或在指定用于电子邮件、电话号码、PIN 或
          数字验证码、URL 或搜索的字段中输入。
        </li>
        <li>
          <span className="font-medium">电子邮件地址</span>——文本包含电子邮件
          地址。
        </li>
        <li>
          <span className="font-medium">支付卡号</span>——文本包含看起来像信用卡或借记卡号的 13–16
          位数字序列。
        </li>
        <li>
          <span className="font-medium">验证码或一次性验证码</span>——文本包含
          一个独立的 4–8 位验证码。
        </li>
        <li>
          <span className="font-medium">账户或 ID 号码</span>——文本包含一长串
          连续 9 位或更多位的数字。
        </li>
        <li>
          <span className="font-medium">密码、API 密钥和其他机密</span>——文本
          包含看起来像密码、密钥或其他随机机密的高熵令牌。
        </li>
      </ul>
      <p>如有疑问，Arcatext 会倾向于不予存储。</p>
      <p>
        <span className="font-medium">服务器日志。</span>我们的服务器从不记录
        您消息的内容。日志仅记录操作元数据——账户标识符、请求
        状态、时间和不透明的请求 ID——用于保持服务可靠并
        诊断问题。
      </p>
      <p>
        <span className="font-medium">您的控制权。</span>您可以随时在 Arcatext 应用中
        完全关闭改写存储。
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. 匿名化和去标识化的语言数据
      </h3>
      <p>
        Arcatext 和 Adalithic LLC 可能会使用已存储的消息和语言交互来改进
        语言系统、翻译质量、改写功能和大型语言模型
        性能。
      </p>
      <p>
        Arcatext 和 Adalithic LLC 还可能创建源自用户提交消息的匿名化、去标识化或
        聚合语言数据集。这些数据集由
        Adalithic LLC 在内部使用，以改进 Arcatext 的语言功能和质量。我们不会向第三方出售、
        许可或共享这些数据集。
      </p>
      <p>
        匿名化或去标识化数据集并非旨在识别您的个人身份或与特定用户个人资料
        相关联。然而，没有任何匿名化或去标识化
        过程能够保证在所有情况下都无法重新识别。Adalithic
        LLC 采用旨在降低此风险的合理保护措施。
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. 数据保留、账户删除以及您的删除权
      </h3>
      <p>
        我们仅在为实现本隐私政策所述目的
        合理必要的期限内保留信息，除非法律要求更长的保留期。
      </p>
      <p>一般而言：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          与您个人资料关联的改写消息，可能在您的账户处于活动状态期间或
          为提供功能和指标所需时予以保留。
        </li>
        <li>应用偏好可能存储在您的设备本地或与您的个人资料关联。</li>
        <li>
          技术日志可能出于调试、可靠性、防止滥用
          或安全目的临时保留。
        </li>
        <li>
          支持消息可能出于响应用户和维护支持
          记录的需要予以保留。
        </li>
        <li>
          匿名化、去标识化或聚合数据集可能保留更长时间，
          因为它们并非旨在识别特定用户。
        </li>
        <li>
          改写消息的匿名日志可能在您的账户删除后仍予以保留，如
          下文所述。
        </li>
      </ul>
      <p>
        您可以随时在应用内删除您的 Arcatext 账户。当您删除
        账户时，我们会移除您的个人资料和账户信息，包括您的电子邮件地址、
        用户名和身份验证凭据。
      </p>
      <p>
        Arcatext 即使在账户被删除后也会保留改写消息的匿名日志。
        这使用户在使用相同标识符（即电子邮件地址）再次创建账户时能够
        受益于其消息历史。这也有助于 Arcatext 继续
        在匿名改写消息数据上训练其自有的内部 AI 模型。
      </p>
      <p>
        为使这些保留的日志保持匿名，您的电子邮件地址会在删除时
        被替换为单向、不可逆的标识符。保留的改写消息不会
        与您的电子邮件地址一起存储，Arcatext 人员也无法读取或将其
        重新关联到您。如果您之后使用相同的电子邮件地址创建新账户，这些消息
        可能会重新连接到您的新账户。
      </p>
      <p>
        <span className="font-medium">请求完全删除。</span>如果您希望将
        保留的改写消息数据永久且完全删除，而非以匿名形式
        保留，您可以通过 arcatextapp@gmail.com 联系我们，主题行为“Data
        Erasure Request”。请注明您希望删除其数据的账户的电子邮件地址。
        此请求邮件必须从与相关账户关联的同一电子邮件发送。
        数据删除请求只能针对已经
        被删除的账户提出。我们将按照适用法律删除相关的保留数据。
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. 敏感信息</h3>
      <p>
        Arcatext 是一款语言工具，而非安全保险库。您不应为翻译、改写、检查或学习功能提交高度敏感的
        信息。
      </p>
      <p>请避免输入：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>密码</li>
        <li>信用卡号</li>
        <li>银行信息</li>
        <li>社会安全号码或政府证件</li>
        <li>医疗记录</li>
        <li>法律机密</li>
        <li>私人地址</li>
        <li>机密商业信息</li>
        <li>
          您不希望为语言相关用途处理或存储的
          高度敏感的个人消息
        </li>
      </ul>
      <p>
        如果您选择提交敏感信息，您理解它可能会被
        Arcatext 及其服务提供商处理，以提供所请求的功能。
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. 儿童隐私</h3>
      <p>Arcatext 不适用于 13 岁以下的儿童。</p>
      <p>
        如果您未满 13 岁，除非您的父母、法定监护人、学校或
        授权的教育机构以适用法律允许的方式批准您的使用，否则您不得使用 Arcatext。
      </p>
      <p>
        如果 Adalithic LLC 得知违反适用法律收集了 13 岁以下
        儿童的个人信息，我们可能会在适当情况下采取旨在限制或删除
        该信息的措施。
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. 国际数据传输</h3>
      <p>
        Arcatext 及其服务提供商可能在美国或其他
        国家/地区处理信息。这些国家/地区的隐私法律可能与您所在
        地区的法律不同。
      </p>
      <p>
        使用 Arcatext 即表示您理解您的信息可能在您居住地
        以外的国家/地区被处理。有关传输的更多信息，包括我们采用的
        保护措施，见下文的“区域特定隐私权”部分。
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. 您的选择</h3>
      <p>关于您的信息，您有若干选择。</p>
      <p className="font-medium">键盘权限和访问设置</p>
      <p>
        您可以通过设备或操作系统设置禁用键盘权限、互联网权限或相关访问设置。某些依赖
        在线处理或键盘集成的 Arcatext 功能可能不再正常运行。
      </p>
      <p className="font-medium">停止使用键盘</p>
      <p>您可以随时从键盘列表中移除 Arcatext 或卸载应用。</p>
      <p className="font-medium">限制您提交的内容</p>
      <p>
        您可以选择不为翻译、改写、
        检查或学习功能提交敏感或个人文本。
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. 隐私请求</h3>
      <p>
        如果您对您的信息或本隐私政策有疑问，您可以通过以下方式联系
        Adalithic LLC：
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC 可能会根据适用法律和公司的
        运营能力审查并响应请求。
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. 加利福尼亚隐私声明</h3>
      <p>
        如果您是加利福尼亚州居民，本节提供额外信息。
      </p>
      <p>Arcatext 可能会处理以下类别的信息：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">用户提交的内容</span>——为翻译、改写、检查或分析提交的文本。目的：提供语言功能。
        </li>
        <li>
          <span className="font-medium">已存储的改写消息</span>——您改写的、
          可能与您个人资料关联的消息。目的：提供指标、历史和学习
          功能。
        </li>
        <li>
          <span className="font-medium">账户信息</span>——电子邮件地址、用户名、
          身份验证信息。目的：提供基于账户的功能。
        </li>
        <li>
          <span className="font-medium">偏好</span>——语言、文字、语气、性别和
          键盘设置。目的：定制应用。
        </li>
        <li>
          <span className="font-medium">技术信息</span>——应用版本、崩溃日志、
          设备类型、操作系统。目的：维护和改进应用。
        </li>
        <li>
          <span className="font-medium">支持信息</span>——您发送给我们的电子邮件或消息。目的：响应支持请求。
        </li>
        <li>
          <span className="font-medium">去标识化语言数据</span>——源自用户提交的匿名化或
          聚合语言示例。目的：改进语言
          系统。
        </li>
      </ul>
      <p>Adalithic LLC 不会出售或共享您的个人信息。</p>
      <p>如果您对您的隐私权有疑问，请联系 arcatextapp@gmail.com。</p>

      <h3 className="font-semibold text-secondary pt-2">16. 安全</h3>
      <p>
        我们采用合理的技术和组织措施来保护通过
        Arcatext 处理的信息。
      </p>
      <p>
        与个人资料关联的改写消息被视为机密用户数据。我们采取旨在
        将对此信息的访问限制在有权访问的人员和需要访问以运营、保护、改进或支持 Arcatext 的服务
        提供商范围内的措施。
      </p>
      <p>
        然而，没有任何电子存储或互联网传输方法是完全安全的。我们
        无法保证绝对的安全。
      </p>
      <p>您有责任决定通过 Arcatext 提交哪些信息。</p>

      <h3 className="font-semibold text-secondary pt-2">17. 数据共享</h3>
      <p>Arcatext 和 Adalithic LLC 可能在有限的情况下共享信息：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>与 AI 提供商共享，以提供翻译、改写、检查和语言功能</li>
        <li>与帮助运营、保护、存储、分析或改进应用的服务提供商共享</li>
        <li>与分析或崩溃报告提供商共享</li>
        <li>与支付处理商或应用商店提供商共享</li>
        <li>如果法律或法律程序要求</li>
        <li>为保护 Arcatext、用户、Adalithic LLC 或他人的权利、安全或安保</li>
        <li>与合并、收购、融资或资产出售相关</li>
      </ul>
      <p>我们不会出售您的数据。</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. 应用商店、账单和支付信息
      </h3>
      <p>
        如果 Arcatext 提供付费功能、订阅或应用内购买，支付处理
        可能由第三方平台提供商处理，例如 Apple、Google 或其他
        授权的支付处理商。
      </p>
      <p>例如：</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>在 Apple 平台上的购买可能通过 Apple 的 App Store 和 StoreKit 系统处理。</li>
        <li>在 Android 平台上的购买可能通过 Google Play Billing 和 Google 支付系统处理。</li>
      </ul>
      <p>
        Arcatext 和 Adalithic LLC 不会直接接收或存储通过这些平台账单系统使用的
        完整支付卡信息。
      </p>
      <p>
        您对第三方应用商店、账单系统和支付提供商的使用也可能
        受这些提供商自身的隐私政策、条款和支付规则的约束。
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. 本隐私政策的变更</h3>
      <p>
        我们可能会不时更新本隐私政策，以反映我们应用、
        技术、服务提供商、法律义务或业务惯例的变化。
      </p>
      <p>当我们更新政策时，我们将修改顶部的“最后更新”日期。</p>
      <p>
        如果变更重大，我们可能会通过应用、网站或
        其他适当方式提供额外通知。
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. 联系我们</h3>
      <p>如果您有疑问、顾虑或隐私请求，请联系：</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext 隐私联系人
        <br />
        电子邮件：arcatextapp@gmail.com
        <br />
        支持页面：https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">区域特定隐私权</h3>
      <p>
        如果本隐私政策与《使用条款》在隐私相关
        事项上存在任何冲突，以本隐私政策为准。
      </p>
      <p className="font-medium">您的权利（全球摘要）</p>
      <p>
        根据您的居住地不同，您可能对您的个人信息享有相关权利，
        包括访问、更正、删除或限制处理您数据的权利、
        数据可携权、反对某些处理的权利，以及在
        处理基于同意时撤回同意的权利。详细权利及如何行使
        权利见下文的区域特定部分。您也可以通过
        arcatextapp@gmail.com 联系我们提出请求，我们将根据适用
        法律作出响应。
      </p>

      <p className="font-medium">
        附则 A——欧洲经济区（EEA）、欧盟和 EFTA 国家
      </p>
      <p>
        本附则适用于居住在以下地区的消费者：奥地利、比利时、保加利亚、克罗地亚、塞浦路斯、
        捷克共和国、丹麦、爱沙尼亚、芬兰、法国、德国、希腊、匈牙利、爱尔兰、意大利、
        拉脱维亚、立陶宛、卢森堡、马耳他、荷兰、波兰、葡萄牙、罗马尼亚、斯洛伐克、
        斯洛文尼亚、西班牙、瑞典、冰岛和挪威。
      </p>
      <p className="font-medium">处理的合法依据</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">合同履行</span>——为
          提供您请求的核心键盘、翻译、改写和语言功能所必需的处理。
        </li>
        <li>
          <span className="font-medium">合法利益</span>——安全、防止滥用、
          服务改进以及语言系统的开发。我们已进行了平衡
          测试，并得出结论认为，在大多数情况下，这些利益
          不会凌驾于您的权利和自由之上。
        </li>
        <li>
          <span className="font-medium">同意</span>——可选功能，例如为学习和进度跟踪存储改写
          消息。您可以随时通过在应用中
          关闭该功能来撤回同意。
        </li>
      </ul>
      <p className="font-medium">您的权利</p>
      <p>
        在适用例外的前提下，您有权访问您的个人数据；对不准确的数据
        进行更正；删除您的数据（“被遗忘权”）；
        限制处理；以可携格式接收您的数据；反对
        基于合法利益的处理；并在处理基于
        同意时撤回同意。您可以通过 arcatextapp@gmail.com 联系我们行使这些权利。我们将
        在法律要求的时限内作出响应（通常为一个月，在复杂
        情况下可延长）。
      </p>
      <p className="font-medium">投诉权</p>
      <p>
        如果您认为您的权利受到侵犯，您有权向您当地的监管机构（数据
        保护机构）提出投诉。
      </p>
      <p className="font-medium">代表</p>
      <p>
        Adalithic LLC 已根据 GDPR 第 27 条在欧盟指定了
        一名代表。我们的代表是 Prighter Group。您可以联系我们的代表，或通过他们
        行使您的数据主体权利，使用以下安全门户：{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        。
      </p>
      <p className="font-medium">国际数据传输</p>
      <p>
        您的信息可能会传输到美国和 EEA/EFTA 以外的其他
        国家/地区。我们依赖欧盟委员会批准的标准合同条款（SCC）
        作为主要的传输机制，并在需要时辅以适当的补充措施（例如
        加密和访问控制）。
      </p>
      <p className="font-medium">保留和自动化处理</p>
      <p>
        保留期在第 9 节中描述。对用户提交文本的语言模型的自动化处理和
        改进基于合法利益或同意（在适用情况下），并
        受本政策所述保护措施的约束。
      </p>

      <p className="font-medium">附则 B——英国</p>
      <p>
        本附则适用于居住在英国的消费者。附则 A 的规定
        在作以下调整后适用：
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>对 GDPR 的引用替换为 UK GDPR。</li>
        <li>监管机构为信息专员办公室（ICO）。</li>
        <li>
          Adalithic LLC 已根据 UK GDPR 第 27 条在英国指定了
          一名代表。我们的英国代表是 Prighter Group，可通过同一安全
          门户联系：{" "}
          <a
            href="https://app.prighter.com/portal/17012077629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://app.prighter.com/portal/17012077629
          </a>
          。
        </li>
      </ul>

      <p className="font-medium">附则 C——瑞士</p>
      <p>
        本附则适用于居住在瑞士的消费者。您根据修订后的
        《联邦数据保护法》（nFADP）享有相关权利，包括访问、更正和
        删除的权利。您可以通过 arcatextapp@gmail.com 联系我们行使这些权利。Adalithic
        LLC 已根据修订后的《联邦数据保护
        法》在瑞士指定了一名代表。我们的瑞士代表是 Prighter Group，可通过同一安全
        门户联系：{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        。
      </p>

      <p className="font-medium">附则 D——加拿大，包括魁北克省</p>
      <p>
        本附则适用于居住在加拿大（包括魁北克省）的消费者。您根据
        PIPEDA 和魁北克省的 Law 25 享有访问和更正您的个人信息以及撤回
        对某些处理的同意的权利。您可以通过
        arcatextapp@gmail.com 联系我们行使这些权利。我们为魁北克省居民
        提供本隐私政策的法文版本。如果发生构成重大伤害真实风险的数据泄露，
        我们将按照适用
        法律通知受影响的个人和相关机构。
      </p>

      <p className="font-medium">附则 E——美国</p>
      <p>
        本附则适用于居住在美国的消费者。加利福尼亚州居民享有
        上文第 15 节加利福尼亚隐私声明所述的权利，包括
        知悉、删除和更正个人信息以及选择退出任何出售或共享的权利。
        Adalithic LLC 不会为跨情境行为广告出售或共享您的个人信息，
        并且您不会因行使权利而受到歧视。其他美国
        州隐私法可能根据您的居住州适用，我们将在要求时尊重
        适用的权利。要行使这些权利，请通过
        arcatextapp@gmail.com 联系我们。
      </p>

      <p className="font-medium">附则 F——其他国家和地区</p>
      <p>
        本附则适用于居住在提供 Arcatext 的所有其他国家和地区
        （不包括受制裁或禁运的司法管辖区）的消费者。如果当地法律授予您
        额外的不可放弃的隐私权（例如根据巴西 LGPD 等法律或
        日本、韩国、澳大利亚、印度和其他司法管辖区的隐私法），这些权利
        适用。您可以通过 arcatextapp@gmail.com 联系我们行使任何此类权利，我们将
        根据适用的当地法律作出响应。
      </p>
    </div>
  );
}
