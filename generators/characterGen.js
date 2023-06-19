

var physicalTraits = [
  "Absence of a belly button",
  "Acne-prone",
  "Albinism",
  "Alopecia universalis (complete hair loss)",
  "Amputated fingers",
  "Angular face",
  "Angular features",
  "Arachnodactyly (elongated fingers/toes)",
  "Arched eyebrows",
  "Arched feet (pes cavus)",
  "Athletic build",
  "Athletic physique",
  "Athletic",
  "Average height",
  "Awkward",
  "Big belly",
  "Big ears",
  "Big feet",
  "Big hands",
  "Birthmark",
  "Blemished skin",
  "Bow lips",
  "Bow-legged",
  "Braces",
  "Broad chest",
  "Broad forehead",
  "Broad hips",
  "Broad nose",
  "Broad shoulders",
  "Broad waist",
  "Broad-chested",
  "Broad-shouldered",
  "Bulbous nose",
  "Burly",
  "Bushy eyebrows",
  "Button nose",
  "Chiseled jawline",
  "Chubby cheeks",
  "Chubby",
  "Cleft chin",
  "Cleft palate",
  "Crooked nose",
  "Crooked teeth",
  "Crow's feet",
  "Curved eyebrows",
  "Curved nose",
  "Curvy",
  "Dainty feet",
  "Dark-skinned",
  "Defined calves",
  "Defined jawline",
  "Delicate hands",
  "Delicate wrists",
  "Delicate",
  "Dimpled cheeks",
  "Dimpled chin",
  "Dimples on cheeks",
  "Dimples",
  "Double chin",
  "Double eyelids",
  "Double-jointed",
  "Dwarfism",
  "Ectrodactyly (lobster claw hand/foot deformity)",
  "Elegant posture",
  "Elegant",
  "Elephantiasis (abnormal swelling of limbs)",
  "Excessive body hair",
  "Excessively flexible spine",
  "Extra digits (polydactyly)",
  "Extreme hyperpigmentation",
  "Facial asymmetry",
  "Fit",
  "Flabby arms",
  "Flawless complexion",
  "Fragile",
  "Freckled",
  "Freckles on shoulders",
  "Full eyebrows",
  "Full lips",
  "Full-figured",
  "Gigantism",
  "Graceful movements",
  "Harlequin ichthyosis (thick, scaly skin)",
  "Heavyset",
  "High cheekbones",
  "High forehead",
  "Hourglass figure",
  "Hunched back",
  "Hypermobile joints",
  "Hypodontia (missing teeth)",
  "Hypopigmentation (lack of skin pigmentation)",
  "Knobby knees",
  "Knock knees",
  "Lanky",
  "Large ears",
  "Large facial scar",
  "Large forehead",
  "Large nose",
  "Lean",
  "Light-skinned",
  "Long eyelashes",
  "Long legs",
  "Long neck",
  "Long-legged",
  "Microcephaly (small head size)",
  "Missing limb",
  "Missing one ear",
  "Missing teeth",
  "Mole",
  "Moles in a symmetrical pattern",
  "Muscular arms",
  "Muscular thighs",
  "Muscular",
  "Narrow hips",
  "Narrow-shouldered",
  "Nystagmus (involuntary eye movement)",
  "Olive-skinned",
  "Osteogenesis imperfecta (brittle bones)",
  "Overweight",
  "Pale complexion",
  "Pale",
  "Paralysis in one limb",
  "Pectus excavatum (sunken chest)",
  "Petite frame",
  "Petite",
  "Phocomelia (shortened limbs)",
  "Piebaldism (patches of depigmented and pigmented skin)",
  "Pierced ears",
  "Pierced nose",
  "Pierced",
  "Pointy chin",
  "Pointy ears",
  "Poliosis (patch of white hair)",
  "Port-wine stain birthmark",
  "Prominent Adam's apple",
  "Prominent cheekbones",
  "Prominent collarbones",
  "Prominent nose",
  "Prosthetic limb",
  "Puffy cheeks",
  "Radiant smile",
  "Receding chin",
  "Receding hairline",
  "Retinitis pigmentosa (vision loss)",
  "Rosy cheeks",
  "Rosy-cheeked",
  "Round face",
  "Rugged hands",
  "Rugged",
  "Salt-and-pepper hair",
  "Scarred arms",
  "Scarred facial tattoo",
  "Scarred legs",
  "Scarred",
  "Scars on the face",
  "Sculpted calves",
  "Sculpted cheekbones",
  "Shaved head",
  "Short fingers",
  "Short legs",
  "Short stature",
  "Short-legged",
  "Short",
  "Slender fingers",
  "Slender",
  "Sloping shoulders",
  "Slouched posture",
  "Slouching",
  "Small bust",
  "Small ears",
  "Small feet",
  "Small hands",
  "Small nose",
  "Small waist",
  "Smooth skin",
  "Smooth-skinned",
  "Sparse eyelashes",
  "Square jaw",
  "Stocky",
  "Straight nose",
  "Straight teeth",
  "Strong arms",
  "Strong grip",
  "Strong",
  "Stubby fingers",
  "Sturdy",
  "Supernumerary nipples",
  "Tall",
  "Tanned complexion",
  "Tanned",
  "Tattooed",
  "Tattoos",
  "Thick eyebrows",
  "Thick lips",
  "Thick neck",
  "Thick wrists",
  "Thin ankles",
  "Thin calves",
  "Thin eyebrows",
  "Thin lips",
  "Thin wrists",
  "Thin-waisted",
  "Thin",
  "Thinning hair",
  "Toned buttocks",
  "Toned legs",
  "Toned muscles",
  "Toned",
  "Translucent skin",
  "Unique birthmark pattern",
  "Unusually long fingers",
  "Unusually long neck",
  "Unusually small ears",
  "Veiny hands",
  "Vestigial tail",
  "Visible veins all over the body",
  "Vitiligo (patches of depigmented skin)",
  "Voluptuous",
  "Webbed toes",
  "Well-built",
  "Well-defined abs",
  "Well-proportioned figure",
  "Well-proportioned",
  "Wide shoulders",
  "Wide smile",
  "Wiry",
  "Wrinkles",
  "Xeroderma pigmentosum (extreme sensitivity to sunlight)"
];
var eyeColors = [
  "Amber",
  "Blue",
  "Brown",
  "Gray",
  "Green",
  "Hazel"
];
var hairColors = [
  "Ash Blonde",
  "Auburn",
  "Black",
  "Blonde",
  "Brown",
  "Brunette",
  "Chestnut",
  "Dark Brown",
  "Dirty Blonde",
  "Ginger",
  "Golden Blonde",
  "Gray",
  "Honey Blonde",
  "Jet Black",
  "Orange",
  "Platinum",
  "Raven Black",
  "Red",
  "Sandy",
  "Silver",
  "Strawberry Blonde",
  "White",
  "Yellow"
];
var hairColorsDyed = [
  "Black",
  "Brown",
  "Blonde",
  "Red",
  "Gray",
  "White",
  "Auburn",
  "Chestnut",
  "Brunette",
  "Blond",
  "Sandy",
  "Platinum",
  "Silver",
  "Strawberry Blonde",
  "Dirty Blonde",
  "Honey Blonde",
  "Golden Blonde",
  "Ash Blonde",
  "Jet Black",
  "Raven Black",
  "Midnight Blue",
  "Emerald Green",
  "Ruby Red",
  "Purple",
  "Pink",
  "Lavender",
  "Silver Gray",
  "Pastel Blue",
  "Cotton Candy Pink",
  "Magenta",
  "Turquoise",
  "Ombre",
  "Balayage",
  "Highlights",
  "Rainbow",
  "Unicorn",
  "Mermaid"
]
var eyes = [
  "Large eyes",
  "Round eyes",
  "Almond eyes",
  "Hooded eyes",
  "Doe eyes",
  "Deep-set eyes",
  "Wide-set eyes",
  "Close-set eyes",
  "Upturned eyes",
  "Downturned eyes",
  "Cat eyes",
  "Slanted eyes",
  "Prominent eyes",
  "Monolid eyes",
  "Double eyelid eyes",
  "Heterochromia eyes",
  "Sunken eyes",
  "Bulging eyes",
  "Squinty eyes",
  "Glassy eyes",
  "Deep-set eyes",
  "Beautiful eyes",
  "Knowing eyes",
  "Mysterious eyes",
  "Wise eyes",
  "Penetrating eyes",
  "Intuitive eyes",
  "Enigmatic eyes",
  "Piercing eyes"
];
var hairs = [
  "Afro",
  "Bald",
  "Balding",
  "Bob cut",
  "Braided hair",
  "Bun",
  "Coiled hair",
  "Comb-over",
  "Curly hair",
  "Dreadlocks",
  "Fine hair",
  "Flyaway hair",
  "Frizzy hair",
  "Greasy hair",
  "Kinky hair",
  "Layered hair",
  "Long-haired",
  "Long, flowing hair",
  "Lustrous hair",
  "Messy hair",
  "Mohawk",
  "Mullet",
  "Pixie cut",
  "Ponytail",
  "Receding hairline",
  "Shaved head",
  "Shiny hair",
  "Short hair",
  "Silky hair",
  "Sleek hair",
  "Straight hair",
  "Tangled hair",
  "Thick hair",
  "Thin hair",
  "Tousled hair",
  "Voluminous hair",
  "Wavy hair",
];
var facialHairs = [
  "Anchor beard",
  "Balbo",
  "Beard",
  "Bushy beard",
  "Chin curtain beard",
  "Chinstrap beard",
  "Circle beard",
  "Clean-shaven",
  "Dali mustache",
  "Designer stubble",
  "English moustache",
  "Extended goatee",
  "Five o'clock shadow",
  "Friendly mutton chops",
  "Fu Manchu",
  "Full beard",
  "Garibaldi beard",
  "Goatee",
  "Groomed stubble",
  "Handlebar mustache",
  "Horseshoe mustache",
  "Imperial mustache",
  "Jawline beard",
  "Long beard",
  "Majestic beard",
  "Mustache",
  "Mutton chops",
  "Neatly trimmed beard",
  "No facial hair",
  "Old Dutch",
  "Patchy beard",
  "Peach fuzz",
  "Rap industry standard",
  "Rugged stubble",
  "Scruffy beard",
  "Short beard",
  "Sideburns",
  "Soul patch",
  "Spiky goatee",
  "Stubble",
  "Thick mustache",
  "Unkempt beard",
  "Van Dyke",
  "Walrus mustache",
  "Wispy beard",
  "Zorro mustache",
];
var traits = [
  "Adaptable",
  "Adventurous",
  "Affectionate",
  "Altruistic",
  "Ambitious",
  "Analytical",
  "Artistic",
  "Assertive",
  "Attentive",
  "Authentic",
  "Balanced",
  "Bold",
  "Brave",
  "Calm",
  "Caring",
  "Charismatic",
  "Charitable",
  "Charming",
  "Circumspect",
  "Cogent",
  "Compassionate",
  "Competitive",
  "Confident",
  "Cooperative",
  "Creative",
  "Curious",
  "Decisive",
  "Dedicated",
  "Dependable",
  "Detail-oriented",
  "Determined",
  "Diligent",
  "Diplomatic",
  "Discerning",
  "Disciplined",
  "Driven",
  "Easygoing",
  "Eccentric",
  "Eclectic",
  "Elysian",
  "Empathetic",
  "Empathic",
  "Empathogenic",
  "Empowered",
  "Empyrean",
  "Energetic",
  "Enigmatic",
  "Enthusiastic",
  "Equanimous",
  "Esoteric",
  "Ethereal",
  "Ethical",
  "Extroverted",
  "Exuberant",
  "Fearless",
  "Flexible",
  "Forgiving",
  "Friendly",
  "Generous",
  "Gentle",
  "Graceful",
  "Gracious",
  "Hardworking",
  "Honest",
  "Humble",
  "Humorous",
  "Hypnagogic",
  "Idiosyncratic",
  "Imaginative",
  "Impartial",
  "Independent",
  "Ineffable",
  "Ingenious",
  "Innovative",
  "Inquisitive",
  "Insightful",
  "Inspiring",
  "Intelligent",
  "Intuitive",
  "Joyful",
  "Kind",
  "Limerent",
  "Logical",
  "Logophile",
  "Loyal",
  "Magnanimous",
  "Melancholic",
  "Meliorist",
  "Mellifluous",
  "Meraki",
  "Mercurial",
  "Meticulous",
  "Modest",
  "Motivated",
  "Nebulous",
  "Neotenic",
  "Numinous",
  "Nurturing",
  "Observant",
  "Oenophile",
  "Open-minded",
  "Optimistic",
  "Organized",
  "Outgoing",
  "Passionate",
  "Patient",
  "Peaceful",
  "Perceptive",
  "Persistent",
  "Persuasive",
  "Philanthropic",
  "Philomath",
  "Playful",
  "Polite",
  "Polymathic",
  "Practical",
  "Proactive",
  "Quick-witted",
  "Quirky",
  "Rational",
  "Reflective",
  "Reliable",
  "Reliable",
  "Resilient",
  "Resilient",
  "Resolute",
  "Resourceful",
  "Resourceful",
  "Respectful",
  "Resplendent",
  "Responsible",
  "Romantic",
  "Sapiosexual",
  "Scintillating",
  "Self-assured",
  "Self-confident",
  "Self-motivated",
  "Selfless",
  "Sensible",
  "Sensitive",
  "Serendipitous",
  "Serene",
  "Sincere",
  "Sociable",
  "Solivagant",
  "Somnambulant",
  "Sophrosyne",
  "Spirited",
  "Stelliferous",
  "Strong-willed",
  "Supportive",
  "Synesthetic",
  "Tactful",
  "Tenacious",
  "Thoughtful",
  "Tolerant",
  "Tremulous",
  "Trustworthy",
  "Understanding",
  "Versatile",
  "Vestigial",
  "Visionary",
  "Wanderlust",
  "Warm-hearted",
  "Whimsical",
  "Wise",
  "Witty",
  "Xenodochial",
  "Zealous",
  "Zephyrous",
];
var negativeTraits = [
  "Abrasive",
  "Arrogant",
  "Bitter",
  "Boastful",
  "Callous",
  "Combative",
  "Compulsive",
  "Condescending",
  "Controlling",
  "Dependent",
  "Dishonest",
  "Disruptive",
  "Egotistical",
  "Excessive",
  "Frivolous",
  "Greedy",
  "Harsh",
  "Impulsive",
  "Inconsiderate",
  "Inflexible",
  "Insecure",
  "Intolerant",
  "Jealous",
  "Judgmental",
  "Lazy",
  "Manipulative",
  "Materialistic",
  "Moody",
  "Narrow-minded",
  "Needy",
  "Obstinate",
  "Overcritical",
  "Pessimistic",
  "Possessive",
  "Reckless",
  "Rigid",
  "Sarcastic",
  "Self-centered",
  "Short-tempered",
  "Stubborn",
  "Superficial",
  "Suspicious",
  "Temperamental",
  "Unadventurous",
  "Unambitious",
  "Unassertive",
  "Uncaring",
  "Uncommunicative",
  "Uncooperative",
  "Unemotional",
  "Unenthusiastic",
  "Unfocused",
  "Unforgiving",
  "Unimaginative",
  "Unkind",
  "Unmotivated",
  "Unorganized",
  "Unpredictable",
  "Unprincipled",
  "Unrealistic",
  "Unreliable",
  "Unresponsive",
  "Unruly",
  "Unsympathetic",
  "Unsystematic",
  "Untrustworthy",
  "Unwilling",
  "Unwise",
  "Unyielding",
  "Vain",
  "Vengeful",
  "Withdrawn",
  "Worrying"
];
var flaws = [
  "Ableist",
  "Acrophobia (fear of heights)",
  "Aerophobia (fear of flying)",
  "Ageist",
  "Agoraphobia (fear of open or crowded spaces)",
  "Anarchist",
  "Anti-agnostic",
  "Anti-athiest",
  "Anti-religious",
  "Approval seeker",
  "Arachnophobia (fear of spiders)",
  "Argumentative",
  "Attention deficit disorder",
  "Attention hog",
  "Attention vampire",
  "Attention-deficit",
  "Attention-seeking",
  "Avoidant",
  "Bigoted",
  "Blunt",
  "Catastrophizer",
  "Chronic complainer",
  "Classist",
  "Claustrophobia (fear of confined spaces)",
  "Clingy",
  "Closed-minded",
  "Complacent",
  "Compulsive gossip",
  "Compulsive liar",
  "Compulsive spender",
  "Conceited",
  "Control freak",
  "Controlled by fear",
  "Corrupt",
  "Coulrophobia (fear of clowns)",
  "Cowardly",
  "Critical",
  "Cynical",
  "Deceitful",
  "Defeatist",
  "Defensive",
  "Defiant",
  "Demanding",
  "Discontented",
  "Disloyal",
  "Disorganized",
  "Distrustful",
  "Doubtful",
  "Easily distracted",
  "Easily influenced",
  "Easily manipulated",
  "Egocentric",
  "Emotionally dependent",
  "Emotionally unavailable",
  "Enabler",
  "Envious",
  "Escapist",
  "Excessive planner",
  "Excessive worrier",
  "Excessively agnostic",
  "Excessively atheist",
  "Excessively religious",
  "Fear of commitment",
  "Fearful",
  "Flaky",
  "Forgetful",
  "Germophobia (fear of germs or dirt)",
  "Gossip-prone",
  "Guarded",
  "Gullible",
  "Hesitant",
  "Heterophobic",
  "Homophobic",
  "Hot-tempered",
  "Hypocritical",
  "Impatient",
  "Impersonal",
  "Impetuous",
  "Impolite",
  "Imposter syndrome",
  "Impulsive",
  "Inattentive",
  "Inconsistent",
  "Indecisive",
  "Indifferent",
  "Inferiority complex",
  "Inhibited",
  "Insensitive",
  "Insubordinate",
  "Invasive",
  "Irresponsible",
  "Lack of ambition",
  "Lack of emotional intelligence",
  "Lack of empathy",
  "Lack of motivation",
  "Lack of self-awareness",
  "Lack of self-discipline",
  "Lackadaisical",
  "Likes Beetroot",
  "Loudmouthed",
  "Martyr complex",
  "Mistrustful",
  "Mysandristic",
  "Mysogonistic",
  "Narcissistic",
  "Nationalist",
  "Neglectful",
  "Neurotic",
  "Nyctophobia (fear of darkness)",
  "Ophidiophobia (fear of snakes)",
  "Overanalytical",
  "Overbearing",
  "Overconfident",
  "Overly cautious",
  "Overly competitive",
  "Overly controlling",
  "Overly critical",
  "Overly dramatic",
  "Overly secretive",
  "Overly self-critical",
  "Overly sensitive",
  "Overprotective",
  "Oversensitive",
  "Overthinker",
  "Paranoid",
  "Passive-aggressive",
  "Passive",
  "People pleaser",
  "Perfectionist",
  "Poor Hygiene",
  "Prideful",
  "Procrastinator",
  "Proud",
  "Racist",
  "Rebellious",
  "Restless",
  "Revengeful",
  "Rigid thinking",
  "Scheming",
  "Self-deceptive",
  "Self-deprecating",
  "Self-destructive",
  "Self-doubting",
  "Self-indulgent",
  "Self-pitying",
  "Self-righteous",
  "Self-sabotaging",
  "Selfish",
  "Sexist",
  "Short-fused",
  "Skeptical",
  "Sloppy",
  "Socially awkward",
  "Spiteful",
  "Superstitious",
  "Tactless",
  "Trypophobia (fear of clusters of small holes)",
  "Uncommitted",
  "Undependable",
  "Undisciplined",
  "Ungrateful",
  "Untrusting",
  "Victim mentality",
  "Volatile",
  "Workaholic",
  "Xenophobic"
];
var beliefs = [
  "Love conquers all",
  "Hard work leads to success",
  "Money is the root of all evil",
  "Trust must be earned",
  "Everyone deserves a second chance",
  "Life is meaningless",
  "Honesty is always the best policy",
  "People are inherently selfish",
  "The ends justify the means",
  "Family comes first",
  "You can't change the past",
  "We create our own destiny",
  "Knowledge is power",
  "There's no such thing as luck",
  "The universe has a plan for everyone",
  "Violence solves problems",
  "Forgiveness is divine",
  "You're either born talented or not",
  "Success requires taking risks",
  "Life is a constant struggle",
  "Everyone has a hidden agenda",
  "Hope is for fools",
  "You're responsible for your own happiness",
  "Rules are meant to be broken",
  "Love is a battlefield",
  "Money can buy happiness",
  "The truth is subjective",
  "You can't please everyone",
  "Strength comes from within",
  "People can change",
  "Life is a series of random events",
  "Power corrupts",
  "Actions speak louder than words",
  "Everything happens for a reason",
  "Dreams can come true",
  "The world is a cruel place",
  "Respect must be earned",
  "Good things come to those who wait",
  "Fate determines our lives",
  "Ignorance is bliss",
  "You're never too old to learn",
  "Beauty is only skin deep",
  "The truth will set you free",
  "It's better to be alone than in bad company",
  "Success is measured by wealth",
  "Love is a weakness",
  "Love is love",
  "Life is what you make of it",
  "The past defines who we are",
  "There's no such thing as a free lunch",
  "People are inherently good",
  "Patience is a virtue",
  "You can't trust anyone",
  "Wealth equals happiness",
  "Change is inevitable",
  "Revenge is a dish best served cold",
  "We're all pawns in a bigger game",
  "Faith can move mountains",
  "Nobody's perfect",
  "Time heals all wounds",
  "Life is a journey, not a destination",
  "The world owes you nothing",
  "Knowledge comes from experience",
  "You can't change others, only yourself",
  "Love is a choice",
  "Success is not for the faint of heart",
  "The future is uncertain",
  "Compassion is the key to peace",
  "Money can't buy true happiness",
  "No pain, no gain",
  "Trust your instincts",
  "We're all equal in the eyes of God",
  "The best things in life are free",
  "Life is too short to hold grudges",
  "It's better to be safe than sorry",
  "True friends are hard to find",
  "The world is a beautiful place",
  "Failure is not an option",
  "Love is the greatest power of all",
  "War never changes",
  "The journey is more important than the destination",
  "Greed leads to downfall",
  "You reap what you sow",
  "Laughter is the best medicine",
  "Life isn't fair",
  "Your beliefs shape your reality",
  "Good always triumphs over evil",
  "Don't judge a book by its cover",
  "Every cloud has a silver lining",
  "Live and let live",
  "The truth is often painful",
  "Hope keeps us going",
  "Actions have consequences",
  "Success is a state of mind",
  "Love knows no boundaries",
  "People are motivated by self-interest",
  "The greatest risk is not taking any risk",
  "Life is a gift",
  "We're all in this together",
  "Doubt is the beginning of wisdom",
  "Money can't buy love",
  "Destiny is within our control",
  "In unity, there is strength",
  "There's always room for improvement",
  "Live life to the fullest",
  "Justice will prevail",
  "Justice must be served, no matter the cost",
  "Only the strong survive in this world",
  "Kindness is a sign of weakness",
  "Power is the ultimate goal",
  "Trust is a luxury I cannot afford",
  "Everyone is out to get me",
  "Love is a mere illusion",
  "Inequality is a natural order",
  "Sacrifice is necessary for progress",
  "I am destined for greatness",
  "Forgiveness is a sign of weakness",
  "Wealth is the measure of success",
  "The world owes me everything",
  "The weak deserve their fate",
  "There's no such thing as true friendship",
  "Innovation requires destruction",
  "Fear is a powerful weapon",
  "Happiness is fleeting and meaningless",
  "Knowledge is a burden",
  "Only the ruthless can thrive",
  "The world is a chaotic place",
  "Deception is a necessary strategy",
  "Life is a game to be won",
  "Empathy is a waste of time",
  "I must control others to feel powerful",
  "Chaos is the natural order of things",
  "Faith is for the ignorant",
  "Compassion is a weakness to be exploited",
  "The world is a cruel and unfair place",
  "I am the master of my own destiny",
  "Conformity ensures survival",
  "Vengeance is the only justice",
  "I am superior to others",
  "Emotions cloud judgment",
  "There's no room for mercy",
  "Weakness must be eradicated",
  "Love is a tool for manipulation",
  "Rules are meant to be broken for personal gain",
  "The world is a prison of limitations",
  "Only the cunning can achieve greatness",
  "Hope is for fools and dreamers",
  "Good and evil are just social constructs",
  "I am destined to bring about destruction",
  "The world is a playground for the powerful",
  "I must exploit others to get ahead",
  "Compassion is a sign of weakness",
  "Innocence is a liability",
  "Morality is subjective and irrelevant",
  "Life is a constant battle for survival",
  "Manipulation is the key to control",
  "Love is a distraction from personal ambition",
  "Strength justifies any action",
  "The world is a stage, and I am its puppeteer",
  "I must rise above the limitations of morality",
  "Empathy is a useless emotion",
  "Morality is a tool of the weak to control the strong",
  "The pursuit of power is the only purpose in life",
  "In order to succeed, I must leave others behind",
  "Honor and loyalty are for the naive",
  "The weak deserve their suffering",
  "Love is a foolish sentiment",
  "I am the architect of my own fate",
  "Morality is an illusion to keep the masses in check",
  "The world is a canvas, and I am the artist of chaos",
  "To achieve greatness, sacrifices must be made",
  "I am destined to be a force of destruction",
  "Empathy is a weakness that hinders progress",
  "Morality is a construct used to suppress individuality",
  "Love is a tool to exploit the vulnerable",
  "Strength justifies any action, regardless of consequences",
  "The world is a battlefield, and I am the conqueror",
  "I must break the chains of morality to attain true power",
  "Empathy is a distraction from personal goals",
  "Morality is a barrier to personal freedom",
  "Love is a delusion that leads to heartache",
  "I am the embodiment of darkness and chaos",
  "To achieve greatness, sacrifices must be made without remorse",
  "I am destined to rule with an iron fist",
  "Empathy is a weakness that must be overcome",
  "Morality is a crutch for the weak-minded",
  "Love is a fleeting illusion that brings nothing but pain",
  "Strength justifies any action, no matter the collateral damage",
  "The world is a playground for the powerful, and I am the puppet master",
  "I must embrace my dark nature to attain true power",
  "Kindness can change the world",
  "Love is the most powerful force in the universe",
  "Every person has inherent worth and deserves respect",
  "Empathy is the key to understanding and connection",
  "Together, we can accomplish anything",
  "Hope is the guiding light in dark times",
  "Forgiveness has the power to heal and transform",
  "Every challenge is an opportunity for growth",
  "Believing in oneself is the first step towards success",
  "In unity, there is strength and harmony",
  "Joy can be found in the simplest of moments",
  "The power of positivity can overcome any adversity",
  "Gratitude opens the door to abundance and contentment",
  "Sharing kindness and compassion creates a ripple effect",
  "Each day is a new chance to make a positive impact",
  "Authenticity and embracing one's true self is liberating",
  "The pursuit of knowledge leads to personal and societal progress",
  "Diversity enriches our world and fosters understanding",
  "Acts of generosity and selflessness create a better world",
  "Happiness is found in appreciating what we already have",
  "The beauty of life lies in its imperfections",
  "The world is full of endless possibilities and opportunities",
  "Each person has the ability to make a difference",
  "Faith in oneself and the future breeds success",
  "Compassion and understanding bridge divides",
  "Living with gratitude attracts abundance and fulfillment"
];
var actions = [
  "so I must take action.",
  "and nothing can change it.",
  "but it shouldn't be that way.",
  "and I will fight for it.",
  "so I can make a difference.",
  "no matter the sacrifices.",
  "despite the challenges it presents.",
  "regardless of what others say.",
  "and it fuels my determination.",
  "even if it goes against the norm.",
  "and I won't back down.",
  "because it's my calling.",
  "and I won't rest until it's achieved.",
  "even if I stand alone.",
  "and it defines who I am.",
  "no matter the consequences.",
  "because I refuse to settle.",
  "and I won't be silenced.",
  "even if it takes a lifetime.",
  "and I won't let anyone deter me.",
  "because it's my responsibility.",
  "and it drives my every action.",
  "no matter how daunting it seems.",
  "because it's the right thing to do.",
  "and I won't give up.",
  "even if it means going against the odds.",
  "and I won't let fear hold me back.",
  "because it's in my blood.",
  "and I won't accept anything less.",
  "no matter the doubts that arise.",
  "because I owe it to myself.",
  "and I won't compromise my beliefs.",
  "even if the world tries to tear it apart.",
  "and I won't settle for mediocrity.",
  "because it's my passion.",
  "and I won't let anyone stand in my way.",
  "no matter the sacrifices it requires.",
  "because it's worth fighting for.",
  "and I won't let it slip away.",
  "even if it means starting from scratch.",
  "and I won't let failure define me.",
  "because it's my purpose.",
  "and I won't let the doubters discourage me.",
  "no matter how long it takes.",
  "because I believe in it wholeheartedly.",
  "and I won't let setbacks deter me.",
  "even if it seems impossible.",
  "and I won't settle for anything less.",
  "because it's my dream.",
  "and I won't let anyone extinguish my fire.",
  "no matter the obstacles that come my way.",
  "because it's what I was born to do.",
  "and I won't let anything stand in my path.",
  "even if others don't understand.",
  "and I won't stop until it's accomplished.",
  "because it's my mission.",
  "and I won't let negativity bring me down.",
  "no matter how many times I fall.",
  "because I have unwavering faith.",
  "and I won't let doubt consume me.",
  "even if it means going against the grain.",
  "and I won't let anyone crush my spirit.",
  "because it's my destiny.",
  "and I won't let anyone dictate my journey.",
  "no matter the naysayers.",
  "because it's what drives me forward.",
  "and I won't let setbacks define me.",
  "even if it feels like an uphill battle.",
  "and I won't let anyone steal my joy.",
  "because it's my legacy.",
  "and I won't let anything hold me back.",
  "no matter the hardships I face.",
  "because it's my vision.",
  "and I won't let anyone undermine my purpose.",
  "even if it means going against the tide.",
  "and I won't let anyone break my resolve.",
  "because it's my life's work.",
  "and I won't let anyone dampen my enthusiasm.",
  "no matter the criticism I receive.",
  "because it's my true calling.",
  "so I must rise above the challenges.",
  "and I will relentlessly pursue it.",
  "but I will rewrite the narrative.",
  "so I must embrace the unknown.",
  "and I will make it my mission.",
  "but I will defy the odds.",
  "so I must step out of my comfort zone.",
  "and I will leave a lasting impact.",
  "but I will break free from limitations.",
  "so I must seize the opportunity.",
  "and I will conquer every obstacle.",
  "but I will create my own destiny.",
  "so I must challenge the status quo.",
  "and I will inspire transformation.",
  "but I will prove them wrong.",
  "so I must persevere against all odds.",
  "and I will shape a better future.",
  "but I will overcome every setback.",
  "so I must embrace the power within.",
  "and I will make my mark.",
  "but I will refuse to settle.",
  "so I must adapt and evolve.",
  "and I will defy expectations.",
  "but I will change the narrative.",
  "so I must believe in my potential.",
  "and I will push beyond boundaries.",
  "but I will create my own path.",
  "so I must embrace the journey.",
  "and I will leave a legacy.",
  "but I will challenge the norms.",
  "so I must dare to dream.",
  "and I will inspire greatness.",
  "but I will rewrite the rules.",
  "so I must take bold leaps.",
  "and I will embrace the unknown.",
  "but I will shape my own destiny.",
  "so I must refuse to give up.",
  "and I will make a difference.",
  "but I will conquer my fears.",
  "so I must persist with resilience.",
  "and I will transform adversity into opportunity.",
  "but I will build a brighter tomorrow.",
  "so I must harness my inner strength.",
  "and I will empower others.",
  "but I will defy limitations.",
  "so I must cultivate a growth mindset.",
  "and I will inspire positive change.",
  "but I will strive for excellence.",
  "so I must embrace the power of choice.",
  "and I will shape my own reality."
];
var occupations = [
  "Mason",
  "Hacker",
  "Priest",
  "Bishop",
  "Accountant",
  "Teacher",
  "Chef",
  "Doctor",
  "Nurse",
  "Artist",
  "Police officer",
  "Musician",
  "Lawyer",
  "Carpenter",
  "Pilot",
  "Writer",
  "Librarian",
  "Scientist",
  "Athlete",
  "Architect",
  "Actor",
  "Photographer",
  "Salesperson",
  "Plumber",
  "Journalist",
  "Fashion designer",
  "Firefighter",
  "Psychologist",
  "Financial advisor",
  "Barista",
  "Florist",
  "Veterinarian",
  "Social worker",
  "Entrepreneur",
  "Professor",
  "Astronaut",
  "Mechanic",
  "Paramedic",
  "Web developer",
  "Economist",
  "Illustrator",
  "Pharmacist",
  "Personal trainer",
  "Biologist",
  "Geologist",
  "Mathematician",
  "Historian",
  "Geographer",
  "Graphic designer",
  "Police detective",
  "Astronomer",
  "Botanist",
  "Zoologist",
  "Sociologist",
  "Anthropologist",
  "Linguist",
  "Chemist",
  "Physicist",
  "Marine biologist",
  "Meteorologist",
  "Environmentalist",
  "Data analyst",
  "Fitness instructor",
  "Art therapist",
  "Biomedical engineer",
  "Computer programmer",
  "Music therapist",
  "Public relations specialist",
  "AI Specialist",
  "AI Engineer",
  "Urban planner",
  "Veterinary technician",
  "Wedding planner",
  "Yoga instructor",
  "Bank teller",
  "Archaeologist",
  "Air traffic controller",
  "Civil engineer",
  "Cybersecurity analyst",
  "Data scientist",
  "Electrician",
  "Fashion stylist",
  "Financial analyst",
  "Game developer",
  "Human resources manager",
  "Industrial designer",
  "Investment banker",
  "Marketing manager",
  "Neurosurgeon",
  "Occupational therapist",
  "Petroleum engineer",
  "Product manager",
  "Psychiatrist",
  "Radiologist",
  "Real estate agent",
  "Software engineer",
  "Sports coach",
  "Surgeon",
  "UX designer",
  "Video editor",
  "Web designer",
  "Zookeeper",
  "Augmented reality developer",
  "Blockchain specialist",
  "Drone operator",
  "Geneticist",
  "Nanotechnologist",
  "Quantum physicist",
  "Robot technician",
  "Space tourism guide",
  "Time travel researcher",
  "Virtual reality architect",
  "Biomimicry engineer",
  "Cybernetic implant specialist",
  "Energy harvesting technician",
  "Holographic fashion designer",
  "Memory implant therapist",
  "Neural network trainer",
  "Quantum cryptographer",
  "Synthetic organ designer",
  "Telepathy researcher",
  "Warp drive technician",
  "Astrobiologist",
  "Galactic historian",
  "Molecular gastronomist",
  "Photonics engineer",
  "Solar system tour guide",
  "Time-traveling detective",
  "Alien linguist",
  "Dimensional geographer",
  "Gravity manipulation engineer",
  "Holistic holographer",
  "Nano-fabrication engineer",
  "Quantum energy healer",
  "Singularity theorist",
  "Thought architect",
  "Virtual reality choreographer",
  "Xenoarchaeologist",
  "Dark matter physicist",
  "Exoplanetary ecologist",
  "Interstellar navigator",
  "Neuroimplant specialist",
  "Parallel universe diplomat",
  "Quantum computing scientist",
  "Subspace engineer",
  "Transhumanist philosopher",
  "Astral projection guide",
  "Cybernetic augmentation artist",
  "Fractal artist",
  "Lunar geologist",
  "Neuron interface designer",
  "Psionic therapist",
  "Space archaeologist",
  "Time manipulation theorist",
  "Zero-gravity yoga instructor",
  "Astrodynamicist",
  "Cryogenics engineer",
  "Extraterrestrial communications specialist",
  "Holographic concert designer",
  "Magnetic field engineer",
  "Orbital skydiving instructor",
  "Quantum neurologist",
  "Stellar cartographer",
  "Transdimensional architect",
  "Warp field technician",
  "Xenobiologist",
  "Blacksmith",
  "Smith",
  "Knight",
  "Tailor",
  "Farmer",
  "Alchemist",
  "Baker",
  "Barber",
  "Cook",
  "Dancer",
  "Diplomat",
  "Engineer",
  "Fisherman",
  "Glassblower",
  "Hunter",
  "Innkeeper",
  "Jester",
  "Judge",
  "Leatherworker",
  "Mercenary",
  "Minstrel",
  "Monk",
  "Noble",
  "Painter",
  "Potter",
  "Sailor",
  "Scholar",
  "Sculptor",
  "Shepherd",
  "Shoemaker",
  "Scribe",
  "Soldier",
  "Stablehand",
  "Tavernkeeper",
  "Vintner",
  "Apothecary",
  "Astrologer",
  "Bailiff",
  "Cartographer",
  "Chancellor",
  "Clockmaker",
  "Secretary",
  "Cheesemaker",
  "Slave",
  "Butler",
  "Servant",
  "Goatherd",
  "Shepherd",
  "Swineherd",
  "Butcher",
  "Tanner",
  "Seamstress",
  "Weaver",
  "Mortician",
  "Miller",
  "Charcoal Maker",
  "Brewer",
  "Almskeeper",
  "Groundskeeper",
  "Gardener",
  "Laborer",
  "Cooper",
  "Cobbler",
  "Armorer",
  "Falconer",
  "Tailer",
  "Powlman",
  "Clergyman",
  "Guildsman",
  "Goldsmith",
  "Metalsmith",
  "Groom",
  "Squire",
  "Page",
  "Messenger",
  "Call Operator",
  "Silversmith",
  "Grocer",
  "Furrier",
  "Fishmonger",
  "Cordwainer",
  "Cartwright",
  "Chandler",
  "Hayward",
  "Gongfarmer",
  "Watchman",
  "Archer",
  "Thatcher",
  "Barrister",
  "Prompt Artist",
  "Seaman",
  "Navigator",
  "Angler"

];

