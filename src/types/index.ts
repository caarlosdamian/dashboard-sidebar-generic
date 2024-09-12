export interface SidebarLinksI {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface SidebarLinkI {
  title: string;
  links: SidebarLinksI[];
}
