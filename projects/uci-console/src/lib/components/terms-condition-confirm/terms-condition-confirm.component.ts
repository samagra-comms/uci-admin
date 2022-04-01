import {Component, Inject, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'lib-terms-condition-confirm',
    templateUrl: './terms-condition-confirm.component.html',
    styleUrls: ['./terms-condition-confirm.component.scss']
})
export class TermsConditionConfirmComponent implements OnInit {
    resourceService;
    allChecked: boolean;
    isLoaderShow = false;
    isSubmit = false;
    Appropriateness = [];
    contentDetails = [];
    usability = [];
    breakpoint;

    constructor(
        private globalService: GlobalService,
        public dialogRef: MatDialogRef<TermsConditionConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        if (data && data.isSubmit) {
            this.isSubmit = data.isSubmit;
        }
    }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.resourceService = this.globalService.getResourceService();
        this.Appropriateness = [
            {
                text: this.resourceService.frmelmnts?.lbl?.appropriatenessHate,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.appropriatenessAbusive,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.appropriatenessDiscrimination,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.appropriatenessChild,
                checks: false
            }
        ];
        this.contentDetails = [
            {
                text: this.resourceService.frmelmnts?.lbl?.contentDetailDescription,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.contentDetailCorrect,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.contentDetailAppropriate,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.contentDetailRelevant,
                checks: false
            }
        ];
        this.usability = [
            {
                text: this.resourceService.frmelmnts?.lbl?.usabilityContent,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.usabilityClear,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.usabilityAudio,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.usabilityNoMistakes,
                checks: false
            },
            {
                text: this.resourceService.frmelmnts?.lbl?.usabilitySimple,
                checks: false
            }
        ];
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    updateAllChecked() {
        let allChecked = true;
        for (const val of this.Appropriateness) {
            if (!val.checks) {
                allChecked = false;
                break;
            }
        }
        if (allChecked) {
            for (const val of this.contentDetails) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        if (allChecked) {
            for (const val of this.usability) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        this.allChecked = allChecked;
    }

    allCheck(isAllCheck: boolean = false) {
        this.Appropriateness.forEach(val => {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(val => {
            val.checks = isAllCheck;
        });
        this.usability.forEach(val => {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    }

    onSubmit(event) {
        this.dialogRef.close(event);
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
}
