/* ==========================================================================
   RWANDAGIFT - MAIN APPLICATION LOGIC & MULTILINGUAL (EN, RW, FR) HUB
   ========================================================================== */

// CONSTANTS & OFFICIAL URLS FROM RQTS
const REGISTRATION_URL = "https://mulaearn.com/register.php?ref=Rwandacurrency";
const WHATSAPP_SUPPORT_NUMBER = "250735323980";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Bz3qAOuhRY45GiW4M3swad";

// 1. I18N TRANSLATION DICTIONARY
const TRANSLATIONS = {
  en: {
    brandName: "Rwanda",
    navHome: "Home",
    navActivations: "Activations & Fees",
    navCalc: "Earnings Calc",
    navMethods: "Ways to Earn",
    navPosts: "Country Guides",
    navGallery: "Payment Proofs",
    navHow: "How It Works",
    signIn: "Sign In",
    createAccount: "Create Account",
    joinWaGroup: "Join WhatsApp Group",
    activeEarnersTag: "14,280+ Active Earners Today in East Africa",
    heroTitle: `Turn Your Daily Screen Time Into <span class="gradient-text">Real Cash Earnings</span>`,
    heroDesc: "Rwandagift is Africa's premier digital reward agency. Watch TikTok & YouTube clips, answer daily surveys, play chess & draughts tournaments, and earn multi-level referral bonuses paid instantly to your MTN Mobile Money, Airtel, or M-Pesa account!",
    getStartedBtn: "Get Started Now",
    viewFeesBtn: "View Activation Fees",
    whatsappSupportBtn: "WhatsApp Support",
    statPaid: "RWF 48.5M+",
    statPaidDesc: "Total Withdrawals Paid",
    statCountries: "18+",
    statCountriesDesc: "Supported Countries",
    statPayouts: "Instant",
    statPayoutsDesc: "Mobile Money Payouts",
    activateToEarn: "Activate Account To Start Earning",
    matrixHeaderTag: "Multi-Country Coverage",
    matrixTitle: "Activation Fees & Affiliate Payout Matrix",
    matrixSubtitle: "Select your country to view local activation fees, welcome bonuses, multi-level affiliate commission rewards, and local mobile money payment methods.",
    oneTimeFee: "One-Time Activation Fee",
    welcomeBonusLabel: "Welcome Signup Bonus:",
    level1Label: "Level 1 Direct Affiliate:",
    level2Label: "Level 2 Indirect Bonus:",
    level3Label: "Level 3 Team Reward:",
    depositOptionsLabel: "Deposit Options:",
    calcHeaderTag: "Income Estimator",
    calcTitle: "Calculate Your Projected Earnings",
    calcSubtitle: "Use our real-time calculator to estimate how much you can earn daily and monthly with Rwandagift.",
    selectCurrency: "Select Currency:",
    dailyTimeSpent: "Daily Time Spent:",
    videosWatched: "TikTok & YouTube Videos Watched:",
    referralsPerWeek: "Referrals Per Week:",
    estimatedMonthlyIncome: "Estimated Monthly Income",
    dailyAverage: "Daily Average",
    weeklyPotential: "Weekly Potential",
    startEarningToday: "Start Earning This Today",
    methodsHeaderTag: "Multiple Income Streams",
    methodsTitle: "How You Make Money",
    methodsSubtitle: "7 proven earning methods — available on any smartphone or laptop.",
    method0Title: "Chat with Foreigners",
    method0Desc: "Get paired with international users for language and cultural exchange. Chat in English and get paid every hour you stay active — automatically to your Mobile Money!",
    method1Title: "Watch TikTok & YouTube",
    method1Desc: "Earn steady income watching short promotional clips, music videos, and trending content.",
    method2Title: "Paid Ads & Daily Surveys",
    method2Desc: "Click sponsored advertisements and complete quick daily questionnaires to earn cash rewards.",
    method3Title: "3-Tier Referral Matrix",
    method3Desc: "Receive up to 60%+ direct commission (Level 1) plus passive income from Level 2 and Level 3 invites!",
    method4Title: "Chess & Draughts Games",
    method4Desc: "Compete in friendly board game tournaments and win real cash prize pools every week.",
    method5Title: "E-Books & Forex Academy",
    method5Desc: "Access premium financial literacy books and Forex trading tutorials with completion bonus rewards.",
    method6Title: "Daily Lucky Spin Wheel",
    method6Desc: "Spin the wheel every 24 hours to win free cash prizes, extra task multipliers, and welcome gifts.",
    postsTitle: "Activation Articles & Country Guides",
    postsSubtitle: "Detailed registration guides, fee breakdowns, and withdrawal instructions for all supported countries.",
    galleryHeaderTag: "Proof & Mobile Money Receipts",
    galleryTitle: "Rwandagift Community & Payment Proofs",
    gallerySubtitle: "Explore real mobile money withdrawal receipts, member achievements, and promotional media shared by our community.",
    stepsHeaderTag: "Simple 4-Step Process",
    stepsTitle: "How To Get Started",
    step1Title: "Register Free",
    step1Desc: "Fill out the quick sign-up form with your phone number and email address.",
    step2Title: "Activate Account",
    step2Desc: "Pay the one-time local currency activation fee via MTN MoMo, Airtel, or M-Pesa.",
    step3Title: "Perform Activities",
    step3Desc: "Watch videos, complete surveys, play chess, spin the wheel, and invite friends.",
    step4Title: "Instant Withdrawal",
    step4Desc: "Withdraw your earnings directly to your mobile wallet anytime with zero hassle.",
    faqTitle: "Frequently Asked Questions",
    footerDesc: "Empowering digital earners across Africa with verified reward activities, instant mobile money payouts, and multi-tier affiliate earnings."
  },
  rw: {
    brandName: "Rwanda",
    navHome: "Ahabanza",
    navActivations: "Amafaranga y'Activation",
    navCalc: "Kubara Inyungu",
    navMethods: "Uburyo Bwo Kwinjiza",
    navPosts: "Amakuru n' Amabwiriza",
    navGallery: "Ibyemerewe (Proofs)",
    navHow: "Uko Bikorwa",
    signIn: "Kwinjira",
    createAccount: "Kurema Konti",
    joinWaGroup: "Injira Mu Group Ya WhatsApp",
    activeEarnersTag: "Abanyamuryango 14,280+ Bikorera Amafaranga Uyu Munsi",
    heroTitle: `Hindura Umwanya W' Ishusho Yawe Ko Kwemererwa <span class="gradient-text">Amafaranga Y'Ukuri</span>`,
    heroDesc: "Rwandagift ni ikigo gikuru muri Afurika kibazanira amahirwe yo kwinjiza amafaranga kuri internet. Reba amashusho ya TikTok & YouTube, subiza ibibazo bya Surveys, kina Chess & Draughts, kandi winjize inyungu kuri buri mukiriya uzanye bishyuwe ako kanya kuri MTN Mobile Money (*182#) cyangwa Airtel Money!",
    getStartedBtn: "Tangira Sawa Ako Kanya",
    viewFeesBtn: "Reba Amafaranga Yo Kwactivate",
    whatsappSupportBtn: "Kuvugana Na Support Kuri WhatsApp",
    statPaid: "RWF 48.5M+",
    statPaidDesc: "Ayishyuwe Yose Hamwe",
    statCountries: "18+",
    statCountriesDesc: "Ibihugu Bikorana Nacyo",
    statPayouts: "Ako Kanya",
    statPayoutsDesc: "Kwakira Kuri MoMo Ako Kanya",
    activateToEarn: "Fungura Konti Wo Tangire Kwinjiza",
    matrixHeaderTag: "Ibihugu Byose Bitanga Serivisi",
    matrixTitle: "Ikiguzi Cy' Activation N' Inyungu Z' Abatumiwe",
    matrixSubtitle: "Hitamo igihugu cyawe urebaho ikiguzi cyo gufungura konti, inyungu yo kwinjira, n'amafaranga ubona kuri buri muntu utumiye.",
    oneTimeFee: "Ikiguzi Cy' Gufungura Konti (Rimwe Gusa)",
    welcomeBonusLabel: "Inyungu Yo Gufungura Konti:",
    level1Label: "Level 1 Abatumiwe Nawe:",
    level2Label: "Level 2 Abatumiwe N' Abo Wagiye Utumira:",
    level3Label: "Level 3 Inyungu Y' Ekipi:",
    depositOptionsLabel: "Uburyo Bwo Kwishyura:",
    calcHeaderTag: "Kubara Inyungu",
    calcTitle: "Bara Amafaranga Ushobora Kwinjiza Ku Munsi N' Ukwezi",
    calcSubtitle: "Koresha iyi mashini ibara mu buryo bw' ako kanya kumenya amafaranga uzakorerwa na Rwandagift.",
    selectCurrency: "Hitamo Ingaruzwamufero:",
    dailyTimeSpent: "Ibyuma Ukoresha Ku Munsi:",
    videosWatched: "Amashusho ya TikTok & YouTube Ureba:",
    referralsPerWeek: "Abantu Utumira Mu Cyumweru:",
    estimatedMonthlyIncome: "Inyungu Ugabanyirizwa Mu Kwezi",
    dailyAverage: "Ikigereranyo Ku Munsi",
    weeklyPotential: "Amafaranga Mu Cyumweru",
    startEarningToday: "Tangira Kwinjiza Ivi Uyu Munsi",
    methodsHeaderTag: "Uburyo Bwinshi Bwo Kwinjiza",
    methodsTitle: "Uburyo Ubonamo Amafaranga",
    methodsSubtitle: "Uburyo 7 bwiziwe – ku telefone cyangwa mudasobwa yawe.",
    method0Title: "Kuvugana N'Abanyamahanga",
    method0Desc: "Ujyanwa n'abantu b'amahanga bashaka kwiga Icyongereza. Ugumya kuvugana uhembwe amafaranga buri saa rimwe ako kanya kuri MTN MoMo!",
    method1Title: "Kureba TikTok & YouTube",
    method1Desc: "Injiza amafaranga ureba amashusho guto, amavideo y' indirimbo, n' ibindi biyoboye.",
    method2Title: "Kukanda Matsiko & Subiza Surveys",
    method2Desc: "Kanda ku matangazo n' ibibazo bya buri munsi uhembwe amafaranga y' ukuri.",
    method3Title: "Inyungu Z' Abatumiwe (3-Tier Matrix)",
    method3Desc: "Ubona kugeza kuri 60%+ ku muntu utumiye imbona nkubone na komisiyo ku rwego rwa 2 n' rwa 3!",
    method4Title: "Kukina Chess & Draughts",
    method4Desc: "Rushanwa mu mikino y' ubwenge ya chess n' igisoro uhembwe ibihembo bikuru mu cyumweru.",
    method5Title: "E-Books n' Masomo y' Forex",
    method5Desc: "Soma ibitabo by' ubukungu n' amasomo y' ikoranabuhanga uhembwe bonus y' uko urangije.",
    method6Title: "Ururo Rwa Buri Munsi (Spin Wheel)",
    method6Desc: "Zungurutsa ururo buri masaha 24 utangire ibihembo by' amafaranga y' ubuntu.",
    postsTitle: "Amakuru n' Amabwiriza Y' Activation Mu Bihugu",
    postsSubtitle: "Reba uko bakora registration, ikiguzi cy' igihugu cyawe, n' uko ubikuza kuri MoMo.",
    galleryHeaderTag: "Ibyemerewe (MoMo Receipts)",
    galleryTitle: "Ibyemezo By' Amafaranga Yabikujwe Kuri Rwandagift",
    gallerySubtitle: "Reba inyemezabwishyu z' abanyamuryango babikuje kuri Mobile Money n' uburyo abantu bakoramo.",
    stepsHeaderTag: "Intambwe 4 Zineshi",
    stepsTitle: "Uko Utangira",
    step1Title: "Iyandikishe Ku Buntu",
    step1Desc: "Uzuza ifomu ngufi ukoresheje nimero ya telefone n' email yawe.",
    step2Title: "Activate Konti Yawe",
    step2Desc: "Ishyura ikiguzi cyo gufungura konti ukoresheje MTN MoMo (*182#) cyangwa Airtel Money.",
    step3Title: "Kora Imirimo Ya Buri Munsi",
    step3Desc: "Reba amashusho, subiza ibibazo, kina chess, zungurutsa ururo, kandi utumire inshuti.",
    step4Title: "Bikuza Ako Kanya",
    step4Desc: "Bikuza amafaranga yawe uyohereze kuri mobile wallet yawe igihe icyo aricyo cyose.",
    faqTitle: "Ibibazo Bikunze Kubazwa",
    footerDesc: "Gukomeza guteza imbere abakorera kuri internet mu Rwanda n' Afurika bakoresheje Mobile Money."
  },
  fr: {
    brandName: "Rwanda",
    navHome: "Accueil",
    navActivations: "Frais d'Activation",
    navCalc: "Calculateur",
    navMethods: "Moyens de Gagner",
    navPosts: "Guides par Pays",
    navGallery: "Preuves de Paiement",
    navHow: "Comment Ça Marche",
    signIn: "Connexion",
    createAccount: "Créer un Compte",
    joinWaGroup: "Rejoindre le Groupe WhatsApp",
    activeEarnersTag: "14 280+ Membres Actifs Aujourd'hui",
    heroTitle: `Transformez Votre Temps D'Écran En <span class="gradient-text">Gains En Cash Réels</span>`,
    heroDesc: "Rwandagift est la première agence de récompenses numériques en Afrique. Regardez des vidéos TikTok & YouTube, répondez à des sondages quotidiens, jouez à des tournois d'échecs et gagnez des commissions d'affiliation payées instantanément sur votre MTN Mobile Money, Airtel ou M-Pesa!",
    getStartedBtn: "Commencez Maintenant",
    viewFeesBtn: "Voir les Frais d'Activation",
    whatsappSupportBtn: "Support WhatsApp",
    statPaid: "48.5M+ RWF",
    statPaidDesc: "Retraits Totaux Payés",
    statCountries: "18+",
    statCountriesDesc: "Pays Supportés",
    statPayouts: "Instant re",
    statPayoutsDesc: "Paiements MoMo Instantanés",
    activateToEarn: "Activez le Compte Pour Gagner",
    matrixHeaderTag: "Couverture Multi-Pays",
    matrixTitle: "Frais D'Activation Et Matrice D'Affiliation",
    matrixSubtitle: "Sélectionnez votre pays pour voir les frais d'activation locaux, les bonus de bienvenue, les récompenses d'affiliation et les moyens de paiement.",
    oneTimeFee: "Frais d'Activation Unique",
    welcomeBonusLabel: "Bonus de Bienvenue:",
    level1Label: "Affiliation Directe Niveau 1:",
    level2Label: "Bonus Indirect Niveau 2:",
    level3Label: "Récompense d'Équipe Niveau 3:",
    depositOptionsLabel: "Modes de Dépôt:",
    calcHeaderTag: "Estimateur de Revenus",
    calcTitle: "Calculez Vos Gains Estimés",
    calcSubtitle: "Utilisez notre calculateur en temps réel pour estimer vos revenus quotidiens et mensuels.",
    selectCurrency: "Sélectionnez la Devise:",
    dailyTimeSpent: "Temps Passé par Jour:",
    videosWatched: "Vidéos TikTok & YouTube Regardées:",
    referralsPerWeek: "Parrainages par Semaine:",
    estimatedMonthlyIncome: "Revenu Mensuel Estimé",
    dailyAverage: "Moyenne Quotidienne",
    weeklyPotential: "Potentiel Hebdomadaire",
    startEarningToday: "Commencez à Gagner Aujourd'hui",
    methodsHeaderTag: "Plusieurs Sources de Revenus",
    methodsTitle: "Comment Vous Gagnez de l'Argent",
    methodsSubtitle: "7 méthodes éprouvées — disponibles sur tout smartphone ou ordinateur.",
    method0Title: "Tchatter avec des Étrangers",
    method0Desc: "Soyez jumelé avec des utilisateurs internationaux pour l'échange linguistique. Chattez en anglais et soyez payé chaque heure automatiquement sur MTN MoMo!",
    method1Title: "Regarder TikTok & YouTube",
    method1Desc: "Gagnez un revenu régulier en regardant de courtes vidéos promotionnelles et du contenu tendance.",
    method2Title: "Publicités & Sondages",
    method2Desc: "Cliquez sur des annonces sponsorisées et répondez à des questionnaires rapides.",
    method3Title: "Matrice d'Affiliation 3 Niveaux",
    method3Desc: "Recevez jusqu'à 60%+ de commission directe (Niveau 1) plus des revenus passifs des Niveaux 2 et 3!",
    method4Title: "Échecs & Dames",
    method4Desc: "Participez à des tournois de jeux de société et gagnez des prix en cash chaque semaine.",
    method5Title: "E-Books & Académie Forex",
    method5Desc: "Accédez à des livres financiers et des tutoriels Forex avec bonus de complétion.",
    method6Title: "Roue de la Fortune Quotidienne",
    method6Desc: "Tournez la roue toutes les 24 heures pour gagner des prix en cash et des bonus.",
    postsTitle: "Articles d'Activation Et Guides par Pays",
    postsSubtitle: "Guides d'inscription détaillés, frais d'activation et instructions de retrait pour chaque pays.",
    galleryHeaderTag: "Preuves de Paiement MoMo",
    galleryTitle: "Communauté Et Preuves de Paiement",
    gallerySubtitle: "Découvrez les reçus de retrait Mobile Money réels et les réalisations des membres.",
    stepsHeaderTag: "Processus Simple en 4 Étapes",
    stepsTitle: "Comment Démarrer",
    step1Title: "Inscription Gratuite",
    step1Desc: "Remplissez le formulaire d'inscription rapide avec votre numéro et email.",
    step2Title: "Activation du Compte",
    step2Desc: "Payez les frais d'activation uniques via MTN MoMo, Airtel ou M-Pesa.",
    step3Title: "Effectuez des Tâches",
    step3Desc: "Regardez des vidéos, répondez à des sondages, jouez aux échecs et parrainez.",
    step4Title: "Retrait Instantané",
    step4Desc: "Retirez vos gains directement sur votre portefeuille mobile à tout moment.",
    faqTitle: "Foire Aux Questions",
    footerDesc: "Autonomiser les créateurs de revenus numériques en Afrique avec des paiements Mobile Money instantanés."
  }
};

