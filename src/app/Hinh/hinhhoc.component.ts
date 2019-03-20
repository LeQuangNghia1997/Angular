import { Component} from '@angular/core';
@Component({
    selector: 'app-hinh',
    templateUrl: './hinhhoc.component.html',
    styleUrls: ['./hinhhoc.component.css']
})
export class HinhhocComponent {
    heightHeader = 50;
    onClick1() {
        this.heightHeader += 10;
    }
    onClick2() {
        this.heightHeader -= 10;
    }
}
