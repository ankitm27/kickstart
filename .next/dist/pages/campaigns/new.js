"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("./../../components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("./../../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("./../../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/new.js?entry";


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: "",
            errorMessage: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("check");
                                event.preventDefault();
                                _this.setState({ loading: true });
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;

                                console.log("accounts", accounts);
                                _context.next = 10;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 10:
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false });

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, "create a campaign"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, "minimum contribution"), _react2.default.createElement(_semanticUiReact.Input, {
                label: "wei",
                labelPosition: "right",
                value: this.state.miniumunContribution,
                onChange: function onChange(event) {
                    _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "oops", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, "create"))));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwibWluaXVtdW5Db250cmlidXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNOztBQUM3QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDRjtpQ0FBTSxBQUNrQixBQUNwQjswQkFGRSxBQUVXLEFBQ2I7cUJBSEUsQUFHTSxBO0FBSE4sQUFDRixpQkFLSixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUhSLEFBR1AsQUFBYyxBQUFTO2dEQUhoQjtnREFBQTt1Q0FLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O2lDQUExQjtBQUxDLG9EQU1QOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxZQU5MLEFBTVAsQUFBdUI7Z0RBTmhCO3lEQU9ELEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxxQkFBMUMsQUFDTDswQ0FDUSxTQVRGLEFBT0QsQUFDQSxBQUNHLEFBQVM7QUFEWixBQUNGLGlDQUZFOztpQ0FQQztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFZSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQVp6QixBQVlILEFBQWMsQUFBa0I7O2lDQUVwQztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQWRSLEFBY1AsQUFBYyxBQUFTOztpQ0FkaEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FnQkg7eUJBQ0o7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLHlDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFTLEFBQ2Y7MkJBQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLE1BQUEsQUFBTSxPQUF6QyxBQUFjLEFBQWtDLEFBQ3ZEO0FBTkQ7OEJBQUE7Z0NBSkosQUFJSSxBQU9BO0FBUEE7QUFDSSxnQ0FNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7OEJBQWpEO2dDQVhKLEFBV0ksQUFFQTtBQUZBO2dDQUVBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWpCWixBQUNJLEFBRUEsQUFDSSxBQWFJLEFBT2Y7Ozs7O0FBaERxQixBLEFBbUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fua2l0bWFsaG90cmEvcmVhY3QtcHVibGljL2tpY2tzdGFydCJ9