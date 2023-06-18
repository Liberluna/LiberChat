export function easyHash(data: string): string {
  let hash = 2189;
  if (data.length === 0) {
    return hash.toString();
  }

  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) + hash) + char;
    hash = hash & hash;
  }

  return hash.toString();
}