import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Manifest } from '../models';
import { InventoryService } from '../services';
import { ConfigService, ErrorService } from 'src/app/shared/services';

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
    private configService: ConfigService,
    private errorService: ErrorService) {

    }

  ngOnInit() {
    this.inventoryService.getManifests()
      .subscribe(searchResponse => {
        this.manifests = searchResponse;
        this.dataSource.data = searchResponse.manifests;
      }, (error) => {
        this.errorService.handleError(error);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onDetails(id: string) {
    const url = `/manifest/details/${id}`;
    this.router.navigate([url]);
  }

}
