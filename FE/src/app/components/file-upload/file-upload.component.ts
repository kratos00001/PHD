import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'http-proxy';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFiles?: FileList;
  currentFile?: File;
  @Input() type?: string;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

}
