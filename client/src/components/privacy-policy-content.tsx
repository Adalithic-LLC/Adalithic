// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyPolicyContent() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Operated by Adalithic LLC</p>
      <p>Last Updated: June 7, 2026</p>
      <p>
        Arcatext is a custom keyboard and language application designed to help users write,
        translate, reword, and better understand messages across languages. This Privacy Policy
        explains what information Arcatext processes, how that information is used, when it is
        stored, when it may be shared, and what choices you have.
      </p>
      <p>By using Arcatext, you agree to the practices described in this Privacy Policy.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Who We Are</h3>
      <p>Arcatext is operated by Adalithic LLC.</p>
      <p>For privacy questions, contact us at:</p>
      <p>
        Email: arcatextapp@gmail.com
        <br />
        Support Page: https://adalithic.com/
      </p>
      <p>If these contact details change, we will update this Privacy Policy.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Information We Process</h3>
      <p>
        Arcatext is designed to process only the information needed to provide, improve,
        personalize, and support the app's language features.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">In simple terms</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext does not sell your data to anyone.</li>
          <li>We only track messages that are Reworded (you have to tap the Reword button, so if you type with the keyboard without tapping Reword, no messages are tracked or stored).</li>
          <li>We use data to better understand your language proficiency, to deliver learning features. We're not personally interested in what you text, but only want to help accelerate your language learning!</li>
          <li>We filter out certain Reworded text and do not store it (for example, passwords, card numbers, and codes — see the complete list in Section 7).</li>
          <li>You can turn Reword tracking off or on at any time (in the main Arcatext app). We default to the 'on' state so we can deliver learning features.</li>
        </ol>
      </div>
      <p className="font-medium">A. Text You Choose to Translate, Reword, Check, or Analyze</p>
      <p>
        When you use Arcatext features such as translation, Rewording, reverse translation,
        synonym suggestions, grammar assistance, meaning clarification, or learning feedback, the
        text you submit may be processed by Arcatext and may be sent to third-party AI service
        providers so the requested feature can function.
      </p>
      <p>This may include:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Messages you type into the Arcatext keyboard</li>
        <li>Messages you choose to Reword</li>
        <li>Text you select for translation or rewording</li>
        <li>Text you ask Arcatext to check, explain, or transform</li>
        <li>
          Context needed to improve translation or Rewording quality, such as selected language,
          script, tone, formality, or gender settings
        </li>
      </ul>
      <p className="font-medium">B. Reworded Messages Linked to Your Profile</p>
      <p>Arcatext may store messages that you Reword in order to provide:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Performance metrics</li>
        <li>Progress tracking</li>
        <li>Personalized learning features</li>
        <li>Writing history</li>
        <li>Language-learning insights</li>
        <li>Other Arcatext features</li>
      </ul>
      <p>
        These Reworded messages may be linked to your Arcatext profile so that the app can show
        you information such as:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Your Rewording history</li>
        <li>Your learning progress</li>
        <li>Your language practice patterns</li>
        <li>Your most-used languages or features</li>
        <li>Performance metrics related to your use of Arcatext</li>
        <li>Personalized recommendations or learning tools</li>
      </ul>
      <p>
        Reworded messages that remain connected to your profile are treated as confidential user
        data. Adalithic LLC does not sell, license, or share profile-linked Reworded messages with
        outside companies, advertisers, data brokers, or unrelated third parties.
      </p>
      <p>
        Profile-linked Reworded messages are used internally by Adalithic LLC to provide
        Arcatext's features, maintain the app, improve user experience, and support
        learning-related functionality.
      </p>
      <p className="font-medium">C. Keyboard Settings and Language Preferences</p>
      <p>Arcatext may process app settings and language preferences, such as:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Source language</li>
        <li>Target language</li>
        <li>Keyboard language</li>
        <li>Alphabet or script options, such as standard script or romanized text</li>
        <li>
          Speaker gender, recipient gender, or group-chat gender settings when needed for
          translation accuracy
        </li>
        <li>Tone, formality, or learning preferences</li>
        <li>Feature preferences inside the app</li>
      </ul>
      <p>
        These settings are used to provide the keyboard, translation, Rewording, and learning
        experience. Some settings may be stored locally on your device or linked to your profile
        if you create or use an Arcatext account.
      </p>
      <p className="font-medium">D. Account Information</p>
      <p>
        If Arcatext offers account-based features, we may collect and store account information
        such as:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Email address</li>
        <li>Username</li>
        <li>Password or authentication credentials</li>
        <li>Subscription status</li>
        <li>App preferences</li>
        <li>Profile settings</li>
      </ul>
      <p>
        Passwords, if used, are not stored in plain text. Authentication may also be handled by
        third-party identity providers, app-store providers, or platform services.
      </p>
      <p className="font-medium">E. Device and Platform Information</p>
      <p>
        Arcatext may access device and platform information needed to provide functionality,
        initialize settings, improve performance, and support compatibility across devices and
        operating systems.
      </p>
      <p>This may include:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Device language settings</li>
        <li>Device type</li>
        <li>Operating system version</li>
        <li>App version</li>
        <li>Platform-related configuration information</li>
        <li>Permission status information</li>
      </ul>
      <p>
        This information is used to configure and support the app experience and is not intended
        to directly identify you.
      </p>
      <p className="font-medium">F. Basic Technical and Diagnostic Information</p>
      <p>
        Arcatext may process limited technical information needed to operate, secure, improve, or
        troubleshoot the app, such as:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Crash logs</li>
        <li>Performance data</li>
        <li>Error reports</li>
        <li>Basic usage events</li>
        <li>Whether a feature was opened, completed, or failed</li>
      </ul>
      <p>Where possible, this information is collected in a way that does not directly identify you.</p>
      <p className="font-medium">G. Information We Do Not Intentionally Collect</p>
      <p>Arcatext does not intentionally collect:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Your precise location</li>
        <li>Your contacts</li>
        <li>Your photos</li>
        <li>Your full payment card information</li>
        <li>The content of everything you type outside Arcatext features</li>
        <li>Passwords typed into other apps</li>
        <li>Security codes typed into other apps</li>
      </ul>
      <p>
        Arcatext processes text that you choose to submit through Arcatext features. Arcatext does
        not use keyboard permissions to secretly collect all text you type.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Custom Keyboard Permissions and Network Access
      </h3>
      <p>
        Arcatext functions as a third-party keyboard and language tool. Some features may require
        additional permissions, internet connectivity, or device-level access depending on your
        device, operating system, or platform.
      </p>
      <p>For example:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          On Apple devices, users may need to enable "Allow Full Access" for certain keyboard and
          online language features.
        </li>
        <li>
          On Android devices, users may be asked to grant permissions related to keyboard
          functionality, internet access, notifications, or app features.
        </li>
      </ul>
      <p>These permissions may be necessary for features such as:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI translation</li>
        <li>Rewording</li>
        <li>Reverse translation</li>
        <li>Language checking</li>
        <li>Performance metrics</li>
        <li>Learning features</li>
        <li>Cloud-based language processing</li>
        <li>Account synchronization</li>
      </ul>
      <p>
        When these permissions are enabled, Arcatext may send the text you choose to process to
        our service providers so the requested feature can function.
      </p>
      <p>
        Arcatext does not use keyboard permissions to secretly collect everything you type, track
        unrelated typing activity, or monitor information outside Arcatext features.
      </p>
      <p>
        You should not use Arcatext to type passwords, payment information, security codes, or
        other highly sensitive information. Some operating systems may automatically switch to the
        system keyboard for password fields, but users should still exercise caution when entering
        sensitive information.
      </p>
      <p>
        You can disable keyboard permissions, internet permissions, or related access settings at
        any time through your device settings, although some Arcatext features may stop
        functioning properly.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. How We Use Information</h3>
      <p>
        Arcatext uses information for purposes related to providing, personalizing, analyzing,
        securing, and improving the app.
      </p>
      <p>We may use information to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Translate text</li>
        <li>Reword messages</li>
        <li>Provide alternative phrasings or synonyms</li>
        <li>Check the meaning of a translation</li>
        <li>Explain language choices</li>
        <li>Support different scripts or romanization options</li>
        <li>Apply gender, tone, or formality settings</li>
        <li>Store Reworded messages for user-facing learning features</li>
        <li>Provide performance metrics and progress tracking</li>
        <li>Personalize language-learning recommendations</li>
        <li>Improve app reliability and performance</li>
        <li>Improve Arcatext's language systems and large language model features</li>
        <li>Detect bugs, crashes, abuse, or security issues</li>
        <li>Maintain app security</li>
        <li>Respond to support requests</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>We do not use profile-linked Reworded messages to create advertising profiles.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. AI Processing and Third-Party Service Providers
      </h3>
      <p>
        To provide translation and language features, Arcatext may send submitted text and related
        settings to third-party AI service providers, such as OpenAI.
      </p>
      <p>
        These providers process the text to return translations, Rewordings, explanations, or
        other language outputs. Their handling of data is governed by their own privacy policies,
        terms, and processing practices.
      </p>
      <p>
        As of this policy's last update, OpenAI states that data submitted through its API is not
        used to train or improve OpenAI models by default unless the customer opts in. Arcatext
        does not intentionally opt in to model training for user-submitted translation content
        unless this policy is updated to say otherwise.
      </p>
      <p>Arcatext may also use service providers for:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>App hosting</li>
        <li>Database storage</li>
        <li>Analytics</li>
        <li>Crash reporting</li>
        <li>Customer support</li>
        <li>Security monitoring</li>
        <li>Authentication</li>
        <li>Payment processing</li>
        <li>AI processing and language model functionality</li>
      </ul>
      <p>
        These providers are allowed to process information only as needed to provide services to
        Arcatext and Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Storage of Reworded Messages</h3>
      <p>Arcatext may store messages that you Reword so that we can provide:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Performance metrics</li>
        <li>Learning features</li>
        <li>User history</li>
        <li>Progress tracking</li>
        <li>Personalized language tools</li>
      </ul>
      <p>
        When Reworded messages are linked to your profile, they may be associated with information
        such as your account, email address, username, app preferences, or usage history. This
        connection allows Arcatext to provide personalized features.
      </p>
      <p>
        Profile-linked Reworded messages are confidential and are not sold, licensed, or shared
        outside Adalithic LLC except with service providers who process the data on our behalf to
        operate Arcatext.
      </p>
      <p>Examples of features that may rely on stored Reworded messages include:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Tracking your improvement over time</li>
        <li>Showing language-learning statistics</li>
        <li>Helping you review past Reworded messages</li>
        <li>Identifying grammar or vocabulary patterns</li>
        <li>Improving personalized recommendations</li>
        <li>Supporting future learning tools inside Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. What We Filter Out and Never Store or Log
      </h3>
      <p>
        To protect you, Arcatext automatically screens text on your device before any Reworded
        entry is stored. When it detects anything sensitive, it discards the entire entry — it
        does not store a shortened or redacted version, and nothing is linked to your profile.
      </p>
      <p>A Reworded entry is NOT stored when:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Secure or sensitive fields</span> — you are typing in a
          password or secure-entry field, or a field designated for email, phone numbers, PINs or
          numeric codes, URLs, or search.
        </li>
        <li>
          <span className="font-medium">Email addresses</span> — the text contains an email
          address.
        </li>
        <li>
          <span className="font-medium">Payment card numbers</span> — the text contains a 13–16
          digit sequence that looks like a credit or debit card number.
        </li>
        <li>
          <span className="font-medium">Verification or one-time codes</span> — the text contains
          a standalone 4–8 digit code.
        </li>
        <li>
          <span className="font-medium">Account or ID numbers</span> — the text contains a long
          unbroken run of 9 or more digits.
        </li>
        <li>
          <span className="font-medium">Passwords, API keys, and other secrets</span> — the text
          contains a high-entropy token that looks like a password, key, or other random secret.
        </li>
      </ul>
      <p>When in doubt, Arcatext errs on the side of not storing.</p>
      <p>
        <span className="font-medium">Your control.</span> You can turn off Reword storage
        entirely at any time in the Arcatext app.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Anonymized and De-Identified Language Data
      </h3>
      <p>
        Arcatext and Adalithic LLC may use stored messages and language interactions to improve
        language systems, translation quality, Rewording features, and large language model
        performance.
      </p>
      <p>
        Arcatext and Adalithic LLC may also create anonymized, de-identified, or aggregated
        language datasets derived from user-submitted messages. These datasets are used internally
        by Adalithic LLC to improve Arcatext's language features and quality. We do not sell,
        license, or share these datasets with third parties.
      </p>
      <p>
        Anonymized or de-identified datasets are not intended to identify you personally or be
        associated with a specific user profile. However, no anonymization or de-identification
        process can guarantee that re-identification is impossible in every circumstance. Adalithic
        LLC uses reasonable safeguards designed to reduce this risk.
      </p>

      <h3 className="font-semibold text-secondary pt-2">9. Data Retention</h3>
      <p>
        We retain information only for as long as reasonably necessary for the purposes described
        in this Privacy Policy, unless a longer retention period is required by law.
      </p>
      <p>In general:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Reworded messages linked to your profile may be retained while your account is active or
          as needed to provide features and metrics.
        </li>
        <li>App preferences may be stored locally on your device or linked to your profile.</li>
        <li>
          Technical logs may be temporarily retained for debugging, reliability, abuse prevention,
          or security purposes.
        </li>
        <li>
          Support messages may be retained as needed to respond to users and maintain support
          records.
        </li>
        <li>
          Anonymized, de-identified, or aggregated datasets may be retained for longer periods
          because they are not intended to identify a specific user.
        </li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">10. Sensitive Information</h3>
      <p>
        Arcatext is a language tool, not a secure vault. You should not submit highly sensitive
        information for translation, Rewording, checking, or learning features.
      </p>
      <p>Avoid entering:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Passwords</li>
        <li>Credit card numbers</li>
        <li>Bank information</li>
        <li>Social Security numbers or government IDs</li>
        <li>Medical records</li>
        <li>Legal secrets</li>
        <li>Private addresses</li>
        <li>Confidential business information</li>
        <li>
          Highly sensitive personal messages you do not want processed or stored for
          language-related uses
        </li>
      </ul>
      <p>
        If you choose to submit sensitive information, you understand that it may be processed by
        Arcatext and its service providers to provide the requested feature.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Children's Privacy</h3>
      <p>
        Arcatext is a general audience application and is not specifically directed toward
        children under the age of 13.
      </p>
      <p>
        Users under 13 should use Arcatext only with permission and supervision from a parent or
        legal guardian.
      </p>
      <p>
        If Adalithic LLC becomes aware that personal information from a child under 13 has been
        collected in violation of applicable law, we may take steps designed to restrict or delete
        that information where appropriate.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. International Data Transfers</h3>
      <p>
        Arcatext and its service providers may process information in the United States or other
        countries. These countries may have privacy laws that differ from the laws in your
        location.
      </p>
      <p>
        By using Arcatext, you understand that your information may be processed in countries
        outside your place of residence.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Your Choices</h3>
      <p>You have several choices regarding your information.</p>
      <p className="font-medium">Keyboard Permissions and Access Settings</p>
      <p>
        You may disable keyboard permissions, internet permissions, or related access settings
        through your device or operating system settings. Some Arcatext features that rely on
        online processing or keyboard integration may no longer function properly.
      </p>
      <p className="font-medium">Stop Using the Keyboard</p>
      <p>You can remove Arcatext from your keyboard list or uninstall the app at any time.</p>
      <p className="font-medium">Limit What You Submit</p>
      <p>
        You can choose not to submit sensitive or personal text for translation, Rewording,
        checking, or learning features.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Privacy Requests</h3>
      <p>
        If you have questions about your information or this Privacy Policy, you may contact
        Adalithic LLC at:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC may review and respond to requests in accordance with applicable law and the
        operational capabilities of the company.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. California Privacy Notice</h3>
      <p>
        If you are a California resident, this section provides additional information.
      </p>
      <p>Arcatext may process the following categories of information:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">User-submitted content</span> — Text submitted for
          translation, Rewording, checking, or analysis. Purpose: to provide language features.
        </li>
        <li>
          <span className="font-medium">Stored Reworded messages</span> — Messages you Reword that
          may be linked to your profile. Purpose: to provide metrics, history, and learning
          features.
        </li>
        <li>
          <span className="font-medium">Account information</span> — Email address, username,
          authentication information. Purpose: to provide account-based features.
        </li>
        <li>
          <span className="font-medium">Preferences</span> — Language, script, tone, gender, and
          keyboard settings. Purpose: to customize the app.
        </li>
        <li>
          <span className="font-medium">Technical information</span> — App version, crash logs,
          device type, operating system. Purpose: to maintain and improve the app.
        </li>
        <li>
          <span className="font-medium">Support information</span> — Emails or messages you send
          us. Purpose: to respond to support requests.
        </li>
        <li>
          <span className="font-medium">De-identified language data</span> — Anonymized or
          aggregated language examples derived from user submissions. Purpose: to improve language
          systems.
        </li>
      </ul>
      <p>Adalithic LLC does not sell or share your personal information.</p>
      <p>If you have questions about your privacy rights, contact arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Security</h3>
      <p>
        We use reasonable technical and organizational measures to protect information processed
        through Arcatext.
      </p>
      <p>
        Profile-linked Reworded messages are treated as confidential user data. We take steps
        designed to restrict access to this information to authorized personnel and service
        providers who need access to operate, secure, improve, or support Arcatext.
      </p>
      <p>
        However, no method of electronic storage or internet transmission is completely secure. We
        cannot guarantee absolute security.
      </p>
      <p>You are responsible for deciding what information you submit through Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Data Sharing</h3>
      <p>Arcatext and Adalithic LLC may share information in limited circumstances:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>With AI providers to provide translation, Rewording, checking, and language features</li>
        <li>With service providers who help operate, secure, store, analyze, or improve the app</li>
        <li>With analytics or crash-reporting providers</li>
        <li>With payment processors or app-store providers</li>
        <li>If required by law or legal process</li>
        <li>To protect the rights, safety, or security of Arcatext, users, Adalithic LLC, or others</li>
        <li>In connection with mergers, acquisitions, financing, or asset sales</li>
      </ul>
      <p>We do not sell your data.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. App Store, Billing, and Payment Information
      </h3>
      <p>
        If Arcatext offers paid features, subscriptions, or in-app purchases, payment processing
        may be handled by third-party platform providers such as Apple, Google, or other
        authorized payment processors.
      </p>
      <p>For example:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Purchases on Apple platforms may be processed through Apple's App Store and StoreKit systems.</li>
        <li>Purchases on Android platforms may be processed through Google Play Billing and Google payment systems.</li>
      </ul>
      <p>
        Arcatext and Adalithic LLC do not directly receive or store full payment card information
        used through these platform billing systems.
      </p>
      <p>
        Your use of third-party app stores, billing systems, and payment providers may also be
        governed by those providers' own privacy policies, terms, and payment rules.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our app,
        technology, service providers, legal obligations, or business practices.
      </p>
      <p>When we update the policy, we will revise the "Last Updated" date at the top.</p>
      <p>
        If changes are significant, we may provide additional notice through the app, website, or
        other appropriate methods.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Contact Us</h3>
      <p>If you have questions, concerns, or privacy requests, contact:</p>
      <p>
        Adalithic LLC
        <br />
        Arcatext Privacy Contact
        <br />
        Email: arcatextapp@gmail.com
        <br />
        Support Page: https://adalithic.com/
      </p>
    </div>
  );
}
