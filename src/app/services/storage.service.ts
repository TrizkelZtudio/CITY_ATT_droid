import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private _storage: Storage | null = null;


  private  _mediaPhotos: any[] = [];
  private  _mediafiles:  any[] = [];

  private  _mediaAudio:  any[] = [];
  private  _mediaBluet:  any[] = [];


  constructor( private storage: Storage ) {
    this.init();
  }

  async init() {

    const storage = await this.storage.create();
    this._storage = storage;

    this.MediaPhotos()
    this.MediaFiles();
    this.MediaAudio();
    this.MediaBlue();

  }

  // ------------- GET VALUES STORAGED -------------
  get laPhoto(){
    return this._mediaPhotos
  }
  get ilFile(){
    return this._mediafiles
  }
  get ilAudio(){
    return this._mediaAudio
  }
  get ilBlue(){
    return this._mediaBluet
  }
  


  // ------------- SET INTERNAL VALUES -------------
  setMediaPhotos(data:any){
    this._mediaPhotos.push(data) ;
    this._storage?.set('media_photos',this._mediaPhotos);
  }
  setMediaFiles(data:any){
    this._mediafiles.push(data) ;
    this._storage?.set('media_files',this._mediafiles);
  }
  setMediaAudio(data:any){
    this._mediaAudio.push(data) ;
    this._storage?.set('media_audio',this._mediaAudio);
  }
  setMediaBlue(data:any){    
    this._mediaBluet.push(data);
    this._storage?.set('media_blue',this._mediaBluet);
  }



  // ------------- INIT COLLECTIONS -------------
  async MediaPhotos(){
    try{
      const Prev = await this._storage?.get('media_photos');
      this._mediaPhotos = Prev || [];

    }catch(err){
      return;
    }
  }
  async MediaFiles(){
    try{
      const Prev = await this._storage?.get('media_files');
      this._mediafiles = Prev || [];

    }catch(err){
      return;
    }
  }
  async MediaAudio(){
    try{
      const Prev = await this._storage?.get('media_audio');
      this._mediaAudio = Prev || [];

    }catch(err){
      return;
    }
  }
  async MediaBlue(){
    try{
      const Prev = await this._storage?.get('media_blue');
      this._mediaBluet = Prev || [];

    }catch(err){
      return;
    }
  }
 
}
