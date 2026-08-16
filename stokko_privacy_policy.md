# STOKKO PRIVACY POLICY (سياسة الخصوصية / POLITIQUE DE CONFIDENTIALITÉ)

**Last Updated / Effective Date:** August 16, 2026

---

## 1. ENGLISH VERSION

### 1.1 COMPLIANCE & LEGAL FRAMEWORK
Your privacy is highly important to us. This Privacy Policy describes how **Stokko** (the “Application” or “Service”), published and operated under the developer brand name **“Nexiscode”** (collectively, “we”, “us”, or “our”), collects, processes, stores, and protects your information.

Nexiscode complies with the following regulatory frameworks:
* **Algerian Law No. 18-07:** Relating to the protection of individuals in the processing of personal data.
* **General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679):** The European Union’s framework for data privacy and protection.

---

### 1.2 DATA WE COLLECT & ZERO-PII ARCHITECTURE

#### A. Merchant Account Information
When you create an account in Stokko, we collect basic administrative data to verify your identity:
* **Google One-Tap Sign-In:** We collect your verified email address, full name, profile picture URL, and a unique Google identifier.
* **Email Registration:** We collect your email address, full name, and a securely hashed password.
* **Purpose:** This data is processed strictly for authentication, account security, session management, and facilitating VIP subscription status checks.

#### B. Business & Inventory Ledger Data (Room DB)
Stokko is built as an **offline-first & privacy-by-design** application:
* **Strictly Local PII Storage:** All customer and debtor personal details (real names, phone numbers, addresses, personal debt notes) and supplier contact records are stored **strictly and locally on your device** within an AES-256 encrypted SQLite database (Room DB). **No customer or supplier personal identifying information (PII) is ever transmitted to or stored on external cloud servers.**
* **Pseudonymized VIP Cloud Synchronization:** If you subscribe to the VIP Tier, your inventory levels, product catalog, sales totals, and **anonymized debtor aliases** are synchronized to our cloud servers powered by **Google Firebase**. Data is encrypted in transit (SSL/TLS) and at rest (AES-256).
* **Cashier Terminal Anonymization:** Multi-device transactions record point-of-sale terminal/device IDs (POS IDs) rather than personal employee records.

---

### 1.3 DEBTOR & SUPPLIER DATA (THIRD-PARTY PERSONAL DATA)
* **Merchant as Data Controller:** You (the Merchant) act as the sole Data Controller for all customer and supplier personal data entered into your local device.
* **Developer as Data Processor:** Nexiscode acts strictly as a technical Data Processor for cloud backup of non-PII inventory and sales metadata for VIP users. We do not access, analyze, share, or sell any third-party personal data under any circumstances.

---

### 1.4 STATUTORY RECORD RETENTION & FISCAL RESPONSIBILITY (LAW 07-11)
* **10-Year Local Ledger Retention:** Sales and transaction ledgers are retained permanently on your local device to assist you in fulfilling the **10-year statutory accounting record retention obligation** under Article 11 of Algerian Law 07-11 (Financial Accounting System - SCF).
* **Merchant Tax Responsibility:** The Merchant remains solely and exclusively responsible for the accuracy of their sales transactions, issuing legal invoices bearing their Tax ID (NIF/NIS), and filing statutory tax returns. Any estimated tax calculations (TVA/IFU) provided in the Application are internal management estimates only.

---

### 1.5 CROWDSOURCED BARCODE DATABASE
When you scan an unknown barcode, the Application may transmit anonymized metadata (the barcode number, product title, and category) to improve the shared directory.

**Strict Protection Clause:** The shared catalog NEVER accesses, collects, or shares:
* Your buying prices or selling prices.
* Your inventory quantities or stock levels.
* Your financial reports, profits, or sales volumes.
* Customer debt records or debtor identities.
* The name, identity, or physical location of your store.

---

### 1.6 DATA RETENTION & DELETION RIGHTS
* **Offline Data Deletion:** Uninstalling the Application or clearing its storage will permanently delete all your local database (Room DB) records.
* **Cloud Data Deletion (VIP):** VIP users can request the permanent deletion of their account and all associated cloud-synced records directly within the Application settings or by emailing us at **support@nexiscode.online**.

---

### 1.7 LEGAL PUBLISHER NOTICE & CONTACT
* **Developer Brand:** Nexiscode (Google Play publisher handle)
* **Legal Owner & Publisher:** Stokko is owned, operated, and published by independent software developer **Mohssin Badji Amrane** in his personal capacity under the trade handle “Nexiscode”.
* **Email Support:** support@nexiscode.online
* **Website:** https://nexiscode.online/