// 2. 18 COUNTRIES DATA EXACTLY FROM RQTS DOCUMENT
const COUNTRIES_DATA = [
  {
    id: 'rwanda',
    country: 'Rwanda',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'RWF',
    fee: '6,500 RWF',
    welcomeBonus: '2,000 RWF',
    level1: '3,500 RWF',
    level2: '1,200 RWF',
    level3: '500 RWF',
    depositMethod: 'MTN Mobile Money (*182#) & Airtel Money',
    featured: true
  },
  {
    id: 'kenya',
    country: 'Kenya',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'KSH',
    fee: 'KSH 500',
    welcomeBonus: '150 KSH',
    level1: '280 KSH',
    level2: '100 KSH',
    level3: '50 KSH',
    depositMethod: 'M-Pesa Express & Airtel Money',
    featured: true
  },
  {
    id: 'tanzania',
    country: 'Tanzania',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'TZS',
    fee: '11,500 TZS',
    welcomeBonus: '3,000 TZS',
    level1: '6,000 TZS',
    level2: '2,000 TZS',
    level3: '1,000 TZS',
    depositMethod: 'M-Pesa, Tigo Pesa, Airtel Money',
    featured: true
  },
  {
    id: 'uganda',
    country: 'Uganda',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'UGX',
    fee: '19,000 UGX',
    welcomeBonus: '4,500 UGX',
    level1: '10,000 UGX',
    level2: '3,500 UGX',
    level3: '1,500 UGX',
    depositMethod: 'MTN MoMo (*165#) & Airtel Money (*185#)',
    featured: true
  },
  {
    id: 'nigeria',
    country: 'Nigeria',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'NGN',
    fee: '8,500 NGN',
    welcomeBonus: '2,000 NGN',
    level1: '4,500 NGN',
    level2: '1,500 NGN',
    level3: '800 NGN',
    depositMethod: 'OPay, PalmPay, Bank Transfer',
    featured: true
  },
  {
    id: 'burundi',
    country: 'Burundi',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'BIF',
    fee: '25,000 BIF',
    welcomeBonus: '6,000 BIF',
    level1: '13,000 BIF',
    level2: '4,000 BIF',
    level3: '2,000 BIF',
    depositMethod: 'Lumicash & Econet Leo Money',
    featured: true
  },
  {
    id: 'zambia',
    country: 'Zambia',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'ZK',
    fee: 'ZK 130',
    welcomeBonus: '30 ZK',
    level1: '70 ZK',
    level2: '20 ZK',
    level3: '10 ZK',
    depositMethod: 'MTN Mobile Money & Airtel Money',
    featured: false
  },
  {
    id: 'malawi',
    country: 'Malawi',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'MK',
    fee: 'MK 26,000',
    welcomeBonus: '6,000 MK',
    level1: '14,000 MK',
    level2: '4,500 MK',
    level3: '2,000 MK',
    depositMethod: 'Airtel Money & TNM Mpamba',
    featured: false
  },
  {
    id: 'ivorycoast',
    country: 'Ivory Coast',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'XOF',
    fee: '4,000 XOF',
    welcomeBonus: '1,000 XOF',
    level1: '2,000 XOF',
    level2: '700 XOF',
    level3: '300 XOF',
    depositMethod: 'Orange Money, MTN MoMo, Wave',
    featured: false
  },
  {
    id: 'senegal',
    country: 'Senegal',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'XOF',
    fee: '4,000 XOF',
    welcomeBonus: '1,000 XOF',
    level1: '2,000 XOF',
    level2: '700 XOF',
    level3: '300 XOF',
    depositMethod: 'Wave & Orange Money',
    featured: false
  },
  {
    id: 'botswana',
    country: 'Botswana',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'BWP',
    fee: '190 BWP',
    welcomeBonus: '45 BWP',
    level1: '100 BWP',
    level2: '30 BWP',
    level3: '15 BWP',
    depositMethod: 'Orange Money & MyZaka',
    featured: false
  },
  {
    id: 'southafrica',
    country: 'South Africa',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'ZAR',
    fee: '70 ZAR',
    welcomeBonus: '18 ZAR',
    level1: '35 ZAR',
    level2: '12 ZAR',
    level3: '5 ZAR',
    depositMethod: 'EFT, Capitec Pay, OZOW',
    featured: false
  },
  {
    id: 'ghana',
    country: 'Ghana',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'GHC',
    fee: 'GHC 90',
    welcomeBonus: '20 GHC',
    level1: '48 GHC',
    level2: '15 GHC',
    level3: '7 GHC',
    depositMethod: 'MTN Mobile Money & Telecel Cash',
    featured: false
  },
  {
    id: 'cameroon',
    country: 'Cameroon',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'XAF',
    fee: '4,000 XAF',
    welcomeBonus: '1,000 XAF',
    level1: '2,000 XAF',
    level2: '700 XAF',
    level3: '300 XAF',
    depositMethod: 'MTN Mobile Money & Orange Money',
    featured: false
  },
  {
    id: 'westafrica',
    country: 'West Africa',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'XOF',
    fee: '4,000 XOF',
    welcomeBonus: '1,000 XOF',
    level1: '2,000 XOF',
    level2: '700 XOF',
    level3: '300 XOF',
    depositMethod: 'Orange Money, Wave, MoMo',
    featured: false
  },
  {
    id: 'southsudan',
    country: 'South Sudan',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'SSP',
    fee: '20,000 SSP',
    welcomeBonus: '5,000 SSP',
    level1: '10,000 SSP',
    level2: '3,500 SSP',
    level3: '1,500 SSP',
    depositMethod: 'mgurush Mobile Wallet',
    featured: false
  },
  {
    id: 'others',
    country: 'International / Others',
    flag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    currency: 'USD',
    fee: '$8.00 USD',
    welcomeBonus: '$2.00 USD',
    level1: '$4.00 USD',
    level2: '$1.50 USD',
    level3: '$0.50 USD',
    depositMethod: 'Binance Pay, USDT, Card',
    featured: false
  }
];