function generateName() {
  var names = ["Fred", "Jim", "John", "Sid"];
  var randomIndex = Math.floor(Math.random() * names.length);
  var name = names[randomIndex];
  
  var nameElement = document.getElementById("resultName");
  nameElement.textContent = name;
}

function generateGender() {
  if(document.getElementById("allowLGBT").checked) {
    var commonGenders = [
      "Straight Male",
      "Straight Female"
    ];
    var uncommonGenders = [
      "Gay Male",
      "Lesbian Female",
      "Bisexual Male",
      "Bisexual Female",
    ];
    var rareGenders = [
      "Trans Male",
      "Trans Female",
      "Asexual Male",
      "Asexual Female",
      "Gender Neutral",
      "Non-binary",
      "Agender",
      "Pangender",
      "Genderfluid"
    ];
    if (Math.random() <= 0.7) {
      var randomIndex = Math.floor(Math.random() * commonGenders.length);
      var gender = commonGenders[randomIndex];
    } else if (Math.random() <= 0.7) {
      var randomIndex = Math.floor(Math.random() * uncommonGenders.length);
      var gender = uncommonGenders[randomIndex];
    } else {
      var randomIndex = Math.floor(Math.random() * rareGenders.length);
      var gender = rareGenders[randomIndex];
    }
  } else if (Math.random() <= 0.5) {
    var gender = "Male";
  } else {
    var gender = "Female";
  }
  
  var genderElement = document.getElementById("resultGender");
  genderElement.textContent = gender;
}

