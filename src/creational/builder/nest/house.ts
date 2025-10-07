export class House {
  private parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  showParts(): string {
    return `House parts: ${this.parts.join(', ')}`;
  }
}