// STARHELA POSTS / ARTICLES DATA
const STARHELA_POSTS_DATA = [
  {
    id: 330,
    title: "MULAEARN & RWANDAGIFT ACTIVATION FEES IN RWANDA & EAST AFRICA",
    category: "Activation Guide",
    country: 'Rwanda',
    date: "2026-08-10",
    excerpt: "Rwandagift is an online platform built to help users earn money through simple digital activities in Rwanda (6,500 RWF activation fee) with instant MTN MoMo payout...",
    content: "Full guide on registering with MTN Mobile Money *182#. Receive 2,000 RWF welcome bonus instantly upon activation!"
  },
  {
    id: 329,
    title: "HOW TO EARN WITH TIKTOK & YOUTUBE VIDEO CLIPS ON RWANDAGIFT",
    category: "Earning Tutorials",
    country: 'Kenya',
    date: "2026-08-09",
    excerpt: "Learn how watching 30-second promotional videos generates daily income directly credited to your dashboard in KSH, RWF, UGX, and TZS...",
    content: "Step-by-step video view submission tutorial and daily task limits."
  },
  {
    id: 328,
    title: "LEVEL 1, LEVEL 2, & LEVEL 3 AFFILIATE REWARD MATRIX EXPLAINED",
    category: "Affiliate Income",
    country: 'Uganda',
    date: "2026-08-08",
    excerpt: "Understand how the multi-tier affiliate system pays out up to 60%+ direct commission (3,500 RWF / KSH 280 / 10,000 UGX) for Level 1 signups...",
    content: "Comprehensive affiliate commission structure breakdown and passive team income strategies."
  },
  {
    id: 327,
    title: "CHESS & DRAUGHTS WEEKLY TOURNAMENTS WITH CASH PRIZE POOLS",
    category: "Gaming & Prizes",
    country: 'ℤ Tanzania',
    date: "2026-08-07",
    excerpt: "Turn your board game skills into real cash rewards. Play online Chess and Draughts against other members across East Africa...",
    content: "Tournament registration schedules, matchmaking rules, and cash prize distribution details."
  }
];

