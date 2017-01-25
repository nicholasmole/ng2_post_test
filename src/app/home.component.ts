import { Component } from '@angular/core';

@Component({
  template: `
					<nav>
						<a routerLink="/customer" routerLinkActive="active">Show Customer List</a>
						<a>Create New Customer</a>
					</nav>
					`
})
export class HomeComponent {}
