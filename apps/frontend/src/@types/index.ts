export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  neighborhoodId?: string;
  items?: any;
}

export interface ItemType {
  id: number;
  userId: string;
  name: string;
  description: string;
  imageUrl: string;
  locationId?: string;
  isAvailable: boolean;
}
