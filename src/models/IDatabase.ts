export interface IElement {
  title: string;
  myth: string;
  reality: string;
  descr: string;
}

export interface IGroup {
  title: string;
  items: IElement[];
}
