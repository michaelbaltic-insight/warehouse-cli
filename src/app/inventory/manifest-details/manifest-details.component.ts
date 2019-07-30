import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Manifest, InventoryItem } from '../models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { InventoryService } from '../services';
import { ConfigService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/core/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-manifest-details',
  templateUrl: './manifest-details.component.html',
  styleUrls: ['./manifest-details.component.scss']
})
export class ManifestDetailsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private configService: ConfigService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // convenience getter for easy access to form fields
  get f() { return this.details.controls; }
  details: FormGroup;
  loading = false;
  submitted = false;
  isReadOnly = true;
  error = '';
  title = 'Manifest Details';
  inventoryItemsTitle = 'Inventory Items';
  manifestItem: Manifest;
  inventoryItems: InventoryItem[];
  dataSource = new MatTableDataSource<InventoryItem>();
  displayedColumns: string[] = ['number', 'type', 'status', 'units', 'details', 'delete'];

  ngOnInit() {
    this.details = this.formBuilder.group({
      number: ['', Validators.required],
      status: ['', Validators.required]
    });
    const id: string = this.activeRoute.snapshot.params.id;
    this.inventoryService.getManifestById(id)
      .subscribe(getManifestByIdResponse => {
        this.inventoryItems = getManifestByIdResponse.manifest.inventoryItems;
        this.manifestItem = getManifestByIdResponse.manifest;
        this.details.controls.number.setValue(getManifestByIdResponse.manifest.number);
        this.details.controls.status.setValue(getManifestByIdResponse.manifest.status);
        this.dataSource.data = getManifestByIdResponse.manifest.inventoryItems;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.details.invalid) {
      return;
    }

    this.loading = true;

    this.loading = false;
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { title: 'title', prompt: 'prompt', cancelButtonText: 'cancel', confirmationButtonText: 'ok' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }

  onAddInventoryItem() {
    const id: string = this.activeRoute.snapshot.params.id;

    const url = `inventory/manifest/details/${id}/add`;
    this.router.navigate([url]);
  }
}
