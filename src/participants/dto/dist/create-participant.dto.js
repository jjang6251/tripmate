"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateParticipantsDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var CreateParticipantsDto = /** @class */ (function () {
    function CreateParticipantsDto() {
    }
    __decorate([
        swagger_1.ApiProperty({
            description: '초대할 유저 이름',
            example: ['yoon123', 'jjang']
        }),
        class_validator_1.IsArray()
    ], CreateParticipantsDto.prototype, "memberIds");
    return CreateParticipantsDto;
}());
exports.CreateParticipantsDto = CreateParticipantsDto;
