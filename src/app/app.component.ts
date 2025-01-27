import { Component, OnInit } from '@angular/core';
import { ReservationComponent } from './reservation/reservation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReservationComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'valentines-surprise';
  currentPage: string = 'main';

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.createHearts();
    }
  }

  createHearts() {
    if (typeof document !== 'undefined') {
      const body = document.body;
      for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        body.appendChild(heart);
      }
    }
  }

  onYesClick() {
    this.currentPage = 'reservation';
  }

  onNoHover(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
}
