<script lang="ts">
  import Category from "./category.svelte";
</script>

<svelte:head>
	<title>Meilleures ressources</title>
	<link rel="canonical" href="https://quentinchaignaud.com/liens-utiles/meilleures-ressources" />
	<meta name="description" content="Les meilleurs liens pour se former sur des sujets différents." />
	<meta property="og:title" content="60+ meilleures ressources" />
	<meta property="og:description" content="Cette page regroupe des liens vers les meilleures ressources en ligne ou sur papier qui m'ont aidé à avancer ou à mieux comprendre des choses." />
	<meta property="og:image" content="https://quentinchaignaud.com/og-image-meilleures-ressources.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/liens-utiles/meilleures-ressources" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/liens-utiles/meilleures-ressources" />
	<meta name="twitter:description" content="Cette page regroupe des liens vers les meilleures ressources en ligne ou sur papier qui m'ont aidé à avancer ou à mieux comprendre des choses." />
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-image-meilleures-ressources.png" />
</svelte:head>

<section class="py-24 sm:py-32 min-h-screen">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center text-gray-700">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Meilleures ressources</h1>
      <p class="mt-2 mb-8 text-sm md:text-base leading-8 text-gray-600 dark:text-gray-300">Cette page regroupe des liens vers les meilleures ressources en ligne ou sur papier qui m'ont aidé à avancer ou à mieux comprendre des choses.</p>
      <Category 
        name="Informatique"
        ressources={[
          {
            title: "Designing Data-Intensive Applications",
            type: "book",
            description: "Le meilleur livre sur les systèmes de données. Simple à lire même si très dense, c'est ma ref numéro 1.",
            link: "https://amzn.to/3F7Tp0T"
          }, {
            title: "Fireship",
            type: "video",
            description: "Chaîne YouTube très complète, qui donne un aperçu assez conçis de la plupart des technologies web.",
            link: "https://amzn.to/3F7Tp0T"
          }, {
            title: "Code: The Hidden Language of Computer Hardware and Software",
            type: "book",
            description: "Un livre qui explique comment fonctionne un ordinateur, étape par étape.",
            link: "https://amzn.to/3IYLrIB"
          }, {
            title: "Head First Design Patterns",
            type: "book",
            description: "Un livre qui présente l'ensemble des design patterns de manière simple et assez drôle.",
            link: "https://amzn.to/3ynA2x3"
          }, {
            title: "ByteByteGo",
            type: "video",
            description: "Une chaîne YouTube focus sur la construction de systèmes informatiques. Leurs animations sont superbes.",
            link: "https://www.youtube.com/@ByteByteGo"
          }, {
            title: "PowerCert Animated Videos",
            type: "video",
            description: "Même chose que ByteByteGo, mais plus axé sur le réseau et le fonctionnement de l'ordinateur.",
            link: "https://www.youtube.com/@PowerCertAnimatedVideos"
          }, {
            title: "P vs NP et le zoo de la complexité informatique",
            type: "video",
            description: "Sûrement ma vidéo YouTube préférée, elle permet de comprendre le fameux problème de P vs NP en moins de 10 minutes.",
            link: "https://www.youtube.com/watch?v=YX40hbAHx3s"
          }, {
            title: "A cloud guru",
            type: "video",
            description: "Formations sur les 3 grands cloud (AWS, GCP et Azure). Idéal pour se préparer aux différentes certifications.",
            link: "https://acloudguru.com/"
          }, {
            title: "John Savill's Technical Training",
            type: "video",
            description: "Les meilleures vidéos sur Azure, John explique clairement les choses, et est fun à écouter.",
            link: "https://www.youtube.com/@NTFAQGuy"
          }, {
            title: "NeetCode",
            type: "video",
            description: "Bonne chaîne YouTube pour se former à l'algorithmie, à coupler avec Leetcode.",
            link: "https://www.youtube.com/@NeetCode"
          }, {
            title: "Three.js journey",
            type: "video",
            description: "La meilleure formation pour apprendre à faire des site webs en 3D. Contient aussi une formation React assez dense.",
            link: "https://threejs-journey.com"
          },
        ]}
      />
      <Category 
        name="Design"
        ressources={[
          {
            title: "Refactoring Ui",
            type: "book",
            description: "Le livre ultime qui explique comment construire une interface claire et intuitive. Adam Wathan et Steve Schoger sont aussi les créateurs de tailwindCSS (deux génies).",
            link: "https://www.refactoringui.com/"
          }, {
            title: "The Design of Everyday Things",
            type: "book",
            description: "Un livre incoutournable qui explique comment penser un produit pour qu'il soit facile à utiliser et intuitif.",
            link: "https://amzn.to/3ymJ6SL"
          }, {
            title: "Polygon runway",
            type: "video",
            description: "La meilleur formation pour apprendre la 3D - à l'aide de Blender. La chaîne YouTube est à suivre aussi.",
            link: "https://polygonrunway.com/"
          }, {
            title: "Histoire de l'art",
            type: "book",
            description: "Un des livres sur l'art les plus célèbre au monde, il présente l'évolution de l'art à travers l'histoire. Bien pour acquérir une solide vision d'ensemble.",
            link: "https://amzn.to/3ZzF3OW"
          }, {
            title: "Ways of Seeing",
            type: "book",
            description: "Un bon livre pour réfléchir sur notre manière de voir les oeuvres d'art au XXIème siècle. L'auteur à également fait un cours du même nom, disponible sur YouTube.",
            link: "https://amzn.to/41VilT5"
          }, {
            title: "A Dictionary of Color Combinations",
            type: "book",
            description: "Un petit livre japonais datant de 1920 qui donne des combinaisons de couleurs. Je l'utilise pour tout mes projets, et j'ai été surpris de voir des combinaisons de ce livre dans les objets autour de moi.",
            link: "https://amzn.to/3FbqclB"
          }, 
        ]}
      />
      <Category 
        name="Business"
        ressources={[
          {
            title: "How to Start a Startup",
            type: "video",
            description: "Playlist de plusieurs conférences qui enseigne la création de startup par YCombinator, ainsi que Sam Altman, le PDG d'OpenAI.",
            link: "https://www.youtube.com/watch?v:CBYhVcO4WgI&list:PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1"
          }, {
            title: "How to Get Startup Ideas",
            type: "website",
            description: "Un article qui explique la meilleure méthode (la seule ?) pour trouver des idées de startup.",
            link: "http://www.paulgraham.com/start.html"
          }, {
            title: "Alex Hormozi",
            type: "video",
            description: "Le meilleur youtuber sur le business en général. Son livre 100 million offer est à lire aussi.",
            link: "https://www.youtube.com/@AlexHormozi"
          }, {
            title: "Building A Successful Micro-Agency",
            type: "book",
            description: "Un livre assez spécifique sur la création d'une agence marketing. J'aime beaucoup la manière de penser qu'à l'auteur, je trouve ses conseils applicables à la plupart des domaines de consulting.",
            link: "https://www.youtube.com/@AlexHormozi"
          }, {
            title: "The Millionaire Fastlane",
            type: "book",
            description: "Un super guide qui donne l'état d'esprit à avoir pour s'enrichir et démarrer un business.",
            link: "https://amzn.to/3ZvK0Zl"
          }, {
            title: "Designing the Ideal Bootstrapped Business with Jason Cohen",
            type: "video",
            description: "Une conférence qui explique comment construire un saas de zéro sans investissement préalable.",
            link: "https://www.youtube.com/watch?v:otbnC2zE2rw"
          }, {
            title: "Guide sur le modèle SaaS",
            type: "website",
            description: "Un bon guide par Stripe sur bases des saas et leur fonctionnement.",
            link: "https://stripe.com/fr/guides/atlas/business-of-saas"
          }, {
            title: "The Sociology of Business",
            type: "website",
            description: "Un blog qui parle des nouvelles manières de consommer avec les réseaux sociaux. Beaucoup d'idées intéressantes et nouvelles.",
            link: "https://andjelicaaa.substack.com/"
          }, 
        ]}
      />
      <Category 
        name="Marketing"
        ressources={[
          {
            title: "Marketing examples",
            type: "website",
            description: "Site qui regroupe des exemples de publicités qui fonctionnent bien, avec explications. Ma source d'inspiration numéro 1.",
            link: "https://marketingexamples.com/"
          }, {
            title: "Alchemy",
            type: "book",
            description: "Ce livre donne une vision du marketing (et du monde) différente de celle que l'on a habituellement, souvent trop basée sur la logique. A lire absolument, surtout si vous êtes un matheux.",
            link: "https://amzn.to/3ZRSkSJ"
          }, {
            title: "Cashvertising",
            type: "book",
            description: "Ce livre explique comment faire une publicité persuasive. C'est le plus complet que j'ai trouvé sur ce sujet.",
            link: "https://amzn.to/3ZSHqMx"
          }, {
            title: "Influence et manipulation",
            type: "book",
            description: "Un classique de la vente et de la persuasion, à lire et à relire.",
            link: "https://amzn.to/3l3RNhR"
          }, {
            title: "Zero to Marketing",
            type: "website",
            description: "Des études de cas marketing de plusieurs entreprises, avec beaucoup de bonnes suggestions.",
            link: "https://www.zerotomarketing.com/"
          }, {
            title: "Marketing Mania",
            type: "video",
            description: "Une bonne chaîne YouTube francophone qui explique la raison du succès de certaines campagnes publicitaires. Son livre est à lire aussi.",
            link: "https://www.youtube.com/@MarketingMania"
          }, {
            title: "Bigger Than This",
            type: "book",
            description: "Le meilleur livre que j'ai lu sur le branding. Très simple à mettre en application et assez rapide à lire.",
            link: "https://amzn.to/3ZR8cot"
          }, 
        ]}
      />
      <Category 
        name="Philosophie"
        ressources={[
          {
            title: "I want to read the works of great philosophers. In what order should I read them?",
            type: "website",
            description: "Un poste quora qui explique dans quel ordre lire les philosophes. J'en suis qu'au début donc difficile de juger, mais j'aime bien le fait de lire les philosophes par enchaînnement d'idées plutôt par ordre chronologique.",
            link: "https://www.quora.com/I-want-to-read-the-works-of-great-philosophers-In-what-order-should-I-read-them"
          }, {
            title: "Justice with Michael Sandel",
            type: "video",
            description: "Un cours donné à Harvard qui parle de justice, de démocratie et de citoyenneté.",
            link: "https://www.youtube.com/watch?v:kBdfcR-8hEY&list:PL30C13C91CFFEFEA6"
          }, {
            title: "Plato's Philosophy - From Socrates to Sartre (1978)",
            type: "video",
            description: "Une émission sur la philosophie de Platon, Thelma Z. Lavine explique les choses avec beaucoup de clarté.",
            link: "https://www.youtube.com/watch?v:f5_Rhpl5p3Y"
          }, 
        ]}
      />
      <Category 
        name="Économie"
        ressources={[
          {
            title: "Economix",
            type: "book",
            description: "L'histoire de l'économie sous forme de BD, passionant.",
            link: "https://amzn.to/3T0GUtC"
          }, {
            title: "Tout sur l'économie, ou presque",
            type: "book",
            description: "Un bon travail de vulgarisation sur l'économie. La chaîne YouTube Heu?reka vaut le détour également.",
            link: "https://amzn.to/3LaJ5ZL"
          }, {
            title: "Progress And Poverty",
            type: "website",
            description: "Quatre articles qui décrivent la pensée d'Henry George, qui explique pourquoi le progrès technologique augmente la pauvreté.",
            link: "https://astralcodexten.substack.com/p/your-book-review-progress-and-poverty"
          }, {
            title: "Précis d'économie",
            type: "book",
            description: "Manuel assez dense sur le fonctionnement de l'économie. Scolaire mais complet.",
            link: "https://amzn.to/3T62jld"
          }, {
            title: "Geopolitical Alpha",
            type: "book",
            description: "Un livre qui explique comment prévoir les futurs évènements économiques (et politiques).",
            link: "https://amzn.to/3YuK3mB"
          },
        ]}
      />
      <Category
        name="Développement personnel"
        ressources={[
          { 
            title:"The War of Art",
            type:"book",
            description:"Le meilleur livre pour apprendre à se bouger le cul, et continuer ses projets créatifs.",
            link:"https://amzn.to/3yrH042"
          },
          { 
            title:"The Happiness Hypothesis",
            type:"book",
            description:"Une recherche complète sur ce qui nous rend heureux.",
            link:"https://amzn.to/3JtpfI9"
          },
          { 
            title:"The Defining Decade",
            type:"book",
            description:"Un livre qui pourquoi la vingtaine est la période la plus importante de la vie, et comment la réussir le mieux possible.",
            link:"https://amzn.to/3ZyrGPf"
          },
          { 
            title:"How To Be Well",
            type:"book",
            description:"Ce livre donne les clés d'une vie saine : bien manger, bien dormir et s'exercer régulièrement.",
            link:"https://amzn.to/3muG10g"
          }
        ]}
      />
      <Category
        name="Science"
        ressources={[
          {
            title:"3Blue1Brown",
            type:"video",
            description:"La meilleure chaîne YouTube de mathématiques. Les concepts sont exposés avec beaucoup de clarté même pour les débutants.",
            link:"https://www.youtube.com/@3blue1brown"
          },
          {
            title:"Le Quark et le Jaguar",
            type:"book",
            description:"La physique quantique par le prix Nobel qui a découvert le quark. Passionant mais difficile.",
            link:"https://amzn.to/3li1Obz"
          },
          {
            title:"Put A Number On It!",
            type:"website",
            description:"Un petit blog qui parle de l'application des statistiques dans le monde réel.",
            link:"https://putanumonit.com/"
          }
        ]}
      />
      <Category
        name="Société"
        ressources={[
          {
            title:"Astral Codex Ten",
            type:"website",
            description:"Un blog anonyme par un psychatre, qui parle principalement de rationnalité. Il se concentre sur des sujets tournant autour de la psychologie, la médecine, la politique et l'économie.",
            link:"https://astralcodexten.substack.com/",
          },
          {
            title:"The Last Psychiatrist",
            type:"website",
            description:"Un autre blog par un psychatre anonyme, malheuresement inactif depuis 10 ans. Sa thèse principale est que la société est fondée sur le narcissisme.",
            link:"https://thelastpsychiatrist.com/",
          },
          {
            title:"Paul Graham",
            type:"website",
            description:"Les essais de Paul Graham ont eu beaucoup d'influence dans le monde de la tech. Il a souvent des idées à contre-courant intéressantes à lire.",
            link:"http://www.paulgraham.com/articles.html",
          },
          {
            title:"Breaking Smart",
            type:"website",
            description:"Une explication de la révolution numérique que nous sommes en train de vivre.",
            link:"https://breakingsmart.com/fr/saison-1/",
          }
        ]}
      />
      <Category
        name="Histoire"
        ressources={[
          {
            title:"Historia Civilis",
            type:"video",
            description:"Une chaîne YouTube qui retrace la chute de la république romaine, avec une narration très sympa.",
            link:"https://www.youtube.com/@HistoriaCivilis"
          },
          {
            title:"Fall of Civilizations",
            type:"video",
            description:"Chaque épisode de ce podcast parle d'une civilisation différente, et explique pourquoi elle a disparue.",
            link:"https://www.youtube.com/@FallofCivilizations"
          },
          {
            title:"How to Take Over the World",
            type:"website",
            description:"Ce podcast parle de la vie de plusieurs grands hommes et femmes à travers l'histoire.",
            link:"https://open.spotify.com/show/1gqvQ7h7BxNSVoQVTnwihr?si:31de7867aff94569"
          },
          {
            title:"Stratégie, les 33 lois de la guerre",
            type:"book",
            description:"33 stratégies issues de 3000 ans de guerre. Je trouve les anecdotes historiques très bien traitées.",
            link:"https://amzn.to/3mzh97H"
          },
          {
            title:"La Mythologie: Ses dieux, ses héros, ses légendes",
            type:"book",
            description:"Le livre le plus clair et complet sur la mythologie.",
            link:"https://amzn.to/421hC2y"
          }
        ]}
      />
      <Category
        name="Langue"
        ressources={[
          {
            title:"Les Kanjis dans la tête",
            type:"book",
            description:"La seule méthode qui m'a permis de mémoriser les *nombreux* caractères japonais.",
            link:"https://amzn.to/3GrDzic"
          },
        ]}
      />
    </div>      
  </div>
</section>