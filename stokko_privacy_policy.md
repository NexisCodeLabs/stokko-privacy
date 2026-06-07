# STOKKO PRIVACY POLICY (سياسة الخصوصية / POLITIQUE DE CONFIDENTIALITÉ)

**Last Updated / Effective Date:** June 7, 2026

---

## 1. ENGLISH VERSION

### 1.1 COMPLIANCE & LEGAL FRAMEWORK
Your privacy is highly important to us. This Privacy Policy describes how **Stokko** (the "Application" or "Service"), published and operated under the developer brand name **"Nexiscode"** (collectively, "we", "us", or "our"), collects, processes, stores, and protects your information.

Nexiscode complies with the following regulatory frameworks:
* **Algerian Law No. 18-07:** Relating to the protection of individuals in the processing of personal data.
* **General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679):** The European Union’s framework for data privacy and protection, applicable where merchants process data of EU data subjects.

### 1.2 DATA WE COLLECT & PROCESSING PURPOSES

#### A. Merchant Account Information
When you create an account in Stokko, we collect basic administrative data to verify your identity:
* **Google One-Tap Sign-In:** If you register using Google One-Tap, we collect your verified email address, full name, profile picture URL, and a unique Google identifier.
* **Email Registration:** If you sign up using email, we collect your email address, full name, and a password (securely hashed).
* **Purpose:** This data is processed strictly for authentication, account security, session management, and facilitating VIP subscription status checks.

#### B. Business & Inventory Ledger Data (Room DB)
Stokko is built as an **offline-first** application.
* **Local Storage:** All local transaction records, inventory counts, product lists, buying/selling prices, customer debt records (debtor names, phone numbers, debt amounts), and supplier ledgers are stored securely on your device’s local storage using an SQLite database (Room DB).
* **VIP Cloud Synchronization:** If you subscribe to the **VIP Tier**, your local data is synchronized to our cloud servers powered by **Google Firebase**. 
  * This data is encrypted in transit (using SSL/TLS) and at rest (using AES-256).
  * Strict Firebase Security Rules ensure that only you and your authorized store cashiers can access or query your store’s synchronized database.

### 1.3 DEBTOR & SUPPLIER DATA (THIRD-PARTY PERSONAL DATA)
Stokko allows Merchants to record transactional ledger information regarding their customers (debtors) and suppliers (e.g., names, phone numbers, and balances).
* **Merchant as Data Controller:** Under GDPR and Algerian Law No. 18-07, you (the Merchant) are the **Data Controller** for all customer and supplier personal data entered into the Application. You are solely responsible for obtaining explicit consent from these individuals before recording their contact information or financial ledgers.
* **Developer as Data Processor:** Nexiscode acts strictly as a **Data Processor** for the purpose of cloud backup (Firebase) for VIP users. We do not access, read, analyze, share, or sell this third-party personal data under any circumstances.

### 1.4 CROWDSOURCED BARCODE DATABASE & STRICT PRIVACY PROTECTION
To facilitate quick inventory setup, Stokko builds a shared global catalog of product barcodes.
* **Anonymized Metadata Sharing:** When you scan an unknown barcode, the Application may transmit anonymized metadata (the barcode number, product title, and product category) to improve the shared directory.
* **Strict Protection Clause:** To protect your commercial secrets and proprietary business data, the crowdsourced shared catalog **NEVER** accesses, collects, or shares:
  * Your buying prices or selling prices.
  * Your inventory quantities or stock levels.
  * Your financial reports, profits, or sales volumes.
  * Customer debt records or debtor identities.
  * The name, identity, or physical location of the store that scanned the barcode.

### 1.5 DATA RETENTION & DELETION RIGHTS
We respect your rights under data protection laws (Law 18-07 / GDPR), including the right to access, correct, and delete your data.
* **Offline Data Deletion:** If you operate on the Free Tier, uninstalling the Application or clearing its storage will permanently delete all your local database (Room DB) records.
* **Cloud Data Deletion (VIP):** VIP users can request the permanent deletion of their account and all associated cloud-synced database files. You can request account deletion directly within the Application settings or by emailing us at **ssecure90@gmail.com**. Upon receipt of an account deletion request, all your store records on Firebase will be permanently and irreversibly purged from our active databases.

