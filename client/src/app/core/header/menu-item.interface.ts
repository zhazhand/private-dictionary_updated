interface Child {
    name: string; 
    path: string;
  }
  
export interface MenuItem {
    name: string; 
    path: string;
    children?: Child[];
  }
  