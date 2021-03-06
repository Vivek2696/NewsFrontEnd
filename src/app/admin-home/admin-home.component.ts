import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { INews } from '../Models/News';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditNewsDialogComponent } from '../edit-news-dialog/edit-news-dialog.component';
import { AddNewNewsDialogComponent } from '../add-new-news-dialog/add-new-news-dialog.component';
import { AddNewAdminDialogComponent } from '../add-new-admin-dialog/add-new-admin-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {

  allNews: INews[];
  datasource: MatTableDataSource<INews>;
  displayedColumns: string[] = ['news', 'action'];
  searchValue: String;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe
  ) {
    this.datasource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.fetchAllNews();
  }

  onAddNews(){
    const dialogRef = this.dialog.open(AddNewNewsDialogComponent, {
      width: '840px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.snackBar.open("News Added Successfully!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']})
        this.fetchAllNews();
      }
    });
  }

  fetchAllNews(){
    this.adminService.getAllNews().subscribe(res => {
      if(res){
        this.datasource = new MatTableDataSource(res);
        this.datasource.paginator = this.paginator;
        this.allNews = this.datasource.data;
      }
    })
  }

  onDeleteNews(newsId: string){
    this.adminService.delete(newsId).subscribe(res => {
      if(res){
        this.snackBar.open("Deleted Successfully!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']})
        this.fetchAllNews();
      }
    }, (error) => {
      this.snackBar.open("Error deleting news!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['error-snackbar']})
    })
  }

  onEditNews(news: INews){
    const dialogRef = this.dialog.open(EditNewsDialogComponent, {
      width: '840px',
      data: news
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.snackBar.open("News Edited Successfully!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']})
        this.fetchAllNews();
      }
    });
  }
  
  onAddNewAdmin(){
    const dialogRef = this.dialog.open(AddNewAdminDialogComponent, {
      width: '840px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.snackBar.open("Admin Added Successfully!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']})
        this.fetchAllNews();
      }
    });
  }

  filterBy(value: any){
    let tempList = this.allNews;
    if(value.length > 0){
      let filtered = tempList.filter((item: INews) => { 
        console.log(this.datePipe.transform(item.createdAt, 'MM/dd/yyyy'));
        return (item.title.toLowerCase().includes(value.toLowerCase()) ||
                item.description.toLowerCase().includes(value.toLowerCase()) ||
                this.datePipe.transform(item.createdAt, 'MM/dd/yyyy').includes(value) ||
                item.url.toLocaleLowerCase().includes(value.toLowerCase()))
      })
      this.datasource = new MatTableDataSource(filtered);
      this.datasource.paginator = this.paginator;
    } else{
      this.searchValue = '';
      this.datasource = new MatTableDataSource(this.allNews);
      this.datasource.paginator = this.paginator;
    }
  }
  
}
