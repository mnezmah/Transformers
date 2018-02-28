import { PipeTransform, Pipe } from '@angular/core';

import { Hero } from '../hero';

@Pipe({
	name: 'factionFilter'
})

export class FactionFilterPipe implements PipeTransform {
transform(value: Hero[], filterBy: string): Hero[] {
 filterBy ? filterBy.toLocaleLowerCase(): null;
	return filterBy ? value.filter((faction : Hero) => faction.faction.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
	}
}