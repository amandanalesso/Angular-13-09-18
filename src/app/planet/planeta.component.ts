import{ Component, Input, OnInit } from "@angular/core";
import { Planeta } from "./planeta";


@Component({
    selector:'planeta', 
    templateUrl:'/planeta.component.html',
    styles:['']
})
export class PlanetaComponent implements OnInit{
   
   
    @Input('dados')planeta = new Planeta();
     
    
}