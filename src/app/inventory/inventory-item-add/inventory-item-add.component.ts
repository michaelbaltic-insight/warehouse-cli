import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InventoryService } from '../services';

@Component({
  selector: 'app-inventory-item-add',
  templateUrl: './inventory-item-add.component.html',
  styleUrls: ['./inventory-item-add.component.scss']
})
export class InventoryItemAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService) { }

  // convenience getter for easy access to form fields
  get f() { return this.newInventoryItem.controls; }
  newInventoryItem: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  title = 'Add Inventory Item';

  ngOnInit() {
    this.newInventoryItem = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onAdd() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newInventoryItem.invalid) {
      return;
    }

    this.loading = true;

    this.loading = false;
  }
}