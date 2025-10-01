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
    credentialSections?: CredentialSection[];
};

export const teamMembers: TeamMember[] = [
    {
        id: 'marta-stach',
        name: 'Marta Stach',
        role: 'Założycielka SZCZEK SZCZEK. Behawiorystka, trenerka psów, instruktorka noseworku i psycholożka.',
        image: '/images/Marta.jpg',
        bio: [
            'Swoją praktykę zawodową oficjalnie rozpoczęłam w październiku 2023 roku, od tego czasu aktywnie rozwijam się i buduję swoje doświadczenie w psim świecie. Uczestniczyłam w licznych kursach, seminariach, webinarach, a nawet sama organizowałam i organizuję różnego typu wydarzenia ze specjalistami. Czerpię z różnych źródeł i nurtów, w tym także z ludzkiej psychologii. Nie definiuję się jako przedstawiciel jakiegoś psiego nurtu.',
            'Jednak najlepszymi nauczycielami są dla mnie doświadczenie i psy, z którymi pracuję. Od początku pracy przeprowadziłam już ponad 350 spacerów socjalizacyjnych, wiele (niepoliczonych) konsultacji i kilkadziesiąt edycji psich przedszkoli i psich szkółek, prowadziłam/prowadzę również kilkadziesiąt noseworkowych teamów. Łącznie pracowałam z setkami psów i ich opiekunów.',
        ],
        credentialSections: [
            {
                title: 'Kwalifikacje',
                items: [
                    'Kurs trenera szkolenia psów – prowadzący: Zosia Zaniewska-Wojtków, Piotr Wojtków',
                    'Kurs behawiorysty psów – prowadzący: Zosia Zaniewska-Wojtków, Piotr Wojtków',
                    'Kurs instruktora noseworku – prowadzący: Piotr Awencki',
                    'Magister psychologii'
                ]
            },
            {
                title: 'W toku i dodatkowo',
                items: [
                    'Kurs instruktora obedience – prowadząca: Magdalena Łęczycka (nieukończony z powodu zdrowia psa)',
                    'Kurs doszkalający dla instruktorów noseworku – prowadząca: Natalia Kujawa (w trakcie)'
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
