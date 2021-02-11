var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var form = document.getElementById('main-form');
window.addEventListener('load', function () { return removeLoader(); });
//@ts-ignore
function removeLoader() {
    document.querySelector('.ctn-loader').classList.add('ocult');
    setTimeout(function () {
        document.querySelector('.ctn-nav').classList.add('active');
        document.querySelector('.form-ctn').classList.add('active');
        var abs = document.querySelectorAll('.abstract-image');
        for (var i = 0, n = abs.length; i < n; i++)
            abs[i].classList.add('active');
    }, 1900);
    var cards = document.querySelectorAll('.load-card');
    for (var i = 0, n = cards.length; i < n; i++)
        cards[i].classList.add('active');
}
form.addEventListener('submit', validateAndSendForm);
function isEmpty(string) {
    return string === '';
}
function isValidString(string) {
    if (string.includes('|') ||
        string.includes('}') ||
        string.includes('{') ||
        string.includes('$') ||
        string.includes('%') ||
        string.includes('`') ||
        string.includes('<') ||
        string.includes('>')) {
        return false;
    }
    return true;
}
function isEmail(email) {
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}
var Message = /** @class */ (function () {
    function Message(name, email, phoneNumber, message) {
        this.name = name.trim();
        this.email = email.trim();
        this.phoneNumber = typeof phoneNumber === 'string' ? phoneNumber.trim() : null;
        this.message = message.trim();
    }
    Message.prototype.validation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolved, reject) {
                        if (isEmpty(_this.email) ||
                            isEmpty(_this.name) ||
                            isEmpty(_this.message) ||
                            !isValidString(_this.email) ||
                            !isValidString(_this.name) ||
                            !isValidString(_this.message)) {
                            var reply_1 = {
                                isValid: false,
                                message: 'Please fill in the required fields correctly and do not use illegal symbols.'
                            };
                            resolved(reply_1);
                            return;
                        }
                        if (!isEmail(_this.email)) {
                            var reply_2 = {
                                isValid: false,
                                message: 'the email entered is invalid.'
                            };
                            resolved(reply_2);
                            return;
                        }
                        var reply = {
                            isValid: true
                        };
                        resolved(reply);
                    })];
            });
        });
    };
    return Message;
}());
function validateAndSendForm(e) {
    return __awaiter(this, void 0, void 0, function () {
        var message, response, formData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    message = new Message(form.name.value, form.email.value, form.phone.value, form.message.value);
                    return [4 /*yield*/, message.validation()];
                case 1:
                    response = _a.sent();
                    if (!response.isValid) {
                        console.log(response.message);
                        return [2 /*return*/];
                    }
                    console.log('todo correcto !');
                    formData = new FormData();
                    return [2 /*return*/];
            }
        });
    });
}
