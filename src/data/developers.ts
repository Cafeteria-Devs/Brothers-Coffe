import Developer from "../types/Developer"

const developers: Developer[] = [
  {
    id: 1,
    name: "Eduardo Matheus",
    role: "Front-End | Designer Gráfico | Web Designer",
    github: "https://github.com/EduardoMatheusDev",
    instagram: "https://www.instagram.com/eduardo.mtheus/",
    whatsapp: "#",
    website: "#",
    skills: [
      { name: "HTML5", img: "/habilidades/eduardo/html5.png", alt: "HTML5" },
      { name: "CSS3", img: "/habilidades/eduardo/css3.png", alt: "CSS3" },
      { name: "Photoshop", img: "/habilidades/eduardo/photoshop.png", alt: "Photoshop" },
    ]
  },
  {
    id: 2,
    name: "Everton Winicius",
    role: "Back-End | Database Architect | SQL Specialist",
    github: "https://github.com/ViniciusAnonimus007",
    instagram: "https://www.instagram.com/vini_gm/",
    whatsapp: "#",
    skills: [
      { name: "TypeScript", img: "/habilidades/everton/ts.png", alt: "TS" },
      { name: "SQL", img: "/habilidades/everton/sql.png", alt: "SQL" },
      { name: "Back-End", img: "/habilidades/everton/back.png", alt: "Back-End" },
    ]
  },
  {
    id: 3,
    name: "Lucas Gabriel",
    role: "AI Engineering | Tooling | Quality Assurance",
    github: "https://github.com/Anjo-dev01",
    instagram: "https://www.instagram.com/rlk_k.01/",
    whatsapp: "#",
    skills: [
      { name: "Prompt Eng.", img: "/habilidades/lucas/prompt-eng.png", alt: "IA" },
      { name: "Automation", img: "/habilidades/lucas/automation.png", alt: "Automação" },
      { name: "Git/Lint", img: "/habilidades/lucas/git.png", alt: "Git" },
    ]
  },
  {
    id: 4,
    name: "Wallace Ryan",
    role: "Data Science Junior | Python Developer",
    github: "https://github.com/ryan-6767",
    instagram: "https://www.instagram.com/ryannwrr/",
    whatsapp: "#",
    skills: [
      { name: "Python", img: "/habilidades/wallace/py.png", alt: "Python" },
      { name: "Data Analysis", img: "/habilidades/wallace/analyst.png", alt: "Dados" },
      { name: "Logic", img: "/habilidades/wallace/logic.png", alt: "Lógica" },
    ]
  },
  {
    id: 5,
    name: "Kauã Victor",
    role: "Java Backend Developer | Spring Framework | SQL Specialist",
    github: "https://github.com/KauaVictor-dev",
    instagram: "https://www.instagram.com/ankz.___/",
    whatsapp: "https://api.whatsapp.com/send?phone=5581997435895",
    website: "#",
    skills: [
      { name: "Java", img: "/habilidades/kaua/java.png", alt: "Java" },
      { name: "Spring", img: "/habilidades/kaua/spring.png", alt: "Spring" },
      { name: "SQL", img: "/habilidades/kaua/sql.png", alt: "SQL" },
    ]
  }
]

export default developers