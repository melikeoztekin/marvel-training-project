import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../../../../../apps/marvel/src/app/shared/services/color.service';
import { RamMemoryService } from '../../../../../apps/marvel/src/app/shared/services/ram-memory.service';
import { InternalMemoryService } from '../../../../../apps/marvel/src/app/shared/services/internal-memory.service';
import { ColorModel } from '../../../../../apps/marvel/src/app/shared/models/color.model';
import { InternalMemoryModel } from '../../../../../apps/marvel/src/app/shared/models/internalMemory.model';
import { RamMemoryModel } from '../../../../../apps/marvel/src/app/shared/models/ramMemory.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import {
  UpdateCartItem,
  UpdateCartItemInputModel,
} from '../../../../../apps/marvel/src/app/actions/cart-summary.action';
import { ProductModel } from '../../../../../apps/marvel/src/app/shared/models/product.model';

@Component({
  selector: 'atom-product-detail-card',
  templateUrl: './atom-product-detail-card.component.html',
  styleUrls: ['./atom-product-detail-card.component.scss'],
})
export class AtomProductDetailCardComponent implements OnInit {
  cartForm = new FormGroup({
    id: new FormControl(0),
    phoneImage: new FormControl(''),
    phoneBrand: new FormControl(''),
    phoneModel: new FormControl(''),
    price: new FormControl(0),
    screenSize: new FormControl(''),
    cameraResolution: new FormControl(''),
    warrantlyType: new FormControl(''),
    internalMemory: new FormControl(''),
    ramMemory: new FormControl(''),
    color: new FormControl(''),
  });
  colors: ColorModel[] = [];
  internalMemories: InternalMemoryModel[] = [];
  ramMemories: RamMemoryModel[] = [];
  @Input() phoneBrand: string = 'prodBrand';
  @Input() phoneModel: string = 'phoneModel';
  @Input() phoneImage: string = './assets/image-placeholder.jpg';
  @Input() screenSize: string = 'X inc and up';
  @Input() cameraResolution: string = 'X-Y MP';
  @Input() warrantlyType: string = 'Turkey Guaranteed';
  @Input() color: string = '';
  @Input() internalMemory: string = '';
  @Input() ramMemory: string = '';
  @Input() id: number = 0;
  @Input() index: number = -1;
  @Input() price: number = 0;
  constructor(
    private _colorService: ColorService,
    private _ramMemoryService: RamMemoryService,
    private _internalMemoryService: InternalMemoryService,
    private fb: FormBuilder,
    private _store: Store
  ) {}
  ngOnInit(): void {
    this.getColor();
    this.getInternalMemory();
    this.getRamMemory();
    this.cartForm.controls.id.setValue(this.id);
    this.cartForm.controls.ramMemory.setValue(this.ramMemory);
    this.cartForm.controls.internalMemory.setValue(this.internalMemory);
    this.cartForm.controls.color.setValue(this.color);
    this.cartForm.controls.phoneImage.setValue(this.phoneImage);
    this.cartForm.controls.phoneBrand.setValue(this.phoneBrand);
    this.cartForm.controls.phoneModel.setValue(this.phoneModel);
    this.cartForm.controls.price.setValue(this.price);
    this.cartForm.controls.screenSize.setValue(this.screenSize);
    this.cartForm.controls.warrantlyType.setValue(this.warrantlyType);
    this.cartForm.controls.cameraResolution.setValue(this.cameraResolution);
  }

  getColor() {
    this._colorService.getList().subscribe((response) => {
      this.colors = response;
      console.log(this.colors);
    });
  }
  getInternalMemory() {
    this._internalMemoryService.getList().subscribe((response) => {
      this.internalMemories = response;
      console.log(this.internalMemories);
    });
  }
  getRamMemory() {
    this._ramMemoryService.getList().subscribe((response) => {
      this.ramMemories = response;
      console.log(this.ramMemories);
    });
  }

  onchangeSelect() {
    this._store.dispatch(
      new UpdateCartItem({
        index: this.index,
        product: this.cartForm.value as ProductModel,
      } as UpdateCartItemInputModel)
    );
  }
}
