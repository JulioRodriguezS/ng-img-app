"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoListComponent = void 0;
var photo_class_1 = require("./../../photo.class");
var core_1 = require("@angular/core");
var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(photoService) {
        this.photoService = photoService;
        this.listImg = [];
        this.photoSets = new photo_class_1.PhotoPublicInf();
        this.url = this.photoSets.url;
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.getPhotos()
            .subscribe(function (res) { return _this.listImg = res; }, function (err) { return console.log('err: ', err); });
    };
    PhotoListComponent.prototype.selectedCard = function (imgId) {
        console.log(imgId);
    };
    PhotoListComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-list',
            templateUrl: './photo-list.component.html',
            styleUrls: ['./photo-list.component.scss']
        })
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
