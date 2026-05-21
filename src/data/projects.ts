export type Category =
  | "architecture"
  | "interior"
  | "product"
  | "creative"
  | "furniture";

export interface Project {
  id: string;
  name: string;
  location: string;
  categories: Category[];
  image: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interior" },
  { id: "product", label: "Product" },
  { id: "creative", label: "Creative" },
  { id: "furniture", label: "Furniture" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Harbor Cultural Pavilion",
    location: "Copenhagen, Denmark",
    categories: ["architecture"],
    image: "/projects/01.svg",
  },
  {
    id: "2",
    name: "Atelier Residence",
    location: "Oslo, Norway",
    categories: ["architecture", "interior"],
    image: "/projects/02.svg",
  },
  {
    id: "3",
    name: "Monolith Table",
    location: "OBJE Studio",
    categories: ["product", "furniture"],
    image: "/projects/03.svg",
  },
  {
    id: "4",
    name: "Northlight Gallery",
    location: "Stockholm, Sweden",
    categories: ["architecture", "creative"],
    image: "/projects/04.svg",
  },
  {
    id: "5",
    name: "Coastal House Interior",
    location: "Aarhus, Denmark",
    categories: ["interior"],
    image: "/projects/05.svg",
  },
  {
    id: "6",
    name: "OBJE Chair Series",
    location: "OBJE Studio",
    categories: ["furniture", "product"],
    image: "/projects/06.svg",
  },
  {
    id: "7",
    name: "Urban Canopy Tower",
    location: "Berlin, Germany",
    categories: ["architecture"],
    image: "/projects/07.svg",
  },
  {
    id: "8",
    name: "Brand Identity — Forma",
    location: "Milan, Italy",
    categories: ["creative"],
    image: "/projects/08.svg",
  },
  {
    id: "9",
    name: "Riverside Workspace",
    location: "London, England",
    categories: ["architecture", "interior"],
    image: "/projects/09.svg",
  },
  {
    id: "10",
    name: "Arc Lamp",
    location: "OBJE Studio",
    categories: ["product"],
    image: "/projects/10.svg",
  },
  {
    id: "11",
    name: "Forest Pavilion",
    location: "Helsinki, Finland",
    categories: ["architecture"],
    image: "/projects/11.svg",
  },
  {
    id: "12",
    name: "Loft Kitchen Suite",
    location: "Barcelona, Spain",
    categories: ["interior", "furniture"],
    image: "/projects/12.svg",
  },
  {
    id: "13",
    name: "Exhibition — Material Studies",
    location: "Paris, France",
    categories: ["creative"],
    image: "/projects/13.svg",
  },
  {
    id: "14",
    name: "Bench No. 3",
    location: "OBJE Studio",
    categories: ["furniture"],
    image: "/projects/14.svg",
  },
  {
    id: "15",
    name: "Harbor Bridge Masterplan",
    location: "Rotterdam, Netherlands",
    categories: ["architecture"],
    image: "/projects/15.svg",
  },
  {
    id: "16",
    name: "Ceramic Vessel Collection",
    location: "OBJE Studio",
    categories: ["product", "creative"],
    image: "/projects/16.svg",
  },
  {
    id: "17",
    name: "Cliff House",
    location: "Reykjavik, Iceland",
    categories: ["architecture", "interior"],
    image: "/projects/17.svg",
  },
  {
    id: "18",
    name: "OBJE HQ",
    location: "Copenhagen, Denmark",
    categories: ["architecture", "interior", "creative"],
    image: "/projects/18.svg",
  },
];
