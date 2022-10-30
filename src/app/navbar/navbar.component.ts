import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

let sidebarToggle = document.querySelector('newFunction');

sidebarToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.toggle('sb-sidenav-toggled');
  
 });
