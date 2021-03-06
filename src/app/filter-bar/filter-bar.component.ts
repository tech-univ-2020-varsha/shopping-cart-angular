import { Component, OnInit } from "@angular/core";
import { ProductDetailsService } from "../services/product-details.service";
import { Product } from "../shared/Product";
import { ThrowStmt } from "@angular/compiler";
@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.css"]
})
export class FilterBarComponent implements OnInit {
  constructor(private productDetailsService: ProductDetailsService) {}
  productsData: Product[];
  filterTypes;
  selectedItem: string;
  public productsToDisplay: Product[];
  ngOnInit(): void {
    this.productsData = this.productDetailsService.getProducts();
    this.filterTypes = this.productDetailsService.getFilterTypes(
      this.productsData
    );
    this.productsToDisplay = this.productsData;
    this.selectedItem = "All";
  }

  clickFilter = filterType => {
    this.selectedItem = filterType;
    if (filterType === "All") {
      this.productsToDisplay = this.productsData;
      console.log("All", this.productsToDisplay);
    } else {
      const filteredProducts = this.productDetailsService.getFilteredProducts(
        this.productsData,
        filterType
      );
      this.productsToDisplay = filteredProducts;
    }
  };
}
