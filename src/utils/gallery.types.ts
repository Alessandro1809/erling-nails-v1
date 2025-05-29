export interface Image {
  url: string;
  alt: string;
}

export interface ImageResponse {
  data: Image[];
  error?: string;
}

// Grid position configuration for the main gallery
export const gridPositions = [
  'md:row-span-3',
  'md:row-span-3 md:col-start-2 md:row-start-2',
  'md:row-span-3 md:col-start-3 md:row-start-1',
  'md:row-span-3 md:row-start-4',
  'md:row-span-3 md:col-start-2 md:row-start-5',
  'md:row-span-3 md:col-start-3 md:row-start-4'
];

// Default image
export const defaultImage: Image = {
  url: 'https://res.cloudinary.com/drwd1wtvt/image/upload/v1725497288/unas4_pawj3w.jpg',
  alt: 'Professional nail design'
}; 