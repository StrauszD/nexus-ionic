import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Data} from "../../data/data.interface";
import data from "../../data/data";
import {QuotesPage} from "../quotes/quotes";

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{

  data: {category: string, imgURL: string, data: Data[], icon: string}[];
  quotesPage: any;

  ngOnInit() {
    this.data = data;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quotesPage = QuotesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }



}
