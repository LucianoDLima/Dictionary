type SizeTypes = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

const size: SizeTypes = { 
  mobile: '23.438rem',
  tablet: '46rem',
  laptop: '64rem',
  desktop: '90'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}