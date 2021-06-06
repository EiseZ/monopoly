export default class Street {
  naam: string;
  kleur: string;
  aankoopprijs: number;
  huisprijs: number;
  huurprijzen: number[];

  tier: number = 0;
  geliquideerd: boolean = false;
}
