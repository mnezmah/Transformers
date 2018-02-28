import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 1, 
    name: 'Optimus Prime', 
    faction: 'Autobots', 
    vehicleGroup: 'Land', 
    vehicleType: 'Truck', 
    vehicleModel: 'Western Star 5700', 
    gear: ['sword', 'shield'], 
    status: 'ok' },
{ id: 1, 
    name: 'Bumblebee', 
    faction: 'Autobots', 
    vehicleGroup: 'Land', 
    vehicleType: 'Car', 
    vehicleModel: 'Camaro', 
    gear: ['machine gun'], 
    status: 'injured' },
    
  { id: 2, 
    name: 'Megatron', 
    faction: 'Decepticons', 
    vehicleGroup: 'Air', 
    vehicleType: 'Plane', 
    vehicleModel: 'Sukhio', 
    gear: ['canon'], 
    status: 'mia' }
  
];