---

## 2. ARABIC VERSION (النسخة العربية)

### 2.1 إطار الامتثال القانوني والهوية التجارية
خصوصيتك تهمنا للغاية. توضح سياسة الخصوصية هذه كيف يقوم تطبيق **Stokko**، المنشور والمشغل تحت الاسم التجاري المعتمد للمطور **“Nexiscode”** بواسطة المطور المستقل **Mohssin Badji Amrane**، بجمع ومعالجة وحماية بياناتك.

يتوافق تطبيق Stokko مع القوانين والتشريعات التالية:
* **القانون الجزائري رقم 18-07:** المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.
* **اللائحة العامة لحماية البيانات (GDPR):** الإطار القانوني للاتحاد الأوروبي لحماية الخصوصية.

---

### 2.2 البيانات التي نجمعها وهندسة الخصوصية بالتصميم

#### أ. معلومات حساب التاجر
عند إنشاء حساب في تطبيق Stokko، نجمع بيانات إدارية أساسية للتحقق من هويتك:
* **تسجيل الدخول عبر Google:** نجمع البريد الإلكتروني، الاسم الكامل، ورابط الصورة الشخصية.
* **التسجيل بالبريد:** نجمع البريد الإلكتروني، الاسم الكامل، وكلمة المرور (مشفرة بشكل آمن).
* **الغرض:** تقتصر المعالجة على المصادقة، وتأمين الحساب، وإدارة الجلسات، والتحقق من حالة اشتراك VIP.

#### ب. بيانات المتجر والمخزون والحسابات (Room DB)
تطبيق Stokko مصمم للعمل وفق مبدأ **"المحلي أولاً مع انعدام نقل المعطيات الشخصية للسحابة"**:
* **التخزين المحلي للبيانات الشخصية الحساسة:** جميع أسماء الزبائن الحقيقية، أرقام هواتفهم، عناوينهم، وسجلات ديونهم وبيانات الموردين تُخزن **حصرياً ومحلياً داخل ذاكرة جهاز التاجر** في قاعدة بيانات مشفرة (Room DB) بتقنية AES-256. **لا يتم نقل أو رفع أي من هذه البيانات المعرّفة للأشخاص إلى خوادم سحابية خارجية نهائياً.**
* **المزامنة السحابية (VIP):** تقتصر المزامنة السحابية المشفرة (عبر Google Firebase) على البيانات غير المعرّفة للأشخاص؛ مثل: كميات المخزون، أسعار السلع، أرقام العمليات، والأسماء المستعارة (Aliases) المجهولة لتمكين الكاشير من تسجيل المبيعات دون كشف الهوية الحقيقية للزبائن.
* **هوية نقاط البيع والعمال:** المعاملات السحابية تسجل فقط بمعرفات نقاط البيع (POS IDs) والأجهزة دون معالجة الهويات الشخصية للعمال.

---

### 2.3 بيانات الدائنين والموردين (مسؤولية بيانات الأطراف الثالثة)
* **التاجر بصفتك مراقباً للبيانات (Data Controller):** أنت المسؤول القانوني الأول عن جمع هذه البيانات وتخزينها محلياً على جهازك.
* **المطور بصفتك معالجاً للبيانات (Data Processor):** تعمل Nexiscode كمعالج بيانات تقني فقط لغرض النسخ الاحتياطي السحابي لبيانات المخزون غير الشخصية لمشتركي VIP. لا نطلع على هذه البيانات ولا نجمعها ولا نبيعها ولا نشاركها مع أي طرف ثالث.

---

### 2.4 حفظ السجلات الجبائية والمسؤولية القانونية (القانون 07-11)
* **حفظ السجلات لمدة 10 سنوات:** يحتفظ تطبيق Stokko بسجلات المبيعات والعمليات المحاسبية محلياً في جهاز التاجر لتمكينه من الوفاء بالتزامه القانوني بحفظ الوثائق المحاسبية لمدة **10 سنوات** طبقاً للمادة 11 من القانون 07-11 (النظام المحاسبي المالي SCF).
* **مسؤولية التاجر الجبائية:** التاجر هو المسؤول القانوني والجبائي الحصري عن صحة معاملاته، واستخراج وطباعة فواتيره الرسمية المتضمنة لرقمه الجبائي (NIF)، وتقديم تصريحاته لمصالح الضرائب. التقارير التقديرية داخل التطبيق (مثل TVA وIFU) هي أدوات استرشادية داخلية ولا تُعد وثائق تصريح رسمي.

