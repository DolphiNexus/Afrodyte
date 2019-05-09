import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.page.html',
  styleUrls: ['./outfit.page.scss'],
})
export class OutfitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
