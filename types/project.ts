export interface ProjectTypes {
  name: string;
  keywords: { id: number; name: string }[];
  summary: string;
  websites: string;
  websites_types: "Official site" | "Another site";
}
