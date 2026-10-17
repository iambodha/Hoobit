/** Public destinations already used by this site, collected in one place. */
export const siteLinks = {
  learners: 'https://forms.gle/fRZ2urgo2VZH3gLh8',
  mentors: 'https://forms.gle/eoou3L5RzkhaUA9y6',
  hackathons: 'https://github.com/iambodha/Hoobit_Hacks_2026',
};
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
