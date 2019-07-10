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

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("./../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("./../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

var _routes = require("./../routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/components/ContributeForm.js";


var contributeForm = function (_Component) {
    (0, _inherits3.default)(contributeForm, _Component);

    function contributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, contributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = contributeForm.__proto__ || (0, _getPrototypeOf2.default)(contributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            errorMessage: "",
            loading: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("check");
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);

                                console.log("campaign", campaign);
                                _this.setState({ loading: true });
                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;

                                console.log("accounts", accounts);
                                _context.next = 12;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 12:
                                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context["catch"](5);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:
                                _this.setState({ loading: false, value: "" });

                            case 19:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(contributeForm, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, "Amount"), _react2.default.createElement(_semanticUiReact.Input, {
                label: "ether",
                labelPosition: "right",
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "oops", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, "contribute"));
        }
    }]);

    return contributeForm;
}(_react.Component);

exports.default = contributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiY29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUU3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFDRjttQkFBUSxBQUNFLEFBQ047MEJBRkksQUFFUyxBQUNiO3FCLEFBSEksQUFHSTtBQUhKLEFBQ0osaUJBSUosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQ0FBQSxBQUFNLEFBQ0E7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQixBQUNyQzs7d0NBQUEsQUFBUSxJQUFSLEFBQVksWUFBWixBQUF1QixBQUN2QjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUxSLEFBS1AsQUFBYyxBQUFTO2dEQUxoQjtnREFBQTt1Q0FPb0IsY0FBQSxBQUFLLElBUHpCLEFBT29CLEFBQVM7O2lDQUExQjtBQVBILG9EQVFIOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxZQVJULEFBUUgsQUFBdUI7Z0RBUnBCO2dEQVNHLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjswQ0FDM0IsU0FEZ0MsQUFDaEMsQUFBUyxBQUNkOzJDQUFNLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FYbkMsQUFTRyxBQUFtQyxBQUUvQixBQUFrQztBQUZILEFBQ3JDLGlDQURFOztpQ0FJTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFicEMsQUFhSCxBQUE2QztnREFiMUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBZUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsWUFmekIsQUFlSCxBQUFjLEFBQWtCOztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0FqQnRCLEFBaUJQLEFBQWMsQUFBcUI7O2lDQWpCNUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FtQkg7eUJBQ0o7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsMkJBQUEsQUFBQzt1QkFBRCxBQUNNLEFBQ047K0JBRkEsQUFFYyxBQUNkO3VCQUFPLEtBQUEsQUFBSyxNQUhaLEFBR2tCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBSnJEOzhCQUFBO2dDQUxSLEFBQ0ksQUFJSSxBQU9KO0FBUEk7QUFDQSxpQ0FNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7OEJBQWpEO2dDQVpKLEFBWUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWRSLEFBQ0ksQUFhSSxBQUtYOzs7OztBQTdDd0IsQSxBQWdEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fua2l0bWFsaG90cmEvcmVhY3QtcHVibGljL2tpY2tzdGFydCJ9