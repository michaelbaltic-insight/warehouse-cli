import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';

import { InventoryItem } from '../models';
import { InventoryService } from '../services';
import { ConfigService, ErrorService } from 'src/app/shared/services';


@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.scss']
})
export class InventoryItemsComponent implements OnInit {
  inventoryItems: InventoryItem[];
  dataSource = new MatTableDataSource<InventoryItem>();
  displayedColumns: string[] = ['number', 'type', 'status', 'units', 'details', 'delete'];
  loading = false;
  title = 'Inventory Search';

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private configService: ConfigService,
    private errorService: ErrorService) { }


  ngOnInit() {
    const id: string = this.activeRoute.snapshot.params.id;
    this.inventoryService.getManifestItems(id)
      .subscribe(searchResponse => {
        this.inventoryItems = searchResponse;
        this.dataSource.data = searchResponse.inventoryItems;
      }, (error) => {
        this.errorService.handleError(error);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getTotalUnits() {
    if (this.inventoryItems && this.inventoryItems.length) {
      return this.inventoryItems.reduce((accumulator, item) => accumulator + item.units, 0);
    } else {
      return 0;
    }
  }

  onDetails(id: string) {
    const url = `/inventory/details/${id}`;
    this.router.navigate([url]);
  }

  onEdit(id: string) {
    const url = `/inventory/${id}/edit`;
    this.router.navigate([url]);
  }

  onDelete(id: string) {
    const url = `/inventory/${id}/edit`;
    this.router.navigate([url]);
  }

}
