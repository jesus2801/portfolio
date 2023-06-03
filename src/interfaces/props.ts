import { ReactNode } from 'react';
import { ProjectLayout } from '.';
import fb from 'firebase/app';
import { StorageReference } from 'firebase/storage';

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

export interface LayoutProps {
  title: string;
  children: ReactNode;
}

export interface StoryProps {
  reference: StorageReference;
}
