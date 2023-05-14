import { Injectable } from '@angular/core';

export interface ICardTuple {
  cards: [string];
  bestMove: string;
}
export interface ICard {
  type: string;
  suit: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  deck: ICard[] = [
    { type: '2', suit: 'Heart' },
    { type: '3', suit: 'Heart' },
    { type: '4', suit: 'Heart' },
    { type: '5', suit: 'Heart' },
    { type: '6', suit: 'Heart' },
    { type: '7', suit: 'Heart' },
    { type: '8', suit: 'Heart' },
    { type: '9', suit: 'Heart' },
    { type: '10', suit: 'Heart' },
    { type: 'J', suit: 'Heart' },
    { type: 'Q', suit: 'Heart' },
    { type: 'K', suit: 'Heart' },
    { type: 'A', suit: 'Heart' },
    { type: '2', suit: 'Diamond' },
    { type: '3', suit: 'Diamond' },
    { type: '4', suit: 'Diamond' },
    { type: '5', suit: 'Diamond' },
    { type: '6', suit: 'Diamond' },
    { type: '7', suit: 'Diamond' },
    { type: '8', suit: 'Diamond' },
    { type: '9', suit: 'Diamond' },
    { type: '10', suit: 'Diamond' },
    { type: 'J', suit: 'Diamond' },
    { type: 'Q', suit: 'Diamond' },
    { type: 'K', suit: 'Diamond' },
    { type: 'A', suit: 'Diamond' },
    { type: '2', suit: 'Club' },
    { type: '3', suit: 'Club' },
    { type: '4', suit: 'Club' },
    { type: '5', suit: 'Club' },
    { type: '6', suit: 'Club' },
    { type: '7', suit: 'Club' },
    { type: '8', suit: 'Club' },
    { type: '9', suit: 'Club' },
    { type: '10', suit: 'Club' },
    { type: 'J', suit: 'Club' },
    { type: 'Q', suit: 'Club' },
    { type: 'K', suit: 'Club' },
    { type: 'A', suit: 'Club' },
    { type: '2', suit: 'Spade' },
    { type: '3', suit: 'Spade' },
    { type: '4', suit: 'Spade' },
    { type: '5', suit: 'Spade' },
    { type: '6', suit: 'Spade' },
    { type: '7', suit: 'Spade' },
    { type: '8', suit: 'Spade' },
    { type: '9', suit: 'Spade' },
    { type: '10', suit: 'Spade' },
    { type: 'J', suit: 'Spade' },
    { type: 'Q', suit: 'Spade' },
    { type: 'K', suit: 'Spade' },
    { type: 'A', suit: 'Spade' },
  ];

  constructor() {}

  public isCorrectOption(c1: ICard, c2: ICard): string {
    // If the cards are the same then its bet & if its twos then its true no matter what
    if (this.isPocket(c1, c2)) {
      return c1.type == '2' ? 'both' : 'bet';
    }

    if (this.isSuited(c1, c2)) {
    }
    const options = ['bet', 'fold', 'both'];
    return options[Math.floor(Math.random() * options.length)];
  }

  public pickRandomCard(): ICard {
    return this.deck[Math.floor(Math.random() * this.deck.length)];
  }

  private isPocket(c1: ICard, c2: ICard): boolean {
    return c1.type === c2.type;
  }
  private isSuited(c1: ICard, c2: ICard): boolean {
    return c1.suit === c2.suit;
  }
}
