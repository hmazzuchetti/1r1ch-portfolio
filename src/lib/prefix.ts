export const PREFIX = process.env.NODE_ENV === "production" ? "/1r1ch-portfolio" : "";

export function withPrefix(path: string) {
  return `${PREFIX}${path}`;
}