const RECENT_PAYOUTS = [
  { name: 'Eric Nsengimana', city: 'Kigali', amount: '25,000 RWF', method: 'MTN MoMo', time: '2 mins ago' },
  { name: 'Grace Mutua', city: 'Nairobi', amount: '1,800 KSH', method: 'M-Pesa Express', time: '4 mins ago' },
  { name: 'Prince Kato', city: 'Kampala', amount: '45,000 UGX', method: 'Airtel Money', time: '5 mins ago' },
  { name: 'Divine Ishimwe', city: 'Huye', amount: '18,500 RWF', method: 'MTN MoMo', time: '8 mins ago' },
  { name: 'Amina Salum', city: 'Dar es Salaam', amount: '32,000 TZS', method: 'Tigo Pesa', time: '11 mins ago' }
];

const GALLERY_ITEMS = [
  { title: 'MTN MoMo Instant Payout Proof', amount: '48,500 RWF Received', location: 'Kigali, Rwanda' },
  { title: 'M-Pesa Direct Withdrawal', amount: '3,200 KSH Received', location: 'Nairobi, Kenya' },
  { title: 'Level 1 Commission Reward', amount: '19,000 UGX Received', location: 'Kampala, Uganda' },
  { title: 'Weekly Chess Champion Payout', amount: '35,000 RWF Won', location: 'Musanze, Rwanda' }
];

