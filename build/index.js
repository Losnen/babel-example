'use strict';

require('babel-polyfill');

var _suma = require('./suma');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getQuote() {

    return new Promise(function (resolve, reject) {
        (0, _request2.default)('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
            resolve(body);
        });
    });
}

var main = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var quote;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getQuote();

                    case 2:
                        quote = _context.sent;

                        console.log(quote);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function main() {
        return _ref.apply(this, arguments);
    };
}();

var mainSuma = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(a, b) {
        var suma;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _suma.sum)(a, b);

                    case 2:
                        suma = _context2.sent;

                        console.log(suma);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function mainSuma(_x, _x2) {
        return _ref2.apply(this, arguments);
    };
}();

mainSuma(1, 2);
main();