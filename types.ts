import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface RoadmapStepProps {
  phase: string;
  title: string;
  items: string[];
  type: 'short' | 'medium' | 'long';
  isLast?: boolean;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}