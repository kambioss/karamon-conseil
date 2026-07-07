module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Données statiques de l'application — en dur dans le code.
 *
 * Ce fichier remplace l'usage de Supabase (et de Prisma) comme source de
 * données : tout le contenu (projets, actualités) est désormais déclaré
 * directement ici, sans aucune base de données externe.
 *
 * Pour modifier le contenu du site, il suffit d'éditer les tableaux
 * `projects` et `actualites` ci-dessous.
 */ __turbopack_context__.s([
    "actualites",
    ()=>actualites,
    "contactMessages",
    ()=>contactMessages,
    "getActualiteBySlug",
    ()=>getActualiteBySlug,
    "getAllProjects",
    ()=>getAllProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getPublishedActualites",
    ()=>getPublishedActualites,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: "project-1",
        title: "Réalisation des EIES de la construction de deux laboratoires régionaux de l'ONCQ à Boké et Kindia",
        titleEn: "Environmental and Social Impact Assessments for the construction of two ONCQ regional laboratories in Boké and Kindia",
        slug: "projet-1",
        description: "Études d'Impact Environnemental et Social pour la construction de deux laboratoires régionaux de l'Office National du Contrôle de Qualité (ONCQ) à Boké et Kindia, en Guinée, dans le cadre d'un projet financé par la Banque mondiale.",
        descriptionEn: "Environmental and Social Impact Assessments for the construction of two regional laboratories of the National Quality Control Office (ONCQ) in Boké and Kindia, Guinea, under a World Bank-financed project.",
        fullDescription: "KARAMON CONSEIL a été mandaté pour la réalisation des Études d'Impact Environnemental et Social (EIES) relatives à la construction de deux laboratoires régionaux de l'Office National du Contrôle de Qualité (ONCQ), respectivement à Boké et à Kindia, en République de Guinée.\n\nCes laboratoires visent à renforcer les capacités nationales de contrôle de la qualité des produits, en particulier dans les régions minières de Boké et de Kindia où l'activité industrielle est en forte croissance. Le projet est financé par la Banque mondiale et s'inscrit dans une démarche de conformité aux normes environnementales et sociales de sauvegarde des bailleurs internationaux.\n\nLa mission a couvert l'identification et l'évaluation des impacts environnementaux et sociaux potentiels liés aux travaux de construction, ainsi que la proposition de mesures d'atténuation adaptées au contexte local de chaque site.",
        fullDescriptionEn: "KARAMON CONSEIL was commissioned to carry out the Environmental and Social Impact Assessments (ESIA) for the construction of two regional laboratories of the National Quality Control Office (ONCQ), located in Boké and Kindia, Republic of Guinea.\n\nThese laboratories aim to strengthen national product quality control capacity, particularly in the mining regions of Boké and Kindia, where industrial activity is growing rapidly. The project is financed by the World Bank and follows international lenders' environmental and social safeguard standards.\n\nThe assignment covered the identification and assessment of potential environmental and social impacts related to the construction works, as well as the proposal of mitigation measures tailored to the local context of each site.",
        client: "Gouvernement de Guinée / Banque mondiale",
        clientEn: "Government of Guinea / World Bank",
        location: "Boké et Kindia, Guinée",
        locationEn: "Boké and Kindia, Guinea",
        status: "termine",
        category: "eies",
        startDate: "2024-01-01",
        endDate: null,
        image: "/images/projects/p01-oncq-guinee.jpg",
        actions: null,
        results: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
    },
    {
        id: "project-2",
        title: "EIES des réseaux de distribution de six systèmes autonomes d'AEP au Togo",
        titleEn: "ESIA for the distribution networks of six standalone water supply systems in Togo",
        slug: "projet-2",
        description: "Réalisation de six Études d'Impact Environnemental et Social pour les réseaux de distribution de six systèmes autonomes d'adduction en eau potable (AEP), dans les localités de Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo.",
        descriptionEn: "Six Environmental and Social Impact Assessments for the distribution networks of six standalone water supply systems, in the localities of Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo.",
        fullDescription: "Dans le cadre du renforcement de l'accès à l'eau potable en milieu rural et périurbain au Togo, KARAMON CONSEIL a été chargé de la réalisation de six Études d'Impact Environnemental et Social (EIES) portant sur les réseaux de distribution de six systèmes autonomes d'Adduction en Eau Potable (AEP).\n\nLes six localités concernées sont Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo. Le projet, financé par la Banque mondiale, vise à sécuriser l'approvisionnement en eau potable de ces communautés à travers la mise en place de systèmes autonomes de distribution.\n\nChaque EIES a permis d'identifier les impacts environnementaux et sociaux spécifiques à chaque site, et de proposer des mesures d'atténuation et un cadre de suivi conforme aux exigences de sauvegarde de la Banque mondiale.",
        fullDescriptionEn: "As part of efforts to strengthen access to drinking water in rural and peri-urban areas of Togo, KARAMON CONSEIL was tasked with carrying out six Environmental and Social Impact Assessments (ESIA) for the distribution networks of six standalone water supply systems.\n\nThe six localities concerned are Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo. The project, financed by the World Bank, aims to secure drinking water supply for these communities through the establishment of standalone distribution systems.\n\nEach ESIA identified the environmental and social impacts specific to its site and proposed mitigation measures and a monitoring framework in line with World Bank safeguard requirements.",
        client: "Gouvernement du Togo / Banque mondiale",
        clientEn: "Government of Togo / World Bank",
        location: "Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo, Togo",
        locationEn: "Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo, Togo",
        status: "termine",
        category: "eies",
        startDate: "2024-06-01",
        endDate: null,
        image: "/images/projects/p02-eies-aep-togo.jpg",
        actions: null,
        results: null,
        createdAt: "2024-06-01T00:00:00.000Z",
        updatedAt: "2024-06-01T00:00:00.000Z"
    },
    {
        id: "project-3",
        title: "PAR des réseaux de distribution de six systèmes autonomes d'AEP au Togo",
        titleEn: "RAP for the distribution networks of six standalone water supply systems in Togo",
        slug: "projet-3",
        description: "Élaboration de six Plans d'Action de Réinstallation pour les réseaux de distribution de six systèmes autonomes d'adduction en eau potable, dans les mêmes localités de Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo.",
        descriptionEn: "Preparation of six Resettlement Action Plans for the distribution networks of six standalone water supply systems, in the same localities of Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo.",
        fullDescription: "En complément des EIES réalisées pour les réseaux de distribution des six systèmes autonomes d'Adduction en Eau Potable (AEP), KARAMON CONSEIL a élaboré six Plans d'Action de Réinstallation (PAR) pour les localités de Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo, au Togo.\n\nCette mission, financée par la Banque mondiale, a consisté à identifier les personnes et biens affectés par les emprises des réseaux de distribution, à évaluer les préjudices subis et à proposer des mesures de compensation et de restauration des moyens de subsistance conformes aux standards internationaux.\n\nLes PAR élaborés intègrent également des mécanismes de gestion des plaintes et un dispositif de consultation continue des populations riveraines tout au long de la mise en œuvre des travaux.",
        fullDescriptionEn: "In addition to the ESIAs carried out for the distribution networks of the six standalone water supply systems, KARAMON CONSEIL prepared six Resettlement Action Plans (RAP) for the localities of Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo, in Togo.\n\nThis assignment, financed by the World Bank, involved identifying the people and assets affected by the distribution network rights-of-way, assessing the losses incurred, and proposing compensation and livelihood restoration measures in line with international standards.\n\nThe RAPs also include grievance management mechanisms and a framework for ongoing consultation with local communities throughout the works.",
        client: "Gouvernement du Togo / Banque mondiale",
        clientEn: "Government of Togo / World Bank",
        location: "Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est et Dévégo, Togo",
        locationEn: "Sanguéra, Zanguéra, Klikamé, Apéssito-Togblékopé, Adétikopé-Est and Dévégo, Togo",
        status: "termine",
        category: "par",
        startDate: "2024-06-01",
        endDate: null,
        image: "/images/projects/p03-par-aep-togo.jpg",
        actions: null,
        results: null,
        createdAt: "2024-06-01T00:00:00.000Z",
        updatedAt: "2024-06-01T00:00:00.000Z"
    },
    {
        id: "project-4",
        title: "PAR pour l'aménagement et le bitumage de la route de contournement des monts Alédjo (section Agbang-Soumbou)",
        titleEn: "RAP for the development and paving of the Alédjo mountains bypass road (Agbang-Soumbou section)",
        slug: "projet-4",
        description: "Mission de réalisation du Plan d'Action de Réinstallation pour les travaux d'aménagement et de bitumage de la route de contournement des monts Alédjo, sur la section Agbang-Soumbou de la RN1, longue de 14,13 km.",
        descriptionEn: "Assignment to prepare the Resettlement Action Plan for the development and paving works of the Alédjo mountains bypass road, on the 14.13 km Agbang-Soumbou section of the RN1.",
        fullDescription: "KARAMON CONSEIL a réalisé le Plan d'Action de Réinstallation (PAR) pour les travaux d'aménagement et de bitumage de la route de contournement des monts Alédjo, sur la section Agbang-Soumbou de la Route Nationale 1 (RN1), dans la Région de la Kara au Togo.\n\nCette section de 14,13 km s'inscrit dans le cadre du corridor économique régional Lomé-Ouagadougou-Niamey, financé par la Banque mondiale, dont l'objectif est de fluidifier les échanges commerciaux entre le Togo, le Burkina Faso et le Niger.\n\nLe PAR a couvert le recensement des personnes et biens affectés, l'évaluation des préjudices et le calcul des compensations, ainsi que l'élaboration de mesures de restauration des moyens de subsistance pour les populations riveraines de l'emprise routière.",
        fullDescriptionEn: "KARAMON CONSEIL prepared the Resettlement Action Plan (RAP) for the development and paving works of the Alédjo mountains bypass road, on the Agbang-Soumbou section of National Road 1 (RN1), in the Kara Region of Togo.\n\nThis 14.13 km section is part of the Lomé-Ouagadougou-Niamey regional economic corridor, financed by the World Bank, which aims to facilitate trade between Togo, Burkina Faso and Niger.\n\nThe RAP covered the census of affected people and assets, the assessment of losses and calculation of compensation, as well as the design of livelihood restoration measures for communities along the road right-of-way.",
        client: "Gouvernement du Togo / Banque mondiale",
        clientEn: "Government of Togo / World Bank",
        location: "Section Agbang-Soumbou, RN1, Monts Alédjo, Région de la Kara, Togo",
        locationEn: "Agbang-Soumbou section, RN1, Alédjo mountains, Kara Region, Togo",
        status: "en-cours",
        category: "par",
        startDate: "2025-01-15",
        endDate: null,
        image: "/images/projects/p04-par-aledjo.jpg",
        actions: null,
        results: null,
        createdAt: "2025-01-15T00:00:00.000Z",
        updatedAt: "2025-01-15T00:00:00.000Z"
    },
    {
        id: "project-5",
        title: "PAR du projet de construction de 20 000 logements à coût abordable à Kpomé",
        titleEn: "RAP for the construction of 20,000 affordable housing units in Kpomé",
        slug: "projet-5",
        description: "Élaboration du Plan d'Action de Réinstallation pour le projet de construction de 20 000 logements à coût abordable à Kpomé, financé par la Banque Africaine de Développement.",
        descriptionEn: "Preparation of the Resettlement Action Plan for the construction of 20,000 affordable housing units in Kpomé, financed by the African Development Bank.",
        fullDescription: "Le projet de construction de 20 000 logements à coût abordable à Kpomé constitue l'un des projets phares du Gouvernement togolais en matière de politique de l'habitat. KARAMON CONSEIL a été mandaté pour l'élaboration du Plan d'Action de Réinstallation (PAR) de ce projet, financé par la Banque Africaine de Développement.\n\nLa mission a consisté à identifier les populations et les biens affectés par l'emprise du site d'aménagement, à évaluer les préjudices subis et à proposer un cadre de compensation juste et équitable, conforme aux standards de sauvegarde de la BAD.\n\nLe PAR intègre également des mesures de restauration des moyens de subsistance et un mécanisme de gestion des doléances pour accompagner les personnes affectées tout au long du processus de réinstallation.",
        fullDescriptionEn: "The construction of 20,000 affordable housing units in Kpomé is one of the flagship projects of the Togolese Government's housing policy. KARAMON CONSEIL was commissioned to prepare the Resettlement Action Plan (RAP) for this project, financed by the African Development Bank.\n\nThe assignment involved identifying the people and assets affected by the development site, assessing the losses incurred, and proposing a fair and equitable compensation framework in line with AfDB safeguard standards.\n\nThe RAP also includes livelihood restoration measures and a grievance management mechanism to support affected people throughout the resettlement process.",
        client: "Gouvernement du Togo / Banque Africaine de Développement",
        clientEn: "Government of Togo / African Development Bank",
        location: "Kpomé, Préfecture du Zio, Région Maritime, Togo",
        locationEn: "Kpomé, Zio Prefecture, Maritime Region, Togo",
        status: "en-cours",
        category: "par",
        startDate: "2024-01-05",
        endDate: null,
        image: "/images/projects/p05-par-kpome.jpg",
        actions: null,
        results: null,
        createdAt: "2024-01-05T00:00:00.000Z",
        updatedAt: "2024-01-05T00:00:00.000Z"
    },
    {
        id: "project-6",
        title: "Corridor Abidjan-Lagos – EIES et PAR de l'autoroute Abidjan-Noé (Côte d'Ivoire)",
        titleEn: "Abidjan-Lagos Corridor – ESIA and RAP for the Abidjan-Noé highway (Côte d'Ivoire)",
        slug: "projet-6",
        description: "Études d'Impact Environnemental et Social et Plan d'Action de Réinstallation du projet d'autoroute Abidjan-Lagos, Lot 1 Abidjan-Takoradi, Tronçon 1 Abidjan-Noé (135 km), en Côte d'Ivoire.",
        descriptionEn: "Environmental and Social Impact Assessment and Resettlement Action Plan for the Abidjan-Lagos highway project, Lot 1 Abidjan-Takoradi, Section 1 Abidjan-Noé (135 km), in Côte d'Ivoire.",
        fullDescription: "Dans le cadre du Projet Corridor Abidjan-Lagos, un axe stratégique de connectivité régionale entre la Côte d'Ivoire, le Ghana, le Togo, le Bénin et le Nigeria, KARAMON CONSEIL est intervenu sur les Études d'Impact Environnemental et Social (EIES) et le Plan d'Action de Réinstallation (PAR) du projet d'autoroute Abidjan-Lagos.\n\nLa mission a porté spécifiquement sur le Lot 1 Abidjan-Takoradi, Tronçon 1 Abidjan-Noé, un segment de 135 km en Côte d'Ivoire. Ce projet est financé par la Banque Africaine de Développement en partenariat avec l'UEMOA.\n\nLes études ont couvert l'évaluation des impacts environnementaux et sociaux du tracé autoroutier ainsi que l'identification des populations affectées, l'évaluation des préjudices et l'élaboration de mesures de compensation et de restauration des moyens de subsistance.",
        fullDescriptionEn: "As part of the Abidjan-Lagos Corridor Project, a strategic regional connectivity axis linking Côte d'Ivoire, Ghana, Togo, Benin and Nigeria, KARAMON CONSEIL worked on the Environmental and Social Impact Assessment (ESIA) and Resettlement Action Plan (RAP) for the Abidjan-Lagos highway project.\n\nThe assignment focused specifically on Lot 1 Abidjan-Takoradi, Section 1 Abidjan-Noé, a 135 km segment in Côte d'Ivoire. The project is financed by the African Development Bank in partnership with UEMOA.\n\nThe studies covered the assessment of the environmental and social impacts of the highway alignment, as well as the identification of affected populations, the assessment of losses, and the design of compensation and livelihood restoration measures.",
        client: "Banque Africaine de Développement / UEMOA",
        clientEn: "African Development Bank / UEMOA",
        location: "Abidjan-Noé (135 km), Côte d'Ivoire",
        locationEn: "Abidjan-Noé (135 km), Côte d'Ivoire",
        status: "termine",
        category: "eies",
        startDate: "2024-03-01",
        endDate: null,
        image: "/images/projects/p06-corridor-ci.jpg",
        actions: null,
        results: null,
        createdAt: "2024-03-01T00:00:00.000Z",
        updatedAt: "2024-03-01T00:00:00.000Z"
    },
    {
        id: "project-7",
        title: "Corridor Abidjan-Lagos – EIES et PAR du tronçon Elubo-Takoradi (Ghana)",
        titleEn: "Abidjan-Lagos Corridor – ESIA and RAP for the Elubo-Takoradi section (Ghana)",
        slug: "projet-7",
        description: "Études d'Impact Environnemental et Social et Plan d'Action de Réinstallation du projet d'autoroute Abidjan-Lagos, Lot 1 Abidjan-Takoradi, Tronçon 2 Elubo-Takoradi (80 km), au Ghana.",
        descriptionEn: "Environmental and Social Impact Assessment and Resettlement Action Plan for the Abidjan-Lagos highway project, Lot 1 Abidjan-Takoradi, Section 2 Elubo-Takoradi (80 km), in Ghana.",
        fullDescription: "En complément de l'intervention sur le tronçon ivoirien, KARAMON CONSEIL a réalisé les Études d'Impact Environnemental et Social (EIES) et le Plan d'Action de Réinstallation (PAR) du Tronçon 2 Elubo-Takoradi, long de 80 km, situé au Ghana, dans le cadre du même Projet Corridor Abidjan-Lagos.\n\nCe tronçon fait partie du Lot 1 Abidjan-Takoradi du corridor routier régional, financé par la Banque Africaine de Développement en partenariat avec l'UEMOA, visant à améliorer la connectivité et les échanges commerciaux entre les pays du golfe de Guinée.\n\nLa mission a couvert l'évaluation des impacts environnementaux et sociaux du tracé, ainsi que le recensement des personnes affectées et l'élaboration de mesures de compensation adaptées au contexte ghanéen.",
        fullDescriptionEn: "In addition to the work carried out on the Ivorian section, KARAMON CONSEIL carried out the Environmental and Social Impact Assessment (ESIA) and Resettlement Action Plan (RAP) for the 80 km Elubo-Takoradi Section 2, located in Ghana, under the same Abidjan-Lagos Corridor Project.\n\nThis section is part of Lot 1 Abidjan-Takoradi of the regional road corridor, financed by the African Development Bank in partnership with UEMOA, aiming to improve connectivity and trade between the Gulf of Guinea countries.\n\nThe assignment covered the assessment of the environmental and social impacts of the alignment, as well as the census of affected people and the design of compensation measures tailored to the Ghanaian context.",
        client: "Banque Africaine de Développement / UEMOA",
        clientEn: "African Development Bank / UEMOA",
        location: "Elubo-Takoradi (80 km), Ghana",
        locationEn: "Elubo-Takoradi (80 km), Ghana",
        status: "termine",
        category: "eies",
        startDate: "2024-03-01",
        endDate: null,
        image: "/images/projects/p07-corridor-ghana.jpg",
        actions: null,
        results: null,
        createdAt: "2024-03-01T00:00:00.000Z",
        updatedAt: "2024-03-01T00:00:00.000Z"
    },
    {
        id: "project-8",
        title: "EIES et PAR de neuf centres de formation technique et professionnelle au Togo",
        titleEn: "ESIA and RAP for nine technical and vocational training centres in Togo",
        slug: "projet-8",
        description: "Études d'Impact Environnemental et Social et Plans d'Action de Réinstallation pour la construction de neuf centres de formation technique et professionnelle dans neuf localités du Togo, financés par la Banque d'Investissement de la CEDEAO (BIDC).",
        descriptionEn: "Environmental and Social Impact Assessments and Resettlement Action Plans for the construction of nine technical and vocational training centres in nine localities of Togo, financed by the ECOWAS Bank for Investment and Development (EBID).",
        fullDescription: "KARAMON CONSEIL a été mandaté pour la réalisation des Études d'Impact Environnemental et Social (EIES) et des Plans d'Action de Réinstallation (PAR) de neuf projets de construction de centres de formation technique et professionnelle au Togo.\n\nLes neuf localités concernées sont Agoè-Nyivé, Ahépé, Tsévié, Sotouboua, Barkoissi, Tandjouaré, Guérin-Kouka, Danyi-Apéyémé et Koughonou. Ce vaste programme, financé par la Banque d'Investissement de la CEDEAO (BIDC), vise à renforcer l'offre de formation technique et professionnelle sur l'ensemble du territoire togolais.\n\nPour chacun des neuf sites, la mission a couvert l'évaluation des impacts environnementaux et sociaux de la construction, ainsi que l'identification des personnes affectées et l'élaboration de mesures de compensation conformes aux standards de sauvegarde de la BIDC.",
        fullDescriptionEn: "KARAMON CONSEIL was commissioned to carry out the Environmental and Social Impact Assessments (ESIA) and Resettlement Action Plans (RAP) for nine projects to build technical and vocational training centres in Togo.\n\nThe nine localities concerned are Agoè-Nyivé, Ahépé, Tsévié, Sotouboua, Barkoissi, Tandjouaré, Guérin-Kouka, Danyi-Apéyémé and Koughonou. This extensive programme, financed by the ECOWAS Bank for Investment and Development (EBID), aims to strengthen technical and vocational training provision across Togolese territory.\n\nFor each of the nine sites, the assignment covered the assessment of the environmental and social impacts of construction, as well as the identification of affected people and the design of compensation measures in line with EBID safeguard standards.",
        client: "Gouvernement du Togo / Banque d'Investissement de la CEDEAO (BIDC)",
        clientEn: "Government of Togo / ECOWAS Bank for Investment and Development (EBID)",
        location: "Agoè-Nyivé, Ahépé, Tsévié, Sotouboua, Barkoissi, Tandjouaré, Guérin-Kouka, Danyi-Apéyémé et Koughonou, Togo",
        locationEn: "Agoè-Nyivé, Ahépé, Tsévié, Sotouboua, Barkoissi, Tandjouaré, Guérin-Kouka, Danyi-Apéyémé and Koughonou, Togo",
        status: "termine",
        category: "eies",
        startDate: "2024-09-01",
        endDate: null,
        image: "/images/projects/p08-centres-formation.jpg",
        actions: null,
        results: null,
        createdAt: "2024-09-01T00:00:00.000Z",
        updatedAt: "2024-09-01T00:00:00.000Z"
    },
    {
        id: "project-9",
        title: "Audits de conformité E&S du Corridor Lomé-Ouagadougou-Niamey (PCE-LON) au Burkina Faso",
        titleEn: "E&S compliance audits of the Lomé-Ouagadougou-Niamey Corridor (PCE-LON) in Burkina Faso",
        slug: "projet-9",
        description: "Réalisation de cinq audits de conformité environnementale et sociale du projet Corridor Lomé-Ouagadougou-Niamey (PCE-LON), au titre des exercices 2022 à 2026, au Burkina Faso.",
        descriptionEn: "Five environmental and social compliance audits of the Lomé-Ouagadougou-Niamey Corridor project (PCE-LON), covering the 2022 to 2026 financial years, in Burkina Faso.",
        fullDescription: "KARAMON CONSEIL a été retenu pour la réalisation de cinq audits annuels de conformité environnementale et sociale du Projet Régional de Corridor Économique Lomé-Ouagadougou-Niamey (PCE-LON), volet Burkina Faso, financé par la Banque mondiale.\n\nCes audits, couvrant les exercices 2022, 2023, 2024, 2025 et 2026, visent à vérifier la mise en œuvre effective des mesures environnementales et sociales prévues dans le cadre du projet, ainsi que la conformité aux exigences de sauvegarde de la Banque mondiale tout au long de la durée des travaux.\n\nLa mission comprend l'évaluation de l'état d'avancement des mesures d'atténuation, le suivi des mécanismes de gestion des plaintes et la formulation de recommandations correctives le cas échéant.",
        fullDescriptionEn: "KARAMON CONSEIL was selected to carry out five annual environmental and social compliance audits of the Regional Lomé-Ouagadougou-Niamey Economic Corridor Project (PCE-LON), Burkina Faso component, financed by the World Bank.\n\nThese audits, covering the 2022, 2023, 2024, 2025 and 2026 financial years, aim to verify the effective implementation of the environmental and social measures planned under the project, as well as compliance with World Bank safeguard requirements throughout the works.\n\nThe assignment includes assessing the progress of mitigation measures, monitoring grievance management mechanisms, and formulating corrective recommendations where necessary.",
        client: "Banque mondiale",
        clientEn: "World Bank",
        location: "Burkina Faso",
        locationEn: "Burkina Faso",
        status: "en-cours",
        category: "audit",
        startDate: "2022-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z"
    },
    {
        id: "project-10",
        title: "Audit du PAR d'extension du réseau électrique de Bissau et de sa périphérie",
        titleEn: "Audit of the RAP for the electricity network extension in Bissau and its outskirts",
        slug: "projet-10",
        description: "Réalisation de l'audit de la mise en œuvre du Plan d'Action de Réinstallation des travaux d'extension du réseau de distribution d'électricité dans la ville de Bissau et ses quartiers périphériques.",
        descriptionEn: "Audit of the implementation of the Resettlement Action Plan for the extension works of the electricity distribution network in the city of Bissau and its outlying districts.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit de la mise en œuvre du Plan d'Action de Réinstallation (PAR) relatif aux travaux d'extension du réseau de distribution d'électricité dans la ville de Bissau et ses quartiers périphériques, en Guinée-Bissau.\n\nCe projet, financé par la Banque Africaine de Développement, vise à améliorer l'accès à l'électricité pour les populations urbaines et périurbaines de la capitale bissau-guinéenne.\n\nL'audit a permis de vérifier l'effectivité des mesures de compensation et de restauration des moyens de subsistance prévues par le PAR, ainsi que la conformité de leur mise en œuvre aux exigences de sauvegarde de la BAD.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the audit of the implementation of the Resettlement Action Plan (RAP) related to the extension works of the electricity distribution network in the city of Bissau and its outlying districts, in Guinea-Bissau.\n\nThis project, financed by the African Development Bank, aims to improve access to electricity for urban and peri-urban populations in the Bissau-Guinean capital.\n\nThe audit verified the effectiveness of the compensation and livelihood restoration measures set out in the RAP, as well as the compliance of their implementation with AfDB safeguard requirements.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Bissau, Guinée-Bissau",
        locationEn: "Bissau, Guinea-Bissau",
        status: "termine",
        category: "audit",
        startDate: "2023-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z"
    },
    {
        id: "project-11",
        title: "Audit du PAR de la section du lot 1 Aouda-Alhéridè au Togo",
        titleEn: "Audit of the RAP for the Lot 1 Aouda-Alhéridè section in Togo",
        slug: "projet-11",
        description: "Audit de la mise en œuvre du Plan d'Action de Réinstallation sur la section du lot 1 allant d'Aouda à Alhéridè, dans le cadre des travaux de réhabilitation routière au Togo.",
        descriptionEn: "Audit of the implementation of the Resettlement Action Plan on the Lot 1 section from Aouda to Alhéridè, as part of road rehabilitation works in Togo.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit de la mise en œuvre du Plan d'Action de Réinstallation (PAR) portant sur la section du lot 1 allant d'Aouda à Alhéridè, dans le cadre des travaux de réhabilitation de la Route Nationale 1 au Togo, financés par la Banque mondiale.\n\nL'audit a consisté à vérifier l'effectivité du versement des compensations aux personnes affectées par le projet, la mise en œuvre des mesures de restauration des moyens de subsistance et la conformité du processus aux standards de sauvegarde de la Banque mondiale.\n\nCette mission s'inscrit dans le cadre plus large des travaux de réhabilitation de la RN1, un axe routier stratégique pour la connectivité régionale du Togo.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the audit of the implementation of the Resettlement Action Plan (RAP) covering the Lot 1 section from Aouda to Alhéridè, as part of the National Road 1 rehabilitation works in Togo, financed by the World Bank.\n\nThe audit verified the effective payment of compensation to people affected by the project, the implementation of livelihood restoration measures, and the compliance of the process with World Bank safeguard standards.\n\nThis assignment is part of the broader RN1 rehabilitation works, a strategic road axis for Togo's regional connectivity.",
        client: "Banque mondiale",
        clientEn: "World Bank",
        location: "Section Aouda-Alhéridè, Togo",
        locationEn: "Aouda-Alhéridè section, Togo",
        status: "termine",
        category: "audit",
        startDate: "2023-06-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2023-06-01T00:00:00.000Z",
        updatedAt: "2023-06-01T00:00:00.000Z"
    },
    {
        id: "project-12",
        title: "Audit de performance E&S du Projet de Promotion de l'Assainissement Inclusif (PAICUT)",
        titleEn: "E&S performance audit of the Inclusive Sanitation Promotion Project (PAICUT)",
        slug: "projet-12",
        description: "Audit de performance environnementale et sociale du Projet de Promotion de l'Assainissement Inclusif des Centres Urbains au Togo (PAICUT), au titre des exercices 2024 et 2025.",
        descriptionEn: "Environmental and social performance audit of the Inclusive Sanitation Promotion Project for Urban Centres in Togo (PAICUT), covering the 2024 and 2025 financial years.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit de performance environnementale et sociale du Projet de Promotion de l'Assainissement Inclusif des Centres Urbains au Togo (PAICUT), financé par la Banque Africaine de Développement, au titre des exercices 2024 et 2025.\n\nCe projet vise à améliorer l'accès à des services d'assainissement adéquats dans les centres urbains togolais, avec une attention particulière portée à l'inclusion des populations vulnérables.\n\nL'audit a permis d'évaluer la performance environnementale et sociale de la mise en œuvre du projet sur les deux exercices considérés, et de formuler des recommandations pour le renforcement des mesures de sauvegarde.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the environmental and social performance audit of the Inclusive Sanitation Promotion Project for Urban Centres in Togo (PAICUT), financed by the African Development Bank, covering the 2024 and 2025 financial years.\n\nThis project aims to improve access to adequate sanitation services in Togolese urban centres, with particular attention paid to the inclusion of vulnerable populations.\n\nThe audit assessed the environmental and social performance of the project's implementation over the two financial years considered, and formulated recommendations to strengthen safeguard measures.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Togo",
        locationEn: "Togo",
        status: "termine",
        category: "audit",
        startDate: "2024-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
    },
    {
        id: "project-13",
        title: "Audit d'achèvement du PAR de la route Boké-Québo (Phase 1, lot 2) en Guinée",
        titleEn: "Completion audit of the RAP for the Boké-Québo road (Phase 1, lot 2) in Guinea",
        slug: "projet-13",
        description: "Réalisation de l'audit d'achèvement de la mise en œuvre du Plan d'Action de Réinstallation des personnes affectées par le projet d'aménagement de la route Boké-Québo, Phase 1, lot 2.",
        descriptionEn: "Completion audit of the implementation of the Resettlement Action Plan for people affected by the Boké-Québo road development project, Phase 1, lot 2.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit d'achèvement de la mise en œuvre du Plan d'Action de Réinstallation (PAR) des personnes affectées par le projet d'aménagement de la route Boké-Québo, Phase 1, lot 2, en République de Guinée, financé par la Banque Africaine de Développement.\n\nCet audit d'achèvement a permis de vérifier que l'ensemble des engagements de compensation et de restauration des moyens de subsistance envers les populations affectées par l'emprise routière ont été effectivement mis en œuvre.\n\nLa mission a également évalué la satisfaction des personnes affectées et la clôture effective des mécanismes de gestion des plaintes mis en place dans le cadre du projet.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the completion audit of the implementation of the Resettlement Action Plan (RAP) for people affected by the Boké-Québo road development project, Phase 1, lot 2, in the Republic of Guinea, financed by the African Development Bank.\n\nThis completion audit verified that all compensation and livelihood restoration commitments towards people affected by the road right-of-way had been effectively implemented.\n\nThe assignment also assessed the satisfaction of affected people and the effective closure of the grievance management mechanisms set up under the project.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Boké-Québo, Guinée",
        locationEn: "Boké-Québo, Guinea",
        status: "termine",
        category: "audit",
        startDate: "2023-09-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2023-09-01T00:00:00.000Z",
        updatedAt: "2023-09-01T00:00:00.000Z"
    },
    {
        id: "project-14",
        title: "Audits de conformité/performance E&S du PASEREC au Burundi",
        titleEn: "E&S compliance/performance audits of PASEREC in Burundi",
        slug: "projet-14",
        description: "Réalisation de quatre missions d'audit de conformité/performance environnementale et sociale, incluant la mise en œuvre des PAR du Programme d'Appui au Secteur de l'Eau et au Renforcement de la Résilience au Changement Climatique (PASEREC), Phase 1, au titre des exercices 2024 à 2027.",
        descriptionEn: "Four environmental and social compliance/performance audit assignments, including the implementation of RAPs under the Water Sector Support and Climate Change Resilience Strengthening Programme (PASEREC), Phase 1, covering the 2024 to 2027 financial years.",
        fullDescription: "KARAMON CONSEIL a été retenu pour la réalisation de quatre missions d'audit de conformité et de performance environnementale et sociale du Programme d'Appui au Secteur de l'Eau et au Renforcement de la Résilience au Changement Climatique (PASEREC), Phase 1, au Burundi, financé par la Banque Africaine de Développement.\n\nCes audits, couvrant les exercices 2024, 2025, 2026 et 2027, incluent l'évaluation de la mise en œuvre des Plans d'Action de Réinstallation (PAR) associés au programme.\n\nLa mission vise à s'assurer de la conformité continue du programme aux exigences de sauvegarde environnementale et sociale de la BAD, tout au long de sa mise en œuvre.",
        fullDescriptionEn: "KARAMON CONSEIL was selected to carry out four environmental and social compliance and performance audit assignments for the Water Sector Support and Climate Change Resilience Strengthening Programme (PASEREC), Phase 1, in Burundi, financed by the African Development Bank.\n\nThese audits, covering the 2024, 2025, 2026 and 2027 financial years, include the assessment of the implementation of the Resettlement Action Plans (RAP) associated with the programme.\n\nThe assignment aims to ensure the programme's continued compliance with AfDB environmental and social safeguard requirements throughout its implementation.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Burundi",
        locationEn: "Burundi",
        status: "en-cours",
        category: "audit",
        startDate: "2024-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
    },
    {
        id: "project-15",
        title: "Audits de conformité/performance E&S du PA-PSGOUV en Côte d'Ivoire",
        titleEn: "E&S compliance/performance audits of PA-PSGOUV in Côte d'Ivoire",
        slug: "projet-15",
        description: "Réalisation de quatre missions d'audit de conformité/performance environnementale et sociale, incluant la mise en œuvre des PAR du PA-PSGOUV, au titre des exercices 2022 à 2025.",
        descriptionEn: "Four environmental and social compliance/performance audit assignments, including the implementation of RAPs under PA-PSGOUV, covering the 2022 to 2025 financial years.",
        fullDescription: "KARAMON CONSEIL a réalisé quatre missions d'audit de conformité et de performance environnementale et sociale du Programme d'Appui au Programme Social du Gouvernement (PA-PSGOUV) en Côte d'Ivoire, financé par la Banque Africaine de Développement.\n\nCes audits, couvrant les exercices 2022, 2023, 2024 et 2025, ont porté sur l'évaluation de la mise en œuvre des Plans d'Action de Réinstallation (PAR) associés au programme, ainsi que sur la conformité générale aux exigences de sauvegarde de la BAD.\n\nLa mission a permis de dresser un bilan de la performance environnementale et sociale du programme sur l'ensemble de la période auditée et de formuler des recommandations pour les phases ultérieures.",
        fullDescriptionEn: "KARAMON CONSEIL carried out four environmental and social compliance and performance audit assignments for the Government Social Programme Support Project (PA-PSGOUV) in Côte d'Ivoire, financed by the African Development Bank.\n\nThese audits, covering the 2022, 2023, 2024 and 2025 financial years, assessed the implementation of the Resettlement Action Plans (RAP) associated with the programme, as well as its overall compliance with AfDB safeguard requirements.\n\nThe assignment produced an overview of the programme's environmental and social performance over the entire audited period and formulated recommendations for subsequent phases.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Côte d'Ivoire",
        locationEn: "Côte d'Ivoire",
        status: "termine",
        category: "audit",
        startDate: "2022-01-01",
        endDate: null,
        image: "/images/projects/p15-audit-papsgouv.jpg",
        actions: null,
        results: null,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z"
    },
    {
        id: "project-16",
        title: "Audit d'achèvement des PAR du Projet de Renforcement des Réseaux Électriques (PRETD)",
        titleEn: "Completion audit of the RAPs for the Electricity Network Strengthening Project (PRETD)",
        slug: "projet-16",
        description: "Audit d'achèvement de la mise en œuvre des Plans d'Action de Réinstallation du Projet de Renforcement des Réseaux Électriques de Transport et de Distribution (PRETD) en Côte d'Ivoire.",
        descriptionEn: "Completion audit of the implementation of the Resettlement Action Plans for the Electricity Transport and Distribution Network Strengthening Project (PRETD) in Côte d'Ivoire.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit d'achèvement de la mise en œuvre des Plans d'Action de Réinstallation (PAR) du Projet de Renforcement des Réseaux Électriques de Transport et de Distribution (PRETD) en Côte d'Ivoire, financé par la Banque Africaine de Développement.\n\nCe projet vise à renforcer et moderniser les infrastructures de transport et de distribution d'électricité ivoiriennes, afin d'améliorer la fiabilité de l'approvisionnement électrique national.\n\nL'audit d'achèvement a permis de vérifier la mise en œuvre complète des engagements de compensation envers les personnes affectées par les emprises des réseaux électriques, et la clôture effective des mécanismes de gestion des doléances.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the completion audit of the implementation of the Resettlement Action Plans (RAP) for the Electricity Transport and Distribution Network Strengthening Project (PRETD) in Côte d'Ivoire, financed by the African Development Bank.\n\nThis project aims to strengthen and modernise Ivorian electricity transport and distribution infrastructure, in order to improve the reliability of the national electricity supply.\n\nThe completion audit verified the full implementation of compensation commitments towards people affected by the electricity network rights-of-way, and the effective closure of the grievance management mechanisms.",
        client: "Banque Africaine de Développement",
        clientEn: "African Development Bank",
        location: "Côte d'Ivoire",
        locationEn: "Côte d'Ivoire",
        status: "termine",
        category: "audit",
        startDate: "2023-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z"
    },
    {
        id: "project-17",
        title: "Audit annuel de performance E&S du Projet de Transformation Agro-alimentaire (PTA-Togo) — 2024-2025",
        titleEn: "Annual E&S performance audit of the Agro-food Processing Project (PTA-Togo) — 2024-2025",
        slug: "projet-17",
        description: "Audit annuel de performance environnementale et sociale du projet de Transformation Agro-alimentaire (PTA-Togo), au titre des exercices 2024 et 2025.",
        descriptionEn: "Annual environmental and social performance audit of the Agro-food Processing Project (PTA-Togo), covering the 2024 and 2025 financial years.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit annuel de performance environnementale et sociale du projet de Transformation Agro-alimentaire (PTA-Togo), financé par la Banque mondiale, au titre des exercices 2024 et 2025.\n\nCe projet vise à structurer et moderniser les chaînes de valeur agro-alimentaires togolaises, en soutenant la transformation locale des produits agricoles.\n\nL'audit a permis d'évaluer la performance environnementale et sociale du projet sur les deux exercices considérés, en vérifiant la conformité aux exigences de sauvegarde de la Banque mondiale et en formulant des recommandations pour le renforcement des mesures en place.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the annual environmental and social performance audit of the Agro-food Processing Project (PTA-Togo), financed by the World Bank, covering the 2024 and 2025 financial years.\n\nThis project aims to structure and modernise Togolese agro-food value chains, supporting local processing of agricultural products.\n\nThe audit assessed the project's environmental and social performance over the two financial years considered, verifying compliance with World Bank safeguard requirements and formulating recommendations to strengthen the measures in place.",
        client: "Banque mondiale",
        clientEn: "World Bank",
        location: "Togo",
        locationEn: "Togo",
        status: "termine",
        category: "audit",
        startDate: "2024-01-01",
        endDate: null,
        image: "/images/projects/p17-audit-pta-2425.jpg",
        actions: null,
        results: null,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
    },
    {
        id: "project-18",
        title: "Audit annuel de performance E&S du Projet de Transformation Agro-alimentaire (PTA-Togo) — 2021-2023",
        titleEn: "Annual E&S performance audit of the Agro-food Processing Project (PTA-Togo) — 2021-2023",
        slug: "projet-18",
        description: "Audit annuel de performance environnementale et sociale du projet de Transformation Agro-alimentaire (PTA-Togo), au titre des exercices 2021, 2022 et 2023.",
        descriptionEn: "Annual environmental and social performance audit of the Agro-food Processing Project (PTA-Togo), covering the 2021, 2022 and 2023 financial years.",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit annuel de performance environnementale et sociale du projet de Transformation Agro-alimentaire (PTA-Togo), financé par la Banque mondiale, au titre des exercices 2021, 2022 et 2023.\n\nCet audit fait suite à une première phase du projet visant à structurer les chaînes de valeur agro-alimentaires togolaises et à soutenir la transformation locale des produits agricoles.\n\nLa mission a permis d'évaluer la performance environnementale et sociale du projet sur les trois exercices considérés et de vérifier la conformité aux exigences de sauvegarde de la Banque mondiale.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the annual environmental and social performance audit of the Agro-food Processing Project (PTA-Togo), financed by the World Bank, covering the 2021, 2022 and 2023 financial years.\n\nThis audit follows an initial phase of the project aimed at structuring Togolese agro-food value chains and supporting local processing of agricultural products.\n\nThe assignment assessed the project's environmental and social performance over the three financial years considered and verified compliance with World Bank safeguard requirements.",
        client: "Banque mondiale",
        clientEn: "World Bank",
        location: "Togo",
        locationEn: "Togo",
        status: "termine",
        category: "audit",
        startDate: "2021-01-01",
        endDate: null,
        image: "/images/projects/default-project.jpg",
        actions: null,
        results: null,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z"
    },
    {
        id: "project-19",
        title: "Audit E&S des projets multinationaux de réhabilitation routière et de protection côtière (CU9 et CU1)",
        titleEn: "E&S audit of the multinational road rehabilitation and coastal protection projects (CU9 and CU1)",
        slug: "projet-19",
        description: "Audit de performance environnementale et sociale des projets multinationaux Togo/Burkina Faso (réhabilitation de routes et facilitation du transport sur le corridor CU9 Lomé-Ouagadougou) et Bénin/Togo (réhabilitation de la route Lomé-Cotonou CU1 phase 2 et protection côtière).",
        descriptionEn: "Environmental and social performance audit of the multinational Togo/Burkina Faso project (road rehabilitation and transport facilitation on the CU9 Lomé-Ouagadougou corridor) and the Benin/Togo project (rehabilitation of the Lomé-Cotonou road, CU1 phase 2, and coastal protection).",
        fullDescription: "KARAMON CONSEIL a réalisé l'audit de performance environnementale et sociale de deux projets multinationaux financés par la Banque mondiale. Le premier concerne le Togo et le Burkina Faso, avec la réhabilitation de routes et la facilitation du transport sur le corridor CU9 Lomé-Ouagadougou. Le second concerne le Bénin et le Togo, avec la réhabilitation de la route Lomé-Cotonou (CU1, phase 2) ainsi que des travaux de protection côtière.\n\nCes deux projets s'inscrivent dans une dynamique régionale de renforcement de la connectivité routière et de résilience face à l'érosion côtière en Afrique de l'Ouest.\n\nL'audit a permis d'évaluer la performance environnementale et sociale de la mise en œuvre des deux projets et de vérifier leur conformité aux exigences de sauvegarde de la Banque mondiale.",
        fullDescriptionEn: "KARAMON CONSEIL carried out the environmental and social performance audit of two multinational projects financed by the World Bank. The first concerns Togo and Burkina Faso, involving road rehabilitation and transport facilitation on the CU9 Lomé-Ouagadougou corridor. The second concerns Benin and Togo, involving the rehabilitation of the Lomé-Cotonou road (CU1, phase 2) as well as coastal protection works.\n\nBoth projects are part of a regional drive to strengthen road connectivity and resilience to coastal erosion in West Africa.\n\nThe audit assessed the environmental and social performance of the implementation of both projects and verified their compliance with World Bank safeguard requirements.",
        client: "Banque mondiale",
        clientEn: "World Bank",
        location: "Togo, Burkina Faso et Bénin",
        locationEn: "Togo, Burkina Faso and Benin",
        status: "termine",
        category: "audit",
        startDate: "2022-01-01",
        endDate: null,
        image: "/images/projects/p19-audit-corridor-cu.jpg",
        actions: null,
        results: null,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z"
    }
];
const actualites = [
    {
        id: "actualite-1",
        title: "PAR pour l'aménagement et le bitumage de la route de contournement des monts Alédjo (section Agbang-Soumbou)",
        titleEn: "RAP for the development and paving of the Alédjo mountains bypass road (Agbang-Soumbou section)",
        slug: "actualite-projet-4",
        excerpt: "Mission de réalisation du Plan d'Action de Réinstallation pour les travaux d'aménagement et de bitumage de la route de contournement des monts Alédjo, sur la section Agbang-Soumbou de la RN1, longue de 14,13 km.",
        excerptEn: "Assignment to prepare the Resettlement Action Plan for the development and paving works of the Alédjo mountains bypass road, on the 14.13 km Agbang-Soumbou section of the RN1.",
        content: "KARAMON CONSEIL a réalisé le Plan d'Action de Réinstallation (PAR) pour les travaux d'aménagement et de bitumage de la route de contournement des monts Alédjo, sur la section Agbang-Soumbou de la Route Nationale 1 (RN1), dans la Région de la Kara au Togo.\n\nCette section de 14,13 km s'inscrit dans le cadre du corridor économique régional Lomé-Ouagadougou-Niamey, financé par la Banque mondiale, dont l'objectif est de fluidifier les échanges commerciaux entre le Togo, le Burkina Faso et le Niger.\n\nLe PAR a couvert le recensement des personnes et biens affectés, l'évaluation des préjudices et le calcul des compensations, ainsi que l'élaboration de mesures de restauration des moyens de subsistance pour les populations riveraines de l'emprise routière.",
        contentEn: "KARAMON CONSEIL prepared the Resettlement Action Plan (RAP) for the development and paving works of the Alédjo mountains bypass road, on the Agbang-Soumbou section of National Road 1 (RN1), in the Kara Region of Togo.\n\nThis 14.13 km section is part of the Lomé-Ouagadougou-Niamey regional economic corridor, financed by the World Bank, which aims to facilitate trade between Togo, Burkina Faso and Niger.\n\nThe RAP covered the census of affected people and assets, the assessment of losses and calculation of compensation, as well as the design of livelihood restoration measures for communities along the road right-of-way.",
        image: "/images/projects/p04-par-aledjo.jpg",
        category: "Projet",
        categoryEn: "Project",
        published: true,
        createdAt: "2025-11-05T00:00:00.000Z",
        updatedAt: "2025-11-05T00:00:00.000Z"
    },
    {
        id: "actualite-2",
        title: "PAR du projet de construction de 20 000 logements à coût abordable à Kpomé",
        titleEn: "RAP for the construction of 20,000 affordable housing units in Kpomé",
        slug: "actualite-projet-5",
        excerpt: "Élaboration du Plan d'Action de Réinstallation pour le projet de construction de 20 000 logements à coût abordable à Kpomé, financé par la Banque Africaine de Développement.",
        excerptEn: "Preparation of the Resettlement Action Plan for the construction of 20,000 affordable housing units in Kpomé, financed by the African Development Bank.",
        content: "Le projet de construction de 20 000 logements à coût abordable à Kpomé constitue l'un des projets phares du Gouvernement togolais en matière de politique de l'habitat. KARAMON CONSEIL a été mandaté pour l'élaboration du Plan d'Action de Réinstallation (PAR) de ce projet, financé par la Banque Africaine de Développement.\n\nLa mission a consisté à identifier les populations et les biens affectés par l'emprise du site d'aménagement, à évaluer les préjudices subis et à proposer un cadre de compensation juste et équitable, conforme aux standards de sauvegarde de la BAD.\n\nLe PAR intègre également des mesures de restauration des moyens de subsistance et un mécanisme de gestion des doléances pour accompagner les personnes affectées tout au long du processus de réinstallation.",
        contentEn: "The construction of 20,000 affordable housing units in Kpomé is one of the flagship projects of the Togolese Government's housing policy. KARAMON CONSEIL was commissioned to prepare the Resettlement Action Plan (RAP) for this project, financed by the African Development Bank.\n\nThe assignment involved identifying the people and assets affected by the development site, assessing the losses incurred, and proposing a fair and equitable compensation framework in line with AfDB safeguard standards.\n\nThe RAP also includes livelihood restoration measures and a grievance management mechanism to support affected people throughout the resettlement process.",
        image: "/images/projects/p05-par-kpome.jpg",
        category: "Projet",
        categoryEn: "Project",
        published: true,
        createdAt: "2025-10-20T00:00:00.000Z",
        updatedAt: "2025-10-20T00:00:00.000Z"
    },
    {
        id: "actualite-3",
        title: "Audits de conformité E&S du Corridor Lomé-Ouagadougou-Niamey (PCE-LON) au Burkina Faso",
        titleEn: "E&S compliance audits of the Lomé-Ouagadougou-Niamey Corridor (PCE-LON) in Burkina Faso",
        slug: "actualite-projet-9",
        excerpt: "Réalisation de cinq audits de conformité environnementale et sociale du projet Corridor Lomé-Ouagadougou-Niamey (PCE-LON), au titre des exercices 2022 à 2026, au Burkina Faso.",
        excerptEn: "Five environmental and social compliance audits of the Lomé-Ouagadougou-Niamey Corridor project (PCE-LON), covering the 2022 to 2026 financial years, in Burkina Faso.",
        content: "KARAMON CONSEIL a été retenu pour la réalisation de cinq audits annuels de conformité environnementale et sociale du Projet Régional de Corridor Économique Lomé-Ouagadougou-Niamey (PCE-LON), volet Burkina Faso, financé par la Banque mondiale.\n\nCes audits, couvrant les exercices 2022, 2023, 2024, 2025 et 2026, visent à vérifier la mise en œuvre effective des mesures environnementales et sociales prévues dans le cadre du projet, ainsi que la conformité aux exigences de sauvegarde de la Banque mondiale tout au long de la durée des travaux.\n\nLa mission comprend l'évaluation de l'état d'avancement des mesures d'atténuation, le suivi des mécanismes de gestion des plaintes et la formulation de recommandations correctives le cas échéant.",
        contentEn: "KARAMON CONSEIL was selected to carry out five annual environmental and social compliance audits of the Regional Lomé-Ouagadougou-Niamey Economic Corridor Project (PCE-LON), Burkina Faso component, financed by the World Bank.\n\nThese audits, covering the 2022, 2023, 2024, 2025 and 2026 financial years, aim to verify the effective implementation of the environmental and social measures planned under the project, as well as compliance with World Bank safeguard requirements throughout the works.\n\nThe assignment includes assessing the progress of mitigation measures, monitoring grievance management mechanisms, and formulating corrective recommendations where necessary.",
        image: "/images/projects/default-project.jpg",
        category: "Marché",
        categoryEn: "Contract",
        published: true,
        createdAt: "2025-09-10T00:00:00.000Z",
        updatedAt: "2025-09-10T00:00:00.000Z"
    },
    {
        id: "actualite-4",
        title: "Audits de conformité/performance E&S du PASEREC au Burundi",
        titleEn: "E&S compliance/performance audits of PASEREC in Burundi",
        slug: "actualite-projet-14",
        excerpt: "Réalisation de quatre missions d'audit de conformité/performance environnementale et sociale, incluant la mise en œuvre des PAR du Programme d'Appui au Secteur de l'Eau et au Renforcement de la Résilience au Changement Climatique (PASEREC), Phase 1, au titre des exercices 2024 à 2027.",
        excerptEn: "Four environmental and social compliance/performance audit assignments, including the implementation of RAPs under the Water Sector Support and Climate Change Resilience Strengthening Programme (PASEREC), Phase 1, covering the 2024 to 2027 financial years.",
        content: "KARAMON CONSEIL a été retenu pour la réalisation de quatre missions d'audit de conformité et de performance environnementale et sociale du Programme d'Appui au Secteur de l'Eau et au Renforcement de la Résilience au Changement Climatique (PASEREC), Phase 1, au Burundi, financé par la Banque Africaine de Développement.\n\nCes audits, couvrant les exercices 2024, 2025, 2026 et 2027, incluent l'évaluation de la mise en œuvre des Plans d'Action de Réinstallation (PAR) associés au programme.\n\nLa mission vise à s'assurer de la conformité continue du programme aux exigences de sauvegarde environnementale et sociale de la BAD, tout au long de sa mise en œuvre.",
        contentEn: "KARAMON CONSEIL was selected to carry out four environmental and social compliance and performance audit assignments for the Water Sector Support and Climate Change Resilience Strengthening Programme (PASEREC), Phase 1, in Burundi, financed by the African Development Bank.\n\nThese audits, covering the 2024, 2025, 2026 and 2027 financial years, include the assessment of the implementation of the Resettlement Action Plans (RAP) associated with the programme.\n\nThe assignment aims to ensure the programme's continued compliance with AfDB environmental and social safeguard requirements throughout its implementation.",
        image: "/images/projects/default-project.jpg",
        category: "Marché",
        categoryEn: "Contract",
        published: true,
        createdAt: "2025-08-01T00:00:00.000Z",
        updatedAt: "2025-08-01T00:00:00.000Z"
    }
];
const contactMessages = [];
/* ============================================================
 * Helpers
 * ============================================================ */ /**
 * Retourne une copie de l'objet avec les champs `<field>En` substitués
 * aux champs `<field>` correspondants lorsque la locale est 'en'.
 * Ne modifie rien si la traduction anglaise n'est pas renseignée.
 */ function localize(item, locale, fields) {
    if (locale !== 'en') return item;
    const clone = {
        ...item
    };
    for (const field of fields){
        const enValue = clone[`${field}En`];
        if (typeof enValue === 'string' && enValue.length > 0) {
            clone[field] = enValue;
        }
    }
    return clone;
}
const PROJECT_TRANSLATABLE_FIELDS = [
    'title',
    'description',
    'fullDescription',
    'client',
    'location'
];
const ACTUALITE_TRANSLATABLE_FIELDS = [
    'title',
    'excerpt',
    'content',
    'category'
];
function getAllProjects(locale = 'fr') {
    return [
        ...projects
    ].sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((p)=>localize(p, locale, PROJECT_TRANSLATABLE_FIELDS));
}
function getProjectBySlug(slug, locale = 'fr') {
    const project = projects.find((p)=>p.slug === slug);
    return project ? localize(project, locale, PROJECT_TRANSLATABLE_FIELDS) : undefined;
}
function getPublishedActualites(locale = 'fr') {
    return actualites.filter((a)=>a.published).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((a)=>localize(a, locale, ACTUALITE_TRANSLATABLE_FIELDS));
}
function getActualiteBySlug(slug, locale = 'fr') {
    const actualite = actualites.find((a)=>a.slug === slug);
    return actualite ? localize(actualite, locale, ACTUALITE_TRANSLATABLE_FIELDS) : undefined;
}
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/separator.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/separator.tsx <module evaluation>", "Separator");
}),
"[project]/src/components/ui/separator.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/separator.tsx", "Separator");
}),
"[project]/src/components/ui/separator.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/[locale]/projets/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript) <export setCachedRequestLocale as setRequestLocale>");
;
;
;
;
;
;
;
;
;
;
async function ProjetPage({ params }) {
    const { locale, slug } = await params;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__["setRequestLocale"])(locale);
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])();
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug, locale);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-US';
    const formatDate = (dateStr)=>{
        if (!dateStr) return t('projects.inProgress');
        return new Date(dateStr).toLocaleDateString(dateLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    let actions = [];
    let results = [];
    try {
        actions = project.actions ? JSON.parse(project.actions) : [];
    } catch  {}
    try {
        results = project.results ? JSON.parse(project.results) : [];
    } catch  {}
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-72 sm:h-96 lg:h-[28rem]",
                children: [
                    project.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: project.image,
                        alt: project.title,
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-6 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${locale}/#projets`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                size: "sm",
                                className: "bg-white/90 hover:bg-white backdrop-blur-sm gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    t('projects.backToProjects')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-8 right-8 z-10 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: project.status === 'en-cours' ? 'bg-green-600 text-white border-green-600' : 'bg-institutional text-white border-institutional',
                                        children: project.status === 'en-cours' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                t('projects.ongoingBadge')
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                t('projects.completedBadge')
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: "bg-white/90 text-foreground",
                                        children: t(`categories.${project.category}`) || project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] leading-tight",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-5 w-5 text-primary mt-0.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: t('projects.location')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: project.location
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "h-5 w-5 text-primary mt-0.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: t('projects.client')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: project.client
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-5 w-5 text-primary mt-0.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: t('projects.startDate')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: formatDate(project.startDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-5 w-5 text-primary mt-0.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: t('projects.endDate')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: formatDate(project.endDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "mb-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4",
                                children: t('projects.description')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground leading-relaxed whitespace-pre-line text-justify",
                                children: project.fullDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    actions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4",
                                children: t('projects.actions')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: actions.map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-5 w-5 text-green-600 mt-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: action
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4",
                                children: t('projects.results')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: results.map((result, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-3 p-4 bg-card rounded-xl border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-5 w-5 text-terracotta mt-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: result
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "my-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${locale}/#projets`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    t('projects.seeAllProjects')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/projets/[slug]/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[locale]/projets/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/projets/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__864d8d22._.js.map