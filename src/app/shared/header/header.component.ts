import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
   // document.getElementById("mynav").style.width="0px";
    document.getElementById("submenu").style.display="none"
    document.getElementById("mynav").style.display="none";
    
  }

  navopen()
  {
    var navstyle=document.getElementById("mynav");
    if(navstyle.style.display==="none")
    {
    document.getElementById("mynav").style.display="block";
    document.getElementById("mynav").style.width="220px";
    }
    else{
      document.getElementById("mynav").style.display="none";
      document.getElementById("submenu").style.display="none"
    }
  }
 
  opensubmenu()
  { var submenustyle=document.getElementById("submenu");
  if(submenustyle.style.display==="none")
  {document.getElementById("submenu").style.display="block"}
  else{
    document.getElementById("submenu").style.display="none"
  }
    
  }
  
  

}
