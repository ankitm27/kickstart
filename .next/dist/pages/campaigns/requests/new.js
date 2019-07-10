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

var _campaign = require("./../../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("./../../../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

var _routes = require("./../../../routes.js");

var _Layout = require("./../../../components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/requests/new.js?entry";


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            description: "",
            recipient: "",
            loading: false,
            errorMessage: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("check121212121212");
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);

                                console.log("campaign", campaign);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                console.log("description", description);
                                console.log("value", value);
                                console.log("recipient", recipient);
                                _this.setState({ loading: true, errorMessage: "" });
                                _context.prev = 9;
                                _context.next = 12;
                                return _web2.default.eth.getAccounts();

                            case 12:
                                accounts = _context.sent;
                                _context.next = 15;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 15:
                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
                                _context.next = 21;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context["catch"](9);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 21:
                                _this.setState({ loading: false });

                            case 22:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[9, 18]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, "description"), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, "value"), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value, onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, "recipient"), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(event) {
                    _this3.setState({ recipient: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "oops", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, "create")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBUyxBQUFNLEFBQVEsQUFBUTs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU8sQUFBVTs7OztBQUVqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0YsQTttQkFBUSxBQUNFLEFBQ047eUJBRkksQUFFUSxBQUNaO3VCQUhJLEFBR00sQUFDVjtxQkFKSSxBQUlJLEFBQ1I7MEJBTEksQSxBQUtTO0FBTFQsQUFDSixpQixBQVVKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjswRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQ0FBQSxBQUFNLEFBQ0E7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQixBQUNyQzs7d0NBQUEsQUFBUSxJQUFSLEFBQVksWUFKTCxBQUlQLEFBQXVCOzhDQUNpQixNQUxqQyxBQUtzQyxPQUx0QyxBQUtDLDBCQUxELEFBS0MsYUFMRCxBQUthLG9CQUxiLEFBS2EsT0FMYixBQUttQix3QkFMbkIsQUFLbUIsQUFDMUI7O3dDQUFBLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMEIsQUFDMUI7d0NBQUEsQUFBUSxJQUFSLEFBQVksU0FBWixBQUFvQixBQUNwQjt3Q0FBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXdCLEFBQ3hCO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLGNBVHJCLEFBU1AsQUFBYyxBQUEyQjtnREFUbEM7Z0RBQUE7dUNBV29CLGNBQUEsQUFBSyxJQVh6QixBQVdvQixBQUFTOztpQ0FBMUI7QUFYSCxvREFBQTtnREFBQTtnREFZRyxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFBK0IsYUFBWSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBNUQsQUFBMkMsQUFBdUIsVUFBbEUsQUFBMkUsV0FBM0UsQUFBc0Y7MENBQ25GLFNBYk4sQUFZRyxBQUEyRixBQUN4RixBQUFTO0FBRCtFLEFBQzdGLGlDQURFOztpQ0FHTjsrQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFmdkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBaUJIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLFlBakJ6QixBQWlCSCxBQUFjLEFBQWtCOztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FuQlIsQUFtQlAsQUFBYyxBQUFTOztpQ0FuQmhCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBc0JIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLGdDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsYUFBYSxVQUFVLHlCQUFTLEFBQ3JEOzJCQUFBLEFBQUssU0FBUyxFQUFDLGFBQWMsTUFBQSxBQUFNLE9BQW5DLEFBQWMsQUFBNEIsQUFDN0M7QUFGRDs4QkFBQTtnQ0FMUixBQUNJLEFBSUksQUFLSjtBQUxJO2lDQUtILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLDBCQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsT0FBTyxVQUFVLHlCQUFTLEFBQy9DOzJCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQTNCLEFBQWMsQUFBb0IsQUFDckM7QUFGRDs4QkFBQTtnQ0FkUixBQVVJLEFBSUksQUFNSjtBQU5JO2lDQU1ILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLDhCQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsV0FBVyxVQUFVLHlCQUFTLEFBQ25EOzJCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsTUFBQSxBQUFNLE9BQS9CLEFBQWMsQUFBd0IsQUFDekM7QUFGRDs4QkFBQTtnQ0F4QlIsQUFvQkksQUFJSSxBQUtKO0FBTEk7aUNBS0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixRQUFPLFNBQVMsS0FBQSxBQUFLLE1BQTNDLEFBQWlEOzhCQUFqRDtnQ0E3QkosQUE2QkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWhDUixBQUNJLEFBQ0EsQUE4QkksQUFNWDs7Ozs7bUhBakU0QixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNQUFNLEEsTUFBbEIsQTtrRUFDRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZVLEEsQUE0RXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5raXRtYWxob3RyYS9yZWFjdC1wdWJsaWMva2lja3N0YXJ0In0=