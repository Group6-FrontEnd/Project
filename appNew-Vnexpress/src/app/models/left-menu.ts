export interface Menu {
  name: string;
  link: string;
  icon: string;
  children?: Menu[];
}