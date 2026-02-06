import { iconMap, type IconName } from "./icon-map";

export function getIcon(name?: string) {
  if (!name) return null;

  const key = name.toLowerCase().trim() as IconName;

  return iconMap[key] ?? null;
}
