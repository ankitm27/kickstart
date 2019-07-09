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

var _factory = require("../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/index.js?entry";


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: "renderCampaigns",
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, "view campaigns"),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, "open campaign"), _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "create campaign", icon: "add circle", primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), this.renderCampaigns(), _react2.default.createElement("link", { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;

                                console.log("campaigns", campaigns);
                                return _context.abrupt("return", { campaigns: campaigns });

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFLOztBQUVkLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7MENBTWUsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSSxBQUNQO2lEQUFZLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZULEFBRVMsQUFDWjsyQkFISixBQUFPLEFBR0csQUFFYjtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBT2QsYUFQYztpREFPUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVHO0FBRkg7QUFBQSwrQkFFRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSCxBQUVHLEFBQ0Esa0NBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsU0FBeEIsQUFBZ0MsbUJBQWtCLE1BQWxELEFBQXVELGNBQWEsU0FBcEU7OEJBQUE7Z0NBSEgsQUFHRyxBQUVDO0FBRkQ7cUJBSEgsQUFLSSxBQUFLLEFBQ04sMkRBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQVJQLEFBQ0ksQUFDQSxBQU1HLEFBT1Y7QUFQVTs7Ozs7Ozs7Ozs7Ozt1Q0F2QmlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7aUNBQXpEO0EscURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBd0I7aUVBQ2pCLEVBQUMsV0FBRCxBQUFXLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKRSxBLEFBbUM1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5raXRtYWxob3RyYS9yZWFjdC1wdWJsaWMva2lja3N0YXJ0In0=