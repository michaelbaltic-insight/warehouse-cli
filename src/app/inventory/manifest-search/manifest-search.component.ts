import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { InventoryService } from '../services';
import { ConfigService } from 'src/app/shared/services';
import { Manifest } from '../models';

@Component({
  selector: 'app-manifest-search',
  templateUrl: './manifest-search.component.html',
  styleUrls: ['./manifest-search.component.scss']
})
export class ManifestSearchComponent implements OnInit {
  manifests: Manifest[];
  dataSource = new MatTableDataSource<Manifest>();
  displayedColumns: string[] = ['number', 'status', 'details'];
  loading = false;
  title = 'Manifest Search';

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private configService: ConfigService) {

    }

  ngOnInit() {
    this.inventoryService.getManifests()
      .subscribe(searchResponse => {
        this.manifests = searchResponse;
        this.dataSource.data = searchResponse.manifests;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onDetails(id: string) {
    const url = `inventory/manifest/details/${id}`;
    this.router.navigate([url]);
  }

}
