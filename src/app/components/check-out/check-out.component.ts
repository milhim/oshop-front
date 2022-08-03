import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
	selector: 'check-out',
	templateUrl: './check-out.component.html',
	styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

	shipping = {
		name: "",
		address: "",
		city: "",

	};
	cart: any;
	productsInCart: any;
	constructor(
		private cartService: ShoppingCartService,
		private orderService: OrderService,
		private router: Router,


	) {

	}
	placeOrder() {
		let order = {
			datePlaced: new Date().getTime(),
			shipping: this.shipping,
			items: this.productsInCart.products.map((i: any) => {
				return {
					product: {
						title: i.title,
						price: i.price,
						imageUrl: i.imageUrl,
						quantity: this.getQuantity(i),
						totalPrice: this.getQuantity(i) * i.price,
					}
				}
			}),
		}
		this.cartService.clearCart().subscribe();
		this.orderService.storeOrder(order).subscribe((res: any) => this.router.navigate(['/order-success', res.id]));


	}
	ngOnInit() {
		this.cartService.getProductsInCart().subscribe(productsInCart => this.productsInCart = productsInCart);
		this.cartService.getCartItems().subscribe(cart => this.cart = cart);
	}
	getQuantity(product: any) {
		if (!this.cart) return 0
		let item: any;
		this.cart.map((result: any) => {
			if (result.product_id === product.id) {
				item = result;
			}
		});
		return item ? item.quantity : 0;
	}
}