// CURRENT STATE
let currentLang = localStorage.getItem('rwandagift_lang') || 'en';
let currentFilter = 'all';

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  applyLanguage(currentLang);
  initTicker();
  initCountryMatrix();
  initPostsHub();
  initCalculator();
  initGallery();
  initThemeToggle();
  initFaqAccordion();
});

// LANGUAGE SWITCHER LOGIC
function initLanguageSwitcher() {
  const langSelect = document.getElementById('langSelect');
  const langSelectMobile = document.getElementById('langSelectMobile');

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  if (langSelectMobile) {
    langSelectMobile.value = currentLang;
    langSelectMobile.addEventListener('change', (e) => setLanguage(e.target.value));
  }
}

window.setLanguage = function(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('rwandagift_lang', lang);

  const langSelect = document.getElementById('langSelect');
  const langSelectMobile = document.getElementById('langSelectMobile');
  if (langSelect) langSelect.value = lang;
  if (langSelectMobile) langSelectMobile.value = lang;

  applyLanguage(lang);
};

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (key === 'heroTitle') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  renderMatrixCards();
}

// MOBILE DRAWER TOGGLE
window.toggleMobileDrawer = function() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
};

// TICKER ANIMATION
function initTicker() {
  const tickerEl = document.getElementById('liveTicker');
  if (!tickerEl) return;

  const tickerHTML = RECENT_PAYOUTS.map(item => `
    <div class="ticker-item">
      <span class="pulse-dot"></span>
      <strong>${item.name}</strong> (${item.city}) withdrew 
      <span style="color:var(--accent-gold); font-weight:800">${item.amount}</span> via ${item.method} 
      <span style="opacity:0.75; font-size:0.8rem">(${item.time})</span>
    </div>
  `).join('');

  tickerEl.innerHTML = tickerHTML + tickerHTML;
}

