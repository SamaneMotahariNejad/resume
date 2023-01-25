export interface imageGallary {
  id: number;
  name: string;
  nameFilter: string;
  currentPicture: number;
  path: Path[];
}

interface Path {
  alt: string;
  src: string;
  subHtml: string;
  thumb: string;
}
