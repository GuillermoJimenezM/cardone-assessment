import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit {
  countdownValue: number = 300; // Initial countdown value in seconds
  countdownInterval: any; // Variable to hold the interval reference
  countdownCompleted: boolean = false;

  ngOnInit(): void {
    // Start the countdown timer when the component initializes
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.countdownValue > 0) {
        // Decrease the countdown value by 1 every second
        this.countdownValue--;
      } else {
        // Countdown is completed
        this.countdownCompleted = true;
        clearInterval(this.countdownInterval); // Stop the countdown interval
      }
    }, 1000); // Update the countdown every second
  }

  public getHours(): string {
    return Math.floor(this.countdownValue / 3600)
      .toString()
      .padStart(2, '0');
  }

  public getMinutes(): string {
    return Math.floor((this.countdownValue % 3600) / 60)
      .toString()
      .padStart(2, '0');
  }

  public getSeconds(): string {
    let value = this.countdownValue % 60;
    return value.toString().padStart(2, '0');
  }
}
