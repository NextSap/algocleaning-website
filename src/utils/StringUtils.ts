export function joinMultipleStrings(...classes: string[]): string {
    return classes.filter((className) => className).join(" ");
}