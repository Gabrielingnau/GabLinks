import { getIcon } from "./get-icon";

type Props = {
  name?: string | null;
  size?: number;
  className?: string;
};

export function CMSIcon({ name, size = 24, className }: Props) {
  const Icon = getIcon(name ?? undefined);

  if (!Icon) return null;

  return <Icon size={size} className={className} />;
}
