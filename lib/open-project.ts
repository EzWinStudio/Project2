export function openProject(id: string) {
  window.dispatchEvent(new CustomEvent<string>("ezwin:open-project", { detail: id }));
}
