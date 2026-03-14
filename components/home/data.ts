export type Service = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  type: string;
  result: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const services: Service[] = [
  {
    title: "Architecture & Planning",
    description:
      "Master planning, heritage-sensitive architecture, and future-ready spaces that balance character with performance.",
  },
  {
    title: "Engineering & Execution",
    description:
      "Civil, mechanical, and electrical execution managed through disciplined timelines, clear documentation, and quality controls.",
  },
  {
    title: "Industrial Modernization",
    description:
      "Production process improvements, automation readiness, and retrofits that increase output without disrupting continuity.",
  },
  {
    title: "Digital Transformation",
    description:
      "Data-enabled operations, management dashboards, and practical AI integrations built around measurable business outcomes.",
  },
];

export const processSteps: string[] = [
  "Discover priorities and constraints with leadership teams.",
  "Design a phased blueprint with budget and risk clarity.",
  "Execute with specialist teams and transparent reporting.",
  "Optimize after launch with measurable improvement cycles.",
];

export const projects: Project[] = [
  {
    name: "Regal Square Redevelopment",
    type: "Commercial District",
    result: "32% faster handover with phased execution planning",
  },
  {
    name: "NorthRiver Process Upgrade",
    type: "Industrial Facility",
    result: "22% productivity lift through systems modernization",
  },
  {
    name: "Civic Hall Restoration",
    type: "Public Infrastructure",
    result: "Preserved original heritage elements while meeting modern code",
  },
];

export const stats: Stat[] = [
  { value: "24+", label: "Years of Experience" },
  { value: "180+", label: "Projects Delivered" },
  { value: "11", label: "Specialist Teams" },
  { value: "97%", label: "Client Retention Rate" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aurevia combines old-school professionalism with modern delivery discipline. Our board trusted their reporting from week one.",
    author: "Anita Rao",
    role: "Director, Halden Properties",
  },
  {
    quote:
      "They redesigned our operations without creating disruption on the floor. The practical impact was immediate and measurable.",
    author: "Marcus Bell",
    role: "Plant Head, NorthRiver Industries",
  },
];
