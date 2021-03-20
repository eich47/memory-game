export function getItem(name: string): string {
  return localStorage.getItem(name) || "";
}

export function setItem(name: string, value: number | string): void {
  if (typeof value !== "string") {
    value = value.toString();
  }
  localStorage.setItem(name, value);
}
