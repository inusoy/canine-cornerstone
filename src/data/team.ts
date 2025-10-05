export type CredentialSection = {
    title: string;
    items: string[];
    note?: string; // optional footer note
};

export type TeamMember = {
    id: string; // slug used in URL
    name: string;
    role: string;
    image: string;
    bio: string[]; // paragraphs for detail page
    experience?: string[]; // paragraphs of experience items
    credentialSections?: CredentialSection[];
};

export const teamMembers: TeamMember[] = [
    {
        id: 'marta-stach',
        name: 'Marta Stach',
        role: 'Założycielka SZCZEK SZCZEK. Behawiorystka, trenerka psów, instruktorka noseworku i psycholożka.',
        image: '/images/Marta.jpg',
        bio: [
            'Nazywam się Marta Stach. Jestem certyfikowaną trenerką, behawiorystką psów, instruktorką noseworku i ludzką psycholożką!',
            'Od zawsze fascynowały mnie psychika oraz zachowania ludzi i zwierząt. Dlatego już w podstawówce wyznaczyłam sobie cel zostania psychologiem i wspierania ludzi. Zwierzęta były obecne w moim życiu odkąd pamiętam, próbowałam wymyślić sposób na ich obecność w zawodzie psychologa.',
            'Aż w 2022 roku w moim życiu pojawił się labrador retriever - Heban. Był tym czego nieświadomie szukałam przez całe moje życie. Z Hebana zrodziła się pasja do psów.',
            'Stwierdziłam, że wywrócę moje życie do góry nogami i będę pracować z psami oraz ich ludźmi. Dlatego stworzyłam SZCZEK SZCZEK, szkołę dla psów i ich ludzi. Przestrzeń, w której każdy znajdzie coś dla siebie. Prowadzę różne indywidualne i grupowe zajęcia z zakresu posłuszeństwa, psie przedszkola, spacery socjalizacyjne i nosework. Dodatkowo, można się do mnie zapisać na konsultacje behawioralne.',
            'Moim szczególnym zainteresowaniem jest psia komunikacja, zwłaszcza na linii pies-pies. Jestem zdania, że kontakty wewnątrzgatunkowe (czyli z innymi psami) są jednym z najważniejszych filarów budujących stabilnego, gotowego na wyzwania życia psa.',
            'W swojej pracy opieram się na metodach opartych na zrozumieniu psa i jasnej dla obu stron komunikacji. Jednocześnie, duży nacisk kładę na to, że pies jest psem, czyli ma swoje PSIE potrzeby i zachowania. Nie znajdziecie u mnie odwracania uwagi smaczkami, wrzucania psa w trening w każdej trudniejszej sytuacji, a zamiast tego postawimy na współpracę, komunikację i granice. Szukam balansu, nie używając przy tym przemocy.',
            'Zależy mi na rozwiązaniu problemu, a nie zaleczeniu objawów. Staram się być konkretna, ale przy tym otwarta na Wasze historie i emocje. Pies i jego opiekun są teamem, który nieustannie na siebie oddziaływuje, dlatego nie da się rozdzielić emocji opiekuna od emocji psa i emocji psa od emocji opiekuna.',
        ],
        experience: [
            'Swoją praktykę zawodową oficjalnie rozpoczęłam w październiku 2023 roku, od tego czasu aktywnie rozwijam się i buduję swoje doświadczenie w psim świecie. Uczestniczyłam w licznych kursach, seminariach, webinarach, a nawet sama organizowałam i organizuję różnego typu wydarzenia ze specjalistami. Czerpię z różnych źródeł i nurtów, w tym także z ludzkiej psychologii. Nie definiuję się jako przedstawiciel jakiegoś psiego nurtu.',
            'Jednak najlepszymi nauczycielami są dla mnie doświadczenie i psy, z którymi pracuję. Od początku pracy przeprowadziłam już ponad 350 spacerów socjalizacyjnych, wiele (niepoliczonych) konsultacji i kilkadziesiąt edycji psich przedszkoli i psich szkółek, prowadziłam/prowadzę również kilkadziesiąt noseworkowych teamów. Łącznie pracowałam z setkami psów i ich opiekunów.',
        ],
        credentialSections: [
            {
                title: 'Kwalifikacje',
                items: [
                    'Kurs trenera szkolenia psów - prowadzący: Zosia Zaniewska-Wojtków, Piotr Wojtków',
                    'Kurs behawiorysty psów - prowadzący: Zosia Zaniewska-Wojtków, Piotr Wojtków',
                    'Kurs instruktora noseworku - prowadzący: Piotr Awencki',
                    'Magister psychologii'
                ]
            },
            {
                title: 'W toku i dodatkowo',
                items: [
                    'Kurs instruktora obedience - prowadząca: Magdalena Łęczycka (nieukończony z powodu zdrowia psa)',
                    'Kurs doszkalający dla instruktorów noseworku - prowadząca: Natalia Kujawa (w trakcie)'
                ],
                note: 'Lista nie obejmuje krótszych webinarów i seminariów.'
            }
        ]
    },
    {
        id: 'wspolpracowniczka-1',
        name: 'Weronika Samstyko',
        role: 'Behawiorysta/zoopsycholog',
        image: '/images/Weronika.jpg',
        bio: [
            'Behawiorystka i zoopsycholożka, wolontariuszka we wrocławskim schronisku. Prowadzi LękOut i Salę Zabaw i Eksploracji.',
        ],
    },
];

export const getTeamMemberById = (id: string) => teamMembers.find(m => m.id === id);
