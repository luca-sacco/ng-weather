import { Component, HostListener, Input } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

interface ButtonStatus {
  submitting?: boolean;
  done?: boolean;
  default?: boolean;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() status$: BehaviorSubject<ButtonStatus> =
    new BehaviorSubject<ButtonStatus>({
      default: true,
    });

  @Input() clickFn: (event: any) => Observable<any>;

  @HostListener('click', ['$event.target'])
  handleClick($event) {
    this.onClick($event);
  }

  constructor() {}

  onClick(event: any) {
    this.status$.next({ submitting: true });
    this.clickFn(event)
      .pipe(
        tap(() => this.status$.next({ done: true })),
        delay(500),
        tap(() => this.status$.next({ default: true })),
        take(1)
      )
      .subscribe();
  }
}
