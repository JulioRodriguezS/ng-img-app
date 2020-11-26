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
    function PhotoFormComponent(photoService, router) {
        this.photoService = photoService;
        this.router = router;
    }
    PhotoFormComponent.prototype.ngOnInit = function () {
    };
    PhotoFormComponent.prototype.loadImg = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.imgFile = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.processedImg = reader_1.result; };
            reader_1.readAsDataURL(this.imgFile);
        }
    };
    PhotoFormComponent.prototype.upImg = function (title, description, event) {
        var _this = this;
        event.preventDefault();
        this.photoService.createPhoto(title.value, description.value, this.imgFile)
            .subscribe(function (res) { _this.router.navigate(['/photos']); }, function (err) { console.log(err); });
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
