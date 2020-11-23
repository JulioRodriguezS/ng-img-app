"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoFormComponent = void 0;
var core_1 = require("@angular/core");
var PhotoFormComponent = /** @class */ (function () {
    function PhotoFormComponent() {
    }
    PhotoFormComponent.prototype.ngOnInit = function () {
    };
    PhotoFormComponent.prototype.upImg = function (event) {
        var img = event.currentTarget;
        if (img.files && img.files[0]) {
            this.imgFile = img.files[0];
            console.log(this.imgFile);
            var reader = new FileReader();
            reader.onload = function (e) { };
        }
    };
    PhotoFormComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-form',
            templateUrl: './photo-form.component.html',
            styleUrls: ['./photo-form.component.scss']
        })
    ], PhotoFormComponent);
    return PhotoFormComponent;
}());
exports.PhotoFormComponent = PhotoFormComponent;
