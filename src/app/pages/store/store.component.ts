import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Cart } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products!: Product[];
  filteredProducts: Product[] = [];
  
  cart: Cart[] = [];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(
		private productsService: ProductsService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit() {
		this.productsService.getProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
        console.log(this.products);
        
      }
    });

    this.sortOptions = [
      { label: 'Más caro', value: '!price' },
      { label: 'Más barato', value: 'price' },
    ];

    this.primengConfig.ripple = true;

  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  filter(event:any){
    this.filteredProducts = this.products.filter((product: { name: string; }) => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(this.products);        
    console.log(event.target.value);    
  }

  addToCart(product: Product) {
    if(!this.cart.some((item) => item.id === product.id)) {
      this.cart.push({id: product.id, name: product.name, price: product.price, quantity: 1})
      console.log('Agregado al carrito');
      
    } else {
      this.cart.forEach((item) => {
        if(item.id === product.id) {
          item.quantity += 1;
          console.log('sumado');
                    
        }
      })
    }

    console.log(this.cart);
    
  }

  clearCart() {
    this.cart = [];
  }
  
  checkItemOnCart(id: string) {
    return this.cart.some((product) => product.id === id);
  }

  quantityOfItemOnCart(id: string) {
    return this.cart.filter((product) => product.id === id).length.toString();
  }

  goToCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.router.navigate(['/Cart']);
  }

}
