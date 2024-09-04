import { Component, OnInit,Renderer2, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AnalyticsService } from 'src/app/services/analytics.service';


@Component({
  selector: 'app-usr-tools',
  templateUrl: './usr-tools.component.html',
  styleUrls: ['./usr-tools.component.scss'],
})
export class UsrToolsComponent implements OnInit {


  Nkusrname:any;
  Short_name:any;

  ROLUO:any;
 
  mailUsr:any;
  constructor(
    private route:Router,
    private Acroute:ActivatedRoute,
    private render:Renderer2,
    private ngZone:NgZone) {}


  ngOnInit(): void {
    this.Acroute.params.subscribe( () =>{ 

      this.ngZone.run(()=>{
        let tab = this.render.selectRootElement('.navigation-tab',true)
        this.render.setStyle(tab,'display','flex')
        
      });

    });
  }
  // ---------------- NAVITE FUNCTIONS ----------------

  Anon(){

    alert('Redireccionando');
    // this.route.navigateByUrl('/dashboard/reports/categories/other/typ1');
  }

  Analitcs(){

    alert('Redireccionando');
    // this.route.navigateByUrl('/dashboard/reports/categories/other/typ1');
  }
  comparte(){
    
    alert('Redireccionando');
    // this.route.navigateByUrl('/dashboard/reports/categories/other/typ1');
    
  }
  ztudio(){
    
    this.route.navigateByUrl('/dashboard/home/config/comments');
  }

  logout(){
    // this.route.navigateByUrl('/auth/');
    alert('Saliendo...');
  }
  


}
