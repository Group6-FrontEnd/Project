export interface Menu {
  name: string;
  link: string;
  icon?: string;
  url?: string;
  children?: Menu[];
}