### 1.6 SECURITY MEASURES & THIRD-PARTY SERVICES
We implement technical measures (TLS/SSL for transit, Firebase Rules) to protect your data. Stokko utilizes:
* **Google Play Services / Google One-Tap Sign-In:** For secure authentication.
* **Google Firebase:** For cloud database backup and sync.
These services are governed by Google's Privacy Policy.

### 1.7 LEGAL PUBLISHER NOTICE & CONTACT INFORMATION
* **Developer Brand:** Nexiscode (Google Play publisher handle)
* **Legal Owner & Publisher:** Stokko is owned, operated, and published by **Mohssin Badji Amrane** as an independent software developer, who binds himself to all obligations and data processor requirements under the trading handle "Nexiscode".
* **Email Support:** ssecure90@gmail.com

---

## 2. ARABIC VERSION (النسخة العربية)

### 2.1 إطار الامتثال القانوني والهوية التجارية
خصوصيتك تهمنا للغاية. توضح سياسة الخصوصية هذه كيف يقوم تطبيق **Stokko**، المنشور والمشغل تحت الاسم التجاري المعتمد للمطور **"Nexiscode"** (يُشار إليه بـ "المطور" أو "نحن")، بجمع ومعالجة وحماية بياناتك.

يتوافق تطبيق Stokko مع القوانين والتشريعات التالية:
* **القانون الجزائري رقم 18-07:** المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.
* **اللائحة العامة لحماية البيانات (GDPR):** الإطار القانوني للاتحاد الأوروبي لحماية الخصوصية، ويطبق في حال تعامل التاجر مع زبائن خاضعين لهذا القانون.

### 2.2 البيانات التي نجمعها وأغراض المعالجة

#### أ. معلومات حساب التاجر
عند إنشاء حساب في تطبيق Stokko، نجمع بيانات إدارية أساسية للتحقق من هويتك وتسيير حسابك:
* **تسجيل الدخول بنقرة واحدة من Google:** إذا سجلت عبر حساب Google، نجمع البريد الإلكتروني، والاسم الكامل، ورابط الصورة الشخصية، والمعرّف الفريد الخاص بك على جوجل.
* **التسجيل التقليدي:** إذا سجلت بالبريد الإلكتروني، نجمع البريد، الاسم الكامل، وكلمة المرور (مشفرة بشكل آمن).
* **الغرض:** معالجة هذه البيانات تقتصر على المصادقة، وتأمين الحساب، وإدارة الجلسات، والتحقق من حالة اشتراك VIP.

#### ب. بيانات المتجر والمخزون والحسابات (Room DB)
تطبيق Stokko مصمم للعمل محلياً أولاً (Offline-First):
* **التخزين المحلي:** جميع تفاصيل المنتجات، كميات المخزون، أسعار البيع والشراء، سجلات ديون الزبائن (الأسماء، أرقام الهواتف، المبالغ) والواردات تُخزن بشكل آمن تماماً داخل قاعدة بيانات محلية على جهازك (Room DB).
* **المزامنة السحابية (VIP):** إذا اخترت الترقية إلى باقة VIP، يتم مزاينة هذه البيانات المحلية تلقائياً مع خوادم سحابية آمنة مدعومة من **Google Firebase**.
  * يتم تشفير هذه البيانات أثناء النقل (SSL/TLS) وأثناء السكون على الخوادم (AES-256).
  * تضمن قواعد أمان Firebase الصارمة عدم إمكانية الوصول لقاعدة بيانات متجرك إلا من خلال حسابك وحسابات العمال المصرح لهم من قبلك.

### 2.3 بيانات الدائنين والموردين (مسؤولية بيانات الأطراف الثالثة)
يتيح Stokko للتجار إدخال أسماء وأرقام هواتف وسجلات ديون زبائنهم ومورديهم.
* **التاجر بصفتك مراقباً للبيانات (Data Controller):** بموجب القانون 18-07 والـ GDPR، أنت هو المسؤول القانوني الأول عن جمع هذه البيانات وتخزينها، ويتوجب عليك الحصول على موافقة صريحة من زبائنك قبل تسجيل أسمائهم وأرقام هواتفهم في التطبيق.
* **المطور بصفتك معالجاً للبيانات (Data Processor):** تعمل Nexiscode كمعالج بيانات تقني فقط لغرض النسخ الاحتياطي السحابي (Firebase) لمشتركي VIP. لا نطلع على هذه البيانات ولا نجمعها ولا نبيعها ولا نشاركها مع أي طرف ثالث تحت أي ظرف كان.

