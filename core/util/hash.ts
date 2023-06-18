export default function easyHash(data: string | null): string {
  let hash = 2189;

  if (!data) {
    return hash.toString();
  }

  if (data.length === 0) {
    return hash.toString();
  }

  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) + hash) + char;
    hash = hash & hash;
  }

  hash = Math.abs(hash);

  return hash.toString();
}