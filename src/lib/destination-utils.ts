export function getDestinationPath(slug: string): string {
  return `/study-abroad/${slug}`;
}

export function getDestinationLabel(name: string): string {
  if (name === 'United Kingdom') {
    return 'UK';
  }

  return name;
}

