import { allProperties } from '../data/mockProperties';
import { Property } from '../types/property.types';

export const getPropertyById = (id: string | number): Property | undefined => {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return allProperties.find(p => p.id === numId);
};
