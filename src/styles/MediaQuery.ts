type SizeTypes = {
  mobile: `${number}rem`;
  tablet: `${number}rem`;
  laptop: `${number}rem`;
  desktop: `${number}rem`;
};

const size: SizeTypes = { 
  mobile: '23.438rem',
  tablet: '46rem',
  laptop: '64rem',
  desktop: '90rem'
}

type DeviceTypes = {
  [key in keyof SizeTypes]: `(min-width: ${SizeTypes[key]})`;
};

export const device: DeviceTypes = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}