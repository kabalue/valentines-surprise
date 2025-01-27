import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  isModalOpen: boolean = false;
  currentImage: string = '';

  openModal(imageSrc: string) {
    this.currentImage = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  goBack() {
    window.location.reload();
  }
}
