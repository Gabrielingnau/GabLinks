import {
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export const iconMap = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export type IconName = keyof typeof iconMap;