function generateEyes() {
  var randomIndex = Math.floor(Math.random() * eyes.length);
  var eye = eyes[randomIndex];

  if (document.getElementById("resultPhysicalTraits").textContent.includes("Albinism") && eye.includes("Heterochromia")) {
    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = "Pink-" + eyeColors[randomIndex] + ", " + eye;
    } else {
      eye = "Pink, " + eye;
    }

    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = "Pink-" + eyeColors[randomIndex] + " and " + eye;
    } else {
      eye = "Pink and " + eye;
    }

  } else if (document.getElementById("resultPhysicalTraits").textContent.includes("Albinism")) {
    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = "Pink-" + eyeColors[randomIndex] + ", " + eye;
    } else {
      eye = "Pink, " + eye;
    }
  } else if (eye.includes("Heterochromia")) {
    randomIndex = Math.floor(Math.random() * eyeColors.length);
    eye = eyeColors[randomIndex] + ", " + eye;
    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = eyeColors[randomIndex] + "-" + eye;
    }

    randomIndex = Math.floor(Math.random() * eyeColors.length);
    eye = eyeColors[randomIndex] + " and " + eye;
    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = eyeColors[randomIndex] + "-" + eye;
    }
  } else {
    randomIndex = Math.floor(Math.random() * eyeColors.length);
    eye = eyeColors[randomIndex] + ", " + eye;
    if (Math.random() <= 0.25) {
      randomIndex = Math.floor(Math.random() * eyeColors.length);
      eye = eyeColors[randomIndex] + "-" + eye;
    }
  }
  
  var eyeElement = document.getElementById("resultEyes");
  eyeElement.textContent = eye;
}

