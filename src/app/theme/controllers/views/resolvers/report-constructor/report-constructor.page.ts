import { Component, Renderer2, NgZone, inject } from '@angular/core';
import { DatePipe } from '@angular/common';


import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup} from '@angular/forms';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Device } from '@capacitor/device';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


import { StorageService } from 'src/app/services/storage.service';

// import { ToolType ,TypeInterface} from '../../../../interfaces/txt-format.interface';


@Component({
  selector: 'app-report-constructor',
  templateUrl: './report-constructor.page.html',
  styleUrls: ['./report-constructor.page.scss'],
})
export class ReportConstructorPage  {

  private _storage = inject(StorageService)
  today:any = this.datePipe.transform(Date.now(),'short');
  
  imageele!:SafeResourceUrl;
  FileIMG:any;
  image:any;
  
  
  //reset coords
  DevInfo:any
  
  Typform:any;
  ilFile:any;
  
  oleMsg:any;
  ide:any;
  fecha:any;


  // ------------- GENERAL REPORTS -------------
  MediaForm:FormGroup = this.fb.group({
    photo:[''],
    reference: ['']

  });
  MediaFormFile:FormGroup = this.fb.group({
    ilfile:[''],
    atext:['']
  });
 

  constructor(private sanitizeDom:DomSanitizer,  
              private datePipe: DatePipe,
              private route:ActivatedRoute,
              private routes:Router,
              private fb: FormBuilder,
              private render:Renderer2,
              private ngZone:NgZone) {
                
                
  }

  ngOnInit () {
    
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
    
    this.route.params.subscribe( async () => {
      this.DevInfo = await Device.getInfo();

      const sended = this.render.selectRootElement ('#sendclass',true);
      const succok = this.render.selectRootElement('#succok',true);
  
      this.render.setAttribute(sended,'class','sendclass block-onx animate__animated animate__fadeIn animate__delay-1s');
      this.render.setAttribute(succok,'class','block-offx');

      this.Typform = this.route.snapshot.paramMap.get('phofi');

      if(this.Typform == 'camera'){
  
      const camera = this.render.selectRootElement ('.cameras',true);
      this.render.setAttribute(camera,'class','block');
      
      }
      if(this.Typform == 'files'){
        const file = this.render.selectRootElement ('.fileses',true);
        this.render.setStyle(file,'display','block');
  
      }


    });
    


  }

  async takephoto(){
    this.image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      width:720,
      height:1280,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera

    });

    // SET File
    this.FileIMG = this.image.dataUrl;
    this.imageele = this.FileIMG;

    this.MediaForm.get('photo')?.setValue(this.FileIMG);

  }

  tpfile(evento:any){
    this.MediaFormFile.get('ilfile')?.setValue(evento.target.files[0])
  }


  sendReport(){

    
  if(!this.MediaForm.valid){
    this.oleMsg = "Requerimos de más detalles";
  }
  else {
    let sended = this.render.selectRootElement('#sendclass',true);
    let succok = this.render.selectRootElement('#succok',true);

    this.render.setStyle(sended,'display','block')
    this.render.setStyle(succok,'display','block')
    
    
    const { photo,reference } = this.MediaForm.value

    const presave = {
      notes:reference,
      image:photo
    }

    this._storage.setMediaPhotos(presave);

    
    setTimeout( () => {

      this.routes.navigateByUrl('/dashboard/home');

    },1500)
  }

  }
  // ------------- FIlE Sender -------------
  async sendFilese(){

    let sended = this.render.selectRootElement('#sendclass',true);
    let succok = this.render.selectRootElement('#succok',true);

    this.render.setStyle(sended,'display','block')
    this.render.setStyle(succok,'display','block')
  
    if(this.DevInfo.platform == 'ios' || this.DevInfo.platform == 'android'){
  
      console.log('mobile')
      const { ilfile,atext } = this.MediaFormFile.value
  
      const presave = {
        notes:atext,
        filese:ilfile
      }


      this.ilFile = await Filesystem.writeFile({
        path: '../temp/',
        data: ilfile,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    

      // console.log('IlFiles: ',this.ilFile)
      this._storage.setMediaFiles(presave)
    }

    else if(this.DevInfo.platform == 'web'){

      const { ilfile,atext } = this.MediaFormFile.value
  
      const presave = {
        notes:atext,
        filese:ilfile
      }


      this._storage.setMediaFiles(presave)
    }
  
    setTimeout( () => {
      this.routes.navigateByUrl('/dashboard/home');

    },1500)
    
  }
}
