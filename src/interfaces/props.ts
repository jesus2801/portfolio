import { ReactNode } from 'react';
import { ProjectLayout } from '.';

export interface SweptProps {
  start: boolean;
}

export interface ProjectProps {
  project: ProjectLayout;
}

export interface SkillsCardProps {
  title: string;
  image: string;
  description: string;
}

export interface AboutSectionProps {
  life: string;
  knowledge: string;
}

export interface LandingProps {
  title: string;
}

export interface SkillsProps {
  introduction: string;
  technologiesTxt: string;
  backendTxt: string;
  reactTxt: string;
}

export interface LayoutProps {
  title: string;
  children: ReactNode;
}
