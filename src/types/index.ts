export type Language = 'en' | 'es';
export type MegaMenuTab = 'products' | 'solutions' | 'industries' | 'sustainability' | 'resources' | null;

export interface Project {
  id: string;
  title: string;
  loc: string;
  vol: string;
  category: 'commercial' | 'infrastructure' | 'industrial';
  img: string;
  desc?: string;
  duration?: string;
  year?: string;
}

export interface MarketSector {
  id: string;
  iconName: string;
  title: string;
  desc: string;
  specs: string[];
  img: string;
}

export interface DispatchHub {
  id: 'houston' | 'chicago' | 'denver' | 'dallas';
  name: string;
  state: string;
  mixers: number;
  plants: number;
  capacity: string;
  avgResponse: string;
  status: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category: string;
}
