interface Developer {
  id: number;
  name: string;
  role: string;
  github: string;
  instagram: string;
  whatsapp: string;
  website?: string; 
  skills: { name: string; img: string; alt: string }[];
}

export default Developer