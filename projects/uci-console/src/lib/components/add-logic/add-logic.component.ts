import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'lib-add-logic',
  templateUrl: './add-logic.component.html',
  styleUrls: ['./add-logic.component.scss'],
})
export class AddLogicComponent {
  resourceService;
  isModalLoaderShow = false;
  logicForm: UntypedFormGroup;
  odkFileAlreadyExist = false;
  fileErrorStatus;
  breakpoint;
  odkFile;
  mediaFiles =  [];

  constructor(
    private uciService: UciService,
    private fb: UntypedFormBuilder,
    private toasterService: ToasterService,
    private globalService: GlobalService,
    public dialogRef: MatDialogRef<AddLogicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.resourceService = this.globalService.getResourceService();
    this.initialize();
    if (data && data.id) {
      this.patchValue(data);
    }
  }

  initialize() {
    this.breakpoint = window.innerWidth <= 1000 ? 1 : 3;
    this.logicForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: [''],
      formId: ['', Validators.required],
    });
  }

  patchValue(item) {
    this.logicForm.patchValue({
      id: item.id,
      name: item.name,
      description: item.description,
      formId: item.formID,
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onLogicAdd(): void {
    this.dialogRef.close(this.logicForm.value);
  }

  onMediaChange(event) {
    if (!event.target.files.length) {
      return;
    }
    for (var i = 0; i < event.target.files.length; i++) {
      this.mediaFiles.push(event.target.files[i]);
    }
  }
  onOdkFileChange(event) {
    if (!event.target.files.length) {
      return;
    }
    this.odkFile = event.target.files[0];
  }
  onFileUpload() {
 
    var formdata = new FormData();
    formdata.append('form', this.odkFile, this.odkFile.name);
    for (var i = 0; i < this.mediaFiles.length; i++) {
      formdata.append(
        'mediaFiles',
        this.mediaFiles[i],
        this.mediaFiles[i].name
      );
    }

   
    console.log({ odk: this.odkFile, media: this.mediaFiles });
    // const obj ={}
    this.logicForm.patchValue({formId: ''});
    this.isModalLoaderShow = true;
    this.uciService.uploadFile(formdata).subscribe((fileInfo: any) => {
            if (fileInfo.data) {
                this.logicForm.patchValue({formId: fileInfo?.data?.formID});
            }
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = false;
        }, error => {
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = true;
            this.fileErrorStatus = error.status;
            if (error.result && error.result.error) {
                this.toasterService.error(error.result.error);
            }
        }
    );
  }

  manualDownload(): void {
    window.open(
      this.globalService.getBlobUrl().replace('/player', '') +
        'UCI%20_%20ODK%20Instruction%20Manual.pdf',
      '_blank'
    );
  }

  sampleODKDownload(): void {
    window.open(
      this.globalService.getBlobUrl().replace('/player', '') +
        'Sample_ODK.xlsx',
      '_blank'
    );
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 1000 ? 1 : 3;
  }
}
