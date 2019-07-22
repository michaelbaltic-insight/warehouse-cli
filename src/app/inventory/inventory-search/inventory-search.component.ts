import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';

import { Item } from '../models/item.interface';
import { InventoryService } from '../services/inventory.service';


@Component({ templateUrl: 'inventory-search.component.html' })
export class InventorySearchComponent implements OnInit {
  items: Item[];
  dataSource = new MatTableDataSource<Item>();
  displayedColumns: string[] = ['number', 'type', 'status', 'units'];
  loading = false;
  title = 'Inventory Search';

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService) { }


  ngOnInit() {

      this.inventoryService.getItems()
        .subscribe(getItemsResponse => {
          this.items = getItemsResponse;
          this.dataSource.data = this.items;
        });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getTotalUnits() {
    if (this.items && this.items.length) {
      return this.items.reduce((accumulator, item) => accumulator + item.units, 0);
    } else {
      return 0;
    }
  }

  onAddItem() { }

}
