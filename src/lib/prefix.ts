export const PREFIX = "";

export function withPrefix(path: string) {
  return `${PREFIX}${path}`;
}
