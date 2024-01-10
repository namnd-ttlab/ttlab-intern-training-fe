export const getNameFromPath = (source: Record<string, string>, path: string) => {
  if (path.includes('.')) {
    path = (path.match(/\.(\w+)$/)?.[1] || '') as string;
  }
  return source[path] || path;
};