// COUNTRY MATRIX RENDER & FILTER TABS FOR ALL 18 COUNTRIES
function initCountryMatrix() {
  renderTabs();
  renderMatrixCards();
}

function renderTabs() {
  const tabsContainer = document.getElementById('countryTabs');
  if (!tabsContainer) return;

  const tabItems = [
    { id: 'all', label: '🌍 All 18 Countries' },
    { id: 'rwanda', label: '🇷🇼 Rwanda' },
    { id: 'kenya', label: '🇰🇪 Kenya' },
    { id: 'tanzania', label: '🇹🇿 Tanzania' },
    { id: 'uganda', label: '🇺🇬 Uganda' },
    { id: 'nigeria', label: '🇳🇬 Nigeria' },
    { id: 'burundi', label: '🇧🇮 Burundi' },
    { id: 'zambia', label: '🇿🇲 Zambia' },
    { id: 'malawi', label: '🇲🇼 Malawi' },
    { id: 'ivorycoast', label: '🇨🇮 Ivory Coast' },
    { id: 'senegal', label: '🇸🇳 Senegal' },
    { id: 'botswana', label: '🇧🇼 Botswana' },
    { id: 'southafrica', label: '🇿🇦 South Africa' },
    { id: 'ghana', label: '🇬🇭 Ghana' },
    { id: 'cameroon', label: '🇨🇲 Cameroon' },
    { id: 'westafrica', label: '🌍 West Africa' },
    { id: 'southsudan', label: '🇸🇸 South Sudan' },
    { id: 'others', label: '🎌 Others' }
  ];

  tabsContainer.innerHTML = tabItems.map(t => `
    <button class="country-tab ${t.id === currentFilter ? 'active' : ''}" onclick="setCountryFilter('${t.id}')">
      ${t.label}
    </button>
  `).join('');
}