---

### 2.5 الكتالوج المشترك للباركود وحماية أسرارك التجارية
عند مسح باركود منتج غير مسجل، يرفع التطبيق فقط: رقم الباركود، اسم المنتج، وتصنيفه. **ولا يجمع ولا يشارك أبداً:**
* أسعار الشراء أو أسعار البيع الخاصة بك.
* كميات المخزون أو مستويات السلع في مستودعك.
* التقارير المالية، الأرباح، أو المبيعات.
* سجلات ديون زبائنك أو هوياتهم.
* اسم متجرك أو موقعه الجغرافي.

---

### 2.6 حقوق المستخدم والاحتفاظ بالبيانات
* **محلياً:** إلغاء تثبيت التطبيق يمسح قاعدة البيانات المحلية (Room DB) نهائياً.
* **سحابياً (VIP):** يمكنك طلب حذف حسابك وقاعدة بياناتك السحابية نهائياً في أي وقت من خلال إعدادات التطبيق أو بمراسلتنا على: **support@nexiscode.online**.

---

### 2.7 الإشعار القانوني للمنشور ومعلومات الاتصال
* **الاسم التجاري للمطور:** Nexiscode (اسم المطور المعتمد على متجر Google Play).
* **المالك والناشر القانوني:** مطور البرمجيات المستقل **Mohssin Badji Amrane** بصفته الشخصية.
* **البريد الإلكتروني:** support@nexiscode.online
* **الموقع الرسمي:** https://nexiscode.online/

---

## 3. FRENCH VERSION (VERSION FRANÇAISE)

### 3.1 CADRE JURIDIQUE ET CONFORMITÉ
Votre vie privée est de la plus haute importance pour nous. **Stokko**, publié et exploité sous la marque développeur **“Nexiscode”** par le développeur indépendant **Mohssin Badji Amrane**, est conforme à :
* **La Loi algérienne n° 18-07 :** Relative à la protection des personnes physiques dans le traitement des données à caractère personnel.
* **Le Règlement Général sur la Protection des Données (RGPD) :** Règlement européen (UE) 2016/679.

---

### 3.2 ARCHITECTURE LOCALE & SANS TRANSFERT DE DONNÉES PERSONNELLES

#### A. Informations de Compte
Authentification sécurisée via Google One-Tap ou e-mail pour la gestion de session et la vérification du statut VIP.

#### B. Données du Magasin et Grand Livre (Room DB)
* **Stockage Local Exclusif des Données Personnelles :** Les noms réels, numéros de téléphone et coordonnées des clients (débiteurs) et fournisseurs sont stockés **exclusivement sur la mémoire locale de l'appareil** dans une base chiffrée AES-256 (Room DB). **Aucune donnée nominative n'est transférée vers des serveurs Cloud externes.**
* **Synchronisation Cloud Pseudonymisée (VIP) :** La synchronisation multi-appareils via Google Firebase ne transmet que des métadonnées non nominatives (stocks, totaux de vente, pseudonymes / alias de débiteurs).
* **Anonymisation des Caissiers :** Les transactions sont associées à des identifiants de terminaux/caisses (POS IDs) sans traitement des données nominatives des employés.

---

### 3.3 CONSERVATION COMPTABLE & RESPONSABILITÉ FISCALE (LOI 07-11)
* **Conservation Décennale (10 ans) :** Les registres de ventes sont conservés localement de manière permanente pour aider le commerçant à respecter l'obligation de **conservation décennale (10 ans)** des pièces comptables (Art. 11 de la loi 07-11 - SCF).
* **Responsabilité Fiscale :** Le commerçant est seul responsable de ses déclarations fiscales et de l'émission de factures avec son NIF. Les rapports de TVA/IFU intégrés sont indicatifs pour la gestion interne.

---

### 3.4 CATALOGUE GLOBAL DE CODES-BARRES
Le partage de métadonnées de codes-barres est strictement anonyme. Il ne partage JAMAIS vos prix d'achat/vente, vos niveaux de stock, vos bilans financiers, ou l'identité de vos débiteurs.

---

### 3.5 SUPPRESSION DES DONNÉES & CONTACT
Pour toute demande de purge définitive de compte cloud : **support@nexiscode.online**.

* **Marque Développeur :** Nexiscode
* **Éditeur et Propriétaire Légal :** Mohssin Badji Amrane
* **Site Web :** https://nexiscode.online/
