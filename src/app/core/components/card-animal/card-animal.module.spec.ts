import { CardAnimalModule } from './card-animal.module';

describe('CardAnimalModule', () => {
  let cardAnimalModule: CardAnimalModule;

  beforeEach(() => {
    cardAnimalModule = new CardAnimalModule();
  });

  it('should create an instance', () => {
    expect(cardAnimalModule).toBeTruthy();
  });
});