function generateHair() {
  var randomIndex = Math.floor(Math.random() * hairs.length);
  var hair = hairs[randomIndex];

  if (hair !== "Bald") {
    if (document.getElementById("resultPhysicalTraits").textContent.includes("Albinism"))
    {
      var albinoHair = ["Platinum", "White", "Yellow", "Red", "Light-Gray", "Blonde", "Sandy", "Silver"];
      randomIndex = Math.floor(Math.random() * albinoHair.length);
      hair = albinoHair[randomIndex] + ", " + hair;
    } else {
      randomIndex = Math.floor(Math.random() * hairColors.length);
      hair = hairColors[randomIndex] + ", " + hair;
    }

    if (Math.random() <= 0.2) {
      randomIndex = Math.floor(Math.random() * hairColorsDyed.length);
      hair = hair + ", Dyed " + hairColorsDyed[randomIndex];
    }
  }
  
  var hairElement = document.getElementById("resultHair");
  hairElement.textContent = hair;
}

function generateFacialHair() {
  var randomIndex = Math.floor(Math.random() * facialHairs.length);
  var facialHair = facialHairs[randomIndex];

  if (facialHair !== "No facial hair") {
    if (Math.random() <= 0.25 || document.getElementById("resultHair").textContent.includes("Bald"))
    {
      if (document.getElementById("resultPhysicalTraits").textContent.includes("Albinism"))
      {
        var albinoFacialHair = ["Platinum", "White", "Yellow", "Red", "Light-Gray", "Blonde", "Sandy", "Silver"];
        randomIndex = Math.floor(Math.random() * albinoFacialHair.length);
        facialHair = albinoFacialHair[randomIndex] + ", " + facialHair;
      } else {
        randomIndex = Math.floor(Math.random() * hairColors.length);
        facialHair = hairColors[randomIndex] + ", " + facialHair;
      }
    }

    if (Math.random() <= 0.2) {
      randomIndex = Math.floor(Math.random() * hairColorsDyed.length);
      facialHair = facialHair + ", Dyed " + hairColorsDyed[randomIndex];
    }
  }
  
  var facialHairElement = document.getElementById("resultFacialHair");
  facialHairElement.textContent = facialHair;
}

