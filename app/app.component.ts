import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: "Dag Bisikleti",
    imageURL: "assets/biking.jpeg",
    username: "cbdag",
    content:"Cok hizli sürdüm"
    
  },
  {
    title: "Tirmanis",
    imageURL: "assets/mountain.jpeg",
    username: "cbuludag",
    content:"Bugün de iyi tirmandim"
    
    },
    {
      title: "Doga Yürüyüsü",
      imageURL: "assets/tree.jpeg",
      username: "cbdoga",
      content:"Hadi biraz Macka Parkinda turlayalim "
      
    }]
}
