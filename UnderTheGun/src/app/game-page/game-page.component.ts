import { Component, OnInit } from '@angular/core';
import { ICard, CardService } from 'src/services/card.service';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  public currentLevel = 1;
  public leftCard = {
    card: { type: '2', suit: 'Heart' } as ICard,
    url: '',
  };
  public rightCard = {
    card: { type: '4', suit: 'Club' } as ICard,
    url: '',
  };

  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.generateNewCards();
    console.log(this.leftCard);
  }

  selectOption(choice: string): void {
    console.log(choice);
    const correctAnswer = this.cardService.isCorrectOption(
      this.leftCard.card,
      this.rightCard.card
    );

    if (correctAnswer == choice) {
      console.log('You are correct! The answer was', choice);
      this.nextLevel();
    } else {
      console.log('Wrong answer unfortunetly.');
      this.gameOver();
    }
  }
  gameOver(): void {
    this.currentLevel = 1;
  }

  nextLevel(): void {
    this.currentLevel += 1;
    this.generateNewCards();
  }
  generateNewCards(): void {
    let cardNameUrl = '';
    this.leftCard.card = this.cardService.pickRandomCard();
    cardNameUrl =
      this.leftCard.card.type + this.leftCard.card.suit.toString().charAt(0);
    this.leftCard.url = './../assets/cards/' + cardNameUrl + '.svg';

    this.rightCard.card = this.cardService.pickRandomCard();
    cardNameUrl =
      this.rightCard.card.type + this.rightCard.card.suit.toString().charAt(0);
    this.rightCard.url = './../assets/cards/' + cardNameUrl + '.svg';
  }
}
