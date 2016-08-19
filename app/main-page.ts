import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {Observable} from "data/observable";



let firstvalue = 10;
let secondvalue = 20;
let newobservable:Observable;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    newobservable = new Observable();

    newobservable.set("resultLabel", "eval() result");
    newobservable.set("textfieldText", "");

    page.bindingContext = newobservable;
}


export function onTap(args:EventData){
    let result = eval("firstvalue * secondvalue");
    newobservable.set("resultLabel", "result: "+result);
    alert(result);
    console.log(result);
}

export function onTapButton(args:EventData){
    let arg:string = newobservable.get("textfieldText");
    alert(eval(arg));
}