### 2.4 الكتالوج المشترك للباركود وحماية أسرارك التجارية
لتسهيل عملية إدخال المخزون، يبني التطبيق دليلاً مشتركاً لأسماء المنتجات بناءً على الباركود:
* **مشاركة البيانات الوصفية المجهولة:** عند مسح باركود منتج غير معروف، يرفع التطبيق فقط: رقم الباركود، اسم المنتج، وتصنيفه.
* **بند الحماية الصارم:** لحماية خصوصية متجرك وأسرارك التجارية، فإن الكتالوج المشترك **لا يجمع ولا يرفع ولا يشارك أبداً** ما يلي:
  * أسعار الشراء أو أسعار البيع الخاصة بك.
  * كميات المخزون أو مستويات السلع في مستودعك.
  * التقارير المالية، الأرباح، المبيعات، أو الهوامش.
  * سجلات ديون زبائنك أو هوياتهم.
  * اسم متجرك أو موقعه الجغرافي أو هويتك.

### 2.5 حقوق المستخدم والاحتفاظ بالبيانات
نحن نحترم حقوقك القانونية في الوصول إلى بياناتك وتصحيحها وحذفها:
* **حذف البيانات محلياً:** في الفئة المجانية، يؤدي إلغاء تثبيت التطبيق أو مسح بياناته من إعدادات الهاتف إلى حذف قاعدة البيانات المحلية (Room DB) نهائياً وبشكل غير قابل للاسترجاع.
* **حذف البيانات سحابياً (VIP):** يمكنك طلب حذف حسابك وقاعدة بياناتك السحابية نهائياً في أي وقت من خلال إعدادات التطبيق أو بمراسلتنا على البريد الإلكتروني **ssecure90@gmail.com**. عند استلام طلبك، سيتم مسح جميع سجلات متجرك على خوادم Firebase فوراً وبشكل نهائي.

### 2.6 الخدمات والجهات الخارجية
يستخدم Stokko خدمات من معالجين خارجيين لتوفير المصادقة وقواعد البيانات:
* **خدمات Google Play / Google One-Tap:** للمصادقة الآمنة.
* **Google Firebase:** للاستضافة السحابية الآمنة وقواعد البيانات والمزامنة.
تخضع هذه الخدمات لسياسة خصوصية شركة Google.

### 2.7 الإشعار القانوني للمنشور ومعلومات الاتصال
* **الاسم التجاري للمطور:** Nexiscode (اسم المطور المعتمد على متجر Google Play).
* **المالك والناشر القانوني:** هذا التطبيق مملوك ومُدار بالكامل بواسطة مطور البرمجيات المستقل **Mohssin Badji Amrane** بصفته الشخصية، وهو المسؤول والملتزم بكافة تعهدات الخصوصية الواردة في هذه الوثيقة تحت اسم المطور المستعار "Nexiscode".
* **البريد الإلكتروني:** ssecure90@gmail.com

---

## 3. FRENCH VERSION (VERSION FRANÇAISE)

