import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-left]',
  template: `<div>
                Hello and Welcome to {{greeting}}...!!
                <br>
                {{greetUser()}}
                <br>
                {{siteURL}}
                <br>
                <input [id]="myId" bind-disabled="isDisabled" type="text" value="Ankit">
             </div>
             <div>
                <h4 class="text-special">Welcome {{greeting}}</h4>
                <h4 [class]="successClass">Welcome {{greeting}}</h4>
                <h4 [class.text-danger]="hasError">Welcome  {{greeting}}</h4>
                <h4 [ngClass]="messageClass">Welcome  {{greeting}}</h4>
             </div>
             <div>
                <input [(ngModel)]="name" type="text">
                {{name}}
                <h3 *ngIf="isDisplayed; else elseBlock">Example of ngIf</h3>
                <ng-template #elseBlock>
                  <h3> Example of Else</h3>
                </ng-template>
              </div>

              <div *ngIf="isDisplayed; then thenBlock; else elseblock;"></div>
                  <ng-template #thenBlock>
                    <h4>If Block</h4>
                  </ng-template>
                  <ng-template #elseblock>
                    <h4>Else Block</h4>
                  </ng-template>
             <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked Red Color</div>
              <div *ngSwitchCase="'blue'">You picked Blue Color</div>
              <div *ngSwitchCase="'green'">You picked Green Color</div>
              <div *ngSwitchDefault>Pick Again</div>
             </div>
             <div *ngFor="let color of colors; even as e">
              <h5> {{e}} {{color}} </h5>
             </div>
             <h3>{{"Hello " + importedName}}</h3>
             <button (click)="fireEvent()">Send Event</button>`,
  styles: [`
    .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-special{
      font-style : italic; 
    }
  `]
})
export class LeftComponent implements OnInit {

    public greeting = 'Angular 7 Tutorial';
    public siteURL = window.location.href;
    public myId = 'TestId';
    public isDisabled = false;
    public successClass = "text-success";
    public hasError = true;
    public isSpecial = true;
    public messageClass = {
      "text-success" : !this.hasError,
      "text-danger" : this.hasError,
      "text-special" : this.isSpecial,
    }

    public name = "";
    public isDisplayed = false;

    public color = "";
    public colors = ["red", "green", "yellow", "blue", "cyan" ];

    @Input('parentData') public importedName;
    @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public greetUser()
  {
    return "Welcome to " + this.greeting;
  }

  public fireEvent()
  {
    this.childEvent.emit('Hey ... new event received from child');
  }
}
