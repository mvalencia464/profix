export interface Certification {
  name: string;
  domain?: string;
  logo?: string; // URL to logo image, optional for now
}

const defaultCertifications: Certification[] = [
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'LG', domain: 'lg.com' },
  { name: 'Whirlpool', domain: 'whirlpool.com' },
  { name: 'GE', domain: 'geappliances.com' },
  { name: 'Bosch', domain: 'bosch.com' },
  { name: 'Maytag', domain: 'maytag.com' },
  { name: 'Frigidaire', domain: 'frigidaire.com' },
  { name: 'KitchenAid', domain: 'kitchenaid.com' },
  { name: 'Kenmore', domain: 'kenmore.com' },
  { name: 'Sub-Zero', domain: 'subzero-wolf.com' },
  { name: 'Wolf', domain: 'wolfappliance.com' },
  { name: 'Viking', domain: 'vikingrange.com' },
  { name: 'Miele', domain: 'miele.com' },
  { name: 'Thermador', domain: 'thermador.com' },
  { name: 'JennAir', domain: 'jennair.com' },
  { name: 'Electrolux', domain: 'electrolux.com' },
  { name: 'Hotpoint', domain: 'hotpoint.com' },
  { name: 'Amana', domain: 'amana.com' },
  { name: 'Speed Queen', domain: 'speedqueen.com' },
  { name: 'Dacor', domain: 'dacor.com' },
  { name: 'Fisher & Paykel', domain: 'fisherpaykel.com' },
  { name: 'Magic Chef', domain: 'magicchef.com' },
  { name: 'Haier', domain: 'haier.com' },
  { name: 'InSinkErator', domain: 'insinkerator.com' }
];

const getCertifications = (): Certification[] => {
  const envList = import.meta.env.VITE_CERTIFICATIONS_LIST;
  if (envList) {
    return envList.split(',').map((name) => {
      const cleanName = name.trim();
      // Simple heuristic to guess domain if provided via ENV, otherwise undefined
      const domain = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
      return { name: cleanName, domain };
    });
  }
  return defaultCertifications;
};

export const certifications = getCertifications();
