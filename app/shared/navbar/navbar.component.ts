import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const linksConatiner = document.querySelector('.nav-links');
    const burger = document.querySelector('.uil-bars');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger?.addEventListener('click', ()=>{
      linksConatiner?.classList.toggle('nav-active');

      navLinks.forEach((link, index)=> {
        if(link.getAttribute("style")){
          link.setAttribute("style", "");
        } else {
          link.setAttribute("style", "animation: navLinkFade .5s ease forwards " + ((index+1)/7) + "s");
        }
      })
    });
  }

}
