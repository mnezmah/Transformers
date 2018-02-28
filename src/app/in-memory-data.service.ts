import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from './vehicle';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id: 0, 
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

    const factions = [
    {
      id: 0,
      name: "Autobots"
    }, {
      id: 1,
      name: "Decepticons"
    }
  ];
  
  const vehicleTypes = [
    {
      group: "Air",
      type: "Plane",
      model: "F-22"
    },
    {
      group: "Air",
      type: "Plane",
      model: "Sukhoi"
    },
    {
      group: "Air",
      type: "Plane",
      model: "MiG"
    },
    {
      group: "Air",
      type: "Helicopter",
      model: "Apache"
    },
    {
      group: "Air",
      type: "Helicopter",
      model: "Kamov"
    },
    {
      group: "Sea",
      type: "Boat",
      model: "Sailboat"
    },
    {
      group: "Sea",
      type: "Boat",
      model: "Jetboat"
    },
    {
      group: "Sea",
      type: "Submarine",
      model: "Standard"
    },
    {
      group: "Land",
      type: "Car",
      model: "Camaro"
    },
    {
      group: "Land",
      type: "Car",
      model: "AMG GT R"
    },
    {
      group: "Land",
      type: "Car",
      model: "Lamborghini"
    },
    {
      group: "Land",
      type: "Truck",
      model: "Unimog"
    },
    {
      group: "Land",
      type: "Truck",
      model: "Western Star 5700"
    }
  ];
  const vehicleModels = [
  "f22", "Suhkhoi", "MiG", "Apache", "Kamov", "Sailboat", "Jetboat", "Standard", "Camaro", "AMG GT R", "Lamborghini", "Unimog", "Western Star 5700"];
  return {heroes, factions, vehicleTypes, vehicleModels};
   }
}
  