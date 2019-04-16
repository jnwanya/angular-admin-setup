import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-mgmt',
  templateUrl: './company-mgmt.component.html',
  styleUrls: ['./company-mgmt.component.scss', '../../../assets/icon/icofont/css/icofont.scss']
})
export class CompanyMgmtComponent implements OnInit {

  rowsBasic = [];
  fullScreenRow = [];
  loadingIndicator = true;
  reorderable = true;
  columnMode = ColumnMode.force;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  rows = [];
  expanded = {};
  timeout: any;

  rowsFilter = [];
  tempFilter = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private router: Router) { }

  ngOnInit() {

    this.fetchBasicData((data) => {
      this.rowsBasic = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });

    this.fetchFilterData((data) => {
      // cache our list
      this.tempFilter = [...data];

      // push our inital complete list
      this.rowsFilter = data;
    });
  }

  fetchBasicData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/basic.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchFilterData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFilter.filter((d) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  showCompanySetupPage() {
     this.router.navigate(['/admin/company/set-up']);
  }

}