window.setCountryFilter = function(filterId) {
  currentFilter = filterId;
  renderTabs();
  renderMatrixCards();
};

function renderMatrixCards() {
  const grid = document.getElementById('countryMatrixGrid');
  if (!grid) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const filteredData = currentFilter === 'all' 
    ? COUNTRIES_DATA 
    : COUNTRIES_DATA.filter(c => c.id === currentFilter);

  grid.innerHTML = filteredData.map(c => `
    <div class="matrix-card ${c.featured ? 'featured' : ''}">
      <div>
        <div class="card-country-header">
          <div class="country-flag-title">
            <span>${c.flag}</span>
            <div>
              <h3>${c.country}</h3>
              <span style="font-size:0.8rem; color:var(--text-muted)">Currency: ${c.currency}</span>
            </div>
          </div>
          ${c.featured ? '<span class="badge badge-gold">Hot</span>' : ''}
        </div>

        <div class="fee-highlight">
          <div class="label">${t.oneTimeFee}</div>
          <div class="amount">${c.fee}</div>
        </div>

        <div class="level-rewards-list">
          <div class="reward-row">
            <span>${t.welcomeBonusLabel}</span>
            <span class="val">${c.welcomeBonus}</span>
          </div>
          <div class="reward-row">
            <span>${t.level1Label}</span>
            <span class="val">${c.level1}</span>
          </div>
          <div class="reward-row">
            <span>${t.level2Label}</span>
            <span class="val">${c.level2}</span>
          </div>
          <div class="reward-row">
            <span>${t.level3Label}</span>
            <span class="val">${c.level3}</span>
          </div>
        </div>

        <div style="font-size:0.825rem; color:var(--text-muted); margin-bottom:1.4rem;">
          ${t.depositOptionsLabel} ${c.depositMethod}
        </div>
      </div>

      <a href="${REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%; text-decoration:none;">
        ${t.activateToEarn} (${c.country})
      </a>
    </div>
  `).join('');
}

// STARHELA-STYLE POSTS HUB
function initPostsHub() {
  const postsGrid = document.getElementById('postsGrid');
  if (!postsGrid) return;

  postsGrid.innerHTML = STARHELA_POSTS_DATA.map(post => `
    <div class="method-card" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
          <span class="badge badge-gold">${post.category}</span>
          <span style="font-size:0.8rem; color:var(--text-muted)">${post.country}</span>
        </div>
        <h3 style="font-size:1.15rem; margin-bottom:0.6rem; color:var(--text-main);">${post.title}</h3>
        <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:1.2rem; line-height:1.5;">${post.excerpt}</p>
      </div>
      <a href="${REGISTRATION_URL}" target="_blank" class="btn btn-outline" style="width:100%; font-size:0.9rem; text-decoration:none;">
        Read Guide & Register →
      </a>
    </div>
  `).join('');
}