function generatePhysicalTraits() {
  // Code for generating physical traits
  // Replace the code below with your own physical traits generation logic

  var randomIndex = Math.floor(Math.random() * physicalTraits.length);
  var physicalTrait = physicalTraits[randomIndex];
  randomIndex = Math.floor(Math.random() * physicalTraits.length);
  physicalTrait = physicalTraits[randomIndex] + ", " + [physicalTrait];  

  if (Math.random() <= 0.3) {
    randomIndex = Math.floor(Math.random() * physicalTraits.length);
    physicalTrait = physicalTraits[randomIndex] + ", " + [physicalTrait];  
  } else if (Math.random() <= 0.25) {
    randomIndex = Math.floor(Math.random() * physicalTraits.length);
    physicalTrait = [physicalTrait] + ", " + physicalTraits[randomIndex];  
  }
  
  var physicalTraitsElement = document.getElementById("resultPhysicalTraits");
  physicalTraitsElement.textContent = physicalTrait;
}

function generatePersonalityTraits() {
  // Code for generating personality traits
  // Replace the code below with your own personality traits generation logic
  var randomIndex = Math.floor(Math.random() * traits.length);
  var personalityTrait = traits[randomIndex];
  randomIndex = Math.floor(Math.random() * traits.length);
  personalityTrait = traits[randomIndex] + ", " + [personalityTrait];
  if (Math.random() <= 0.3) {
    randomIndex = Math.floor(Math.random() * traits.length);
    personalityTrait = traits[randomIndex] + ", " + [personalityTrait];
  }

  if (document.getElementById("allowNegativePersonality").checked)
  {
    if (Math.random() <= 0.6666) {
      var randomIndex = Math.floor(Math.random() * traits.length);
      var personalityTrait = traits[randomIndex];
    } else {
      var randomIndex = Math.floor(Math.random() * negativeTraits.length);
      var personalityTrait = negativeTraits[randomIndex];
    }
    
    for (let index = 0; index < (Math.random() * 2); index++) {
      if (Math.random() <= 0.6666) {
        randomIndex = Math.floor(Math.random() * traits.length);
        personalityTrait = personalityTrait + ", " + traits[randomIndex];
      } else {
        randomIndex = Math.floor(Math.random() * negativeTraits.length);
        personalityTrait = personalityTrait + ", " + negativeTraits[randomIndex];
      }
    }

  } else
  {
    var randomIndex = Math.floor(Math.random() * traits.length);
    var personalityTrait = traits[randomIndex];
    
    for (let index = 0; index < (Math.random() * 2); index++) {
      randomIndex = Math.floor(Math.random() * traits.length);
      personalityTrait = personalityTrait + ", " + traits[randomIndex];
    }
  }
  
  var personalityTraitsElement = document.getElementById("resultPersonalityTraits");
  personalityTraitsElement.textContent = personalityTrait;
}

