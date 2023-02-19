export interface TimetableDay {
  title: string;
  classes: TimetableClass[]
}

export interface TimetableClass {
  class: ClassItem,
  time: string
}

export interface ClassItem {
  description: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
