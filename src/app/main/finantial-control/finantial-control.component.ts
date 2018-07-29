import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FinantialControlDataSource } from './finantial-control-datasource';

@Component({
  selector: 'finantial-control',
  templateUrl: './finantial-control.component.html',
  styleUrls: ['./finantial-control.component.css']
})
export class FinantialControlComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FinantialControlDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new FinantialControlDataSource(this.paginator, this.sort);
  }
}