### 3.1 COMPLIANCE & CADRE JURIDIQUE ET IDENTIFICATION DE LA MARQUE
Votre vie privée est de la plus haute importance pour nous. Cette Politique de confidentialité décrit comment **Stokko** (l'"Application" ou le "Service"), publié et exploité sous le nom de marque de développeur **"Nexiscode"** (collectivement, "nous", "notre" ou "nos"), collecte, traite, stocke et protège vos informations.

Nexiscode est conforme aux cadres réglementaires suivants :
* **Loi algérienne n° 18-07 :** Relative à la protection des personnes physiques dans le traitement des données à caractère personnel.
* **Règlement général sur la protection des données (RGPD) :** Le cadre européen pour la protection des données, applicable si le Marchand traite les données de résidents de l'UE.

### 3.2 DONNÉES COLLECTÉES & OBJECTIFS DU TRAITEMENT

#### A. Informations de compte du Marchand
Lors de la création d'un compte, nous collectons des données administratives de base pour vérifier votre identité :
* **Google One-Tap Sign-In :** Si vous vous enregistrez via Google, nous collectons votre adresse e-mail, nom complet, URL de photo de profil et un identifiant unique Google.
* **Inscription par e-mail :** Si vous utilisez un e-mail, nous collectons l'adresse e-mail, le nom complet et le mot de passe (chiffré).
* **Objectif :** Authentification, sécurité du compte, gestion de session et vérification de l'abonnement VIP.

#### B. Données du magasin et grand livre (Room DB)
Stokko est une application locale (Offline-First) :
* **Stockage local :** Toutes les transactions, listes de produits, prix d'achat/vente, dossiers de dettes des clients (noms, téléphones, soldes) et fournisseurs sont stockés localement sur votre appareil dans une base de données SQLite (Room DB).
* **Synchronisation Cloud (VIP) :** Si vous êtes membre VIP, vos données locales sont synchronisées sur **Google Firebase**.
  * Chiffrement en transit (SSL/TLS) et au repos (AES-256).
  * Les règles de sécurité de Firebase garantissent que seul votre compte authentifié (et vos caissiers autorisés) a accès à vos données.

### 3.3 DONNÉES DES DÉBITEURS ET DES FOURNISSEURS (DONNÉES DE TIERS)
Le Marchand peut enregistrer les noms, téléphones et soldes des clients débiteurs et des fournisseurs.
* **Marchand comme Responsable du traitement (Data Controller) :** En vertu de la loi 18-07 et du RGPD, vous êtes le seul responsable légal d'obtenir le consentement de vos clients avant d'entrer leurs coordonnées dans l'Application.
* **Développeur comme Sous-traitant (Data Processor) :** Nexiscode agit uniquement en tant que sous-traitant pour la sauvegarde cloud de l'abonnement VIP. Nous n'accédons pas à ces données, ne les partageons pas et ne les vendons pas.

### 3.4 CATALOGUE GLOBAL DE CODES-BARRES & PROTECTION STRICTE
Pour faciliter la saisie automatique du stock, Stokko construit un catalogue partagé :
* **Partage de métadonnées anonymes :** Lors du scan d'un code-barres inconnu, l'App transmet uniquement le numéro du code-barres, le nom du produit et la catégorie.
* **Clause de protection stricte :** Ce catalogue partagé ne collectera, ne stockera ni ne partagera **JAMAIS** :
  * Votre prix d'achat ou de vente.
  * Vos niveaux de stock ou quantités réelles.
  * Vos rapports financiers, ventes ou bénéfices.
  * L'identité de vos débiteurs ou leurs dettes.
  * Le nom, l'identité ou la localisation de votre magasin.

### 3.5 CONSERVATION ET SUPPRESSION DES DONNÉES
* **Suppression locale :** Sur le plan gratuit, la suppression de l'application ou l'effacement de ses données supprime définitivement la base de données Room DB de l'appareil.
* **Suppression Cloud (VIP) :** Les membres VIP peuvent demander la suppression définitive de leur compte et de toutes les données Firebase à tout moment via les paramètres ou par e-mail à **ssecure90@gmail.com**. Toutes les données cloud seront alors définitivement purgées de nos serveurs.

### 3.6 SÉCURITÉ ET SERVICES TIERS
Stokko utilise :
* **Google Play Services / Google One-Tap Sign-In** pour l'authentification.
* **Google Firebase** pour l'hébergement cloud.

### 3.7 AVIS D'ÉDITEUR LÉGAL ET CONTACT
* **Nom de marque :** Nexiscode (identifiant de publication Google Play)
* **Éditeur et Propriétaire Légal :** L'Application Stokko est détenue, éditée et exploitée par le développeur de logiciels indépendant **Mohssin Badji Amrane** à titre individuel sous le pseudonyme commercial "Nexiscode".
* **Support E-mail :** ssecure90@gmail.com