function generateFlaws() {
  if (Math.random() <= 0.5) {
    var randomIndex = Math.floor(Math.random() * flaws.length);
    var flaw = flaws[randomIndex];
  } else {
    var randomIndex = Math.floor(Math.random() * negativeTraits.length);
    var flaw = negativeTraits[randomIndex];
  }

  for (let index = 0; index < (Math.random() * 2); index++) {
    if (Math.random() <= 0.75) {
      randomIndex = Math.floor(Math.random() * flaws.length);
      flaw = flaw + ", " + flaws[randomIndex];
    } else if (Math.random() <= 0.75 || !document.getElementById("allowTraitFlaws").checked) {
      randomIndex = Math.floor(Math.random() * negativeTraits.length);
      flaw = flaw + ", " + negativeTraits[randomIndex];
    } else {
      randomIndex = Math.floor(Math.random() * traits.length);
      flaw = flaw + ", " + traits[randomIndex];
    }
  }
  
  var flawsElement = document.getElementById("resultFlaws");
  flawsElement.textContent = flaw;
}

function generateBeliefs() {

  var randomIndex = Math.floor(Math.random() * beliefs.length);
  var belief = beliefs[randomIndex];

  if (Math.random() <= 0.5) {
    randomIndex = Math.floor(Math.random() * actions.length);
    belief = [belief] + " " + actions[randomIndex];
  }
  if (Math.random() <= 0.2) {
    randomIndex = Math.floor(Math.random() * beliefs.length);
    belief = [belief] + " | " + beliefs[randomIndex];
    if (Math.random() <= 0.5) {
      randomIndex = Math.floor(Math.random() * actions.length);
      belief = [belief] + " " + actions[randomIndex];
    }
  }
    
  var beliefElement = document.getElementById("resultBeliefs");
  beliefElement.textContent = belief;
}

