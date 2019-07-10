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

var _routes = require("./../routes.js");

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
                    description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, "View Campaign")),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, "open campaign"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "create campaign", icon: "add circle", primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }))), this.renderCampaigns()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBSzs7QUFFZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFHZjs7Ozs7Ozs7Ozs7MENBTWUsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSSxBQUNQO2lEQUNFLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0U7QUFERjtxQkFBQSxrQkFDRSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkQsQUFHRCxBQUNFLEFBR0o7MkJBUEosQUFBTyxBQU9HLEFBRWI7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVdkLGFBWGM7aURBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FFSCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFFRztBQUZIO0FBQUEsK0JBRUcsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkgsQUFFRyxBQUNBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxtQkFBa0IsTUFBbEQsQUFBdUQsY0FBYSxTQUFwRTs4QkFBQTtnQ0FMSCxBQUdHLEFBQ0EsQUFDQSxBQUlDO0FBSkQ7dUJBUFAsQUFDSSxBQUNBLEFBU0ksQUFBSyxBQU9oQjs7Ozs7Ozs7Ozs7O3VDQXJDMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUF1QixBLEFBQXZDOztpQ0FBbEI7QSxxREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksYUFBWixBQUF3QjtpRUFDakIsRUFBQyxXQUFELEFBQVcsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpFLEEsQUEwQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmtpdG1hbGhvdHJhL3JlYWN0LXB1YmxpYy9raWNrc3RhcnQifQ==