import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { Vehicle }         from '../vehicle';
import { VehicleService }  from '../vehicle.service';
import { InMemoryDataService }  from '../in-memory-data.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() 
    hero: Hero;
    vehicle : Vehicle;
    vehicleGroup: string;
    vehicleTypes: any[] = [
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
  vehicles: string[] = [
  "Plane", "Helicoper", "Boat", "Submarine", "Car", "Truck"];
  typeAir: string[] = ['Plane', 'Helicopter'];
  typeSea: string[] = ['Boat', 'Submarine'];
  typeLand: string[] = ['Car', 'Truck'];
  planes: string[] = ['F-22', 'Sukhoi', 'MiG'];
  helicopters: string[] = ['Apache', 'Kamov'];
  boats: string[] = ['Sailboat', 'Jetboat'];
  submarines: string[] = ['Standard'];
  cars: string[] = ['Camaro', 'AMG GT R', 'Lamborghini'];
  trucks: string[] = ['Unimog', 'Western Star 5700'];
    

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private vehicleService: VehicleService,
    private location: Location
  ) {}

  ngOnInit(): void {                      
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('model');
    this.vehicleService.getVehicleModel();
  }

   addGear(hero, value) {
   hero.gear.push(value);
  }
  
  deleteGear(hero, i) {
    hero.gear.splice(i, 1);
  }
}