function generateOccupation() {
  // Code for generating background
  // Replace the code below with your own occupation generation logic
  var randomIndex = Math.floor(Math.random() * occupations.length);
  var occupation = occupations[randomIndex];
  
  var occupationElement = document.getElementById("resultOccupation");
  occupationElement.textContent = occupation;
}

function generateBackground() {
  // Code for generating background
  // Replace the code below with your own background generation logic
  var backgroundWealth = ["in Extreme Poverty", "in Poverty", "Lower Class", "Lower-middle Class", "Middle Class", "Upper-Middle Class", "Affluent", "Wealthy", "Ultra-Wealthy"];
  var backgroundFamily = ['in a Nuclear Family (parents and children living together)','in a Single-Parent Family','in a Blended Family (parents with children from previous relationships)','in an Extended Family (multiple generations living together)','in a Foster Family (children placed in the care of foster parents)','in an Adoptive Family (parents who have adopted children)','in a Same-Sex Parent Family','in a Multigenerational Household (including grandparents, parents, and grandchildren)','with their Grandparents or Other Relatives','in a Sibling Household (sibling is head of house)','with their Guardian and Ward (a legal guardian taking care of a child)','in a Stepfamily (one or both parents have remarried)','in a Group Home or Institution','with a Guardian or Caregiver Outside of the Family','in a Boarding School or Residential Program','in a Multicultural or Multiracial Family','in a Co-Parenting Arrangement','in a Communal Living Situation (such as a commune or intentional community)', 'in a Church or Other Religious Center'];

  var randomIndex = Math.floor(Math.random() * backgroundWealth.length);
  var background = "Grew up " + backgroundWealth[randomIndex];
  
  randomIndex = Math.floor(Math.random() * backgroundFamily.length);
  background = background + " " + backgroundFamily[randomIndex];
  
  var siblings = Math.round(Math.cbrt(10000) - (Math.cbrt((Math.random() * 10000))));
  if (siblings == 1)
  {
    background = background + " with 1 Sibling.";
  } else if (siblings !== 0) {
    background = background + " with " + siblings + " Siblings.";
  } else {
    background = background + "."
  }
  
  var backgroundElement = document.getElementById("resultBackground");
  backgroundElement.textContent = background;
}

function generateAll() {
  generateGender();
  generateBackground();
  generateBeliefs();
  generateFlaws();
  generateName();
  generateOccupation();
  generatePersonalityTraits();
  generatePhysicalTraits();
  generateEyes();
  generateHair();
  generateFacialHair();
}

function checkFacialHair() {
  if (document.getElementById("allowFacialHair").checked)
  {
    document.getElementById("hairAndFacialHairButton").style.display = "inline-block";
    document.getElementById("facialHairButton").style.display = "inline-block";
    document.getElementById("resultFacialHair").style.display = "inline-block";
    console.log("Showed Facial Hair stuff");
  } else {
    document.getElementById("hairAndFacialHairButton").style.display = "none";
    document.getElementById("facialHairButton").style.display = "none";
    document.getElementById("resultFacialHair").style.display = "none";
    console.log("Hid Facial Hair stuff");
  }
}

window.setInterval(checkFacialHair, 250);

window.addEventListener('load', function() {
  // Load the seedrandom.js library
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.4/seedrandom.min.js';
  script.onload = function() {
    generateAll();
  };
  document.body.appendChild(script);
});