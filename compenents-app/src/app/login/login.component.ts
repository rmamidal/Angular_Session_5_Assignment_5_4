// Importing Angular Component from @angular/core
import {Component, ViewEncapsulation} from "@angular/core"

/** Component Decorator.
 *  template Url: added external html file, stylesurl: added external style sheet.
 */

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    //encapsulation: ViewEncapsulation.Emulated // default background color here
    //encapsulation: ViewEncapsulation.Native // Results without any styles, give default browser syles.
    encapsulation: ViewEncapsulation.None // Results red color backgroud, here all (white, red bg) global styles getting appled, but red ovveriden white color.
})

// Class LoginComponent.
export class LoginComponent {

}
