export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  neighborhoodId?: string;
  items?: any;
}

export interface ItemType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  locationId?: string;
  isAvailable: boolean;
  userId: number | null;
}