// CALCULATOR LOGIC
function initCalculator() {
  const hoursRange = document.getElementById('hoursRange');
  const videosRange = document.getElementById('videosRange');
  const referralsRange = document.getElementById('referralsRange');
  const currencySelect = document.getElementById('currencySelect');

  if (!hoursRange || !videosRange || !referralsRange || !currencySelect) return;

  const updateCalc = () => {
    const hours = parseInt(hoursRange.value);
    const videos = parseInt(videosRange.value);
    const refs = parseInt(referralsRange.value);
    
    document.getElementById('hoursVal').textContent = `${hours} Hours`;
    document.getElementById('videosVal').textContent = `${videos} Videos`;
    document.getElementById('referralsVal').textContent = `${refs} People / week`;

    const selectedOption = currencySelect.options[currencySelect.selectedIndex];
    const rate = parseFloat(selectedOption.getAttribute('data-rate'));
    const currencyCode = currencySelect.value;
    document.getElementById('selectedCurrencyLabel').textContent = `${selectedOption.text}`;

    const dailyVideosRwf = videos * 250;
    const dailyTasksRwf = hours * 1200;
    const weeklyRefsRwf = refs * 3500;

    const dailyTotalRwf = dailyVideosRwf + dailyTasksRwf + (weeklyRefsRwf / 7);
    const monthlyTotalRwf = dailyTotalRwf * 30;
    const weeklyTotalRwf = dailyTotalRwf * 7;

    const formatCurr = (amount) => {
      const val = Math.round(amount * rate);
      return `${val.toLocaleString()} ${currencyCode}`;
    };

    document.getElementById('totalMonthlyEarnings').textContent = formatCurr(monthlyTotalRwf);
    document.getElementById('dailyAverage').textContent = formatCurr(dailyTotalRwf);
    document.getElementById('weeklyAverage').textContent = formatCurr(weeklyTotalRwf);
  };

  hoursRange.addEventListener('input', updateCalc);
  videosRange.addEventListener('input', updateCalc);
  referralsRange.addEventListener('input', updateCalc);
  currencySelect.addEventListener('change', updateCalc);

  updateCalc();
}

// GALLERY RENDERER
function initGallery() {
  const galleryGrid = document.getElementById('userGalleryGrid');
  if (!galleryGrid) return;

  const galleryCardsHTML = GALLERY_ITEMS.map((item, idx) => `
    <div class="gallery-item">
      <div class="gallery-placeholder-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h4 style="color:var(--text-main); font-size:1.1rem; margin-bottom:0.3rem">${item.amount}</h4>
        <p style="font-size:0.85rem">${item.title}</p>
        <span class="badge badge-gold" style="margin-top:0.5rem">${item.location}</span>
      </div>
      <div class="gallery-caption">
        Verified Mobile Money Receipt #${1042 + idx}
      </div>
    </div>
  `).join('');

  const uploadPromptHTML = `
    <div class="gallery-item" style="border: 2px dashed var(--primary);">
      <div class="gallery-placeholder-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent-gold)">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <h4 style="color:var(--text-main); font-size:1rem; margin-bottom:0.3rem">Add Your Image Assets</h4>
        <p style="font-size:0.8rem">Drop images into <code>public/images</code> folder to display here!</p>
        <span class="badge badge-primary" style="margin-top:0.5rem">Ready for Uploads</span>
      </div>
    </div>
  `;

  galleryGrid.innerHTML = galleryCardsHTML + uploadPromptHTML;
}

// THEME SWITCHER
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    if (newTheme === 'light') {
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    } else {
      icon.innerHTML = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
    }
  });
}

// FAQ ACCORDION
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
}

// DIRECT REGISTRATION & MODALS LOGIC
window.openRegisterModal = function(mode = 'register', preselectedCountry = 'Rwanda') {
  // Directly open official registration link
  window.open(REGISTRATION_URL, '_blank');
};

window.openWhatsAppGroup = function() {
  window.open(WHATSAPP_GROUP_URL, '_blank');
};

window.closeAuthModal = function() {
  document.getElementById('authModal').classList.remove('active');
};

window.handleAuthSubmit = function(e) {
  e.preventDefault();
  window.open(REGISTRATION_URL, '_blank');
};

// WHATSAPP MODAL LOGIC WITH SUPPORT NUMBER 250735323980
window.openWhatsAppModal = function() {
  document.getElementById('whatsappModal').classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeWhatsAppModal = function() {
  document.getElementById('whatsappModal').classList.remove('active');
  document.body.style.overflow = '';
};

window.handleWhatsAppSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('waName').value;
  const country = document.getElementById('waCountry').value;
  const phone = WHATSAPP_SUPPORT_NUMBER;
  const message = encodeURIComponent(`Hello Rwandagift 👋, my name is ${name} from ${country}. I would like to activate my account and start earning today! Please guide me.`);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  window.closeWhatsAppModal();
};

// ACTIVATION FEES MODAL (replaces homepage section)
window.openFeesModal = function() {
  const modal = document.getElementById('feesModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Render tabs + cards inside the modal
  renderTabs();
  renderMatrixCards();
};

window.closeFeesModal = function(event) {
  // If called from overlay click, only close if clicking the backdrop itself
  if (event && event.target !== document.getElementById('feesModal')) return;
  const modal = document.getElementById('feesModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeWhatsAppModal();
    const feesModal = document.getElementById('feesModal');
    if (feesModal) {
      feesModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});
