export interface TimetableClass {
  class: Class,
  time: string
}

export interface Class {
  id: string;
  title: string;
  description: string;
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
